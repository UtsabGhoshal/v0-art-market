import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Artisan Market</h3>
            <p className="text-sm opacity-90">
              Supporting West Bengal's master craftspeople by connecting them directly with conscious consumers
              worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="hover:opacity-80 transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=handloom" className="hover:opacity-80 transition">
                  Textiles
                </Link>
              </li>
              <li>
                <Link href="/shop?category=clay-dolls" className="hover:opacity-80 transition">
                  Clay Arts
                </Link>
              </li>
              <li>
                <Link href="/shop?category=shola-craft" className="hover:opacity-80 transition">
                  Shola Craft
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/artisans" className="hover:opacity-80 transition">
                  Browse Artisans
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80 transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:opacity-80 transition">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:opacity-80 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:opacity-80 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:opacity-80 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:opacity-80 transition">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:opacity-80 transition">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-items-center md:justify-between gap-4">
            <p className="text-sm opacity-90">© 2025 Artisan Market. Celebrating West Bengal's craftsmanship.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:opacity-80 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:opacity-80 transition">
                Terms of Service
              </Link>
              <Link href="/ethics" className="hover:opacity-80 transition">
                Ethical Practices
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
