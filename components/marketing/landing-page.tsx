import { ArrowRight, BadgeCheck, ShieldCheck, WandSparkles } from "lucide-react"
import Image from "next/image"

import { CopyAppLink } from "@/components/marketing/copy-app-link"
import { HeroWorkspace } from "@/components/marketing/hero-workspace"
import { RecapComparison } from "@/components/marketing/recap-comparison"
import {
  ActionLink,
  FAQList,
  SectionHeading,
  SupportIcon,
  SupportLink,
  ToolCard,
} from "@/components/marketing/marketing-ui"
import { SiteFooter } from "@/components/marketing/site-footer"
import { SiteHeader } from "@/components/marketing/site-header"
import {
  faqs,
  getPlanCtaHref,
  getVideoResourceBySlug,
  howToBuySteps,
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
      "ဇာတ်လမ်း flow ရှင်းတဲ့ source video ကို ရွေးပါ။",
  },
  {
    number: "02",
    title: "Video တင်ပြီး setting ရွေးပါ",
    description:
      "Movie Recap tool ထဲမှာ source တင်ပြီး voice, subtitle နဲ့ output setting ကို ရွေးပါ။",
  },
  {
    number: "03",
    title: "Download လုပ်ပြီး တင်ပါ",
    description:
      "Recap video ကို download လုပ်ပြီး TikTok, Reels နဲ့ Shorts မှာ တင်နိုင်ပါတယ်။",
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
                <h1>
                  မြန်မာအသံနဲ့ စာတန်းထိုးပါတဲ့ Movie Recap Video ဖန်တီးပါ။
                </h1>
                <p className="hero-copy__description">
                  Editing မတတ်လည်း Movie Recap စလုပ်နိုင်ပါတယ်။ Source video
                  တင်ပြီး Click တစ်ချက်နှိပ်ရုံပါပဲ
                </p>
                <div className="hero-actions">
                  <ActionLink href="/pricing">
                    Plan နှင့် ဈေးနှုန်း ကြည့်ရန်
                    <ArrowRight aria-hidden="true" />
                  </ActionLink>
                  <ActionLink
                    href="#comparison"
                    variant="secondary"
                  >
                    နမူနာ Video ကြည့်ရန်
                  </ActionLink>
                </div>
                <div className="hero-note">
                  <BadgeCheck aria-hidden="true" />
                  <span>KBZPay ဖြင့် ဝယ်ယူနိုင်ပါတယ်။</span>
                </div>
              </div>
              <HeroWorkspace />
            </div>
          </div>
        </section>
        <section className="section comparison" id="comparison" aria-labelledby="comparison-title">
          <div className="site-shell">
            <div className="comparison__intro">
              <div><h2 id="comparison-title">Original Video ကနေ<br />Smart Recap အဖြစ်</h2><p>မူရင်း video နဲ့ Smart Recap ရလဒ်ကို ယှဉ်ကြည့်ပါ။</p></div>
              <div className="comparison__intro-detail"><p>မူရင်း video မှာ narration မပါလည်း ရပါတယ်။ Smart Recap က video ထဲက မြင်ကွင်းတွေကို နားလည်ပြီး မြန်မာအသံ၊ စာတန်းထိုးနဲ့ ပြန်ပြောပြပေးပါတယ်။</p><ActionLink href={heroDemoHref} external={heroDemoHref.startsWith("http")} analyticsLocation="hero_demo" variant="text">အသုံးပြုပုံ Video ကြည့်ရန် <ArrowRight aria-hidden="true" /></ActionLink></div>
            </div>
            <RecapComparison />
            <div className="comparison-benefits" aria-label="Smart Recap ရဲ့ အားသာချက်များ">
              <article className="benefit-story benefit-story--source"><div className="benefit-story__visual" aria-hidden="true"><div className="benefit-story__source-frame" /><div className="benefit-story__sound"><span>SOURCE AUDIO</span><div className="benefit-story__wave benefit-story__wave--quiet"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><span>OPTIONAL</span></div></div><div className="benefit-story__copy"><h3>Narration/Voice over ပါစရာမလို</h3><p>မူရင်း video မှာ narration မပါလည်း မြင်ကွင်းတွေကနေ content ဖန်တီးနိုင်ပါတယ်။</p></div></article>
              <article className="benefit-story benefit-story--range"><div className="benefit-story__visual" aria-hidden="true"><div className="benefit-story__filmstrip"><span/><span/><span/></div><div className="benefit-story__film-label">ONE TOOL <span> / </span> MORE STORIES</div></div><div className="benefit-story__copy"><h3>Movie Recap ထက် ပိုပါတယ်</h3><p>ရုပ်ရှင်တစ်မျိုးတည်းမဟုတ်ဘဲ video အမျိုးအစားအမျိုးမျိုးနဲ့ အသုံးပြုနိုင်ပါတယ်။</p></div></article>
              <article className="benefit-story benefit-story--voice"><div className="benefit-story__visual" aria-hidden="true"><div className="benefit-story__voice-line"><span>မြန်မာအသံ</span><div className="benefit-story__wave"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></div><div className="benefit-story__caption-line">ဇာတ်လမ်းတစ်ပုဒ် စတင်ပါပြီ။</div><div className="benefit-story__timeline"><i/><span/></div></div><div className="benefit-story__copy"><h3>မြန်မာအသံနဲ့ စာတန်းထိုး တစ်ခါတည်းပါမယ်</h3><p>အဆင့်မြင့် မြန်မာအသံနဲ့ အချိန်ကိုက် စာတန်းထိုးတွေ ရရှိနိုင်ပါတယ်။</p></div></article>
              <article className="benefit-story benefit-story--edit"><div className="benefit-story__visual" aria-hidden="true"><div className="benefit-story__edit-label"><span>AI AGENT</span><span>EDITING</span></div><div className="benefit-story__edit-frames"><span/><span/><span/></div><div className="benefit-story__edit-track"><i/><i/><i/><i/><i/><i/></div></div><div className="benefit-story__copy"><h3>AI Agent နဲ့ အလိုအလျောက် Edit လုပ်ပေးတယ်</h3><p>AI Agent တွေက video ကို အလိုအလျောက် ပြုပြင်ပေးပြီး copyright claim ဖြစ်နိုင်ခြေကို လျှော့ချပေးပါတယ်။</p></div></article>
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
              eyebrow="How to buy"
              title="Plan ဝယ်ပြီး စတင်ရန်"
              description="App မှာ VIP သို့မဟုတ် VVIP ရွေးပြီး KBZPay နဲ့ ငွေလွှဲပါ။ Payment screenshot တင်ရင် Support က approve လုပ်ပေးပါမယ်။"
            />
            <ol className="how-to-buy-steps">
              {howToBuySteps.map((step) => (
                <li className="how-to-buy-step" key={step.number}>
                  <span className="how-to-buy-step__number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
            <div className="how-to-buy-actions">
              <ActionLink
                analyticsLocation="how_to_buy_app"
                className="how-to-buy-actions__purchase"
                external
                href={getPlanCtaHref()}
              >
                App မှာ Plan ဝယ်ရန်
                <ArrowRight aria-hidden="true" />
              </ActionLink>
              <div className="how-to-buy-actions__support">
                <SupportLink
                  analyticsLocation="how_to_buy_support"
                  channel="messenger"
                  variant="secondary"
                >
                  <SupportIcon channel="messenger" />
                  Messenger
                </SupportLink>
                <SupportLink
                  analyticsLocation="how_to_buy_support"
                  channel="telegram"
                  variant="secondary"
                >
                  <SupportIcon channel="telegram" />
                  Telegram
                </SupportLink>
              </div>
              <div className="how-to-buy-actions__utility">
                <CopyAppLink variant="text" />
                <ActionLink href="/pricing" variant="text">
                  VIP နှင့် VVIP ကို နှိုင်းယှဉ်ရန်
                  <ArrowRight aria-hidden="true" />
                </ActionLink>
              </div>
            </div>
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
                Advanced AI နဲ့ ready-to-post output ကို ယုံကြည်စွာ အသုံးပြုပါ။
              </h2>
            </div>
            <div className="policy-grid">
              <div>
                <ShieldCheck aria-hidden="true" />
                <strong>Copyright</strong>
                <p>
                  Advanced AI နဲ့ source ကို transform လုပ်ပေးပေမယ့် copyright
                  claim နဲ့ platform enforcement ကို အာမခံမပေးပါ။
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
                <strong>Highest Quality</strong>
                <p>
                  အကောင်းဆုံး ready-to-post quality နဲ့ ထုတ်ပေးလို့ download
                  လုပ်ပြီး တန်းတင်နိုင်ပါတယ်။
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
