import type { Metadata } from "next"

import { ExamplesPage } from "@/components/marketing/content-pages"
import { hasApprovedExampleAssets } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Examples",
  description:
    "One Click AI tools အတွက် approved product screenshots နဲ့ output examples ထည့်ရန် curated gallery။",
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
