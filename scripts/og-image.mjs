/**
 * Generates public/og.png — the preview card shown when the site is shared on
 * LinkedIn, Slack, iMessage or anywhere else that reads Open Graph tags.
 *
 * It is generated rather than drawn by hand for the same reason the parts
 * inventory is derived: the name, headline and counts come straight out of
 * resume.ts, so the card cannot drift from the page. Add a job and re-run.
 *
 *   npm run og
 *
 * How it works: this builds a 1200x630 HTML page in the booklet's own
 * vocabulary, then screenshots it with headless Chrome. Chrome is used instead
 * of an SVG rasteriser because the card has to render in real Archivo at a
 * real variable width — an SVG converter would substitute a fallback face and
 * the condensed display type is most of the design.
 */

import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { profile, experience } from '../src/data/resume.ts';
import { careerYears, currentRole, shippedApps } from '../src/lib/stats.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'public', 'og.png');

/* Open Graph's own recommended size. LinkedIn, Slack and iMessage all crop to
   roughly 1.91:1, so anything important stays clear of the outer edge. */
const WIDTH = 1200;
const HEIGHT = 630;

/* Chrome, wherever it happens to live. */
const CHROME_CANDIDATES = [
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
	'/Applications/Chromium.app/Contents/MacOS/Chromium',
	'/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
	'/usr/bin/google-chrome',
	'/usr/bin/chromium',
];

function findChrome() {
	for (const path of CHROME_CANDIDATES) {
		try {
			readFileSync(path);
			return path;
		} catch {
			/* next candidate */
		}
	}
	throw new Error(
		`No Chrome/Chromium found. Looked in:\n  ${CHROME_CANDIDATES.join('\n  ')}\n` +
			'Install Chrome, or add its path to CHROME_CANDIDATES in scripts/og-image.mjs.',
	);
}

/* The font is inlined as base64 rather than linked, because headless Chrome
   loading a file:// page will not fetch a sibling file:// font without
   --allow-file-access-from-files, and an unembedded font fails silently: the
   screenshot renders in Helvetica and still looks plausible. */
function inlineFont() {
	const woff2 = readFileSync(
		join(root, 'node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2'),
	);
	return `data:font/woff2;base64,${woff2.toString('base64')}`;
}

/* Same tokens as src/styles/global.css. Duplicated deliberately: the card is a
   standalone document, and importing the site's stylesheet would drag in the
   whole responsive system for a fixed 1200x630 canvas. If --ground or --new
   changes there, change it here too. */
function html() {
	const years = careerYears();
	const apps = shippedApps().length;

	return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
	@font-face {
		font-family: 'Archivo Variable';
		src: url('${inlineFont()}') format('woff2-variations');
		font-weight: 100 900;
		font-stretch: 62% 125%;
	}

	:root {
		--ground: #1e8ac4;
		--ink: #101010;
		--new: #d01217;
		--paper: #ffffff;
		--ghost: rgba(255, 255, 255, 0.26);
		--ink-soft: #0f3346;
		--stud: 40px;
		--keyline: 4px;
	}

	* { box-sizing: border-box; margin: 0; }

	body {
		width: ${WIDTH}px;
		height: ${HEIGHT}px;
		overflow: hidden;
		background-color: var(--ground);
		background-image: radial-gradient(
			circle at 50% 50%,
			rgba(255, 255, 255, 0.17) 3.5px,
			transparent 4px
		);
		background-size: var(--stud) var(--stud);
		color: var(--ink);
		font-family: 'Archivo Variable', Arial, sans-serif;
		font-variation-settings: 'wdth' 100;
		-webkit-font-smoothing: antialiased;
	}

	/* The sheet edge. On the page this is the viewport; here it has to be
	   drawn, or the card bleeds into whatever surface it is shared onto. */
	.card {
		width: 100%;
		height: 100%;
		border: 10px solid var(--ink);
		padding: 44px 52px 40px;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}

	/* The running head, flattened to one line. */
	.rail {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding-bottom: 14px;
		border-bottom: var(--keyline) solid var(--ink);
		font-size: 15px;
		font-weight: 800;
		letter-spacing: 0.3em;
		text-transform: uppercase;
	}

	.body {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 40px;
		align-items: center;
	}

	h1 {
		font-variation-settings: 'wdth' 82;
		font-weight: 800;
		font-size: 112px;
		line-height: 0.88;
		letter-spacing: -0.03em;
		text-transform: uppercase;
	}

	.headline {
		margin-top: 20px;
		font-size: 25px;
		font-weight: 700;
		letter-spacing: 0.01em;
		color: var(--ink-soft);
	}

	.where {
		margin-top: 8px;
		font-size: 17px;
		font-weight: 700;
		letter-spacing: 0.17em;
		text-transform: uppercase;
		color: var(--ink-soft);
	}

	/* The arriving piece: red, and red is the current role only. */
	.brick {
		position: relative;
		display: inline-flex;
		gap: 18px;
		align-items: baseline;
		margin-top: 34px;
		padding: 14px 22px;
		border: var(--keyline) solid var(--ink);
		border-radius: 4px;
		background: var(--new);
		color: var(--paper);
		box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.26);
		font-size: 19px;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.brick::before {
		content: '';
		position: absolute;
		top: calc(var(--keyline) * -1 - 7px);
		left: 14px;
		right: 14px;
		height: 11px;
		border: var(--keyline) solid var(--ink);
		border-bottom: none;
		border-radius: 5px 5px 0 0;
		background: inherit;
	}

	/* The parts inventory, trimmed to the three quantities that read at
	   thumbnail size. Dotted leaders, as on the page. */
	.callout {
		width: 310px;
		padding: 24px;
		background: var(--paper);
		border: var(--keyline) solid var(--ink);
	}

	.callout__label {
		padding-bottom: 11px;
		border-bottom: 3px solid var(--ink);
		font-size: 13px;
		font-weight: 800;
		letter-spacing: 0.24em;
		text-transform: uppercase;
	}

	.leader {
		display: flex;
		align-items: baseline;
		gap: 10px;
		padding: 11px 0;
		border-bottom: 1px dotted rgba(16, 16, 16, 0.45);
		font-size: 17px;
	}

	.leader:last-child { border-bottom: none; }
	.leader__name { font-weight: 600; }
	.leader__fill {
		flex: 1;
		border-bottom: 1px dotted rgba(16, 16, 16, 0.5);
		transform: translateY(-3px);
	}
	.leader__qty {
		font-weight: 800;
		font-variant-numeric: tabular-nums;
		font-size: 21px;
	}

	.foot {
		padding-top: 16px;
		border-top: var(--keyline) solid var(--ink);
		display: flex;
		justify-content: space-between;
		font-size: 15px;
		font-weight: 800;
		letter-spacing: 0.2em;
		text-transform: uppercase;
	}
</style>
</head>
<body>
	<div class="card">
		<div class="rail">
			<span>${profile.name} · Build Instructions</span>
			<span>${experience.length} steps · ${years} yrs</span>
		</div>

		<div class="body">
			<div>
				<h1>Android<br />+ Backend</h1>
				<div class="headline">${profile.headline}</div>
				<div class="where">${profile.location}</div>
				<div class="brick">
					<span>Now · ${currentRole.company}</span>
					<span>${currentRole.start.split('-')[0]}</span>
				</div>
			</div>

			<div class="callout">
				<div class="callout__label">Parts inventory</div>
				<div class="leader">
					<span class="leader__name">Years shipping</span>
					<span class="leader__fill"></span>
					<span class="leader__qty">${years}</span>
				</div>
				<div class="leader">
					<span class="leader__name">Roles assembled</span>
					<span class="leader__fill"></span>
					<span class="leader__qty">${experience.length}</span>
				</div>
				<div class="leader">
					<span class="leader__name">Apps shipped</span>
					<span class="leader__fill"></span>
					<span class="leader__qty">${apps}</span>
				</div>
			</div>
		</div>

		<div class="foot">
			<span>Kotlin · Compose · Spring Boot</span>
			<span>franzeszperez.github.io</span>
		</div>
	</div>
</body>
</html>`;
}

const work = mkdtempSync(join(tmpdir(), 'og-'));
try {
	const page = join(work, 'card.html');
	writeFileSync(page, html());

	execFileSync(
		findChrome(),
		[
			'--headless',
			'--disable-gpu',
			'--hide-scrollbars',
			'--force-device-scale-factor=1',
			`--window-size=${WIDTH},${HEIGHT}`,
			`--screenshot=${OUT}`,
			// Chrome needs a writable profile dir; without one it may reuse (and
			// fight over) the user's real Chrome profile.
			`--user-data-dir=${join(work, 'profile')}`,
			`file://${page}`,
		],
		{ stdio: ['ignore', 'ignore', 'inherit'] },
	);

	const bytes = readFileSync(OUT).length;
	console.log(`og.png written — ${WIDTH}x${HEIGHT}, ${(bytes / 1024).toFixed(0)} kB`);
} finally {
	rmSync(work, { recursive: true, force: true });
}
