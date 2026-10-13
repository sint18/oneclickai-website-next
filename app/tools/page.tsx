import type { Metadata } from "next"

import { ToolsIndexPage } from "@/components/marketing/content-pages"

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Movie Recap, Knowledge Video, Thumbnail Generator, Voice Cloning နဲ့ Video Splitter creator tools directory။",
  alternates: {
    canonical: "/tools",
  },
}

export default function ToolsPage() {
  return <ToolsIndexPage />
}
