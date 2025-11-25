"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Mail } from "lucide-react"

interface ContactArtisanButtonProps {
  artisanId: number
  artisanName: string
}

export function ContactArtisanButton({ artisanId, artisanName }: ContactArtisanButtonProps) {
  const { t } = useLanguage()

  return (
    <Link href={`/messages?artisan=${artisanId}`}>
      <Button variant="outline" className="gap-2 bg-transparent">
        <Mail size={18} />
        {t("contactArtisan")}
      </Button>
    </Link>
  )
}
