import type { Metadata } from "next"

import { PolicyPage } from "@/components/marketing/policy-page"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Public terms for using One Click AI content production workflows.",
}

export default function TermsPage() {
  return (
    <PolicyPage
      description="One Click AI က source media ကို content workflow အဖြစ် ပြောင်းလဲရာမှာ အကူအညီပေးတဲ့ web-based service ဖြစ်ပါတယ်။"
      eyebrow="One Click AI · Terms"
      title="Terms of Service"
      sections={[
        {
          title: "Use the right source and tool",
          body: (
            <p>
              One Click AI ကို အသုံးပြုတဲ့အခါ ကိုယ်ပိုင်အသုံးပြုခွင့်ရှိတဲ့ source material ကို
              အသုံးပြုရပြီး content type နဲ့ ကိုက်ညီတဲ့ tool ကို ရွေးချယ်ရပါမယ်။ Movie Recap
              workflow အတွက် narration ရှင်းတဲ့ source တွေက ပိုသင့်တော်ပါတယ်။
            </p>
          ),
          bullets: [
            "Source rights နဲ့ platform rules ကို အသုံးပြုသူက ကိုယ်တိုင် စစ်ဆေးရပါမယ်။",
            "Output ကို publish မလုပ်ခင် review လုပ်ရပါမယ်။",
            "Unsuitable source တွေက output quality ကို ထိခိုက်စေနိုင်ပါတယ်။",
          ],
        },
        {
          title: "AI-assisted output",
          body: (
            <p>
              AI-assisted output က source quality, audio clarity, source duration နဲ့
              processing mode ပေါ်မူတည်ပြီး ကွာနိုင်ပါတယ်။ One Click AI က workflow ကို
              လျှော့ပေးတာဖြစ်ပြီး result တိုင်းဟာ perfect ဖြစ်မယ်လို့ မအာမခံပါ။
            </p>
          ),
        },
        {
          title: "Platform responsibility",
          body: (
            <p>
              Copyright claim, reuse restriction, platform enforcement, views, followers,
              account growth, monetization approval နဲ့ income တို့ဟာ platform rules နဲ့
              account performance ပေါ်မူတည်ပါတယ်။ ဒီဆုံးဖြတ်ချက်တွေကို One Click AI က
              ထိန်းချုပ်နိုင်ခြင်းမရှိပါ။
            </p>
          ),
        },
        {
          title: "Service changes",
          body: (
            <p>
              Tool availability, processing modes နဲ့ product features တွေက အချိန်နဲ့အမျှ
              ပြောင်းလဲနိုင်ပါတယ်။ လက်ရှိ plan နဲ့ product rules ကို မသုံးခင် စစ်ဆေးပါ။
            </p>
          ),
        },
      ]}
    />
  )
}
