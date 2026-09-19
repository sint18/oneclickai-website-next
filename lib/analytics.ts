import { z } from "zod"

import { siteConfig } from "@/lib/site-content"

export const gaClickLocationSchema = z.enum([
  "header_vvip",
  "header_app",
  "hero_start",
  "hero_demo",
  "pricing_vip",
  "pricing_vvip",
  "content_cta",
  "movie_recap",
  "footer_vvip",
  "footer_app",
  "resource_card",
  "footer_social",
  "how_to_buy_app",
  "how_to_buy_support",
])

export type GaClickLocation = z.infer<typeof gaClickLocationSchema>

export const gaClickEventNameSchema = z.enum(["cta_clicked", "outbound_click"])

export type GaClickEventName = z.infer<typeof gaClickEventNameSchema>

export const gaClickPayloadSchema = z.object({
  name: gaClickEventNameSchema,
  button_text: z.string().min(1),
  link_url: z.string().min(1),
  location: gaClickLocationSchema.optional(),
})

export type GaClickPayload = z.infer<typeof gaClickPayloadSchema>

export function isAppCtaHref(href: string) {
  try {
    const resolved = new URL(href, siteConfig.siteUrl)
    return resolved.origin === new URL(siteConfig.appUrl).origin
  } catch {
    return false
  }
}

export function isExternalHttpHref(href: string) {
  return href.startsWith("https://") || href.startsWith("http://")
}

export function resolveGaClickName(href: string): GaClickEventName | null {
  if (isAppCtaHref(href)) {
    return "cta_clicked"
  }

  if (isExternalHttpHref(href)) {
    return "outbound_click"
  }

  return null
}

export function parseGaClickEvent(input: {
  href: string
  buttonText: string
  location?: GaClickLocation
}) {
  const name = resolveGaClickName(input.href)

  if (!name) {
    return null
  }

  const parsed = gaClickPayloadSchema.safeParse({
    name,
    button_text: input.buttonText.replace(/\s+/g, " ").trim(),
    link_url: input.href,
    ...(input.location ? { location: input.location } : {}),
  })

  if (!parsed.success) {
    return null
  }

  const params: {
    button_text: string
    link_url: string
    location?: GaClickLocation
  } = {
    button_text: parsed.data.button_text,
    link_url: parsed.data.link_url,
  }

  if (parsed.data.location) {
    params.location = parsed.data.location
  }

  return { name: parsed.data.name, params }
}
