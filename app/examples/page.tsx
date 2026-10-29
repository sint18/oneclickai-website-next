import type { Metadata } from "next"

import { ExamplesPage } from "@/components/marketing/content-pages"
import { hasApprovedExampleAssets } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Examples",
  description:
    "Smart Recap နဲ့ source video ကနေ ဖန်တီးထားတဲ့ output နမူနာကို ယှဉ်ကြည့်ပါ။",
  alternates: {
    canonical: "/examples",
  },
  robots: hasApprovedExampleAssets
    ? { index: true, follow: true }
    : { index: false, follow: true },
}

export default function Page() {
  return <ExamplesPage />
}
