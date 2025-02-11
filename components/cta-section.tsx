import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-700 mb-12">Conheça nosso método</h2>

      <div className="bg-pink-50 rounded-3xl p-8 md:p-12 border-2 border-rose-500">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-rose-500">Agende uma aula experimental</h3>
            <p className="text-rose-500 text-lg leading-relaxed">
              Você conhecerá melhor o método e discutiremos as melhores estratégias para atingir seus objetivos!
            </p>
            <Button className="bg-[#25D366] hover:bg-[#20BD5B] text-white gap-2" size="lg">
              <MessageCircle className="w-5 h-5" />
              Agendar sua aula
            </Button>
          </div>
          <div className="flex-1">
            <Image
              src="ilustration_2-removebg-preview.png"
              alt="Student at desk with laptop"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

