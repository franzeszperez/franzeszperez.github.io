// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// The public URL. Canonical links and Open Graph tags need an absolute
	// address, so this has to be the real host rather than a relative path.
	//
	// No `base` is set: the repo is named franzeszperez.github.io so GitHub
	// serves it at the domain root rather than under /repo-name, and the custom
	// domain in public/CNAME is likewise served at its root.
	//
	// This must stay in sync with public/CNAME. If they disagree, the site still
	// builds and still serves — but every canonical link and Open Graph URL
	// points at the wrong host, which is the kind of breakage nothing visibly
	// reports.
	site: 'https://francescperez.dev',
});
