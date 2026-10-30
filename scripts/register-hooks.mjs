/**
 * Installs ts-resolve-hook.mjs. Loaded via `node --import` so the hook is in
 * place before the script's own imports are resolved.
 *
 * `--experimental-loader` would also work but is deprecated and prints a
 * warning on every run.
 */

import { register } from 'node:module';

register('./ts-resolve-hook.mjs', import.meta.url);
