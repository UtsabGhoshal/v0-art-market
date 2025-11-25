import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Heart, Users, Globe, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">About Artisan Market</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Artisan Market connects you directly with master craftspeople from West Bengal, preserving traditional art
              forms while providing sustainable income for artisan communities.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Every purchase directly supports families who have perfected their crafts over generations, from handloom
              weavers to clay sculptors, ensuring these beautiful traditions thrive for centuries to come.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center">
              <Heart className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-bold text-primary mb-2">100% Direct</h3>
              <p className="text-sm text-foreground/70">Payments go directly to artisans</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-bold text-primary mb-2">300+ Artisans</h3>
              <p className="text-sm text-foreground/70">Craftspeople supported</p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-bold text-primary mb-2">Global Reach</h3>
              <p className="text-sm text-foreground/70">Shipping to 50+ countries</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-bold text-primary mb-2">Fair Trade</h3>
              <p className="text-sm text-foreground/70">Certified ethical practices</p>
            </Card>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Our Crafts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "Handloom Textiles", desc: "Traditional weaving" },
              { name: "Clay Sculptures", desc: "Lifelike matir putul" },
              { name: "Shola Craft", desc: "Delicate wood art" },
              { name: "Clay Idols", desc: "Festival sculptures" },
              { name: "Artisan Snacks", desc: "Traditional fuchka" },
            ].map((craft, i) => (
              <div key={i} className="text-center">
                <h3 className="font-semibold text-primary mb-2">{craft.name}</h3>
                <p className="text-sm text-foreground/70">{craft.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Why Shop With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Authentic Craftsmanship</h3>
                <p className="text-foreground/70">
                  Every item is handcrafted using traditional techniques passed down through generations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Fair Compensation</h3>
                <p className="text-foreground/70">
                  100% of your purchase goes directly to artisans. No middlemen or hidden fees.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cultural Preservation</h3>
                <p className="text-foreground/70">
                  Your support helps preserve endangered traditional art forms and cultural heritage.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Quality Guaranteed</h3>
                <p className="text-foreground/70">
                  All products undergo strict quality checks and come with authenticity certificates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Free Shipping</h3>
                <p className="text-foreground/70">
                  We cover all shipping costs across India, so you only pay for the product.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Direct Communication</h3>
                <p className="text-foreground/70">
                  Connect directly with artisans through our messaging system to learn their stories.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-r from-amber-50 to-orange-50">
          <h2 className="text-2xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-foreground/80 mb-4">Have questions or want to collaborate with us?</p>
          <div className="space-y-2 text-foreground/70">
            <p>Email: support@artisanmarket.com</p>
            <p>Phone: +91 (800) 123-4567</p>
            <p>Address: Krishnanagar, Nadia District, West Bengal, India</p>
          </div>
        </Card>
      </div>
      <Footer />
    </main>
  )
}
