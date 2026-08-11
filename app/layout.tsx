import localFont from "next/font/local"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "One Click AI | Myanmar Creator Content System",
    template: "%s | One Click AI",
  },
  description:
    "Myanmar creator တွေအတွက် source content ကနေ publish-ready နီးစပ်တဲ့ output ရအောင် ကူညီပေးတဲ့ AI-assisted content tool suite.",
  keywords: [
    "One Click AI",
    "Myanmar AI content tool",
    "Burmese voiceover video maker",
    "Movie Recap Myanmar",
    "Football Content Maker",
    "Dhamma Content Maker",
    "Knowledge Video",
    "Thumbnail Generator Myanmar",
    "Voice Library AI",
    "Video Splitter Myanmar",
    "TikTok content tool Myanmar",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "One Click AI | Myanmar Creator Content System",
    description:
      "Source content ကနေ publish-ready နီးစပ်တဲ့ output ရအောင် creator workflow ကို မြန်စေပါ။",
    siteName: "One Click AI",
    type: "website",
    locale: "my_MM",
  },
  twitter: {
    card: "summary",
    title: "One Click AI | Myanmar Creator Content System",
    description:
      "Source content ကနေ publish-ready နီးစပ်တဲ့ output ရအောင် creator workflow ကို မြန်စေပါ။",
  },
}

const walone = localFont({
  src: [
    {
      path: "../public/fonts/walone/Z06-Walone Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/walone/Z06-Walone Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/walone/Z06-Walone Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-walone",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="my"
      suppressHydrationWarning
      className={cn("antialiased", walone.variable, "font-sans")}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
