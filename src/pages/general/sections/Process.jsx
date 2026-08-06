import { process } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'
import Steps from '../../../components/Steps.jsx'

export default function Process() {
  return (
    <Section id="process" ariaLabelledby="process-title">
      <SectionHead
        label="Our process"
        titleId="process-title"
        title="You see it working before you commit to it."
        lead="Five steps. The first two cost you nothing but a call and the time to walk us through one workflow."
      />
      <Steps items={process.steps} />
    </Section>
  )
}
