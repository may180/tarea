import { Monitor, Code, ShoppingCart, Search, Smartphone, Palette } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Diseño Web",
      description:
        "Creo diseños modernos y atractivos que reflejan la identidad de tu marca y mejoran la experiencia del usuario.",
    },
    {
      icon: Code,
      title: "Desarrollo Web",
      description:
        "Desarrollo sitios web responsivos, rápidos y optimizados para todos los dispositivos y navegadores.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description: "Soluciones completas de comercio electrónico para vender tus productos o servicios en línea.",
    },
    {
      icon: Search,
      title: "SEO",
      description:
        "Optimizo tu sitio web para mejorar su visibilidad en los motores de búsqueda y atraer más clientes.",
    },
    {
      icon: Smartphone,
      title: "Diseño de Apps",
      description: "Diseño interfaces intuitivas y atractivas para aplicaciones móviles que tus usuarios amarán.",
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Desarrollo identidades visuales coherentes que comunican efectivamente los valores de tu marca.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Mis Servicios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
