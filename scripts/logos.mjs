/**
 * Converts full-colour app icons into the booklet's ink monochrome marks.
 *
 *   drop originals in  assets/logos-src/   (any PNG/JPG/WEBP, any size)
 *   npm run logos
 *   → writes public/logos/<same-name>.png
 *
 * Why convert at all: DESIGN.md spends the palette on exactly two accents and
 * rejects rounded playful shapes, so eight full-colour Play Store icons — which
 * are literally rounded squares with gradients — would break both rules at
 * once. Flattened to single-colour ink they read as stamped plate labels and the
 * page keeps its discipline. The logos are still *information* (recognisable
 * client brands), which is why they earn a place at all.
 *
 * The conversion, in order:
 *   1. flatten onto white — store icons ship with transparent corners, and
 *      those would otherwise composite against the blue ground mid-tile
 *   2. greyscale, then normalise so a washed-out mark still reaches full ink
 *   3. linear() to crush midtones toward ink: most of these marks are a logo on
 *      a saturated field, and a plain greyscale leaves that field as mud
 *   4. trim the uniform border the store icons pad themselves with, so marks
 *      optically match in size rather than matching in canvas
 *   5. contain onto a square white canvas at 2x the render size, for retina
 *
 * Re-runnable and idempotent: same input bytes produce the same output bytes.
 */

import { readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, 'assets', 'logos-src');
const OUT = join(root, 'public', 'logos');

/** Rendered at 44px in the panel; 2x for retina. */
const SIZE = 88;

/** Whites this light are treated as padding and trimmed. */
const TRIM_THRESHOLD = 12;

const INPUT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif', '.tiff']);

if (!existsSync(SRC)) {
	console.error(
		`No source directory at ${SRC}\n` +
			'Create it and drop the original app icons in, then re-run `npm run logos`.',
	);
	process.exit(1);
}

const files = readdirSync(SRC).filter((f) => INPUT.has(extname(f).toLowerCase()));

if (files.length === 0) {
	console.error(`No images found in ${SRC} — nothing to convert.`);
	process.exit(1);
}

mkdirSync(OUT, { recursive: true });

for (const file of files) {
	/* Output is always .png and always lowercase: resume.ts references these by
	   name, and a case difference is a 404 on a case-sensitive host even when it
	   works locally on macOS. */
	const name = `${basename(file, extname(file)).toLowerCase()}.png`;

	await sharp(join(SRC, file))
		.flatten({ background: '#ffffff' })
		.greyscale()
		.normalise()
		/* a=1.35 steepens contrast, b=-28 pulls the whole range toward ink.
		   Tuned so a mid-grey brand field lands near-black while the mark's own
		   white counters survive — the point is a readable silhouette. */
		.linear(1.35, -28)
		.trim({ threshold: TRIM_THRESHOLD })
		.resize(SIZE, SIZE, {
			fit: 'contain',
			background: '#ffffff',
		})
		.png({ compressionLevel: 9, palette: true })
		.toFile(join(OUT, name));

	console.log(`  ${file}  →  public/logos/${name}`);
}

console.log(
	`\n${files.length} logo${files.length === 1 ? '' : 's'} written at ${SIZE}px.\n` +
		'Reference them by filename in the `logo` field of each app in src/data/resume.ts.',
);
