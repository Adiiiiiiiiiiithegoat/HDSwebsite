import { whyChooseUs } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us" dark ariaLabelledby="why-choose-us-title">
      <SectionHead
        label="Why choose us"
        titleId="why-choose-us-title"
        title="Four things that don't change from engagement to engagement."
      />

      <div className="trust-grid">
        <div className="trust-block" data-reveal>
          <ul className="commit-list">
            {whyChooseUs.commitments.map((c) => (
              <li key={c.strong}>
                <span>
                  <strong>{c.strong}</strong> {c.rest}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="trust-block" data-reveal>
          <h3>{whyChooseUs.note.title}</h3>
          <p>{whyChooseUs.note.body}</p>
        </div>
      </div>
    </Section>
  )
}
