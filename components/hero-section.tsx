import Image from "next/image"

export function HeroSection() {
  return (
    <div className="py-12 md:py-32 min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-red to-blue bg-clip-text text-transparent">
              Cursos de
              <br />
              Inglês Online
            </span>
          </h1>
          <p className="text-neutral-700 text-lg max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum elit lacus, sit amet viverra tortor dignissim non. Morbi malesuada lobortis turpis at consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          </p>
        </div>
        <div className="relative aspect-video md:aspect-video">
          <Image
            src="ilustration-removebg-preview.png"
            alt="Student learning German online"
            fill={true}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}

