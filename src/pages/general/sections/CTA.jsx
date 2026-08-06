import { cta, contact } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'
import Button from '../../../components/Button.jsx'

export default function CTA() {
  return (
    <Section id="cta" dark ariaLabelledby="cta-title">
      <SectionHead label="Contact" titleId="cta-title" title={cta.title} lead={cta.lead} />
      <Button href={`mailto:${contact.email}`}>
        Email us one workflow that's slowing you down
      </Button>
    </Section>
  )
}
