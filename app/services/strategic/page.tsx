import { MainNav } from "@/components/navigation/main-nav"
import { Footer } from "@/components/sections/footer"
import { StrategicBusinessServicesShowcaseSection } from "@/components/sections/strategic-business-services-showcase"

export default function StrategicBusinessServicesPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <MainNav />
      <StrategicBusinessServicesShowcaseSection />
      <Footer />
    </div>
  )
}
