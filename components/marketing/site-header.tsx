import Image from "next/image"
import Link from "next/link"

import { ActionLink } from "@/components/marketing/marketing-ui"
import { getPlanCtaHref, navigation, siteConfig } from "@/lib/site-content"

export function SiteHeader() {
  const planHref = getPlanCtaHref()

  return (
    <header className="site-header">
      <div className="site-shell site-header__inner">
        <Link className="brand-lockup" href="/" aria-label="One Click AI home">
          <Image
            alt=""
            className="brand-lockup__mark"
            height={44}
            priority
            src="/logo.svg"
            width={39}
          />
          <span className="brand-lockup__copy">
            <span className="brand-lockup__name">One Click AI</span>
            <span className="brand-lockup__company">
              by {siteConfig.company}
            </span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link className="site-header__login" href="/#support">
            Support
          </Link>
          <a className="site-header__app-link" href={siteConfig.appUrl}>
            App ဝင်ရန်
          </a>
          <ActionLink
            external={planHref.startsWith("http")}
            href={planHref}
            variant="primary"
          >
            VVIP ဝယ်ရန်
          </ActionLink>
        </div>
      </div>
    </header>
  )
}
