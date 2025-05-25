export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Marco transformó completamente nuestra presencia en línea. Su atención al detalle y comprensión de nuestras necesidades fueron excepcionales. ¡Nuestro nuevo sitio web ha aumentado nuestras conversiones en un 40%!",
      author: "Laura Méndez",
      role: "CEO, Moda Bogotá",
    },
    {
      text: "Trabajar con Marco fue una experiencia increíble. Entregó nuestro proyecto antes de lo esperado y superó todas nuestras expectativas. Definitivamente lo recomendaría a cualquiera que necesite un profesional del diseño web.",
      author: "Carlos Ruiz",
      role: "Director de Marketing, TechColombia",
    },
    {
      text: "Como pequeña empresa, necesitábamos un sitio web que destacara sin gastar una fortuna. Marco nos dio exactamente eso: un diseño hermoso, funcional y asequible. ¡Estamos encantados con los resultados!",
      author: "Ana Torres",
      role: "Propietaria, Café Zona Rosa",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Lo que dicen mis clientes</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <p className="text-slate-600 italic mb-6 text-lg">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-slate-800">{testimonial.author}</p>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
