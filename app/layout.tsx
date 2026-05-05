import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/LanguageContext"

export const metadata: Metadata = {
  title: "أفنيو للأستثمار والتطوير العقاري - Avenue Real Estate",
  description: "شركة استثمارية رائدة تهدف إلى بناء مستقبل أفضل من خلال استثماراتها المتنوعة والمدروسة",
  keywords: "استثمار, عقارات, شراكات, أفنيو للأستثمار والتطوير العقاري, بغداد العراق",
  icons: "/Avenue Logo Colored.png",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}