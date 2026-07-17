import type { Metadata } from "next"

import { PolicyPage } from "@/components/marketing/policy-page"
import { creditRules } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Credit Rules",
  description: "Credit usage, expiry, renewal, and restoration rules for One Click AI users.",
}

export default function CreditPage() {
  return (
    <PolicyPage
      description="Generate မလုပ်ခင် credit ဘယ်လိုသုံးမလဲ၊ plan ဘယ်လောက်ကြာမလဲ၊ error ဖြစ်ရင် ဘယ် case တွေမှာ credit ပြန်ရနိုင်မလဲဆိုတာ ဒီမှာဖတ်ပါ။"
      eyebrow="One Click AI · Credit Rules"
      title="Credit Rules"
      sections={[
        {
          title: "How credits work",
          body: (
            <p>
              Credit က content generate လုပ်တဲ့အခါသုံးတဲ့ usage unit ဖြစ်ပါတယ်။ Tool,
              source duration နဲ့ mode အလိုက် အသုံးပြုနှုန်းကွာနိုင်လို့ Generate မလုပ်ခင်
              screen ပေါ်က estimate ကို စစ်ပါ။
            </p>
          ),
          bullets: creditRules.slice(0, 3),
        },
        {
          title: "Plan limits and duration",
          body: (
            <p>
              VIP နဲ့ VVIP plan နှစ်ခုလုံးက payment အတည်ပြုတဲ့နေ့ကနေ 30 days သက်တမ်းရှိပါတယ်။
              Daily generation limit က VIP မှာ 5 ကြိမ်အထိ၊ VVIP မှာ 10 ကြိမ်အထိ ဖြစ်ပါတယ်။
            </p>
          ),
          bullets: creditRules.slice(3, 5),
        },
        {
          title: "Renewal and expiry",
          body: (
            <p>
              Plan မကုန်ခင် renewal လုပ်ပါက လက်ရှိ plan rules အတိုင်း သက်တမ်းနဲ့ included
              credits ကို ထပ်ပေါင်းနိုင်ပါတယ်။ Plan သက်တမ်းကုန်သွားရင် အသုံးမပြုရသေးတဲ့
              plan credits တွေ expire ဖြစ်နိုင်ပါတယ်။
            </p>
          ),
          bullets: creditRules.slice(5, 7),
        },
        {
          title: "Credit restoration",
          body: (
            <p>
              System-generation failure အကျုံးဝင်လို့ project မပြီးသွားတဲ့ case တွေမှာ
              product policy အတိုင်း credit restoration ရနိုင်ပါတယ်။ Unsuitable source, user
              error, incorrect usage သို့မဟုတ် customer-side issue တွေက restoration အကျုံး
              မဝင်နိုင်ပါ။
            </p>
          ),
          bullets: creditRules.slice(7, 9),
        },
        {
          title: "Purchase rule",
          body: (
            <p>
              Plan နဲ့ credit purchase တွေမှာ refund မရှိပါ။ Payment မလုပ်ခင် plan features,
              credit usage နဲ့ သက်တမ်း rules ကို သေချာစစ်ပါ။
            </p>
          ),
          bullets: [creditRules[9]],
        },
      ]}
    />
  )
}
