"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2850&q=80";

const EVENT_SECTIONS = [
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
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="relative h-[45vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-[var(--brand-blue-dark)]/90" />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={HERO_IMAGE}
            alt="Eventos"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <BlurFade delay={0.3}>
            <h1 className="font-heading text-5xl font-bold leading-tight text-white drop-shadow-xl md:text-7xl">
              Eventos
            </h1>
          </BlurFade>
          <BlurFade delay={0.4}>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Soluciones integrales para eventos empresariales, deportivos y de
              temporada con la más alta calidad.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        {EVENT_SECTIONS.map((section, sectionIndex) => {
          const isEven = sectionIndex % 2 === 0;
          return (
            <BlurFade
              key={section.title}
              delay={0.1 * sectionIndex}
              className="mb-24 last:mb-0"
            >
              <div
                className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="w-full overflow-hidden rounded-[2rem] shadow-xl lg:w-1/2">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-[320px] w-full object-cover md:h-[420px]"
                  />
                </div>

                <div className="w-full lg:w-1/2">
                  <h2 className="mb-4 font-heading text-3xl font-bold text-[var(--brand-blue-dark)] md:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mb-8 text-base leading-relaxed text-muted-foreground">
                    {section.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-orange)]/10">
                          <Check className="h-4 w-4 text-[var(--brand-orange)]" />
                        </div>
                        <span className="text-base font-medium text-[var(--brand-blue-dark)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/573007980870?text=${encodeURIComponent(`Hola, estoy interesado en cotizar el servicio para: ${section.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#f4c45c] text-[var(--brand-blue-dark)] hover:bg-[#f0b830] font-bold rounded-xl px-6 py-3 inline-flex items-center gap-2 shadow-lg transition-all active:scale-95"
                  >
                    Cotizar <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </BlurFade>
          );
        })}
      </section>
    </main>
  );
}