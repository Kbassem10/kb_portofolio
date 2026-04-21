import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  metadataBase: new URL("https://kbassem.vercel.app"),
  title: {
    default: "Karim Bassem Joseph — Software Developer & Founder of Imhotep Tech",
    template: "%s · Karim Bassem",
  },
  description:
    "Karim Bassem Joseph is a full-stack software developer and founder of Imhotep Tech. He builds fast, accessible web apps with Django, React, and PostgreSQL — and ships products used by real people.",
  keywords: [
    "karim bassem",
    "karim bassem joseph",
    "software developer",
    "python developer",
    "django",
    "flask",
    "react",
    "next.js",
    "full-stack developer",
    "imhotep tech",
    "imhoteptech",
    "nile university",
    "cairo developer",
  ],
  authors: [{ name: "Karim Bassem Joseph" }],
  creator: "Karim Bassem Joseph",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/KBLogo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/KBLogo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kbassem.vercel.app/",
    title: "Karim Bassem Joseph — Software Developer & Founder of Imhotep Tech",
    description:
      "Full-stack developer and founder of Imhotep Tech. I design, build, and ship software people actually use.",
    siteName: "Karim Bassem Joseph Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karim Bassem Joseph — Software Developer & Founder of Imhotep Tech",
    description:
      "Full-stack developer and founder of Imhotep Tech. I design, build, and ship software people actually use.",
    creator: "@kbassem10",
  },
  verification: {
    google: "5VWhaKmsV5Wzrdko3_Si5vVnmNsMDttsJFA04mFxrsE",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          // Using JSON.stringify to avoid JSX escaping issues
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Karim Bassem Joseph',
              url: 'https://kbassem.vercel.app/',
              image: 'https://kbassem.vercel.app/KBLogo.png',
              sameAs: [
                'https://www.linkedin.com/in/karimbassem',
                'https://github.com/kbassem10',
                'https://x.com/kbassem10',
              ],
              jobTitle: 'Software Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Imhotep Tech',
                url: 'https://imhoteptech.vercel.app/'
              }
            })
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
