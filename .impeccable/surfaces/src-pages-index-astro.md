---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/components/Hero.astro","src/components/Experience.astro","src/components/Skills.astro","src/components/Projects.astro","src/components/Education.astro","src/styles/global.css"]
---

Scope: the single-page resume site at `src/pages/index.astro` and its components. Visitor mode: **Persuade** — the visitor decides whether to contact Francesc and does it.

Audience: recruiters and hiring managers first, potential contract clients second. When the two conflict, recruiter-skimming wins. Job: establish in one viewport that this is a senior engineer who ships **both** the Android client and the backend behind it, then make contacting him the obvious next move. Action: email, plus CV download. Proof: five roles across twelve years, eight shipped apps, named clients (Cisco, Deloitte, CES, SXSW), 500K+ downloads, five engineers mentored.

Constraints: static Astro, zero-JS default, WCAG 2.1 AA floor, print-legible. Phone number is held in `src/data/resume.ts` but deliberately never rendered. All content comes from that file — never hardcoded in markup.

Unresolved: real GitHub and LinkedIn URLs (currently `TODO`), store URLs for shipped apps (all `null`), the CV PDF for `public/`, hosting (so `site`/`base` stay commented in `astro.config.mjs`), and the Fickl/Eventbase date overlap recorded in PRODUCT.md.

## Direction contract

**THESIS:** A career as an assembly sequence — twelve years in numbered steps, each role a piece that clicks onto the last, with the newest piece arriving bright and seated by an arrow. It refuses the category default outright: no centred headline over a role subline with two buttons and a row of equal project cards. Nothing here is a card in a grid; every element is a part in a build.

**OWN-WORLD:** Instruction-booklet sky blue `#1E8AC4` as the page ground, carrying a radial stud grid on a 40px module that rules every alignment. Keyline black `#101010` ink at 3–4px, drawn not styled. One bright red `#D01217` reserved exclusively for the current role. Yellow `#F2C230` reserved exclusively for the primary action. Bricks are the component language: 4px-stroked rectangles with stud nubs drawn above their top edge, ghosted in translucent white keyline when assembled, solid and drop-shadowed when new. Call-out boxes are white, hard-bordered, dotted-leader lists. Type is grotesque, heavy, uppercase, tight — technical manual, never toy packaging. Recognizable with every word removed.

**STORY:** The visitor understands immediately that two disciplines are held by one person; believes it because twelve years of named clients and shipped apps are stacked visibly beneath the claim; and emails him from the inventory box without scrolling.

**FIRST VIEWPORT:** Sky-blue stud ground, edge to edge. A top rail carries the name and `STEP 05 OF 05 · 12 YEARS`. Below left, an oversized `05` numeral in white with a heavy black stroke at ~168px sits beside the position claim `ANDROID + BACKEND` at ~62px uppercase, with a three-line scope paragraph under it. Beneath that, the assembly: Everis, Napptilus, Eventbase and Fickl as ghosted keyline bricks stepping up and right, and Fanatics 2026 arriving solid red at the upper right with a dashed arrow pointing to its seat. Current role leads; the sequence reads newest-first despite the step metaphor, because a recruiter wants today's role first. Right column holds a white `PARTS INVENTORY` call-out: the stack as a dotted-leader list with real quantities, then the yellow **Email Francesc** primary action and **Download CV** beneath it, both inside the box as inventory items. Primary action sits above the fold, right column.

**FORM:** The Build Instructions, from catalog world `games-toys-physics-play-brick-build-instructions`. Dealt as a `competitive` challenger in the bolder hand (round 2), then pinned by the user after two re-rolls — a pinned direction beats the roll. seed:ddbcb80e8ce5e4da

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

### Named risks, and how this build answers them

- *A sequence insists you start at step one; a recruiter wants the current role first.* Answered by inverting the read: step 05 leads at the top of the page, earlier roles are the already-assembled stack behind it.
- *The brick world can read junior or cute.* Answered by holding the register at technical-manual precision — heavy grotesque caps, measured dotted leaders, real quantities — and never at toy-box play. No rounded playful shapes, no primary-colour confetti, no studs used decoratively where they are not structural.
- *The form teaches wordlessly with arrows; a resume is mostly prose.* Answered by limiting arrows to one — the seating arrow on the current role — and letting every other relationship be carried by stacking order and ghosting.

**Signature interaction:** on scroll, each role's brick seats into the stack — a short translate-and-settle along the stud grid, nub-first, with the ghost keyline filling to solid as it lands. Respects `prefers-reduced-motion` by rendering every brick already seated. Underneath it stays a semantic ordered list of roles.
