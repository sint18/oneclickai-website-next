import type { ReactNode } from "react"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  Check,
  Film,
  ImageIcon,
  Leaf,
  MessageCircle,
  Scissors,
  Send,
  Sparkles,
  Trophy,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  type FAQItem,
  type PricingPlan,
  type SupportChannel,
  type Tool,
  getPlanCtaHref,
  planCtaLabels,
  recapCreditExample,
  getSupportUrl,
} from "@/lib/site-content"

type ActionLinkProps = {
  href: string
  children: ReactNode
  variant?: "primary" | "secondary" | "light" | "text"
  className?: string
  external?: boolean
}

export function ActionLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ActionLinkProps) {
  const classes = cn("action-link", `action-link--${variant}`, className)

  if (external) {
    return (
      <a className={classes} href={href} rel="noreferrer" target="_blank">
        {children}
      </a>
    )
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  )
}

export function SupportLink({
  channel,
  children,
  className,
}: {
  channel: SupportChannel
  children: ReactNode
  className?: string
}) {
  const href = getSupportUrl(channel)

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={cn("action-link", "action-link--muted", className)}
        title="Support link will be connected before launch"
      >
        {children}
      </span>
    )
  }

  return (
    <ActionLink className={className} external href={href} variant="light">
      {children}
    </ActionLink>
  )
}

const toolIcons: Record<Tool["icon"], LucideIcon> = {
  film: Film,
  football: Trophy,
  image: ImageIcon,
  leaf: Leaf,
  scissors: Scissors,
  sparkles: Sparkles,
}

export function ToolIcon({ icon }: { icon: Tool["icon"] }) {
  const Icon = toolIcons[icon]
  return <Icon aria-hidden="true" />
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}) {
  return (
    <div className={cn("section-heading", `section-heading--${align}`)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? (
        <p className="section-heading__description">{description}</p>
      ) : null}
    </div>
  )
}

type VideoSlotProps = {
  caption: string
  className?: string
  src: string
  title: string
  poster?: string
}

export function VideoSlot({
  caption,
  className,
  src,
  title,
  poster,
}: VideoSlotProps) {
  return (
    <figure className={cn("video-slot", className)}>
      <div className="video-slot__surface">
        <video
          className="video-slot__player"
          controls
          playsInline
          preload="none"
          poster={poster}
          title={title}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

type MediaSlotProps = {
  alt: string
  detail: string
  eyebrow: string
  src?: string | null
  title: string
  ratio?: "wide" | "tall"
  className?: string
}

export function MediaSlot({
  alt,
  detail,
  eyebrow,
  src,
  title,
  ratio = "wide",
  className,
}: MediaSlotProps) {
  return (
    <figure className={cn("media-slot", `media-slot--${ratio}`, className)}>
      <div className="media-slot__surface">
        {src ? (
          <Image
            alt={alt}
            className="media-slot__image"
            fill
            sizes="(max-width: 52rem) 100vw, 55vw"
            src={src}
          />
        ) : (
          <div className="media-slot__placeholder">
            <ImageIcon aria-hidden="true" />
            <span className="media-slot__eyebrow">{eyebrow}</span>
            <strong>{title}</strong>
            <p>{detail}</p>
          </div>
        )}
      </div>
      <figcaption>{src ? alt : "Real product asset slot"}</figcaption>
    </figure>
  )
}

export function ToolCard({ tool }: { tool: Tool }) {
  const Icon = toolIcons[tool.icon]

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className={cn("tool-card", `tool-card--${tool.accent}`)}
    >
      <div className="tool-card__icon" aria-hidden="true">
        <Icon />
      </div>
      <div>
        <p className="tool-card__label">
          {tool.name} · {tool.access}
          {tool.availability === "coming-soon" ? " · မကြာမီ" : ""}
        </p>
        <h3>{tool.label}</h3>
        <p>{tool.description}</p>
      </div>
      <span className="tool-card__arrow" aria-hidden="true">
        <ArrowUpRight />
      </span>
    </Link>
  )
}

export function PricingCard({ plan }: { plan: PricingPlan }) {
  const isFeatured = plan.name === "VVIP"
  const href = getPlanCtaHref()

  return (
    <article
      className={cn("pricing-card", isFeatured && "pricing-card--featured")}
    >
      <div className="pricing-card__topline">
        <span className="pricing-card__name">{plan.name}</span>
        {plan.badge ? (
          <span className="pricing-card__badge">{plan.badge}</span>
        ) : null}
      </div>
      <p className="pricing-card__price">{plan.price}</p>
      <p className="pricing-card__period">တစ်လစာ</p>
      <p className="pricing-card__description">{plan.description}</p>
      {plan.valueSummary ? (
        <p className="pricing-card__value-summary">{plan.valueSummary}</p>
      ) : null}
      <ul className="check-list">
        {plan.features.map((feature) => (
          <li key={feature}>
            <Check aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <ActionLink
        className="pricing-card__cta"
        external={href.startsWith("http")}
        href={href}
        variant={isFeatured ? "primary" : "secondary"}
      >
        {isFeatured ? planCtaLabels.vvip : planCtaLabels.vip}
      </ActionLink>
      {isFeatured ? (
        <Link
          className="pricing-card__proof-link"
          href="/tools/movie-recap#creator-results"
        >
          Movie Recap creator results ကြည့်ရန်
          <ArrowUpRight aria-hidden="true" />
        </Link>
      ) : null}
    </article>
  )
}

export function FAQList({ items }: { items: FAQItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details className="faq-item" key={item.question} open={index === 0}>
          <summary>
            <span>{item.question}</span>
            <span className="faq-item__marker" aria-hidden="true" />
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

export function SupportIcon({ channel }: { channel: SupportChannel }) {
  const Icon = channel === "messenger" ? MessageCircle : Send
  return <Icon aria-hidden="true" />
}

export function CreditExamples() {
  const { sourceMinutes, standardPerMinute, proPerMinute, monthlyCredits } =
    recapCreditExample
  const standardCost = sourceMinutes * standardPerMinute
  const proCost = sourceMinutes * proPerMinute
  return (
    <div className="credit-examples">
      <h3>{sourceMinutes} မိနစ် source တစ်ပုဒ်အတွက် credit ဘယ်လောက်လိုမလဲ?</h3>
      <p>
        ATS Standard မှာ ခန့်မှန်း {standardCost} credits၊ ATS Pro မှာ ခန့်မှန်း{" "}
        {proCost} credits သုံးပါတယ်။
      </p>
      <dl className="credit-examples__plans">
        {Object.entries(monthlyCredits).map(([name, credits]) => (
          <div key={name}>
            <dt>
              {name} · {credits} monthly credits
            </dt>
            <dd>
              Standard ခန့်မှန်း {Math.floor(credits / standardCost)} ပုဒ် / Pro
              ခန့်မှန်း {Math.floor(credits / proCost)} ပုဒ်
            </dd>
          </div>
        ))}
      </dl>
      <p>
        Credits အားလုံးကို ဒီလို source တွေအတွက်ပဲ သုံးထားတယ်လို့ ယူဆထားတဲ့
        နမူနာပါ။ လက်ရှိဖော်ပြထားတဲ့ ခန့်မှန်းနှုန်းထားအပေါ် အခြေခံထားပြီး
        အမှန်တကယ်ကုန်မယ့် credit ကို app ရဲ့ generation estimate မှာ စစ်ပါ။{" "}
        <Link href="/credit">Credit Rules ဖတ်ရန်</Link>
      </p>
    </div>
  )
}
