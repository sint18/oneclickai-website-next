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

import { GaClickLink } from "@/components/marketing/ga-click-link"
import type { GaClickLocation } from "@/lib/analytics"
import {
  type FAQItem,
  type PricingPlan,
  type SupportChannel,
  type Tool,
  getPlanCtaHref,
  planCtaLabels,
  getSupportUrl,
} from "@/lib/site-content"
import { cn } from "@/lib/utils"

type ActionLinkProps = {
  href: string
  children: ReactNode
  variant?: "primary" | "secondary" | "light" | "text"
  className?: string
  external?: boolean
  analyticsLocation?: GaClickLocation
}

export function ActionLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  analyticsLocation,
}: ActionLinkProps) {
  const classes = cn("action-link", `action-link--${variant}`, className)

  if (external) {
    return (
      <GaClickLink
        analyticsLocation={analyticsLocation}
        className={classes}
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {children}
      </GaClickLink>
    )
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  )
}

export function SupportLink({
  analyticsLocation,
  channel,
  children,
  className,
  variant = "light",
}: {
  analyticsLocation?: GaClickLocation
  channel: SupportChannel
  children: ReactNode
  className?: string
  variant?: ActionLinkProps["variant"]
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
    <ActionLink
      analyticsLocation={analyticsLocation}
      className={className}
      external
      href={href}
      variant={variant}
    >
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
  const isFeatured = tool.slug === "movie-recap"

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className={cn("tool-card", isFeatured && "tool-card--featured")}
    >
      <div className="tool-card__icon" aria-hidden="true">
        <Icon />
      </div>
      <div>
        <div className="tool-card__meta">
          <span className="tool-card__name">{tool.name}</span>
          <span className="tool-card__badge">{tool.access}</span>
          {tool.availability === "coming-soon" ? (
            <span className="tool-card__badge tool-card__badge--coming-soon">
              မကြာမီ
            </span>
          ) : null}
        </div>
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
        analyticsLocation={isFeatured ? "pricing_vvip" : "pricing_vip"}
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
