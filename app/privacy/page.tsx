import type { Metadata } from "next"

import { PolicyPage } from "@/components/marketing/policy-page"

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy overview for One Click AI users and creator workflows.",
}

export default function PrivacyPage() {
  return (
    <PolicyPage
      description="One Click AI ကို အသုံးပြုတဲ့အခါ service ပေးနိုင်ဖို့ လိုအပ်တဲ့ account, source နဲ့ project information ကို သတိထားပြီး ကိုင်တွယ်ဖို့ ရည်ရွယ်ထားပါတယ်။"
      eyebrow="One Click AI · Privacy"
      title="Privacy"
      sections={[
        {
          title: "Information used to provide the service",
          body: (
            <p>
              Account access, uploaded source files, project settings နဲ့ output information
              တွေက content workflow ကို ဆောင်ရွက်ဖို့ လိုအပ်နိုင်ပါတယ်။ Support ကို ဆက်သွယ်တဲ့
             အခါ မလိုအပ်တဲ့ sensitive information တွေ မပို့ပါနဲ့။
            </p>
          ),
        },
        {
          title: "Use the service safely",
          body: (
            <p>
              ကိုယ်ပိုင်အချက်အလက်၊ third-party personal information နဲ့ အသုံးပြုခွင့်မရှိတဲ့
              source material တွေကို မတင်မီ စဉ်းစားပါ။ သင့် source rights နဲ့ sharing permission
              ကို သင်ကိုယ်တိုင် တာဝန်ယူရပါမယ်။
            </p>
          ),
        },
        {
          title: "Support and account help",
          body: (
            <p>
              Plan ရွေးချယ်မှု၊ account activation နဲ့ project အခက်အခဲတွေကို support ဆီ
              ဆက်သွယ်နိုင်ပါတယ်။ Support ဆီကို လိုအပ်တဲ့ project detail ပဲ ပေးပြီး payment
              account information သို့မဟုတ် password ကို မမျှဝေပါနဲ့။
            </p>
          ),
        },
        {
          title: "Policy review",
          body: (
            <p>
              ဒီစာမျက်နှာက public privacy overview ဖြစ်ပါတယ်။ Data retention, third-party
              processors, deletion requests နဲ့ applicable legal requirements တွေအတွက် AI Code
              Lab ရဲ့ နောက်ဆုံး privacy policy ကို launch မတိုင်မီ အတည်ပြုရပါမယ်။
            </p>
          ),
        },
      ]}
    />
  )
}
