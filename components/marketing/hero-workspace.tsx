"use client"

import { useEffect, useRef, useState } from "react"
import { Captions, Clapperboard, Mic2, Sparkles } from "lucide-react"

type Item = "source" | "voice" | "subtitle" | "result"

export function HeroWorkspace() {
  const stage = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<Item | null>(null)

  useEffect(() => {
    const element = stage.current
    if (!element) return
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0
    const updateScroll = () => {
      if (motion.matches) return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const amount = Math.max(-1, Math.min(1, element.getBoundingClientRect().top / window.innerHeight))
        element.style.setProperty("--scroll-shift", `${amount * 12}px`)
      })
    }
    window.addEventListener("scroll", updateScroll, { passive: true })
    updateScroll()
    return () => { window.removeEventListener("scroll", updateScroll); cancelAnimationFrame(frame) }
  }, [])

  function select(item: Item) { setActive((current) => current === item ? null : item) }

  return (
    <div
      className="hero-workspace"
      ref={stage}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
        const rect = event.currentTarget.getBoundingClientRect()
        event.currentTarget.style.setProperty("--pointer-x", `${((event.clientX - rect.left) / rect.width - .5) * 14}px`)
        event.currentTarget.style.setProperty("--pointer-y", `${((event.clientY - rect.top) / rect.height - .5) * 14}px`)
      }}
      onPointerLeave={(event) => { event.currentTarget.style.setProperty("--pointer-x", "0px"); event.currentTarget.style.setProperty("--pointer-y", "0px") }}
      aria-label="Movie Recap preview"
    >
      <div className="hero-workspace__orbit" aria-hidden="true" />
      <button className="hero-workspace__result" type="button" aria-pressed={active === "result"} onClick={() => select("result")}>
        <span className="hero-workspace__result-image" />
        <span className="hero-workspace__result-top"><span><Sparkles size={15} /> One Click AI</span><span>Movie Recap</span></span>
        <span className="hero-workspace__result-bottom"><span className="hero-workspace__result-label">MOVIE RECAP</span><strong>မြန်မာအသံ၊ မြန်မာစာတန်းနဲ့</strong></span>
      </button>
      <button className="hero-workspace__piece hero-workspace__source" type="button" aria-pressed={active === "source"} onClick={() => select("source")}>
        <span className="hero-workspace__source-image" />
        <span className="hero-workspace__piece-copy"><span><Clapperboard size={14} /> SOURCE</span><strong>Original video</strong></span>
      </button>
      <button className="hero-workspace__piece hero-workspace__voice" type="button" aria-pressed={active === "voice"} onClick={() => select("voice")}>
        <span className="hero-workspace__voice-icon"><Mic2 size={17} /></span>
        <span className="hero-workspace__piece-copy"><span>VOICE</span><strong>မြန်မာအသံ</strong></span>
        <span className="hero-workspace__wave" aria-hidden="true">{[8, 15, 10, 22, 14, 26, 12, 19, 9, 16, 7].map((height, index) => <i key={index} style={{ height }} />)}</span>
      </button>
      <button className="hero-workspace__piece hero-workspace__subtitle" type="button" aria-pressed={active === "subtitle"} onClick={() => select("subtitle")}>
        <span className="hero-workspace__subtitle-icon"><Captions size={17} /></span>
        <span className="hero-workspace__piece-copy"><span>SUBTITLES</span><strong>မြန်မာစာတန်းထိုး</strong></span>
        <span className="hero-workspace__subtitle-lines" aria-hidden="true"><i /><i /></span>
      </button>
      <span className="hero-workspace__hint">{active === "source" ? "Source video" : active === "voice" ? "Burmese narration" : active === "subtitle" ? "Burmese subtitles" : active === "result" ? "Movie Recap result" : "Source to story"}</span>
    </div>
  )
}
