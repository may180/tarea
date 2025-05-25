import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portafolio | Maikol Lozano - Diseñador & Desarrollador Web",
  description:
    "Portafolio profesional de Maikol Lozano, diseñador y desarrollador web especializado en crear experiencias digitales innovadoras en Colombia.",
  keywords: "diseño web, desarrollo web, portafolio, Colombia, Bogotá, frontend, backend, UI/UX",
  authors: [{ name: "Maikol Lozano" }],
  openGraph: {
    title: "Maikol Lozano - Diseñador & Desarrollador Web",
    description: "Creo experiencias digitales hermosas y funcionales que ayudan a los negocios a crecer en línea.",
    type: "website",
    locale: "es_CO",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
