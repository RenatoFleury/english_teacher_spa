import { Button } from "@/components/ui/button"
import Image from "next/image"

export function TeacherSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-700 mb-12">Quem é seu professor?</h2>

      <div className="bg-pink-50 rounded-3xl p-8 md:p-12 border-2 border-rose-500">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-rose-500">Ich bin&apos;s, Ronnye Salmazo!</h3>
            <p className="text-rose-500 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum elit lacus, sit amet viverra tortor dignissim non. Morbi malesuada lobortis turpis at consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus tincidunt elit quis turpis tincidunt egestas at nec augue. 
            </p>
            <Button className="bg-rose-500 hover:bg-rose-600 text-white" size="lg">
              Conheça minha trajetória
            </Button>
          </div>
          <div className="flex-shrink-0">
            <div className="rounded-full border-8 border-rose-500 overflow-hidden w-[280px] h-[280px]">
              <Image
                src="foto_ramon.jpg"
                alt="Professor Ramon Alves"
                width={280}
                height={280}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

