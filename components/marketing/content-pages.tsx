import type { ReactNode } from "react"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  PlayCircle,
} from "lucide-react"

import { SiteFooter } from "@/components/marketing/site-footer"
import { SiteHeader } from "@/components/marketing/site-header"
import {
  ActionLink,
  MediaSlot,
  SectionHeading,
  ToolIcon,
} from "@/components/marketing/marketing-ui"
import {
  type ExampleItem,
  type GuideArticle,
  type GuideSection,
  type Tool,
  type VideoResource,
  customerChannels,
  exampleItems,
  getExamplesForTool,
  getGuideBySlug,
  getPlanCtaHref,
  getToolBySlug,
  getVideoResourceBySlug,
  getVideoResourcesForTool,
  guides,
  hasApprovedExampleAssets,
  movieRecapTestimonials,
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
}: {
  breadcrumbs: BreadcrumbItem[]
  children: ReactNode
  description: string
  eyebrow: string
  heroAction?: ReactNode
  heroAside?: ReactNode
  title: string
  structuredData?: Record<string, unknown>
}) {
  return (
    <>
      <SiteHeader />
      <main className="content-page">
        <div className="site-shell">
          <Breadcrumbs items={breadcrumbs} />
          <header
            className={cn(
              "content-page__hero",
              heroAside && "content-page__hero--split"
            )}
          >
            <div>
              <p className="eyebrow">{eyebrow}</p>
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
        <ActionLink external href={availableHref} variant="secondary">
          Facebook မှာကြည့်ရန်
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

function ToolDirectoryCard({ tool }: { tool: Tool }) {
  return (
    <article className={cn("content-card", `content-card--${tool.accent}`)}>
      <span className="content-card__icon" aria-hidden="true">
        <ToolIcon icon={tool.icon} />
      </span>
      <p className="content-card__eyebrow">
        {tool.name} · {tool.access}
      </p>
      <h2>{tool.label}</h2>
      <p>{tool.description}</p>
      <Link className="content-card__link" href={`/tools/${tool.slug}`}>
        Tool အကြောင်းကြည့်ရန်
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
      <div className="content-card-grid content-card-grid--three">
        {relatedTools.map((tool) => (
          <ToolDirectoryCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  )
}

function ContentCta({
  description = "ကိုယ့် content type နဲ့ကိုက်တဲ့ workflow ကို One Click AI မှာ စတင်ကြည့်ပါ။",
  title = "ကိုယ့် workflow ကို စတင်ကြည့်ပါ။",
}: {
  description?: string
  title?: string
}) {
  const href = getPlanCtaHref()

  return (
    <section className="content-page__cta">
      <div>
        <p className="eyebrow eyebrow--light">VVIP နဲ့ Movie Recap စတင်ရန်</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          Payment နဲ့ account activation ကို Messenger/Telegram support က
          ကူညီပေးပါမယ်။
        </p>
      </div>
      <ActionLink external={isExternalHref(href)} href={href} variant="light">
        VVIP Plan ဝယ်ရန်
        <ArrowRight aria-hidden="true" />
      </ActionLink>
    </section>
  )
}

export function ExamplesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "One Click AI Examples",
    description:
      "One Click AI tools အတွက် output example နဲ့ real product media ထည့်ရန်နေရာများ။",
  }

  return (
    <ContentPageFrame
      breadcrumbs={[{ label: "Examples" }]}
      description="Tool တစ်ခုချင်းစီက ဘယ်လို source နဲ့ output workflow အတွက် သင့်တော်လဲဆိုတာ ကြည့်နိုင်ပါတယ်။ Approved product screenshots နဲ့ output files တွေကို ဒီနေရာမှာ ထည့်သွားပါမယ်။"
      eyebrow="Examples"
      heroAside={
        <MediaSlot
          alt="One Click AI examples gallery featured media"
          className="content-page__hero-media"
          detail="Approved dashboard or output gallery image ထည့်ရန်နေရာ။"
          eyebrow="Featured example slot"
          title="Show the work, not a promise"
        />
      }
      structuredData={structuredData}
      title="Output ကို မျက်မြင်ကြည့်ပါ။"
    >
      <section className="content-page__notice" aria-live="polite">
        <p className="eyebrow">Real examples coming soon</p>
        <p>
          အခုမြင်ရတဲ့နေရာတွေက approved product screenshots နဲ့ output files
          ထည့်ဖို့ media slots တွေပါ။ Real asset မရသေးခင် fabricated proof
          မထည့်ထားပါဘူး။
        </p>
      </section>

      <section className="content-page__section">
        <SectionHeading
          eyebrow="By tool"
          title="ကိုယ့် content နဲ့ကိုက်တဲ့ example ကို ရွေးပါ"
          description="Source type, output type နဲ့ related tool page ကို တစ်နေရာတည်းမှာ ကြည့်ပါ။"
        />
        <div className="example-grid">
          {exampleItems.map((example) => (
            <ExampleCard example={example} key={example.slug} />
          ))}
        </div>
      </section>

      <ContentCta
        description={
          hasApprovedExampleAssets
            ? "Real examples ကို ကြည့်ပြီး ကိုယ့် content နဲ့ကိုက်တဲ့ tool ကို စတင်ရွေးပါ။"
            : "Real output examples မရသေးခင် ကိုယ့် content နဲ့ကိုက်တဲ့ tool နဲ့ guide ကို အရင်ကြည့်ပါ။"
        }
        title="Tool နဲ့ guide ကို အရင်လေ့လာကြည့်ပါ။"
      />
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
      description="Tool ရွေးတာ၊ source ပြင်တာ၊ ATS mode သတ်မှတ်တာနဲ့ output review လုပ်တာတွေကို beginner-friendly အနေနဲ့ ဖတ်နိုင်ပါတယ်။"
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
        <div className="content-card-grid content-card-grid--four">
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
        description="အသုံးပြုပုံနဲ့အတူ credit rates, daily limits နဲ့ estimate စစ်ရမယ့်အချက်တွေကိုလည်း ကြိုဖတ်ထားပါ။"
        title="အသုံးပြုနည်းသိပြီးမှ plan ရွေးပါ။"
      />
    </ContentPageFrame>
  )
}

export function ToolsIndexPage() {
  return (
    <ContentPageFrame
      breadcrumbs={[{ label: "Tools" }]}
      description="Movie Recap, Football, Dhamma, Shorts, Knowledge Video, Hook Maker, Thumbnail Generator, Voice Cloning နဲ့ Video Splitter ထဲက ကိုယ့် source နဲ့ content ရည်ရွယ်ချက်နဲ့ကိုက်တဲ့ tool ကို ရွေးပါ။"
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
        <div className="content-card-grid content-card-grid--three">
          {tools.map((tool) => (
            <ToolDirectoryCard key={tool.slug} tool={tool} />
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
        description="Credit rates, daily limits နဲ့ estimate စစ်ရမယ့်အချက်တွေကို Credit Rules မှာ ဖတ်ပါ။"
        title="အသုံးမပြုခင် rules တွေကို သိထားပါ။"
      />
    </ContentPageFrame>
  )
}

export function ToolDetailPage({ tool }: { tool: Tool }) {
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
            <ActionLink external={isExternalHref(planHref)} href={planHref}>
              VVIP Plan ဝယ်ရန်
              <ArrowRight aria-hidden="true" />
            </ActionLink>
            <span>Messenger/Telegram ကနေ ဝယ်ယူလို့ရပါပြီ။</span>
          </div>
        ) : undefined
      }
      heroAside={
        tool.slug === "movie-recap" ? (
          <MediaSlot
            alt={`${tool.name} product screenshot or output example`}
            className={`content-page__hero-media content-page__hero-media--${tool.accent}`}
            detail="Approved dashboard or output screenshot ထည့်ရန်နေရာ။"
            eyebrow={`${tool.name} media slot`}
            title={`${tool.name} in use`}
          />
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
