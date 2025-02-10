import { MessageSquare, Laptop, FileText, User2, MessageCircle } from "lucide-react"

const features = [
  {
    icon: User2,
    title: "Abordagem comunicativa",
  },
  {
    icon: FileText,
    title: "Curadoria de materiais",
  },
  {
    icon: Laptop,
    title: "Plataforma virtual",
  },
  {
    icon: MessageSquare,
    title: "Acompanhamento individualizado",
  },
  {
    icon: MessageCircle,
    title: "Suporte via WhatsApp",
  },
]

export function MethodSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-700 mb-12">Nosso método</h2>

      <div className="bg-pink-50 rounded-3xl p-8 border-2 border-rose-500">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-rose-500 rounded-full p-4 mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-rose-500 font-medium">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

