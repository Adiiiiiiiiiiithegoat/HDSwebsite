# Design System Audit — CA Firms Page ("Haven")

Audit date: 2026-08-06. Source: `src/` as of the initial commit, before any changes for the
General landing page were made. This document is descriptive only — nothing referenced here
was changed as part of this audit.

The CA Firms page lives at `src/App.jsx` + `src/sections/*` + `src/content.js`, styled entirely
by `src/styles.css` (one global stylesheet, no CSS-in-JS, no Tailwind, no component library).
Palette rationale and contrast math are already documented in `DESIGN.md` — this audit
cross-references rather than repeats that math, and additionally documents typography,
components, motion and the technical/folder conventions so a second page can match it exactly.

---

## 1. Visual Design

### 1.1 Color palette

Defined as CSS custom properties on `:root` in `styles.css:6-21`.

| Token | Value | Use |
|---|---|---|
| `--ink-navy` | `#1B2A3A` | Dark section background (Proof, Contact/footer), all heading text on paper |
| `--ink-navy-2` | `#223447` | Raised panels *inside* dark sections (video slot, before/after panels) |
| `--paper` | `#F7F5F0` | Base page background |
| `--paper-2` | `#FFFDF8` | Raised cards on paper (case-study cards) |
| `--ledger-green` | `#0E4D3C` | Secondary accent — checkmarks, "fact" lines in Process, trust-block top rule |
| `--seal-red` | `#B23A2E` | Stamp ink — **budgeted to exactly 3 uses on the page**, see §1.2 |
| `--filed-grey` | `#7A6F5D` | Hairline rules/borders **only** (4.53:1 on paper — passes AA by a hair, not for text) |
| `--filed-ink` | `#5C5346` | Secondary/body-adjacent text on paper (6.93:1) |
| `--text` | `#2B2B2B` | Primary body copy on paper (12.9:1) |
| `--paper-dim` | `#C9C2B4` | Secondary text on `--ink-navy` (8.24:1) |

Derived, mixed at use-site rather than stored as flat hexes:

```css
--rule:        color-mix(in srgb, var(--filed-grey) 42%, transparent);
--rule-strong: color-mix(in srgb, var(--filed-grey) 70%, transparent);
--rule-dark:   color-mix(in srgb, var(--paper-dim) 26%, transparent);
```

`--rule` / `--rule-strong` are for hairlines on paper backgrounds; `--rule-dark` is the
equivalent for hairlines on `--ink-navy` backgrounds. This is the only variable use of
`color-mix()` on the page — there is no other alpha-blending convention to learn.

**Every color decision is contrast-audited in `DESIGN.md`.** Any new page must keep that
discipline: a color is not "secondary text" until its ratio is computed and written down.

#### The seal-red budget (important constraint, must not be copied literally)

`--seal-red` is deliberately rationed to exactly 3 occurrences on the CA page, and both
`DESIGN.md` and `README.md` say explicitly not to add a fourth:
1. Primary CTA button fill (hero + contact share the `.btn` style = one use).
2. The "FILED" stamp SVG on the Proof section's after-panel.
3. The 2px hairline under the "Haven" wordmark in the header.

This is a **page-specific rhetorical device** (the stamp/seal motif), not a reusable rule about
accent-color quantity in general. A new page is free to use the accent color more liberally, but
should still treat it as a *high-signal accent*, not a fill color — see §3.3.

### 1.2 Gradients

None. The page uses zero linear/radial gradients on solid fills. The only gradient-adjacent
technique is a **repeating-linear-gradient used as a ruled-paper texture**, not a color gradient
(`.video-poster`, `styles.css:426-430`):

```css
background-image: repeating-linear-gradient(
  to bottom,
  transparent 0 27px,
  var(--rule-dark) 27px 28px
);
```

This is a deliberate "document" texture cue (28px "ruled paper" lines) used once, behind the
placeholder video slot. Treat gradients as absent from this design language by default.

### 1.3 Backgrounds

Exactly two background modes, switched per-section, never mixed within a section:
- **Paper** (`--paper`) — the default; Header, Hero, Process, Trust.
- **Ink** (`--ink-navy`, applied via the `.on-ink` utility class) — Proof and Contact/footer only.

`.on-ink` (`styles.css:148-160`) is the mechanism: it sets background + text color and cascades
overrides for `h2`/`h3`/`.lead`/`.label` so child components don't need dark-mode variants of
their own. Raised panels *within* an ink section step up one level to `--ink-navy-2`
(`.video-slot`, `.ba-panel`), never pure black, never a lighter tint of `--ink-navy` via opacity.

Cards on paper step up to `--paper-2` (`.case`), the paper equivalent of `--ink-navy-2`.

**Pattern to reuse:** every section is either "on paper" or "on-ink" as a whole; panels inside a
section step exactly one level toward the extreme (navy→navy-2, paper→paper-2), never more.

### 1.4 Shadows

None anywhere on the page. No `box-shadow` declarations exist in `styles.css`. Depth is
communicated entirely through the background-level system in §1.3 plus 1px borders — not shadow.
A new page should default to shadow-free depth (borders + background steps) to stay consistent,
and only introduce shadow deliberately if a component category truly needs it (e.g. a dropdown).

### 1.5 Border radius

Minimal and consistent: **2px** everywhere a radius is used (`.btn`, `.video-slot`, `.ba-panel`,
`.case`, `:focus-visible` outline). One exception: the stamp's `.play` circle and the focus ring
are the only fully-rounded (`50%` / pill) shapes on the page, both circular, not rectangular
pills. There are no `rounded-lg`/`rounded-xl`-style large radii anywhere — the language is sharp,
almost-square corners ("ledger" aesthetic, not "SaaS card" aesthetic).

### 1.6 Blur effects

One use: the sticky header's glass effect (`styles.css:255-262`):

```css
.header {
  background: color-mix(in srgb, var(--paper) 88%, transparent);
  backdrop-filter: blur(8px);
}
```

This is the only `backdrop-filter` on the page. No other blur/glassmorphism exists — panels and
cards are opaque with hairline borders, not frosted glass. Do not extend blur beyond the sticky
header pattern.

### 1.7 Opacity usage

Sparse and intentional, not decorative:
- `[data-reveal]` starts at `opacity: 0` for the scroll-reveal (see §5).
- The stamp SVG settles at `opacity: 0.92` (never fully opaque — reads as ink, not a UI element).
- The stamp's blurred "ink bleed" duplicate sits at `opacity: 0.35`.
- `.btn[disabled]` at `opacity: 0.65`.
- `color-mix(... , transparent)` is used for rule/border alpha rather than raw `opacity`, so
  opacity itself is reserved for state (hidden/revealed/disabled) and one signature effect (ink),
  not for general "soften this color" work.

### 1.8 Glassmorphism

Limited to the sticky header only (§1.6) — translucent paper + blur, not a frosted-card style
used throughout. This is **not** a glassmorphism-heavy design system; do not apply frosted-glass
cards to the new page's Services/Industries grids etc.

### 1.9 Spacing scale

No numeric spacing scale token list (no `--space-1..8`). Instead, spacing is expressed as
`clamp()` fluid values tied to viewport width, plus a small number of literal pixel values for
fine detail (gaps, paddings inside components). The two governing tokens:

```css
--gutter:    clamp(20px, 5vw, 48px);   /* horizontal page padding */
--section-y: clamp(72px, 10vw, 128px); /* vertical padding between sections */
```

Everything else (18px/20px/22px/32px gaps, etc.) is a literal value chosen per-component, still
fluid in a few hero/section-head spots via `clamp()`. **Convention to carry forward:** use
`clamp(min, preferred-vw, max)` for anything that should scale between mobile and desktop, and
plain px for small fixed gaps (icon-to-label spacing, border widths).

### 1.10 Container widths

```css
--max: 1120px;
```

`.wrap` (`styles.css:109-114`) is the single container utility: `width: 100%; max-width: var(--max);
margin-inline: auto; padding-inline: var(--gutter)`. Every section wraps its content in one
`<div className="wrap">`. Body copy is additionally capped with `.measure` (`max-width: 62ch`) so
paragraphs stay readable at the full 1120px width — this is applied per-paragraph, not per-section.

### 1.11 Grid system

No global 12-column grid. Layout is CSS Grid used locally per component, each with its own
`grid-template-columns`, generally one of two patterns:
- **Fixed label column + fluid content column** — `.step` (`132px minmax(0, 1fr)`), used for the
  numbered process rows.
- **`auto-fit`/`minmax` responsive card grids** — `.hero-strip`, `.trust-grid`, `.cases`,
  `.contact-details` all use `repeat(auto-fit, minmax(Npx, 1fr))` so columns collapse
  automatically without explicit breakpoints. Minmax basis varies by content: 190px (hero strip
  stat), 300px (trust two-up), 280px (case cards), 240px (contact lines).
- **Two-column asymmetric** — `.proof-grid` uses `minmax(0, 1.35fr) minmax(0, 1fr)` (video wider
  than the before/after column), collapsing to one column under 860px via an explicit
  `@media (max-width: 860px)` override rather than `auto-fit` (deliberate, not automatic,
  because the ratio matters above the breakpoint).

**Convention to carry forward:** prefer `auto-fit`/`minmax` for card grids so they don't need a
matching breakpoint at all; reach for an explicit `@media` override only when a fixed ratio needs
to collapse to a single column.

### 1.12 Breakpoints

Only two real breakpoints plus one micro-breakpoint, all `max-width`, mobile-adjustments-only
(the base styles are desktop/fluid via `clamp()`, not mobile-first with `min-width` overrides):

| Breakpoint | Purpose |
|---|---|
| `860px` | Proof's two-column grid collapses to one column |
| `620px` | Header wraps, base `--fs-body` steps down to 1rem, process step grid collapses to single column, stamp repositions to stay inside viewport, footer bar stacks |
| `380px` | Nav/label/step-code font sizes step down further, `.btn` goes full-width, stamp shrinks again |

Plus a `prefers-reduced-motion: reduce` block (not a size breakpoint, but treated with the same
weight) that flattens all transitions/animations to ~0 and renders the stamp already landed.

### 1.13 Icon style

No icon font, no SVG icon library (no Heroicons/Feather/Lucide). Every "icon" is either:
- A **typographic glyph** — `→` (rendered via `.arrow` span) on buttons, `▶` (play glyph) in the
  video poster, `✓` (checkmark, generated via `content: '✓'` in `.commit-list li::before`).
- A **custom hand-built SVG** — the stamp (see §3.10) is the only bespoke SVG illustration.

**Convention to carry forward:** prefer a mono-font glyph/character over an icon library for
small inline marks (arrows, checks); reserve bespoke SVG for one signature illustration, not for
routine iconography (no folder of 20 small SVG icons).

### 1.14 Illustration style

One illustration on the whole page: the "FILED" rubber stamp (`src/sections/Stamp.jsx`), inline
SVG, textured with `feTurbulence`/`feDisplacementMap` for a ragged rubber-stamp edge plus a
blurred low-opacity duplicate underneath for ink bleed. It is rotated −11°, animates in once,
and is explicitly rationed as one of the 3 seal-red uses. See §3.10 for the full mechanism. This
is a **motif**, not a general illustration system — there's no icon set or spot-illustration
library to extend.

---

## 2. Typography

### 2.1 Font families

```css
--display: 'Fraunces', 'Iowan Old Style', Georgia, serif;
--sans:    'IBM Plex Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
--mono:    'IBM Plex Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace;
```

Loaded via Google Fonts `<link>` in `index.html` (preconnect + `display=swap`), weights
`Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600` (variable, optical size axis included) and
`IBM Plex Mono:400;500`, `IBM Plex Sans:400;500;600`. Three families, each with one clear job —
**display serif for headings, humanist sans for body/UI, mono for anything numeric or
label-like**. A second page must load the same three families from the same `<link>` (already
global in `index.html`, not per-page) to read as the same site.

### 2.2 Font weights

- Fraunces: 400 (unused in practice — headings use 600), 500 (`.ba-time` big numerals), 600
  (all headings).
- IBM Plex Sans: 400 (body default), 500 (`.btn .arrow`... actually buttons are 600; 500 is used
  for `.label`/mono weight parity), 600 (headings set in sans — `h3`, buttons, wordmark-adjacent
  emphasis).
- IBM Plex Mono: 400 (default mono/numerals), 500 (labels, stamp text, step codes, `.fact`).

### 2.3 Font sizes (type scale)

```css
--fs-hero:  clamp(2.25rem, 5.6vw, 4.25rem);   /* h1 */
--fs-h2:    clamp(1.75rem, 3.4vw, 2.5rem);    /* section h2 */
--fs-h3:    1.1875rem;                         /* card/step h3, fixed, not fluid */
--fs-lead:  clamp(1.0625rem, 1.5vw, 1.25rem); /* intro paragraph under a heading */
--fs-body:  1.0625rem;                         /* default body, steps down to 1rem ≤620px */
--fs-sm:    0.9375rem;                         /* secondary copy, notes, captions */
--fs-label: 0.75rem;                           /* mono uppercase labels, nav, step codes */
```

Only the two heading sizes and the lead are fluid (`clamp`); body/sm/label are fixed rem values
with one manual step-down for `--fs-body` inside the 620px media query. This keeps body text
predictable at all viewport widths and reserves fluid scaling for the sizes that visually
dominate a section.

### 2.4 Heading hierarchy

- **h1** — Fraunces 600, `--fs-hero`, `line-height: 1.04`, `letter-spacing: -0.015em`,
  `font-variation-settings: 'opsz' 96` (locks the optical-size axis to a display cut even at
  large rendered sizes), capped `max-width: 17ch` in the hero. One per page.
- **h2** — Fraunces 600, `--fs-h2`, same tracking/opsz as h1, used once per section as the
  section title, always paired with a `.label` eyebrow above and usually a `.lead` paragraph
  below inside a `.section-head` block (see §3.5).
- **h3** — the odd one out: **not** display font. IBM Plex Sans 600, fixed `--fs-h3`
  (1.1875rem), `letter-spacing: -0.005em`. Used for sub-headings inside a section (Process step
  titles, Trust block titles, case-study workflow names) — i.e., h3 never competes visually with
  the serif h1/h2, it reads as "bold body," which keeps the serif reserved for exactly two
  hierarchy levels.

Global rule (`styles.css:64-73`): `h1,h2,h3 { margin:0; color: var(--ink-navy); }` — margin is
never inherited from heading defaults; every gap around a heading is explicit spacing from a
parent flex/grid, not heading margin. `.on-ink` overrides heading color to `--paper`.

### 2.5 Paragraph spacing

`p { margin: 0 }` globally (`styles.css:82-84`) — the same "no implicit margin" discipline as
headings. All vertical rhythm between a heading, lead, and body paragraph comes from the parent
being a `flex` container with an explicit `gap` (see `.step-body { gap: 8px }`,
`.trust-block { gap: 14px }`, `.section-head { gap: 14px }`), never from margin-collapsing.
**This is a load-bearing convention** — a new page must also zero out `p`/heading margins and use
flex/grid `gap` for rhythm, or spacing will silently drift from the CA page's rhythm.

### 2.6 Line heights

- Hero h1: `1.04` (tight, display).
- h2: `1.12`.
- Body default (`body` element): `1.65`.
- `.lead`: `1.55`.
- Mono numerals (`.ba-time`): `1.1`.

No single `--lh-*` token set — line-height is set per role alongside its font-size, tightest for
large display type, loosest for body paragraphs.

### 2.7 Letter spacing

- Headings (h1/h2): `-0.015em` (slightly tightened, standard for a large serif).
- h3: `-0.005em` (barely tightened — sans headings need less correction).
- `.label` / all mono uppercase eyebrows/nav/step-codes: `0.12em` letter-spacing +
  `text-transform: uppercase` — this pairing (mono + uppercase + ~0.1–0.12em tracking) is the
  page's consistent "eyebrow/label" signature, used for: nav links, `.label`, `.hero-strip .k`,
  `.step-code`, `.ba-role`, `.case-meta`, `.footer-meta`, video-poster `.msg`. Footer-meta uses a
  slightly tighter `0.08em`.
- Wordmark: `-0.02em`.

**Convention to carry forward:** any small uppercase mono tag on the new page should use this
exact recipe — mono font, uppercase, 0.08–0.12em tracking, colored `--filed-ink` on paper /
`--paper-dim` on ink — rather than inventing a new "badge" style.

---

## 3. Components

All components below are effectively already reusable at the CSS level — they're generic classes
in the single global `styles.css`, not scoped per-section — but only one page currently consumes
them. This section documents how each works and whether/how it should be formalized into a JS
component for a second page.

### 3.1 Header / Nav

`src/sections/Header.jsx` + `.header`/`.header-inner`/`.wordmark`/`.nav` in `styles.css:255-305`.

- Sticky (`position: sticky; top: 0; z-index: 20`), translucent paper + `backdrop-filter: blur(8px)`
  (§1.6), 1px bottom hairline.
- Wordmark: display font, 2px seal-red underline (one of the 3 budgeted uses — page-specific,
  see §1.1).
- Nav links: mono/uppercase/tracked label style, in-page anchor links (`#proof`, `#process`,
  `#contact`) — this page has no router and no cross-page nav today.
- **Reusability verdict:** the *shell* (sticky/blur/hairline/flex-between layout) is 100%
  reusable. The *content* (wordmark text, anchor targets) is page-specific and must become props
  once a second page needs a header, especially once nav links need to point at routes instead of
  in-page anchors. Recommend extracting a generic `<SiteHeader logo nav />` component for new
  pages while leaving the CA page's own `Header.jsx` untouched (it still works standalone).

### 3.2 Hero

`src/sections/Hero.jsx` + `.hero*` in `styles.css:311-380`. Structure: mono eyebrow list (label
style, dot-separated via `::after`), h1 (max 17ch), `.lead` (max 54ch), CTA row (`.btn` + a
`.note` caption), then a hairline-bounded stat strip (`.hero-strip`, `auto-fit` grid of
label+value pairs).

**Reusability verdict:** the *pattern* (eyebrow → h1 → lead → CTA-with-note → stat strip) is a
strong, reusable hero template. The eyebrow content (form codes), h1 copy, and strip stats are
entirely page-specific data. Recommend a data-driven `<Hero eyebrow h1 lead cta note stats />`
shape for future pages, modeled on this one but not sharing literal copy.

### 3.3 Buttons

`.btn` (primary) and `.btn-quiet` (secondary/tertiary link) in `styles.css:178-236`.

- `.btn`: seal-red fill, white text, `2px` radius, `15px 26px` padding, sans 600, inline-flex
  with a trailing `.arrow` span that translates `3px` right on hover; background darkens on
  hover (`#9C3226`), 1px `translateY` press effect on `:active`, `opacity: 0.65` + `cursor:
  progress` when `[disabled]`.
- `.btn-quiet`: no fill, mono/uppercase/tracked label styled as an underlined link
  (`border-bottom: 1px solid`), color steps from `--filed-ink` to `--ink-navy` on hover.

Both are pure CSS classes applied to `<a>`/`<button>` elements directly in JSX — there is no
`<Button>` React component today. **Reusability verdict:** extract a small `<Button variant="primary
| quiet" href? onClick? arrow? disabled?>` component now — this is the single highest-value
extraction since every new section (CTA, FAQ links, Services cards) will need it, and the CSS
classes already generalize perfectly with zero changes needed.

### 3.4 Cards

Two card patterns exist, both minimal (no shadow, 1px border, 2px radius, background one step
off the section's base):
- `.case` (paper card, `--paper-2` bg) — case-study card, currently unused (`SHOW_CASE_STUDIES =
  false`).
- `.ba-panel` (ink card, `--ink-navy-2` bg) — before/after stat panel inside Proof.

**Reusability verdict:** generalize into one `<Card>` primitive (border + radius + one-step
background, on either paper or ink) for Services/Industries/Why-Choose-Us grids on the new page,
rather than inventing a third card recipe.

### 3.5 Section layout / `.section-head`

Every section follows the same skeleton: `<section className="section" id="…">` →
`<div className="wrap">` → optional `<div className="section-head" data-reveal>` (label + h2 +
optional `.lead.measure`, bottom hairline, `styles.css:162-173`) → section body.

**Reusability verdict:** this is the backbone pattern for the whole site and should be treated as
the canonical section template for every new section on the General page (`Section` wrapper +
`SectionHead` component: label, h2, optional lead).

### 3.6 Buttons/CTA section

There is no separate "CTA section" component on the CA page — the closest equivalent is Contact
(`src/sections/Contact.jsx`), which doubles as the page's final CTA and the footer, on `--ink-navy`.
It combines a `.section-head`, a `.contact-details` `auto-fit` grid of label/value lines, one
`.btn.contact-cta`, then a `.footer-bar` (wordmark + copyright + legal links) below a hairline —
all inside one `<footer>` element. **Reusability verdict:** for the General page, split this into
two distinct, reusable pieces — a **CTA section** (heading + lead + button, on-ink) and a
**Footer** (wordmark + legal links + copyright) — since the General page brief calls for both a
CTA section and a Footer as separate sections, whereas the CA page fuses them because it has no
other footer content (no nav, no services list).

### 3.7 Process / Timeline

`src/sections/Process.jsx` + `.step*` (`styles.css:570-603`). A vertical list of
`STEP.01`…`STEP.05` rows, each a 2-column grid (fixed 132px mono step-code column + fluid body
column, collapsing to a stacked single column ≤620px), separated by hairlines, each row's body =
h3 + a mono `.fact` line (colored `--ledger-green`) + a paragraph.

**Reusability verdict:** this is a strong, generic "numbered process/timeline" component —
directly reusable for the General page's **How We Work** and **Our Process** sections (which is
exactly what a step-by-step template is for). Extract as `<Steps items={[{title, fact, body}]} />`.

### 3.8 FAQ

**Does not exist on the CA page today.** There is no accordion/FAQ pattern anywhere in
`styles.css` or `sections/`. This must be designed net-new for the General page, inventing the
smallest addition consistent with the existing language: hairline-separated rows (like `.step`),
label/h3 typography already defined, a simple expand/collapse using the same `[data-reveal]`-style
restraint (CSS-only disclosure via `<details>`/`<summary>` is the lowest-risk choice — no new JS
state pattern, no animation library, matches the page's "plain HTML semantics first" ethos visible
in using native `<video controls>` rather than a custom player).

### 3.9 Footer

See §3.6 — currently fused into Contact. `.footer-bar` (`styles.css:750-765`) is the reusable
part: hairline-topped flex row, wordmark (footer variant swaps the seal-red underline for a quiet
`--rule-dark` one — "seal-red stays in the header only," per the CSS comment), `.footer-meta`
(copyright + Privacy/Terms links, mono/tracked). Recommend extracting `.footer-bar` as-is into a
standalone `<Footer>` for the General page, reusing the class verbatim.

### 3.10 Animations / hover effects / scroll animations

Two independent motion systems, both vanilla (no Framer Motion, no GSAP, no animation library):

1. **Scroll-reveal** (`src/App.jsx:11-32`, `.the [data-reveal]` rule in `styles.css:240-249`) —
   a single `IntersectionObserver` created once in `App.jsx`, watching every `[data-reveal]` node
   (plus `.stamp`) on the page. On intersect (`threshold: 0.15`, `rootMargin: '0px 0px -12% 0px'`)
   it adds `.is-in` and **unobserves** — every reveal fires exactly once, never re-triggers on
   scroll-back. Base state: `opacity: 0; translateY(12px)`; `.is-in`: `opacity: 1; transform: none`,
   over `520ms ease`. Under `prefers-reduced-motion: reduce`, or if `IntersectionObserver` is
   unavailable, all targets get `.is-in` immediately with zero animation (`App.jsx:14-18` +ni the
   CSS reduced-motion block zeroing all transition/animation durations).
2. **The stamp** (§1.14, `src/sections/Stamp.jsx`) — same `.is-in` mechanism, but with its own
   keyframe animation instead of a simple opacity/transform transition: `stamp-down`, 380ms,
   `cubic-bezier(0.2, 0.9, 0.3, 1.35)` (overshoot then settle), scale 1.55→0.96→1, rotate fixed at
   −11°. Reduced-motion renders it pre-landed with no animation.

Hover effects (all plain CSS `:hover`, no JS): button background darken + arrow translate (§3.3),
nav/quiet-button underline color step, footer-meta link underline color step, case-study cards
have no hover treatment defined (static).

**Reusability verdict:** the `useRevealOnce` hook in `App.jsx` is written generically already
(queries `document.querySelectorAll('[data-reveal], .stamp')` — nothing CA-specific about it
except the literal `.stamp` selector, which simply won't match anything on a page with no stamp).
Extract it verbatim into `src/hooks/useRevealOnce.js` as a **new file** and have the General
page's root import it from there; leave `App.jsx`'s inline copy exactly as-is so the CA page's
source is untouched (see Step 2 policy at the top of this doc). The `[data-reveal]` CSS rule
already lives in the shared global stylesheet, so any new page gets the same reveal behavior for
free just by adding the `data-reveal` attribute and running the same hook.

---

## 4. Technical Audit

### 4.1 Component structure

Functional components only, no class components, no `PropTypes`/TypeScript (plain `.jsx`, React
19). Each section is a default-exported, zero/near-zero-prop component that imports its own copy
from `content.js` — sections are not designed to be reused with different content via props today
(e.g. `Hero.jsx` hardcodes its `FORMS`/`STRIP` arrays locally rather than accepting them). Only
the truly cross-cutting values (contact info, legal, turnaround figures) live in the shared
`content.js`; long-form prose lives inline in each section file (documented explicitly in
`README.md`: *"the only strings living inside components are the long-form section paragraphs...
which are prose rather than config"*).

### 4.2 Folder structure

```
src/
  main.jsx          — ReactDOM root, imports global styles.css once
  App.jsx           — page composition + the single scroll-reveal hook
  content.js         — shared/editable data: contact, legal, timelines, proof stats, case studies
  styles.css          — ALL styling for the entire app: tokens, resets, utilities, every
                        component's CSS, responsive rules, reduced-motion — one file, no CSS
                        Modules, no styled-components, no Tailwind
  sections/
    Header.jsx, Hero.jsx, Proof.jsx, Process.jsx, Trust.jsx, Contact.jsx, Stamp.jsx
```

Flat — one folder (`sections/`) holding every section component in page order, no nested
component library folder, no `components/ui` primitives folder yet (buttons/cards are just CSS
classes, not components — see §3.3–3.4 recommendations).

### 4.3 Routing

**None.** No `react-router` or any router dependency (`package.json` has only `react`/`react-dom`
+ Vite/`@vitejs/plugin-react` as devDependency). `main.jsx` mounts `<App/>` directly to `#root`;
the entire site is one static page with in-page `#anchor` navigation (Header nav links to
`#proof`/`#process`/`#contact`). This is a **single-purpose landing site**, not a multi-page app,
by design (confirmed in `README.md`: *"Single-page landing site... no router"*).

**Implication for this project:** introducing a second, distinct page (the General homepage)
requires adding routing for the first time. This is new infrastructure, not something to copy
from the CA page — see the companion note in the implementation plan for how routing is added
without touching any CA file.

### 4.4 Design tokens

All tokens are plain CSS custom properties on `:root` in `styles.css` (color, type scale, spacing,
container width — §1–2 above) — no JS token file, no Tailwind config, no design-token build step
(e.g. Style Dictionary). Because they're on `:root` in a stylesheet loaded once globally via
`main.jsx`, they're already available to any component anywhere in the app, including a future
page's components, with zero import needed beyond the global stylesheet already being loaded.

### 4.5 Tailwind conventions

**Not applicable — this project does not use Tailwind CSS.** No `tailwind.config.js`, no utility
classes in JSX (`className` values are semantic — `hero-cta`, `step-code`, `ba-panel`—not atomic
utility strings). Styling is hand-written semantic CSS with a small, deliberate utility layer of
its own (`.wrap`, `.section`, `.measure`, `.mono`, `.label`, `.lead`, `.on-ink`) — effectively a
bespoke, minimal utility system rather than Tailwind's. Any future styling work on this project
should continue this convention rather than introducing Tailwind, to avoid two competing styling
systems in one codebase.

### 4.6 Animation libraries

None (Framer Motion, GSAP, react-spring, etc. are all absent from `package.json`). All motion is
hand-rolled: one `IntersectionObserver` hook + CSS `transition`/`@keyframes` (§3.10). This keeps
the dependency footprint at just `react`/`react-dom` in production. New motion on the General page
should follow the same approach (CSS transitions/keyframes + the shared reveal hook) rather than
pulling in an animation library, to stay consistent with the project's near-zero-dependency
philosophy.

### 4.7 Reusable utilities

CSS utility classes already generic and safe to reuse verbatim on any new page (all defined in the
"Shared utilities" block, `styles.css:107-249`, and all global since there's one stylesheet):
`.wrap`, `.section`, `.measure`, `.mono`, `.label`, `.lead`, `.on-ink`, `.section-head`, `.btn`,
`.btn-quiet`, `[data-reveal]`. These require **no changes** to support a second page — they were
already written generically (no CA-specific selectors baked in), which is why Step 2 of this
project can lean on them directly instead of rewriting a parallel set.

JS-side, the one reusable utility is the `useRevealOnce` hook currently inlined in `App.jsx`
(§3.10) — recommended to be lifted into `src/hooks/useRevealOnce.js` as a new file.

### 4.8 Motion patterns

Summarized from §3.10 for quick reference when building new sections:
- Default entrance: `data-reveal` attribute + the shared observer → 12px rise + fade, 520ms ease,
  fires once.
- Signature/rare emphasis motion (used exactly once on the whole site, for the stamp): a bespoke
  overshoot keyframe, still gated by the same `.is-in` mechanism.
- Hover: color/background/transform transitions in the 150–170ms range (`160ms ease`
  consistently used for `.btn`/`.arrow`), never on scroll-triggered elements.
- Everything collapses to no motion under `prefers-reduced-motion: reduce`, globally enforced via
  a low-specificity universal-selector override at the bottom of `styles.css`, not per-component
  opt-outs.

---

## 5. Summary — what's already a design system vs. what's page-specific

**Already global/reusable (zero risk to reuse as-is on the General page):**
color tokens, type tokens, spacing tokens, `.wrap`/`.section`/`.measure`/`.mono`/`.label`/`.lead`/
`.on-ink`/`.section-head` utilities, `.btn`/`.btn-quiet`, `[data-reveal]` + the reveal hook logic,
the two-background-mode system (paper/ink + one-step-up panels), the hairline-rule visual
language, the 620px/860px/380px breakpoint set, `prefers-reduced-motion` handling, the three font
families.

**Page-specific to the CA page (do not port literally; use as a *pattern* reference only):**
all copy, the seal-red 3-use budget and the stamp illustration (a rhetorical device for this
industry's page, not a site-wide rule), the ledger/paper "document" visual metaphor details (ruled
background texture, "FILED" stamp, step codes formatted like file references), the specific
section set (Hero/Proof/Process/Trust/Contact) and their fusion of Contact+Footer into one
element.

**Missing and needs to be designed net-new for the General page:** an FAQ/accordion pattern
(§3.8), a standalone CTA section separate from the footer (§3.6), a standalone Footer component
separate from Contact (§3.6/3.9), card-grid components for Services/Industries/Why-Choose-Us
(§3.4), and — at the infrastructure level — routing, since the CA page currently assumes it is the
only page on the site (§4.3).
