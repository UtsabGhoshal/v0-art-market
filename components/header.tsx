"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart, Globe } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const { itemCount } = useCart()
  const { t, language, setLanguage } = useLanguage()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-primary">
            {t("artisanMarket")}
          </Link>

          <nav className="hidden md:flex gap-8">
            <Link href="/artisans" className="text-foreground hover:text-primary transition">
              {t("artisans")}
            </Link>
            <Link href="/shop" className="text-foreground hover:text-primary transition">
              {t("shop")}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              {t("about")}
            </Link>
          </nav>

          <div className="hidden md:flex gap-2 items-center">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition"
              >
                <Globe size={20} />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-border rounded-lg shadow-lg z-50">
                  <button
                    onClick={() => {
                      setLanguage("en")
                      setIsLangOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${language === "en" ? "bg-muted text-primary font-medium" : "hover:bg-muted"}`}
                  >
                    {t("english")}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("bn")
                      setIsLangOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${language === "bn" ? "bg-muted text-primary font-medium" : "hover:bg-muted"}`}
                  >
                    {t("bengali")}
                  </button>
                </div>
              )}
            </div>
            <Link href="/cart">
              <Button variant="outline" className="relative bg-transparent">
                <ShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button>{t("signIn")}</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/artisans" className="text-foreground hover:text-primary">
              {t("artisans")}
            </Link>
            <Link href="/shop" className="text-foreground hover:text-primary">
              {t("shop")}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary">
              {t("about")}
            </Link>
            <Link href="/cart" className="w-full">
              <Button variant="outline" className="w-full relative bg-transparent">
                <ShoppingCart size={20} />
                {t("cart")}
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button className="w-full">{t("signIn")}</Button>
            <div className="flex gap-2 border-t border-border pt-4">
              <button
                onClick={() => setLanguage("en")}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${language === "en" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
              >
                {t("english")}
              </button>
              <button
                onClick={() => setLanguage("bn")}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${language === "bn" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
              >
                {t("bengali")}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
