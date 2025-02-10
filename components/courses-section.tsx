import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const courses = [
  {
    title: "Híbrido",
    features: ["Do iniciante ao avançado", "Vídeaulas gravadas", "Conversação ao vivo", "Grupos reduzidos"],
    buttonText: "Mais informações",
    color: "bg-teal-700",
    hoverColor: "hover:bg-teal-800",
    buttonBg: "bg-teal-600/20",
  },
  {
    title: "Deutsch für Architekten und Bauingenieure",
    features: ["Fachsprache für Berufstätige", "Ab dem Niveau B2", "E-learning Kurs", "Teilnahmebestätigung"],
    buttonText: "Mehr Informationen",
    color: "bg-slate-600",
    hoverColor: "hover:bg-slate-700",
    buttonBg: "bg-slate-600/20",
  },
  {
    title: "Personalizado",
    features: [
      "Aulas ao vivo 1:1",
      "Seus interesses e necessidades",
      "Conversação",
      "Preparatório provas de proficiência",
    ],
    buttonText: "Mais informações",
    color: "bg-rose-500",
    hoverColor: "hover:bg-rose-600",
    buttonBg: "bg-rose-500/20",
  },
]

export function CoursesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-700 mb-12">Cursos</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Card key={index} className={`${course.color} text-white border-none`}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {course.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${course.buttonBg} text-white hover:text-white ${course.hoverColor}`}
                variant="ghost"
              >
                {course.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

