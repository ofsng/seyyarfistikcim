import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Seyyar Fıstıkçım - Fıstık, Eğlence ve Parti!",
  description:
    "Sokak satıcısı markası Seyyar Fıstıkçım ile fıstık dünyasına hoş geldiniz! Eğlence, mizah ve topluluk bir arada.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${poppins.className} min-h-screen antialiased`} style={{ backgroundColor: "#ffa580" }}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
