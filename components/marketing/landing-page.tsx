import {
  ArrowRight,
  BadgeCheck,
  Captions,
  Check,
  CheckCircle2,
  Clock3,
  Download,
  Gauge,
  MonitorSmartphone,
  ShieldCheck,
  Upload,
  WandSparkles,
} from "lucide-react"
import Image from "next/image"

import { SiteFooter } from "@/components/marketing/site-footer"
import { HeroShowcase } from "@/components/marketing/hero-showcase"
import { SiteHeader } from "@/components/marketing/site-header"
import {
  ActionLink,
  FAQList,
  PricingCard,
  SectionHeading,
  ToolCard,
} from "@/components/marketing/marketing-ui"
import {
  faqs,
  getPlanCtaHref,
  plans,
  siteConfig,
  tools,
} from "@/lib/site-content"

const proofItems = [
  {
    label: "၅ ရက်အတွင်း",
    detail:
      "Page ဖွင့်ပြီး Movie Recap content စတင်တင်ကာ monetization ရခဲ့တယ်လို့ Aung Khant Kyaw က မျှဝေထားပါတယ်။",
  },
  {
    label: "16 posts",
    detail: "ဒီအကို လာပြောတဲ့အချိန်မှာ Page မှာ 16 posts တင်ထားပြီးဖြစ်ပါတယ်။",
  },
  {
    label: "1.2M views",
    detail: "7-day dashboard မှာ 1.2M views ကို မြင်ရပါတယ်။",
  },
  {
    label: "4,759 followers",
    detail: "7-day dashboard မှာ net followers 4,759 ရှိထားတာကို မြင်ရပါတယ်။",
  },
]

const workflowSteps = [
  {
    number: "01",
    title: "Source ကို ရွေးပါ",
    description:
      "ဇာတ်လမ်း flow ရှင်းပြီး narration ပါတဲ့ Movie Recap-style source ကို ရွေးပါ။",
  },
  {
    number: "02",
    title: "Video တင်ပြီး setting ရွေးပါ",
    description:
      "Movie Recap tool ထဲမှာ source တင်ပြီး voice, subtitle နဲ့ ATS mode ကို ရွေးပါ။",
  },
  {
    number: "03",
    title: "Output ကို review လုပ်ပြီး တင်ပါ",
    description:
      "Voice, subtitle နဲ့ timing ကို ပြန်စစ်ပြီး အဆင်ပြေရင် download လုပ်ကာ platform ပေါ်တင်ပါ။",
  },
]

const benefitItems = [
  "Voice, subtitle နဲ့ timing ကို workflow တစ်ခုတည်းမှာ ပြင်ဆင်နိုင်မယ်",
  "File ဟိုပို့ဒီပို့လုပ်ရတဲ့အလုပ် လျော့မယ်",
  "Output ကို review လုပ်ပြီး TikTok, Reels နဲ့ Shorts မှာ ဆက်တင်နိုင်မယ်",
  "VVIP နဲ့ Football, Shorts, Dhamma နဲ့ Original Content workflows ကိုပါ သုံးနိုင်မယ်",
]

const audienceItems = [
  "Movie Recap ကို စနစ်တကျ စလုပ်ချင်သူ",
  "Movie Recap content ကို ပုံမှန်တင်ချင်သူ",
  "Editing အချိန်အများကြီးမပေးနိုင်တဲ့ creator",
  "TikTok, Reels, Shorts အတွက် content မှန်မှန်တင်ချင်သူ",
  "Football content ကို vertical format နဲ့ ထုတ်ချင်သူ",
  "Dhamma audio ကို video content အဖြစ် ပြောင်းချင်သူ",
  "Stream နဲ့ long video ကို short clips ပြန်လုပ်ချင်သူ",
  "Video idea ကနေ thumbnail အမြန်ဖန်တီးချင်သူ",
  "ပြီးစီးထားတဲ့ video ကို shorter clips အဖြစ် ခွဲချင်သူ",
  "Original content တွေ ထုတ်ချင်သူ",
  "Voice Cloning နဲ့ ကိုယ်ပိုင်အသံကို အသုံးပြုချင်သူ",
  "Page အများကြီး run နေပြီး output speed မြှင့်ချင်တဲ့သူ",
]

function IconTile({ children }: { children: React.ReactNode }) {
  return <span className="icon-tile">{children}</span>
}

function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.company,
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}/logo.svg`,
      },
      {
        "@type": "SoftwareApplication",
        name: siteConfig.name,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        description: siteConfig.description,
        offers: plans.map((plan) => ({
          "@type": "Offer",
          name: `${plan.name} plan`,
          price: plan.name === "VIP" ? "35000" : "59000",
          priceCurrency: "MMK",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      type="application/ld+json"
    />
  )
}

export function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div className="hero-section__stage">
            {/*<div className="hero-section__backdrop" aria-hidden="true">*/}
            {/*  <video*/}
            {/*    autoPlay*/}
            {/*    className="hero-section__video"*/}
            {/*    loop*/}
            {/*    muted*/}
            {/*    playsInline*/}
            {/*    preload="auto"*/}
            {/*  >*/}
            {/*    <source src="/abstract-forest.mp4" type="video/mp4" />*/}
            {/*  </video>*/}
            {/*  <div className="hero-section__scrim" />*/}
            {/*</div>*/}

            <div className="site-shell hero-section__inner">
              <div className="hero-copy">
                <p className="eyebrow eyebrow--light">
                  One Click AI by AI Code Lab
                </p>
                <h1>
                  One Click AI
                  <span>
                    Movie Recap video ကို မြန်မာ အသံ, subtitle နဲ့
                    အချိန်တိုအတွင်း ဖန်တီးပါ။
                  </span>
                </h1>
                <p className="hero-copy__description">
                  Movie Recap video တစ်ပုဒ်ထုတ်ဖို့ AI tool
                  အများကြီးပြောင်းသုံးပြီး voice, subtitle နဲ့ timing ကို manual
                  ပြင်နေစရာမလိုတော့ပါဘူး။ One Click AI နဲ့ source video တင်၊
                  setting ရွေးပြီး TikTok, Facebook Reels နဲ့ YouTube Shorts
                  အတွက် content output ကို workflow တစ်နေရာတည်းမှာ ပြင်ဆင်ပါ။
                </p>
                <div className="hero-actions">
                  <ActionLink
                    external={getPlanCtaHref().startsWith("http")}
                    href={getPlanCtaHref()}
                  >
                    VVIP Plan ကို စတင်ဝယ်ရန်
                    <ArrowRight aria-hidden="true" />
                  </ActionLink>
                  <ActionLink href={siteConfig.appUrl} variant="light">
                    App ဝင်ရန်
                  </ActionLink>
                </div>
                <div className="hero-note">
                  <BadgeCheck aria-hidden="true" />
                  <span>
                    VVIP 59,000 MMK / month · Messenger/Telegram ကနေ
                    ဝယ်ယူလို့ရပါပြီ။
                  </span>
                </div>
                <p className="hero-app-note">
                  အကောင့်ရှိပြီးသားဆို app.oneclickai.studio မှာ ဝင်ပါ။
                </p>
              </div>
              <HeroShowcase />
            </div>
          </div>

          <div
            className="site-shell trust-strip"
            aria-label="Real creator result"
          >
            <div className="trust-strip__intro">
              <p className="eyebrow">Real creator result</p>
              <strong>
                Movie Recap content တင်ပြီး ၅ ရက်အတွင်း monetization ရခဲ့တဲ့
                VVIP creator
              </strong>
            </div>
            <div
              className="trust-strip__evidence"
              aria-label="Customer result screenshots"
            >
              <Image
                alt="Aung Khant Kyaw's Facebook page with 5.6K followers and 16 posts"
                height={600}
                src="/images/customer-results/aung-khant-kyaw-page.webp"
                width={360}
              />
              <Image
                alt="Aung Khant Kyaw's Facebook analytics dashboard showing 1.2M views and 4,759 net followers"
                height={600}
                src="/images/customer-results/aung-khant-kyaw-analytics.webp"
                width={360}
              />
            </div>
            <div className="trust-strip__items">
              {proofItems.map((item, index) => (
                <div className="trust-strip__item" key={item.label}>
                  <span className="trust-strip__index">0{index + 1}</span>
                  <strong>{item.label}</strong>
                  <small>{item.detail}</small>
                </div>
              ))}
            </div>
            <p className="trust-strip__disclaimer">
              Aung Khant Kyaw ရဲ့ individual result ပါ။ Result က source, content
              quality, audience နဲ့ platform rules ပေါ်မူတည်နိုင်ပါတယ်။
            </p>
          </div>
        </section>

        <section className="section" id="product">
          <div className="site-shell">
            <SectionHeading
              eyebrow="The friction"
              title="ဇာတ်ကား recap idea ရှိတယ်။ Video တစ်ပုဒ်ပြီးဖို့ အချိန်ပဲ မရှိတာ။"
              description="Source ရှာ၊ voice ထုတ်၊ editor ထဲထည့်၊ subtitle ထိုးပြီး timing ပြန်ညှိနေရင် video တစ်ပုဒ်ပြီးဖို့ အချိန်အများကြီးကုန်ပါတယ်။ အဲ့လိုနဲ့ တစ်ပုဒ်ပြီးရင် နောက်တစ်ပုဒ် မစနိုင်တော့ပါဘူး။"
            />
            <div className="problem-grid">
              <article className="problem-card problem-card--lead">
                <span className="problem-card__index">01</span>
                <IconTile>
                  <WandSparkles aria-hidden="true" />
                </IconTile>
                <h3>Tool တွေအများကြီးပြောင်းသုံးနေရတယ်</h3>
                <p>
                  Voice tool, video editor နဲ့ subtitle tool ကို တစ်ခုချင်းစီ
                  ပြောင်းသုံးနေရတာက content ထုတ်တဲ့အရှိန်ကို နှေးစေပါတယ်။
                </p>
              </article>
              <article className="problem-card">
                <span className="problem-card__index">02</span>
                <IconTile>
                  <Captions aria-hidden="true" />
                </IconTile>
                <h3>Subtitle timing ကို ပြန်လိုက်ညှိနေရတယ်</h3>
                <p>
                  Burmese line တွေ ရှည်သွားတာ၊ voice နဲ့ visual မတည့်တာတွေကို
                  မတင်ခင် ထပ်ပြီးပြင်နေရပါတယ်။
                </p>
              </article>
              <article className="problem-card">
                <span className="problem-card__index">03</span>
                <IconTile>
                  <Clock3 aria-hidden="true" />
                </IconTile>
                <h3>Content ကို မှန်မှန်မတင်နိုင်တော့ဘူး</h3>
                <p>
                  Manual editing အချိန်များလာတာနဲ့ page အတွက် content calendar က
                  ဆက်မသွားတော့ပါဘူး။
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="section section--teal"
          aria-labelledby="solution-title"
        >
          <div className="site-shell solution-section">
            <div className="solution-section__copy">
              <p className="eyebrow eyebrow--light">
                Movie Recap workflow တစ်နေရာတည်းမှာ
              </p>
              <h2 id="solution-title">
                Source တင်၊ setting ရွေး၊ Burmese recap output ကို ပြန်စစ်ပြီး
                တင်ပါ။
              </h2>
              <p>
                One Click AI က Movie Recap workflow အတွက် source video, Burmese
                voice, subtitle နဲ့ timing ကို တစ်နေရာတည်းမှာ စီမံနိုင်အောင်
                ပြုလုပ်ထားပါတယ်။ Tool တစ်ခုချင်းစီကို
                လိုက်ပြောင်းသုံးရတဲ့အလုပ်ကို လျှော့ပြီး content ထုတ်တဲ့ flow ကို
                ပိုရှင်းစေပါတယ်။
              </p>
              <ActionLink href="/tools/movie-recap" variant="light">
                Movie Recap Tool ကို ကြည့်ရန်
                <ArrowRight aria-hidden="true" />
              </ActionLink>
            </div>
            <ul className="outcome-list">
              {benefitItems.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="tools">
          <div className="site-shell">
            <SectionHeading
              eyebrow="Creator tools"
              title="Movie Recap ကနေစပြီး၊ နောက်ထပ် content အမျိုးအစားတွေကို VVIP tools တွေနဲ့ ဆက်လုပ်ပါ။"
              description="Movie Recap အပြင် Football Content, One Click Shorts, Dhamma Content, Knowledge Video နဲ့ Voice Cloning ကို VVIP plan မှာ အသုံးပြုနိုင်ပါတယ်။ ကိုယ့် page နဲ့ niche ပိုများလာတဲ့အခါ workflow အသစ်တွေကို တစ်နေရာတည်းကနေ ဆက်သုံးပါ။"
            />
            <div className="tool-grid">
              {tools.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--wash" id="how-it-works">
          <div className="site-shell">
            <SectionHeading
              eyebrow="Simple by design"
              title="Movie Recap ကို အဆင့် ၃ ဆင့်တည်းနဲ့ ထုတ်ပါ"
              description="Editing ကို ကျွမ်းကျင်ဖို့မလိုပါဘူး။ Tool နဲ့ကိုက်တဲ့ source ကို ရွေး၊ setting သတ်မှတ်ပြီး output ကို review လုပ်ပါ။"
              align="center"
            />
            <ol className="steps-grid">
              {workflowSteps.map((step) => (
                <li className="step-card" key={step.number}>
                  <span className="step-card__number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section--ink" id="ats">
          <div className="site-shell">
            <SectionHeading
              eyebrow="Quality modes"
              title="Credit ကိုချွေတာမလား၊ quality ကိုပိုဦးစားပေးမလား ကိုယ့် content ပုံစံအလိုက် ရွေးပါ"
              description="ATS Standard က content ကို ပုံမှန်ထုတ်ဖို့။ ATS Pro က quality နဲ့ timing ကို ပိုဂရုစိုက်ချင်တဲ့ Movie Recap တွေအတွက်ပါ။"
              align="center"
            />
            <div className="mode-grid">
              <article className="mode-card">
                <div className="mode-card__icon">
                  <Gauge aria-hidden="true" />
                </div>
                <p className="mode-card__label">ATS Standard</p>
                <h3>နေ့တိုင်း content ထုတ်ချင်တဲ့ creator အတွက်</h3>
                <p>
                  Credit usage နဲ့ output quality ကို balance လုပ်ထားတဲ့ mode
                  ပါ။
                </p>
                <span className="mode-card__note">Volume-first mode</span>
              </article>
              <article className="mode-card mode-card--accent">
                <div className="mode-card__icon">
                  <ShieldCheck aria-hidden="true" />
                </div>
                <p className="mode-card__label">ATS Pro</p>
                <h3>Quality အမြင့်ဆုံး Movie Recap content အတွက်</h3>
                <p>
                  Voice, visual နဲ့ subtitle timing ကို ပိုဂရုစိုက်ချင်တဲ့အခါ
                  ရွေးပါ။
                </p>
                <span className="mode-card__note">Quality-first mode</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="output">
          <div className="site-shell output-section">
            <div className="output-section__copy">
              <SectionHeading
                eyebrow="Output ရပြီးနောက် လုပ်စရာတွေ"
                title="Video တစ်ပုဒ်တည်းမဟုတ်ဘဲ၊ publish မလုပ်ခင် လိုအပ်တာတွေကို ပြန်စစ်နိုင်အောင်။"
                description="Output ရလာတဲ့အခါ voice, subtitle နဲ့ timing ကို review လုပ်ပါ။ လိုအပ်ရင် SRT file ကို သီးခြားယူပြီး ကိုယ့် editing workflow ထဲမှာ ဆက်သုံးနိုင်ပါတယ်။"
              />
            </div>
            <div className="output-section__proof">
              <div className="output-feature-grid">
                <article className="output-feature">
                  <IconTile>
                    <Captions aria-hidden="true" />
                  </IconTile>
                  <h3>Voice နဲ့ subtitle ကို တိုက်စစ်ပါ</h3>
                  <p>မတင်ခင် အသံ၊ စာသားနဲ့ visual ကိုက်ညီမှုကို ပြန်ကြည့်ပါ။</p>
                </article>
                <article className="output-feature">
                  <IconTile>
                    <Download aria-hidden="true" />
                  </IconTile>
                  <h3>SRT export</h3>
                  <p>
                    Video ထဲ subtitle တန်းမထည့်ချင်သေးရင် SRT file ကို
                    သီးခြားရယူနိုင်ပါတယ်။
                  </p>
                </article>
                <article className="output-feature">
                  <IconTile>
                    <MonitorSmartphone aria-hidden="true" />
                  </IconTile>
                  <h3>Short-form platform အတွက် output</h3>
                  <p>
                    TikTok, Facebook Reels နဲ့ YouTube Shorts မှာ ဆက်တင်ဖို့
                    output ကို ပြင်ဆင်နိုင်ပါတယ်။
                  </p>
                </article>
                <article className="output-feature">
                  <IconTile>
                    <Upload aria-hidden="true" />
                  </IconTile>
                  <h3>Source guidance ပါတယ်</h3>
                  <p>
                    Tool နဲ့ကိုက်တဲ့ source ကို ရွေးနိုင်အောင်
                    အခြေခံလမ်းညွှန်ချက်တွေကို ကြည့်နိုင်ပါတယ်။
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--sand" id="reliability">
          <div className="site-shell reliability-section">
            <div className="reliability-section__icon">
              <ShieldCheck aria-hidden="true" />
            </div>
            <div>
              <p className="eyebrow">Built for fewer surprises</p>
              <h2>
                Credit ဘယ်လိုကုန်မလဲ မရှုပ်စေဖို့ rules တွေကို ရှင်းထားပါတယ်။
              </h2>
              <p>
                Generate မလုပ်ခင် source guidance နဲ့ credit estimate ကို
                ကြည့်နိုင်ပါတယ်။ Daily limit က main features လေးခုအတွက်ပဲ
                သက်ရောက်ပြီး supporting tools တွေက daily limit ထဲ မပါဝင်ပါ။
              </p>
              <div className="reliability-points">
                <span>
                  <Check aria-hidden="true" /> Credit estimate before generation
                </span>
                <span>
                  <Check aria-hidden="true" /> Source guidance
                </span>
                <span>
                  <Check aria-hidden="true" /> Clear error messages
                </span>
                <span>
                  <Check aria-hidden="true" /> Daily limit scope is clear
                </span>
              </div>
              <ActionLink href="/credit" variant="secondary">
                Credit Rules ဖတ်ရန်
                <ArrowRight aria-hidden="true" />
              </ActionLink>
            </div>
          </div>
        </section>

        <section className="section section--wash" id="pricing">
          <div className="site-shell">
            <SectionHeading
              eyebrow="Choose your pace"
              title="Movie Recap နဲ့ အခုပဲငွေရှာလိုက်ပါ"
              description="Movie Recap ကို စမ်းသုံးပြီး စတင်ချင်ရင် VIP။ Source video ပိုရှည်တင်မယ်၊ priority processing လိုမယ်၊ Football, Shorts, Dhamma နဲ့ Original Content workflows ကိုပါ သုံးမယ်ဆို VVIP က ပိုကိုက်ပါတယ်။"
              align="center"
            />
            <div className="pricing-grid">
              {plans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
            <p className="pricing-note">
              Messenger/Telegram ကနေ ဝယ်ယူလို့ရပါပြီ။ ဝယ်ယူလိုတဲ့ plan နဲ့
              ကိုယ်သုံးမယ့် workflow ကို ပြောပေးပါ။ Credit သုံးစွဲမှုက source
              duration နဲ့ ATS mode ပေါ်မူတည်ပြီး generate မလုပ်ခင် exact credit
              estimate ကို app မှာ စစ်နိုင်ပါတယ်။
            </p>
          </div>
        </section>

        <section className="section" id="audience">
          <div className="site-shell audience-section">
            <SectionHeading
              eyebrow="Made for Myanmar creators"
              title="Movie Recap ကို ပုံမှန်တင်ပြီး page ကိုတကယ် grow ချင်တဲ့ creator တွေအတွက်။"
              description="Editing skill အများကြီးမလိုဘဲ content ကို ပိုလွယ်ကူအောင်၊ ပိုမှန်မှန်ထုတ်ချင်တဲ့ Myanmar creator တွေအတွက်ပါ။"
            />
            <ul className="audience-list">
              {audienceItems.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--wash" id="faq">
          <div className="site-shell faq-section">
            <SectionHeading
              eyebrow="Before you start"
              title="VVIP မဝယ်ခင် သိထားသင့်တာတွေ"
              description="Plan, source နဲ့ output အကြောင်းကို မဝယ်ခင် ရှင်းအောင် ဖတ်ပါ။"
            />
            <FAQList items={faqs} />
          </div>
        </section>

        <section className="section policy-strip">
          <div className="site-shell policy-strip__inner">
            <div>
              <p className="eyebrow">Use it with confidence</p>
              <h2>
                မတင်ခင် source rights နဲ့ platform rules ကို ကိုယ်တိုင်စစ်ပါ။
              </h2>
            </div>
            <div className="policy-grid">
              <div>
                <ShieldCheck aria-hidden="true" />
                <strong>Copyright</strong>
                <p>
                  Source rights မရှိဘဲ အသုံးပြုတာနဲ့ platform enforcement အတွက်
                  One Click AI က အာမခံမပေးပါ။
                </p>
              </div>
              <div>
                <BadgeCheck aria-hidden="true" />
                <strong>Monetization</strong>
                <p>
                  Views, followers, income နဲ့ monetization approval ကို
                  အာမခံမပေးပါ။
                </p>
              </div>
              <div>
                <WandSparkles aria-hidden="true" />
                <strong>AI output</strong>
                <p>
                  Source quality နဲ့ mode ပေါ်မူတည်ပြီး output ကွာနိုင်လို့
                  မတင်ခင် ပြန်စစ်ပါ။
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <StructuredData />
      <SiteFooter />
    </>
  )
}
