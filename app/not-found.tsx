import Link from "next/link"

import { SiteFooter } from "@/components/marketing/site-footer"
import { SiteHeader } from "@/components/marketing/site-header"

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="error-page">
        <div className="site-shell error-page__inner">
          <p className="eyebrow">404 · Page not found</p>
          <h1>ရှာနေတဲ့ page ကို မတွေ့ပါဘူး။</h1>
          <p>
            Link မှားနေတာဖြစ်နိုင်ပါတယ်။ Home page မှာ Movie Recap workflow
            ကိုပြန်ကြည့်ပါ၊ သို့မဟုတ် tools အားလုံးကိုကြည့်နိုင်ပါတယ်။
          </p>
          <div className="error-page__actions">
            <Link className="action-link action-link--primary" href="/">
              Home သို့ ပြန်သွားရန်
            </Link>
            <Link className="action-link action-link--secondary" href="/tools">
              Tools ကြည့်ရန်
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
