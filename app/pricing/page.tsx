import type { Metadata } from "next"

import { PricingPage } from "@/components/marketing/content-pages"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One Click AI VIP နဲ့ VVIP plan တွေကို နှိုင်းယှဉ်ပြီး ကိုယ့် creator workflow နဲ့ကိုက်တဲ့ monthly plan ကို ရွေးပါ။",
  alternates: {
    canonical: "/pricing",
  },
}

export default function Page() {
  return <PricingPage />
}
