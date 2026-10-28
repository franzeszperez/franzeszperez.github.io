# personal-francesc-web

Personal resume / portfolio site. Static, built with [Astro](https://astro.build).

## Requirements

Node `>=22.23.4` (Astro 7 enforces this and will refuse to build on older versions).

## Commands

| Command           | Does                                                 |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Dev server with hot reload at `localhost:4321`       |
| `npm run build`   | Production build into `dist/`                        |
| `npm run preview` | Serve `dist/` locally, to check the real build       |
| `npm run check`   | Typecheck `.astro` and `.ts` files                   |

## Where things live

```
src/
  data/resume.ts        All content — edit this to update the site
  lib/dates.ts          Date formatting helpers
  layouts/BaseLayout.astro   <head>, meta tags, skip link
  components/           One component per resume section
  pages/index.astro     Composes the sections into the page
  styles/global.css     Baseline styles
public/                 Static files served as-is (favicon, CV PDF, images)
```

**To update your resume, edit `src/data/resume.ts` only.** The components loop over
that data, so adding a job or a skill never means touching markup.

## Still to do

- Fill in the `TODO` placeholders in `src/data/resume.ts`
- Decide on hosting, then set `site` (and possibly `base`) in `astro.config.mjs`
- Visual design — current styles are a deliberately plain baseline
- Add a favicon and an Open Graph preview image to `public/`
