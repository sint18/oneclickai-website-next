import type { Metadata } from "next"

import { PolicyPage } from "@/components/marketing/policy-page"
import {
  creditRules,
  creditSupportingToolRules,
  creditVideoRates,
  dailyLimitRules,
  dhammaCreditRules,
  hookMakerCreditRules,
} from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Credit Rules",
  description:
    "Credit rates, daily limits, and estimate-checking rules for One Click AI users.",
}

export default function CreditPage() {
  return (
    <PolicyPage
      description="Generate မလုပ်ခင် credit ဘယ်လိုတွက်မလဲ၊ ဘယ် tool တွေ daily limit ထဲပါလဲ၊ exact estimate ကို ဘယ်မှာစစ်ရမလဲဆိုတာ ဒီမှာဖတ်ပါ။"
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
              Movie Recap, Football Content Maker နဲ့ One Click Shorts တွေမှာ
              credit ကို system က process လုပ်တဲ့ source footage duration
              ပေါ်မူတည်ပြီးတွက်ပါတယ်။
            </p>
          ),
          bullets: creditVideoRates,
        },
        {
          title: "Dhamma Content credits",
          body: (
            <p>
              Dhamma Content က VVIP only feature ဖြစ်ပြီး Standard နဲ့ Pro
              quality tier နှစ်မျိုးရှိပါတယ်။ Source duration အလိုက် credit tier
              ကွာပါတယ်။
            </p>
          ),
          bullets: dhammaCreditRules,
        },
        {
          title: "Hook Maker credits",
          body: (
            <p>
              Hook Maker usage က variation count နဲ့ output types
              ပေါ်မူတည်ပါတယ်။ Pricing က tiered ဖြစ်ပါတယ်။
            </p>
          ),
          bullets: hookMakerCreditRules,
        },
        {
          title: "Supporting tools",
          body: (
            <p>
              Thumbnail Generator နဲ့ Video Splitter က main-feature daily limit
              ထဲ မပါဝင်ပါ။ Credit သုံးစွဲမှုက သက်ဆိုင်ရာ rule အတိုင်း
              ဆက်သက်ရောက်ပါတယ်။
            </p>
          ),
          bullets: creditSupportingToolRules,
        },
        {
          title: "Daily generation limits",
          body: (
            <p>
              Daily limit က main features လေးခုအတွက်ပဲ သက်ရောက်ပါတယ်။ Supporting
              tools တွေက daily limit ထဲမပါဝင်ပါ။
            </p>
          ),
          bullets: dailyLimitRules,
        },
      ]}
    />
  )
}
