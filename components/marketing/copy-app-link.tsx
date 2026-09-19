"use client"

import { useState } from "react"

import { siteConfig } from "@/lib/site-content"
import { cn } from "@/lib/utils"

export function CopyAppLink({
  className,
  variant = "secondary",
}: {
  className?: string
  variant?: "secondary" | "text"
}) {
  const [copied, setCopied] = useState(false)

  async function copyLink() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(siteConfig.appUrl)
      } else {
        throw new Error("clipboard unavailable")
      }
    } catch {
      const input = document.createElement("textarea")
      input.value = siteConfig.appUrl
      input.setAttribute("readonly", "")
      document.body.append(input)
      input.select()
      const copiedWithExecCommand = document.execCommand("copy")
      input.remove()

      if (!copiedWithExecCommand) {
        return
      }
    }

    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      className={cn("action-link", `action-link--${variant}`, className)}
      onClick={copyLink}
      type="button"
    >
      {copied ? "Link ကူးပြီးပါပြီ" : "App link ကူးယူရန်"}
    </button>
  )
}
