import type { Metadata } from "next"

import { GuidesIndexPage } from "@/components/marketing/content-pages"

export const metadata: Metadata = {
  title: "Guides",
  description:
    "One Click AI အသုံးပြုနည်း၊ source ရွေးနည်း၊ ATS modes နဲ့ output review guides။",
  alternates: {
    canonical: "/guide",
  },
}

export default function Page() {
  return <GuidesIndexPage />
}
