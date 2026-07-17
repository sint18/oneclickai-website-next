import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ToolDetailPage } from "@/components/marketing/content-pages"
import { getToolBySlug, tools } from "@/lib/site-content"

export const dynamicParams = false

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const tool = getToolBySlug(slug)

  if (!tool) return {}

  return {
    title: tool.label,
    description: tool.description,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const tool = getToolBySlug(slug)

  if (!tool) notFound()

  return <ToolDetailPage tool={tool} />
}
