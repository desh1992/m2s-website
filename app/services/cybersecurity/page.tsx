import { MainNav } from "@/components/navigation/main-nav"
import { Footer } from "@/components/sections/footer"
import { CybersecurityServicesShowcaseSection } from "@/components/sections/cybersecurity-services-showcase"

export default function CybersecurityServicesPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <MainNav />
      <CybersecurityServicesShowcaseSection />
      <Footer />
    </div>
  )
}
