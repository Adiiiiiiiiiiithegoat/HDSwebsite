import { cta, contact } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'
import Button from '../../../components/Button.jsx'

export default function CTA() {
  return (
    <Section id="cta" dark ariaLabelledby="cta-title">
      <SectionHead label="Contact" titleId="cta-title" title={cta.title} lead={cta.lead} />
      <Button href={`mailto:${contact.emails[0]}`}>
        Email us one workflow that's slowing you down
      </Button>
      {/* The button is a mailto:, and a browser with no mail handler answers
          one by opening a blank tab — so the addresses are spelled out here
          too, readable and copyable without a mail client. */}
      <p className="cta-emails">
        {contact.emails.map((email) => (
          <a key={email} href={`mailto:${email}`}>
            {email}
          </a>
        ))}
      </p>
    </Section>
  )
}
