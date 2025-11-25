import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ProductDetail productId={params.id} />
      <Footer />
    </main>
  )
}
