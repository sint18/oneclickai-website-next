import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { GuideArticlePage } from "@/components/marketing/content-pages"
import { getGuideBySlug, guides } from "@/lib/site-content"

export const dynamicParams = false

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)

  if (!guide) return {}

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `/guide/${guide.slug}`,
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)

  if (!guide) notFound()

  return <GuideArticlePage guide={guide} />
}
