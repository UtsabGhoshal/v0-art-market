import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/lib/cart-context"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#8B4513",
}

export const metadata: Metadata = {
  title: "Artisan Market - Support West Bengal Craftspeople | Direct from Artisans",
  description:
    "Discover authentic handcrafted goods from West Bengal's master artisans. Shop traditional textiles, clay sculptures, and more. 100% direct to artisans. Free shipping across India.",
  keywords: "handmade, artisan, West Bengal, clay sculptures, handloom, sari, crafts, fair trade",
  generator: "v0.app",
  openGraph: {
    title: "Artisan Market - Support West Bengal Craftspeople",
    description: "Authentic handcrafted goods directly from master artisans",
    type: "website",
    url: "https://artisanmarket.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artisan Market",
    description: "Support West Bengal's craftspeople",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <CartProvider>{children}</CartProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
