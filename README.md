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
| `npm run og`      | Regenerate `public/og.png`, the link-preview card      |

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

The share card follows the same rule: `npm run og` reads `resume.ts` and renders
`public/og.png`, so the name, headline and counts on the preview image cannot
disagree with the page. It is the one derived artefact that is *committed* rather
than built on demand, because scrapers fetch it as a static file.

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
| Change the share preview     | `npm run og` after editing `profile` — commit the PNG     |
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
scripts/og-image.mjs    Renders the share card from resume.ts (`npm run og`)
public/                 Served as-is at the site root (favicon, cv.pdf, og.png)
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
git config --local user.name       "franzeszperez"
git config --local user.email      "45601022+franzeszperez@users.noreply.github.com"
git config --local user.signingkey "$HOME/.ssh/id_ed25519_personal.pub"
git config --local gpg.format      ssh
git config --local commit.gpgsign  true
git config --local tag.gpgsign     true
```

On a fresh clone, re-apply all six — the global config points at the **work**
identity and the work signing key, so without these a commit here is authored
*and signed* as the wrong person.

### Commit signing

Commits are signed with the personal SSH key. For GitHub to show a **Verified**
badge, three things have to agree — and a mismatch in any one of them silently
downgrades the badge to "Unverified" rather than erroring:

1. `user.signingkey` — the **personal** key, set repo-locally as above.
2. `~/.ssh/allowed_signers` — which keys are trusted, for *local* verification.
   It is pointed at globally:

   ```bash
   git config --global gpg.ssh.allowedSignersFile "$HOME/.ssh/allowed_signers"
   ```

   Each line is `<email> <key-type> <key>`, and **the email must match the
   commit's author email** — the noreply alias, not a real address. This file is
   verification-only; it never decides which key signs, so keeping it global and
   listing both the personal and work keys is safe.

3. The key is registered on GitHub as a **signing** key. See below — this is a
   separate list from authentication keys, and adding it to one does not add it
   to the other.

To check locally: `git log --show-signature -1`, or `git log --format='%h %G?'`
for a quick column — `G` is good, `N` is unsigned. If git errors with
`gpg.ssh.allowedSignersFile needs to be configured`, step 2 is missing; the
commits themselves are fine, only verification is unconfigured.

### What has to be done on GitHub

Local config gets you a signature; only GitHub can turn it into a **Verified**
badge, and it needs the public key on the `franzeszperez` account:

1. Copy the personal public key:

   ```bash
   pbcopy < ~/.ssh/id_ed25519_personal.pub
   ```

2. Go to **[Settings → SSH and GPG keys](https://github.com/settings/keys)**,
   signed in as `franzeszperez` (not the work account).
3. Click **New SSH key**, and set **Key type** to **Signing Key**. This is the
   part that is easy to miss: the page has two lists, *Authentication keys* and
   *Signing keys*, and the dropdown defaults to Authentication. The same key can
   be in both, but each has to be added separately — pushing works with the
   authentication entry alone, so a missing signing entry shows up only as a
   permanently "Unverified" badge.
4. Paste, give it a title, save.
5. Push a commit and check the commit list — it should now read **Verified**.

Two things that make a correct key still show Unverified:

- **The author email is not on the account.** GitHub verifies the signature
  *and* that the author address belongs to you. The noreply alias
  `45601022+…@users.noreply.github.com` always qualifies, which is the other
  reason this repo uses it.
- **Vigilant mode.** If **Settings → SSH and GPG keys → Vigilant mode** is on,
  every unsigned commit is flagged **Unverified** rather than left blank. It is
  worth enabling once signing works, and misleading before that.

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

- **The signing key is not yet on GitHub.** Local signing and local verification
  both work now, but the **Verified** badge needs the public key added to the
  account as a *signing* key — see *What has to be done on GitHub*. This is the
  only open item that cannot be done from the command line.
- **`og:image` is cached by every scraper.** The card is live, but LinkedIn in
  particular holds its copy for weeks. After changing it, re-scrape the URL in
  the [Post Inspector](https://www.linkedin.com/post-inspector/) — otherwise a
  shared link keeps showing the old image.
- **`npm run og` needs Chrome installed**, and is not part of `npm run build`:
  the deploy runner has no browser, so the PNG is committed rather than
  generated in CI. Regenerate and commit it by hand after editing `profile`.
- **Education entries carry no dates**, and all app-store URLs in `resume.ts` are
  `null` — the links render as plain text until real URLs are added.
- **The Fickl and Eventbase date ranges overlap** in the source resume. `careerYears()`
  measures the career *span* rather than summing roles, so the total is not
  double-counted — but the two entries still read as concurrent on the page.
