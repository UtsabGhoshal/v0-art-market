"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"

const categories = [
  {
    id: "handloom",
    name: "Handloom Textiles",
    description: "Exquisite cotton saris, dhotis, and dress materials from Shantipur",
    image: 'url("/traditional-handloom-textile-weaving.jpg")',
    color: "from-amber-100 to-amber-200",
  },
  {
    id: "clay-dolls",
    name: "Clay Sculptures",
    description: "Lifelike matir putul (clay dolls) from Krishnanagar",
    image: 'url("/clay-art-sculptures.jpg")',
    color: "from-red-100 to-red-200",
  },
  {
    id: "shola-craft",
    name: "Shola Craft",
    description: "Intricate shola wood creations for festive occasions",
    image: 'url("/white-shola-wood-festival-decorations.jpg")',
    color: "from-yellow-100 to-yellow-200",
  },
  {
    id: "clay-idols",
    name: "Kumartuli Idols",
    description: "Sacred clay idols crafted with devotion and artistry",
    image: 'url("/traditional-clay-deity-idol.jpg")',
    color: "from-orange-100 to-orange-200",
  },
  {
    id: "fuchka",
    name: "Artisan Snacks",
    description: "Traditional crispy fuchka shells from Pally",
    image: 'url("/crispy-traditional-fuchka-shells.jpg")',
    color: "from-amber-100 to-yellow-100",
  },
]

export function CraftCategories() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Craft Categories</h2>
          <p className="text-lg text-foreground/70">Explore the diverse traditions of West Bengal's artisans</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/shop?category=${category.id}`}>
              <Card
                className={`h-full overflow-hidden hover:shadow-lg transition cursor-pointer bg-gradient-to-br ${category.color}`}
              >
                <div className="h-40 bg-gradient-to-br opacity-20" style={{ backgroundImage: category.image }} />
                <div className="p-4">
                  <h3 className="font-semibold text-primary mb-2">{category.name}</h3>
                  <p className="text-sm text-foreground/70">{category.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
