"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArtisanGrid } from "@/components/artisan-grid"
import { useSearchParams } from "next/navigation"
import { locations } from "@/lib/locations"

export default function ArtisansPage() {
  const searchParams = useSearchParams()
  const locationParam = searchParams.get("location")
  const selectedLocation = locationParam ? locations.find((l) => l.id === locationParam) : null

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          {selectedLocation ? selectedLocation.title : "Meet Our Artisans"}
        </h1>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl">
          {selectedLocation
            ? selectedLocation.description
            : "Discover the talented craftspeople behind every piece. Each artisan carries forward generations of tradition and skill."}
        </p>
        <ArtisanGrid />
      </div>
      <Footer />
    </main>
  )
}
