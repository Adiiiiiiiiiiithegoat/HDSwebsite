# Haven — Design Plan

Audience: owner/partner at a solo–mid Indian CA firm, 30–55, skims, buzzword-allergic.
Design world: enterprise consulting — Palantir / Linear / Stripe Enterprise / Vercel.
Professional, trustworthy, minimal. Not a flashy AI startup, not SaaS-cute, no neon.

The site's copy, layout and the Proof section's stamp motif still speak in the
firm's own "filed/automated" language (see Sections below) — only the **colour
system** changed, site-wide, in the production-readiness pass. Contrast for
every pairing below was recomputed against the new palette.

## Tokens

```
--primary:       #0F172A   dark sections, body/heading text on light backgrounds
--secondary:     #1E293B   raised panels inside dark sections; hover step for primary fills
--background:    #F8FAFC   base page background
--surface:       #FFFFFF   raised cards on background
--accent:        #10B981   decorative only — dark-section highlights, brand flourishes
--accent-strong: #047857   accent darkened for text/icon/button-fill use on light surfaces
--border:        #E2E8F0   hairline rules + borders ONLY
--text:          #0F172A   body copy
--text-muted:    #475569   secondary text on light backgrounds
--text-on-dark:  #CBD5E1   secondary text on --primary / --secondary
```

### Contrast (computed, WCAG 2.1)

| pair | ratio | verdict |
|---|---|---|
| `#0F172A` on `#F8FAFC` | **17.1** | body / headings |
| `#475569` on `#F8FAFC` | **7.4** | secondary text |
| `#475569` on `#FFFFFF` | **7.6** | secondary text on cards |
| `#CBD5E1` on `#0F172A` | **12.0** | secondary text on dark sections |
| `#10B981` (accent) on `#0F172A` | 7.0 | safe as text/icon **only on dark backgrounds** |
| `#10B981` (accent) on `#F8FAFC` / `#FFFFFF` | **2.5** | fails AA — decorative use only on light bg (borders, washes, the wordmark flourish), never text or a button fill |
| `#FFFFFF` on `#047857` (accent-strong) | **5.5** | CTA label — the button/`.fact`/checkmark colour on light backgrounds |

### The accent — one colour, used sparingly

The old palette rationed a stamp-specific "seal-red" to exactly three uses on
the CA page. That budget was a page-specific rhetorical device for the ledger
motif, not a site-wide rule, and the new system only has one accent colour to
begin with. The operative constraint now is contrast, not a use-count:

- `--accent` (`#10B981`) is **never used for text, icons, or a button fill on a
  light surface** — at 2.5:1 it fails WCAG AA outright. It appears only on dark
  sections (where it's a clean 7:1) and as small decorative flourishes on light
  ones (the wordmark underline, hover borders) where nothing depends on it for
  comprehension.
- `--accent-strong` (`#047857`) is the accent darkened until white text on it
  clears AA (5.5:1) — this is what the CTA button, the `.fact` line and the
  commit-list checkmark actually use on light backgrounds. It still reads as
  "the brand green," just legible.

## Type

- **Display** — Fraunces (500/600, `opsz` 72, slight negative tracking). Hero h1, section h2 only.
- **Body** — IBM Plex Sans 400/500/600.
- **Utility** — IBM Plex Mono 400/500, uppercase + `0.08em` tracking for labels. Every numeral on the page is mono: timings, prices, step codes, form names.

Google Fonts, `display=swap`, preconnect.

Scale:
```
--fs-hero  clamp(2.25rem, 5.6vw, 4.25rem)   Fraunces 600, lh 1.04
--fs-h2    clamp(1.75rem, 3.4vw, 2.5rem)    Fraunces 600, lh 1.12
--fs-h3    1.1875rem                        Plex Sans 600
--fs-lead  clamp(1.0625rem, 1.5vw, 1.25rem) Plex Sans 400, lh 1.55
--fs-body  1.0625rem                        lh 1.65
--fs-sm    0.9375rem
--fs-label 0.75rem                          Plex Mono, tracked
```

## Layout

- Max width 1120px, gutter `clamp(20px, 5vw, 48px)`. Content measure capped at 62ch.
- Hairline rules (`1px solid var(--border)`) used as *structure*: under the header, between process steps, around the stat block. Never as decoration.
- Section rhythm: `clamp(72px, 10vw, 128px)` vertical padding.
- Dark punctuation: **Proof only**. Everything else is paper. No stripes.

## Sections

Five sections. No pricing section and no form — the site is a static landing page
with contact details only, no backend of any kind.

1. **Hero** — background. Mono eyebrow listing real forms (`GSTR-1 · GSTR-3B · AOC-4`). h1 names the pain. One accent CTA → `#contact`. Below: a thin ruled strip of "what we automate" in mono, comma-free, no icons.
2. **Proof** — dark (`--primary`), full-bleed. Two-column desktop / stacked mobile: 16:9 video slot (poster treatment, play affordance, `TODO` marker for the file) + a before/after stat block in mono (`45 min → 90 sec`). Caption names form, input, and what was measured. **Stamp lands on the "after" panel** on first scroll-in.
3. **How We Work** — background. Five rows, each a hairline-separated grid: `STEP.01` mono code in a narrow left column, heading + one-line body right. Mobile: code sits above heading, rules stay.
4. **Trust** — background. Two stacked blocks: data handling commitment (plain language, `TODO` placeholders flagged) and a why-Indian-workflows block. Case-study component built, data-driven, hidden behind a flag.
5. **Contact** — dark (`--primary`). Heading, then contact details in a hairline-ruled grid (email, WhatsApp, reach, LinkedIn), a `mailto:` CTA reusing the hero button style, then a thin footer bar.

## Stamp (signature element)

Inline SVG. Double ring + `FILED` + a mono date line, rotated −11°. Rough edges via `feTurbulence` + `feDisplacementMap` on the whole group, plus a soft `feGaussianBlur` on a low-opacity duplicate for ink bleed.

Animation: single-shot, 380ms — `scale(1.55) → scale(1)` with a 4% overshoot recoil, opacity 0 → 0.92. Triggered once by IntersectionObserver; never loops.

`prefers-reduced-motion: reduce` → rendered landed, zero animation, zero transition.

## Motion

One IntersectionObserver in `App.jsx` toggling `.is-in` on `[data-reveal]`. 12px rise + fade, 500ms. No library. Disabled entirely under reduced-motion.
