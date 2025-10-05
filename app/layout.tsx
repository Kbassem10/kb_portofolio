import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Karim Bassem Joseph | Software Developer Portfolio",
  description:
    "Karim Bassem Joseph is a software developer specializing in Python web frameworks and full-stack development. Computer Science student at Nile University and founder of Imhotep Tech, creating efficient, scalable applications and accessible technology solutions.",
  keywords: [
    "karim bassem",
    "karim bassem joseph",
    "software developer",
    "python developer",
    "django",
    "flask",
    "react",
    "full-stack developer",
    "imhotep tech",
    "nile university",
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
    title: "Karim Bassem Joseph | Software Developer Portfolio",
    description:
      "Software developer specializing in Python web frameworks and full-stack development. Founder of Imhotep Tech.",
    siteName: "Karim Bassem Joseph Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karim Bassem Joseph | Software Developer Portfolio",
    description: "Software developer specializing in Python web frameworks and full-stack development.",
    creator: "@kbassem10",
  },
  generator: "v0.app",
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
