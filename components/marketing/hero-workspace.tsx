"use client"

import { useEffect, useRef, useState } from "react"
import { AudioLines, Captions, Film } from "lucide-react"

type Preview = "scene" | "voice" | "captions"

const options = [
  { id: "scene", label: "Source video", icon: Film },
  { id: "voice", label: "မြန်မာအသံ", icon: AudioLines },
  { id: "captions", label: "စာတန်းထိုး", icon: Captions },
] as const

export function HeroWorkspace() {
  const [active, setActive] = useState<Preview>("captions")
  const stage = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = stage.current
    if (!element) return
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0
    const scroll = () => {
      if (motion.matches) return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const offset = Math.max(-1, Math.min(1, element.getBoundingClientRect().top / window.innerHeight))
        element.style.setProperty("--drift", `${offset * 14}px`)
      })
    }
    window.addEventListener("scroll", scroll, { passive: true })
    scroll()
    return () => { window.removeEventListener("scroll", scroll); cancelAnimationFrame(frame) }
  }, [])

  return (
    <div className="story-preview" ref={stage} onPointerMove={(event) => {
      if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
      const rect = event.currentTarget.getBoundingClientRect()
      event.currentTarget.style.setProperty("--move-x", `${((event.clientX - rect.left) / rect.width - .5) * 10}px`)
      event.currentTarget.style.setProperty("--move-y", `${((event.clientY - rect.top) / rect.height - .5) * 10}px`)
    }} onPointerLeave={(event) => { event.currentTarget.style.setProperty("--move-x", "0px"); event.currentTarget.style.setProperty("--move-y", "0px") }}>
      <div className="story-preview__frame">
        <div className="story-preview__image" aria-hidden="true" />
        <div className="story-preview__frame-top"><span>ONE CLICK AI</span><span>MOVIE RECAP</span></div>
        <div className="story-preview__visual" aria-live="polite">
          {active === "captions" && <span className="story-preview__caption">ဇာတ်လမ်းတစ်ပုဒ် စတင်ပါပြီ။</span>}
          {active === "voice" && <span className="story-preview__audio"><AudioLines aria-hidden="true" /><span>မြန်မာအသံ</span><i /><i /><i /><i /><i /><i /><i /><i /><i /></span>}
          {active === "scene" && <span className="story-preview__scene">Source video</span>}
        </div>
        <span className="story-preview__illustrative">Illustrative preview</span>
      </div>
      <div className="story-preview__rail" aria-label="Preview elements">
        {options.map(({ id, label, icon: Icon }, index) => <button type="button" key={id} aria-pressed={active === id} onClick={() => setActive(id)}><span className="story-preview__rail-number">0{index + 1}</span><Icon aria-hidden="true" /><span>{label}</span><span className="story-preview__rail-dot" /></button>)}
      </div>
      <div className="story-preview__edge" aria-hidden="true"><span>STORIES, MADE SIMPLE</span><span>0{options.findIndex((option) => option.id === active) + 1} / 03</span></div>
    </div>
  )
}
