# Haven — marketing site

Single-page landing site for Haven, which builds automation for Indian CA firms.
Vite + React, plain CSS, no UI library, no router, no backend, no forms —
contact is by email, WhatsApp and phone only.

Five sections: Hero, Proof, How We Work, Trust, Contact.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
npm run preview  # serve the built output
```

## Deploy (Vercel)

Static build, no config file needed. Framework preset: **Vite**.
Build command `npm run build`, output directory `dist`.

## Where things are

```
src/content.js          every editable value — contact details, links, copy constants
src/styles.css          design tokens, type scale, all section styles
src/App.jsx             single IntersectionObserver that drives every reveal + the stamp
src/sections/           one file per section, in page order
DESIGN.md               palette, contrast maths, type scale, accent usage rules
```

Change copy values in `src/content.js`. The only strings living inside components are
the long-form section paragraphs (`Hero.jsx`, `Process.jsx`, `Trust.jsx`), which are
prose rather than config.

## Placeholders that still need real content

| What | Where | Notes |
|---|---|---|
| **Demo video** | `public/demo/gstr1-fill.mp4` + poster, then set `proof.videoSrc` / `proof.poster` in `src/content.js` | Until set, a styled poster placeholder renders. The slot is marked with a comment block in `src/sections/Proof.jsx`. |
| **Proof figures** | `proof` in `src/content.js` | `45 min → 90 sec` and the caption are written to match a real recording. Re-time them against the actual video before launch — the caption claims they were measured. |
| **Data policy specifics** | `COMMITMENTS` in `src/sections/Trust.jsx` | Four TODOs listed above the array: on-prem/VPN split, log retention, named encryption standard, NDA review. |
| **Case studies** | `caseStudies` + `SHOW_CASE_STUDIES` in `src/content.js` | Component is built and hidden. Fill the array, flip the flag — no component changes. |
| **Contact details** | `contact` in `src/content.js` | Email, phone, WhatsApp number and LinkedIn are all dummies. These are the only ways to reach Haven from the page, so they need to be right before launch. |
| **Privacy / Terms** | `legal` in `src/content.js` | Both hrefs are `#`. |
| **OG image** | `public/og.png`, 1200×630, plus the real origin in `index.html` | The page will be pasted into WhatsApp groups; the card matters. |

## Notes

- The accent colour appears in three places, deliberately: the CTA button style (hero
  + contact `mailto:`), the stamp in the Proof section, and the rule under the
  wordmark. The button and stamp use `--accent-strong` (contrast-safe as text/fill on
  a light background); the wordmark rule is a purely decorative flourish, so it uses
  the raw `--accent`. See DESIGN.md for why those aren't interchangeable.
- The stamp animates once, on first scroll into view. Under
  `prefers-reduced-motion: reduce` it renders already landed and nothing animates.
- Verified with no horizontal overflow at 1440, 375 and 360px.
