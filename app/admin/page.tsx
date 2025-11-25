import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdminDashboard } from "@/components/admin-dashboard"

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AdminDashboard />
      <Footer />
    </main>
  )
}
