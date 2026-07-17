import Image from "next/image"
import Link from "next/link"

import { ActionLink } from "@/components/marketing/marketing-ui"
import { navigation, siteConfig } from "@/lib/site-content"

export function SiteHeader() {
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
            <span className="brand-lockup__company">by {siteConfig.company}</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="site-header__login" href="#support">
            Support
          </a>
          <ActionLink href="#pricing" variant="primary">
            Plan ဝယ်ရန်
          </ActionLink>
        </div>
      </div>
    </header>
  )
}
