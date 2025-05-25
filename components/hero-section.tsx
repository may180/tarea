import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-cyan-50 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-xl text-blue-600 mb-4">Estudiante de Ingeniería de Software</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">Hola, soy Maikol Lozano</h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              Estudiante de 5° semestre en la Universidad Iberoamericana, especializado en desarrollo web frontend y
              backend. Apasionado por crear soluciones digitales innovadoras y experiencias de usuario excepcionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg">
                <Link href="#portfolio">Ver mis proyectos</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#video-demo">Ver demostración</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-developer.jpg"
                alt="Maikol Lozano - Estudiante de Ingeniería de Software"
                width={500}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
