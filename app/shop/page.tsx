"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { useSearchParams } from "next/navigation"

export default function ShopPage() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category")

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Shop All Products</h1>
        <p className="text-lg text-foreground/70 mb-8">
          Browse handcrafted items directly from West Bengal's master artisans
        </p>
        <ProductGrid initialCategory={category || undefined} />
      </div>
      <Footer />
    </main>
  )
}
