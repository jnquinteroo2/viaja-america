"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2850&q=80";

const WA_NUMBER = "573187080678";

const CONTACT_CARDS = [
  {
    icon: MapPin,
    title: "Visítanos",
    detail: "Funza, Cundinamarca\nColombia",
  },
  {
    icon: Phone,
    title: "Llámanos",
    detail: "+57 318 708 0678",
  },
  {
    icon: Mail,
    title: "Escríbenos",
    detail: "contacto@viajaamerica.com",
  },
  {
    icon: Clock,
    title: "Horario",
    detail: "Lun–Vie: 8AM – 6PM\nSáb: 9AM – 1PM",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hola, quiero contactarlos.`,
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      email ? `Correo: ${email}` : null,
      `Mensaje: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="relative h-[45vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-[var(--brand-blue-dark)]/90" />
          <Image
            src={HERO_IMAGE}
            alt="Contacto Viaja América"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
        <div className="container relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <BlurFade delay={0.2}>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white drop-shadow-xl md:text-6xl">
              Contáctanos
            </h1>
          </BlurFade>
          <BlurFade delay={0.4}>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Estamos listos para asesorarte. Comunícate con nosotros para
              planear tus próximas vacaciones.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map(({ icon: Icon, title, detail }, i) => (
            <BlurFade key={title} delay={0.1 * i}>
              <div className="flex flex-col items-center gap-3 rounded-3xl border border-gray-100 bg-white p-6 shadow-md transition-shadow hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-blue)]/10">
                  <Icon className="h-6 w-6 text-[var(--brand-blue)]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[var(--brand-blue-dark)]">
                  {title}
                </h3>
                <p className="whitespace-pre-line text-center text-sm leading-relaxed text-muted-foreground">
                  {detail}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-6 pb-24 md:px-12 md:pb-32">
        <BlurFade delay={0.1}>
          <div className="overflow-hidden rounded-[2rem] border border-[var(--brand-blue)]/20 bg-white p-8 shadow-xl md:p-10">
            <h2 className="mb-8 font-heading text-3xl font-bold text-[var(--brand-blue-dark)]">
              Envíanos un mensaje
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-semibold text-[var(--brand-blue-dark)]">
                    Tu nombre
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm outline-none transition-colors focus:border-[var(--brand-blue)] focus:bg-white"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-phone" className="text-sm font-semibold text-[var(--brand-blue-dark)]">
                    Tu número de teléfono
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm outline-none transition-colors focus:border-[var(--brand-blue)] focus:bg-white"
                    placeholder="Tu número de teléfono"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-semibold text-[var(--brand-blue-dark)]">
                  Correo electrónico
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm outline-none transition-colors focus:border-[var(--brand-blue)] focus:bg-white"
                  placeholder="correo@ejemplo.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-semibold text-[var(--brand-blue-dark)]">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm outline-none transition-colors focus:border-[var(--brand-blue)] focus:bg-white"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-brand-gold px-8 text-base font-bold text-[var(--brand-blue-dark)] shadow-lg transition-all hover:bg-brand-gold-dark hover:shadow-xl active:scale-[0.98] md:w-auto"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
