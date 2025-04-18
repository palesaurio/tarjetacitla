import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Citlallin Castellanos Méndez - Tarjeta Digital"
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(to bottom, #fdf2f8, #fbcfe8)",
        color: "#831843",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
      }}
    >
      <div style={{ fontSize: 64, fontWeight: "bold", marginBottom: 24 }}>Citlallin Castellanos Méndez</div>
      <div style={{ fontSize: 36, marginBottom: 40, textAlign: "center" }}>Contadora • Renta de Audio</div>
      <div style={{ fontSize: 24, opacity: 0.8 }}>Tarjeta Digital de Contacto</div>
    </div>,
    {
      ...size,
    },
  )
}
