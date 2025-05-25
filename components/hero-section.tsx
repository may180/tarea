import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-cyan-50 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-xl text-blue-600 mb-4">Diseñador & Desarrollador Web</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">Hola, soy Maikol Lozano</h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              Creo experiencias digitales hermosas y funcionales que ayudan a los negocios a crecer en línea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg">
                <Link href="#portfolio">Ver mi trabajo</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Contactarme</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-developer.jpg"
                alt="Maikol Lozano trabajando"
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
