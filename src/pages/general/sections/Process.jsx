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
        title="We understand the workflow before we recommend anything."
        lead="Five steps, from understanding how the business runs to measuring the result. The first two are a conversation and a close look at one workflow."
      />
      <Steps items={process.steps} />
    </Section>
  )
}
