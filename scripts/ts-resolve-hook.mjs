/**
 * Lets plain Node import the site's `.ts` modules.
 *
 * Node 22 strips TypeScript types on its own, but it does not do Astro's
 * extensionless resolution: `src/lib/stats.ts` imports '../data/resume', and
 * Node wants '../data/resume.ts'. This hook retries a failed specifier with
 * '.ts' appended, which is enough for the handful of files scripts/ touches.
 *
 * Only used by scripts/ (see `npm run og`). The site build goes through Astro
 * and never loads this.
 */

export async function resolve(specifier, context, next) {
	try {
		return await next(specifier, context);
	} catch (error) {
		if (specifier.startsWith('.') && !specifier.endsWith('.ts')) {
			return next(`${specifier}.ts`, context);
		}
		throw error;
	}
}
