import type { Metadata } from "next"

import { ToolsIndexPage } from "@/components/marketing/content-pages"

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Movie Recap, Football, Dhamma, One Click Shorts, Knowledge Video, Hook Maker, Thumbnail Generator, Voice Library နဲ့ Video Splitter creator tools directory။",
  alternates: {
    canonical: "/tools",
  },
}

export default function Page() {
  return <ToolsIndexPage />
}
