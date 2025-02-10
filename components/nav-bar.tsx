"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import type React from "react" // Added import for React

export function NavBar() {

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string | null = null) => {
    // e.preventDefault()
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const element = document.getElementById(id)
    if (element) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#FDF6F0] shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <a onClick={(e) => scrollToSection(e)} className="flex items-center cursor-pointer">
          <Image src="logo_ramon.png" alt="Sprechende Logo" width={150} height={40} priority />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            onClick={(e) => scrollToSection(e, "nosso-metodo")}
            className="text-neutral-700 hover:text-rose-500 transition-colors cursor-pointer"
          >
            Nosso Método
          </a>
          <a
            onClick={(e) => scrollToSection(e, "cursos")}
            className="text-neutral-700 hover:text-rose-500 transition-colors cursor-pointer"
          >
            Cursos
          </a>
          <a
            onClick={(e) => scrollToSection(e, "depoimentos")}
            className="text-neutral-700 hover:text-rose-500 transition-colors cursor-pointer"
          >
            Depoimentos
          </a>
          <a
            onClick={(e) => scrollToSection(e, "sobre")}
            className="text-neutral-700 hover:text-rose-500 transition-colors cursor-pointer"
          >
            Sobre
          </a>
          <a
            onClick={(e) => scrollToSection(e, "contato")}
            className="text-neutral-700 hover:text-rose-500 transition-colors cursor-pointer"
          >
            Contato
          </a>
          <Button 
            className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6 cursor-pointer"
            onClick={(e) => scrollToSection(e, "aula-experimental")}
          >
              Aula experimental</Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="w-full sm:w-[300px] bg-[#FDF6F0] p-0">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b">
                <div className="flex justify-center mb-4">
                  <Image src="logo_ramon.png" alt="Sprechende Logo" width={150} height={40} priority />
                </div>
              </div>
              <SheetClose asChild>
              <nav className="flex flex-col px-6 py-8 gap-6">
                <a
                  onClick={(e) => scrollToSection(e, "nosso-metodo")}
                  className="text-lg font-medium text-neutral-700 hover:text-rose-500 transition-colors"
                >
                  Nosso Método
                </a>
                <a
                  onClick={(e) => scrollToSection(e, "cursos")}
                  className="text-lg font-medium text-neutral-700 hover:text-rose-500 transition-colors"
                >
                  Cursos
                </a>
                <a
                  onClick={(e) => scrollToSection(e, "depoimentos")}
                  className="text-lg font-medium text-neutral-700 hover:text-rose-500 transition-colors"
                >
                  Depoimentos
                </a>
                <a
                  onClick={(e) => scrollToSection(e, "sobre")}
                  className="text-lg font-medium text-neutral-700 hover:text-rose-500 transition-colors"
                >
                  Sobre
                </a>
                <a
                  onClick={(e) => scrollToSection(e, "contato")}
                  className="text-lg font-medium text-neutral-700 hover:text-rose-500 transition-colors"
                >
                  Contato
                </a>
              </nav>
              </SheetClose>
              <div className="mt-auto p-6 border-t">
                <Button
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full"
                  onClick={(e) => scrollToSection(e, "aula-experimental")}
                >
                    Aula experimental
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

