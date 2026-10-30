# personal-francesc-web

Personal resume / portfolio site — a static page built with [Astro](https://astro.build),
designed as an instruction booklet where a twelve-year career reads as a numbered
assembly sequence.

**Live:** https://franzeszperez.github.io/

---

## Quick start

```bash
npm install          # once
npm run dev          # http://localhost:4321
```

Node `>=22.23.4` is required — Astro 7 enforces it and refuses to build on older
versions. It is pinned in `package.json` under `engines`.

| Command           | Does                                                  |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Dev server with hot reload at `localhost:4321`        |
| `npm run check`   | Typecheck `.astro` and `.ts` — **run before pushing** |
| `npm run build`   | Production build into `dist/`                         |
| `npm run preview` | Serve the real `dist/` build locally                  |

---

## The one thing to know

**All content lives in `src/data/resume.ts`. Nothing is hardcoded in markup.**

To add a job, a skill, or a project, edit that file. The components loop over the
data, so you never touch a component to change what the page says. Everything is
typed, so a missing field is a build error rather than a blank space on the page.

Quantities are *derived*, not written down: `src/lib/stats.ts` computes the years
of experience, the number of roles, the apps-shipped count and the longest tenure
from the data itself. Add a job and the "Parts inventory" box updates on its own.
Never type those numbers in by hand — they would drift.

---

## How to make a change

1. `npm run dev`, edit `src/data/resume.ts`, watch it reload.
2. `npm run check` — this is the same gate CI runs, so catching it here is faster.
3. Commit and push to `main`.
4. Wait ~60s. The site is live. Nothing is uploaded by hand.

### Common edits

| I want to…                   | Edit                                                     |
| ---------------------------- | -------------------------------------------------------- |
| Add or change a job          | `experience` in `src/data/resume.ts`                     |
| Add a skill                  | `skills` in `src/data/resume.ts`                         |
| Change the headline or intro | `profile` in `src/data/resume.ts`                         |
| Add the CV download          | drop a PDF at `public/cv.pdf` (see *Known gaps*)          |
| Change a colour or spacing   | `src/styles/global.css` — read `DESIGN.md` first          |
| Move to a custom domain      | `site` in `astro.config.mjs`, plus DNS (see *Deploying*)  |

---

## Layout

```
src/
  data/resume.ts        ALL content — the only file most edits touch
  lib/stats.ts          Derived quantities + the contact-action logic
  lib/dates.ts          Date formatting
  layouts/BaseLayout.astro   <head>, meta/OG tags, skip link, banner slot
  components/           One per section: Rail, Hero, Experience, Skills,
                        Projects, Education, Colophon
  pages/index.astro     Composes the sections
  styles/global.css     The design system — tokens, bricks, print styles
public/                 Served as-is at the site root (favicon, cv.pdf)
.github/workflows/      The deploy pipeline
```

Also tracked, and worth reading before a redesign:

- **`DESIGN.md`** — the visual system: palette, type scale, the colour rules, the
  measured contrast table, and *why* each decision holds. Start here for anything
  visual.
- **`PRODUCT.md`** — who the site is for and what it has to achieve.
- **`.impeccable/`** — design-process records: the surface brief, the finish
  review, and the early sketches. History, not live code.

---

## Design rules that are easy to break by accident

These are enforced by eye, not by a linter, so they are listed here too. Full
reasoning is in `DESIGN.md`.

- **Red (`--new`) means the current role, and nothing else.** It is the single
  focal point of the first viewport; a second red mark competes with it.
- **Yellow (`--action`) means the primary action, and nothing else.** Not for
  hover states, not for utility affordances.
- **White text at display scale only.** It measures 3.83:1 on the ground, which
  is below AA for body copy.
- **Measure in `ch` is miscalibrated here.** Archivo's `0` glyph is 1.29× its own
  average character width, so a `68ch` cap renders ~88 characters. The `--measure`
  token is already corrected for this — if you set a `max-width` in `ch`, divide
  your target by ~1.29.
- **Check print.** The page has a real print stylesheet, and it has broken twice
  from changes that looked fine on screen (a black-on-black panel, an invisible
  white-on-white button). `Cmd+P` after visual changes.

---

## Git setup on this machine

This is worth knowing before you clone the repo somewhere new, because the remote
URL is not the usual one.

This machine has three GitHub accounts, and `github.com` defaults to a **work**
key. Pushing to a personal repo over the default host would authenticate as the
wrong account and be rejected. So `~/.ssh/config` defines a dedicated alias:

```
Host github-personal
  Hostname ssh.github.com
  Port 443
  User git
  IdentityFile ~/.ssh/id_ed25519_personal
  IdentitiesOnly yes
```

The remote therefore reads `git@github-personal:franzeszperez/...` rather than
`git@github.com:...`. `IdentitiesOnly yes` means it fails closed: if the key is
missing it errors out rather than silently falling back to a work identity.

Identity is set **repo-locally** (in `.git/config`, not globally) so it cannot
leak into work repos:

```bash
git config --local user.name  "franzeszperez"
git config --local user.email "45601022+franzeszperez@users.noreply.github.com"
```

On a fresh clone, re-apply those two lines — a global config would otherwise
author commits with a work address.

---

## Deploying

Pushing to `main` is the entire deploy process.

`.github/workflows/deploy.yml` runs on GitHub's machines: `npm ci` installs the
exact locked versions, `npm run check` gates the build, `npm run build` produces
`dist/`, and the result is published to GitHub Pages. `dist/` is gitignored and
never committed — the built output is always generated, never stored.

If a deploy fails, the **Actions** tab on GitHub has the logs. A red run means
nothing was published, so the live site stays on the last good build.

### Why the repo is named `franzeszperez.github.io`

GitHub serves the one repo named `<username>.github.io` at the domain root. Any
other name serves under a subpath (`/repo-name/`) and would need `base` set in
`astro.config.mjs`, with every asset path depending on that prefix.

### Moving to a custom domain

1. Buy the domain. GitHub charges nothing for this; you pay the registrar.
2. In **Settings → Pages → Custom domain**, enter it. This writes a `CNAME` file
   to the repo.
3. At the registrar, point DNS at GitHub: four `A` records to `185.199.108.153`,
   `185.199.109.153`, `185.199.110.153`, `185.199.111.153` — or a `CNAME` to
   `franzeszperez.github.io` if using a subdomain like `www`.
4. Tick **Enforce HTTPS** once the certificate is issued (can take an hour).
5. Change `site` in `astro.config.mjs` to the new URL and push.

Step 5 matters: `site` is what makes canonical and Open Graph tags absolute. If
it is stale, shared links and search results point at the old address.

---

## Privacy — deliberate, not an oversight

**No email address and no phone number exist anywhere in this repo.** Not unused,
not commented out — absent. A contact address on a public page is harvested by
scrapers within days.

Contact runs through LinkedIn instead. `primaryAction()` in `src/lib/stats.ts`
derives the single yellow call-to-action: a `mailto:` if `profile.email` is set,
otherwise the first profile link. Setting `email` in `resume.ts` switches every
action back to email and restores the colophon's email row — no markup change
needed.

Commits are authored with a GitHub noreply alias for the same reason: a real
address in public commit metadata is just as scrapeable as one on the page.

`Resume*.docx` and `Resume*.pdf` are gitignored — the source documents contain
contact details that the site deliberately omits.

---

## Known gaps

- **`public/cv.pdf` does not exist**, so both "Download CV" buttons 404. Add the
  PDF to fix. Use a version without the phone number and street address, for
  consistency with the above.
- **No `og:image`**, so links shared on LinkedIn or Slack have no preview image.
- **Commit signing is configured but unverified** — `gpg.ssh.allowedSignersFile`
  is unset locally, and the signing key needs adding to GitHub as a *signing* key
  (separate list from authentication keys) for the "Verified" badge.
- **Education entries carry no dates**, and all app-store URLs in `resume.ts` are
  `null` — the links render as plain text until real URLs are added.
- **The Fickl and Eventbase date ranges overlap** in the source resume. `careerYears()`
  measures the career *span* rather than summing roles, so the total is not
  double-counted — but the two entries still read as concurrent on the page.
