import { bottlenecks } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'
import Tiles from '../../../components/Tiles.jsx'

export default function Bottlenecks() {
  return (
    <Section id="bottlenecks" dark ariaLabelledby="bottlenecks-title">
      <SectionHead
        label="Common operational bottlenecks"
        titleId="bottlenecks-title"
        title="Where friction tends to concentrate, by department."
        lead="The exact bottleneck depends on which pathway you run and how the team is structured — this is where it shows up most often across the workflow above."
      />
      <Tiles items={bottlenecks.tiles} />
    </Section>
  )
}
