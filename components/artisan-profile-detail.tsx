"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock, Heart } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

// Mock artisan data
const artisanData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Radha Pal",
    craft: "Krishnanagar Clay Sculptor",
    location: "Krishnanagar, Nadia District",
    rating: 4.9,
    reviews: 248,
    yearsActive: 25,
    followers: 1250,
    description:
      "Fourth generation clay artist creating lifelike matir putul inspired by mythology, daily life, and contemporary themes. Each piece is handcrafted with meticulous attention to detail.",
    bio: "Radha Pal learned the art of clay sculpting from her grandmother and has been perfecting the craft for over two decades. Her work has been exhibited internationally and has received numerous awards for preserving traditional Bengali art forms.",
    image: 'url("/placeholder.svg?key=e4xme")',
    specialties: ["Matir Putul", "Deity Idols", "Mythological Figures", "Contemporary Sculptures"],
    certifications: ["National Handicraft Award Winner", "UNESCO Heritage Artisan"],
    products: [
      {
        id: 1,
        name: "Durga Puja Idol Set",
        price: 4500,
        image: 'url("/public/traditional-clay-deity-idol.jpg")',
        rating: 5,
        reviews: 45,
      },
      {
        id: 2,
        name: "Village Life Diorama",
        price: 3200,
        image: 'url("/public/clay-art-sculptures.jpg")',
        rating: 4.8,
        reviews: 32,
      },
      {
        id: 3,
        name: "Farmer & Cow Sculpture",
        price: 2800,
        image: 'url("/public/clay-art-sculptures.jpg")',
        rating: 4.9,
        reviews: 28,
      },
      {
        id: 4,
        name: "Kali Idol - Festival Edition",
        price: 5500,
        image: 'url("/public/traditional-clay-deity-idol.jpg")',
        rating: 5,
        reviews: 52,
      },
    ],
  },
  "2": {
    id: 2,
    name: "Hari Das",
    craft: "Shantipur Handloom Weaver",
    location: "Shantipur, Nadia District",
    rating: 4.8,
    reviews: 312,
    yearsActive: 30,
    followers: 1890,
    description:
      "Master weaver specializing in traditional cotton saris with intricate patterns and natural dyes. Every sari is woven on traditional looms using time-honored techniques.",
    bio: "Hari Das comes from a family of weavers spanning 7 generations. He combines traditional weaving methods with contemporary designs, creating saris that honor heritage while appealing to modern aesthetics.",
    image: 'url("/placeholder.svg?key=ciggj")',
    specialties: ["Cotton Saris", "Dhotis", "Natural Dyes", "Jacquard Patterns"],
    certifications: ["Master Weaver License", "Fair Trade Certified"],
    products: [
      {
        id: 5,
        name: "Traditional Bengal Cotton Saree",
        price: 8500,
        image: 'url("/public/traditional-handloom-textile-weaving.jpg")',
        rating: 4.9,
        reviews: 67,
      },
      {
        id: 6,
        name: "Dhoti - Pure Cotton",
        price: 3500,
        image: 'url("/public/traditional-handloom-textile-weaving.jpg")',
        rating: 4.8,
        reviews: 41,
      },
      {
        id: 7,
        name: "Handwoven Dress Material",
        price: 2500,
        image: 'url("/public/traditional-handloom-textile-weaving.jpg")',
        rating: 4.7,
        reviews: 35,
      },
      {
        id: 8,
        name: "Silk-Cotton Blend Saree",
        price: 12000,
        image: 'url("/public/traditional-handloom-textile-weaving.jpg")',
        rating: 5,
        reviews: 58,
      },
    ],
  },
  "3": {
    id: 3,
    name: "Priya Malakar",
    craft: "Shola Wood Artisan",
    location: "Bankapasi, Katwa District",
    rating: 5,
    reviews: 189,
    yearsActive: 20,
    followers: 980,
    description:
      "Specialized in creating delicate shola wood decorations and festival ornaments with precision and artistic vision. Each piece is carved from natural shola reed.",
    bio: "Priya learned shola craft from her mother and has become one of the most sought-after shola artists in West Bengal. She is known for her innovative designs while maintaining traditional craftsmanship.",
    image: 'url("/placeholder.svg?key=6r5ay")',
    specialties: ["Festival Decorations", "Crown Designs", "Ornaments", "Custom Orders"],
    certifications: ["State Handicraft Award", "Shola Artisan Guild Member"],
    products: [
      {
        id: 9,
        name: "Durga Crown - Premium",
        price: 6500,
        image: 'url("/public/white-shola-wood-festival-decorations.jpg")',
        rating: 5,
        reviews: 43,
      },
      {
        id: 10,
        name: "Festival Chandelier Set",
        price: 8000,
        image: 'url("/public/white-shola-wood-festival-decorations.jpg")',
        rating: 5,
        reviews: 28,
      },
      {
        id: 11,
        name: "Customized Wedding Decoration",
        price: 15000,
        image: 'url("/public/white-shola-wood-festival-decorations.jpg")',
        rating: 5,
        reviews: 12,
      },
      {
        id: 12,
        name: "Shola Ornament Collection",
        price: 3500,
        image: 'url("/public/white-shola-wood-festival-decorations.jpg")',
        rating: 4.9,
        reviews: 31,
      },
    ],
  },
  "4": {
    id: 4,
    name: "Sandeep Kumar",
    craft: "Kumartuli Clay Artist",
    location: "Kumartuli, Kolkata",
    rating: 4.9,
    reviews: 425,
    yearsActive: 35,
    followers: 2150,
    description:
      "Creator of intricate clay idols for temples and festivals, maintaining 7 generations of tradition. Sandeep's idols are featured in pandals across Bengal during Durga Puja.",
    bio: "Sandeep Kumar represents the 7th generation of his family in idol-making. His work bridges traditional rituals with contemporary artistic expression, earning recognition both nationally and internationally.",
    image: 'url("/placeholder.svg?key=w6zhr")',
    specialties: ["Temple Idols", "Durga Puja Idols", "Festival Sculptures", "Large Installations"],
    certifications: ["Master Craftsman", "National Heritage Award"],
    products: [
      {
        id: 13,
        name: "Complete Durga Puja Set - Standard",
        price: 22000,
        image: 'url("/public/traditional-clay-deity-idol.jpg")',
        rating: 4.9,
        reviews: 89,
      },
      {
        id: 14,
        name: "Ganesha Idol - Medium",
        price: 4500,
        image: 'url("/public/traditional-clay-deity-idol.jpg")',
        rating: 4.8,
        reviews: 56,
      },
      {
        id: 15,
        name: "Kali Idol - Grand",
        price: 18000,
        image: 'url("/public/traditional-clay-deity-idol.jpg")',
        rating: 5,
        reviews: 72,
      },
      {
        id: 16,
        name: "Lakshmi Puja Set",
        price: 9500,
        image: 'url("/public/traditional-clay-deity-idol.jpg")',
        rating: 4.9,
        reviews: 61,
      },
    ],
  },
}

export function ArtisanProfileDetail({ artisanId }: { artisanId: string }) {
  const artisan = artisanData[artisanId]
  const [isFavorited, setIsFavorited] = useState(false)

  if (!artisan) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-center text-foreground/70">Artisan not found</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Profile Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-1">
          <div
            className="h-72 bg-cover bg-center rounded-lg mb-4 opacity-20"
            style={{ backgroundImage: artisan.image }}
          />
          <Button
            variant={isFavorited ? "default" : "outline"}
            onClick={() => setIsFavorited(!isFavorited)}
            className="w-full gap-2 mb-4"
          >
            <Heart size={18} />
            {isFavorited ? "Favorited" : "Add to Favorites"}
          </Button>
          <Button variant="outline" className="w-full bg-transparent">
            Contact Artisan
          </Button>
        </div>

        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-primary mb-2">{artisan.name}</h1>
          <p className="text-xl text-primary/80 font-medium mb-4">{artisan.craft}</p>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < Math.floor(artisan.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-lg font-semibold">{artisan.rating}</span>
            <span className="text-foreground/60">({artisan.reviews} reviews)</span>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-foreground/70">
              <MapPin size={18} />
              <span>{artisan.location}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Clock size={18} />
              <span>{artisan.yearsActive} years of experience</span>
            </div>
            <div className="text-foreground/70">
              <span className="font-semibold">{artisan.followers}</span> followers
            </div>
          </div>

          <p className="text-foreground/80 leading-relaxed mb-6">{artisan.description}</p>
        </div>
      </div>

      {/* About Section */}
      <Card className="p-6 mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">About the Artisan</h2>
        <p className="text-foreground/80 leading-relaxed mb-6">{artisan.bio}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">Specialties</h3>
            <div className="flex flex-wrap gap-2">
              {artisan.specialties.map((specialty: string) => (
                <span key={specialty} className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm">
                  {specialty}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Certifications & Awards</h3>
            <ul className="space-y-2">
              {artisan.certifications.map((cert: string) => (
                <li key={cert} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="text-primary mt-1">✓</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Products Section */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-6">Products Available</h2>

        {/* Low Cost Products */}
        {artisan.products.filter((p: any) => p.price < 5000).length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-semibold text-primary">Low Cost</h3>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                Budget Friendly
              </span>
            </div>
            <p className="text-sm text-foreground/70 mb-4">Affordable products under ₹5000</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {artisan.products
                .filter((p: any) => p.price < 5000)
                .map((product: any) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition">
                    <div className="h-48 bg-cover bg-center opacity-20" style={{ backgroundImage: product.image }} />
                    <div className="p-4">
                      <h3 className="font-semibold text-primary mb-2">{product.name}</h3>

                      <div className="flex items-center gap-1 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={
                                i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-xs text-foreground/60">({product.reviews})</span>
                      </div>

                      <p className="text-2xl font-bold text-primary mb-3">₹{product.price}</p>
                      <Link href={`/shop/${product.id}`}>
                        <Button className="w-full bg-primary hover:bg-primary/90">View Product</Button>
                      </Link>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        )}

        {/* Fair Cost Products */}
        {artisan.products.filter((p: any) => p.price >= 5000).length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-semibold text-primary">Fair Cost</h3>
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                Premium Quality
              </span>
            </div>
            <p className="text-sm text-foreground/70 mb-4">Premium products priced fairly at ₹5000 and above</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {artisan.products
                .filter((p: any) => p.price >= 5000)
                .map((product: any) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition">
                    <div className="h-48 bg-cover bg-center opacity-20" style={{ backgroundImage: product.image }} />
                    <div className="p-4">
                      <h3 className="font-semibold text-primary mb-2">{product.name}</h3>

                      <div className="flex items-center gap-1 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={
                                i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-xs text-foreground/60">({product.reviews})</span>
                      </div>

                      <p className="text-2xl font-bold text-primary mb-3">₹{product.price}</p>
                      <Link href={`/shop/${product.id}`}>
                        <Button className="w-full bg-primary hover:bg-primary/90">View Product</Button>
                      </Link>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
