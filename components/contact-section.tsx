import { Mail, MessageCircle, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue mb-12">Fale com a gente</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-red border-none flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Contato</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 flex flex-col flex-grow">
            <div className="space-y-2 flex-grow">
              <p className="text-white/90">Dúvidas ou sugestões?</p>
              <p className="text-white/90">Nos envie uma mensagem!</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a href="mailto:aulas@proframon.com" className="w-full">
                <Button className="w-full bg-[#FDF6F0] hover:bg-[#F5E6D8] text-rose-500" size="lg">
                  <Mail className="w-5 h-5 mr-2" />
                  E-mail
                </Button>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-[#FDF6F0] hover:bg-[#F5E6D8] text-rose-500" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
              
            </div>
          </CardContent>
        </Card>

        <Card className="bg-rose-500 border-none flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Redes sociais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 flex flex-col flex-grow">
            <p className="text-white/90 flex-grow">
              Acompanhe nosso conteúdo e aprenda um pouco de inglês de maneira descontraída.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://www.instagram.com/prof.ramonalves/" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-[#FDF6F0] hover:bg-[#F5E6D8] text-rose-500" size="lg">
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </Button>
              </a>
              <a href="https://www.facebook.com/prof.ramonalves/" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-[#FDF6F0] hover:bg-[#F5E6D8] text-rose-500" size="lg">
                  <Facebook className="w-5 h-5 mr-2" />
                  Facebook
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}