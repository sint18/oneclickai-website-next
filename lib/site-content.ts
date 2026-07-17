import { z } from "zod"

export type SupportChannel = "messenger" | "telegram"

export const toolSlugSchema = z.enum([
  "movie-recap",
  "football",
  "dhamma",
  "shorts",
  "hook-maker",
])

export type ToolSlug = z.infer<typeof toolSlugSchema>

export const guideSlugSchema = z.enum([
  "getting-started",
  "choose-a-source",
  "ats-modes",
  "review-and-publish",
])

export type GuideSlug = z.infer<typeof guideSlugSchema>

export type ToolIcon =
  | "film"
  | "football"
  | "leaf"
  | "scissors"
  | "sparkles"

export type Tool = {
  slug: ToolSlug
  name: string
  label: string
  description: string
  purpose: string
  audience: string
  sourceGuidance: string[]
  outputs: string[]
  workflow: string[]
  relatedGuideSlugs: GuideSlug[]
  icon: ToolIcon
  accent: "teal" | "ink" | "sand"
}

export type GuideSection = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export type GuideArticle = {
  slug: GuideSlug
  eyebrow: string
  title: string
  description: string
  intro: string
  sections: GuideSection[]
  relatedToolSlugs: ToolSlug[]
  videoResourceSlugs?: string[]
}

export type VideoResource = {
  slug: string
  toolSlug: ToolSlug
  title: string
  description: string
  type: "walkthrough" | "quality-guide"
  href?: string
  status: "available" | "coming-soon"
}

export type ExampleItem = {
  slug: string
  toolSlug: ToolSlug
  title: string
  sourceLabel: string
  outputLabel: string
  caption: string
  alt: string
  imageSrc: string | null
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
    "Myanmar creators အတွက် source video သို့မဟုတ် audio ကနေ Burmese voice, subtitle, SRT နဲ့ upload-ready output ထုတ်နိုင်တဲ့ AI content tool.",
  siteUrl,
  support: {
    messenger: process.env.NEXT_PUBLIC_MESSENGER_URL ?? "",
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "",
  },
} as const

export const navigation = [
  { label: "Product", href: "/#product" },
  { label: "Tools", href: "/tools" },
  { label: "Guide", href: "/guide" },
  { label: "Examples", href: "/examples" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
] as const

export const tools: Tool[] = [
  {
    slug: "movie-recap",
    name: "Movie Recap",
    label: "Movie Recap Generator",
    description:
      "Source video ကနေ Burmese narration, subtitle, SRT နဲ့ recap output ပြင်ပါ။",
    purpose:
      "ဇာတ်လမ်း flow ရှင်းတဲ့ movie recap-style source ကို Burmese recap output အဖြစ် ပြောင်းပါ။",
    audience:
      "Movie recap စတင်ချင်ပြီး source quality ကို ဂရုစိုက်တဲ့ creator တွေအတွက်ပါ။",
    sourceGuidance: [
      "Movie recap-style video ဖြစ်ပြီး story flow ရှင်းရပါမယ်။",
      "Scenes တွေက ဇာတ်လမ်းအလိုက် ဆက်စပ်နေသင့်ပါတယ်။",
      "Voiceover သို့မဟုတ် narration ပါရင် context နားလည်ဖို့ ပိုလွယ်ပါတယ်။",
    ],
    outputs: [
      "Burmese voiceover / narration",
      "Timed Burmese subtitles",
      "SRT export",
      "Recap-ready video output",
    ],
    workflow: [
      "Movie recap-style source ကို ရွေးပါ။",
      "Movie Recap tool ထဲ source တင်ပြီး voice, subtitle, timing ကို ရွေးပါ။",
      "Generate လုပ်ပြီး output ကို review လုပ်ကာ download လုပ်ပါ။",
    ],
    relatedGuideSlugs: ["getting-started", "choose-a-source", "review-and-publish"],
    icon: "film",
    accent: "teal",
  },
  {
    slug: "football",
    name: "Football",
    label: "Football Content Maker",
    description:
      "Match clip သို့မဟုတ် highlight source ကို vertical football content အဖြစ် ပြင်ပါ။",
    purpose: "Match clip သို့မဟုတ် highlight source ကို vertical football content အဖြစ် ပြင်ပါ။",
    audience: "Football page နဲ့ short-form sports content မှန်မှန်ထုတ်ချင်တဲ့ creator တွေအတွက်ပါ။",
    sourceGuidance: [
      "Match clip သို့မဟုတ် highlight source ဖြစ်ရပါမယ်။",
      "Action flow နဲ့ clip context ရှင်းတဲ့ source ကို သုံးပါ။",
      "အသုံးပြုခွင့်ရှိတဲ့ source ဖြစ်ကြောင်း ကိုယ်တိုင်စစ်ဆေးပါ။",
    ],
    outputs: [
      "Vertical football content",
      "Short-form match or highlight output",
      "Subtitle and export-ready assets where supported",
    ],
    workflow: [
      "Football match clip သို့မဟုတ် highlight source ကို ရွေးပါ။",
      "Football Content Maker ထဲ source တင်ပြီး output setting ကို ရွေးပါ။",
      "Generate လုပ်ပြီး publish မလုပ်ခင် source rights နဲ့ output ကို စစ်ပါ။",
    ],
    relatedGuideSlugs: ["getting-started", "review-and-publish"],
    icon: "football",
    accent: "ink",
  },
  {
    slug: "dhamma",
    name: "Dhamma",
    label: "Dhamma Content Maker",
    description:
      "Long sermon audio ကို background, Burmese subtitle နဲ့ timing ချိန်ထားတဲ့ video အဖြစ် ပြောင်းပါ။",
    purpose: "Long sermon audio ကို background, Burmese subtitle နဲ့ timing ချိန်ထားတဲ့ video အဖြစ် ပြောင်းပါ။",
    audience: "တရားတော် audio ကို ရှင်းလင်းတဲ့ video content အဖြစ် ပြောင်းချင်တဲ့ creator တွေအတွက်ပါ။",
    sourceGuidance: [
      "အသံရှင်းပြီး နားထောင်လို့ကောင်းတဲ့ sermon audio ကို သုံးပါ။",
      "Audio context နဲ့ အကြောင်းအရာကို မဖြတ်တောက်ဘဲ ပြန်စစ်ပါ။",
      "ဘာသာရေးအကြောင်းအရာကို publish မလုပ်ခင် စာသားနဲ့ output ကို review လုပ်ပါ။",
    ],
    outputs: [
      "Background video with sermon audio",
      "Burmese subtitles",
      "Timed, upload-ready video output",
    ],
    workflow: [
      "Sermon audio source ကို ရွေးပြီး အသံအရည်အသွေးကို စစ်ပါ။",
      "Dhamma Content Maker ထဲ audio တင်ပြီး background နဲ့ subtitle setting ကို ရွေးပါ။",
      "Generate လုပ်ပြီး အကြောင်းအရာမှန်ကန်မှုကို review လုပ်ပါ။",
    ],
    relatedGuideSlugs: ["getting-started", "review-and-publish"],
    icon: "leaf",
    accent: "sand",
  },
  {
    slug: "shorts",
    name: "Shorts",
    label: "One Click Shorts",
    description:
      "Stream နဲ့ long-video source တွေကို short-form clips အဖြစ် ပြန်ထုတ်ပါ။",
    purpose: "Stream နဲ့ long-video source တွေကို short-form clips အဖြစ် ပြန်ထုတ်ပါ။",
    audience: "Long video သို့မဟုတ် stream ကနေ short-form content ပုံမှန်ထုတ်ချင်တဲ့ creator တွေအတွက်ပါ။",
    sourceGuidance: [
      "Long video သို့မဟုတ် stream source ဖြစ်ပြီး clip ထုတ်ဖို့ context ရှိရပါမယ်။",
      "စိတ်ဝင်စားစရာအပိုင်းတွေကို ရှာဖွေလို့ရအောင် source quality ကောင်းရပါမယ်။",
      "Source rights နဲ့ platform rules ကို publish မလုပ်ခင် စစ်ဆေးပါ။",
    ],
    outputs: [
      "Short-form clips",
      "Vertical content output",
      "Upload-ready files for short-form platforms",
    ],
    workflow: [
      "Stream သို့မဟုတ် long-video source ကို ရွေးပါ။",
      "One Click Shorts ထဲ source တင်ပြီး clip/output setting ကို ရွေးပါ။",
      "ထုတ်ပြီးသား short clips ကို review လုပ်ကာ download လုပ်ပါ။",
    ],
    relatedGuideSlugs: ["getting-started", "review-and-publish"],
    icon: "scissors",
    accent: "teal",
  },
  {
    slug: "hook-maker",
    name: "Hook Maker",
    label: "Hook Maker",
    description:
      "Video စစချင်း audience ကို ရပ်ကြည့်စေမယ့် hook angle တွေ ထုတ်ပါ။",
    purpose: "Content idea သို့မဟုတ် source ကနေ video အစပိုင်း hook angle တွေ စဉ်းစားဖို့ ကူညီပါ။",
    audience: "Video စစချင်းမှာ audience အာရုံစိုက်လာအောင် opening angle လိုတဲ့ creator တွေအတွက်ပါ။",
    sourceGuidance: [
      "ပြောချင်တဲ့ content idea သို့မဟုတ် source context ကို ရှင်းရှင်းလင်းလင်း ပြင်ဆင်ပါ။",
      "ကိုယ့် audience နဲ့ကိုက်တဲ့ topic နဲ့ key point ကို အရင်သတ်မှတ်ပါ။",
      "Generated hook ကို ကိုယ့် content နဲ့ကိုက်မကိုက် ပြန်စစ်ပါ။",
    ],
    outputs: [
      "Opening hook angles",
      "Short-form content opening directions",
      "Content idea အလိုက် ရွေးချယ်စရာ hook များ",
    ],
    workflow: [
      "Content idea သို့မဟုတ် source context ကို ပြင်ဆင်ပါ။",
      "Hook Maker ထဲ ထည့်ပြီး ကိုယ့် content အမျိုးအစားကို စဉ်းစားပါ။",
      "ထွက်လာတဲ့ hook angle ကို review လုပ်ပြီး script workflow ထဲ ဆက်သုံးပါ။",
    ],
    relatedGuideSlugs: ["getting-started", "review-and-publish"],
    icon: "sparkles",
    accent: "ink",
  },
]

export const plans: PricingPlan[] = [
  {
    name: "VIP",
    price: "35,000 MMK",
    description: "Movie Recap စပြီး content မှန်မှန်ထုတ်ချင်တဲ့ creator အတွက်။",
    badge: "Beginner Choice",
    features: [
      "60 credits / 30 days",
      "တစ်နေ့ 5 ကြိမ်အထိ generate",
      "Standard processing speed",
      "Movie Recap + Hook Maker",
      "ATS Standard + ATS Pro",
      "Burmese subtitle + SRT export",
    ],
  },
  {
    name: "VVIP",
    price: "59,000 MMK",
    description: "Daily output ပိုများပြီး priority processing လိုတဲ့ creator အတွက်။",
    badge: "Best Value",
    features: [
      "120 credits / 30 days",
      "တစ်နေ့ 10 ကြိမ်အထိ generate",
      "Priority processing",
      "Movie Recap + Hook Maker",
      "ATS Standard + ATS Pro",
      "Burmese subtitle + SRT export",
    ],
  },
]

export const faqs: FAQItem[] = [
  {
    question: "One Click AI ဆိုတာဘာလဲ?",
    answer:
      "One Click AI က source video သို့မဟုတ် audio တင်ပြီး Burmese voice, subtitle, timing နဲ့ upload-ready output ထုတ်နိုင်တဲ့ Myanmar creator tool ဖြစ်ပါတယ်။",
  },
  {
    question: "ဘယ် content အမျိုးအစားတွေ လုပ်လို့ရလဲ?",
    answer:
      "Movie Recap, Football Content, Dhamma Content, One Click Shorts နဲ့ Hook Maker ကို အသုံးပြုနိုင်ပါတယ်။ Tool availability က သင့် plan နဲ့ လက်ရှိ product rules ပေါ်မူတည်နိုင်ပါတယ်။",
  },
  {
    question: "Software install လုပ်ရလား?",
    answer:
      "မလိုပါဘူး။ Web browser ကနေ သုံးနိုင်ပါတယ်။ Upload နဲ့ download အဆင်ပြေစေဖို့ Chrome သို့မဟုတ် Safari ကို အသုံးပြုပါ။",
  },
  {
    question: "Burmese voice နဲ့ subtitle ပါလား?",
    answer:
      "Supported tools တွေမှာ Burmese narration, Burmese subtitle နဲ့ SRT export ပါဝင်ပါတယ်။ Output quality က source quality, audio clarity, source type နဲ့ mode ပေါ်မူတည်ပါတယ်။",
  },
  {
    question: "ATS Standard နဲ့ ATS Pro ဘာကွာလဲ?",
    answer:
      "ATS Standard က credit ကိုချွေတာပြီး content မှန်မှန်ထုတ်ဖို့ balance လုပ်ထားတဲ့ mode ဖြစ်ပါတယ်။ ATS Pro က voice, visual နဲ့ subtitle timing ကို ပိုဦးစားပေးတဲ့ mode ဖြစ်ပါတယ်။",
  },
  {
    question: "Phone နဲ့သုံးလို့ရလား?",
    answer:
      "ရပါတယ်။ Chrome သို့မဟုတ် Safari နဲ့သုံးပါ။ Facebook, Messenger, Telegram အတွင်းက in-app browser တွေက upload, download သို့မဟုတ် login အခက်အခဲ ဖြစ်စေနိုင်ပါတယ်။",
  },
  {
    question: "Copyright နဲ့ monetization ကို အာမခံလား?",
    answer:
      "မအာမခံပါဘူး။ Source rights, content quality, originality, platform rules နဲ့ account performance ပေါ်မူတည်ပါတယ်။ One Click AI က video ထုတ်တဲ့အလုပ်ကို လျှော့ပေးတာဖြစ်ပြီး platform approval, views, followers, income သို့မဟုတ် monetization ကို အာမခံမပေးပါ။",
  },
  {
    question: "Generation error ဖြစ်ရင် credit ကုန်မလား?",
    answer:
      "System error အကျုံးဝင်လို့ project မပြီးသွားတဲ့ case တွေမှာ credit restoration ကို product policy အတိုင်း ဆောင်ရွက်နိုင်ပါတယ်။ User error, unsuitable source သို့မဟုတ် incorrect usage တွေက အကျုံးမဝင်နိုင်ပါ။ အသေးစိတ်ကို Credit Rules မှာ ကြည့်ပါ။",
  },
  {
    question: "VIP နဲ့ VVIP ဘယ်ဟာရွေးရမလဲ?",
    answer:
      "Movie Recap စတင်ပြီး moderate volume နဲ့သုံးမယ်ဆို VIP က သင့်တော်ပါတယ်။ Daily output ပိုများပြီး priority processing လိုရင် VVIP ကို ရွေးပါ။",
  },
]

export const videoResources: VideoResource[] = [
  {
    slug: "football-walkthrough",
    toolSlug: "football",
    title: "ဘောလုံး content Tool အသုံးပြုနည်း",
    description: "Football Content Maker ကို စတင်အသုံးပြုဖို့ walkthrough video ကို ကြည့်ပါ။",
    type: "walkthrough",
    href: "https://www.facebook.com/reel/1039389995329615/",
    status: "available",
  },
  {
    slug: "shorts-walkthrough",
    toolSlug: "shorts",
    title: "One Click Shorts Tool အသုံးပြုနည်း",
    description: "Long video သို့မဟုတ် stream ကနေ short-form clip ထုတ်တဲ့ flow ကို ကြည့်ပါ။",
    type: "walkthrough",
    href: "https://www.facebook.com/reel/997618983137266/",
    status: "available",
  },
  {
    slug: "movie-recap-walkthrough",
    toolSlug: "movie-recap",
    title: "Movie Recap Tool အသုံးပြုနည်း",
    description: "Movie Recap workflow နဲ့ source တင်ပြီး output ထုတ်ပုံကို ကြည့်ပါ။",
    type: "walkthrough",
    href: "https://www.facebook.com/reel/969633642350390",
    status: "available",
  },
  {
    slug: "movie-recap-source-guide",
    toolSlug: "movie-recap",
    title: "Movie Recap result ကောင်းအောင် source ရွေးနည်း",
    description: "Source video quality က recap output ပေါ် ဘယ်လိုသက်ရောက်လဲဆိုတာ ဖတ်ကြည့်ပါ။",
    type: "quality-guide",
    href: "https://www.facebook.com/AICodeLab/posts/pfbid0jFpgqTxSgz3UGc5JLwhxSkgifkaAqGoerq1CFK8EFaaHTVsrep5pRDp6J4M5vgLfl",
    status: "available",
  },
  {
    slug: "dhamma-walkthrough",
    toolSlug: "dhamma",
    title: "တရားတော် video Tool အသုံးပြုနည်း",
    description: "Dhamma Content Maker walkthrough video ကို မကြာမီ ထည့်ပေးပါမယ်။",
    type: "walkthrough",
    status: "coming-soon",
  },
]

export const guides: GuideArticle[] = [
  {
    slug: "getting-started",
    eyebrow: "Start here",
    title: "One Click AI ကို စတင်သုံးမယ်ဆိုရင်",
    description: "Tool ရွေးတာကနေ output download လုပ်တဲ့အထိ အခြေခံ workflow ကို တစ်ဆင့်ချင်း လိုက်လုပ်ပါ။",
    intro:
      "Beginner ဖြစ်ဖြစ် content ကို ပုံမှန် run နေသူဖြစ်ဖြစ် source တင်၊ setting ရွေး၊ generate လုပ်ပြီး output ကို review လုပ်နိုင်အောင် ဒီ guide ကို စီထားပါတယ်။",
    sections: [
      {
        title: "၁။ ကိုယ်လုပ်မယ့် content type ကို ရွေးပါ",
        paragraphs: [
          "Movie Recap, Football, Dhamma, Shorts နဲ့ Hook Maker ထဲက ကိုယ်ထုတ်ချင်တဲ့ content နဲ့ ကိုက်တဲ့ tool ကို ရွေးပါ။ Tool ကို source ပုံစံနဲ့ ကိုက်အောင် ရွေးရင် output ကို နားလည်ပြီး review လုပ်ရတာ ပိုလွယ်ပါတယ်။",
        ],
        bullets: [
          "Movie recap-style source အတွက် Movie Recap",
          "Match clip သို့မဟုတ် highlight အတွက် Football",
          "Sermon audio အတွက် Dhamma",
          "Long video သို့မဟုတ် stream အတွက် Shorts",
          "Opening angle လိုရင် Hook Maker",
        ],
      },
      {
        title: "၂။ သင့်တော်တဲ့ source ကို တင်ပါ",
        paragraphs: [
          "Video သို့မဟုတ် audio source ကို upload လုပ်ပါ။ Source quality, story flow, အသံရှင်းလင်းမှုနဲ့ ကိုယ်ရွေးထားတဲ့ tool တို့ကိုက်ညီမှုက output အပေါ် သက်ရောက်နိုင်ပါတယ်။",
        ],
      },
      {
        title: "၃။ Voice, subtitle, timing နဲ့ mode ကို ရွေးပါ",
        paragraphs: [
          "လိုအပ်တဲ့ voice, subtitle, timing နဲ့ output setting ကို ရွေးပါ။ ATS Standard နဲ့ ATS Pro ဘာကွာလဲဆိုတာကို ATS Modes guide မှာ ဆက်ဖတ်နိုင်ပါတယ်။",
        ],
      },
      {
        title: "၄။ Generate လုပ်ပြီး output ကို review လုပ်ပါ",
        paragraphs: [
          "Generate ပြီးတဲ့အခါ voice, visual, subtitle timing နဲ့ စာသားကို publish မလုပ်ခင် ပြန်စစ်ပါ။ လိုအပ်ရင် SRT file သီးခြား download လုပ်ပြီး ကိုယ့် editing workflow ထဲ ဆက်သုံးနိုင်ပါတယ်။",
        ],
      },
    ],
    relatedToolSlugs: ["movie-recap", "football", "dhamma", "shorts", "hook-maker"],
    videoResourceSlugs: [
      "football-walkthrough",
      "shorts-walkthrough",
      "movie-recap-walkthrough",
      "dhamma-walkthrough",
    ],
  },
  {
    slug: "choose-a-source",
    eyebrow: "Source guidance",
    title: "Result ကောင်းဖို့ source ကို ဘယ်လိုရွေးမလဲ?",
    description: "အထူးသဖြင့် Movie Recap အတွက် source quality က output အပေါ် ဘယ်လိုသက်ရောက်လဲ သိထားပါ။",
    intro:
      "One Click AI က random video တစ်ခုခုတင်လိုက်တာနဲ့ ဘာပဲဖြစ်ဖြစ် result ကောင်းအောင်လုပ်ပေးတဲ့ magic tool မဟုတ်ပါဘူး။ Tool နဲ့ကိုက်တဲ့ source ကို ရွေးတာက workflow ရဲ့ အရေးကြီးဆုံးအပိုင်းတစ်ခုပါ။",
    sections: [
      {
        title: "Movie Recap အတွက် သင့်တော်တဲ့ source",
        paragraphs: [
          "Movie recap content အတွက် design လုပ်ထားတဲ့ tool ဖြစ်လို့ ဇာတ်လမ်း flow နဲ့ context ရှင်းတဲ့ video ကို သုံးပါ။",
        ],
        bullets: [
          "Movie story ပြောထားတဲ့ recap video",
          "ဇာတ်လမ်း flow ရှိတဲ့ video",
          "Scene တွေ story အလိုက် ဆက်သွားတဲ့ video",
          "Voiceover သို့မဟုတ် narration ပါတဲ့ video",
          "ကြည့်တဲ့သူ နားလည်အောင် ဇာတ်ကြောင်းရှင်းထားတဲ့ video",
        ],
      },
      {
        title: "ဘယ်လို source တွေက မသင့်တော်နိုင်လဲ",
        paragraphs: [
          "Random clip တွေမှာ story flow မရှင်းတာ၊ narration မရှိတာ၊ scene context မပြည့်တာတွေ ဖြစ်နိုင်ပါတယ်။ ဒီလို source တွေက output မကောင်းတာ၊ script မမှန်တာ၊ project fail ဖြစ်တာတွေ ဖြစ်စေနိုင်ပါတယ်။",
        ],
        bullets: [
          "Random animation clip သို့မဟုတ် AI-generated random video",
          "Cool edit, music edit သို့မဟုတ် funny clip",
          "Football highlight ကို Movie Recap tool ထဲ ထည့်တာ",
          "Drama behind-the-scenes နဲ့ scene compilation",
        ],
      },
      {
        title: "အသုံးပြုဖို့ လွယ်တဲ့ workflow",
        paragraphs: [
          "YouTube သို့မဟုတ် ကိုယ်အသုံးပြုခွင့်ရှိတဲ့ source library ထဲက story flow ကောင်းပြီး context ရှင်းတဲ့ movie recap-style video ကို ရွေးပါ။ Popular ဖြစ်တာတစ်ခုတည်းကို quality guarantee လို့ မယူဆဘဲ source ကို ကိုယ်တိုင် review လုပ်ပြီးမှ upload တင်ပါ။",
        ],
      },
      {
        title: "အလွယ်ပြောရရင်",
        paragraphs: [
          "One Click AI ကို Movie Recap လုပ်ဖို့ သုံးပါ။ Random video အကုန်လုံးကို recap generator ထဲထည့်ပြီး result ကောင်းလာမယ်လို့ မမျှော်လင့်ပါနဲ့။ Source video ကောင်းလေ output ကို နားလည်ပြီး ပြန်စစ်ရတာ ပိုလွယ်လေပါပဲ။",
        ],
      },
    ],
    relatedToolSlugs: ["movie-recap"],
    videoResourceSlugs: ["movie-recap-walkthrough", "movie-recap-source-guide"],
  },
  {
    slug: "ats-modes",
    eyebrow: "Quality modes",
    title: "ATS Standard နဲ့ ATS Pro ကို ဘယ်လိုရွေးမလဲ?",
    description: "Content volume, timing priority နဲ့ credit usage ကိုကြည့်ပြီး mode ရွေးပါ။",
    intro:
      "ATS mode ရွေးတဲ့အခါ output တစ်ခုချင်းစီရဲ့ quality priority နဲ့ credit usage ကို ထည့်စဉ်းစားပါ။ Generate မလုပ်ခင် screen ပေါ်က estimate ကို စစ်ပြီးမှ စတင်ပါ။",
    sections: [
      {
        title: "ATS Standard",
        paragraphs: [
          "Credit usage ကို balance လုပ်ပြီး content ကို မှန်မှန်ထုတ်ချင်တဲ့ workflow အတွက် သင့်တော်ပါတယ်။ Daily output ကို ထိန်းပြီး ဆက်လုပ်ချင်တဲ့ creator တွေအတွက် စဉ်းစားနိုင်ပါတယ်။",
        ],
      },
      {
        title: "ATS Pro",
        paragraphs: [
          "Voice, visual နဲ့ subtitle timing ကို ပိုဦးစားပေးပြီး output ကို သေချာစစ်ချင်တဲ့ content အတွက် သုံးနိုင်ပါတယ်။",
        ],
      },
      {
        title: "Generate မလုပ်ခင် စစ်ရမယ့်အချက်",
        paragraphs: [
          "Tool, source duration နဲ့ mode ပေါ်မူတည်ပြီး credit usage က ကွာနိုင်ပါတယ်။ Generate မလုပ်ခင် estimated credit ကို ကြည့်ပြီး ကိုယ့် plan နဲ့ကိုက်မကိုက် စစ်ပါ။ အသေးစိတ်ကို Credit Rules မှာ ဖတ်ပါ။",
        ],
      },
    ],
    relatedToolSlugs: ["movie-recap", "football", "dhamma", "shorts"],
  },
  {
    slug: "review-and-publish",
    eyebrow: "Before you publish",
    title: "Output ကို review လုပ်ပြီးမှ publish လုပ်ပါ",
    description: "Voice, subtitle, timing, source rights နဲ့ platform rules ကို နောက်ဆုံးတစ်ကြိမ် စစ်ဆေးပါ။",
    intro:
      "AI output ရတာနဲ့ တန်းတင်တာထက် ကိုယ့် content အဖြစ် publish မလုပ်ခင် source နဲ့ output ကို တစ်ခါပြန်စစ်တာက ပိုလုံခြုံပါတယ်။",
    sections: [
      {
        title: "Voice နဲ့ subtitle ကို နားထောင်ဖတ်ကြည့်ပါ",
        paragraphs: [
          "အသံနဲ့ စာသား ကိုက်ညီမှု၊ Burmese line တွေရဲ့ ဖတ်ရလွယ်မှုနဲ့ စာလုံးမှားနိုင်တဲ့နေရာတွေကို ပြန်စစ်ပါ။",
        ],
      },
      {
        title: "Timing နဲ့ visual ကို တိုက်စစ်ပါ",
        paragraphs: [
          "Subtitle တက်တဲ့အချိန်၊ voice နဲ့ visual တို့ ကိုက်ညီမှု၊ video အစနဲ့အဆုံးမှာ မလိုတဲ့အပိုင်းတွေ ရှိမရှိ စစ်ပါ။",
        ],
      },
      {
        title: "SRT နဲ့ upload-ready output ကို သုံးပါ",
        paragraphs: [
          "Video ထဲ subtitle တန်းပါဖို့ မလိုသေးရင် SRT file ကို သီးခြား download လုပ်ပြီး ကိုယ့် editing workflow ထဲ ဆက်သုံးနိုင်ပါတယ်။ Platform အလိုက် output format နဲ့ caption ကို ပြန်စစ်ပါ။",
        ],
      },
      {
        title: "Rights နဲ့ claims ကို မမေ့ပါနဲ့",
        paragraphs: [
          "Source rights မရှိဘဲ အသုံးပြုတာ၊ platform enforcement, views, followers, income နဲ့ monetization approval ကို One Click AI က အာမခံမပေးပါ။ Publish မလုပ်ခင် ကိုယ့် source rights နဲ့ platform rules ကို ကိုယ်တိုင်စစ်ဆေးပါ။",
        ],
      },
    ],
    relatedToolSlugs: ["movie-recap", "football", "dhamma", "shorts", "hook-maker"],
  },
]

export const exampleItems: ExampleItem[] = [
  {
    slug: "movie-recap-output",
    toolSlug: "movie-recap",
    title: "Movie Recap output example",
    sourceLabel: "Story-led recap source",
    outputLabel: "Burmese voice · subtitle · SRT",
    caption: "Approved Movie Recap screenshot or output sample ထည့်ရန်နေရာ။",
    alt: "One Click AI Movie Recap output example",
    imageSrc: null,
  },
  {
    slug: "football-output",
    toolSlug: "football",
    title: "Football vertical output example",
    sourceLabel: "Match clip or highlight",
    outputLabel: "Vertical football content",
    caption: "Approved Football Content Maker output sample ထည့်ရန်နေရာ။",
    alt: "One Click AI Football output example",
    imageSrc: null,
  },
  {
    slug: "dhamma-output",
    toolSlug: "dhamma",
    title: "Dhamma video output example",
    sourceLabel: "Sermon audio source",
    outputLabel: "Background · Burmese subtitle · timing",
    caption: "Approved Dhamma output sample ထည့်ရန်နေရာ။",
    alt: "One Click AI Dhamma output example",
    imageSrc: null,
  },
  {
    slug: "shorts-output",
    toolSlug: "shorts",
    title: "One Click Shorts output example",
    sourceLabel: "Long video or stream",
    outputLabel: "Short-form vertical clip",
    caption: "Approved One Click Shorts output sample ထည့်ရန်နေရာ။",
    alt: "One Click AI Shorts output example",
    imageSrc: null,
  },
  {
    slug: "hook-maker-output",
    toolSlug: "hook-maker",
    title: "Hook Maker example",
    sourceLabel: "Content idea or source context",
    outputLabel: "Opening hook angles",
    caption: "Approved Hook Maker example ထည့်ရန်နေရာ။",
    alt: "One Click AI Hook Maker example",
    imageSrc: null,
  },
]

export const hasApprovedExampleAssets = exampleItems.some((item) => Boolean(item.imageSrc))

export const creditRules = [
  "Credit က content generation အတွက် အသုံးပြုတဲ့ usage unit ဖြစ်ပါတယ်။",
  "အသုံးပြုမယ့် credit ပမာဏက tool, source duration နဲ့ mode ပေါ်မူတည်ပြီး ကွာနိုင်ပါတယ်။",
  "Generate မလုပ်ခင် screen ပေါ်က estimated credit ကို စစ်ပြီးမှ စတင်ပါ။",
  "VIP နဲ့ VVIP plan နှစ်ခုလုံးက payment အတည်ပြုတဲ့နေ့ကနေ 30 days သက်တမ်းရှိပါတယ်။",
  "VIP မှာ တစ်နေ့ 5 ကြိမ်အထိ၊ VVIP မှာ တစ်နေ့ 10 ကြိမ်အထိ generate လုပ်နိုင်ပါတယ်။",
  "Plan မကုန်ခင် renewal လုပ်ပါက လက်ရှိ plan rules အတိုင်း သက်တမ်းနဲ့ included credits ကို ထပ်ပေါင်းနိုင်ပါတယ်။",
  "Plan သက်တမ်းကုန်သွားပါက အသုံးမပြုရသေးတဲ့ plan credits တွေ expire ဖြစ်နိုင်ပါတယ်။",
  "System-generation failure အကျုံးဝင်ပါက product policy အတိုင်း credit restoration ရနိုင်ပါတယ်။",
  "Unsuitable source, user error, incorrect usage သို့မဟုတ် customer-side issue တွေက credit restoration အကျုံးမဝင်နိုင်ပါ။",
  "Plan နဲ့ credit purchase တွေမှာ refund မရှိပါ။",
]

export function getSupportUrl(channel: SupportChannel) {
  return siteConfig.support[channel]
}

export function getToolBySlug(value: string) {
  const result = toolSlugSchema.safeParse(value)
  return result.success ? tools.find((tool) => tool.slug === result.data) : undefined
}

export function getGuideBySlug(value: string) {
  const result = guideSlugSchema.safeParse(value)
  return result.success ? guides.find((guide) => guide.slug === result.data) : undefined
}

export function getVideoResourceBySlug(value: string) {
  return videoResources.find((resource) => resource.slug === value)
}

export function getVideoResourcesForTool(toolSlug: ToolSlug) {
  return videoResources.filter((resource) => resource.toolSlug === toolSlug)
}

export function getExamplesForTool(toolSlug: ToolSlug) {
  return exampleItems.filter((example) => example.toolSlug === toolSlug)
}

export function getPlanCtaHref() {
  return siteConfig.support.messenger || siteConfig.support.telegram || "/#support"
}
