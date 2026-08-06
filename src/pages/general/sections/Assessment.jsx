import { assessment } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'

// Reuses `.trust-grid` / `.trust-block` / `.commit-list` for the two-block
// layout, and `.hero-strip` for the scope/timeline/format/cost line —
// both verbatim from src/styles.css. Neither class is scoped to its
// original section, so both are safe to reuse standalone here.
export default function Assessment() {
  return (
    <Section id="assessment" tone="slate" ariaLabelledby="assessment-title">
      <SectionHead
        label="Business workflow assessment"
        titleId="assessment-title"
        title="Before we recommend anything, we watch the workflow run."
        lead={assessment.lead}
      />

      <div className="trust-grid">
        <div className="trust-block" data-reveal>
          <h3>What we document</h3>
          <ul className="commit-list">
            {assessment.includes.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="trust-block" data-reveal>
          <h3>What to expect</h3>
          {/* .hero-strip's own margin-top is tuned for sitting under a hero
              CTA row; reset it here since this reuse sits directly under an
              h3 inside a compact trust-block. */}
          <div className="hero-strip" style={{ marginTop: 0 }}>
            {assessment.strip.map((s) => (
              <div key={s.k}>
                <span className="k">{s.k}</span>
                <span className="v">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
