import type { Metadata } from "next"

import { LandingPage } from "@/components/marketing/landing-page"

const shareImage = {
  url: "/images/one-click-ai-share.jpg",
  width: 1200,
  height: 630,
  alt: "One Click AI by AI Code Lab",
}

export const metadata: Metadata = {
  openGraph: {
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [shareImage.url],
  },
}

export default function Page() {
  return <LandingPage />
}
