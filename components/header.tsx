"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <Link href="#" className="text-2xl font-bold text-blue-600">
            Maikol<span className="text-slate-800">Lozano</span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <Link href="#hero" className="text-slate-800 font-semibold hover:text-blue-600 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-800 font-semibold hover:text-blue-600 transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-800 font-semibold hover:text-blue-600 transition-colors">
                  Competencias
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-slate-800 font-semibold hover:text-blue-600 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#video-demo" className="text-slate-800 font-semibold hover:text-blue-600 transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-800 font-semibold hover:text-blue-600 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="#hero"
                  className="block text-slate-800 font-semibold hover:text-blue-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block text-slate-800 font-semibold hover:text-blue-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="block text-slate-800 font-semibold hover:text-blue-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Competencias
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="block text-slate-800 font-semibold hover:text-blue-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="#video-demo"
                  className="block text-slate-800 font-semibold hover:text-blue-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block text-slate-800 font-semibold hover:text-blue-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
