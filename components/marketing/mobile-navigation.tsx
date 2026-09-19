"use client"

import { useEffect, useId, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

import { navigation, siteConfig } from "@/lib/site-content"

export function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  const panelId = useId()

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 52.001rem)")
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener("change", closeOnDesktop)
    return () => desktop.removeEventListener("change", closeOnDesktop)
  }, [])

  useEffect(() => {
    if (!open) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault()
        setOpen(false)
        trigger.current?.focus()
      }
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <div
      className={
        open ? "mobile-navigation mobile-navigation--open" : "mobile-navigation"
      }
    >
      <button
        aria-controls={panelId}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="mobile-navigation__trigger"
        onClick={() => setOpen((current) => !current)}
        ref={trigger}
        type="button"
      >
        {open ? (
          <X aria-hidden="true" strokeWidth={1.75} />
        ) : (
          <Menu aria-hidden="true" strokeWidth={1.75} />
        )}
      </button>
      {open ? (
        <>
          <button
            aria-label="Close menu"
            className="mobile-navigation__scrim"
            onClick={() => setOpen(false)}
            type="button"
          />
          <div className="mobile-navigation__panel" id={panelId}>
            <nav
              className="mobile-navigation__links"
              aria-label="Mobile navigation"
            >
              <div className="mobile-navigation__group">
                {navigation.map((item) => (
                  <Link
                    href={item.href}
                    key={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mobile-navigation__group">
                <Link href="/#support" onClick={() => setOpen(false)}>
                  Support
                </Link>
                <a
                  className="mobile-navigation__app"
                  href={siteConfig.appUrl}
                  onClick={() => setOpen(false)}
                >
                  App ဝင်ရန်
                </a>
              </div>
            </nav>
          </div>
        </>
      ) : null}
    </div>
  )
}
