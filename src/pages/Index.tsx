import { HeroSection } from './sections/HeroSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { ServicesSection } from './sections/ServicesSection'
import { ProfessionalsSection } from './sections/ProfessionalsSection'
import { TestimonialSection } from './sections/TestimonialSection'
import { ContactSection } from './sections/ContactSection'

const Index = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <ExperienceSection />
      <ServicesSection />
      <ProfessionalsSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  )
}

export default Index
