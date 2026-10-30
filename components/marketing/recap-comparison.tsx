"use client"

import { useRef, useState } from "react"

const examples = [
  { id: "source", label: "မူရင်း Video", detail: "SOURCE", poster: "/images/comparison-original.webp", src: "https://storage.googleapis.com/oneclickai-website-assets/videos/b13d989f-69f9-4416-99f7-58dbf199344d.mp4" },
  { id: "result", label: "Smart Recap ရလဒ်", detail: "ONE CLICK AI", poster: "/images/comparison-result.webp", src: "https://storage.googleapis.com/oneclickai-website-assets/videos/b13d989f-69f9-4416-99f7-58dbf199344d%202.mp4" },
] as const

type ExampleId = (typeof examples)[number]["id"]

export function RecapComparison() {
  const [selected, setSelected] = useState<ExampleId>("source")
  const source = useRef<HTMLVideoElement>(null)
  const result = useRef<HTMLVideoElement>(null)
  const pauseBoth = () => { source.current?.pause(); result.current?.pause() }

  return <>
    <div className="comparison-switch" aria-label="နမူနာ Video ရွေးရန်">
      {examples.map((example) => <button key={example.id} type="button" aria-pressed={selected === example.id} onClick={() => { pauseBoth(); setSelected(example.id) }}>{example.label}</button>)}
    </div>
    <div className="comparison__stage" aria-label="Video comparison preview">
      {examples.map((example) => <div className={`comparison__item${selected === example.id ? " is-selected" : ""}`} key={example.id}>
        <div className="comparison__label"><h3>{example.label}</h3><span>{example.detail}</span></div>
        <video className="comparison__screen" controls playsInline preload="none" poster={example.poster} title={example.label} ref={example.id === "source" ? source : result} onPlay={() => { setSelected(example.id); if (example.id === "source") result.current?.pause(); else source.current?.pause() }}>
          <source src={example.src} type="video/mp4" />Your browser does not support video playback.
        </video>
      </div>)}
    </div>
  </>
}
