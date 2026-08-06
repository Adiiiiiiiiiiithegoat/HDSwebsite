import { workflow } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'
import Steps from '../../../components/Steps.jsx'

export default function Workflow() {
  return (
    <Section id="workflow" ariaLabelledby="workflow-title">
      <SectionHead
        label="Typical Solar EPC workflow"
        titleId="workflow-title"
        title="Lead to long-term maintenance, at a glance."
        lead={workflow.note}
      />
      <Steps items={workflow.steps} codePrefix="STAGE" />
    </Section>
  )
}
