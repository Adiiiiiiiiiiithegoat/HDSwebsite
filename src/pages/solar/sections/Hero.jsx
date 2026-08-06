import { hero } from '../content.js'
import Button from '../../../components/Button.jsx'

// Same hero template as the General homepage's own Hero (eyebrow list → h1 →
// lead → CTA-with-note → stat strip), reusing `.hero` / `.hero-eyebrow` /
// `.hero-cta` / `.hero-strip` verbatim from src/styles.css. Solar-specific
// copy only.
export default function Hero() {
  return (
    <section className="section hero" aria-labelledby="hero-title">
      <div className="wrap">
        <p className="label hero-eyebrow" data-reveal>
          {hero.eyebrow.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </p>

        <h1 id="hero-title" data-reveal>
          {hero.h1}
        </h1>

        <p className="lead" data-reveal>
          {hero.lead}
        </p>

        <div className="hero-cta" data-reveal>
          <Button href="#cta">Request a Business Workflow Assessment</Button>
          <p className="note">{hero.ctaNote}</p>
        </div>

        <div className="hero-strip" data-reveal>
          {hero.strip.map((s) => (
            <div key={s.k}>
              <span className="k">{s.k}</span>
              <span className="v">{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
