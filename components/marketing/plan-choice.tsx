"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { ActionLink } from "@/components/marketing/marketing-ui"
import type { GaClickLocation } from "@/lib/analytics"
import { cn } from "@/lib/utils"

type Term = "month" | "term"

export function PlanChoice({
  analyticsLocation,
  badge,
  defaultTerm,
  external,
  featured = false,
  href,
  label,
  monthlyCredits,
  monthlyPrice,
  monthlyVideos,
  savings,
  termCredits,
  termPrice,
}: {
  analyticsLocation: GaClickLocation
  badge: string
  defaultTerm: Term
  external: boolean
  featured?: boolean
  href: string
  label: string
  monthlyCredits: number
  monthlyPrice: string
  monthlyVideos: number
  savings: string
  termCredits: number
  termPrice: string
}) {
  const [term, setTerm] = useState<Term>(defaultTerm)
  const [changed, setChanged] = useState(false)
  const selected = term === "month"
  const price = selected ? monthlyPrice : termPrice
  const credits = selected ? monthlyCredits : termCredits
  const videos = selected ? monthlyVideos : monthlyVideos * 3
  const purchaseUrl = new URL(href)
  purchaseUrl.searchParams.set("plan", label.toLowerCase())
  purchaseUrl.searchParams.set("term", selected ? "monthly" : "3months")

  return (
    <article className={cn("plan-choice", featured && "plan-choice--featured")}>
      <h2>{label}</h2>
      <p className="plan-choice__who">{badge}</p>
      <fieldset className="plan-choice__switch">
        <legend className="plan-choice__legend">{label} သက်တမ်း</legend>
        {(
          [
            ["month", "၁ လစာ"],
            ["term", "၃ လ"],
          ] as const
        ).map(([value, text]) => (
          <label key={value}>
            <input
              checked={term === value}
              name={`${label}-term`}
              onChange={() => {
                setChanged(true)
                setTerm(value)
              }}
              type="radio"
            />
            {text}
          </label>
        ))}
      </fieldset>
      <div
        aria-live="polite"
        className={cn(
          "plan-choice__figures",
          changed && "plan-choice__figures--in"
        )}
        key={term}
      >
        <p className="plan-choice__price">
          <span className="plan-choice__amount">{price}</span>
          <span className="plan-choice__currency">MMK</span>
        </p>
        <p className="plan-choice__credits">{credits} credits</p>
        {term === "term" ? (
          <p className="plan-choice__save">{savings} MMK ပိုသက်သာ</p>
        ) : null}
      </div>
      <p className="plan-choice__videos">
        2 min စာ source video ဆိုရင် ခန့်မှန်းခြေ {videos} ပုဒ် ပြုလုပ်နိုင်ပါတယ်
      </p>
      <ActionLink
        analyticsLocation={analyticsLocation}
        className="plan-choice__cta"
        external={external}
        href={purchaseUrl.toString()}
        variant={featured ? "primary" : "secondary"}
      >
        {label} ကို App မှာ ဝယ်ရန်
        {featured ? <ArrowRight aria-hidden="true" /> : null}
      </ActionLink>
    </article>
  )
}
