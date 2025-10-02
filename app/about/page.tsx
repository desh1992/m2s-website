import { MainNav } from "@/components/navigation/main-nav"
import { Footer } from "@/components/sections/footer"
import { ContactSection } from "@/components/sections/contact-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <MainNav />
      
      {/* About Content */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              WHO WE ARE
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
              How We Got Here
            </h2>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400 leading-relaxed">
              <p className="text-xl mb-8">
                We're a young and talented group of entrepreneurs and engineers with a groundbreaking idea that we hope will contribute towards a better tomorrow. We provide smart solutions for companies of all sizes and pride ourselves on our unparalleled, dedicated service.
              </p>
              
              <p className="text-xl mb-8">
                At M2S Tech Solutions, we believe that the right understanding and technological edge can lead companies towards a successful future. We always seek valuable feedback from our clients in order to learn and evolve. Contact us today to set up a meeting with one of our sales representatives or request a demo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactSection />
      
      <Footer />
    </div>
  )
}
