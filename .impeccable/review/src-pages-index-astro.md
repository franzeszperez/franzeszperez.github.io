---
version: 1
surface: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
direction: "seed:ddbcb80e8ce5e4da"
build_path: "code"
disposition: "fix-then-pass"
reviewed: "2026-10-27"
---

# Finish review — Build Instructions

Code-led build, so there is no approved comp and no phase state machine; the
decision-round sketch rode along as the critique reference only. The review
returned `fix` with six must-fix items. All six were fixed and re-verified, and
one further defect was found while verifying the print fix. This record is the
verdict the direction contract's FINISH line requires.

## Fixed

1. **Print rendered the current role black-on-black.** `@media print` flattens
   `--new` to `#000` while `.brick--new` kept `background: var(--new)` and the
   print block sets `color: #000` — the focal element printed as an empty black
   slab. Now a white fill with a heavy black keyline; the rule carries the
   emphasis instead of the fill.
2. **The signature motion never played.** `.seats` was only on the four hero
   assembly bricks, which are above the fold at load, so a `view()`-driven
   `entry 8% → entry 62%` range was already finished before any scroll
   (measured `playState: finished, progress: 1`). Moved to `.step-row`, which
   genuinely enters from below. Verified mid-flight at progress 0.62 →
   `translate(-10.5px, -8.3px)` at 0.69 opacity, landing at identity.
3. **The hero assembly stacked oldest-first,** contradicting FIRST VIEWPORT
   ("stepping up and right", new piece "at the upper right") and leaving named
   risk 1 unanswered in the one viewport that matters. Re-ordered in the DOM so
   the newest sits highest and most indented, which also fixes screen-reader
   order: the read now starts at today's role, not 2014.
4. **Red was not reserved for the current role.** `.leader__qty` painted all six
   PARTS INVENTORY quantities `#d01217` — six red marks in the first viewport
   competing with the single red brick that owns the colour. Now `--ink`; weight
   800 and the dotted leader already carried them.
5. **At 390px the primary action sat ~300px below the fold,** breaking both the
   FIRST VIEWPORT line and the STORY promise that the visitor emails "without
   scrolling". The inventory is now hoisted above the assembly at ≤860px via
   `display: contents` + `order`, which changes paint order only — the DOM
   reading order still runs claim → assembly → inventory. Verified above the
   fold at 390, 1024 and 1440.
6. **The skip link skipped nothing.** `.skip` targets `#main`, but the sticky
   rail — site name plus nav — lived *inside* `main`, so activating it landed
   above the navigation it exists to bypass, and no banner landmark existed.
   `Rail` is now a `<header>` rendered into a named slot outside `main`.

Also fixed from the same review: the skip link no longer spends the reserved
action yellow on a utility affordance (paper stock with an ink keyline), and
`ol.steps` carries `reversed` so its semantic numbering agrees with the 05→01
numerals that are drawn.

**Found while verifying fix 1:** the first assembly step printed washed out to
~18% opacity. Paper never scrolls, so a scroll-driven animation prints frozen at
its start frame. `.seats` is now hard-disabled in `@media print`.

## Contact rewiring — after the review

The owner then asked that no private email or phone be published and that GitHub
be left out. Both fields are now absent from `src/data/resume.ts` entirely, not
merely unrendered, and `links` holds the one real LinkedIn URL.

Rather than hardcode LinkedIn into three places, `primaryAction()` in
`src/lib/stats.ts` derives the single yellow action: a `mailto:` if
`profile.email` is set, otherwise the first profile link. The hero action and
the colophon action both read it, and the colophon's plate renders its email row
only when an address exists. The hero's link row filters out whatever the action
already points at, so LinkedIn is not offered twice in one call-out box. Setting
`email` back in `resume.ts` restores the mailto everywhere with no markup change.

Verified in the built HTML, not just the source: no `mailto:`, no phone, no
address, no literal `TODO`. The action reads CONNECT ON LINKEDIN above the fold
at 1440 and 390, and the plate's last row is the LinkedIn URL.

**Found while verifying that on paper:** the colophon's Download CV button
printed invisible. Its inverted variant keeps `color` and `border-color:
var(--paper)` for the ink panel, but `@media print` flips that panel to white
stock — white text on a white keyline. A download is meaningless on paper
anyway, so it is now hidden in print; the plate below still carries a reachable
address.

## Deliberate keeps

- **`.step-no` interior fill at 2.99:1.** The numeral is 80–158px with a 4–5px
  ink stroke at 4.97:1 and `paint-order: stroke fill` — the stroke *is* the
  glyph and the interior white is not the legibility path. A detector samples
  the fill against the body gradient and cannot resolve this. (As of the final
  pass the advisory no longer fires at all, because the `--measure`
  recalibration narrowed the column away from the sampled region.)
- **The hard offset shadow** on the arriving brick and the primary action. The
  chosen world specifies it natively; DESIGN.md fences it with a two-item
  licence so it cannot spread.

## Not addressed — content and config, not design

Recorded so they are not mistaken for finished work: `public/cv.pdf` does not
exist, so both Download CV links 404; education entries carry no dates; all
app-store URLs are `null`; hosting is undecided, so `site`/`base` stay commented
in `astro.config.mjs`; the Fickl/Eventbase date overlap is noted in PRODUCT.md.

No email and no phone appear anywhere in the data, by the owner's decision — a
public page is scraped by spam bots within days. GitHub is left out for now too.
These are intentional constraints, not omissions.

## Final verification

- `impeccable detect http://localhost:4321` → `[]` (zero anti-patterns, zero
  advisories)
- `npm run check` → 0 errors, 0 warnings, 0 hints across 14 files
- `npm run build` → clean, one page, zero JS shipped
- WCAG AA on every real composite pair, translucent stock flattened over its
  true backdrop before measuring
- Looked at 1440×900, 1024×900, 390×844 and the print path
