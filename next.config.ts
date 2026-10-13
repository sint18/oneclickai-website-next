import type { NextConfig } from "next"

const removedToolRedirects = [
  "hook-maker",
  "football",
  "shorts",
  "dhamma",
].map((slug) => ({
  source: `/tools/${slug}`,
  destination: "/tools",
  permanent: true,
}))

const nextConfig: NextConfig = {
  redirects: async () => removedToolRedirects,
}

export default nextConfig
