import type { ReactNode } from "react"

import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"

import { ActionLink } from "@/components/marketing/marketing-ui"
import { SiteFooter } from "@/components/marketing/site-footer"
import { SiteHeader } from "@/components/marketing/site-header"
import { siteConfig } from "@/lib/site-content"

export type PolicySection = {
  title: string
  body: ReactNode
  bullets?: string[]
}

export function PolicyPage({
  eyebrow,
  title,
  description,
  sections,
  callout,
}: {
  eyebrow: string
  title: string
  description: string
  sections: PolicySection[]
  callout?: ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <main className="policy-page">
        <div className="site-shell">
          <div className="policy-page__back">
            <ActionLink href="/" variant="text">
              <ArrowLeft aria-hidden="true" />
              One Click AI home
            </ActionLink>
          </div>
          <header className="policy-page__header">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{description}</p>
            <span className="policy-page__meta">{siteConfig.company} · Public information</span>
          </header>
          <div className="policy-page__body">
            {sections.map((section) => (
              <section className="policy-section" key={section.title}>
                <h2>{section.title}</h2>
                <div className="policy-section__body">{section.body}</div>
                {section.bullets ? (
                  <ul className="policy-bullets">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>
                        <CheckCircle2 aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
          {callout ? <div className="policy-page__callout">{callout}</div> : null}
          <div className="policy-page__next">
            <ActionLink href="/" variant="secondary">
              Back to One Click AI
              <ArrowRight aria-hidden="true" />
            </ActionLink>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
