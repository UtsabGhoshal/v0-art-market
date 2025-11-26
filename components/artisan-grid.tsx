"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Star, Search, X } from "lucide-react"
import { locations } from "@/lib/locations"

const allArtisans = [
  {
    id: 1,
    name: "Radha Pal",
    craft: "Clay Sculpture",
    location: "Krishnanagar, Nadia",
    locationId: "krishnanagar",
    rating: 4.9,
    reviews: 248,
    specialties: ["Matir Putul", "Deity Idols", "Mythological Figures"],
    yearsActive: 25,
    image: 'url("/bengali-woman-artisan-clay.jpg")',
  },
  {
    id: 2,
    name: "Hari Das",
    craft: "Handloom Weaving",
    location: "Shantipur, Nadia",
    locationId: "shantipur",
    rating: 4.8,
    reviews: 312,
    specialties: ["Cotton Saris", "Dhotis", "Natural Dyes"],
    yearsActive: 30,
    image: 'url("/man-traditional-loom.jpg")',
  },
  {
    id: 3,
    name: "Priya Malakar",
    craft: "Shola Craft",
    location: "Bankapasi, Katwa",
    locationId: "bankapasi",
    rating: 5,
    reviews: 189,
    specialties: ["Festival Decorations", "Crown Designs", "Ornaments"],
    yearsActive: 20,
    image: 'url("/woman-white-shola-craft.jpg")',
  },
  {
    id: 4,
    name: "Sandeep Kumar",
    craft: "Clay Idol Making",
    location: "Kumartuli, Kolkata",
    locationId: "kumartuli",
    rating: 4.9,
    reviews: 425,
    specialties: ["Temple Idols", "Durga Puja", "Festival Sculptures"],
    yearsActive: 35,
    image: 'url("/man-making-clay-idol.jpg")',
  },
  {
    id: 5,
    name: "Meera Roy",
    craft: "Handloom Weaving",
    location: "Phulia, Nadia",
    locationId: "shantipur",
    rating: 4.7,
    reviews: 156,
    specialties: ["Sarees", "Dress Materials", "Jacquard Patterns"],
    yearsActive: 22,
    image: 'url("/bengali-woman-weaving.jpg")',
  },
  {
    id: 6,
    name: "Amit Malakar",
    craft: "Shola Craft",
    location: "Bankapasi, Katwa",
    locationId: "bankapasi",
    rating: 4.8,
    reviews: 203,
    specialties: ["Wedding Decorations", "Custom Orders", "Festival Items"],
    yearsActive: 18,
    image: 'url("/man-shola-wood-carving.jpg")',
  },
]

export function ArtisanGrid() {
  const [search, setSearch] = useState("")
  const [selectedCraft, setSelectedCraft] = useState<string | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const locationParam = searchParams.get("location")
    if (locationParam) {
      setSelectedLocation(locationParam)
    }
  }, [searchParams])

  const crafts = [...new Set(allArtisans.map((a) => a.craft))]
  const selectedLocationData = selectedLocation ? locations.find((l) => l.id === selectedLocation) : null

  const filtered = allArtisans.filter((artisan) => {
    const matchesSearch =
      artisan.name.toLowerCase().includes(search.toLowerCase()) ||
      artisan.location.toLowerCase().includes(search.toLowerCase())
    const matchesCraft = !selectedCraft || artisan.craft === selectedCraft
    const matchesLocation = !selectedLocation || artisan.locationId === selectedLocation
    return matchesSearch && matchesCraft && matchesLocation
  })

  return (
    <div>
      {selectedLocationData && (
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-primary">{selectedLocationData.title}</h2>
            <p className="text-sm text-foreground/70 mt-1">{selectedLocationData.description}</p>
          </div>
          <button
            onClick={() => setSelectedLocation(null)}
            className="ml-4 p-2 hover:bg-amber-100 rounded-lg transition"
            aria-label="Clear location filter"
          >
            <X size={20} className="text-primary" />
          </button>
        </div>
      )}

      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-foreground/50" size={20} />
          <Input
            placeholder="Search artisans or locations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button variant={!selectedCraft ? "default" : "outline"} onClick={() => setSelectedCraft(null)} size="sm">
            All Crafts
          </Button>
          {crafts.map((craft) => (
            <Button
              key={craft}
              variant={selectedCraft === craft ? "default" : "outline"}
              onClick={() => setSelectedCraft(craft)}
              size="sm"
            >
              {craft}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((artisan) => (
          <Card key={artisan.id} className="overflow-hidden hover:shadow-xl transition flex flex-col">
            <div className="h-48 bg-cover bg-center opacity-20" style={{ backgroundImage: artisan.image }} />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-bold text-lg text-primary mb-1">{artisan.name}</h3>
              <p className="text-sm text-primary/80 font-medium mb-1">{artisan.craft}</p>
              <p className="text-xs text-foreground/60 mb-3">{artisan.location}</p>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(artisan.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-xs font-medium">{artisan.rating}</span>
                <span className="text-xs text-foreground/60">({artisan.reviews} reviews)</span>
              </div>

              <p className="text-xs text-foreground/60 mb-2">{artisan.yearsActive} years of experience</p>

              <div className="mb-4">
                <p className="text-xs font-semibold text-foreground/70 mb-1">Specialties:</p>
                <div className="flex flex-wrap gap-1">
                  {artisan.specialties.map((specialty) => (
                    <span key={specialty} className="text-xs bg-amber-100 text-amber-900 px-2 py-1 rounded">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <Link href={`/shop?artisan=${artisan.id}`} className="mt-auto">
                <Button className="w-full bg-primary hover:bg-primary/90">Visit the Shop</Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground/70 text-lg">No artisans found. Try adjusting your search.</p>
        </div>
      )}
    </div>
  )
}
