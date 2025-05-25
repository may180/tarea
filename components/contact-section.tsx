"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("¡Mensaje enviado correctamente!")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Contáctame</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">¿Listo para comenzar tu proyecto?</h3>
            <p className="text-slate-600 mb-8">
              Si estás buscando un profesional para tu próximo proyecto web o simplemente quieres hacer una pregunta, no
              dudes en contactarme.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-slate-600">hola@maikollozano.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Teléfono</h4>
                  <p className="text-slate-600">+57 300 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Ubicación</h4>
                  <p className="text-slate-600">Bogotá, Colombia</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="subject">Asunto</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="¿En qué puedo ayudarte?"
                required
              />
            </div>
            <div>
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntame sobre tu proyecto..."
                rows={6}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
