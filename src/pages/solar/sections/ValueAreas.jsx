import { valueAreas } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'
import Tiles from '../../../components/Tiles.jsx'

export default function ValueAreas() {
  return (
    <Section id="value" ariaLabelledby="value-title">
      <SectionHead
        label="Where technology creates value"
        titleId="value-title"
        title="The fix is chosen to match the problem, not the other way around."
        lead="Depending on what the assessment finds, that might mean AI, automation, software you already have, a custom build, or connecting systems that don’t talk to each other."
      />
      <Tiles items={valueAreas.tiles} />
    </Section>
  )
}
