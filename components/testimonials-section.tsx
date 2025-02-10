"use client"
import * as React from "react"
import { Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"

const testimonials = [
  {
    name: "Márlon Damasceno",
    role: "Engenheiro de Automação",
    content: [
      "Estava procurando por aprender alemão e encontrei um perfil de um cara no LinkedIn que ensinava, e no primeiro momento achei que seria alguma pessoa que apenas estava se aventurando a ensinar idiomas.",
      "Logo na aula experimental me surpreendi com a alta qualidade e o grande profissionalismo do Ronnye, e desde então eu e minha esposa temos o Ronnye como uma boa escolha para aprender alemão.",
      "Aulas produtivas, bom material de estudo, professor dinâmico, proativo e bastante paciente. Recomendo o Ronnye como professor, excepcional!!",
    ],
  },
  {
    name: "Zé Colmeia",
    role: "Apicultor",
    content: [
      "fefeffffffffjsdfjsdofjosdifjsdofjoisdjfojoedfjojdsofjodsjofjdosjfowefhefgruihfvgeruithurthrevdsnvdajnvodfnadsifjweouhfwegodejfosdafowehfweofg.",
      "Logo na aula experimental me surpreendi com a alta qualidade e o grande profissionalismo do Ronnye, e desde então eu e minha esposa temos o Ronnye como uma boa escolha para aprender alemão.",
      "Aulas produtivas, bom material de estudo, professor dinâmico, proativo e bastante paciente. Recomendo o Ronnye como professor, excepcional!!",
    ],
  },
  // Add more testimonials here
]

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const scrollTo = React.useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setCurrentSlide(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-700 mb-12">Quem conhece, diz</h2>

      <div className="relative">
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%]">
                <div className="bg-rose-500 rounded-3xl p-8 md:p-12 text-white relative">
                  <Quote className="absolute text-rose-400/20 h-24 w-24 -left-3 -top-3 rotate-180" />
                  <Quote className="absolute text-rose-400/20 h-24 w-24 -right-3 -bottom-3" />

                  <div className="space-y-6 max-w-3xl mx-auto text-center">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-yellow-300 mt-1">{testimonial.role}</p>
                    </div>

                    {testimonial.content.map((paragraph, idx) => (
                      <p key={idx} className="text-white/90 text-lg leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2"
          onClick={() => emblaApi?.scrollPrev()}
        >
          {"<<"}
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2"
          onClick={() => emblaApi?.scrollNext()}
        >
          {">>"}
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <Button
            key={i}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 p-0 rounded-full ${i === currentSlide ? "bg-rose-500" : "bg-rose-200"}`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </section>
  )
}

