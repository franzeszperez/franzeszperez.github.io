// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// The public URL. Canonical links and Open Graph tags need an absolute
	// address, so this has to be the real host rather than a relative path.
	//
	// No `base` is set, and that is the whole reason the repo is named
	// franzeszperez.github.io: GitHub serves that one repo at the domain root
	// instead of under /repo-name. When a custom domain arrives, this is the
	// only line that changes.
	site: 'https://franzeszperez.github.io',
});
