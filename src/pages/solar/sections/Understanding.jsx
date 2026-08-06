import { understanding } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'

export default function Understanding() {
  return (
    <Section id="understanding" tone="slate" ariaLabelledby="understanding-title">
      <SectionHead
        label="Understanding your business"
        titleId="understanding-title"
        title="Every Solar EPC company runs a different mix of work."
        lead={understanding.lead}
      />
    </Section>
  )
}
