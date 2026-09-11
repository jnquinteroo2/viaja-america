"use client";

import Link from "next/link";
import { PlaneTakeoff, Home, ArrowRight, Plane, Building2, MapPin, Phone } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const QUICK_LINKS = [
  { icon: Plane, title: "Vuelos", href: "/flights", desc: "Encuentra tu próximo vuelo" },
  { icon: Building2, title: "Alojamiento", href: "/accommodations", desc: "Hoteles y hospedajes" },
  { icon: MapPin, title: "Destinos", href: "/destinations", desc: "Explora el mundo" },
  { icon: Phone, title: "Contáctanos", href: "/contact", desc: "Te ayudamos a planear" },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="relative flex min-h-[65vh] w-full flex-col items-center justify-center overflow-hidden bg-[var(--brand-blue-dark)] px-6 py-24 text-center">
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[var(--brand-blue-light)]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[var(--brand-blue-light)]/20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center">
          <BlurFade delay={0.1}>
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <PlaneTakeoff className="h-10 w-10 text-brand-gold" strokeWidth={1.5} />
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h1 className="font-heading text-7xl font-bold leading-none text-white drop-shadow-xl md:text-9xl">
              404
            </h1>
          </BlurFade>

          <BlurFade delay={0.35}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Parece que esta ruta se perdió en el camino. La página que buscas
              no existe o fue movida a otro destino.
            </p>
          </BlurFade>

          <BlurFade delay={0.5}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gold px-8 text-base font-bold text-[var(--brand-blue-dark)] shadow-lg transition-all hover:bg-brand-gold-dark hover:shadow-xl active:scale-[0.98]"
              >
                <Home className="h-4 w-4" />
                Volver al inicio
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                Contáctanos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <BlurFade delay={0.1}>
          <h2 className="mb-10 text-center font-heading text-2xl font-bold text-[var(--brand-blue-dark)] md:text-3xl">
            Tal vez estabas buscando esto
          </h2>
        </BlurFade>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_LINKS.map(({ icon: Icon, title, href, desc }, i) => (
            <BlurFade key={title} delay={0.1 * i}>
              <Link
                href={href}
                className="group flex h-full flex-col items-center gap-3 rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-blue)]/10 transition-colors group-hover:bg-[var(--brand-blue)]/20">
                  <Icon className="h-6 w-6 text-[var(--brand-blue)]" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[var(--brand-blue-dark)]">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
