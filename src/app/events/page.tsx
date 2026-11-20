"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { LogoMarquee } from "@/components/events/logo-marquee";
import {
  EVENTS_VIDEO_URL,
  PARTICIPATIONS,
  videoPoster,
  waLink,
} from "@/components/events/data";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2850&q=80";

const EVENT_SECTIONS = [
  {
    title: "EVENTOS DEPORTIVOS",
    description:
      "Cubrimos todas las necesidades de equipos y staff durante competencias nacionales e internacionales. Nos encargamos de la logística completa para que tú te concentres en ganar.",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1000&q=80",
    items: [
      "Alojamiento equipos",
      "Alojamiento staff",
      "Coordinación eventos",
      "Acompañamiento en la logística",
      "Bodegas para equipos",
      "Alimentación especial",
    ],
  },
  {
    title: "EVENTOS EMPRESARIALES",
    description:
      "Ofrecemos soluciones integrales para empresas que buscan experiencias corporativas únicas. Gestionamos desde la logística hasta la ejecución de eventos que reflejan la excelencia de tu marca.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1000&q=80",
    items: [
      "Reuniones",
      "Comités",
      "Convenciones",
      "Celebraciones Especiales",
      "Incentivos",
    ],
  },
  {
    title: "EVENTOS CULTURALES Y MUSICALES",
    description:
      "Acompañamos festivales, conciertos y eventos de entretenimiento con alojamiento, transporte y coordinación para artistas, producción e invitados.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80",
    items: [
      "Alojamiento artistas y producción",
      "Transporte",
      "Coordinación en sitio",
      "Atención a invitados",
    ],
  },
  {
    title: "EVENTOS DE TEMPORADA",
    description:
      "Celebra las fechas más especiales del año con paquetes diseñados para crear recuerdos imborrables. Desde navidad hasta fin de año, tenemos el plan perfecto para cada ocasión.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
    items: [
      "Eventos navidad",
      "Recorridos",
      "Salones para celebraciones",
      "Fiestas fin de año",
      "Días especiales",
    ],
  },
  {
    title: "SERVICIOS DE TRADUCCIÓN",
    description:
      "Facilitamos la comunicación entre participantes, equipos e invitados de diferentes idiomas durante tu evento.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    items: [
      "Delegaciones internacionales",
      "Reuniones y conferencias",
      "Atención a invitados",
    ],
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="relative h-[45vh] min-h-[400px] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-[var(--brand-blue-dark)]/90" />
          <Image
            src={HERO_IMAGE}
            alt="Eventos"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </motion.div>
        <div className="container relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <BlurFade delay={0.3}>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white drop-shadow-xl md:text-6xl">
              Eventos
            </h1>
          </BlurFade>
          <BlurFade delay={0.4}>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Soluciones integrales para eventos deportivos, empresariales,
              culturales y de temporada con la más alta calidad.
            </p>
          </BlurFade>
        </div>
      </section>

      <section aria-label="Nuestros clientes" className="bg-white py-14">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Han confiado en nosotros
          </p>
        </div>
        <LogoMarquee />
      </section>

      <section className="container mx-auto max-w-5xl px-6 pb-8 md:px-12">
        <BlurFade>
          <div className="overflow-hidden rounded-[2rem] bg-black shadow-xl">
            <video
              controls
              playsInline
              preload="metadata"
              poster={videoPoster(EVENTS_VIDEO_URL)}
              className="aspect-video h-auto w-full"
            >
              <source src={EVENTS_VIDEO_URL} type="video/mp4" />
            </video>
          </div>
        </BlurFade>
      </section>

      <section className="container mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        {EVENT_SECTIONS.map((section, sectionIndex) => {
          const isEven = sectionIndex % 2 === 0;
          return (
            <BlurFade key={section.title} className="mb-24 last:mb-0">
              <div
                className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="relative h-[320px] w-full overflow-hidden rounded-[2rem] shadow-xl md:h-[420px] lg:w-1/2">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="w-full lg:w-1/2">
                  <h2 className="mb-4 font-heading text-3xl font-bold text-[var(--brand-blue-dark)] md:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                    {section.description}
                  </p>
                  <ul className="mb-8 space-y-4">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/10">
                          <Check className="h-4 w-4 text-brand-gold" />
                        </div>
                        <span className="text-base font-medium text-[var(--brand-blue-dark)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(`Hola, estoy interesado en cotizar el servicio para: ${section.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-8 py-3 font-bold text-[var(--brand-blue-dark)] shadow-lg transition-all hover:bg-brand-gold-dark hover:shadow-xl active:scale-[0.98]"
                  >
                    COTIZAR <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </BlurFade>
          );
        })}
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-6 text-center md:px-12">
          <BlurFade>
            <h2 className="font-heading text-3xl font-bold text-[var(--brand-blue-dark)] md:text-4xl">
              Eventos en los que hemos participado
            </h2>
          </BlurFade>
          <BlurFade delay={0.1}>
            <ul className="mx-auto mt-10 grid max-w-3xl gap-x-10 gap-y-4 text-left sm:grid-cols-2">
              {PARTICIPATIONS.map((event) => (
                <li key={event.name} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/10">
                    <Check className="h-4 w-4 text-brand-gold" />
                  </div>
                  <span className="text-base font-medium text-[var(--brand-blue-dark)]">
                    {event.name}
                  </span>
                </li>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
