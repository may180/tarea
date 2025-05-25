import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="#" className="text-2xl font-bold mb-4 block">
              Maikol<span className="text-blue-400">Lozano</span>
            </Link>
            <p className="text-slate-400 mb-6">
              Diseñador y desarrollador web especializado en crear experiencias digitales memorables.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-slate-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-400 hover:text-white transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-slate-400 hover:text-white transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Diseño Web
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                  Diseño de Apps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:hola@maikollozano.com" className="text-slate-400 hover:text-white transition-colors">
                  hola@maikollozano.com
                </Link>
              </li>
              <li>
                <Link href="tel:+573001234567" className="text-slate-400 hover:text-white transition-colors">
                  +57 300 1234567
                </Link>
              </li>
              <li className="text-slate-400">Bogotá, Colombia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">&copy; 2024 Maikol Lozano. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
