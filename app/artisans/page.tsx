import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArtisanGrid } from "@/components/artisan-grid"

export default function ArtisansPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Meet Our Artisans</h1>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl">
          Discover the talented craftspeople behind every piece. Each artisan carries forward generations of tradition
          and skill.
        </p>
        <ArtisanGrid />
      </div>
      <Footer />
    </main>
  )
}
