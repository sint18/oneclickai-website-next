import Image from "next/image"
import Link from "next/link"

import { SupportIcon, SupportLink } from "@/components/marketing/marketing-ui"
import { siteConfig } from "@/lib/site-content"

export function SiteFooter() {
  return (
    <footer className="site-footer" id="support">
      <div className="site-shell">
        <div className="site-footer__cta">
          <div>
            <p className="eyebrow eyebrow--light">Ready when you are</p>
            <h2>Content ထုတ်တဲ့အလုပ်ကို တစ်နေရာတည်းကနေ စလိုက်ပါ။</h2>
            <p>
              ကိုယ်လုပ်မယ့် content type နဲ့ တစ်နေ့ဘယ်နှစ်ပုဒ်လောက် ထုတ်ချင်လဲ
              ပြောပါ။ ကိုယ့် workflow နဲ့ကိုက်မယ့် plan ကို support က
              ကူညီရွေးပေးနိုင်ပါတယ်။
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
                <span className="brand-lockup__company">
                  by {siteConfig.company}
                </span>
              </span>
            </Link>
            <p>{siteConfig.description}</p>
          </div>

          <div className="site-footer__links">
            <div>
              <p className="site-footer__label">Explore</p>
              <Link href="/#product">Product</Link>
              <Link href="/tools">Tools</Link>
              <Link href="/guide">Guide</Link>
              <Link href="/examples">Examples</Link>
              <Link href="/#pricing">Pricing</Link>
              <Link href="/#faq">FAQ</Link>
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
          <span>Burmese-first creator tool.</span>
        </div>
      </div>
    </footer>
  )
}
