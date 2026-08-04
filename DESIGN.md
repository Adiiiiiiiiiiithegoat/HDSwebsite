# Haven — Design Plan

Audience: owner/partner at a solo–mid Indian CA firm, 30–55, skims, buzzword-allergic.
Design world: **ledger and seal** — ink, ruled paper, rubber stamps, file reference codes.
Not SaaS. Not cream+terracotta, not black+acid-green, not broadsheet.

## Tokens

```
--ink-navy:     #1B2A3A   dark sections, display headings
--paper:        #F7F5F0   base background
--paper-2:      #FFFDF8   raised cards on paper
--ledger-green: #0E4D3C   secondary accent: rules, checks, tier marker
--seal-red:     #B23A2E   stamp ink — 3 uses total, see budget
--filed-grey:   #7A6F5D   hairline rules + borders ONLY
--filed-ink:    #5C5346   secondary text (darkened from filed-grey, see contrast)
--text:         #2B2B2B   body copy
--paper-dim:    #C9C2B4   secondary text on ink-navy
```

### Contrast (computed, WCAG 2.1)

| pair | ratio | verdict |
|---|---|---|
| `#7A6F5D` on `#F7F5F0` | **4.53** | passes AA by a hair — demoted to rules/borders only |
| `#5C5346` on `#F7F5F0` | **6.93** | secondary text uses this |
| `#2B2B2B` on `#F7F5F0` | 12.9 | body |
| `#C9C2B4` on `#1B2A3A` | 8.24 | secondary text on dark |
| `#FFFFFF` on `#B23A2E` | 5.94 | CTA label |
| `#B23A2E` on `#F7F5F0` | 5.45 | stamp ink on paper |

### Seal-red budget — exactly 3

1. Primary CTA button (hero + contact `mailto:` share one style = one use).
2. The **stamp** on the Proof "after" panel.
3. The hairline underscore beneath the Haven wordmark in the header.

Nowhere else. Not in headings, not in hover, not in badges, not in the pricing "recommended" tier (that gets ledger-green).

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
- Hairline rules (`1px solid var(--filed-grey)` at 35–50% alpha) used as *structure*: under the header, between process steps, around the stat block. Never as decoration.
- Section rhythm: `clamp(72px, 10vw, 128px)` vertical padding.
- Dark punctuation: **Proof only**. Everything else is paper. No stripes.

## Sections

Five sections. No pricing section and no form — the site is a static landing page
with contact details only, no backend of any kind.

1. **Hero** — paper. Mono eyebrow listing real forms (`GSTR-1 · GSTR-3B · 26Q · AOC-4`). h1 names the pain. One lead line. One seal-red CTA → `#contact`. Below: a thin ruled strip of "what we automate" in mono, comma-free, no icons.
2. **Proof** — ink-navy, full-bleed. Two-column desktop / stacked mobile: 16:9 video slot (poster treatment, play affordance, `TODO` marker for the file) + a before/after stat block in mono (`45 min → 90 sec`). Caption names form, input, and what was measured. **Stamp lands on the "after" panel** on first scroll-in.
3. **How We Work** — paper. Five rows, each a hairline-separated grid: `STEP.01` mono code in a narrow left column, heading + one-line body right. Mobile: code sits above heading, rules stay.
4. **Trust** — paper. Two stacked blocks: data handling commitment (plain language, `TODO` placeholders flagged) and a why-Indian-workflows block. Case-study component built, data-driven, hidden behind a flag.
5. **Contact** — ink-navy. Heading, then contact details in a hairline-ruled grid (email, WhatsApp, reach, LinkedIn), a `mailto:` CTA reusing the hero button style, then a thin footer bar.

## Stamp (signature element)

Inline SVG. Double ring + `FILED` + a mono date line, rotated −11°. Rough edges via `feTurbulence` + `feDisplacementMap` on the whole group, plus a soft `feGaussianBlur` on a low-opacity duplicate for ink bleed.

Animation: single-shot, 380ms — `scale(1.55) → scale(1)` with a 4% overshoot recoil, opacity 0 → 0.92. Triggered once by IntersectionObserver; never loops.

`prefers-reduced-motion: reduce` → rendered landed, zero animation, zero transition.

## Motion

One IntersectionObserver in `App.jsx` toggling `.is-in` on `[data-reveal]`. 12px rise + fade, 500ms. No library. Disabled entirely under reduced-motion.
