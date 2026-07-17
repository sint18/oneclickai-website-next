import localFont from "next/font/local"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

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
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", walone.variable, "font-sans")}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
