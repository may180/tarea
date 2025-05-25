export function TestimonialsSection() {
  const references = [
    {
      text: "Maikol ha demostrado excelentes habilidades en el desarrollo de aplicaciones web. Su comprensión de los conceptos de ingeniería de software y su capacidad para implementar soluciones creativas lo destacan entre sus compañeros.",
      author: "Prof. Ana María González",
      role: "Docente de Desarrollo Web - Universidad Iberoamericana",
    },
    {
      text: "Durante el proyecto grupal, Maikol mostró liderazgo técnico y gran capacidad de trabajo en equipo. Su dominio de las tecnologías frontend y su atención al detalle fueron fundamentales para el éxito del proyecto.",
      author: "Carlos Mendoza",
      role: "Compañero de Equipo - Proyecto Integrador",
    },
    {
      text: "Como tutor de programación, he observado el crecimiento constante de Maikol. Su dedicación al aprendizaje y su capacidad para resolver problemas complejos lo posicionan como un futuro desarrollador exitoso.",
      author: "Ing. Roberto Silva",
      role: "Tutor Académico - Laboratorio de Software",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Referencias Académicas</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {references.map((reference, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <p className="text-slate-600 italic mb-6 text-lg">"{reference.text}"</p>
                <div>
                  <p className="font-bold text-slate-800">{reference.author}</p>
                  <p className="text-slate-500 text-sm">{reference.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
