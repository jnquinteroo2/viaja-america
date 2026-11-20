"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  Check,
  ClipboardList,
  Languages,
  MessageCircle,
  Music,
  PartyPopper,
  PenLine,
  Trophy,
  Truck,
  Flag,
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { LogoMarquee } from "@/components/events/logo-marquee";
import {
  EVENTS_VIDEO_URL,
  PARTICIPATIONS,
  videoPoster,
  waLink,
} from "@/components/events/data";
import { cn } from "@/lib/utils";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2850&q=80";

const EXPERIENCE_IMAGE =
  "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1400&q=80";

const SERVICES = [
  {
    icon: Trophy,
    title: "Eventos deportivos",
    description:
      "Cubrimos las necesidades de equipos y staff durante competencias nacionales e internacionales. Nos encargamos de la logística para que tú te concentres en competir.",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80",
    items: [
      "Alojamiento de equipos y staff",
      "Coordinación del evento",
      "Acompañamiento logístico",
      "Bodegas para equipos",
      "Alimentación especial",
    ],
    featured: true,
  },
  {
    icon: Briefcase,
    title: "Eventos corporativos",
    description:
      "Soluciones integrales para empresas que buscan experiencias corporativas a la altura de su marca, desde la logística hasta la ejecución.",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
    items: ["Reuniones y comités", "Convenciones", "Incentivos", "Celebraciones especiales"],
  },
  {
    icon: Music,
    title: "Culturales y musicales",
    description:
      "Acompañamos festivales, conciertos y eventos de entretenimiento con alojamiento, transporte y coordinación para artistas, producción e invitados.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    items: ["Artistas y producción", "Transporte", "Atención a invitados"],
  },
  {
    icon: PartyPopper,
    title: "Eventos de temporada",
    description:
      "Celebra las fechas más especiales del año con planes diseñados para crear recuerdos: navidad, fin de año y días especiales.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    items: ["Navidad", "Fiestas de fin de año", "Salones y recorridos"],
  },
  {
    icon: Languages,
    title: "Servicios de traducción",
    description:
      "Facilitamos la comunicación entre participantes, equipos e invitados de diferentes idiomas para que nada se pierda en el camino.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    items: ["Delegaciones internacionales", "Reuniones y conferencias", "Atención a invitados"],
    accent: true,
  },
];

const STEPS = [
  {
    icon: PenLine,
    title: "Cuéntanos tu evento",
    text: "Fechas, sede, número de asistentes y lo que necesitas resolver.",
  },
  {
    icon: ClipboardList,
    title: "Propuesta a la medida",
    text: "Armamos alojamiento, transporte, alimentación y traducción en una sola propuesta.",
  },
  {
    icon: Truck,
    title: "Logística en terreno",
    text: "Coordinamos y acompañamos a tu equipo antes y durante el evento.",
  },
  {
    icon: Flag,
    title: "Cierre sin pendientes",
    text: "Hacemos seguimiento hasta el regreso de cada participante.",
  },
];

const CATEGORY_STYLES: Record<string, string> = {
  Ciclismo: "bg-brand-gold/15 text-brand-gold",
  Deportivo: "bg-brand-blue-light/20 text-sky-300",
  Musical: "bg-white/10 text-white",
};

export default function EventsPage() {
  const hasVideo = EVENTS_VIDEO_URL.length > 0;

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* HERO */}
      <section className="relative flex min-h-[560px] w-full items-center overflow-hidden md:h-[78vh]">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {hasVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster={videoPoster(EVENTS_VIDEO_URL)}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={EVENTS_VIDEO_URL} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={HERO_IMAGE}
              alt="Asistentes en un evento"
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-blue-dark)]/95 via-[var(--brand-blue-dark)]/70 to-black/30" />
        </motion.div>

        <div className="container relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12">
          <div className="max-w-2xl">
            <BlurFade delay={0.2}>
              <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
                Hacemos que tus eventos sucedan
              </h1>
            </BlurFade>
            <BlurFade delay={0.3}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                Logística integral para eventos deportivos, corporativos,
                culturales y de temporada: alojamiento, transporte,
                alimentación y traducción para equipos, staff e invitados.
              </p>
            </BlurFade>
            <BlurFade delay={0.4}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink("Hola, quiero cotizar la logística de un evento.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-8 py-4 text-base font-bold text-[var(--brand-blue-dark)] shadow-lg transition-all hover:bg-brand-gold-dark hover:shadow-xl active:scale-[0.98]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Cotizar mi evento
                </a>
                <a
                  href="#experiencia"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  Ver experiencia
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section aria-labelledby="clientes-title" className="border-b border-gray-100 bg-white py-14">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <p
            id="clientes-title"
            className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
          >
            Han confiado en nosotros
          </p>
        </div>
        <LogoMarquee />
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="container mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <BlurFade>
          <div className="mb-14 max-w-2xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[var(--brand-blue-dark)] md:text-5xl">
              Todo lo que tu evento necesita
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Un solo equipo para resolver la logística de principio a fin.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <BlurFade
                key={service.title}
                delay={0.08 * i}
                className={cn(service.featured && "lg:col-span-2")}
              >
                <article
                  className={cn(
                    "group flex h-full flex-col overflow-hidden rounded-[2rem] border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                    service.accent ? "border-brand-gold" : "border-gray-100"
                  )}
                >
                  <div
                    className={cn(
                      "relative w-full overflow-hidden",
                      service.featured ? "aspect-[16/9] lg:aspect-[21/9]" : "aspect-[16/10]"
                    )}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes={
                        service.featured
                          ? "(max-width: 1024px) 100vw, 66vw"
                          : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      }
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur">
                      <Icon className="h-5 w-5 text-brand-blue" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h3 className="font-heading text-2xl font-bold text-[var(--brand-blue-dark)]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1.5 text-sm font-medium text-[var(--brand-blue-dark)]"
                        >
                          <Check className="h-3.5 w-3.5 text-brand-gold-dark" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={waLink(`Hola, quiero cotizar: ${service.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 pt-7 text-base font-bold text-brand-blue transition-colors hover:text-brand-gold-dark"
                    >
                      Cotizar
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              </BlurFade>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="scroll-mt-20 bg-surface-navy py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <BlurFade>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-white md:text-5xl">
                Experiencia real en el terreno
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                Hemos acompañado a equipos, organizadores y delegaciones en
                algunas de las competencias y eventos más importantes del
                país.
              </p>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {PARTICIPATIONS.map((event) => (
                  <li
                    key={event.name}
                    className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-surface-navy-card p-4 transition-colors hover:border-brand-gold/40"
                  >
                    <span
                      className={cn(
                        "w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold",
                        CATEGORY_STYLES[event.category]
                      )}
                    >
                      {event.category}
                    </span>
                    <span className="font-semibold text-white">{event.name}</span>
                  </li>
                ))}
              </ul>
            </BlurFade>

            <BlurFade delay={0.15}>
              <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/10">
                {hasVideo ? (
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={videoPoster(EVENTS_VIDEO_URL)}
                    className="h-full w-full bg-black object-cover"
                  >
                    <source src={EVENTS_VIDEO_URL} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={EXPERIENCE_IMAGE}
                    alt="Logística en un evento deportivo"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="container mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <BlurFade>
          <h2 className="mb-14 max-w-2xl font-heading text-3xl font-bold tracking-tight text-[var(--brand-blue-dark)] md:text-5xl">
            Así trabajamos
          </h2>
        </BlurFade>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <BlurFade key={step.title} delay={0.1 * i}>
                <div className="relative h-full rounded-[2rem] border border-gray-100 bg-gray-50/60 p-7">
                  <span className="font-heading text-sm font-bold text-brand-gold-dark">
                    0{i + 1}
                  </span>
                  <Icon className="mt-4 h-7 w-7 text-brand-blue" />
                  <h3 className="mt-4 font-heading text-xl font-bold text-[var(--brand-blue-dark)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container mx-auto max-w-7xl px-6 pb-24 md:px-12 md:pb-32">
        <BlurFade>
          <div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-[var(--brand-blue-dark)] p-8 md:flex-row md:items-center md:p-14">
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                Cuéntanos de tu evento
              </h2>
              <p className="mt-3 text-lg text-white/75">
                Te respondemos con una propuesta a la medida de tus fechas,
                sede y número de asistentes.
              </p>
            </div>
            <a
              href={waLink("Hola, quiero cotizar la logística de un evento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-gold px-8 py-4 text-base font-bold text-[var(--brand-blue-dark)] shadow-lg transition-all hover:bg-brand-gold-dark hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              Hablar por WhatsApp
            </a>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
