import { about } from '../content.js'
import Section from '../../../components/Section.jsx'
import SectionHead from '../../../components/SectionHead.jsx'

export default function About() {
  return (
    <Section id="about" ariaLabelledby="about-title">
      <SectionHead
        label="About"
        titleId="about-title"
        title="Why we started Solution Haven"
        lead={about.lead}
      />
    </Section>
  )
}
