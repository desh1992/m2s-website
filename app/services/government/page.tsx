import { MainNav } from "@/components/navigation/main-nav"
import { Footer } from "@/components/sections/footer"
import { GovernmentServicesShowcaseSection } from "@/components/sections/government-services-showcase"

export default function GovernmentServicesPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <MainNav />
      <GovernmentServicesShowcaseSection />
      <Footer />
    </div>
  )
}
