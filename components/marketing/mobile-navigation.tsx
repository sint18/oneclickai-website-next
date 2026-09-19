"use client"

import { useEffect, useRef, useState } from "react"
import { Collapsible } from "@base-ui/react/collapsible"
import { Menu, X } from "lucide-react"
import Link from "next/link"

import { navigation, siteConfig } from "@/lib/site-content"

export function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 52.001rem)")
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener("change", closeOnDesktop)
    return () => desktop.removeEventListener("change", closeOnDesktop)
  }, [])

  return (
    <Collapsible.Root
      className="mobile-navigation"
      open={open}
      onOpenChange={setOpen}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault()
          setOpen(false)
          trigger.current?.focus()
        }
      }}
    >
      <Collapsible.Trigger className="mobile-navigation__trigger" ref={trigger}>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        Menu
      </Collapsible.Trigger>
      <Collapsible.Panel className="mobile-navigation__panel">
        <nav
          className="mobile-navigation__links"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/#support" onClick={() => setOpen(false)}>
            Support
          </Link>
          <a href={siteConfig.appUrl} onClick={() => setOpen(false)}>
            App ဝင်ရန်
          </a>
        </nav>
      </Collapsible.Panel>
    </Collapsible.Root>
  )
}
