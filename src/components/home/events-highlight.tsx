import Link from "next/link";
import { ArrowRight, Briefcase, Music, Trophy } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { LogoMarquee } from "@/components/events/logo-marquee";

const CATEGORIES = [
  {
    icon: Trophy,
    title: "Deportivos",
    text: "Alojamiento, transporte y alimentación para equipos y staff en competencias.",
  },
  {
    icon: Briefcase,
    title: "Corporativos",
    text: "Convenciones, incentivos y reuniones a la altura de tu marca.",
  },
  {
    icon: Music,
    title: "Culturales y musicales",
    text: "Logística para artistas, producción e invitados en festivales y conciertos.",
  },
];

export function EventsHighlightSection() {
  return (
    <section className="relative z-10 bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <BlurFade className="max-w-2xl">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-brand-blue">
              Eventos
            </h2>
            <h3 className="font-heading text-4xl font-semibold tracking-tight text-[var(--brand-blue-dark)] md:text-5xl">
              Logística para eventos que no pueden fallar
            </h3>
          </BlurFade>
          <Link
            href="/events"
            className="group flex items-center gap-2 font-semibold text-brand-blue transition-colors hover:text-brand-gold-dark"
          >
            Ver eventos
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {CATEGORIES.map(({ icon: Icon, title, text }, i) => (
            <BlurFade key={title} delay={0.1 * i}>
              <Link
                href="/events#servicios"
                className="group flex h-full flex-col rounded-[2rem] border border-gray-100 bg-gray-50/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/50 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 transition-colors group-hover:bg-brand-gold/20">
                  <Icon className="h-6 w-6 text-brand-blue" />
                </div>
                <h4 className="mt-6 font-heading text-2xl font-bold text-[var(--brand-blue-dark)]">
                  {title}
                </h4>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Han confiado en nosotros
        </p>
        <LogoMarquee />
      </div>
    </section>
  );
}
