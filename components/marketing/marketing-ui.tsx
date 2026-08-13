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
  return (
    <a
      className={cn("action-link", `action-link--${variant}`, className)}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
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
    <article className={cn("tool-card", `tool-card--${tool.accent}`)}>
      <div className="tool-card__icon" aria-hidden="true">
        <Icon />
      </div>
      <div>
        <p className="tool-card__label">
          {tool.name} · {tool.access}
        </p>
        <h3>{tool.label}</h3>
        <p>{tool.description}</p>
      </div>
      <span className="tool-card__arrow" aria-hidden="true">
        <ArrowUpRight />
      </span>
    </article>
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
        {isFeatured ? "VVIP Plan ဝယ်ရန်" : "VIP plan ကို မေးရန်"}
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
