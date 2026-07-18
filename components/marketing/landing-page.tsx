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

import { SiteFooter } from "@/components/marketing/site-footer"
import { SiteHeader } from "@/components/marketing/site-header"
import {
  ActionLink,
  FAQList,
  PricingCard,
  SectionHeading,
  ToolCard,
} from "@/components/marketing/marketing-ui"
import { faqs, getPlanCtaHref, plans, siteConfig, tools } from "@/lib/site-content"

const capabilityItems = [
  {
    label: "Burmese workflow",
    detail: "Voice + subtitle timing",
  },
  {
    label: "One workspace",
    detail: "Source ကနေ output အထိ",
  },
  {
    label: "Export ready",
    detail: "SRT + upload-ready file",
  },
  {
    label: "Creator modes",
    detail: "Recap · Football · Shorts",
  },
]

const workflowSteps = [
  {
    number: "01",
    title: "Tool ရွေးပါ",
    description: "Movie Recap, Football, Dhamma, Shorts, Hook Maker ထဲက ကိုယ်လုပ်မယ့်ပုံစံကို ရွေးပါ။",
  },
  {
    number: "02",
    title: "Source တင်ပါ",
    description: "Video သို့မဟုတ် audio source တင်ပြီး voice, subtitle, timing mode ကို ရွေးပါ။",
  },
  {
    number: "03",
    title: "ထုတ်ပြီး တင်ပါ",
    description: "Output ကို download လုပ်ပြီး TikTok, Reels, Shorts မှာ တင်ပါ။",
  },
]

const benefitItems = [
  "Voice, subtitle, timing ကို တစ်နေရာတည်းမှာ ကိုင်နိုင်မယ်",
  "File ဟိုပို့ဒီပို့လုပ်ရတဲ့အလုပ် လျော့မယ်",
  "Movie Recap, Football, Dhamma, Shorts အတွက် process ခွဲထားမယ်",
  "ထုတ်ပြီးသား file ကို platform ပေါ်တင်ဖို့ ပိုလွယ်မယ်",
]

const audienceItems = [
  "Video idea ရှိပေမယ့် editing အချိန်မရှိတဲ့ creator",
  "Movie Recap ကို စနစ်တကျစလုပ်ချင်သူ",
  "TikTok, Reels, Shorts အတွက် content မှန်မှန်တင်ချင်သူ",
  "Burmese voice နဲ့ subtitle ကို လက်နဲ့အကုန်မလုပ်ချင်သူ",
  "Football content ကို vertical format နဲ့ ထုတ်ချင်သူ",
  "Dhamma audio ကို video content အဖြစ် ပြောင်းချင်သူ",
  "Stream နဲ့ long video ကို short clips ပြန်လုပ်ချင်သူ",
  "Page အများကြီး run နေပြီး output speed မြှင့်ချင်သူ",
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
            <div className="hero-section__backdrop" aria-hidden="true">
              <video
                autoPlay
                className="hero-section__video"
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/abstract-forest.mp4" type="video/mp4" />
              </video>
              <div className="hero-section__scrim" />
            </div>

            <div className="site-shell hero-section__inner">
              <div className="hero-copy">
                <p className="eyebrow eyebrow--light">One Click AI by AI Code Lab</p>
                <h1>
                  One Click AI
                  <span>တစ်ချက်နှိပ် တန်းတင် AI Content Tool</span>
                </h1>
                <p className="hero-copy__description">
                  Movie Recap, Football, Dhamma, Shorts နဲ့ Hook Maker အတွက် source တင်၊
                  voice/subtitle/timing ရွေး၊ output ကို download လုပ်ပါ။ Tool အများကြီး
                  မပြောင်းဘဲ Burmese content ထုတ်နိုင်အောင် စီထားပါတယ်။
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
                    ဘယ်လိုသုံးလဲ ကြည့်ရန်
                  </ActionLink>
                </div>
                <div className="hero-note">
                  <BadgeCheck aria-hidden="true" />
                  <span>VIP 35,000 MMK · VVIP 59,000 MMK · 30 days</span>
                </div>
              </div>
            </div>
          </div>

          <div className="site-shell trust-strip" aria-label="Product capabilities">
            <div className="trust-strip__intro">
              <p className="eyebrow">Product capabilities</p>
              <strong>တစ်နေရာတည်းမှာ ရှင်းရှင်းလင်းလင်း</strong>
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
              description="Source ရှာပြီး transcript, voice, subtitle, timing, format အားလုံးကို လက်နဲ့လိုက်လုပ်ရင် video တစ်ပုဒ်ပြီးဖို့ အချိန်ကုန်ပါတယ်။"
            />
            <div className="problem-grid">
              <article className="problem-card problem-card--lead">
                <span className="problem-card__index">01</span>
                <IconTile>
                  <WandSparkles aria-hidden="true" />
                </IconTile>
                <h3>Tool ၅ခုကြား file လိုက်ရွှေ့နေရတယ်</h3>
                <p>Voice ထုတ်ပြီး editor ထဲထည့်၊ subtitle ထိုးပြီး timing ပြန်ညှိတဲ့အလုပ်က content speed ကို နှေးစေပါတယ်။</p>
              </article>
              <article className="problem-card">
                <span className="problem-card__index">02</span>
                <IconTile>
                  <Captions aria-hidden="true" />
                </IconTile>
                <h3>Subtitle timing က နောက်ဆုံးမှာ ပြန်ညှိနေရတယ်</h3>
                <p>Burmese line တွေရှည်သွားတာ၊ voice နဲ့ visual မတည့်တာတွေကို publish မလုပ်ခင် ထပ်ကိုင်နေရပါတယ်။</p>
              </article>
              <article className="problem-card">
                <span className="problem-card__index">03</span>
                <IconTile>
                  <Clock3 aria-hidden="true" />
                </IconTile>
                <h3>တစ်ပုဒ်ပြီးရင် နောက်တစ်ပုဒ် မစနိုင်တော့ဘူး</h3>
                <p>Manual editing အချိန်များလာတာနဲ့ content calendar က ရပ်သွားပါတယ်။</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--teal" aria-labelledby="solution-title">
          <div className="site-shell solution-section">
            <div className="solution-section__copy">
              <p className="eyebrow eyebrow--light">The system</p>
              <h2 id="solution-title">Tool တစ်ခုချင်းစီ မလိုက်ပါနဲ့။ Video ထုတ်တဲ့ process ကို တစ်နေရာတည်းမှာ စုပါ။</h2>
              <p>
                One Click AI မှာ content type ရွေး၊ source တင်၊ settings ရွေးပြီး generate
                လုပ်ပါ။ Burmese voice, subtitle, timing နဲ့ output ကို တစ်နေရာတည်းမှာ
                ရယူနိုင်ပါတယ်။
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
              title="Movie Recap ကနေ Dhamma video အထိ။ ကိုယ့် niche အတွက် tool ရွေးပါ။"
              description="ကိုယ်လုပ်ချင်တဲ့ content အလိုက် tool ရွေးပြီး source ကနေ output အထိ တစ်နေရာတည်းမှာ ဆက်လုပ်ပါ။"
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
              title="Source တင်ပြီး ၃ဆင့်နဲ့ video ထုတ်ပါ"
              description="Beginner ဖြစ်ဖြစ်၊ content ကို ပုံမှန် run နေသူဖြစ်ဖြစ် လိုက်လုပ်ရတာရှင်းအောင် စီထားပါတယ်။"
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
              title="Speed နဲ့ quality ကို content ပုံစံအလိုက်ရွေးပါ"
              description="ATS Standard က credit ကိုချွေတာပြီး မှန်မှန်ထုတ်ဖို့။ ATS Pro က timing နဲ့ quality ကို ပိုဦးစားပေးဖို့။"
              align="center"
            />
            <div className="mode-grid">
              <article className="mode-card">
                <div className="mode-card__icon">
                  <Gauge aria-hidden="true" />
                </div>
                <p className="mode-card__label">ATS Standard</p>
                <h3>Credit ကိုချွေတာပြီး content မှန်မှန်ထုတ်ဖို့</h3>
                <p>Quality နဲ့ credit usage ကို balance လုပ်ထားတဲ့ mode ဖြစ်လို့ daily output တင်ချင်သူတွေအတွက် သင့်တော်ပါတယ်။</p>
                <span className="mode-card__note">Volume-first mode</span>
              </article>
              <article className="mode-card mode-card--accent">
                <div className="mode-card__icon">
                  <ShieldCheck aria-hidden="true" />
                </div>
                <p className="mode-card__label">ATS Pro</p>
                <h3>Quality ကို ပိုဦးစားပေးတဲ့ သူများအတွက်</h3>
                <p>Voice, visual နဲ့ subtitle timing ကို ပိုသေချာအောင် process လုပ်ချင်တဲ့ content တွေအတွက် သုံးပါ။</p>
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
                title="Download လုပ်ပြီး တင်လို့ရတဲ့ output ကို ရအောင်ထားပါတယ်။"
                description="Video တစ်ဖိုင်ထဲပဲမဟုတ်ဘဲ voice, subtitle, SRT နဲ့ platform format အတွက်လိုတာတွေကို တစ်နေရာတည်းကနေ ထုတ်ယူနိုင်ပါတယ်။"
              />
            </div>
            <div className="output-section__proof">
              <div className="output-feature-grid">
              <article className="output-feature">
                <IconTile>
                  <Captions aria-hidden="true" />
                </IconTile>
                <h3>အသံနဲ့ subtitle ကို တစ်ချက်တည်း ချိန်</h3>
                <p>Voice, visual နဲ့ subtitle ကို တစ်နေရာတည်းမှာ ချိန်ညှိပါ။</p>
              </article>
              <article className="output-feature">
                <IconTile>
                  <Download aria-hidden="true" />
                </IconTile>
                <h3>SRT export</h3>
                <p>Video ထဲ တန်းပါမယ့် subtitle မလိုသေးရင် SRT file ကို သီးခြားရယူနိုင်ပါတယ်။</p>
              </article>
              <article className="output-feature">
                <IconTile>
                  <MonitorSmartphone aria-hidden="true" />
                </IconTile>
                <h3>TikTok, Reels, Shorts တင်ဖို့ ပြင်ပြီးသား</h3>
                <p>Vertical content တင်တဲ့ platform တွေအတွက် output format ကို လိုအပ်သလို ရယူပါ။</p>
              </article>
              <article className="output-feature">
                <IconTile>
                  <Upload aria-hidden="true" />
                </IconTile>
                <h3>Source မှန်မှန်တင်ဖို့ လမ်းညွှန်ထားတယ်</h3>
                <p>Tool နဲ့ကိုက်တဲ့ video သို့မဟုတ် audio source ကို တင်နိုင်အောင် ရှင်းလင်းထားပါတယ်။</p>
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
              <h2>Credit ကုန်မှာကို မသေချာမဖြစ်ရအောင် rules ကိုရှင်းထားပါတယ်။</h2>
              <p>
                Generate မလုပ်ခင် source guidance နဲ့ credit estimate ကို စစ်နိုင်ပါတယ်။
                System failure အကျုံးဝင်တဲ့ case တွေမှာ credit restoration policy ကို
                အသုံးပြုနိုင်ပါတယ်။
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
                  <Check aria-hidden="true" /> Credit restoration for qualifying failures
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
              title="ကိုယ်တင်မယ့်ပမာဏအလိုက် Plan ရွေးပါ"
              description="စလုပ်မယ့် creator အတွက် VIP။ Daily output ပိုများပြီး priority processing လိုရင် VVIP။"
              align="center"
            />
            <div className="pricing-grid">
              {plans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
            <p className="pricing-note">
              Credit အသုံးပြုမှုက tool, source duration နဲ့ mode ပေါ်မူတည်ပြီး ကွာနိုင်ပါတယ်။ Generate မလုပ်ခင် estimate ကို စစ်ပါ။
            </p>
          </div>
        </section>

        <section className="section" id="audience">
          <div className="site-shell audience-section">
            <SectionHeading
              eyebrow="Made for Myanmar creators"
              title="ဒီ platform က ဘယ်သူတွေအတွက်လဲ?"
              description="Editing skill များများမလိုဘဲ content ကို ပုံမှန်ထုတ်ချင်တဲ့ creator တွေအတွက်ပါ။"
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
              description="အသုံးပြုပုံ၊ plan ရွေးချယ်ပုံ၊ credit နဲ့ output quality အကြောင်း အရင်ဖတ်ပါ။"
            />
            <FAQList items={faqs} />
          </div>
        </section>

        <section className="section policy-strip">
          <div className="site-shell policy-strip__inner">
            <div>
              <p className="eyebrow">Use it with confidence</p>
              <h2>မတင်ခင် source rights နဲ့ platform rules ကို စစ်ပါ။</h2>
            </div>
            <div className="policy-grid">
              <div>
                <ShieldCheck aria-hidden="true" />
                <strong>Copyright</strong>
                <p>Source rights မရှိဘဲ သုံးတာနဲ့ platform enforcement ကို One Click AI က အာမခံမပေးပါ။</p>
              </div>
              <div>
                <BadgeCheck aria-hidden="true" />
                <strong>Monetization</strong>
                <p>Views, followers, income နဲ့ monetization approval ကို အာမခံမပေးပါ။</p>
              </div>
              <div>
                <WandSparkles aria-hidden="true" />
                <strong>AI output</strong>
                <p>Source quality နဲ့ mode ပေါ်မူတည်ပြီး output ကွာနိုင်လို့ publish မလုပ်ခင် review လုပ်ပါ။</p>
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
