"use client"

import { sendGAEvent } from "@next/third-parties/google"
import type { ComponentProps, MouseEvent } from "react"

import { parseGaClickEvent, type GaClickLocation } from "@/lib/analytics"

type GaClickLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: string
  analyticsLocation?: GaClickLocation
}

export function sendMarketingGaEvent(input: {
  href: string
  buttonText: string
  location?: GaClickLocation
}) {
  const event = parseGaClickEvent(input)

  if (!event) {
    return
  }

  sendGAEvent("event", event.name, event.params)
}

export function GaClickLink({
  analyticsLocation,
  children,
  href,
  onClick,
  ...props
}: GaClickLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)

    if (event.defaultPrevented) {
      return
    }

    sendMarketingGaEvent({
      href,
      buttonText: event.currentTarget.textContent ?? "",
      location: analyticsLocation,
    })
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
