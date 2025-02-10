import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { MethodSection } from "@/components/method-section"
import { CoursesSection } from "@/components/courses-section"
import { TeacherSection } from "@/components/teacher-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-[#FDF6F0] min-h-screen">
      <NavBar />

      <div id="top">
        <HeroSection />
      </div>
      <section id="nosso-metodo">
        <MethodSection />
      </section>
      <section id="cursos">
        <CoursesSection />
      </section>
      <section id="depoimentos">
        <TestimonialsSection />
      </section>
      <section id="sobre">
        <TeacherSection />
      </section>
      <section id="aula-experimental">
        <CTASection />
      </section>
      <section id="contato">
        <ContactSection />
      </section>
      
      <Footer />
    </main>
  )
}

