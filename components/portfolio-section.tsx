"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("Todos")

  const filters = ["Todos", "Diseño", "Desarrollo", "E-Commerce"]

  const projects = [
    {
      title: "Tienda Online de Moda",
      description: "E-Commerce completo con pasarela de pagos y sistema de inventario.",
      category: "E-Commerce",
      image: "/images/portfolio-ecommerce.jpg",
    },
    {
      title: "Sitio Corporativo",
      description: "Diseño y desarrollo de sitio web para empresa de consultoría.",
      category: "Desarrollo",
      image: "/images/portfolio-corporate.jpg",
    },
    {
      title: "App de Restaurante",
      description: "Diseño de interfaz para aplicación móvil de pedidos de comida.",
      category: "Diseño",
      image: "/images/portfolio-restaurant.jpg",
    },
    {
      title: "Blog de Viajes",
      description: "Plataforma de blogging con sistema de gestión de contenidos.",
      category: "Desarrollo",
      image: "/images/portfolio-blog.jpg",
    },
    {
      title: "Plataforma Educativa",
      description: "Sistema de aprendizaje en línea con cursos y certificaciones.",
      category: "Desarrollo",
      image: "/images/portfolio-education.jpg",
    },
    {
      title: "Dashboard Analítico",
      description: "Interfaz para sistema de análisis y visualización de datos.",
      category: "Diseño",
      image: "/images/portfolio-dashboard.jpg",
    },
  ]

  const filteredProjects =
    activeFilter === "Todos" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Mi Portafolio</h2>

        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  Ver detalles
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
