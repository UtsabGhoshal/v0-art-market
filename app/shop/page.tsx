"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { useSearchParams } from "next/navigation"
import { X } from "lucide-react"
import Link from "next/link"

const artisanNames: Record<string, string> = {
  "1": "Radha Pal",
  "2": "Hari Das",
  "3": "Priya Malakar",
  "4": "Sandeep Kumar",
  "5": "Meera Roy",
  "6": "Amit Malakar",
}

export default function ShopPage() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category")
  const artisanId = searchParams.get("artisan")
  const artisanName = artisanId ? artisanNames[artisanId] : null

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {artisanId && artisanName && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-primary">Viewing products by {artisanName}</h2>
              <p className="text-sm text-foreground/70 mt-1">Browse handcrafted items from this artisan</p>
            </div>
            <Link href="/shop" className="ml-4 p-2 hover:bg-amber-100 rounded-lg transition">
              <X size={20} className="text-primary" />
            </Link>
          </div>
        )}

        <h1 className="text-4xl font-bold text-primary mb-4">
          {artisanId && artisanName ? `${artisanName}'s Products` : "Shop All Products"}
        </h1>
        <p className="text-lg text-foreground/70 mb-8">
          {artisanId && artisanName
            ? `Explore handcrafted items directly from ${artisanName}`
            : "Browse handcrafted items directly from West Bengal's master artisans"}
        </p>
        <ProductGrid initialCategory={category || undefined} initialArtisan={artisanId || undefined} />
      </div>
      <Footer />
    </main>
  )
}
