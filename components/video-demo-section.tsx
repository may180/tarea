export function VideoDemoSection() {
  return (
    <section id="video-demo" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Demostración del Proyecto</h2>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          Videos explicativos del proceso de desarrollo de este portafolio web, desde los wireframes iniciales hasta la
          implementación final con Next.js y el deploy en producción.
        </p>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Primer Video */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-slate-100">
              <iframe
                className="w-full h-full"
                src="https://www.loom.com/embed/989e6dc8afda48d98b4ff15f69e86d1c?sid=327c6ea9-953e-4339-9f43-761139d49383"
                title="Parte 1 - Análisis y Diseño del Portafolio Web"
                frameBorder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Parte 1: Análisis y Diseño</h3>
              <p className="text-slate-600">
                Explicación del proceso de wireframing, análisis de requisitos y definición del sistema de diseño.
              </p>
            </div>
          </div>

          {/* Segundo Video */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-slate-100">
              <iframe
                className="w-full h-full"
                src="https://www.loom.com/embed/1a3019fcfbdd4e47a809179b1c151e1d?sid=c9bb80b1-463a-4b53-8e30-0b6521f7e8fe"
                title="Parte 2 - Implementación y Deploy del Portafolio Web"
                frameBorder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Parte 2: Implementación y Deploy</h3>
              <p className="text-slate-600">
                Desarrollo con Next.js, implementación de componentes React y proceso de deploy en Vercel.
              </p>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Contenido de los Videos</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">🎨 Proceso de Diseño</h4>
                <ul className="text-slate-600 space-y-2">
                  <li>• Análisis de wireframes en Figma</li>
                  <li>• Definición de sistema de diseño</li>
                  <li>• Selección de colores y tipografía</li>
                  <li>• Principios de UX aplicados</li>
                  <li>• Estructura de información</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">⚡ Implementación Técnica</h4>
                <ul className="text-slate-600 space-y-2">
                  <li>• Estructura del proyecto Next.js</li>
                  <li>• Componentes React modulares</li>
                  <li>• Estilos con Tailwind CSS</li>
                  <li>• Optimización de imágenes</li>
                  <li>• Deploy en Vercel</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-4">📊 Datos del Proyecto</h4>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-medium">Duración Total:</span>
                  <br />
                  <span className="text-blue-600">25-30 minutos</span>
                </div>
                <div>
                  <span className="font-medium">Tecnologías:</span>
                  <br />
                  <span className="text-blue-600">Next.js, React, TypeScript</span>
                </div>
                <div>
                  <span className="font-medium">Estudiante:</span>
                  <br />
                  <span className="text-blue-600">Maikol Lozano Ramírez</span>
                </div>
                <div>
                  <span className="font-medium">Universidad:</span>
                  <br />
                  <span className="text-blue-600">Iberoamericana - 5° Semestre</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
