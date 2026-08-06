import { whatWeDo } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'
import Tiles from '../../../components/Tiles.jsx'

export default function WhatWeDo() {
  return (
    <Section id="what-we-do" tone="slate" ariaLabelledby="what-we-do-title">
      <SectionHead
        label="What we do"
        titleId="what-we-do-title"
        title="We solve operational problems. Technology is how we do it."
        lead="Not advice, not a platform to migrate to — a fix, scoped to the workflow that's actually costing you time."
      />
      <Tiles items={whatWeDo.tiles} />
    </Section>
  )
}
