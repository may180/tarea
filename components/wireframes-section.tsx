import Image from "next/image"

export function WireframesSection() {
  const wireframes = [
    {
      title: "Página Principal",
      description:
        "Wireframe inicial mostrando la estructura básica del hero section, sección de servicios y portafolio.",
      image: "/images/wireframe-home.jpg",
    },
    {
      title: "Página de Portafolio",
      description: "Estructura de la galería de proyectos con sistema de filtrado por categorías.",
      image: "/images/wireframe-portfolio.jpg",
    },
    {
      title: "Página de Contacto",
      description: "Diseño inicial del formulario de contacto y sección de información de contacto.",
      image: "/images/wireframe-contact.jpg",
    },
  ]

  return (
    <section className="py-20 bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Wireframes del Proyecto</h2>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          A continuación se muestran los wireframes iniciales que definieron la estructura y flujo del sitio web. Estos
          prototipos de baja fidelidad fueron creados en Figma y sirvieron como base para el diseño final.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {wireframes.map((wireframe, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src={wireframe.image || "/placeholder.svg"}
                alt={wireframe.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover border-b border-slate-200"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-800">{wireframe.title}</h3>
                <p className="text-slate-600 text-sm">{wireframe.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
