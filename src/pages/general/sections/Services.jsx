import { services } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'
import Tiles from '../../../components/Tiles.jsx'

export default function Services() {
  return (
    <Section id="services" ariaLabelledby="services-title">
      <SectionHead
        label="Services"
        titleId="services-title"
        title="Six ways we remove operational drag."
        lead="Which of these applies depends on the workflow — the assessment tells us which, not the sales conversation."
      />
      <Tiles items={services.tiles} />
    </Section>
  )
}
