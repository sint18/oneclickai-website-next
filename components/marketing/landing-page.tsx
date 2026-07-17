import {
  ArrowRight,
  BadgeCheck,
  Captions,
  Check,
  CheckCircle2,
  Clock3,
  Download,
  FileAudio,
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

const trustItems = [
  "Burmese voice & subtitle",
  "ATS Standard & Pro",
  "SRT export",
  "Upload-ready output",
]

const workflowSteps = [
  {
    number: "01",
    title: "Content Tool ရွေးပါ",
    description: "Movie Recap, Football, Dhamma, Shorts သို့မဟုတ် Hook Maker ရွေးပါ။",
  },
  {
    number: "02",
    title: "Source Upload လုပ်ပါ",
    description: "Tool နဲ့ကိုက်ညီတဲ့ video သို့မဟုတ် audio source ကို တင်ပါ။",
  },
  {
    number: "03",
    title: "Generate, Download, Publish",
    description: "Settings ရွေးပြီး output ကို download လုပ်ကာ platform မှာတင်ပါ။",
  },
]

const benefitItems = [
  "Tool အများကြီးကြား file ပြောင်းရွှေ့ရတဲ့အလုပ် လျော့မယ်",
  "Burmese voice နဲ့ subtitle workflow တစ်နေရာတည်းမှာ ရမယ်",
  "Content type အလိုက် workflow သီးသန့် ရှိမယ်",
  "Source ကနေ publish-ready output အထိ ပိုရှင်းမယ်",
]

const audienceItems = [
  "Movie Recap စလုပ်ချင်တဲ့ beginner creator",
  "TikTok, Reels, Shorts အတွက် content မှန်မှန်တင်ချင်သူ",
  "CapCut editing အချိန်ကို လျှော့ချင်သူ",
  "Burmese voice နဲ့ subtitle workflow လိုသူ",
  "Football content ကို vertical format နဲ့ run ချင်သူ",
  "Dhamma audio ကို video content အဖြစ် ပြောင်းချင်သူ",
  "Stream နဲ့ long video ကို short clips လုပ်ချင်သူ",
  "Multiple pages run နေပြီး production speed မြှင့်ချင်သူ",
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
          <div className="site-shell hero-section__inner">
            <div className="hero-copy">
              <p className="eyebrow">Myanmar Creator တွေအတွက် AI Content System</p>
              <h1>
                Source Video ကနေ
                <span>Upload-Ready Content</span>
                အထိ One Click နဲ့
              </h1>
              <p className="hero-copy__description">
                Movie Recap, Football, Dhamma, Shorts နဲ့ Hook Maker ကို အသုံးပြုပြီး
                Burmese voice, subtitle နဲ့ publish-ready output ထုတ်ပါ။ Tool
                အများကြီးပြောင်းသုံးရတာနဲ့ manual editing မှာ ပိတ်နေတဲ့အချိန်ကို လျှော့ပါ။
              </p>
              <div className="hero-actions">
                <ActionLink href={getPlanCtaHref()} external={getPlanCtaHref() !== "#support"}>
                  Plan ဝယ်ပြီး စတင်ရန်
                  <ArrowRight aria-hidden="true" />
                </ActionLink>
                <ActionLink href="#how-it-works" variant="secondary">
                  အသုံးပြုပုံကြည့်ရန်
                </ActionLink>
              </div>
              <div className="hero-note">
                <BadgeCheck aria-hidden="true" />
                <span>VIP 35,000 MMK · VVIP 59,000 MMK · 30 days</span>
              </div>
            </div>

            <div className="workflow-preview" aria-label="One Click AI workflow preview">
              <div className="workflow-preview__header">
                <div>
                  <span className="preview-kicker">Workflow preview</span>
                  <strong>Source → Upload-ready</strong>
                </div>
                <span className="preview-status">One Click AI</span>
              </div>

              <div className="workflow-preview__source">
                <IconTile>
                  <FileAudio aria-hidden="true" />
                </IconTile>
                <div>
                  <span className="preview-kicker">Your source</span>
                  <strong>Video or audio file</strong>
                </div>
                <Upload aria-hidden="true" className="preview-trailing-icon" />
              </div>

              <ol className="workflow-preview__steps">
                <li className="workflow-preview__step workflow-preview__step--done">
                  <span>01</span>
                  <div>
                    <strong>Choose your tool</strong>
                    <small>Movie Recap · Football · Dhamma · Shorts</small>
                  </div>
                  <CheckCircle2 aria-hidden="true" />
                </li>
                <li className="workflow-preview__step workflow-preview__step--done">
                  <span>02</span>
                  <div>
                    <strong>Shape the output</strong>
                    <small>Voice · subtitle · timing · format</small>
                  </div>
                  <CheckCircle2 aria-hidden="true" />
                </li>
                <li className="workflow-preview__step workflow-preview__step--active">
                  <span>03</span>
                  <div>
                    <strong>Generate & download</strong>
                    <small>Ready for TikTok, Reels, or Shorts</small>
                  </div>
                  <Download aria-hidden="true" />
                </li>
              </ol>

              <div className="workflow-preview__output">
                <div className="output-line">
                  <span className="output-line__dot" />
                  <span>Upload-ready output</span>
                </div>
                <span className="output-line__meta">Voice · Subtitle · SRT</span>
              </div>
            </div>
          </div>

          <div className="site-shell trust-strip" aria-label="Product highlights">
            {trustItems.map((item) => (
              <span key={item}>
                <Check aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section" id="product">
          <div className="site-shell">
            <SectionHeading
              eyebrow="The friction"
              title="Content idea မရှိလို့ မရပ်တာပါ။ Editing workflow ကြောင့် ရပ်နေတာပါ။"
              description="Source ရှာ၊ transcript ထုတ်၊ translate လုပ်၊ voice ထုတ်၊ subtitle ထိုး၊ timing ညှိပြီးမှ video တစ်ပုဒ်ရတဲ့ workflow က အချိန်အရမ်းကုန်ပါတယ်။"
            />
            <div className="problem-grid">
              <article className="problem-card">
                <IconTile>
                  <WandSparkles aria-hidden="true" />
                </IconTile>
                <h3>Tool အများကြီးပြောင်းသုံးနေရတယ်</h3>
                <p>Voice tool, subtitle tool, editor နဲ့ caption tool တွေကြား file ပြောင်းရွှေ့နေရပါတယ်။</p>
              </article>
              <article className="problem-card">
                <IconTile>
                  <Captions aria-hidden="true" />
                </IconTile>
                <h3>Subtitle နဲ့ timing မတည့်ဘူး</h3>
                <p>Burmese font, long subtitle lines, voice timing နဲ့ visual timing တွေကို ကိုယ်တိုင်ပြန်ညှိရပါတယ်။</p>
              </article>
              <article className="problem-card">
                <IconTile>
                  <Clock3 aria-hidden="true" />
                </IconTile>
                <h3>Content မှန်မှန်မတင်နိုင်ဘူး</h3>
                <p>Video တစ်ပုဒ်ကို အချိန်အရမ်းပေးရလို့ consistent content run မလုပ်နိုင်ပါဘူး။</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--teal" aria-labelledby="solution-title">
          <div className="site-shell solution-section">
            <div className="solution-section__copy">
              <p className="eyebrow eyebrow--light">The system</p>
              <h2 id="solution-title">Tool တစ်ခုချင်းစီ မလိုက်ပါနဲ့။ Workflow တစ်ခုလုံးကို လျှော့ပါ။</h2>
              <p>
                One Click AI မှာ content type ရွေး၊ source upload လုပ်၊ settings ရွေးပြီး
                generate လုပ်ပါ။ Burmese voice, subtitle, timing နဲ့ output ကို
                တစ်နေရာတည်းမှာ ရယူနိုင်ပါတယ်။
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
              eyebrow="One system, many workflows"
              title="Content niche တစ်ခုမဟုတ်ဘူး။ Creator workflow အများကြီးကို တစ်နေရာတည်းမှာ။"
              description="ကိုယ်လုပ်ချင်တဲ့ content အလိုက် သင့်တော်တဲ့ tool ကို ရွေးပြီး source ကနေ output အထိ သွားပါ။"
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
              title="သုံးဆင့်နဲ့ Content ထုတ်ပါ"
              description="Beginner ဖြစ်ဖြစ်၊ content ကို ပုံမှန် run နေသူဖြစ်ဖြစ် workflow ကို ပိုရှင်းအောင် စီထားပါတယ်။"
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
              eyebrow="Processing modes"
              title="Quality နဲ့ credit usage ကို ကိုယ်တိုင်ရွေးပါ"
              description="Content volume နဲ့ output priority အလိုက် ATS Standard သို့မဟုတ် ATS Pro ကို ရွေးနိုင်ပါတယ်။"
              align="center"
            />
            <div className="mode-grid">
              <article className="mode-card">
                <div className="mode-card__icon">
                  <Gauge aria-hidden="true" />
                </div>
                <p className="mode-card__label">ATS Standard</p>
                <h3>Content မှန်မှန်ထုတ်ဖို့ balance ဖြစ်တဲ့ mode</h3>
                <p>Quality နဲ့ credit usage ကို ချိန်ညှိထားပြီး content volume ပိုလိုသူတွေအတွက် သင့်တော်ပါတယ်။</p>
                <span className="mode-card__note">Volume-first workflow</span>
              </article>
              <article className="mode-card mode-card--accent">
                <div className="mode-card__icon">
                  <ShieldCheck aria-hidden="true" />
                </div>
                <p className="mode-card__label">ATS Pro</p>
                <h3>Timing quality ကို ပိုဦးစားပေးတဲ့ advanced mode</h3>
                <p>Voice, visual နဲ့ subtitle timing quality ကို ပိုကောင်းအောင် advanced processing လုပ်ပေးပါတယ်။</p>
                <span className="mode-card__note">Quality-first workflow</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="output">
          <div className="site-shell output-section">
            <div className="output-section__copy">
              <SectionHeading
                eyebrow="From source to publish"
                title="Output ဖိုင်တစ်ခုတည်းမဟုတ်ဘဲ workflow ပြီးစီးအောင် ကူညီပေးတယ်။"
                description="Generation-only tool မဟုတ်ဘဲ Burmese creator တွေအတွက် source ကနေ publish-ready output အထိ လိုအပ်တာတွေကို တစ်နေရာတည်းမှာ စုထားပါတယ်။"
              />
            </div>
            <div className="output-feature-grid">
              <article className="output-feature">
                <IconTile>
                  <Captions aria-hidden="true" />
                </IconTile>
                <h3>Voice + subtitle timing</h3>
                <p>Voice, visual နဲ့ subtitle ကို တစ် workflow ထဲမှာ ချိန်ညှိပါ။</p>
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
                <h3>Platform-ready formats</h3>
                <p>TikTok, Facebook Reels နဲ့ YouTube Shorts အတွက် workflow ကို ပြင်ဆင်ပါ။</p>
              </article>
              <article className="output-feature">
                <IconTile>
                  <Upload aria-hidden="true" />
                </IconTile>
                <h3>Clear source guidance</h3>
                <p>Tool မှန်မှန်ရွေးပြီး သင့်တော်တဲ့ source တင်နိုင်အောင် ရှင်းလင်းထားပါတယ်။</p>
              </article>
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
              <h2>Error ဖြစ်တိုင်း Admin လိုက်ရှာပြီး credit ပြန်တောင်းနေရတဲ့ workflow မလိုတော့ဘူး။</h2>
              <p>
                Clear validation, processing fallback နဲ့ qualifying system failure တွေအတွက်
                credit restoration policy ကို သုံးထားပါတယ်။ Source မမှန်တာ၊ user setting မှားတာနဲ့
                system issue ကို ခွဲပြီး နားလည်လွယ်အောင် ပြထားပါတယ်။
              </p>
              <div className="reliability-points">
                <span>
                  <Check aria-hidden="true" /> Source validation before processing
                </span>
                <span>
                  <Check aria-hidden="true" /> Clear error messages
                </span>
                <span>
                  <Check aria-hidden="true" /> Multiple processing fallbacks
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
              title="Content run ပုံအလိုက် Plan ရွေးပါ"
              description="Beginner creator တွေအတွက် VIP၊ content volume ပိုများပြီး priority processing လိုသူတွေအတွက် VVIP။"
              align="center"
            />
            <div className="pricing-grid">
              {plans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
            <p className="pricing-note">
              Credit အသုံးပြုမှုက tool နဲ့ source duration ပေါ်မူတည်ပြီး ကွာနိုင်ပါတယ်။ Generate မလုပ်ခင် estimate ကို စစ်ပါ။
            </p>
          </div>
        </section>

        <section className="section" id="audience">
          <div className="site-shell audience-section">
            <SectionHeading
              eyebrow="Made for Myanmar creators"
              title="ဒီ Tool က ဘယ်သူတွေအတွက်လဲ?"
              description="Editing skill များများမလိုဘဲ content ကို ပုံမှန် run ချင်တဲ့ creator တွေအတွက် workflow တစ်ခုပါ။"
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
              description="အသုံးပြုပုံ၊ plan ရွေးချယ်ပုံနဲ့ output quality အကြောင်း အရင်ဖတ်ပါ။"
            />
            <FAQList items={faqs} />
          </div>
        </section>

        <section className="section policy-strip">
          <div className="site-shell policy-strip__inner">
            <div>
              <p className="eyebrow">Use it with confidence</p>
              <h2>Source rights နဲ့ platform rules ကို ကိုယ်တိုင် စစ်ဆေးပြီး publish ပါ။</h2>
            </div>
            <div className="policy-grid">
              <div>
                <ShieldCheck aria-hidden="true" />
                <strong>Copyright</strong>
                <p>Source rights မရှိဘဲ အသုံးပြုခြင်းနဲ့ platform enforcement ကို One Click AI က အာမခံမပေးပါ။</p>
              </div>
              <div>
                <BadgeCheck aria-hidden="true" />
                <strong>Monetization</strong>
                <p>Views, followers, income နဲ့ monetization approval ကို အာမခံမပေးပါ။</p>
              </div>
              <div>
                <WandSparkles aria-hidden="true" />
                <strong>AI output</strong>
                <p>Source quality နဲ့ processing mode ပေါ်မူတည်ပြီး output ကွာနိုင်လို့ publish မလုပ်ခင် review လုပ်ပါ။</p>
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
