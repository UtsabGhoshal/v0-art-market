"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Star, Search, ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"

interface Product {
  id: number
  name: string
  price: number
  artisan: string
  artisanId: number
  category: string
  rating: number
  reviews: number
  image: string
}

const allProducts: Product[] = [
  // Handloom Products
  {
    id: 5,
    name: "Traditional Bengal Cotton Saree",
    price: 8500,
    artisan: "Hari Das",
    artisanId: 2,
    category: "handloom",
    rating: 4.9,
    reviews: 67,
    image: 'url("/public/traditional-handloom-textile-weaving.jpg")',
  },
  {
    id: 6,
    name: "Dhoti - Pure Cotton",
    price: 3500,
    artisan: "Hari Das",
    artisanId: 2,
    category: "handloom",
    rating: 4.8,
    reviews: 41,
    image: 'url("/public/traditional-handloom-textile-weaving.jpg")',
  },
  {
    id: 7,
    name: "Handwoven Dress Material",
    price: 2500,
    artisan: "Hari Das",
    artisanId: 2,
    category: "handloom",
    rating: 4.7,
    reviews: 35,
    image: 'url("/public/traditional-handloom-textile-weaving.jpg")',
  },
  {
    id: 8,
    name: "Silk-Cotton Blend Saree",
    price: 12000,
    artisan: "Hari Das",
    artisanId: 2,
    category: "handloom",
    rating: 5,
    reviews: 58,
    image: 'url("/public/traditional-handloom-textile-weaving.jpg")',
  },

  // Clay Dolls
  {
    id: 1,
    name: "Durga Puja Idol Set",
    price: 4500,
    artisan: "Radha Pal",
    artisanId: 1,
    category: "clay-dolls",
    rating: 5,
    reviews: 45,
    image: 'url("/public/traditional-clay-deity-idol.jpg")',
  },
  {
    id: 2,
    name: "Village Life Diorama",
    price: 3200,
    artisan: "Radha Pal",
    artisanId: 1,
    category: "clay-dolls",
    rating: 4.8,
    reviews: 32,
    image: 'url("/public/clay-art-sculptures.jpg")',
  },
  {
    id: 3,
    name: "Farmer & Cow Sculpture",
    price: 2800,
    artisan: "Radha Pal",
    artisanId: 1,
    category: "clay-dolls",
    rating: 4.9,
    reviews: 28,
    image: 'url("/public/clay-art-sculptures.jpg")',
  },
  {
    id: 4,
    name: "Kali Idol - Festival Edition",
    price: 5500,
    artisan: "Radha Pal",
    artisanId: 1,
    category: "clay-dolls",
    rating: 5,
    reviews: 52,
    image: 'url("/public/traditional-clay-deity-idol.jpg")',
  },

  // Shola Craft
  {
    id: 9,
    name: "Durga Crown - Premium",
    price: 6500,
    artisan: "Priya Malakar",
    artisanId: 3,
    category: "shola-craft",
    rating: 5,
    reviews: 43,
    image: 'url("/public/white-shola-wood-festival-decorations.jpg")',
  },
  {
    id: 10,
    name: "Festival Chandelier Set",
    price: 8000,
    artisan: "Priya Malakar",
    artisanId: 3,
    category: "shola-craft",
    rating: 5,
    reviews: 28,
    image: 'url("/public/white-shola-wood-festival-decorations.jpg")',
  },
  {
    id: 11,
    name: "Customized Wedding Decoration",
    price: 15000,
    artisan: "Priya Malakar",
    artisanId: 3,
    category: "shola-craft",
    rating: 5,
    reviews: 12,
    image: 'url("/public/white-shola-wood-festival-decorations.jpg")',
  },
  {
    id: 12,
    name: "Shola Ornament Collection",
    price: 3500,
    artisan: "Priya Malakar",
    artisanId: 3,
    category: "shola-craft",
    rating: 4.9,
    reviews: 31,
    image: 'url("/public/white-shola-wood-festival-decorations.jpg")',
  },

  // Clay Idols
  {
    id: 13,
    name: "Complete Durga Puja Set - Standard",
    price: 22000,
    artisan: "Sandeep Kumar",
    artisanId: 4,
    category: "clay-idols",
    rating: 4.9,
    reviews: 89,
    image: 'url("/public/traditional-clay-deity-idol.jpg")',
  },
  {
    id: 14,
    name: "Ganesha Idol - Medium",
    price: 4500,
    artisan: "Sandeep Kumar",
    artisanId: 4,
    category: "clay-idols",
    rating: 4.8,
    reviews: 56,
    image: 'url("/public/traditional-clay-deity-idol.jpg")',
  },
  {
    id: 15,
    name: "Kali Idol - Grand",
    price: 18000,
    artisan: "Sandeep Kumar",
    artisanId: 4,
    category: "clay-idols",
    rating: 5,
    reviews: 72,
    image: 'url("/public/traditional-clay-deity-idol.jpg")',
  },
  {
    id: 16,
    name: "Lakshmi Puja Set",
    price: 9500,
    artisan: "Sandeep Kumar",
    artisanId: 4,
    category: "clay-idols",
    rating: 4.9,
    reviews: 61,
    image: 'url("/public/traditional-clay-deity-idol.jpg")',
  },
]

export function ProductGrid({ initialCategory }: { initialCategory?: string }) {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory || null)
  const [sortBy, setSortBy] = useState("featured")
  const { addItem } = useCart()
  const [addedProduct, setAddedProduct] = useState<number | null>(null)

  const categories = [...new Set(allProducts.map((p) => p.category))]

  const filtered = allProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.artisan.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = !selectedCategory || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  if (sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price)
  } else if (sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price)
  } else if (sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating)
  }

  const handleAddToCart = (product: Product) => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      artisan: product.artisan,
      artisanId: product.artisanId,
      image: product.image,
    })
    setAddedProduct(product.id)
    setTimeout(() => setAddedProduct(null), 1500)
  }

  return (
    <div>
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-foreground/50" size={20} />
          <Input
            placeholder="Search products or artisans..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button
            variant={!selectedCategory ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            size="sm"
          >
            All Products
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              size="sm"
            >
              {category
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")}
            </Button>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm text-foreground/70">{filtered.length} products found</p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-border rounded-md text-sm"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition flex flex-col">
            <div className="h-48 bg-cover bg-center opacity-20" style={{ backgroundImage: product.image }} />
            <div className="p-4 flex-1 flex flex-col">
              <Link href={`/artisans/${product.artisanId}`}>
                <p className="text-xs text-primary/70 font-medium mb-1 hover:text-primary transition">
                  {product.artisan}
                </p>
              </Link>
              <h3 className="font-semibold text-foreground mb-2 flex-1">{product.name}</h3>

              <div className="flex items-center gap-1 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-xs text-foreground/60">({product.reviews})</span>
              </div>

              <p className="text-2xl font-bold text-primary mb-4">₹{product.price}</p>

              <Button
                onClick={() => handleAddToCart(product)}
                className={`w-full gap-2 transition ${addedProduct === product.id ? "bg-green-600 hover:bg-green-600" : "bg-primary hover:bg-primary/90"}`}
              >
                <ShoppingCart size={18} />
                {addedProduct === product.id ? "Added!" : "Add to Cart"}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground/70 text-lg">No products found. Try adjusting your search.</p>
        </div>
      )}
    </div>
  )
}
