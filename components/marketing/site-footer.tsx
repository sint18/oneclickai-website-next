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
            <p className="eyebrow eyebrow--light">
              Movie Recap workflow ကို စတင်ဖို့ ready ဖြစ်ပြီလား
            </p>
            <h2>
              VVIP နဲ့ Movie Recap content တွေကို အချိန်တိုအတွင်း ဖန်တီးပါ။
            </h2>
            <p>
              ကိုယ်လုပ်မယ့် content type နဲ့ source video ဘယ်လောက်ရှည်လဲ ပြောပါ။
              VVIP plan, payment နဲ့ account activation ကို support က
              ကူညီပေးပါမယ်။
            </p>
          </div>
          <div className="site-footer__support-links">
            <SupportLink channel="messenger">
              <SupportIcon channel="messenger" />
              Messenger မှာ VVIP ဝယ်ရန်
            </SupportLink>
            <SupportLink channel="telegram">
              <SupportIcon channel="telegram" />
              Telegram မှာ VVIP ဝယ်ရန်
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
              <Link href="/#pricing">Pricing</Link>
              <Link href="/#faq">FAQ</Link>
            </div>
            <div>
              <p className="site-footer__label">Policies</p>
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/credit">Credit Rules</Link>
            </div>
            <div>
              <p className="site-footer__label">Follow AI Code Lab</p>
              {siteConfig.social.map((social) => (
                <a
                  href={social.href}
                  key={social.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {social.label}
                </a>
              ))}
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
