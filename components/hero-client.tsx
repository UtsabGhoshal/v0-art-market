"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function HeroClient() {
  const { t } = useLanguage()

  return (
    <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-balance">{t("celebrateArtisans")}</h1>
        <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto text-balance">{t("discoverHandcrafted")}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/shop">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              {t("exploreShop")}
            </Button>
          </Link>
          <Link href="/artisans">
            <Button size="lg" variant="outline">
              {t("meetArtisans")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
