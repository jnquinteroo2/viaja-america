"use client";

import { motion } from "framer-motion";
import { Plane, Luggage, ShieldCheck, Headphones, Star } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2850&q=80";

const BENEFITS = [
  { icon: Luggage, label: "Equipaje Incluido" },
  { icon: ShieldCheck, label: "Seguro de Viaje" },
  { icon: Headphones, label: "Soporte 24/7" },
  { icon: Plane, label: "Vuelos Directos" },
];

const ROUTES = [
  {
    title: "Bogotá → Miami",
    airline: "Avianca",
    rating: 4.8,
    price: "COP 1.680.000",
    image:
      "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Medellín → Madrid",
    airline: "Iberia",
    rating: 4.7,
    price: "COP 2.720.000",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Bogotá → Cancún",
    airline: "Viva Air",
    rating: 4.6,
    price: "COP 1.120.000",
    image:
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Cartagena → Nueva York",
    airline: "JetBlue",
    rating: 4.7,
    price: "COP 1.800.000",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Bogotá → Buenos Aires",
    airline: "LATAM",
    rating: 4.8,
    price: "COP 2.040.000",
    image:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Cali → Lima",
    airline: "Copa Airlines",
    rating: 4.6,
    price: "COP 1.400.000",
    image:
      "https://images.unsplash.com/photo-1577587230708-187fdbef4d91?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function FlightsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="relative h-[45vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-brand-blue-dark/90" />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={HERO_IMAGE}
            alt="Vuelos Internacionales"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <BlurFade delay={0.3}>
            <h1 className="font-heading text-5xl font-bold leading-tight text-white drop-shadow-xl md:text-7xl">
              Vuelos
            </h1>
          </BlurFade>
          <BlurFade delay={0.4}>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Las mejores tarifas aéreas en clase ejecutiva y económica con
              beneficios exclusivos para ti.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, label }, i) => (
            <BlurFade key={label} delay={0.1 * i}>
              <div className="flex flex-col items-center gap-3 rounded-3xl border border-gray-100 bg-white p-6 shadow-md transition-shadow hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10">
                  <Icon className="h-6 w-6 text-brand-blue" />
                </div>
                <span className="text-center text-sm font-semibold text-brand-blue-dark">
                  {label}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-6 pb-24 md:px-12 md:pb-32">
        <BlurFade delay={0.1}>
          <h2 className="mb-12 font-heading text-4xl font-bold text-brand-blue-dark md:text-5xl">
            Rutas Populares
          </h2>
        </BlurFade>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {ROUTES.map((r, i) => (
            <BlurFade key={r.title} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg transition-shadow hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-blue-dark/60 to-transparent" />
                  <motion.img
                    src={r.image}
                    alt={r.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute right-4 top-4 z-20 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-md shadow-sm">
                    <Star className="h-4 w-4 fill-brand-blue text-brand-blue" />
                    <span className="text-sm font-semibold text-brand-blue-dark">
                      {r.rating}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-blue-light">
                    {r.airline}
                  </p>
                  <h3 className="mb-4 font-heading text-xl font-bold text-brand-blue-dark">
                    {r.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        Ida y vuelta
                      </p>
                      <p className="text-2xl font-bold text-brand-blue">
                        {r.price}
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/573007980870?text=${encodeURIComponent(`Hola, estoy interesado en cotizar el vuelo: ${r.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#f4c45c] text-[var(--brand-blue-dark)] hover:bg-[#f0b830] font-bold px-6 py-2.5 text-sm inline-flex items-center justify-center transition-all shadow-md active:scale-95"
                    >
                      Cotizar
                    </a>
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}