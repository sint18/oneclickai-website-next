import type { MetadataRoute } from "next"

import {
  guides,
  hasApprovedExampleAssets,
  siteConfig,
  tools,
} from "@/lib/site-content"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.siteUrl}/tools`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.siteUrl}/guide`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.siteUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteConfig.siteUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteConfig.siteUrl}/credit`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ]

  if (hasApprovedExampleAssets) {
    routes.push({
      url: `${siteConfig.siteUrl}/examples`,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  }

  routes.push(
    ...tools.map((tool) => ({
      url: `${siteConfig.siteUrl}/tools/${tool.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...guides.map((guide) => ({
      url: `${siteConfig.siteUrl}/guide/${guide.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  )

  return routes
}
