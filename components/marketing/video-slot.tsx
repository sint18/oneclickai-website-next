"use client"

import { useRef, useState } from "react"
import { Play } from "lucide-react"

import { cn } from "@/lib/utils"

type VideoSlotProps = {
  caption: string
  className?: string
  src: string
  title: string
  poster?: string
}

export function VideoSlot({
  caption,
  className,
  src,
  title,
  poster,
}: VideoSlotProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)
  const [error, setError] = useState(false)

  async function playSample() {
    const video = videoRef.current

    if (!video) {
      return
    }

    try {
      await video.play()
      video.focus()
    } catch {
      setStarted(false)
      setError(true)
    }
  }

  return (
    <figure className={cn("video-slot", className)}>
      <div className="video-slot__surface">
        <video
          className={cn("video-slot__player", !started && "video-slot__player--idle")}
          controls={started}
          onEnded={() => {
            setStarted(false)
            const video = videoRef.current

            if (video) {
              video.currentTime = 0
            }
          }}
          onPlay={() => { setStarted(true); setError(false) }}
          onError={() => { setStarted(false); setError(true) }}
          playsInline
          poster={poster}
          preload="none"
          ref={videoRef}
          title={title}
        >
          <source src={src} type="video/mp4" />
        </video>
        {started || error ? null : (
          <button
            aria-label={`Play ${title}`}
            className="video-slot__play"
            onClick={playSample}
            type="button"
          >
            <span className="video-slot__play-mark">
              <Play aria-hidden="true" strokeWidth={1.75} />
            </span>
          </button>
        )}
      </div>
      <figcaption>{error ? "Video ဖွင့်မရပါ။ Page ကို refresh လုပ်ပြီး ထပ်ကြိုးစားပါ။" : caption}</figcaption>
    </figure>
  )
}
