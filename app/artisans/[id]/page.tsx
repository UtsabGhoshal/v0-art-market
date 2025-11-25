import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArtisanProfileDetail } from "@/components/artisan-profile-detail"

export default function ArtisanDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ArtisanProfileDetail artisanId={params.id} />
      <Footer />
    </main>
  )
}
