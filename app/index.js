import { Hero } from "@/components/ui/animated-hero"
import { FeaturesSection } from "@/components/ui/animated-background"
import { AboutSection } from "@/components/ui/about-section"

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <AboutSection />
    </main>
  )
}
