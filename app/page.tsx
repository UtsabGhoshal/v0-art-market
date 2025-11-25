import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedArtisans } from "@/components/featured-artisans"
import { CraftCategories } from "@/components/craft-categories"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CraftCategories />
      <FeaturedArtisans />
      <Footer />
    </main>
  )
}
