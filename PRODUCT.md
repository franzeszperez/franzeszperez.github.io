# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output, TypeScript strict). Chosen with the user in conversation over
plain HTML, Vite+React, and Next.js: the content is resume data that changes
periodically, so templating over a typed data file beats hand-repeated markup,
and zero shipped JS keeps the page fast for a recruiter on a phone. Hosting is
explicitly undecided — `site` and `base` in `astro.config.mjs` are left commented
out until the user picks a host.

Node `>=22.23.4` is required by Astro 7 and enforced in `package.json` engines.

## Users

**Primary: recruiters and hiring managers.** Screening Francesc for a full-time or
contract role. They skim for fit in well under a minute, then decide whether to
reach out. They may forward the CV internally.

**Secondary: direct clients hiring for contract work** (the shape of the current
Fanatics engagement). They evaluate delivery capability, the Android+backend
breadth, and whether he can own a feature end to end.

When the two conflict, recruiter-skimming wins.

## Product Purpose

A personal resume and portfolio site that serves as a sharable, linkable tool when
Francesc looks for a job or a client. Success is a visitor understanding his
positioning fast and having an obvious path to contact him or download the CV.

## Positioning

**Android and backend in one person.** He builds the mobile app *and* the
backend-for-frontend that feeds it. This is substantiated, not aspirational: at
Fanatics he architected Payload CMS blocks, wrote Kotlin/Spring Boot server logic
over PostgreSQL and Redis, built a Promotions API, and shipped the Android client
features consuming it. Most senior Android engineers cannot truthfully claim the
backend half, and most backend engineers cannot claim the mobile half.

## Operating Context

- Visitors arrive from a LinkedIn profile, a job application, a CV link, or a
  direct share. Many will be on a phone.
- Recruiters typically scan, then either leave or forward the CV to a hiring team.
- The site is a companion to — not a replacement for — the PDF resume, which
  remains the artifact that travels inside hiring processes.

## Capabilities and Constraints

- Static site, no server runtime. A contact form would require a third-party
  service; the user did not request one, so contact is a `mailto:` link.
- All content lives in `src/data/resume.ts` as typed data. Components read from it;
  content must never be hardcoded into markup.
- Must include a downloadable CV (PDF) and a print stylesheet so the page itself
  prints cleanly.
- Shipped apps should link to store listings. **The URLs are not yet available** —
  `apps[].url` is `null` throughout `resume.ts` pending real links.
- The user's phone number (`profile.phone`) is in the data file but deliberately
  not rendered, to avoid scraping. Email is public.
- GitHub and LinkedIn URLs are **placeholders** (`TODO`) pending the real handles.
- Source documents (`Resume*.docx`, `Resume*.pdf`) are gitignored; they contain
  personal contact details.

## Brand Commitments

Name renders as **Francesc Pérez** (with the accent). No existing logo, palette,
typography, or identity assets. No binding visual constraints were specified.

## Evidence on Hand

Real and verified from the source resume:

- 12 years of professional experience; 8+ in Android.
- Current: Senior Android & Backend Engineer (Contractor), Fanatics, Jan 2026–present.
- Eventbase, Jun 2019–Nov 2025: offline-first event apps for Cisco, Deloitte, CES, SXSW.
- Named shipped apps: Fanatics, SXSW GO, CES, VMware, Salesforce, Oysho
  (500K+ downloads), Privalia, Invoice Reporter.
- Pioneered Jetpack Compose adoption and a Kotlin Multiplatform initiative at
  Eventbase; mentored 5 Android developers; 10+ knowledge-sharing sessions;
  upgraded 20+ platform libraries.
- Master's in Artificial Intelligence (Valencian International University);
  Bachelor's in Telecommunications Engineering (UPC Barcelona); Certified Scrum
  Master (Scrum Alliance).

Absences future work must not fabricate: no testimonials, no client quotes, no
performance benchmarks, no download/revenue metrics beyond Oysho's 500K+, no
photograph, no store URLs, no GitHub/LinkedIn handles.

**Known data issue:** the source resume dates Fickl as Apr 2021–Aug 2022, which
falls entirely inside the Eventbase span (Jun 2019–Nov 2025). Preserved verbatim
pending user clarification; may be concurrent side work or a source typo.

## Product Principles

1. **Skimmability is the first requirement.** A recruiter decides in under a
   minute. Anything that delays comprehension costs more than it adds.
2. **The dual Android+backend claim is the spine.** Page structure should make it
   legible immediately, not bury it in a bullet list on the third screen.
3. **Content stays in the data file.** The value of this build is that updating a
   job never means touching markup.
4. **Claims stay true to the resume.** No invented metrics, clients, or praise.
5. **Fast on a phone on bad wifi.** Zero-JS default is a product property, not an
   implementation detail.

## Accessibility & Inclusion

No user-specific requirement was established. Treat WCAG 2.1 AA as the floor:
real contrast ratios, keyboard-reachable links, a skip link, semantic landmarks,
and content that survives at 200% zoom.
