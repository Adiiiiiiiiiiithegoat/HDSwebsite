import { industries } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'
import Tiles from '../../../components/Tiles.jsx'

export default function Industries() {
  return (
    <Section id="industries" tone="green" ariaLabelledby="industries-title">
      <SectionHead
        label="Industries"
        titleId="industries-title"
        title="The method is the same. The bottlenecks are industry-specific."
        lead="The sectors we work in today — CA Firms and Solar & Renewables — with the same assessment-first approach behind both."
      />
      <Tiles items={industries.tiles} />
    </Section>
  )
}
