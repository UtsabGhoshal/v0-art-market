"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Heart, Share2, Truck, Shield } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const productData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Durga Puja Idol Set",
    price: 4500,
    artisan: "Radha Pal",
    artisanId: 1,
    rating: 5,
    reviews: 45,
    image: 'url("/public/traditional-clay-deity-idol.jpg")',
    description:
      "Hand-sculpted clay idol set for Durga Puja featuring the goddess Durga with her divine family. Each piece is individually crafted with natural clay and traditional techniques.",
    details: {
      material: "Natural Clay",
      dimensions: '24" x 18" x 16"',
      weight: "2.5 kg",
      finish: "Hand-painted with natural colors",
      preparation: "6-8 weeks",
    },
    features: [
      "Handcrafted by master artisan",
      "Made with natural clay and organic paints",
      "Traditional technique preserved for 4 generations",
      "Durable and long-lasting",
      "Perfect for home worship or decoration",
      "Includes base and mounting hardware",
    ],
    shipping: "Free shipping across India",
    warranty: "100% authentic guarantee",
  },
  "5": {
    id: 5,
    name: "Traditional Bengal Cotton Saree",
    price: 8500,
    artisan: "Hari Das",
    artisanId: 2,
    rating: 4.9,
    reviews: 67,
    image: 'url("/public/traditional-handloom-textile-weaving.jpg")',
    description:
      "Exquisite handwoven cotton saree featuring traditional Bengali patterns. Each saree takes 40-50 hours to weave on a traditional loom.",
    details: {
      material: "100% Pure Cotton",
      dimensions: "6.3 yards",
      weight: "450g",
      finish: "Natural indigo dye",
      preparation: "40-50 hours",
    },
    features: [
      "Woven on traditional handloom",
      "Pure cotton from ethical sources",
      "Natural indigo dyeing process",
      "Authentic Bengali design",
      "Breathable and comfortable",
      "Perfect for traditional occasions",
    ],
    shipping: "Free shipping across India",
    warranty: "100% authentic guarantee",
  },
}

export function ProductDetail({ productId }: { productId: string }) {
  const product = productData[productId]
  const [quantity, setQuantity] = useState(1)
  const [isFavorited, setIsFavorited] = useState(false)

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-foreground/70">Product not found</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div>
          <div
            className="w-full h-96 bg-cover bg-center rounded-lg opacity-20 mb-4"
            style={{ backgroundImage: product.image }}
          />
        </div>

        {/* Product Info */}
        <div>
          <Link href={`/artisans/${product.artisanId}`}>
            <p className="text-primary font-medium mb-2 hover:underline cursor-pointer">By {product.artisan}</p>
          </Link>
          <h1 className="text-4xl font-bold text-primary mb-4">{product.name}</h1>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-lg font-semibold">{product.rating}</span>
            <span className="text-foreground/60">({product.reviews} reviews)</span>
          </div>

          <p className="text-4xl font-bold text-primary mb-6">₹{product.price}</p>

          <p className="text-foreground/80 leading-relaxed mb-6">{product.description}</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-foreground/70">
              <Truck size={20} />
              <span>{product.shipping}</span>
            </div>
            <div className="flex items-center gap-3 text-foreground/70">
              <Shield size={20} />
              <span>{product.warranty}</span>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <div className="flex items-center border border-border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 text-foreground/70 hover:bg-muted"
              >
                −
              </button>
              <span className="px-6 py-2 border-l border-r border-border">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-foreground/70 hover:bg-muted">
                +
              </button>
            </div>
            <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" onClick={() => setIsFavorited(!isFavorited)}>
              <Heart size={20} fill={isFavorited ? "currentColor" : "none"} />
            </Button>
            <Button size="lg" variant="outline">
              <Share2 size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">Product Details</h2>
          <dl className="space-y-3">
            {Object.entries(product.details).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <dt className="font-medium text-foreground/70">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}:
                </dt>
                <dd className="font-semibold text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">Why Choose This?</h2>
          <ul className="space-y-3">
            {product.features.map((feature: string) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-6">More from {product.artisan}</h2>
        <p className="text-foreground/70">
          Visit{" "}
          <Link href={`/artisans/${product.artisanId}`} className="text-primary hover:underline">
            {product.artisan}'s profile
          </Link>{" "}
          to see more handcrafted items.
        </p>
      </div>
    </div>
  )
}
