import DigitalCard from "@/components/digital-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Citlallin Castellanos Méndez - Tarjeta Digital",
  description: "Contadora y Renta de Audio - Contacto profesional",
  openGraph: {
    title: "Citlallin Castellanos Méndez - Tarjeta Digital",
    description: "Contadora y Renta de Audio - Contacto profesional",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Citlallin Castellanos Méndez",
      },
    ],
  },
}

export default function Home() {
  return <DigitalCard />
}
