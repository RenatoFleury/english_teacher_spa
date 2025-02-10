"use client"
import React, { useState, useRef, useCallback, useMemo } from "react"

type CarouselApi = {
  selectedScrollSnap: () => number
  on: (event: string, callback: () => void) => void
}

export const Carousel = ({
  setApi,
  children,
  className,
}: {
  setApi: React.Dispatch<React.SetStateAction<CarouselApi | undefined>>
  children: React.ReactNode
  className?: string
}) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState(0)

  const api = useMemo<CarouselApi>(
    () => ({
      selectedScrollSnap: () => selected,
      on: (event, callback) => {
        if (event === "select") {
          const handleSelect = () => {
            setSelected(api.selectedScrollSnap())
            callback()
          }
          carouselRef.current?.addEventListener("scroll", handleSelect)
          return () => carouselRef.current?.removeEventListener("scroll", handleSelect)
        }
      },
    }),
    [selected],
  )

  React.useEffect(() => {
    setApi(api)
  }, [setApi, api])

  const handleScroll = useCallback(() => {
    if (!carouselRef.current) return
    const scrollWidth = carouselRef.current.scrollWidth
    const clientWidth = carouselRef.current.clientWidth
    const scrollLeft = carouselRef.current.scrollLeft
    const itemWidth = scrollWidth / React.Children.count(children)
    const index = Math.round(scrollLeft / itemWidth)
    setSelected(index)
  }, [children])

  return (
    <div className={`relative ${className}`} ref={carouselRef} onScroll={handleScroll}>
      {children}
    </div>
  )
}

export const CarouselContent = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory">{children}</div>
)

export const CarouselItem = ({ children }: { children: React.ReactNode }) => (
  <div className="snap-start w-full">{children}</div>
)

export const CarouselNext = ({ className }: { className?: string }) => (
  <button
    className={`absolute top-1/2 -translate-y-1/2 right-4 p-2 rounded-full bg-white/30 hover:bg-white/50 text-white ${className}`}
  >
    Next
  </button>
)

export const CarouselPrevious = ({ className }: { className?: string }) => (
  <button
    className={`absolute top-1/2 -translate-y-1/2 left-4 p-2 rounded-full bg-white/30 hover:bg-white/50 text-white ${className}`}
  >
    Previous
  </button>
)

export const useCarousel = () => {}

