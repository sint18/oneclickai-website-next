import type { Metadata } from "next"

import { ToolsIndexPage } from "@/components/marketing/content-pages"
import { toolSunsetSummaryNotice } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Tools",
  description:
    `Movie Recap, Football, Dhamma, One Click Shorts, Knowledge Video, Hook Maker, Thumbnail Generator, Voice Cloning နဲ့ Video Splitter creator tools directory။ ${toolSunsetSummaryNotice}`,
  alternates: {
    canonical: "/tools",
  },
}

export default function Page() {
  return <ToolsIndexPage />
}
