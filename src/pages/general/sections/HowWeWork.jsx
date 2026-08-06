import { howWeWork } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'

// Reuses `.trust-grid` / `.trust-block` / `.commit-list` verbatim from
// src/styles.css — the same two-block-with-checklist pattern the CA page
// uses for its Trust section, applied to general operating principles here.
export default function HowWeWork() {
  return (
    <Section id="how-we-work" dark ariaLabelledby="how-we-work-title">
      <SectionHead
        label="How we work"
        titleId="how-we-work-title"
        title="Diagnosis first. Then the smallest fix that solves it."
      />

      <div className="trust-grid">
        {howWeWork.blocks.map((block) => (
          <div className="trust-block" key={block.title} data-reveal>
            <h3>{block.title}</h3>
            <p>{block.body}</p>
            <ul className="commit-list">
              {block.commitments.map((c) => (
                <li key={c}>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
