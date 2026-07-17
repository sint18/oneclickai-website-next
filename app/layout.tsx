import localFont from "next/font/local"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "One Click AI | Myanmar Creator Content System",
    template: "%s | One Click AI",
  },
  description:
    "Myanmar creators အတွက် source video သို့မဟုတ် audio ကနေ Burmese voice, subtitle, SRT နဲ့ upload-ready output ထုတ်နိုင်တဲ့ AI content tool.",
  keywords: [
    "One Click AI",
    "Myanmar AI content tool",
    "Burmese voiceover video maker",
    "Movie Recap Myanmar",
    "Football Content Maker",
    "Dhamma Content Maker",
    "TikTok content tool Myanmar",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "One Click AI | Myanmar Creator Content System",
    description:
      "Source video တင်ပြီး Burmese voice, subtitle, SRT နဲ့ upload-ready output ထုတ်ပါ။",
    siteName: "One Click AI",
    type: "website",
    locale: "my_MM",
  },
  twitter: {
    card: "summary",
    title: "One Click AI | Myanmar Creator Content System",
    description:
      "Source video တင်ပြီး Burmese voice, subtitle, SRT နဲ့ upload-ready output ထုတ်ပါ။",
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
