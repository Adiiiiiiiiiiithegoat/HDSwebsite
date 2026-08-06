import { Link } from 'react-router-dom'
import { industries } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'
import Button from '../../../components/Button.jsx'

// The two industries render as the site's primary button rather than as white
// `.tile` cards — same Button component used by the hero and every CTA, so
// there is no second button style. `as={Link}` keeps them client-side route
// changes instead of full page loads.
export default function Industries() {
  return (
    <Section id="industries" tone="green" ariaLabelledby="industries-title">
      <SectionHead
        label="Industries"
        titleId="industries-title"
        title="The method is the same. The bottlenecks are industry-specific."
        lead="The sectors we work in today — CA Firms and Solar & Renewables — with the same assessment-first approach behind both."
      />
      <div className="industry-actions" data-reveal>
        {industries.tiles.map((tile) => (
          <Button as={Link} to={tile.href} key={tile.href}>
            {tile.title}
          </Button>
        ))}
      </div>
    </Section>
  )
}
