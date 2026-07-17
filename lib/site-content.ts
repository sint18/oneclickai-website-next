export type SupportChannel = "messenger" | "telegram"

export type ToolIcon =
  | "film"
  | "football"
  | "leaf"
  | "scissors"
  | "sparkles"

export type Tool = {
  name: string
  label: string
  description: string
  icon: ToolIcon
  accent: "teal" | "ink" | "sand"
}

export type PricingPlan = {
  name: "VIP" | "VVIP"
  price: string
  description: string
  badge?: string
  features: string[]
}

export type FAQItem = {
  question: string
  answer: string
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const siteConfig = {
  name: "One Click AI",
  company: "AI Code Lab",
  description:
    "Myanmar creators အတွက် source video နဲ့ audio ကနေ Burmese voice, subtitle နဲ့ upload-ready content ထုတ်ပေးတဲ့ AI-assisted content production system.",
  siteUrl,
  support: {
    messenger: process.env.NEXT_PUBLIC_MESSENGER_URL ?? "",
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "",
  },
} as const

export const navigation = [
  { label: "Product", href: "#product" },
  { label: "Tools", href: "#tools" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const

export const tools: Tool[] = [
  {
    name: "Movie Recap",
    label: "Movie Recap Generator",
    description:
      "သင့်တော်တဲ့ source video ကနေ Burmese narration, subtitle နဲ့ upload-ready recap ထုတ်ပါ။",
    icon: "film",
    accent: "teal",
  },
  {
    name: "Football",
    label: "Football Content Maker",
    description:
      "Manual keyframe work ကို လျှော့ပြီး vertical football content ထုတ်ပါ။",
    icon: "football",
    accent: "ink",
  },
  {
    name: "Dhamma",
    label: "Dhamma Content Maker",
    description:
      "Long sermon audio ကို background, subtitle နဲ့ timing ချိန်ထားတဲ့ video အဖြစ် ပြောင်းပါ။",
    icon: "leaf",
    accent: "sand",
  },
  {
    name: "Shorts",
    label: "One Click Shorts",
    description:
      "Stream နဲ့ long-video source တွေကို short-form content အဖြစ် repurpose လုပ်ပါ။",
    icon: "scissors",
    accent: "teal",
  },
  {
    name: "Hook Maker",
    label: "Hook Maker",
    description:
      "Video စစချင်း audience ကို ရပ်ကြည့်စေမယ့် hook ideas ထုတ်ပါ။",
    icon: "sparkles",
    accent: "ink",
  },
]

export const plans: PricingPlan[] = [
  {
    name: "VIP",
    price: "35,000 MMK",
    description: "စတင်ပြီး consistent workflow တည်ဆောက်ချင်တဲ့ beginner creator အတွက်။",
    badge: "Beginner Choice",
    features: [
      "60 credits / 30 days",
      "တစ်နေ့ 5 ကြိမ်အထိ generate",
      "Normal processing speed",
      "Movie Recap + Hook Maker",
      "ATS Standard + ATS Pro",
      "Burmese subtitle + SRT export",
    ],
  },
  {
    name: "VVIP",
    price: "59,000 MMK",
    description: "Content volume ပိုများပြီး priority processing လိုတဲ့ creator အတွက်။",
    badge: "Best Value",
    features: [
      "120 credits / 30 days",
      "တစ်နေ့ 10 ကြိမ်အထိ generate",
      "Priority processing",
      "Movie Recap + Hook Maker",
      "ATS Standard + ATS Pro",
      "Burmese subtitle + SRT export",
      "VVIP-only tools where currently available",
    ],
  },
]

export const faqs: FAQItem[] = [
  {
    question: "One Click AI ဆိုတာဘာလဲ?",
    answer:
      "One Click AI က Myanmar creator တွေအတွက် source video သို့မဟုတ် audio ကနေ Burmese voice, subtitle, timing နဲ့ upload-ready content ထုတ်ပေးတဲ့ AI-assisted web platform ဖြစ်ပါတယ်။",
  },
  {
    question: "ဘယ် content အမျိုးအစားတွေ လုပ်လို့ရလဲ?",
    answer:
      "Movie Recap, Football Content, Dhamma Content, One Click Shorts နဲ့ Hook Maker workflow တွေကို အသုံးပြုနိုင်ပါတယ်။ Tool availability က သင့် plan နဲ့ လက်ရှိ product rules ပေါ်မူတည်နိုင်ပါတယ်။",
  },
  {
    question: "Software install လုပ်ရလား?",
    answer:
      "မလိုပါဘူး။ Web browser ကနေ သုံးနိုင်ပါတယ်။ Upload နဲ့ download အဆင်ပြေစေဖို့ Chrome သို့မဟုတ် Safari ကို အသုံးပြုပါ။",
  },
  {
    question: "Burmese voice နဲ့ subtitle ပါလား?",
    answer:
      "Supported workflows တွေမှာ Burmese narration, Burmese subtitle နဲ့ SRT export ပါဝင်ပါတယ်။ Output quality က source quality, audio clarity, source type နဲ့ processing mode ပေါ်မူတည်ပါတယ်။",
  },
  {
    question: "ATS Standard နဲ့ ATS Pro ဘာကွာလဲ?",
    answer:
      "ATS Standard က quality နဲ့ credit usage ကို balance လုပ်ထားတဲ့ mode ဖြစ်ပါတယ်။ ATS Pro က voice, visual နဲ့ subtitle timing quality ကို ပိုကောင်းအောင် advanced processing လုပ်ပေးတဲ့ mode ဖြစ်ပါတယ်။",
  },
  {
    question: "Phone နဲ့သုံးလို့ရလား?",
    answer:
      "ရပါတယ်။ Chrome သို့မဟုတ် Safari နဲ့သုံးပါ။ Facebook, Messenger, Telegram အတွင်းက in-app browser တွေက upload, download သို့မဟုတ် login အခက်အခဲ ဖြစ်စေနိုင်ပါတယ်။",
  },
  {
    question: "Copyright နဲ့ monetization ကို အာမခံလား?",
    answer:
      "မအာမခံပါဘူး။ Source rights, content quality, originality, platform rules နဲ့ account performance ပေါ်မူတည်ပါတယ်။ One Click AI က production workflow ကို လျှော့ပေးတာဖြစ်ပြီး platform approval, views, followers, income သို့မဟုတ် monetization ကို အာမခံမပေးပါ။",
  },
  {
    question: "Generation error ဖြစ်ရင် credit ကုန်မလား?",
    answer:
      "Qualifying system error ကြောင့် project မပြီးသွားတဲ့ case တွေမှာ credit restoration ကို product policy အတိုင်း ဆောင်ရွက်နိုင်ပါတယ်။ User error, unsuitable source သို့မဟုတ် incorrect usage တွေက အကျုံးမဝင်နိုင်ပါ။ အသေးစိတ်ကို Credit Rules မှာ ကြည့်ပါ။",
  },
  {
    question: "VIP နဲ့ VVIP ဘယ်ဟာရွေးရမလဲ?",
    answer:
      "Movie Recap စတင်ပြီး moderate volume နဲ့ run မယ်ဆို VIP က သင့်တော်ပါတယ်။ Daily output ပိုများပြီး priority processing သို့မဟုတ် broader premium access လိုရင် VVIP ကို ရွေးပါ။",
  },
]

export const creditRules = [
  "Credit က content generation အတွက် အသုံးပြုတဲ့ usage unit ဖြစ်ပါတယ်။",
  "အသုံးပြုမယ့် credit ပမာဏက tool, source duration နဲ့ processing mode ပေါ်မူတည်ပြီး ကွာနိုင်ပါတယ်။",
  "Generate မလုပ်ခင် screen ပေါ်က estimated credit ကို စစ်ဆေးပြီးမှ စတင်ပါ။",
  "VIP နဲ့ VVIP plan နှစ်ခုလုံးက payment အတည်ပြုတဲ့နေ့ကနေ 30 days သက်တမ်းရှိပါတယ်။",
  "VIP မှာ တစ်နေ့ 5 ကြိမ်အထိ၊ VVIP မှာ တစ်နေ့ 10 ကြိမ်အထိ generate လုပ်နိုင်ပါတယ်။",
  "Plan မကုန်ခင် renewal လုပ်ပါက လက်ရှိ plan rules အတိုင်း သက်တမ်းနဲ့ included credits ကို ထပ်ပေါင်းနိုင်ပါတယ်။",
  "Plan သက်တမ်းကုန်သွားပါက အသုံးမပြုရသေးတဲ့ plan credits တွေ expire ဖြစ်နိုင်ပါတယ်။",
  "Qualifying system-generation failure ဖြစ်ပါက product policy အတိုင်း credit restoration ရနိုင်ပါတယ်။",
  "Unsuitable source, user error, incorrect usage သို့မဟုတ် customer-side issue တွေက credit restoration အကျုံးမဝင်နိုင်ပါ။",
  "Plan နဲ့ credit purchase တွေမှာ refund မရှိပါ။",
]

export function getSupportUrl(channel: SupportChannel) {
  return siteConfig.support[channel]
}

export function getPlanCtaHref() {
  return siteConfig.support.messenger || siteConfig.support.telegram || "#support"
}
