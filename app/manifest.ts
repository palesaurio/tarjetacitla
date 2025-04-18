import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Citlallin Castellanos Méndez - Tarjeta Digital",
    short_name: "Citlallin Castellanos",
    description: "Contadora y Renta de Audio - Contacto profesional",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ec4899",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
