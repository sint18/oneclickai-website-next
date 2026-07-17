import Image from "next/image"
import Link from "next/link"

import {
  SupportIcon,
  SupportLink,
} from "@/components/marketing/marketing-ui"
import { siteConfig } from "@/lib/site-content"

export function SiteFooter() {
  return (
    <footer className="site-footer" id="support">
      <div className="site-shell">
        <div className="site-footer__cta">
          <div>
            <p className="eyebrow eyebrow--light">Ready when you are</p>
            <h2>Content Run ဖို့ workflow ကို လျှော့လိုက်ပါ။</h2>
            <p>
              ကိုယ်လုပ်မယ့် content type နဲ့ တစ်နေ့ဘယ်နှစ်ပုဒ်ထုတ်မလဲဆိုတာ ပြောပြီး
              သင့်တော်တဲ့ plan ကို အကြံပေးခိုင်းနိုင်ပါတယ်။
            </p>
          </div>
          <div className="site-footer__support-links">
            <SupportLink channel="messenger">
              <SupportIcon channel="messenger" />
              Messenger မှာမေးရန်
            </SupportLink>
            <SupportLink channel="telegram">
              <SupportIcon channel="telegram" />
              Telegram မှာမေးရန်
            </SupportLink>
          </div>
        </div>

        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link className="brand-lockup brand-lockup--footer" href="/">
              <Image
                alt=""
                className="brand-lockup__mark"
                height={44}
                src="/logo.svg"
                width={39}
              />
              <span className="brand-lockup__copy">
                <span className="brand-lockup__name">{siteConfig.name}</span>
                <span className="brand-lockup__company">by {siteConfig.company}</span>
              </span>
            </Link>
            <p>{siteConfig.description}</p>
          </div>

          <div className="site-footer__links">
            <div>
              <p className="site-footer__label">Explore</p>
              <a href="#product">Product</a>
              <a href="#tools">Tools</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <p className="site-footer__label">Policies</p>
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/credit">Credit Rules</Link>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 {siteConfig.company}. All rights reserved.</span>
          <span>Burmese-first creator workflow.</span>
        </div>
      </div>
    </footer>
  )
}
