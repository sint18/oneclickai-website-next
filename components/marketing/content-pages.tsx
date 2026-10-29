import { Fragment, type ReactNode } from "react"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ExternalLink,
  PlayCircle,
  X,
} from "lucide-react"

import { PlanChoice } from "@/components/marketing/plan-choice"
import { SiteFooter } from "@/components/marketing/site-footer"
import { SiteHeader } from "@/components/marketing/site-header"
import {
  ActionLink,
  MediaSlot,
  SectionHeading,
  ToolCard,
} from "@/components/marketing/marketing-ui"
import {
  type ExampleItem,
  type GuideArticle,
  type GuideSection,
  type PlanComparisonValue,
  type Tool,
  type VideoResource,
  customerChannels,
  getExamplesForTool,
  getGuideBySlug,
  getPlanCtaHref,
  getToolBySlug,
  getVideoResourceBySlug,
  getVideoResourcesForTool,
  guides,
  movieRecapTestimonials,
  planOffers,
  planComparisonGroups,
  planCtaLabels,
  planTwoMinVideoEstimate,
  plans,
  tools,
} from "@/lib/site-content"
import { cn } from "@/lib/utils"

type BreadcrumbItem = {
  label: string
  href?: string
}

function isExternalHref(href: string) {
  return href.startsWith("http")
}

function StructuredData({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      type="application/ld+json"
    />
  )
}

function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="content-breadcrumbs">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {items.map((item) => (
          <li key={item.label}>
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function ContentPageFrame({
  breadcrumbs,
  children,
  description,
  eyebrow,
  heroAction,
  heroAside,
  title,
  structuredData,
  className,
}: {
  breadcrumbs: BreadcrumbItem[]
  children: ReactNode
  description: string
  eyebrow?: string
  heroAction?: ReactNode
  heroAside?: ReactNode
  title: string
  className?: string
  structuredData?: Record<string, unknown>
}) {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className={cn("content-page", className)}
      >
        <div className="site-shell">
          <Breadcrumbs items={breadcrumbs} />
          <header
            className={cn(
              "content-page__hero",
              heroAside && "content-page__hero--split"
            )}
          >
            <div>
              {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
              <h1>{title}</h1>
              <p>{description}</p>
              {heroAction}
            </div>
            {heroAside}
          </header>
          {children}
        </div>
      </main>
      {structuredData ? <StructuredData data={structuredData} /> : null}
      <SiteFooter />
    </>
  )
}

export function VideoResourceCard({ resource }: { resource: VideoResource }) {
  const availableHref =
    resource.status === "available" ? resource.href : undefined

  return (
    <article className="resource-card">
      <div className="resource-card__icon" aria-hidden="true">
        {resource.type === "quality-guide" ? <BookOpen /> : <PlayCircle />}
      </div>
      <div className="resource-card__body">
        <p className="resource-card__label">
          {resource.type === "quality-guide" ? "Quality guide" : "Walkthrough"}
        </p>
        <h3>{resource.title}</h3>
        <p>{resource.description}</p>
      </div>
      {availableHref ? (
        <ActionLink
          analyticsLocation="resource_card"
          external
          href={availableHref}
          variant="secondary"
        >
          {resource.linkLabel ?? "Facebook မှာကြည့်ရန်"}
          <ExternalLink aria-hidden="true" />
        </ActionLink>
      ) : (
        <span className="resource-card__status">Coming soon</span>
      )}
    </article>
  )
}

function GuideCard({ guide }: { guide: GuideArticle }) {
  return (
    <article className="content-card content-card--guide">
      <span className="content-card__icon" aria-hidden="true">
        <BookOpen />
      </span>
      <p className="content-card__eyebrow">{guide.eyebrow}</p>
      <h2>{guide.title}</h2>
      <p>{guide.description}</p>
      <Link className="content-card__link" href={`/guide/${guide.slug}`}>
        Guide ဖတ်ရန်
        <ArrowRight aria-hidden="true" />
      </Link>
    </article>
  )
}

function ExampleCard({ example }: { example: ExampleItem }) {
  const tool = getToolBySlug(example.toolSlug)

  return (
    <article className="example-card">
      <MediaSlot
        alt={example.alt}
        detail="Approved product screenshot or output file ထည့်ရန်နေရာ။"
        eyebrow={`${tool?.name ?? "Tool"} example slot`}
        src={example.imageSrc}
        title={example.title}
      />
      <div className="example-card__copy">
        <p className="content-card__eyebrow">{tool?.name}</p>
        <h2>{example.title}</h2>
        <dl>
          <div>
            <dt>Source</dt>
            <dd>{example.sourceLabel}</dd>
          </div>
          <div>
            <dt>Output</dt>
            <dd>{example.outputLabel}</dd>
          </div>
        </dl>
        <p>{example.caption}</p>
        <Link
          className="content-card__link"
          href={`/tools/${example.toolSlug}`}
        >
          {tool?.name} အကြောင်းကြည့်ရန်
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}

function RelatedGuides({ slugs }: { slugs: GuideArticle["slug"][] }) {
  const relatedGuides = slugs
    .map((slug) => getGuideBySlug(slug))
    .filter((guide): guide is GuideArticle => Boolean(guide))

  if (!relatedGuides.length) return null

  return (
    <section className="content-page__section">
      <SectionHeading
        eyebrow="Keep learning"
        title="ဆက်ဖတ်ဖို့ guide တွေ"
        description="ကိုယ့် workflow နဲ့ ကိုက်တဲ့ guide ကို ရွေးပြီး ဆက်လေ့လာပါ။"
      />
      <div className="content-card-grid content-card-grid--three">
        {relatedGuides.map((guide) => (
          <GuideCard guide={guide} key={guide.slug} />
        ))}
      </div>
    </section>
  )
}

function RelatedTools({ slugs }: { slugs: Tool["slug"][] }) {
  const relatedTools = slugs
    .map((slug) => getToolBySlug(slug))
    .filter((tool): tool is Tool => Boolean(tool))

  if (!relatedTools.length) return null

  return (
    <section className="content-page__section">
      <SectionHeading
        eyebrow="Explore tools"
        title="ကိုယ့် content နဲ့ကိုက်တဲ့ tool ကို ရွေးပါ"
        description="Source နဲ့ output ရည်ရွယ်ချက်အလိုက် tool တစ်ခုချင်းစီကို ကြည့်ပါ။"
      />
      <div className="tool-grid">
        {relatedTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  )
}

function ContentCta({
  description = "ကိုယ့် content type နဲ့ကိုက်တဲ့ workflow ကို One Click AI မှာ စတင်ကြည့်ပါ။",
  eyebrow = "VVIP နဲ့ Movie Recap စတင်ရန်",
  title = "ကိုယ့် workflow ကို စတင်ကြည့်ပါ။",
}: {
  description?: string
  eyebrow?: string | null
  title?: string
}) {
  const href = getPlanCtaHref()

  return (
    <section className="content-page__cta">
      <div>
        {eyebrow ? <p className="eyebrow eyebrow--light">{eyebrow}</p> : null}
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          Payment နဲ့ account activation ကို Messenger/Telegram support က
          ကူညီပေးပါမယ်။
        </p>
      </div>
      <ActionLink
        analyticsLocation="content_cta"
        external={isExternalHref(href)}
        href={href}
        variant="light"
      >
        {planCtaLabels.vvip}
        <ArrowRight aria-hidden="true" />
      </ActionLink>
    </section>
  )
}

export function ExamplesPage() {
  return (
    <ContentPageFrame
      breadcrumbs={[{ label: "Examples" }]}
      description="Smart Recap က source video တစ်ခုကို မြန်မာအသံ၊ စာတန်းထိုးပါတဲ့ content အဖြစ် ဘယ်လိုဖန်တီးပေးလဲ ယှဉ်ကြည့်ပါ။"
      eyebrow="Smart Recap"
      title="နမူနာကို မျက်မြင်ကြည့်ပါ။"
      structuredData={{ "@context": "https://schema.org", "@type": "WebPage", name: "Smart Recap Examples", description: "One Click AI Smart Recap နမူနာများ။" }}
    >
      <section className="examples-comparison" aria-labelledby="examples-comparison-title">
        <div className="examples-comparison__heading"><div><h2 id="examples-comparison-title">Source video ကနေ Smart Recap အထိ</h2><p>မူရင်း video နဲ့ Smart Recap ရလဒ်ကို ယှဉ်ကြည့်ပါ။</p></div></div>
        <div className="examples-comparison__grid">
          <div><div className="examples-comparison__label"><h3>မူရင်း Video</h3><span>SOURCE</span></div><video controls playsInline preload="none" poster="/images/comparison-original.webp" title="မူရင်း video"><source src="https://storage.googleapis.com/oneclickai-website-assets/videos/b13d989f-69f9-4416-99f7-58dbf199344d.mp4" type="video/mp4" />Your browser does not support video playback.</video></div>
          <div><div className="examples-comparison__label"><h3>Smart Recap ရလဒ်</h3><span>OUTPUT</span></div><video controls playsInline preload="none" poster="/images/comparison-result.webp" title="Smart Recap ရလဒ်"><source src="https://storage.googleapis.com/oneclickai-website-assets/videos/b13d989f-69f9-4416-99f7-58dbf199344d%202.mp4" type="video/mp4" />Your browser does not support video playback.</video></div>
        </div>
      </section>
      <section className="examples-features" aria-labelledby="examples-features-title">
        <div className="examples-features__intro"><h2 id="examples-features-title">Smart Recap က ဘာထူးလဲ။</h2><p>Video ကို မြင်ကွင်းကနေ နားလည်ပြီး ကိုယ့် content အဖြစ် ပြန်ဖန်တီးပေးပါတယ်။</p></div>
        <div className="examples-features__list">
          <article><h3>မူရင်း video မှာ narration မလိုပါဘူး</h3><p>စကားပြောသံ မပါတဲ့ video ကနေလည်း Smart Recap နဲ့ content ဖန်တီးနိုင်ပါတယ်။</p></article>
          <article><h3>Recap တစ်မျိုးတည်းအတွက် မဟုတ်ပါဘူး</h3><p>Movie Recap အပြင် video အမျိုးအစားအမျိုးမျိုးကနေ ကိုယ်လိုချင်တဲ့ content ကို ဖန်တီးနိုင်ပါတယ်။</p></article>
          <article><h3>Video တစ်ခုလုံးကို မြင်ပြီး နားလည်တယ်</h3><p>Video ထဲမှာ ဘာတွေဖြစ်နေလဲဆိုတာ မြင်ကွင်းတွေကို အခြေခံပြီး နားလည်ပေးပါတယ်။</p></article>
          <article><h3>မြင်ကွင်းနဲ့ စာတန်း အချိန်ကိုက်</h3><p>စာတန်းထိုးနဲ့ video မြင်ကွင်းတွေရဲ့ timeline ကို အချိန်ကိုက်ဖြစ်စေဖို့ အာမခံပါတယ်။</p></article>
          <article><h3>သဘာဝကျတဲ့ မြန်မာအသံ</h3><p>အဆင့်မြင့် voice model တွေနဲ့ ကိုယ့်ဇာတ်လမ်းကို နားထောင်လို့ကောင်းအောင် အသံထုတ်ပေးပါတယ်။</p></article>
          <article><h3>Transcript၊ voiceover နဲ့ subtitle 99.9% တိကျမှု</h3><p>ပြောမယ့်စာသား၊ အသံနဲ့ စာတန်းထိုးတွေကို တိကျစိတ်ချစွာ ဖန်တီးပေးပါတယ်။</p></article>
        </div>
      </section>
      <section className="examples-cta"><h2>ကိုယ့် video နဲ့ စမ်းကြည့်ပါ။</h2><p>ကိုယ့် content အတွက် သင့်တော်မယ့် plan ကို ရွေးပါ။</p><ActionLink href="/pricing">Plan နှင့် ဈေးနှုန်း ကြည့်ရန် <ArrowRight aria-hidden="true" /></ActionLink></section>
    </ContentPageFrame>
  )
}

export function GuidesIndexPage() {
  const resourceSlugs = [
    ...new Set(guides.flatMap((guide) => guide.videoResourceSlugs ?? [])),
  ]
  const resources = videoResourcesForSlugs(resourceSlugs)

  return (
    <ContentPageFrame
      breadcrumbs={[{ label: "Guide" }]}
      description="Tool ရွေးတာ၊ source ပြင်တာ၊ output setting စစ်တာနဲ့ output review လုပ်တာတွေကို beginner-friendly အနေနဲ့ ဖတ်နိုင်ပါတယ်။"
      eyebrow="Guides"
      title="One Click AI ကို သုံးရတာ ပိုရှင်းအောင်"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "One Click AI Guides",
        description: "One Click AI အသုံးပြုနည်းနဲ့ content workflow guides။",
      }}
    >
      <section className="content-page__section">
        <div className="content-card-grid content-card-grid--two">
          {guides.map((guide) => (
            <GuideCard guide={guide} key={guide.slug} />
          ))}
        </div>
      </section>

      <section className="content-page__section">
        <SectionHeading
          eyebrow="Watch the walkthroughs"
          title="Video နဲ့ လေ့လာချင်ရင် ဒီ resource တွေကနေ စပါ"
          description="Tool အလိုက်အသုံးပြုပုံနဲ့ Movie Recap source quality အကြောင်းကို Facebook resource တွေမှာ ဆက်ကြည့်နိုင်ပါတယ်။"
        />
        <div className="resource-grid">
          {resources.map((resource) => (
            <VideoResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </section>

      <ContentCta
        description="အသုံးပြုပုံနဲ့အတူ credit rates နဲ့ estimate စစ်ရမယ့်အချက်တွေကိုလည်း ကြိုဖတ်ထားပါ။"
        title="အသုံးပြုနည်းသိပြီးမှ plan ရွေးပါ။"
      />
    </ContentPageFrame>
  )
}

export function ToolsIndexPage() {
  return (
    <ContentPageFrame
      breadcrumbs={[{ label: "Tools" }]}
      description="ကိုယ့် source နဲ့ content ရည်ရွယ်ချက်နဲ့ကိုက်တဲ့ tool ကို ရွေးပါ။ မကြာမီထွက်မယ့် tool တွေကို သီးခြားဖော်ပြထားပါတယ်။"
      eyebrow="Creator tools"
      title="ကိုယ့် niche အတွက် tool ကို ရွေးပါ။"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "One Click AI Tools",
        description: "One Click AI creator tools directory။",
      }}
    >
      <section className="content-page__section">
        <div className="tool-grid">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <ContentCta
        description="ကိုယ့် content type နဲ့နေ့စဉ် output volume ကို support မှာ မေးပြီး သင့်တော်တဲ့ plan ကို ရွေးနိုင်ပါတယ်။"
        title="ကိုယ့် workflow အတွက် tool ကို စတင်ရွေးပါ။"
      />
    </ContentPageFrame>
  )
}

function PlanValue({ value }: { value: PlanComparisonValue }) {
  if (value.kind === "included") {
    return (
      <span
        aria-label="ပါဝင်ပါတယ်"
        className="pricing-compare__value pricing-compare__value--included"
      >
        <Check aria-hidden="true" />
        {value.label === "ပါဝင်ပါတယ်" ? null : <span>{value.label}</span>}
      </span>
    )
  }

  if (value.kind === "excluded") {
    return (
      <span
        aria-label="မပါဝင်ပါ"
        className="pricing-compare__value pricing-compare__value--excluded"
      >
        <X aria-hidden="true" />
      </span>
    )
  }

  return (
    <span
      className={cn(
        "pricing-compare__value",
        `pricing-compare__value--${value.kind}`
      )}
    >
      {value.label}
    </span>
  )
}

export function PricingPage() {
  const href = getPlanCtaHref()

  return (
    <ContentPageFrame
      className="content-page--pricing"
      breadcrumbs={[{ label: "Pricing" }]}
      description="အရင် plan ကို ရွေးပါ။ ပြီးရင် လစဉ် သို့မဟုတ် ၃ လ ကို ရွေးပါ။"
      title="VIP နဲ့ VVIP ကို ရွေးပါ"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "One Click AI Pricing",
        description: "VIP နဲ့ VVIP plan comparison for One Click AI.",
      }}
    >
      <section className="content-page__section">
        <div className="plan-choices">
          <PlanChoice
            analyticsLocation="pricing_vip"
            badge={plans[0].badge ?? ""}
            defaultTerm="month"
            external={isExternalHref(href)}
            href={href}
            label="VIP"
            monthlyCredits={planOffers.VIP.monthlyCredits}
            monthlyPrice={planOffers.VIP.monthlyPrice}
            monthlyVideos={planTwoMinVideoEstimate.VIP}
            savings={planOffers.VIP.savings}
            termCredits={planOffers.VIP.termCredits}
            termPrice={planOffers.VIP.termPrice}
          />
          <PlanChoice
            analyticsLocation="pricing_vvip"
            badge={plans[1].badge ?? ""}
            defaultTerm="term"
            external={isExternalHref(href)}
            featured
            href={href}
            label="VVIP"
            monthlyCredits={planOffers.VVIP.monthlyCredits}
            monthlyPrice={planOffers.VVIP.monthlyPrice}
            monthlyVideos={planTwoMinVideoEstimate.VVIP}
            savings={planOffers.VVIP.savings}
            termCredits={planOffers.VVIP.termCredits}
            termPrice={planOffers.VVIP.termPrice}
          />
        </div>
        <h2 className="plan-compare-heading">နှိုင်းယှဉ်ချက်</h2>
        <div className="pricing-compare">
          <table aria-label="VIP and VVIP plan comparison">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                {plans.map((plan) => (
                  <th key={plan.name} scope="col">
                    <span className="pricing-compare__plan">{plan.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planComparisonGroups.map((group) => (
                <Fragment key={group.heading ?? "plan"}>
                  {group.heading ? (
                    <tr className="pricing-compare__group">
                      <th colSpan={3} scope="colgroup">
                        {group.heading}
                      </th>
                    </tr>
                  ) : null}
                  {group.rows.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row">{row.feature}</th>
                      <td>
                        <PlanValue value={row.vip} />
                      </td>
                      <td>
                        <PlanValue value={row.vvip} />
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <p className="pricing-compare__note">
          App ထဲမှာ plan နဲ့ သက်တမ်းကို ပြန်ရွေးပြီး ဝယ်ယူပါ။ Credit rates နဲ့ estimate
          စစ်နည်းကို <Link href="/credit">Credit Rules</Link> မှာ ဖတ်နိုင်ပါတယ်။
        </p>
      </section>
      <ContentCta
        description="165,000 MMK၊ 720 credits။ 12,000 MMK ပိုသက်သာ။ App မှာ ဝယ်ယူပါ။"
        eyebrow={null}
        title="VVIP ၃ လ နဲ့ စတင်ပါ။"
      />
    </ContentPageFrame>
  )
}

function GuideSectionBlock({ section }: { section: GuideSection }) {
  return (
    <section className="guide-section-block">
      <h2>{section.title}</h2>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.bullets ? (
        <ul className="content-bullet-list">
          {section.bullets.map((bullet) => (
            <li key={bullet}>
              <CheckCircle2 aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}

function videoResourcesForSlugs(slugs: string[]) {
  return slugs
    .map((slug) => getVideoResourceBySlug(slug))
    .filter((resource): resource is VideoResource => Boolean(resource))
}

function MovieRecapCaseStudies() {
  return (
    <section
      className="content-page__section creator-results"
      id="creator-results"
    >
      <SectionHeading
        eyebrow="Real creator results"
        title="One Click AI နဲ့ Movie Recap content တင်နေတဲ့ creator တွေရဲ့ အတွေ့အကြုံ"
        description="Real customer feedback, dashboard screenshots နဲ့ creator channels တွေကို အောက်မှာ ကြည့်နိုင်ပါတယ်။"
      />

      <article className="creator-case-study">
        <div className="creator-case-study__copy">
          <p className="eyebrow">Featured VVIP customer story</p>
          <h3>
            Page ဖွင့်ပြီး ၅ ရက်အတွင်း monetization ရခဲ့တဲ့ Aung Khant Kyaw
          </h3>
          <p>
            Aung Khant Kyaw က One Click AI နဲ့ Movie Recap content တွေ
            စတင်တင်ပြီး Page ဖွင့်ပြီး ၅ ရက်အတွင်း monetization ရခဲ့တယ်လို့
            မျှဝေထားပါတယ်။
          </p>
          <dl className="creator-case-study__metrics">
            <div>
              <dt>16 posts</dt>
              <dd>ဒီအကို လာပြောတဲ့အချိန်မှာ Page မှာတင်ထားပြီးဖြစ်ပါတယ်။</dd>
            </div>
            <div>
              <dt>1.2M views</dt>
              <dd>7-day dashboard မှာ မြင်ရတဲ့ result ပါ။</dd>
            </div>
            <div>
              <dt>4,759 followers</dt>
              <dd>7-day dashboard မှာ မြင်ရတဲ့ net followers ပါ။</dd>
            </div>
          </dl>
          <p className="creator-case-study__disclaimer">
            Individual result ပါ။ Result က source, content quality, audience နဲ့
            platform rules ပေါ်မူတည်နိုင်ပါတယ်။
          </p>
        </div>
        <div className="creator-case-study__evidence">
          <Image
            alt="Aung Khant Kyaw's Facebook page with 5.6K followers and 16 posts"
            height={600}
            loading="eager"
            src="/images/customer-results/aung-khant-kyaw-page.webp"
            width={360}
          />
          <Image
            alt="Aung Khant Kyaw's Facebook analytics dashboard showing 1.2M views and 4,759 net followers"
            height={600}
            loading="eager"
            src="/images/customer-results/aung-khant-kyaw-analytics.webp"
            width={360}
          />
        </div>
      </article>

      <div className="creator-case-study-grid">
        <article className="creator-case-study creator-case-study--compact">
          <div className="creator-case-study__copy">
            <p className="eyebrow">Customer monetization story</p>
            <h3>
              Content Monetization ရပြီး TikTok Creator Rewards eligibility
              ပွင့်လာတဲ့ Ko Kyaw
            </h3>
            <p>
              Ko Kyaw က Content Monetization ရခဲ့ပြီး TikTok မှာလည်း Creator
              Rewards Program ပွင့်လာတယ်လို့ မျှဝေထားပါတယ်။
            </p>
            <dl className="creator-case-study__metrics">
              <div>
                <dt>18K followers</dt>
                <dd>
                  Ko Kyaw MM TikTok profile မှာ မြင်ရတဲ့ follower count ပါ။
                </dd>
              </div>
              <div>
                <dt>113.3K likes</dt>
                <dd>
                  Recap video channel profile မှာ မြင်ရတဲ့ total likes ပါ။
                </dd>
              </div>
            </dl>
            <p className="creator-case-study__disclaimer">
              Individual result ပါ။ Monetization eligibility နဲ့ earnings က
              platform rules နဲ့ account performance ပေါ်မူတည်နိုင်ပါတယ်။
            </p>
          </div>
          <div className="creator-case-study__evidence">
            <Image
              alt="Ko Kyaw's TikTok Studio screen showing Creator Rewards Program availability"
              height={600}
              loading="eager"
              src="/images/customer-results/ko-kyaw-creator-rewards.jpg"
              width={360}
            />
            <Image
              alt="Ko Kyaw MM TikTok profile with 18K followers and 113.3K likes"
              height={600}
              loading="eager"
              src="/images/customer-results/ko-kyaw-tiktok-profile.jpg"
              width={360}
            />
          </div>
        </article>

        <article className="creator-case-study creator-case-study--compact">
          <div className="creator-case-study__copy">
            <p className="eyebrow">VVIP customer update</p>
            <h3>
              VVIP upgrade လုပ်ပြီးနောက် Creator Rewards/RPM status
              ပေါ်လာတယ်လို့ မျှဝေထားတဲ့ Sudir Golvash
            </h3>
            <p>
              Sudir Golvash က VVIP upgrade လုပ်ပြီး video 7 ပုဒ်ခန့်တင်ပြီးနောက်
              Creator Rewards screen မှာ dollar/RPM status ပေါ်လာတယ်လို့
              မျှဝေထားပါတယ်။
            </p>
            <p className="creator-case-study__disclaimer">
              Screenshot တွေမှာ Total rewards နဲ့ RPM က $0.00 လို့ ပြထားပါတယ်။
              Earnings နဲ့ eligibility က platform rules နဲ့ account performance
              ပေါ်မူတည်နိုင်ပါတယ်။
            </p>
          </div>
          <div className="creator-case-study__evidence">
            <Image
              alt="Sudir Golvash's Creator Rewards screen with dollar and RPM status"
              height={600}
              loading="eager"
              src="/images/customer-results/sudir-golvash-creator-rewards-1.jpg"
              width={360}
            />
            <Image
              alt="Sudir Golvash's Creator Rewards screen after VVIP upgrade"
              height={600}
              loading="eager"
              src="/images/customer-results/sudir-golvash-creator-rewards-2.jpg"
              width={360}
            />
          </div>
        </article>
      </div>

      <div className="creator-testimonial-grid">
        {movieRecapTestimonials.map((testimonial) => (
          <blockquote className="creator-testimonial" key={testimonial.name}>
            <p>“{testimonial.quote}”</p>
            <cite>— {testimonial.name}, customer review</cite>
          </blockquote>
        ))}
      </div>

      <div className="creator-channel-links">
        <div>
          <p className="eyebrow">Customer channels</p>
          <h3>Creator တွေရဲ့ channel တွေကိုကြည့်ပါ</h3>
        </div>
        <div className="creator-channel-links__list">
          {customerChannels.map((channel) => (
            <ActionLink
              external
              href={channel.href}
              key={channel.href}
              variant="secondary"
            >
              {channel.label}
              <ExternalLink aria-hidden="true" />
            </ActionLink>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GuideArticlePage({ guide }: { guide: GuideArticle }) {
  const resources = videoResourcesForSlugs(guide.videoResourceSlugs ?? [])

  return (
    <ContentPageFrame
      breadcrumbs={[{ label: "Guide", href: "/guide" }, { label: guide.title }]}
      description={guide.description}
      eyebrow={guide.eyebrow}
      title={guide.title}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        author: { "@type": "Organization", name: "AI Code Lab" },
        publisher: { "@type": "Organization", name: "AI Code Lab" },
      }}
    >
      <article className="guide-article">
        <p className="guide-article__intro">{guide.intro}</p>
        {guide.sections.map((section) => (
          <GuideSectionBlock key={section.title} section={section} />
        ))}
      </article>

      {resources.length ? (
        <section className="content-page__section">
          <SectionHeading
            eyebrow="Related resources"
            title="ဒီ guide နဲ့တွဲကြည့်ပါ"
            description="သက်ဆိုင်ရာ walkthrough နဲ့ source guidance ကို ဆက်ကြည့်နိုင်ပါတယ်။"
          />
          <div className="resource-grid">
            {resources.map((resource) => (
              <VideoResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        </section>
      ) : null}

      <RelatedTools slugs={guide.relatedToolSlugs} />
      <ContentCta
        description="Credit rates နဲ့ estimate စစ်ရမယ့်အချက်တွေကို Credit Rules မှာ ဖတ်ပါ။"
        title="အသုံးမပြုခင် rules တွေကို သိထားပါ။"
      />
    </ContentPageFrame>
  )
}

export function ToolDetailPage({ tool }: { tool: Tool }) {
  if (tool.availability === "coming-soon") {
    return (
      <ContentPageFrame
        breadcrumbs={[{ label: "Tools", href: "/tools" }, { label: tool.name }]}
        title={tool.label}
        eyebrow="မကြာမီ"
        description={tool.description}
      >
        <section className="content-page__section">
          <SectionHeading
            title="လက်ရှိ အသုံးပြုနိုင်တဲ့ feature မဟုတ်သေးပါ။"
            description={tool.purpose}
          />
          <p>
            ရရှိနိုင်မယ့်ရက်ကို မကြေညာသေးပါ။ လက်ရှိအသုံးပြုနိုင်တဲ့ tools တွေကို
            အရင်လေ့လာနိုင်ပါတယ်။
          </p>
          <ActionLink href="/tools" variant="secondary">
            လက်ရှိ Tools ကြည့်ရန်
            <ArrowRight aria-hidden="true" />
          </ActionLink>
        </section>
      </ContentPageFrame>
    )
  }

  const resources = getVideoResourcesForTool(tool.slug)
  const examples = getExamplesForTool(tool.slug)
  const planHref = getPlanCtaHref()

  return (
    <ContentPageFrame
      breadcrumbs={[{ label: "Tools", href: "/tools" }, { label: tool.name }]}
      description={tool.description}
      eyebrow={tool.name}
      heroAction={
        tool.slug === "movie-recap" ? (
          <div className="content-page__hero-action">
            <ActionLink
              analyticsLocation="movie_recap"
              external={isExternalHref(planHref)}
              href={planHref}
            >
              {planCtaLabels.vvip}
              <ArrowRight aria-hidden="true" />
            </ActionLink>
            <span>app.oneclickai.studio မှာ ဝယ်ယူလို့ရပါပြီ။</span>
          </div>
        ) : undefined
      }
      heroAside={
        tool.slug === "movie-recap" ? (
          <figure className="content-page__hero-visual">
            <Image
              alt="A cinematic source transforming into a Burmese movie recap with narration and subtitle cues"
              height={1402}
              priority
              sizes="(max-width: 52rem) 100vw, 40vw"
              src="/images/movie-recap-concept.png"
              width={1122}
            />
          </figure>
        ) : undefined
      }
      title={tool.label}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: `One Click AI ${tool.name}`,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        description: tool.description,
      }}
    >
      {tool.slug === "movie-recap" ? <MovieRecapCaseStudies /> : null}

      <section className="content-page__section content-page__section--split">
        <div>
          <p className="eyebrow">Best for</p>
          <h2>ဘယ်သူတွေအတွက်လဲ?</h2>
          <p>{tool.audience}</p>
        </div>
        <div>
          <p className="eyebrow">Purpose</p>
          <h2>ဘာလုပ်ပေးလဲ?</h2>
          <p className="content-card__eyebrow">{tool.access}</p>
          <p>{tool.purpose}</p>
        </div>
      </section>

      <section className="content-page__section">
        <SectionHeading
          eyebrow="Quick start"
          title="ဒီလိုစတင်ပါ"
          description="Source တင်တာကနေ output review လုပ်တာအထိ အခြေခံအဆင့်တွေကို လိုက်လုပ်ပါ။"
        />
        <ol className="content-step-list">
          {tool.workflow.map((step, index) => (
            <li key={step}>
              <span>0{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="content-page__section content-page__section--split">
        <div>
          <p className="eyebrow">Source guidance</p>
          <h2>Source ကို ဒီလိုရွေးပါ</h2>
          <ul className="content-bullet-list">
            {tool.sourceGuidance.map((item) => (
              <li key={item}>
                <CheckCircle2 aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Expected output</p>
          <h2>ဘာတွေ ရနိုင်လဲ?</h2>
          <ul className="content-bullet-list">
            {tool.outputs.map((output) => (
              <li key={output}>
                <CheckCircle2 aria-hidden="true" />
                <span>{output}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {resources.length ? (
        <section className="content-page__section">
          <SectionHeading
            eyebrow="Watch and learn"
            title="အသုံးပြုပုံကို video နဲ့ကြည့်ပါ"
            description="ဒီ tool အတွက် ရရှိထားတဲ့ walkthrough နဲ့ quality guide resource တွေကို ကြည့်နိုင်ပါတယ်။"
          />
          <div className="resource-grid">
            {resources.map((resource) => (
              <VideoResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        </section>
      ) : null}

      {examples.some((example) => example.imageSrc) ? (
        <section className="content-page__section">
          <SectionHeading
            eyebrow="Example slot"
            title="Real output ကို ဒီနေရာမှာ ထည့်ပါမယ်"
            description="Approved screenshot သို့မဟုတ် output file ရလာတဲ့အခါ ဒီ media slot ကို ဖြည့်ပါမယ်။"
          />
          <div className="example-grid example-grid--single">
            {examples.map((example) => (
              <ExampleCard example={example} key={example.slug} />
            ))}
          </div>
        </section>
      ) : null}

      <RelatedGuides slugs={tool.relatedGuideSlugs} />
      <ContentCta
        description="Source နဲ့ output ရည်ရွယ်ချက်ကို support မှာ ပြောပြီး သင့်တော်တဲ့ plan ကို မေးနိုင်ပါတယ်။"
        title={`${tool.name} workflow ကို စတင်ကြည့်ပါ။`}
      />
    </ContentPageFrame>
  )
}
