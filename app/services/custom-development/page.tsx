import { MainNav } from "@/components/navigation/main-nav"
import { Footer } from "@/components/sections/footer"
import { CustomDevelopmentServicesShowcaseSection } from "@/components/sections/custom-development-services-showcase"

export default function CustomDevelopmentServicesPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <MainNav />
      <CustomDevelopmentServicesShowcaseSection />
      <Footer />
    </div>
  )
}
