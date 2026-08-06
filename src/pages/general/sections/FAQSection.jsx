import { faq } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'
import FAQ from '../../../components/FAQ.jsx'

export default function FAQSection() {
  return (
    <Section id="faq" tone="slate" ariaLabelledby="faq-title">
      <SectionHead label="FAQ" titleId="faq-title" title="Before you ask." />
      <FAQ items={faq.items} />
    </Section>
  )
}
