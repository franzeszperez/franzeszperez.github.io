---
name: Francesc Pérez — Build Instructions
description: An instruction-booklet resume where a twelve-year career is a numbered assembly sequence on a sky-blue stud ground.
colors:
  ground: "#1e8ac4"
  ink: "#101010"
  new: "#d01217"
  action: "#f2c230"
  paper: "#ffffff"
  ghost: "rgba(255, 255, 255, 0.26)"
  ghost-line: "rgba(16, 16, 16, 0.5)"
  ink-soft: "#0f3346"
  paper-soft: "#3d5a6b"
  bag-stock: "rgba(255, 255, 255, 0.3)"
  chip-fill: "rgba(30, 138, 196, 0.14)"
  colophon-body: "#b9d6e8"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.6rem, 6.4vw, 5.6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 82"
  numeral:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(4.4rem, 11vw, 10.5rem)"
    fontWeight: 900
    lineHeight: 0.76
    letterSpacing: "-0.05em"
    fontVariation: "'wdth' 76"
  headline:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.8rem, 3.4vw, 2.9rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.015em"
  body:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: "normal"
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 800
    lineHeight: 1.55
    letterSpacing: "0.18em"
rounded:
  none: "0"
  brick: "4px"
  stud-cap: "5px 5px 0 0"
spacing:
  stud: "40px"
  half-stud: "20px"
  quarter-stud: "10px"
  keyline: "4px"
  keyline-thin: "2px"
components:
  action-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.2rem"
    typography: "{typography.label}"
  action-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.2rem"
    typography: "{typography.label}"
  action-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  brick-seated:
    backgroundColor: "{colors.ghost}"
    textColor: "{colors.ink}"
    rounded: "{rounded.brick}"
    padding: "0.85rem 1.1rem"
  brick-new:
    backgroundColor: "{colors.new}"
    textColor: "{colors.paper}"
    rounded: "{rounded.brick}"
    padding: "0.85rem 1.1rem"
  callout:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.1rem, 1.8vw, 1.5rem)"
  chip:
    backgroundColor: "{colors.chip-fill}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.3rem 0.58rem"
  bag:
    backgroundColor: "{colors.bag-stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.15rem 1.2rem 1.25rem"
  stamp:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.3rem 1.35rem"
  rail:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.85rem clamp(1rem, 3.4vw, 56px)"
    typography: "{typography.label}"
  colophon:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 3.4vw, 52px)"
---

# Design System: Francesc Pérez — Build Instructions

## Overview

**Creative North Star: "The Build Instructions"**

The page is a printed assembly booklet, not a website dressed as one. Sky-blue instruction stock runs edge to edge carrying a radial stud grid on a 40px module, and that module rules every measure on the page. Ink is a keyline at 4px — drawn, not styled: there are no soft borders, no tinted dividers, no 1px hairlines doing the work of a rule. The only container the world admits is the brick, with its studs drawn above its top edge, and the only decoration is information: numerals, quantities, dotted leaders, one arrow.

The register is technical manual, held deliberately clear of toy packaging. Heavy condensed grotesque caps, real measured quantities derived from data rather than written by hand, and a palette of exactly two accents spent on exactly two jobs. The sequence runs backwards — step 05 at the top, counting down to 01 — because a recruiter wants today's role first and the assembly metaphor still carries real information read that way. Density is high and unapologetic: the first viewport delivers the claim, the whole twelve-year stack, six derived quantities and the primary action without a scroll.

Confirmed rejections: nothing on this page is a card in a grid. No centred hero over a role subline with two buttons. No eyebrow or kicker above any heading — section heads carry themselves. No rounded playful shapes, no primary-colour confetti, no studs used decoratively where they are not structural. No glyph bullets; the one arrow in the build is inline SVG and the highlight markers are drawn studs.

**Key Characteristics:**
- A 40px stud module that governs indent, gutter, padding and section rhythm
- 4px keyline ink; radius 0 everywhere except 4px on bricks
- Two reserved accents, each spent on exactly one job
- Heavy condensed Archivo caps across every heading and label
- Quantities derived from data, never typed into markup
- One authored motion moment, scroll-driven, zero JavaScript shipped

## Colors

Printed-booklet stock: one saturated ground, one near-black ink, and two accents held under strict reservation.

### Primary
- **Instruction Sky** (`{colors.ground}`): the page ground, edge to edge, carrying the stud grid as its own background-image rather than a texture laid over it. Also the rail's fill, so the running head reads as part of the sheet and not a bar sitting on it. Ink on this ground measures 4.97:1.

### Secondary
- **Arriving Red** (`{colors.new}`): the current role, and nothing else. It appears on exactly three surfaces in the whole build — the arriving brick in the hero assembly, the `Current` badge on step 05, and the keyline of the current step's `Parts used` panel. White on it measures 5.55:1. It is also the hover colour for inline links in the inventory and in app lists, where it reads as "this is the live part".

### Tertiary
- **Action Yellow** (`{colors.action}`): the primary action, and nothing else. Two instances exist — the hero inventory's contact button and the colophon's — plus the focus ring colour on the ink panel, where ink-on-ink would vanish. Ink on it measures 11.36:1.

### Neutral
- **Keyline Black** (`{colors.ink}`): all ink — body text, every border, the colophon's full-bleed panel fill, the numeral stroke, the focus outline.
- **Booklet Stock** (`{colors.paper}`): call-out boxes, stamps, project spreads, the skip link, secondary action fill.
- **Seated Ghost** (`{colors.ghost}`): the fill of an already-assembled brick. Ink on the resulting composite measures 7.22:1.
- **Ghost Keyline** (`{colors.ghost-line}`): the border of a seated brick and the dashed rule between step rows — a part already placed draws its own edge more faintly.
- **Bag Stock** (`{colors.bag-stock}`): the translucent fill of a sealed parts bag. Ink-soft on its real composite (`#62add6`) measures 5.35:1.
- **Hue-Tinted Ink** (`{colors.ink-soft}`): secondary text on translucent stock. Safe on bag stock and on paper (13.3:1); **not** safe on the bare ground.
- **Hue-Tinted Slate** (`{colors.paper-soft}`): secondary text on paper only, 7.31:1.
- **Colophon Body** (`{colors.colophon-body}`): body copy on the ink panel, 12.55:1 measured. Tinted from the ground's hue, never gray.
- **Chip Fill** (`{colors.chip-fill}`): a part still on the sprue inside a white panel.

### Named Rules

**The Reserved Accent Rule.** Red is the current role. Yellow is the primary action. Neither colour may be spent on anything else — not a quantity, not a hover state on a utility affordance, not a skip link, not a certification badge. Both reservations were broken during the build and repaired; the parts-inventory quantities run at weight 800 ink (six red numerals competed with the one brick that owns red) and the skip link runs on paper stock (yellow belongs to the action alone). Each new surface gets at most one red element and at most one yellow element.

**The Flatten-Before-Judging Rule.** Half this palette is translucent. Never judge a new colour pair against the token value; composite the translucent layer over its actual backdrop first and measure that. This is the trap that produced the build's one real contrast failure. The real backdrops are: seated ghost over the ground, bag stock over the ground (`#62add6`), chip fill over paper.

**The No-Gray Rule.** Secondary text is tinted from the ground's own hue. There is no neutral gray anywhere in the system.

## Typography

**Display Font:** Archivo Variable, self-hosted via `@fontsource-variable/archivo/wdth.css` (fallback Helvetica Neue, Arial, sans-serif)
**Body Font:** the same face at `'wdth' 100`
**Label Font:** the same face, caps, wide tracking

**Character:** One variable grotesque does every job, and the two axes do the differentiating that a second family would otherwise do. Headings condense to `'wdth' 82` at weight 800 with -0.03em tracking and tight 0.92 leading; body relaxes to the normal 100 width at weight 500. The result is technical-manual precision — the headings read as stencilled plate labels, the body as spec prose.

### Hierarchy
- **Display** (800, `clamp(2.6rem, 6.4vw, 5.6rem)`, 0.92, `'wdth' 82`, uppercase): the position claim only, one per page. Capped at 5.6rem deliberately — the numeral beside it carries the scale instead.
- **Numeral** (900, `clamp(4.4rem, 11vw, 10.5rem)`, 0.76, `'wdth' 76`): the step number. White face, 5px ink `-webkit-text-stroke`, `paint-order: stroke fill`. Steps down to `clamp(3rem, 5.6vw, 5.4rem)` with a 4px stroke inside step rows, `clamp(2.8rem, 4.6vw, 4.4rem)` on project spreads, 3px stroke below 720px, 42pt with a 2px stroke in print. Always `aria-hidden`, always with a visually-hidden "Step N of M" beside it.
- **Headline** (800, `clamp(1.8rem, 3.4vw, 2.9rem)`, 0.92, uppercase): section heads. Colophon takes `clamp(2rem, 4.4vw, 3.4rem)`.
- **Title** (800, `clamp(1.05rem, 1.5vw, 1.3rem)`, -0.015em, uppercase): role names, bag names, stamp names, call-out sub-labels.
- **Body** (500, 1rem, 1.55): all prose. Measure runs 52–57ch nominal — see the calibration rule.
- **Label** (800, 0.72–0.82rem, 0.14em–0.3em, uppercase): rail mark and nav, call-out labels, step meta, quantities, actions, colophon plate terms.

### Named Rules

**The 1.29 Calibration Rule.** Archivo's `0` glyph is 1.29× the width of its own average character, so every `ch`-based measure overshoots by roughly 29%. Nominal `ch` values are wrong in this face. `--measure` is therefore **57ch** (renders ~73 characters), step scopes and project descriptions are **52ch**, and the stud-marked highlight list is **calc(59ch + 1.5rem)** — the measure plus the marker's gutter added back. Derive any new measure by dividing the character target by 1.29, never by typing the target as `ch`.

**The Measure-On-The-Item Rule.** `ch` resolves against the element's own font-size. Set the measure on the text element, not on its list or wrapper: a measure on the parent of smaller children lets lines run to ~87 characters.

**The Stroke-Is-The-Glyph Rule.** The oversized numeral's legibility lives in its 5px ink stroke, not its white interior. The interior's 2.99:1 against the ground is correct and not a contrast failure, because the stroke carries the letterform at display scale. This licence applies only to a stroked display numeral at ≥44px with `paint-order: stroke fill` and a text alternative beside it. It never licences low-contrast fill on functional text.

**The Tabular Figures Rule.** `time`, `.qty` and `.step-no` take `font-variant-numeric: tabular-nums`. Years and quantities must align down a column.

## Layout

A single centred sheet at **max-width 1360px**, padded `clamp(1.4rem, 3.4vw, 1.4 stud)`. One `<header class="rail">` sticks to the top **outside** `<main>`, so the skip link to `#main` genuinely clears the navigation; everything else is a `.step` or `.section` separated by a 4px ink rule across the full sheet, with `padding-block: clamp(2rem, 5vw, 2 stud)`.

**The 40px stud module** is the spacing source: section rhythm (2 stud), sheet padding (1.4 stud), scroll-padding for anchors (2 stud), the sticky inventory's offset (2.1 stud), the assembly's indent (0.65 stud per layer), the arriving brick's clearance (2.6 stud), and the seat animation's travel (-0.7 / -0.55 stud).

**First viewport** is a two-column grid: `minmax(0, 1fr)` and a 356px right rail holding the sticky white parts-inventory call-out with the primary action inside it. Left column stacks the numeral + claim, a three-line scope, then the assembly as a `<ol>` of bricks stepping up and to the right.

**Breakpoints are behavioural, not device-named:**
- **1180px** — the inventory narrows to 300px rather than dropping below the fold, because the primary action lives in it; rail tracking tightens to 0.14em to hold one line.
- **860px** — single column. The rail's nav is dropped (three wrapped lines of sticky chrome would cost a third of the viewport). `.hero__left` becomes `display: contents` and the inventory is hoisted to `order: 2`, above the assembly, so the yellow action stays above the fold — DOM order is untouched, so reading order still runs claim → assembly → inventory.
- **720px / 640px** — step rows and project spreads collapse their numeral column into a single column; numeral stroke drops to 3px.
- **560px** — the claim columnises (numeral above the words, which otherwise fight for the same 10ch), the assembly stops stepping (the indent would push the last brick off-page), and the seating arrow rotates 90° to point down the column with negative margins so its head overhangs rather than crops.

The primary action is verified above the fold at 390, 1024 and 1440.

### Named Rules

**The Stud Multiple Rule.** Every structural measure is a multiple or stated fraction of `--stud` (40px). Arbitrary gaps are drift.

**The Action-Above-The-Fold Rule.** At every width, the yellow primary action is reachable without scrolling. Narrow its container, re-order its container, but never let it fall below the fold.

## Elevation & Depth

The system is flat by construction. Depth is carried by **keyline weight and translucency**, not by shadow: a seated part draws its edge in 50%-alpha ink over a 26%-white fill and recedes; an arriving part draws a full-strength 4px keyline over solid colour and advances. The stud grid is the ground plane itself, so position in the stack reads as depth without any lighting model.

There is exactly one shadow device, and it is a booklet convention rather than a lighting effect: a **hard offset shadow at zero blur**, which is how an instruction sheet draws a part held above the assembly plane. The brick world uses it natively — the direction contract's OWN-WORLD block specifies "solid and drop-shadowed when new" — so it is recorded here, but under a strict licence.

### Shadow Vocabulary
- **Held Above The Plane** (`box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.26)`): the arriving brick in the hero assembly. One instance.
- **Pressable Part** (`box-shadow: 5px 5px 0 var(--ink)`): the primary action at rest. On hover/focus it travels `translate(2px, 2px)` and the shadow closes to `3px 3px 0`; on `:active` it travels `translate(5px, 5px)` and the shadow closes to zero — a part pressed home.
- **The Drawn Stud** (`box-shadow: inset 0 0 0 2.5px var(--ground)` + `outline: 2.5px solid var(--ink)`): the highlight-list marker, a stud seen from above. Filled, never an outline — an empty square there reads as an unchecked box, the opposite of "shipped".

### Named Rules

**The Two-Shadow Licence.** Hard offset shadow belongs to exactly two elements: the arriving brick and the primary action. Both earn it as the booklet's own convention for a part off the plane. A third instance is drift. Soft, blurred, ambient or elevation-ramp shadows do not exist in this system — call-outs, bags, stamps and project spreads are explicitly shadowless.

### Signature Motion

One authored moment: `.seats` on `.step-row`. A brick travels to its seat nub-first and its keyline fills as it lands — `translate(-0.7 stud, -0.55 stud)` at `opacity: 0.18` resolving to identity, driven by `animation-timeline: view()` over `animation-range: entry 8% entry 62%`. Verified mid-flight at progress 0.62: `translate(-10.5px, -8.3px)` at 0.69 opacity, landing at identity.

It ships zero JavaScript and it is gated three ways: inside `@media (prefers-reduced-motion: no-preference)`, inside `@supports (animation-timeline: view())`, and the un-animated default state is the *finished* assembly, so an unsupporting browser sees the complete build rather than an empty one. In print it is killed with `!important` on all three properties — paper never scrolls, so the animation would print frozen at its start frame and the first step would come out at 18% opacity.

It is deliberately **not** on the hero assembly: that is above the fold at load, where a `view()`-driven range has already completed before the first scroll.

State transitions elsewhere all use `cubic-bezier(0.16, 1, 0.3, 1)` at 160–200ms: rail link underlines (160ms), the action's press (180ms), the skip link's arrival (200ms).

## Shapes

Hard-edged throughout. **Radius is 0 everywhere except the brick**, which takes 4px, and its stud cap, which takes `5px 5px 0 0`. The brick's studs are drawn with a `::before` pseudo-element positioned above the top edge (`top: calc(-1 * keyline - 7px)`, inset 14px, 11px tall, bordered on three sides, `background: inherit`) so they inherit the brick's own fill and read as part of the same moulding.

Recurring silhouettes: the **brick** (4px keyline, nubs above); the **call-out** (white, 4px keyline, 3px solid rule under its label); the **sealed bag** (translucent, 4px keyline, header crimped by a 3px bottom rule); the **inspection stamp** (white, 4px keyline plus a 2px inner keyline inset 5px, doubling to a 3px `double` border for certifications); the **chip** (2px keyline, no radius); the **dotted leader** (1px dotted ink at 45% alpha, name left, quantity right).

Separators are typed by meaning: 4px solid ink between sections, 2px dashed ghost-keyline between step rows, 3px solid ink under a label, 1px dotted ink in a leader list.

### Named Rules

**The Drawn-Not-Styled Rule.** Every edge is an ink keyline at 4px or 2px. No soft borders, no tinted hairlines, no `border: 1px solid #ddd`. The only 1px line in the system is a dotted leader, where dottedness is the point.

**The No-Card Rule.** Nothing is a card. Every panel is a named booklet part — brick, call-out, bag, stamp, spread — with a convention of its own. If a new surface needs a container, pick the part whose function matches; do not add a sixth generic box.

## Components

### Buttons
Inventory items inside a call-out, not buttons pasted onto a page.
- **Shape:** square corners (radius 0), 4px ink keyline, 0.95rem × 1.2rem padding, 0.82rem caps at 0.16em tracking, weight 800.
- **Primary:** yellow fill, ink text, hard 5px offset shadow in ink. Hover/focus travels 2px into the shadow; active travels the full 5px and closes it.
- **Secondary:** white fill, ink text, no shadow. Hover/focus inverts to ink fill and paper text.
- **Secondary on the ink panel:** transparent fill with a paper keyline and paper text, filling to paper on hover. Its focus ring switches to yellow, since ink-on-ink would be invisible.

### Chips
- **Style:** 2px ink keyline, no radius, 0.8rem at weight 700. Fill depends on backdrop — translucent ground tint (`{colors.chip-fill}`) inside white panels, solid paper inside a translucent bag.
- **State:** static. Chips are inventory, not filters; they carry no selected state and are never links.

### Cards / Containers
There are none. Use the named parts:
- **Call-out** — white, 4px keyline, label underscored by a 3px rule, `clamp(1.1rem, 1.8vw, 1.5rem)` padding. The detail panel for parts inventory, parts used, and shipped apps. The current step's `Parts used` panel is the one place its keyline goes red.
- **Sealed bag** — 30%-white translucent fill, 4px keyline, head crimped by a 3px rule carrying the group name and an `N PCS` count in hue-tinted ink. Bags align to `start` rather than stretching: a half-empty sealed bag is slack, not rhythm.
- **Inspection stamp** — white, 4px keyline plus an inner 2px keyline inset 5px. Certifications double the inner rule instead of taking a colour, because red is reserved.
- **Project spread** — white, 4px keyline, full width with a numeral column. Runs as a spread rather than a grid so one entry does not look broken.

### Navigation
The rail is a booklet running head, not a nav bar. Ground-coloured so it reads as the sheet itself, 4px ink bottom keyline, sticky at `top: 0`, `z-index: 50`, and placed **outside `<main>`** so the skip link clears it. Name and `N STEPS · N YRS` at the edges, section links between, all 0.78–0.82rem caps at 0.18–0.3em tracking. Links are undecorated with a transparent 2px bottom keyline that fills ink on hover/focus. At 1180px tracking tightens; at 860px the nav is dropped entirely and the mark alone remains; at 560px the mark drops its "· Build Instructions" suffix.

### The Assembly (signature component)
A real `<ol>` of role bricks. Seated roles render ghosted — translucent white fill, 50%-alpha keyline — each indented `0.65 stud` per layer via an inline `--seat` custom property so the stack steps up and to the right. The arriving role renders solid red with the offset shadow, cleared `2.6 stud` to the right and above the stack, with one dashed inline-SVG arrow (5px stroke, `9 7` dasharray, solid triangular head) pointing into its seat. The arrow is the only arrow in the build: every other relationship is carried by stacking order and ghosting.

### The Step List (signature component)
A `<ol class="steps" reversed>` — `reversed` because the drawn numerals count 05 down to 01 and the list's own numbering must agree with what is drawn. Each row is a two-column grid (`minmax(0, 7rem)` numeral, `minmax(0, 1fr)` body) separated by a 2px dashed ghost rule, carrying `.seats`. Highlights are marked by a drawn stud, never a bullet glyph. Current role is marked twice and only twice: a red `Current` badge at 0.7rem (the 11.2px functional-text floor, not the 10px smallprint one) and a red keyline on its parts panel.

### Print
The booklet becomes a plain spec sheet. `--ground` → white, `--ghost` → transparent, `--new` → black, `--action` → white; body 10.5pt black on white; rail `position: static`; nav and all actions hidden; numeral at 42pt with a 2px stroke; `break-inside: avoid` on steps and sections. The arriving brick inverts to **white fill with a 3px black keyline** — since `--new` flattens to black, a black fill would bury its own label; the weight of the rule carries the emphasis instead.

## Do's and Don'ts

### Do:
- **Do** spend red on the current role only and yellow on the primary action only — at most one of each per surface.
- **Do** derive every measure from the 40px stud module.
- **Do** divide your character target by 1.29 before writing a `ch` value, and set the measure on the text element rather than its wrapper.
- **Do** flatten translucent stock over its true backdrop before judging any contrast pair (`#62add6` for bag stock, the ground for seated ghost).
- **Do** draw every edge as a 4px or 2px ink keyline; use 1px only for a dotted leader.
- **Do** keep the primary action above the fold at every width, narrowing or re-ordering its container rather than letting it drop.
- **Do** keep all content in `src/data/resume.ts` and all displayed quantities in `src/lib/stats.ts` — no copy and no number is ever hardcoded in markup. This is the system's one architectural invariant: the parts inventory cannot drift from the content because it is computed from it.
- **Do** gate scroll-driven motion behind `prefers-reduced-motion`, `@supports (animation-timeline: view())`, and a default state that is the *finished* composition; and kill it in print with `!important`.
- **Do** hoist structure with `display: contents` + `order` when a narrow viewport needs a different visual order, leaving DOM and reading order intact.
- **Do** give every `aria-hidden` display numeral a visually-hidden text equivalent.
- **Do** keep the running head outside `<main>` so the skip link clears it.

### Don't:
- **Don't** put red or yellow on a quantity, a utility affordance, a skip link, a certification badge, or a hover state outside the live-part convention.
- **Don't** add a third hard offset shadow, and don't introduce blurred, ambient or elevation-ramp shadows at all. Call-outs, bags, stamps and spreads are shadowless.
- **Don't** build a card, or a grid of equal cards. Pick the booklet part whose function matches.
- **Don't** round a corner. Radius is 0 except the brick's 4px and its stud cap.
- **Don't** place an eyebrow, kicker or label above a heading. The heading carries itself.
- **Don't** use a glyph bullet, an icon font, or a system display face. Markers are drawn studs; the one arrow is inline SVG; the type is self-hosted Archivo Variable.
- **Don't** use `--ink-soft` on the bare ground, or white on the ground below display scale (3.83:1).
- **Don't** put a stud where it is not structural, or let the register drift toward toy packaging — no rounded playful shapes, no primary-colour confetti.
- **Don't** put the seat animation on anything above the fold at load; a `view()` range completes before the first scroll and the motion is wasted.
- **Don't** add a second arrow. Stacking order and ghosting carry every other relationship.
