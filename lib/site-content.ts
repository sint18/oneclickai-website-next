import { z } from "zod"

export type SupportChannel = "messenger" | "telegram"

export const toolSlugSchema = z.enum([
  "movie-recap",
  "football",
  "dhamma",
  "shorts",
  "hook-maker",
  "thumbnail-generator",
  "video-splitter",
  "knowledge-video",
  "voice-library",
])

export type ToolSlug = z.infer<typeof toolSlugSchema>

export const toolAvailabilitySchema = z.enum(["available", "coming-soon"])
export type ToolAvailability = z.infer<typeof toolAvailabilitySchema>
export const toolAvailability = z
  .record(toolSlugSchema, toolAvailabilitySchema)
  .parse({
    "movie-recap": "available",
    football: "available",
    dhamma: "available",
    shorts: "available",
    "hook-maker": "available",
    "thumbnail-generator": "available",
    "video-splitter": "available",
    "knowledge-video": "coming-soon",
    "voice-library": "available",
  })
export const knowledgeVideoNotice =
  toolAvailability["knowledge-video"] === "coming-soon"
    ? "Knowledge Video — မကြာမီ။ လက်ရှိအသုံးပြုနိုင်တဲ့ feature မဟုတ်သေးပါ။"
    : "Knowledge Video ကို VVIP plan မှာ အသုံးပြုနိုင်ပါတယ်။"

export const recapCreditExample = z
  .object({
    sourceMinutes: z.number().positive(),
    standardPerMinute: z.number().positive(),
    proPerMinute: z.number().positive(),
    monthlyCredits: z.object({
      VIP: z.number().int().positive(),
      VVIP: z.number().int().positive(),
    }),
  })
  .parse({
    sourceMinutes: 5,
    standardPerMinute: 1,
    proPerMinute: 3,
    monthlyCredits: { VIP: 60, VVIP: 120 },
  })

export const guideSlugSchema = z.enum([
  "getting-started",
  "choose-a-source",
  "ats-modes",
  "review-and-publish",
])

export type GuideSlug = z.infer<typeof guideSlugSchema>

export type ToolIcon =
  "film" | "football" | "image" | "leaf" | "scissors" | "sparkles"

export type Tool = {
  availability: ToolAvailability
  slug: ToolSlug
  name: string
  label: string
  description: string
  access: string
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
  linkLabel?: string
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
  valueSummary?: string
  features: string[]
}

export type PlanComparisonValueKind =
  "included" | "excluded" | "upcoming" | "text"

export type PlanComparisonValue = {
  kind: PlanComparisonValueKind
  label: string
}

export type PlanComparisonGroup = {
  heading?: string
  rows: {
    feature: string
    vip: PlanComparisonValue
    vvip: PlanComparisonValue
  }[]
}

export type FAQItem = {
  question: string
  answer: string
}

export type CreatorTestimonial = {
  name: string
  quote: string
}

export type CreatorChannel = {
  href: string
  label: string
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const siteConfig = {
  name: "One Click AI",
  company: "AI Code Lab",
  description: "Creator တွေအတွက် တစ်ခုတည်းသော AI-assisted content tool suite.",
  siteUrl,
  appUrl: "https://app.oneclickai.studio",
  support: {
    messenger:
      process.env.NEXT_PUBLIC_MESSENGER_URL ?? "https://m.me/AICodeLab",
    telegram:
      process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/aicodelabmm",
  },
  social: [
    { label: "TikTok", href: "https://www.tiktok.com/@aicode.lab" },
    { label: "YouTube", href: "https://www.youtube.com/@AICodeLabMM" },
    { label: "Facebook", href: "https://www.facebook.com/AICodeLab/" },
  ],
} as const

export const navigation = [
  { label: "Product", href: "/#product" },
  { label: "Tools", href: "/tools" },
  { label: "Guide", href: "/guide" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/#faq" },
] as const

export const tools: Tool[] = [
  {
    slug: "movie-recap",
    availability: toolAvailability["movie-recap"],
    name: "Movie Recap",
    label: "Movie Recap Generator",
    description:
      "Source video တင်ပြီး Burmese narration, subtitle, SRT ပါတဲ့ recap ကို လွယ်လွယ်ထုတ်ပါ။",
    access: "VIP and VVIP",
    purpose:
      "ဇာတ်လမ်း flow ရှင်းတဲ့ movie recap-style source ကို မြန်မာလိုပြန်ပြောတဲ့ recap video အဖြစ် ပြောင်းပါ။",
    audience:
      "Movie recap စလုပ်ချင်ပြီး source quality ကို သေချာဂရုစိုက်တဲ့ creator တွေအတွက်ပါ။",
    sourceGuidance: [
      "Story flow ရှင်းတဲ့ movie recap-style video ဖြစ်ရပါမယ်။",
      "Scene တွေက ဇာတ်လမ်းအတိုင်း ဆက်သွားတာ ပိုကောင်းပါတယ်။",
      "Voiceover သို့မဟုတ် narration ပါရင် context ကို ပိုနားလည်လွယ်ပါတယ်။",
    ],
    outputs: [
      "Burmese voiceover / narration",
      "Edited recap video",
      "Timed Burmese subtitles",
      "SRT export",
      "VVIP မှာ styled Myanmar subtitle burn-in",
    ],
    workflow: [
      "Movie recap-style source ကို ရွေးပါ။",
      "Movie Recap tool ထဲ တင်ပြီး voice, subtitle, timing ကို ရွေးပါ။",
      "Generate လုပ်ပြီး output ကို ပြန်ကြည့်၊ အဆင်ပြေရင် download လုပ်ပါ။",
    ],
    relatedGuideSlugs: [
      "getting-started",
      "choose-a-source",
      "review-and-publish",
    ],
    icon: "film",
    accent: "teal",
  },
  {
    slug: "football",
    availability: toolAvailability["football"],
    name: "Football",
    label: "Football Content Maker",
    description:
      "Match clip သို့မဟုတ် highlight ကို vertical football content အဖြစ် အမြန်ပြင်ပါ။",
    access: "VVIP only",
    purpose:
      "Match clip သို့မဟုတ် highlight source ကို short-form football video အဖြစ် ပြန်ထုတ်ပါ။",
    audience:
      "VVIP plan နဲ့ football page run နေပြီး sports short-form content ကို ပုံမှန်တင်ချင်တဲ့ creator တွေအတွက်ပါ။",
    sourceGuidance: [
      "VVIP only feature ဖြစ်ပြီး source footage ကို 10 minutes အထိ လက်ခံပါတယ်။",
      "Selected/output clip duration က 3 minutes အထိ ဖြစ်ပါတယ်။",
      "Match clip သို့မဟုတ် highlight source ဖြစ်ရပါမယ်။",
      "Action flow နဲ့ clip context ရှင်းတဲ့ source ကို သုံးပါ။",
      "အသုံးပြုခွင့်ရှိတဲ့ source ဖြစ်ကြောင်း ကိုယ်တိုင်စစ်ဆေးပါ။",
    ],
    outputs: [
      "Vertical football content",
      "Automated framing",
      "Automated ball tracking",
      "Short-form match or highlight output",
    ],
    workflow: [
      "Football match clip သို့မဟုတ် highlight source ကို ရွေးပါ။",
      "Football Content Maker ထဲ တင်ပြီး output setting ကို ရွေးပါ။",
      "Generate လုပ်ပြီး မတင်ခင် source rights နဲ့ output ကို ပြန်စစ်ပါ။",
    ],
    relatedGuideSlugs: ["getting-started", "review-and-publish"],
    icon: "football",
    accent: "ink",
  },
  {
    slug: "dhamma",
    availability: toolAvailability["dhamma"],
    name: "Dhamma",
    label: "Dhamma Content Maker",
    description:
      "တရားတော် audio ကို background, Burmese subtitle, timing ပါတဲ့ video အဖြစ် ပြောင်းပါ။",
    access: "VVIP only",
    purpose:
      "Long sermon audio ကို နားထောင်ဖတ်ရှုလို့ကောင်းတဲ့ Dhamma video အဖြစ် ပြန်ပြင်ပါ။",
    audience:
      "VVIP plan နဲ့ တရားတော် audio ကို သပ်သပ်ရပ်ရပ် video content အဖြစ် ပြောင်းချင်တဲ့ creator တွေအတွက်ပါ။",
    sourceGuidance: [
      "VVIP only feature ဖြစ်ပြီး source audio ကို 3 hours အထိ လက်ခံပါတယ်။",
      "Standard နဲ့ Pro quality tier နှစ်မျိုး ရွေးနိုင်ပါတယ်။",
      "အသံရှင်းပြီး နားထောင်လို့ကောင်းတဲ့ sermon audio ကို သုံးပါ။",
      "Audio context နဲ့ အကြောင်းအရာ မလွဲအောင် ပြန်စစ်ပါ။",
      "ဘာသာရေးအကြောင်းအရာဖြစ်လို့ publish မလုပ်ခင် စာသားနဲ့ output ကို သေချာ review လုပ်ပါ။",
    ],
    outputs: [
      "Background video with sermon audio",
      "Burmese subtitles",
      "Review လုပ်ပြီး publish လုပ်ဖို့ နီးစပ်တဲ့ timed video output",
    ],
    workflow: [
      "Sermon audio ကို ရွေးပြီး အသံရှင်းမရှင်း စစ်ပါ။",
      "Dhamma Content Maker ထဲ audio တင်ပြီး background နဲ့ subtitle setting ကို ရွေးပါ။",
      "Generate လုပ်ပြီး အကြောင်းအရာ မှန်မမှန် ပြန်ကြည့်ပါ။",
    ],
    relatedGuideSlugs: ["getting-started", "review-and-publish"],
    icon: "leaf",
    accent: "sand",
  },
  {
    slug: "shorts",
    availability: toolAvailability["shorts"],
    name: "Shorts",
    label: "One Click Shorts",
    description:
      "Stream နဲ့ long video ထဲက အကောင်းဆုံးအပိုင်းတွေကို short clips အဖြစ် ပြန်ထုတ်ပါ။",
    access: "VVIP only",
    purpose:
      "Stream နဲ့ long-video source တွေကို short-form clips အဖြစ် ပြန်ခွဲထုတ်ပါ။",
    audience:
      "VVIP plan နဲ့ long video သို့မဟုတ် stream ကနေ short-form content ကို ပုံမှန်ထုတ်ချင်တဲ့ creator တွေအတွက်ပါ။",
    sourceGuidance: [
      "VVIP only feature ဖြစ်ပြီး source video ကို 2 hours အထိ လက်ခံပါတယ်။",
      "Long video သို့မဟုတ် stream source ဖြစ်ပြီး clip ထုတ်လို့ရတဲ့ context ရှိရပါမယ်။",
      "စိတ်ဝင်စားစရာအပိုင်းတွေကို ရှာလို့ရအောင် source quality ကောင်းဖို့လိုပါတယ်။",
      "Source rights နဲ့ platform rules ကို publish မလုပ်ခင် စစ်ဆေးပါ။",
    ],
    outputs: [
      "Short-form clips",
      "Vertical content output",
      "TikTok, YouTube Shorts နဲ့ Facebook Reels use cases",
    ],
    workflow: [
      "Stream သို့မဟုတ် long-video source ကို ရွေးပါ။",
      "One Click Shorts ထဲ source တင်ပြီး clip/output setting ကို ရွေးပါ။",
      "ထွက်လာတဲ့ short clips ကို ပြန်ကြည့်ပြီး download လုပ်ပါ။",
    ],
    relatedGuideSlugs: ["getting-started", "review-and-publish"],
    icon: "scissors",
    accent: "teal",
  },
  {
    slug: "hook-maker",
    availability: toolAvailability["hook-maker"],
    name: "Hook Maker",
    label: "Hook Maker",
    description:
      "Video အစမှာ audience ကို ဆက်ကြည့်ချင်စေမယ့် hook angle တွေ ထုတ်ပါ။",
    access: "VIP and VVIP",
    purpose:
      "Content idea သို့မဟုတ် source context ကနေ video အဖွင့် hook တွေ စဉ်းစားပေးပါတယ်။",
    audience:
      "Video စစချင်းမှာ audience အာရုံဝင်လာအောင် opening angle လိုတဲ့ creator တွေအတွက်ပါ။",
    sourceGuidance: [
      "ပြောချင်တဲ့ content idea သို့မဟုတ် source context ကို ရှင်းရှင်းလင်းလင်း ပြင်ထားပါ။",
      "ကိုယ့် audience နဲ့ကိုက်တဲ့ topic နဲ့ key point ကို အရင်သတ်မှတ်ပါ။",
      "ထွက်လာတဲ့ hook ကို ကိုယ့် content နဲ့ကိုက်မကိုက် ပြန်စစ်ပါ။",
    ],
    outputs: [
      "Opening hook angles",
      "Short-form content အဖွင့် idea တွေ",
      "Content idea အလိုက် ရွေးချယ်စရာ hook တွေ",
    ],
    workflow: [
      "Content idea သို့မဟုတ် source context ကို ပြင်ဆင်ပါ။",
      "Hook Maker ထဲ ထည့်ပြီး ကိုယ့် content အမျိုးအစားကို ရွေးပါ။",
      "ထွက်လာတဲ့ hook angle ကို ပြန်ရွေးပြီး script workflow ထဲ ဆက်သုံးပါ။",
    ],
    relatedGuideSlugs: ["getting-started", "review-and-publish"],
    icon: "sparkles",
    accent: "ink",
  },
  {
    slug: "thumbnail-generator",
    availability: toolAvailability["thumbnail-generator"],
    name: "Thumbnail",
    label: "Thumbnail Generator",
    description:
      "Video idea ကနေ horizontal သို့မဟုတ် vertical AI thumbnail တစ်ပုံ ဖန်တီးပါ။",
    access: "VIP and VVIP",
    purpose:
      "Short idea, subject, setting, action နဲ့ mood ကို ထည့်ပြီး video thumbnail visual တစ်ပုံ အမြန်ဖန်တီးပေးပါတယ်။",
    audience:
      "Thumbnail ကို အစကနေ design မလုပ်ဘဲ video idea ကနေ visual တစ်ပုံ မြန်မြန်ရချင်တဲ့ creator တွေအတွက်ပါ။",
    sourceGuidance: [
      "စကားလုံး 6 လုံးအထိ headline ထည့်နိုင်ပါတယ်။",
      "Video ရဲ့ subject, setting, action နဲ့ mood ကို ရှင်းရှင်းလင်းလင်းရေးပါ။",
      "Standard video အတွက် horizontal၊ Shorts/mobile content အတွက် vertical format ကို ရွေးပါ။",
      "Guaranteed clicks, views, engagement သို့မဟုတ် viral result ကို အာမခံမပေးပါ။",
    ],
    outputs: [
      "AI-generated thumbnail 1 ပုံ",
      "Horizontal or vertical format",
      "User account ထဲ private storage",
      "1 credit per thumbnail",
    ],
    workflow: [
      "Thumbnail လိုတဲ့ video idea ကို ပြင်ဆင်ပါ။",
      "Headline, subject, setting, action, mood နဲ့ format ကို ရွေးပါ။",
      "Generate လုပ်ပြီး thumbnail ကို review လုပ်ကာ လိုရင် ထပ် generate လုပ်ပါ။",
    ],
    relatedGuideSlugs: ["getting-started", "review-and-publish"],
    icon: "image",
    accent: "sand",
  },
  {
    slug: "video-splitter",
    availability: toolAvailability["video-splitter"],
    name: "Video Splitter",
    label: "Video Splitter",
    description:
      "ပြီးစီးထားတဲ့ video ကို shorter clips တွေအဖြစ် အခမဲ့ ခွဲထုတ်ပါ။",
    access: "Free helper tool",
    purpose:
      "ပြီးစီးထားတဲ့ video ကို original picture, layout, sound နဲ့ subtitles မပြောင်းဘဲ clips တွေအဖြစ် ခွဲပေးပါတယ်။",
    audience:
      "Long video တစ်ခုကို Shorts, social posts သို့မဟုတ် share လုပ်ရလွယ်တဲ့ clips တွေအဖြစ် ခွဲချင်တဲ့ creator တွေအတွက်ပါ။",
    sourceGuidance: [
      "ပြီးစီးထားတဲ့ video file ကို အသုံးပြုပါ။",
      "Preset length 30, 60 သို့မဟုတ် 90 seconds ကို ရွေးနိုင်ပါတယ်။",
      "Custom length ကို 15 seconds ကနေ 10 minutes အထိ သတ်မှတ်နိုင်ပါတယ်။",
      "Split မလုပ်ခင် estimated clip count ကို ပြန်စစ်ပါ။",
    ],
    outputs: [
      "Shorter clips up to 100 clips",
      "Original picture, layout, sound နဲ့ subtitle မပြောင်းပါ",
      "Credit မကုန်တဲ့ free helper output",
      "Clip length က ရွေးထားတဲ့ length ထက် အနည်းငယ်ကွာနိုင်ပါတယ်",
    ],
    workflow: [
      "ပြီးစီးထားတဲ့ video ကို တင်ပါ။",
      "Preset သို့မဟုတ် custom clip length ကို ရွေးပါ။",
      "Estimated clip count ကို စစ်ပြီး split လုပ်ပါ။",
    ],
    relatedGuideSlugs: ["getting-started", "review-and-publish"],
    icon: "scissors",
    accent: "teal",
  },
  {
    slug: "knowledge-video",
    availability: toolAvailability["knowledge-video"],
    name: "Knowledge Video",
    label: "Knowledge Video",
    description: knowledgeVideoNotice,
    access: "VVIP only",
    purpose:
      "Knowledge-sharing video ဖန်တီးဖို့ စီစဉ်ထားတဲ့ VVIP workflow ဖြစ်ပါတယ်။ လက်ရှိ မရရှိသေးပါ။",
    audience:
      "Knowledge-style content ကို VVIP workflow ထဲကနေ ပြင်ဆင်ချင်တဲ့ creator တွေအတွက်ပါ။",
    sourceGuidance: [
      "VVIP only feature ဖြစ်ပါတယ်။",
      "Source rights နဲ့ အသုံးပြုခွင့်ကို ကိုယ်တိုင်စစ်ပါ။",
      "Source facts နဲ့ final output ကို publish မလုပ်ခင် ကိုယ်တိုင် review လုပ်ပါ။",
    ],
    outputs: [
      "Knowledge-style video workflow output",
      "ဖန်တီးပြီးနောက် facts နဲ့ rights ကို ပြန်စစ်ရမယ့် output",
    ],
    workflow: [
      "Content အတွက် source context ကို ပြင်ဆင်ထားပါ။",
      "Workflow ရရှိချိန်မှာ အသုံးပြုနည်းကို ဖော်ပြပေးပါမယ်။",
      "Source facts နဲ့ rights ကို ကိုယ်တိုင်စစ်ရန် လိုအပ်ပါမယ်။",
    ],
    relatedGuideSlugs: ["getting-started", "review-and-publish"],
    icon: "sparkles",
    accent: "ink",
  },
  {
    slug: "voice-library",
    availability: toolAvailability["voice-library"],
    name: "Voice Cloning",
    label: "Voice Cloning",
    description:
      "ကိုယ်ပိုင်အသံတွေ clone ပြီး content တွေမှာ ထည့်သွင်း အသုံးပြုပါ။",
    access: "VVIP only",
    purpose:
      "ကိုယ်ပိုင်အသံကို clone လုပ်ပြီး One Click AI ရဲ့ supported workflows တွေမှာ အသုံးပြုနိုင်အောင် ကူညီပါတယ်။",
    audience:
      "VVIP plan နဲ့ ကိုယ်ပိုင်အသံကို content workflow ထဲမှာ အသုံးပြုချင်တဲ့ creator တွေအတွက်ပါ။",
    sourceGuidance: [
      "VVIP only supporting tool ဖြစ်ပါတယ်။",
      "Cloned voice ကို supported workflows တွေမှာသာ အသုံးပြုပါ။",
      "Voice output ကို publish မလုပ်ခင် နားထောင်စစ်ပါ။",
    ],
    outputs: [
      "Cloned voice management",
      "Supported workflows တွေမှာ အသုံးပြုနိုင်တဲ့ voice assets",
    ],
    workflow: [
      "အသုံးပြုချင်တဲ့ voice asset ကို ပြင်ဆင်ပါ။",
      "Voice Cloning ထဲမှာ cloned voice ကို manage လုပ်ပါ။",
      "Supported workflow ထဲမှာ voice ကို ရွေးပြီး output ကို review လုပ်ပါ။",
    ],
    relatedGuideSlugs: ["getting-started", "review-and-publish"],
    icon: "film",
    accent: "sand",
  },
]

export const plans: PricingPlan[] = [
  {
    name: "VIP",
    price: "35,000 MMK",
    description: "Movie Recap ကို အခုမှ စပြီး ပုံမှန်တင်ချင်တဲ့ creator အတွက်။",
    badge: "အခုမှ စမယ့်သူတွေအတွက်",
    features: [
      `${recapCreditExample.monthlyCredits.VIP} monthly credits`,
      "Normal processing",
      "Voice, video and subtitle timing sync",
      "SRT subtitle download",
      "Hook Maker + Thumbnail Generator",
      "Free Video Splitter",
    ],
  },
  {
    name: "VVIP",
    price: "59,000 MMK",
    description:
      "Movie Recap ကို seriously run မယ်၊ output ပိုများမယ်၊ VVIP-only tools လိုအပ်မယ်ဆိုရင်။",
    badge: "အတန်ဆုံး",
    valueSummary:
      "24,000 MMK ပိုပေးပြီး 2× credits နဲ့ priority processing ကို ရယူပါ။",
    features: [
      `${recapCreditExample.monthlyCredits.VVIP} monthly credits`,
      "VIP မှာပါဝင်တဲ့ features အားလုံး + VVIP-only tools",
      "Priority processing",
      "Styled Myanmar subtitle burn-in",
      "Football + One Click Shorts + Dhamma",
      "Voice Cloning",
      toolAvailability["knowledge-video"] === "coming-soon"
        ? "Knowledge Video — မကြာမီ"
        : "Knowledge Video",
      "New premium features priority access",
    ],
  },
]

const included: PlanComparisonValue = { kind: "included", label: "ပါဝင်ပါတယ်" }
const excluded: PlanComparisonValue = { kind: "excluded", label: "မပါဝင်ပါ" }
const upcoming: PlanComparisonValue = { kind: "upcoming", label: "မကြာမီ" }
const free: PlanComparisonValue = { kind: "included", label: "အခမဲ့" }

export const planComparisonGroups: PlanComparisonGroup[] = [
  {
    rows: [
      {
        feature: "လစဉ်ကြေး",
        vip: { kind: "text", label: "35,000 MMK" },
        vvip: { kind: "text", label: "59,000 MMK" },
      },
      {
        feature: "Monthly credits",
        vip: {
          kind: "text",
          label: String(recapCreditExample.monthlyCredits.VIP),
        },
        vvip: {
          kind: "text",
          label: String(recapCreditExample.monthlyCredits.VVIP),
        },
      },
      {
        feature: "Processing",
        vip: { kind: "text", label: "Normal" },
        vvip: { kind: "text", label: "Priority" },
      },
    ],
  },
  {
    heading: "Features",
    rows: [
      {
        feature: "Voice, video and subtitle timing sync",
        vip: included,
        vvip: included,
      },
      {
        feature: "SRT subtitle download",
        vip: included,
        vvip: included,
      },
      {
        feature: "Styled Myanmar subtitle burn-in",
        vip: excluded,
        vvip: included,
      },
      {
        feature: "Thumbnail Generator",
        vip: included,
        vvip: included,
      },
      {
        feature: "Video Splitter",
        vip: free,
        vvip: free,
      },
      {
        feature: "Source Finder",
        vip: excluded,
        vvip: included,
      },
      {
        feature: "Voice Cloning",
        vip: excluded,
        vvip: included,
      },
      {
        feature: "New premium feature priority access",
        vip: excluded,
        vvip: included,
      },
    ],
  },
  {
    heading: "Extra features",
    rows: [
      {
        feature: "Hook Maker",
        vip: included,
        vvip: included,
      },
      {
        feature: "Football Content Maker",
        vip: excluded,
        vvip: included,
      },
      {
        feature: "One Click Shorts",
        vip: excluded,
        vvip: included,
      },
      {
        feature: "Dhamma Content",
        vip: excluded,
        vvip: included,
      },
      {
        feature: "Knowledge Video",
        vip: excluded,
        vvip:
          toolAvailability["knowledge-video"] === "coming-soon"
            ? upcoming
            : included,
      },
    ],
  },
]

export const faqs: FAQItem[] = [
  {
    question: "VVIP ဝယ်ပြီး ဘယ်လိုစတင်ရမလဲ?",
    answer:
      "app.oneclickai.studio မှာ VVIP Plan ကို ဝယ်ယူပါ။ Payment နဲ့ account activation အတွက် အခက်အခဲရှိရင် Messenger သို့မဟုတ် Telegram support က ကူညီပေးပါမယ်။ Account ရပြီးရင် Movie Recap source တင်ကာ workflow ကို စတင်နိုင်ပါတယ်။",
  },
  {
    question: "One Click AI ဆိုတာဘာလဲ?",
    answer:
      "One Click AI က source content ကနေ တန်းတင်လို့ရတဲ့ output ရအောင် ကူညီပြီး creator workflow ကို မြန်စေတဲ့ AI-assisted Myanmar creator tool suite ဖြစ်ပါတယ်။",
  },
  {
    question: "ဘယ် content အမျိုးအစားတွေ လုပ်လို့ရလဲ?",
    answer: `Movie Recap, Football Content, Dhamma Content, One Click Shorts, Hook Maker, Thumbnail Generator, Voice Cloning နဲ့ Video Splitter တွေကို plan အလိုက် သုံးနိုင်ပါတယ်။ ${knowledgeVideoNotice}`,
  },
  {
    question: "Software install လုပ်ရလား?",
    answer:
      "မလိုပါဘူး။ Web browser ကနေ သုံးနိုင်ပါတယ်။ Upload နဲ့ download အဆင်ပြေစေဖို့ Chrome သို့မဟုတ် Safari ကို အသုံးပြုပါ။",
  },
  {
    question: "Burmese voice နဲ့ subtitle ပါလား?",
    answer:
      "Supported tools တွေမှာ Burmese narration, Burmese subtitle နဲ့ SRT export ပါပါတယ်။ Output ကောင်းမကောင်းက source quality, အသံရှင်းလင်းမှု, source type နဲ့ mode ပေါ်မူတည်ပါတယ်။",
  },
  {
    question: "ATS Standard နဲ့ ATS Pro ဘာကွာလဲ?",
    answer: `Movie Recap ATS Standard က source တစ်မိနစ်လျှင် ခန့်မှန်း ${recapCreditExample.standardPerMinute} credit၊ ATS Pro က ခန့်မှန်း ${recapCreditExample.proPerMinute} credits ဖြစ်ပါတယ်။ Exact credit ကို generate screen ပေါ်က estimate မှာ စစ်ပါ။`,
  },
  {
    question: "Phone နဲ့သုံးလို့ရလား?",
    answer:
      "ရပါတယ်။ Chrome သို့မဟုတ် Safari နဲ့သုံးပါ။ Facebook, Messenger, Telegram အတွင်းက in-app browser တွေက upload, download သို့မဟုတ် login အခက်အခဲ ဖြစ်စေနိုင်ပါတယ်။",
  },
  {
    question: "Copyright နဲ့ monetization ကို အာမခံလား?",
    answer:
      "မအာမခံပါဘူး။ Source rights, content quality, originality, platform rules နဲ့ account performance ပေါ်မူတည်ပါတယ်။ One Click AI က video ထုတ်တဲ့အလုပ်ကို လွယ်ကူအောင်ကူညီပေးတာဖြစ်ပြီး platform approval, views, followers, income သို့မဟုတ် monetization ကို အာမခံမပေးပါ။",
  },
  {
    question: "Generation error ဖြစ်ရင် credit ကုန်မလား?",
    answer:
      "System error အကျုံးဝင်ပြီး project မပြီးသွားတဲ့ case တွေမှာ product policy အတိုင်း credit ပြန်ထည့်ပေးနိုင်ပါတယ်။ User error, မသင့်တော်တဲ့ source သို့မဟုတ် အသုံးပြုပုံမှားတာတွေက အကျုံးမဝင်နိုင်ပါ။ အသေးစိတ်ကို Credit Rules မှာ ကြည့်ပါ။",
  },
  {
    question: "VIP နဲ့ VVIP ဘယ်ဟာရွေးရမလဲ?",
    answer:
      "Movie Recap စလုပ်မယ်၊ normal processing အဆင်ပြေတယ်ဆို VIP က သင့်တော်ပါတယ်။ Priority processing, styled subtitle burn-in, Football, Shorts သို့မဟုတ် Dhamma workflow လိုတာဆို VVIP ကို ရွေးပါ။",
  },
]

export const movieRecapTestimonials: CreatorTestimonial[] = [
  {
    name: "Lwin Moe Wai",
    quote:
      "AI app အများကြီးပြောင်းသုံးပြီး အချိန်ကုန်စရာမလိုတော့ဘူး။ အသံရှင်းတဲ့ source ကို ရွေးပြီးထည့်လိုက်ရင် မိနစ်ပိုင်းအတွင်း Burmese recap video ရတယ်။",
  },
  {
    name: "Min Min",
    quote: "အဆင်ပြေတယ် သုံးရတာ။",
  },
  {
    name: "Ko Kyaw",
    quote: "Page လဲ cm အောင်ပီ။ Tt လဲအောင်ပီ အကို။",
  },
]

export const customerChannels: CreatorChannel[] = [
  {
    label: "Lwin Moe Wai · Facebook",
    href: "https://www.facebook.com/lwinmoe.wai.96",
  },
  {
    label: "behindyoureyes.mm · TikTok",
    href: "https://www.tiktok.com/@behindyoureyes.mm",
  },
  {
    label: "historypagesmm · TikTok",
    href: "https://www.tiktok.com/@historypagesmm?is_from_webapp=1&sender_device=pc",
  },
  {
    label: "coffee.mix435 · TikTok",
    href: "https://www.tiktok.com/@coffee.mix435?is_from_webapp=1&sender_device=pc",
  },
]

export const videoResources: VideoResource[] = [
  {
    slug: "football-walkthrough",
    toolSlug: "football",
    title: "ဘောလုံး content Tool အသုံးပြုနည်း",
    description:
      "Football Content Maker ကို စတင်အသုံးပြုဖို့ walkthrough video ကို ကြည့်ပါ။",
    type: "walkthrough",
    href: "https://www.facebook.com/reel/1039389995329615/",
    status: "available",
  },
  {
    slug: "shorts-walkthrough",
    toolSlug: "shorts",
    title: "One Click Shorts Tool အသုံးပြုနည်း",
    description:
      "Long video သို့မဟုတ် stream ကနေ short-form clip ထုတ်တဲ့ flow ကို ကြည့်ပါ။",
    type: "walkthrough",
    href: "https://www.facebook.com/reel/997618983137266/",
    status: "available",
  },
  {
    slug: "movie-recap-walkthrough",
    toolSlug: "movie-recap",
    title: "Movie Recap Tool အသုံးပြုနည်း",
    description:
      "Movie Recap workflow နဲ့ source တင်ပြီး output ထုတ်ပုံကို ကြည့်ပါ။",
    type: "walkthrough",
    href: "https://www.youtube.com/watch?v=8afdKldjsPI&t=30s",
    linkLabel: "YouTube မှာကြည့်ရန်",
    status: "available",
  },
  {
    slug: "movie-recap-source-guide",
    toolSlug: "movie-recap",
    title: "Movie Recap result ကောင်းအောင် source ရွေးနည်း",
    description:
      "Source video quality က recap output ပေါ် ဘယ်လိုသက်ရောက်လဲဆိုတာ ဖတ်ကြည့်ပါ။",
    type: "quality-guide",
    href: "https://www.facebook.com/AICodeLab/posts/pfbid0jFpgqTxSgz3UGc5JLwhxSkgifkaAqGoerq1CFK8EFaaHTVsrep5pRDp6J4M5vgLfl",
    status: "available",
  },
  {
    slug: "dhamma-walkthrough",
    toolSlug: "dhamma",
    title: "တရားတော် video Tool အသုံးပြုနည်း",
    description:
      "Dhamma Content Maker walkthrough video ကို မကြာမီ ထည့်ပေးပါမယ်။",
    type: "walkthrough",
    status: "coming-soon",
  },
]

export const guides: GuideArticle[] = [
  {
    slug: "getting-started",
    eyebrow: "Start here",
    title: "One Click AI ကို စတင်သုံးမယ်ဆိုရင်",
    description:
      "Tool ရွေးတာကနေ output download လုပ်တဲ့အထိ အခြေခံ workflow ကို တစ်ဆင့်ချင်း လိုက်လုပ်ပါ။",
    intro:
      "Beginner ဖြစ်ဖြစ် content ကို ပုံမှန် run နေသူဖြစ်ဖြစ် source တင်၊ setting ရွေး၊ generate လုပ်ပြီး output ကို review လုပ်နိုင်အောင် ဒီ guide ကို စီထားပါတယ်။",
    sections: [
      {
        title: "၁။ ကိုယ်လုပ်မယ့် content type ကို ရွေးပါ",
        paragraphs: [
          `Movie Recap, Football, Dhamma, Shorts, Hook Maker, Thumbnail Generator, Voice Cloning နဲ့ Video Splitter ထဲက ကိုယ့် content နဲ့ကိုက်တဲ့ tool ကို ရွေးပါ။ ${knowledgeVideoNotice}`,
        ],
        bullets: [
          "Movie recap-style source အတွက် Movie Recap",
          "Match clip သို့မဟုတ် highlight အတွက် Football",
          "Sermon audio အတွက် Dhamma",
          "Long video သို့မဟုတ် stream အတွက် Shorts",
          knowledgeVideoNotice,
          "Opening angle လိုရင် Hook Maker",
          "Video idea ကနေ thumbnail လိုရင် Thumbnail Generator",
          "ကိုယ်ပိုင်အသံကို content မှာသုံးချင်ရင် Voice Cloning",
          "ပြီးစီးထားတဲ့ video ကို clips ခွဲချင်ရင် Video Splitter",
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
    relatedToolSlugs: [
      "movie-recap",
      "football",
      "dhamma",
      "shorts",
      "hook-maker",
      "thumbnail-generator",
      "video-splitter",
      "knowledge-video",
      "voice-library",
    ],
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
    description:
      "အထူးသဖြင့် Movie Recap အတွက် source quality က output အပေါ် ဘယ်လိုသက်ရောက်လဲ သိထားပါ။",
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
    description:
      "Movie Recap အတွက် ATS Standard နဲ့ ATS Pro credit rate ကိုကြည့်ပြီး mode ရွေးပါ။",
    intro:
      "Movie Recap မှာ ATS Standard နဲ့ ATS Pro နှစ်မျိုးရှိပါတယ်။ Credit ကို source footage duration ပေါ်မူတည်ပြီးတွက်လို့ generate မလုပ်ခင် screen ပေါ်က estimate ကို စစ်ပြီးမှ စတင်ပါ။",
    sections: [
      {
        title: "ATS Standard",
        paragraphs: [
          `ATS Standard က source footage duration အလိုက် approximately ${recapCreditExample.standardPerMinute} credit per source minute ဖြစ်ပါတယ်။ Credit usage ကို ထိန်းပြီး Movie Recap content ကို မှန်မှန်ထုတ်ချင်တဲ့ workflow အတွက် သင့်တော်ပါတယ်။`,
        ],
      },
      {
        title: "ATS Pro",
        paragraphs: [
          `ATS Pro က source footage duration အလိုက် approximately ${recapCreditExample.proPerMinute} credits per source minute ဖြစ်ပါတယ်။ Quality priority ကို ပိုဂရုစိုက်ချင်တဲ့ Movie Recap content အတွက် သုံးနိုင်ပါတယ်။`,
        ],
      },
      {
        title: "Generate မလုပ်ခင် စစ်ရမယ့်အချက်",
        paragraphs: [
          "Exact credit amount က video length, selected feature နဲ့ quality setting ပေါ်မူတည်ပြီး အနည်းငယ်ကွာနိုင်ပါတယ်။ Generate မလုပ်ခင် estimated credit ကို ကြည့်ပြီး ကိုယ့် plan နဲ့ကိုက်မကိုက် စစ်ပါ။ အသေးစိတ်ကို Credit Rules မှာ ဖတ်ပါ။",
        ],
      },
    ],
    relatedToolSlugs: ["movie-recap", "football", "dhamma", "shorts"],
  },
  {
    slug: "review-and-publish",
    eyebrow: "Before you publish",
    title: "Output ကို review လုပ်ပြီးမှ publish လုပ်ပါ",
    description:
      "Voice, subtitle, timing, source rights နဲ့ platform rules ကို နောက်ဆုံးတစ်ကြိမ် စစ်ဆေးပါ။",
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
        title: "SRT နဲ့ review-ready output ကို သုံးပါ",
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
    relatedToolSlugs: [
      "movie-recap",
      "football",
      "dhamma",
      "shorts",
      "hook-maker",
      "thumbnail-generator",
      "video-splitter",
      "knowledge-video",
      "voice-library",
    ],
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
  {
    slug: "thumbnail-generator-output",
    toolSlug: "thumbnail-generator",
    title: "Thumbnail Generator example",
    sourceLabel: "Video idea and thumbnail brief",
    outputLabel: "Horizontal or vertical AI thumbnail",
    caption: "Approved Thumbnail Generator example ထည့်ရန်နေရာ။",
    alt: "One Click AI Thumbnail Generator example",
    imageSrc: null,
  },
  {
    slug: "video-splitter-output",
    toolSlug: "video-splitter",
    title: "Video Splitter example",
    sourceLabel: "Completed video file",
    outputLabel: "Shorter clips",
    caption: "Approved Video Splitter output sample ထည့်ရန်နေရာ။",
    alt: "One Click AI Video Splitter example",
    imageSrc: null,
  },
  {
    slug: "knowledge-video-output",
    toolSlug: "knowledge-video",
    title: knowledgeVideoNotice,
    sourceLabel: "Knowledge-style source context",
    outputLabel: "Review-ready knowledge video workflow",
    caption: "Approved Knowledge Video output sample ထည့်ရန်နေရာ။",
    alt: "One Click AI Knowledge Video example",
    imageSrc: null,
  },
  {
    slug: "voice-library-output",
    toolSlug: "voice-library",
    title: "Voice Cloning example",
    sourceLabel: "Saved or cloned voice asset",
    outputLabel: "Voice asset used in supported workflow",
    caption: "Approved Voice Cloning example ထည့်ရန်နေရာ။",
    alt: "One Click AI Voice Cloning example",
    imageSrc: null,
  },
]

export const hasApprovedExampleAssets = exampleItems.some((item) =>
  Boolean(item.imageSrc)
)

export const creditRules = [
  "Credit ဆိုတာ One Click AI ထဲမှာ content generate လုပ်တဲ့အခါ သုံးရတဲ့ billing unit ဖြစ်ပါတယ်။",
  "Source သို့မဟုတ် output ပိုရှည်ရင် credit ပိုကုန်နိုင်ပြီး quality mode နဲ့ generation settings ပေါ်မူတည်ပြီးလည်း ကွာနိုင်ပါတယ်။",
  "Exact credit amount ကို generation screen ပေါ်က estimate မှာ စစ်ပြီးမှ စတင်ပါ။",
]

export const creditVideoRates = [
  `Movie Recap ATS Standard: source footage duration အလိုက် approximately ${recapCreditExample.standardPerMinute} credit per source minute`,
  `Movie Recap ATS Pro: source footage duration အလိုက် approximately ${recapCreditExample.proPerMinute} credits per source minute`,
  "Football Content Maker: source footage duration အလိုက် approximately 2 credits per source minute",
  "One Click Shorts: source footage duration အလိုက် approximately 1 credit per source minute",
]

export const creditSupportingToolRules = [
  "Thumbnail Generator: thumbnail တစ်ပုံလျှင် 1 credit",
  "Thumbnail Generator ကို regenerate လုပ်တိုင်း request အသစ်ဖြစ်ပြီး 1 credit ထပ်ကုန်ပါတယ်။",
  "Video Splitter: အခမဲ့၊ credit မကုန်ပါ။",
]

export const hookMakerCreditRules = [
  "Default output types လေးမျိုးက Title, Description, Hashtags နဲ့ Pinned comment ဖြစ်ပါတယ်။",
  "3 variations: default 4 output types ဆို 1 credit၊ more than 4 output types ဆို 2 credits",
  "5 variations: default 4 output types ဖြစ်ဖြစ် more than 4 output types ဖြစ်ဖြစ် 2 credits",
  "10 variations: default 4 output types ဖြစ်ဖြစ် more than 4 output types ဖြစ်ဖြစ် 3 credits",
]

export const dhammaCreditRules = [
  "Up to 1 hour: Standard 25 credits, Pro 35 credits",
  "Over 1 hour to 1.5 hours: Standard 30 credits, Pro 40 credits",
  "Over 1.5 hours to 2 hours: Standard 35 credits, Pro 45 credits",
  "Over 2 hours to 2.5 hours: Standard 40 credits, Pro 50 credits",
  "Over 2.5 hours to 3 hours: Standard 45 credits, Pro 55 credits",
]

export function getSupportUrl(channel: SupportChannel) {
  return siteConfig.support[channel]
}

export function getToolBySlug(value: string) {
  const result = toolSlugSchema.safeParse(value)
  return result.success
    ? tools.find((tool) => tool.slug === result.data)
    : undefined
}

export function getGuideBySlug(value: string) {
  const result = guideSlugSchema.safeParse(value)
  return result.success
    ? guides.find((guide) => guide.slug === result.data)
    : undefined
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
  return siteConfig.appUrl
}

export const planCtaLabels = {
  vip: "VIP ကို App မှာ ဝယ်ရန်",
  vvip: "VVIP ကို App မှာ ဝယ်ရန်",
} as const

export const howToBuySteps = [
  {
    number: "01",
    title: "Link ကို Chrome သို့မဟုတ် Safari မှာ ဖွင့်ပါ",
    description:
      "Link ကို copy ယူပြီး Chrome သို့မဟုတ် Safari မှာ ဖွင့်ပါ။ Messenger, Facebook, Telegram ထဲက browser မသုံးပါနဲ့။",
  },
  {
    number: "02",
    title: "Gmail နဲ့ account ဖွင့်ပါ",
    description: "app.oneclickai.studio မှာ Gmail သုံးပြီး account ဖွင့်ပါ။",
  },
  {
    number: "03",
    title: "Plan ရွေးပြီး KBZPay နဲ့ ငွေလွှဲပါ",
    description:
      "App ထဲက Plan ဝယ်မယ် ကိုနှိပ်ပြီး VIP သို့မဟုတ် VVIP ရွေးကာ KBZPay နဲ့ ငွေလွှဲပါ။",
  },
  {
    number: "04",
    title: "Payment screenshot တင်ပါ",
    description:
      "Payment screenshot ကို app ထဲမှာ တင်ပါ။ Support က approve လုပ်ပေးပါမယ်။",
  },
] as const
