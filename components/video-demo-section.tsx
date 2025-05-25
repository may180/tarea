export function VideoDemoSection() {
  return (
    <section id="video-demo" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Demostración del Proyecto</h2>
        <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
          Video explicativo del proceso de desarrollo de este portafolio web, desde los wireframes iniciales hasta la
          implementación final con Next.js y el deploy en producción.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-slate-100 flex items-center justify-center">
              {/* Aquí va tu video de YouTube o el que subas */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/TU_VIDEO_ID"
                title="Demostración - Desarrollo de Portafolio Web con Next.js"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Placeholder mientras subes el video */}
              {/* <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Video de Demostración</h3>
                <p className="text-slate-600">
                  Próximamente: Video explicativo completo del desarrollo del proyecto
                </p>
              </div> */}
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Contenido del Video</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-600">Proceso de Diseño</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Análisis de wireframes en Figma</li>
                    <li>• Definición de sistema de diseño</li>
                    <li>• Selección de colores y tipografía</li>
                    <li>• Principios de UX aplicados</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-600">Implementación Técnica</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Estructura del proyecto Next.js</li>
                    <li>• Componentes React modulares</li>
                    <li>• Estilos con Tailwind CSS</li>
                    <li>• Deploy en Vercel</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Datos del Proyecto</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Duración:</span> 15-20 minutos
                  </div>
                  <div>
                    <span className="font-medium">Tecnologías:</span> Next.js, React, TypeScript
                  </div>
                  <div>
                    <span className="font-medium">Estudiante:</span> Maikol Lozano Ramírez
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
