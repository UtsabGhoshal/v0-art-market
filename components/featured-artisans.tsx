"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star } from "lucide-react"

const artisans = [
  {
    id: 1,
    name: "Radha Pal",
    craft: "Krishnanagar Clay Sculptor",
    location: "Krishnanagar, Nadia",
    rating: 4.9,
    reviews: 248,
    description: "Fourth generation clay artist creating lifelike matir putul inspired by mythology and daily life",
    image: 'url("/bengali-woman-artisan-clay-sculptor.jpg")',
  },
  {
    id: 2,
    name: "Hari Das",
    craft: "Shantipur Handloom Weaver",
    location: "Shantipur, Nadia",
    rating: 4.8,
    reviews: 312,
    description: "Master weaver specializing in traditional cotton saris with intricate patterns and natural dyes",
    image: 'url("/bengali-man-traditional-loom-weaver.jpg")',
  },
  {
    id: 3,
    name: "Priya Malakar",
    craft: "Shola Wood Artisan",
    location: "Bankapasi, Katwa",
    rating: 5,
    reviews: 189,
    description: "Specialized in creating delicate shola wood decorations and festival ornaments with precision",
    image: 'url("/bengali-woman-crafting-white-shola-wood.jpg")',
  },
  {
    id: 4,
    name: "Sandeep Kumar",
    craft: "Kumartuli Clay Artist",
    location: "Kumartuli, Kolkata",
    rating: 4.9,
    reviews: 425,
    description: "Creator of intricate clay idols for temples and festivals, maintaining 7 generations of tradition",
    image: 'url("/bengali-man-making-clay-deity-idol.jpg")',
  },
]

export function FeaturedArtisans() {
  return (
    <section className="py-16 px-4 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Featured Artisans</h2>
          <p className="text-lg text-foreground/70">Meet the skilled craftspeople behind our collections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artisans.map((artisan) => (
            <Card key={artisan.id} className="overflow-hidden hover:shadow-xl transition flex flex-col">
              <div className="h-48 bg-cover bg-center bg-opacity-20" style={{ backgroundImage: artisan.image }} />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-lg text-primary mb-1">{artisan.name}</h3>
                <p className="text-sm text-primary/80 font-medium mb-1">{artisan.craft}</p>
                <p className="text-xs text-foreground/60 mb-3">{artisan.location}</p>

                <div className="flex items-center gap-1 mb-3">
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
                  <span className="text-xs text-foreground/60">({artisan.reviews})</span>
                </div>

                <p className="text-sm text-foreground/70 mb-4 flex-1">{artisan.description}</p>

                <Link href={`/artisans/${artisan.id}`}>
                  <Button className="w-full bg-primary hover:bg-primary/90">View Profile</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/artisans">
            <Button size="lg" variant="outline">
              View All Artisans
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
