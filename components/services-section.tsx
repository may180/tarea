import { Monitor, Code, Database, Smartphone, GitBranch, Users } from "lucide-react"

export function ServicesSection() {
  const competencies = [
    {
      icon: Code,
      title: "Desarrollo Frontend",
      description:
        "Creación de interfaces de usuario modernas y responsivas utilizando React, Next.js, HTML5, CSS3 y JavaScript.",
    },
    {
      icon: Database,
      title: "Desarrollo Backend",
      description:
        "Implementación de APIs REST, manejo de bases de datos SQL/NoSQL y arquitectura de servidores con Node.js.",
    },
    {
      icon: Monitor,
      title: "Diseño UI/UX",
      description:
        "Aplicación de principios de diseño centrado en el usuario, wireframing, prototipado y testing de usabilidad.",
    },
    {
      icon: GitBranch,
      title: "Control de Versiones",
      description: "Manejo avanzado de Git y GitHub para colaboración en equipo y gestión de proyectos de software.",
    },
    {
      icon: Smartphone,
      title: "Desarrollo Responsive",
      description:
        "Implementación de diseños adaptativos que funcionan perfectamente en todos los dispositivos y tamaños de pantalla.",
    },
    {
      icon: Users,
      title: "Metodologías Ágiles",
      description:
        "Aplicación de Scrum y Kanban en proyectos de desarrollo, con enfoque en entrega continua y mejora iterativa.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Competencias Técnicas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencies.map((competency) => (
            <div
              key={competency.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <competency.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">{competency.title}</h3>
              <p className="text-slate-600">{competency.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
