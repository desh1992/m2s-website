import { MainNav } from "@/components/navigation/main-nav"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ProcessSection } from "@/components/sections/process-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <MainNav />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
