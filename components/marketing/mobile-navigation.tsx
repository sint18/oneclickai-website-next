"use client"

import { useEffect, useId, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

import { navigation, siteConfig } from "@/lib/site-content"

type MenuState = "closed" | "opening" | "open" | "closing"

const MENU_CLOSE_MS = 280

function getMenuCloseDuration() {
  if (typeof window === "undefined") {
    return MENU_CLOSE_MS
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? 0
    : MENU_CLOSE_MS
}

export function MobileNavigation() {
  const [menuState, setMenuState] = useState<MenuState>("closed")
  const trigger = useRef<HTMLButtonElement>(null)
  const panelId = useId()

  const isPresent = menuState !== "closed"
  const isExpanded =
    menuState === "opening" || menuState === "open" || menuState === "closing"

  function openMenu() {
    setMenuState("opening")
  }

  function closeMenu() {
    setMenuState((current) => {
      if (current === "closed" || current === "closing") {
        return current
      }

      return "closing"
    })
  }

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 52.001rem)")
    const closeOnDesktop = () => {
      if (desktop.matches) {
        setMenuState("closed")
      }
    }
    desktop.addEventListener("change", closeOnDesktop)
    return () => desktop.removeEventListener("change", closeOnDesktop)
  }, [])

  useEffect(() => {
    if (menuState !== "opening") {
      return
    }

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setMenuState("open")
      })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [menuState])

  useEffect(() => {
    if (menuState !== "closing") {
      return
    }

    const timeout = window.setTimeout(() => {
      setMenuState("closed")
    }, getMenuCloseDuration())

    return () => window.clearTimeout(timeout)
  }, [menuState])

  useEffect(() => {
    if (!isPresent) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault()
        closeMenu()
        trigger.current?.focus()
      }
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isPresent])

  const rootClassName = [
    "mobile-navigation",
    menuState === "open" ? "mobile-navigation--open" : "",
    menuState === "closing" ? "mobile-navigation--closing" : "",
    isExpanded ? "mobile-navigation--expanded" : "",
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div className={rootClassName}>
      <button
        aria-controls={panelId}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? "Close menu" : "Open menu"}
        className="mobile-navigation__trigger"
        onClick={() => {
          if (menuState === "closed") {
            openMenu()
            return
          }

          closeMenu()
        }}
        ref={trigger}
        type="button"
      >
        <span aria-hidden="true" className="mobile-navigation__icon">
          <Menu className="mobile-navigation__icon-menu" strokeWidth={1.75} />
          <X className="mobile-navigation__icon-close" strokeWidth={1.75} />
        </span>
      </button>
      {isPresent ? (
        <>
          <button
            aria-label="Close menu"
            className="mobile-navigation__scrim"
            onClick={closeMenu}
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
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mobile-navigation__group">
                <Link href="/#support" onClick={closeMenu}>
                  Support
                </Link>
                <a
                  className="mobile-navigation__app"
                  href={siteConfig.appUrl}
                  onClick={closeMenu}
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
