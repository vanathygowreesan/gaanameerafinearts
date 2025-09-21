import AnimatedBackground from "@/components/animate-background"
import HeroSection from "@/components/hero-section"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <div className="pt-16">
        <HeroSection />
      </div>
    </main>
  )
}
