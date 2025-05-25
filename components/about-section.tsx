import Image from "next/image"

export function AboutSection() {
  const skills = [
    { name: "HTML5 & CSS3", percentage: 90 },
    { name: "JavaScript & TypeScript", percentage: 85 },
    { name: "React & Next.js", percentage: 80 },
    { name: "Node.js & Express", percentage: 75 },
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
                alt="Maikol Lozano - Estudiante Universidad Iberoamericana"
                width={400}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div>
            <p className="text-slate-600 mb-6">
              Soy estudiante de 5° semestre de Ingeniería de Software en la Universidad Iberoamericana. Mi pasión por la
              tecnología me ha llevado a especializarme en desarrollo web, combinando conocimientos teóricos con
              práctica hands-on en proyectos reales.
            </p>
            <p className="text-slate-600 mb-8">
              Durante mi formación académica, he desarrollado competencias en metodologías ágiles, patrones de diseño,
              bases de datos y arquitectura de software. Este portafolio representa la culminación de mis aprendizajes
              en el módulo de desarrollo web.
            </p>

            <div>
              <h3 className="text-2xl font-bold mb-6">Tecnologías que manejo</h3>
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
