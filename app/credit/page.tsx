import type { Metadata } from "next"

import { PolicyPage } from "@/components/marketing/policy-page"
import {
  creditRules,
  creditSupportingToolRules,
  creditVideoRates,
} from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Credit Rules",
  description:
    "Credit rates and estimate-checking rules for One Click AI users.",
}

export default function CreditPage() {
  return (
    <PolicyPage
      description="Generate မလုပ်ခင် credit ဘယ်လိုတွက်မလဲ၊ exact estimate ကို ဘယ်မှာစစ်ရမလဲဆိုတာ ဒီမှာဖတ်ပါ။"
      eyebrow="One Click AI · Credit Rules"
      title="Credit Rules"
      sections={[
        {
          title: "How credits work",
          body: (
            <p>
              Credit က content generate လုပ်တဲ့အခါ သုံးတဲ့ billing unit
              ဖြစ်ပါတယ်။ Tool, source duration, output duration, quality mode
              နဲ့ generation settings အလိုက် ကွာနိုင်လို့ generate မလုပ်ခင်
              screen ပေါ်က estimate ကို စစ်ပါ။
            </p>
          ),
          bullets: creditRules,
        },
        {
          title: "Video feature rates",
          body: (
            <p>
              Movie Recap မှာ credit ကို system က process လုပ်တဲ့ source footage
              duration ပေါ်မူတည်ပြီးတွက်ပါတယ်။
            </p>
          ),
          bullets: creditVideoRates,
        },
        {
          title: "Supporting tools",
          body: (
            <p>
              Thumbnail Generator နဲ့ Video Splitter ရဲ့ credit သုံးစွဲမှုက
              သက်ဆိုင်ရာ rule အတိုင်း သက်ရောက်ပါတယ်။
            </p>
          ),
          bullets: creditSupportingToolRules,
        },
      ]}
    />
  )
}
