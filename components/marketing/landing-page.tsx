import { ArrowRight, BadgeCheck, ShieldCheck, WandSparkles } from "lucide-react"
import Image from "next/image"

import { SiteFooter } from "@/components/marketing/site-footer"
import { SiteHeader } from "@/components/marketing/site-header"
import {
  ActionLink,
  CreditExamples,
  FAQList,
  SectionHeading,
  ToolCard,
  VideoSlot,
} from "@/components/marketing/marketing-ui"
import {
  faqs,
  getVideoResourceBySlug,
  plans,
  siteConfig,
  tools,
} from "@/lib/site-content"

const heroDemoHref =
  getVideoResourceBySlug("movie-recap-walkthrough")?.href ?? "/examples"

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
      <main id="main-content" tabIndex={-1}>
        <section className="hero-section hero-section--compact">
          <div className="hero-section__stage">
            <div className="site-shell hero-section__inner">
              <div className="hero-copy">
                <p className="eyebrow eyebrow--light">
                  Movie Recap for Myanmar creators
                </p>
                <h1>
                  မြန်မာအသံနဲ့ စာတန်းထိုးပါတဲ့ Movie Recap Video ဖန်တီးပါ။
                </h1>
                <p className="hero-copy__description">
                  Source video ကနေ မြန်မာအသံ၊ subtitle နဲ့ recap video ကို
                  workflow တစ်ခုတည်းမှာ ပြင်ဆင်ပါ။ Output ကို ပြန်စစ်ပြီးမှ
                  download လုပ်ကာ တင်နိုင်ပါတယ်။
                </p>
                <div className="hero-actions">
                  <ActionLink href="/pricing">
                    Plan နှင့် ဈေးနှုန်း ကြည့်ရန်
                    <ArrowRight aria-hidden="true" />
                  </ActionLink>
                  <ActionLink
                    external={heroDemoHref.startsWith("http")}
                    href={heroDemoHref}
                    variant="light"
                  >
                    အသုံးပြုပုံ Video ကြည့်ရန်
                  </ActionLink>
                </div>
                <div className="hero-note">
                  <BadgeCheck aria-hidden="true" />
                  <span>KBZPay / WavePay ဖြင့် ဝယ်ယူနိုင်ပါတယ်။</span>
                </div>
                <ul className="hero-deliverables" aria-label="Output includes">
                  <li>Burmese voice နှင့် subtitle</li>
                  <li>9:16 vertical video</li>
                  <li>SRT subtitle file</li>
                </ul>
              </div>
              <div className="hero-sample" id="output">
                <VideoSlot
                  caption="နမူနာကို ဖွင့်ပြီး မြန်မာအသံနဲ့ subtitle ကို ကြည့်ရှုနားထောင်ပါ။"
                  src="/videos/movie-recap-output-sample.mp4"
                  poster="/images/movie-recap-output-poster.jpg"
                  title="Movie Recap output sample with Burmese voice and subtitles"
                />
              </div>
            </div>
          </div>
        </section>
        <div
          className="site-shell trust-strip"
          aria-label="Real creator result"
        >
          <div className="trust-strip__intro">
            <p className="eyebrow">Real creator result</p>
            <strong>
              Movie Recap content တင်ပြီး ၅ ရက်အတွင်း monetization ရခဲ့တဲ့ VVIP
              creator
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

        <section className="section section--wash" id="product">
          <div className="site-shell" id="how-it-works">
            <div id="audience">
              <SectionHeading
                eyebrow="Simple by design"
                title="Source ကနေ output အထိ အဆင့် ၃ ဆင့်"
                description="Movie Recap ပုံမှန်တင်ချင်တဲ့ creator တွေအတွက် voice tool၊ editor နဲ့ subtitle tool တွေကို သီးခြားပြောင်းသုံးရတဲ့အလုပ် လျှော့ပေးပါတယ်။"
              />
            </div>
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
        <section className="section" id="tools">
          <div className="site-shell">
            <SectionHeading
              eyebrow="Creator tools"
              title="ကိုယ့် content အတွက် tool ကို ရွေးပါ"
              description="Tool တစ်ခုချင်းစီရဲ့ အသုံးပြုပုံနဲ့ plan မှာ ပါဝင်မှုကို ကြည့်ပါ။ မကြာမီ ထွက်မယ့် tool တွေကို သီးခြားဖော်ပြထားပါတယ်။"
            />
            <div className="tool-grid">
              {tools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>
        </section>
        <section className="section section--wash" id="pricing">
          <div className="site-shell" id="reliability">
            <SectionHeading
              eyebrow="Plans and credits"
              title="ကိုယ့် workflow နဲ့ကိုက်တဲ့ plan ကို ရွေးပါ"
              description="VIP မှာ monthly credits 60၊ VVIP မှာ 120 ပါဝင်ပါတယ်။ VVIP မှာ priority processing နဲ့ ထပ်ဆောင်း tools တွေပါဝင်ပါတယ်။"
            />
            <div id="ats">
              <CreditExamples />
            </div>
            <ActionLink href="/pricing">
              VIP နှင့် VVIP ကို နှိုင်းယှဉ်ရန်
              <ArrowRight aria-hidden="true" />
            </ActionLink>
          </div>
        </section>
        <section className="section" id="faq">
          <div className="site-shell faq-section">
            <SectionHeading
              eyebrow="Before you start"
              title="မဝယ်ခင် သိထားသင့်တာတွေ"
              description="Plan၊ source နဲ့ output အကြောင်း ကြိုဖတ်ပါ။"
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
