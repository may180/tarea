"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("Todos")

  const filters = ["Todos", "Académicos", "Frontend", "Fullstack"]

  const projects = [
    {
      title: "Sistema de Gestión Estudiantil",
      description:
        "Aplicación web para gestión de estudiantes desarrollada con React y Node.js. Incluye autenticación, CRUD completo y dashboard administrativo.",
      category: "Fullstack",
      image: "/images/portfolio-education.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "E-Commerce Universitario",
      description:
        "Plataforma de comercio electrónico para productos universitarios. Implementa carrito de compras, pasarela de pagos y gestión de inventario.",
      category: "Fullstack",
      image: "/images/portfolio-ecommerce.jpg",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    },
    {
      title: "Landing Page Corporativa",
      description:
        "Sitio web responsive para empresa ficticia como proyecto del módulo. Enfoque en UX/UI y optimización SEO.",
      category: "Frontend",
      image: "/images/portfolio-corporate.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    },
    {
      title: "App de Gestión de Tareas",
      description:
        "Aplicación de productividad desarrollada como proyecto final. Incluye autenticación, categorías y notificaciones.",
      category: "Frontend",
      image: "/images/portfolio-dashboard.jpg",
      technologies: ["React", "Context API", "Local Storage", "CSS Modules"],
    },
    {
      title: "Blog Académico",
      description:
        "Plataforma de blogging para compartir conocimientos técnicos. Sistema de comentarios y categorización de posts.",
      category: "Académicos",
      image: "/images/portfolio-blog.jpg",
      technologies: ["Next.js", "Markdown", "Vercel", "Git"],
    },
    {
      title: "Calculadora Científica Web",
      description:
        "Calculadora avanzada con funciones científicas desarrollada como ejercicio de lógica de programación.",
      category: "Académicos",
      image: "/images/portfolio-restaurant.jpg",
      technologies: ["JavaScript", "HTML5", "CSS3", "Math.js"],
    },
  ]

  const filteredProjects =
    activeFilter === "Todos" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Mis Proyectos Académicos</h2>

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
                <p className="mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-white/20 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  Ver código
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
