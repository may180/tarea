import Image from "next/image"

export function AboutSection() {
  const skills = [
    { name: "Diseño UI/UX", percentage: 95 },
    { name: "Desarrollo Frontend", percentage: 90 },
    { name: "WordPress", percentage: 85 },
    { name: "SEO", percentage: 80 },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Sobre Mí</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-profile.jpg"
                alt="Maikol Lozano"
                width={400}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div>
            <p className="text-slate-600 mb-6">
              Con más de 5 años de experiencia en diseño y desarrollo web, he ayudado a decenas de clientes a establecer
              su presencia en línea con sitios web atractivos y funcionales.
            </p>
            <p className="text-slate-600 mb-8">
              Mi enfoque combina el diseño centrado en el usuario con las mejores prácticas de desarrollo para crear
              productos digitales que no solo se ven bien, sino que también funcionan perfectamente.
            </p>

            <div>
              <h3 className="text-2xl font-bold mb-6">Mis habilidades</h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-slate-600">{skill.percentage}%</span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
