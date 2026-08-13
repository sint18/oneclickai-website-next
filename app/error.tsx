"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="error-page error-page--recovery">
      <div className="site-shell error-page__inner">
        <p className="eyebrow">Temporary issue</p>
        <h1>ခဏလေး အဆင်မပြေဖြစ်သွားပါတယ်။</h1>
        <p>
          Page ကို ပြန်စမ်းကြည့်ပါ။ အဆင်မပြေသေးရင် Home page ကနေ
          ပြန်စတင်နိုင်ပါတယ်။
        </p>
        <div className="error-page__actions">
          <button
            className="action-link action-link--primary"
            onClick={unstable_retry}
            type="button"
          >
            ထပ်စမ်းရန်
          </button>
          <Link className="action-link action-link--secondary" href="/">
            Home သို့ ပြန်သွားရန်
          </Link>
        </div>
      </div>
    </main>
  )
}
