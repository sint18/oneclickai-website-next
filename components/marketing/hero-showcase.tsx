"use client"

import { useEffect, useRef } from "react"
import {
  Captions,
  Clapperboard,
  MessageCircleMore,
  Trophy,
  type LucideIcon,
} from "lucide-react"
import Image from "next/image"

type HeroCard = {
  className: string
  depth: number
  duration: string
  icon: LucideIcon
  image: string
  name: string
}

const heroCards: HeroCard[] = [
  {
    name: "Movie Recap",
    duration: "1:45",
    image: "/images/hero-cards/movie-recap.png",
    icon: Clapperboard,
    className: "hero-card--movie",
    depth: 12,
  },
  {
    name: "Football Highlight",
    duration: "0:58",
    image: "/images/hero-cards/football-highlight.png",
    icon: Trophy,
    className: "hero-card--football",
    depth: -10,
  },
  {
    name: "Dhamma Short",
    duration: "0:59",
    image: "/images/hero-cards/dhamma-short.png",
    icon: Captions,
    className: "hero-card--dhamma",
    depth: 8,
  },
  {
    name: "Hook Maker",
    duration: "0:30",
    image: "/images/hero-cards/hook-maker.png",
    icon: MessageCircleMore,
    className: "hero-card--hook",
    depth: -7,
  },
]

export function HeroShowcase() {
  const showcaseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const showcase = showcaseRef.current
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

    if (!showcase || reducedMotion.matches) {
      return
    }

    let frameId: number | null = null

    const updateParallax = () => {
      frameId = null

      const { height, top } = showcase.getBoundingClientRect()
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - top) / (window.innerHeight + height))
      )
      const offset = (progress - 0.5) * 2

      showcase
        .querySelectorAll<HTMLElement>("[data-hero-card-depth]")
        .forEach((card) => {
          const depth = Number(card.dataset.heroCardDepth)
          card.style.setProperty("--hero-card-scroll", `${offset * depth}px`)
        })
    }

    const requestUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateParallax)
      }
    }

    requestUpdate()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)

    return () => {
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return (
    <div className="hero-showcase" aria-hidden="true" ref={showcaseRef}>
      <div className="hero-showcase__glow" />
      <div className="hero-showcase__orbit" />
      {heroCards.map((card) => {
        const Icon = card.icon

        return (
          <article
            className={`hero-card ${card.className}`}
            data-hero-card-depth={card.depth}
            key={card.name}
          >
            <Image
              alt=""
              className="hero-card__image"
              fill
              sizes="(max-width: 52rem) 45vw, 18rem"
              src={card.image}
            />
            <div className="hero-card__shade" />
            <div className="hero-card__meta">
              <span className="hero-card__name">
                <Icon aria-hidden="true" />
                {card.name}
              </span>
              <span className="hero-card__duration">{card.duration}</span>
            </div>
          </article>
        )
      })}
    </div>
  )
}
