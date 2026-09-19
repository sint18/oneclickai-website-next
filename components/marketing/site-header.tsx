import Image from "next/image"
import Link from "next/link"

import { GaClickLink } from "@/components/marketing/ga-click-link"
import { MobileNavigation } from "@/components/marketing/mobile-navigation"
import { ActionLink } from "@/components/marketing/marketing-ui"
import {
  getPlanCtaHref,
  navigation,
  planCtaLabels,
  siteConfig,
} from "@/lib/site-content"

export function SiteHeader() {
  const planHref = getPlanCtaHref()

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        အဓိကအကြောင်းအရာသို့ ကျော်ရန်
      </a>
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
          <GaClickLink
            analyticsLocation="header_app"
            className="site-header__app-link"
            href={siteConfig.appUrl}
          >
            App ဝင်ရန်
          </GaClickLink>
          <ActionLink
            analyticsLocation="header_vvip"
            external={planHref.startsWith("http")}
            href={planHref}
            variant="primary"
          >
            {planCtaLabels.vvip}
          </ActionLink>
        </div>
        <MobileNavigation />
      </div>
    </header>
  )
}
