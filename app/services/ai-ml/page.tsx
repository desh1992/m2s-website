import { MainNav } from "@/components/navigation/main-nav"
import { Footer } from "@/components/sections/footer"
import { AiMlServicesShowcaseSection } from "@/components/sections/ai-ml-services-showcase"

export default function AiMlServicesPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <MainNav />
      <AiMlServicesShowcaseSection />
      <Footer />
    </div>
  )
}
