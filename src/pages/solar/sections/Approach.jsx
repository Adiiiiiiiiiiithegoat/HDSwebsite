import { approach } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'
import Steps from '../../../components/Steps.jsx'

export default function Approach() {
  return (
    <Section id="approach" tone="slate" ariaLabelledby="approach-title">
      <SectionHead
        label="Our approach"
        titleId="approach-title"
        title="Understand. Analyze. Recommend. Build. Improve."
        lead="You see it working before you commit to it — the first two steps cost you nothing but a call and the time to walk us through one workflow."
      />
      <Steps items={approach.steps} codePrefix="PHASE" />
    </Section>
  )
}
