import { MainNav } from "@/components/navigation/main-nav"
import { Footer } from "@/components/sections/footer"
import { HealthcareShowcase } from "@/components/sections/healthcare-showcase"

export default function HealthcareServicesPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <MainNav />
      <HealthcareShowcase />
      <Footer />
    </div>
  )
}
