import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LogoMarquee } from "@/components/events/logo-marquee";

const CATEGORIES = [
  {
    title: "Eventos deportivos",
    description: "Equipos y staff",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Eventos empresariales",
    description: "Convenciones e incentivos",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Eventos de temporada",
    description: "Navidad y fin de año",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
  },
];

export function EventsHighlightSection() {
  return (
    <section className="relative z-10 bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-brand-blue">
              Eventos
            </h2>
            <h3 className="font-heading text-4xl font-semibold tracking-tight text-[var(--brand-blue-dark)] md:text-5xl">
              Logística completa para tu evento
            </h3>
          </div>
          <Link
            href="/events"
            className="group flex items-center gap-2 font-medium text-brand-blue transition-colors hover:text-brand-gold-dark"
          >
            Ver eventos
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.title}
              href="/events"
              className="group relative block h-80 overflow-hidden rounded-2xl shadow-lg md:h-[400px]"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 z-20 w-full p-8">
                <span className="mb-2 block text-sm font-medium text-slate-300">
                  {category.description}
                </span>
                <h4 className="font-heading text-2xl font-semibold text-white md:text-3xl">
                  {category.title}
                </h4>
              </div>
            </Link>
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
