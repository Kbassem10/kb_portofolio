import { ImageResponse } from "next/og"

export const runtime = "edge"

// 1200x630 recommended for OG
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const fontData = await fetch(
    new URL("../public/KBLogo.png", import.meta.url)
  ).then((res) => res.arrayBuffer()).catch(() => null)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#0b0b0b",
          color: "#fff",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* Simple logo block */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#fff",
              color: "#0b0b0b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            KB
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 64, fontWeight: 800 }}>Karim Bassem Joseph</div>
            <div style={{ fontSize: 28, opacity: 0.8 }}>
              Software Developer • Python • Django • React
            </div>
          </div>
        </div>
        <div style={{ marginTop: 36, fontSize: 28, maxWidth: 900, lineHeight: 1.3, opacity: 0.9 }}>
          Building accessible, scalable applications and open-source libraries at Imhotep Tech.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}


