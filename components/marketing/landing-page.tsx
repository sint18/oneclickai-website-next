import {
  ArrowRight,
  BadgeCheck,
  Captions,
  Check,
  CheckCircle2,
  Clapperboard,
  Clock3,
  Download,
  Gauge,
  MessageCircleMore,
  MonitorSmartphone,
  ShieldCheck,
  Trophy,
  Upload,
  WandSparkles,
} from "lucide-react"
import Image from "next/image"

import { SiteFooter } from "@/components/marketing/site-footer"
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

const capabilityItems = [
  {
    label: "မြန်မာလို workflow",
    detail: "Voice + subtitle timing",
  },
  {
    label: "တစ်နေရာတည်း",
    detail: "Source တင်တာကနေ output ရတဲ့အထိ",
  },
  {
    label: "Review-ready",
    detail: "SRT + publish-ready နီးစပ်တဲ့ output",
  },
  {
    label: "Creator modes",
    detail: "Recap · Shorts · Thumbnail",
  },
]

const heroCards = [
  {
    name: "Movie Recap",
    duration: "1:45",
    image: "/images/hero-cards/movie-recap.png",
    icon: Clapperboard,
    className: "hero-card--movie",
  },
  {
    name: "Football Highlight",
    duration: "0:58",
    image: "/images/hero-cards/football-highlight.png",
    icon: Trophy,
    className: "hero-card--football",
  },
  {
    name: "Dhamma Short",
    duration: "0:59",
    image: "/images/hero-cards/dhamma-short.png",
    icon: Captions,
    className: "hero-card--dhamma",
  },
  {
    name: "Hook Maker",
    duration: "0:30",
    image: "/images/hero-cards/hook-maker.png",
    icon: MessageCircleMore,
    className: "hero-card--hook",
  },
]

const workflowSteps = [
  {
    number: "01",
    title: "Tool ရွေးပါ",
    description:
      "Movie Recap, Football, Dhamma, Shorts, Knowledge Video, Hook Maker, Thumbnail, Voice Library, Video Splitter ထဲက ကိုယ့် content နဲ့ကိုက်တဲ့ tool ကို ရွေးပါ။",
  },
  {
    number: "02",
    title: "Source တင်ပါ",
    description:
      "Video သို့မဟုတ် audio တင်ပြီး voice, subtitle, timing mode ကို စိတ်ကြိုက်ရွေးပါ။",
  },
  {
    number: "03",
    title: "ထုတ်ပြီး တင်ပါ",
    description:
      "ထွက်လာတဲ့ output ကို ပြန်ကြည့်၊ download လုပ်ပြီး TikTok, Reels, Shorts မှာ တင်ပါ။",
  },
]

const benefitItems = [
  "Voice, subtitle, timing ကို တစ်နေရာတည်းမှာ ပြီးအောင်လုပ်နိုင်မယ်",
  "File ဟိုပို့ဒီပို့လုပ်ရတဲ့အလုပ်တွေ လျော့မယ်",
  "Movie Recap, Football, Dhamma, Shorts, Knowledge Video, Thumbnail အတွက် workflow တွေ သီးသန့်ရှိမယ်",
  "ထွက်လာတဲ့ file ကို platform ပေါ်တင်ဖို့ ပိုလွယ်မယ်",
]

const audienceItems = [
  "Video idea ရှိပေမယ့် editing အချိန်မပေးနိုင်တဲ့ creator",
  "Movie Recap ကို စနစ်တကျ စလုပ်ချင်သူ",
  "TikTok, Reels, Shorts အတွက် content မှန်မှန်တင်ချင်သူ",
  "Burmese voice နဲ့ subtitle ကို လက်နဲ့အကုန်မလုပ်ချင်သူ",
  "Football content ကို vertical format နဲ့ ထုတ်ချင်သူ",
  "Dhamma audio ကို video content အဖြစ် ပြောင်းချင်သူ",
  "Stream နဲ့ long video ကို short clips ပြန်လုပ်ချင်သူ",
  "Video idea ကနေ thumbnail အမြန်ဖန်တီးချင်သူ",
  "ပြီးစီးထားတဲ့ video ကို shorter clips အဖြစ် ခွဲချင်သူ",
  "Knowledge-style video workflow သုံးချင်သူ",
  "Saved/cloned voices တွေကို supported workflows မှာ သုံးချင်သူ",
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
                  <span>Creator workflow ကို မြန်စေတဲ့ AI Content Tool</span>
                </h1>
                <p className="hero-copy__description">
                  Movie Recap, Football, Dhamma, Shorts, Hook Maker, Thumbnail,
                  Video Splitter, Knowledge Video နဲ့ Voice Library အတွက်
                  video/audio တင်ပါ။ Voice, subtitle နဲ့ timing ကို
                  ရွေးလိုက်ရုံနဲ့ publish-ready နီးစပ်တဲ့ output ရနိုင်အောင်
                  တစ်နေရာတည်းမှာ စီထားပါတယ်။
                </p>
                <div className="hero-actions">
                  <ActionLink
                    external={getPlanCtaHref().startsWith("http")}
                    href={getPlanCtaHref()}
                  >
                    Plan ရွေးရန်
                    <ArrowRight aria-hidden="true" />
                  </ActionLink>
                  <ActionLink href="#how-it-works" variant="light">
                    ဘယ်လိုသုံးရလဲ ကြည့်ရန်
                  </ActionLink>
                </div>
                <div className="hero-note">
                  <BadgeCheck aria-hidden="true" />
                  <span>VIP 35,000 MMK · VVIP 59,000 MMK · monthly</span>
                </div>
              </div>
              <div className="hero-showcase" aria-hidden="true">
                <div className="hero-showcase__glow" />
                <div className="hero-showcase__orbit" />
                {heroCards.map((card) => {
                  const Icon = card.icon

                  return (
                    <article
                      className={`hero-card ${card.className}`}
                      key={card.name}
                    >
                      <Image
                        alt=""
                        className="hero-card__image"
                        fill
                        sizes="(max-width: 52rem) 45vw, 18rem"
                        src={card.image}
                      />
                      <div className="hero-card__shade" />
                      <div className="hero-card__meta">
                        <span className="hero-card__name">
                          <Icon aria-hidden="true" />
                          {card.name}
                        </span>
                        <span className="hero-card__duration">
                          {card.duration}
                        </span>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>

          <div
            className="site-shell trust-strip"
            aria-label="Product capabilities"
          >
            <div className="trust-strip__intro">
              <p className="eyebrow">Product capabilities</p>
              <strong>လုပ်ရတာ ရှင်းပြီး မြန်စေဖို့</strong>
            </div>
            <div className="trust-strip__items">
              {capabilityItems.map((item, index) => (
                <div className="trust-strip__item" key={item.label}>
                  <span className="trust-strip__index">0{index + 1}</span>
                  <strong>{item.label}</strong>
                  <small>{item.detail}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="product">
          <div className="site-shell">
            <SectionHeading
              eyebrow="The friction"
              title="Idea ရှိတယ်။ Video ထုတ်ဖို့ အချိန်ပဲ မရှိတာ။"
              description="Source ရှာ၊ transcript ကြည့်၊ voice ထုတ်၊ subtitle ချိန်၊ format ပြန်ပြင်နေရင် video တစ်ပုဒ်ပြီးဖို့ အချိန်အများကြီးကုန်ပါတယ်။"
            />
            <div className="problem-grid">
              <article className="problem-card problem-card--lead">
                <span className="problem-card__index">01</span>
                <IconTile>
                  <WandSparkles aria-hidden="true" />
                </IconTile>
                <h3>Tool ၅ ခုကြား file တွေ လိုက်ရွှေ့နေရတယ်</h3>
                <p>
                  Voice ထုတ်ပြီး editor ထဲထည့်၊ subtitle ထိုးပြီး timing
                  ပြန်ညှိနေရတာက content ထုတ်တဲ့အရှိန်ကို နှေးစေပါတယ်။
                </p>
              </article>
              <article className="problem-card">
                <span className="problem-card__index">02</span>
                <IconTile>
                  <Captions aria-hidden="true" />
                </IconTile>
                <h3>Subtitle timing ကို နောက်ဆုံးမှ ပြန်လိုက်ညှိနေရတယ်</h3>
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
                <h3>တစ်ပုဒ်ပြီးရင် နောက်တစ်ပုဒ် မစနိုင်တော့ဘူး</h3>
                <p>
                  Manual editing အချိန်များလာတာနဲ့ content calendar က
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
              <p className="eyebrow eyebrow--light">The system</p>
              <h2 id="solution-title">
                Tool တစ်ခုချင်းစီ မလိုက်ရအောင် video ထုတ်တဲ့ flow ကို
                တစ်နေရာတည်းမှာ စုထားပါတယ်။
              </h2>
              <p>
                One Click AI မှာ content type ရွေး၊ video/audio တင်၊ setting
                ရွေးပြီး generate လုပ်နိုင်ပါတယ်။ Burmese voice, subtitle,
                timing နဲ့ output ကို တစ်နေရာတည်းကနေ ရယူနိုင်အောင်
                ပြုလုပ်ထားပါတယ်။
              </p>
              <ActionLink href="#tools" variant="light">
                Tools တွေကြည့်ရန်
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
              title="Movie Recap ကနေ Knowledge Video, Thumbnail နဲ့ Video Splitter အထိ ကိုယ့် niche နဲ့ကိုက်တဲ့ tool ကို ရွေးပါ။"
              description="လုပ်ချင်တဲ့ content ပုံစံအလိုက် tool ရွေးပြီး source တင်တာကနေ output ရတဲ့အထိ တစ်နေရာတည်းမှာ ဆက်လုပ်နိုင်ပါတယ်။"
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
              title="Source တင်ပြီး ၃ ဆင့်နဲ့ video ထုတ်ပါ"
              description="Beginner ဖြစ်ဖြစ်၊ content ကို ပုံမှန် run နေသူဖြစ်ဖြစ် လိုက်လုပ်ရတာ ရှင်းနေအောင် စီထားပါတယ်။"
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
              title="Speed နဲ့ quality ကို ကိုယ့် content ပုံစံအလိုက် ရွေးပါ"
              description="ATS Standard က credit ကိုချွေတာပြီး မှန်မှန်ထုတ်ဖို့။ ATS Pro က timing နဲ့ quality ကို ပိုဂရုစိုက်ချင်တဲ့အခါ သုံးဖို့။"
              align="center"
            />
            <div className="mode-grid">
              <article className="mode-card">
                <div className="mode-card__icon">
                  <Gauge aria-hidden="true" />
                </div>
                <p className="mode-card__label">ATS Standard</p>
                <h3>Credit ကိုချွေတာပြီး content မှန်မှန်ထုတ်ဖို့</h3>
                <p>
                  Quality နဲ့ credit usage ကို balance လုပ်ထားတဲ့ mode ဖြစ်လို့
                  နေ့တိုင်း output ထုတ်ချင်သူတွေအတွက် သင့်တော်ပါတယ်။
                </p>
                <span className="mode-card__note">Volume-first mode</span>
              </article>
              <article className="mode-card mode-card--accent">
                <div className="mode-card__icon">
                  <ShieldCheck aria-hidden="true" />
                </div>
                <p className="mode-card__label">ATS Pro</p>
                <h3>Quality ကို ပိုဦးစားပေးချင်တဲ့သူတွေအတွက်</h3>
                <p>
                  Voice, visual နဲ့ subtitle timing ကို ပိုသေချာအောင် process
                  လုပ်ချင်တဲ့ content တွေအတွက် သုံးနိုင်ပါတယ်။
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
                eyebrow="From source to publish"
                title="Review လုပ်ပြီး publish ဆက်လုပ်လို့လွယ်တဲ့ output ရအောင် စီထားပါတယ်။"
                description="Video file တစ်ခုတည်းမဟုတ်ဘဲ voice, subtitle, SRT နဲ့ platform format အတွက်လိုတာတွေကို တစ်နေရာတည်းကနေ ရယူနိုင်ပါတယ်။"
              />
            </div>
            <div className="output-section__proof">
              <div className="output-feature-grid">
                <article className="output-feature">
                  <IconTile>
                    <Captions aria-hidden="true" />
                  </IconTile>
                  <h3>အသံနဲ့ subtitle ကို တစ်နေရာတည်းမှာ ချိန်</h3>
                  <p>
                    Voice, visual နဲ့ subtitle timing ကို workflow
                    တစ်ခုတည်းထဲမှာ ချိန်နိုင်ပါတယ်။
                  </p>
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
                  <h3>TikTok, Reels, Shorts အတွက် ပြင်ပြီးသား</h3>
                  <p>
                    Vertical content platform တွေမှာ တင်ဖို့ output format ကို
                    လိုအပ်သလို ရယူနိုင်ပါတယ်။
                  </p>
                </article>
                <article className="output-feature">
                  <IconTile>
                    <Upload aria-hidden="true" />
                  </IconTile>
                  <h3>Source မှန်မှန်တင်နိုင်အောင် လမ်းညွှန်ထားတယ်</h3>
                  <p>
                    Tool နဲ့ကိုက်တဲ့ video သို့မဟုတ် audio source ကို
                    ရွေးတင်နိုင်အောင် ရှင်းပြထားပါတယ်။
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
              title="ကိုယ်တင်မယ့်ပမာဏအလိုက် plan ရွေးပါ"
              description="စလုပ်မယ့် creator အတွက် VIP။ Source video ပိုရှည်တင်မယ်၊ priority processing, Football, Shorts သို့မဟုတ် Dhamma workflow လိုမယ်ဆို VVIP။"
              align="center"
            />
            <div className="pricing-grid">
              {plans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
            <p className="pricing-note">
              Credit အသုံးပြုမှုက tool, source duration နဲ့ mode ပေါ်မူတည်ပြီး
              ကွာနိုင်ပါတယ်။ Exact credit ကို generate screen ပေါ်က estimate မှာ
              ကြည့်ပါ။
            </p>
          </div>
        </section>

        <section className="section" id="audience">
          <div className="site-shell audience-section">
            <SectionHeading
              eyebrow="Made for Myanmar creators"
              title="ဒီ platform က ဘယ်သူတွေအတွက်လဲ?"
              description="Editing skill အများကြီးမလိုဘဲ content ကို ပုံမှန်ထုတ်ချင်တဲ့ creator တွေအတွက်ပါ။"
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
              title="မဝယ်ခင် သိထားသင့်တာတွေ"
              description="အသုံးပြုပုံ၊ plan ရွေးချယ်ပုံ၊ credit နဲ့ output quality အကြောင်းကို အရင်ဖတ်ထားပါ။"
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
