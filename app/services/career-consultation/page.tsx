import { MainNav } from "@/components/navigation/main-nav"
import { Footer } from "@/components/sections/footer"
import { CareerServicesShowcaseSection } from "@/components/sections/career-services-showcase"

export default function CareerConsultationPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <MainNav />
      <CareerServicesShowcaseSection />
      <Footer />
    </div>
  )
}
