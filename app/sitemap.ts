import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kbassem.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    "",
    "/#about",
    "/#skills",
    "/#projects",
    "/#packages",
    "/#contact",
  ]

  const now = new Date()

  return urls.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
  }))
}


