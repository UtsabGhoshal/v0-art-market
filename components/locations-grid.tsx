"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { locations } from "@/lib/locations"

export function LocationsGrid() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Discover Artisan Locations</h2>
          <p className="text-lg text-foreground/70">
            Explore the unique craft traditions from different regions of Bengal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {locations.map((location) => (
            <Link key={location.id} href={`/artisans?location=${location.id}`}>
              <Card
                className={`h-full overflow-hidden hover:shadow-lg hover:scale-105 transition-all cursor-pointer bg-gradient-to-br ${location.color}`}
              >
                <div className="h-40 bg-gradient-to-br opacity-20" style={{ backgroundImage: location.image }} />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-primary mb-1">{location.name}</h3>
                  <p className="text-xs font-semibold text-primary/70 mb-2">{location.specialization}</p>
                  <p className="text-sm text-foreground/70 line-clamp-3">{location.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-6">
            Click on any location to view all artisans from that region
          </p>
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
