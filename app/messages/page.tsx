import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessagingCenter } from "@/components/messaging-center"

export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <MessagingCenter />
      <Footer />
    </main>
  )
}
