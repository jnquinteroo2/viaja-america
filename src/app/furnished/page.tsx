"use client";

import { motion } from "framer-motion";
import { Home, Sofa, Tv, Wifi, Star } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=2850&q=80";

const WA_NUMBER = "573007980870";

const AMENITIES = [
  { icon: Home, label: "Totalmente Amoblado" },
  { icon: Sofa, label: "Muebles de Diseño" },
  { icon: Tv, label: "Smart TV Premium" },
  { icon: Wifi, label: "Fibra Óptica 1Gbps" },
];

const PROPERTIES = [
  {
    title: "Loft Ejecutivo Chapinero",
    location: "Bogotá, Colombia",
    rating: 4.8,
    price: "COP 380.000",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Estudio Moderno Medellín",
    location: "Medellín, Colombia",
    rating: 4.7,
    price: "COP 300.000",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Suite Amoblada Cartagena",
    location: "Cartagena, Colombia",
    rating: 4.9,
    price: "COP 480.000",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Departamento Ejecutivo CDMX",
    location: "Ciudad de México",
    rating: 4.8,
    price: "COP 440.000",
    image:
      "https://images.unsplash.com/photo-1529408686214-b48b8532f72c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Residencia Amoblada Miami",
    location: "Miami, EE.UU.",
    rating: 4.8,
    price: "COP 720.000",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Penthouse Amoblado Lima",
    location: "Lima, Perú",
    rating: 4.7,
    price: "COP 520.000",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function FurnishedPage() {
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
            alt="Amoblados de Lujo"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <BlurFade delay={0.2}>
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-white/80 md:text-base">
              Estancias Prolongadas
            </span>
          </BlurFade>
          <BlurFade delay={0.3}>
            <h1 className="font-heading text-5xl font-bold leading-tight text-white drop-shadow-xl md:text-7xl">
              Amoblados
            </h1>
          </BlurFade>
          <BlurFade delay={0.4}>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Espacios completamente amoblados para estadías corporativas o de
              larga duración con todas las comodidades.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {AMENITIES.map(({ icon: Icon, label }, i) => (
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
            Propiedades Amobladas
          </h2>
        </BlurFade>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {PROPERTIES.map((p, i) => (
            <BlurFade key={p.title} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg transition-shadow hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-blue-dark/60 to-transparent" />
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute right-4 top-4 z-20 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-md shadow-sm">
                    <Star className="h-4 w-4 fill-brand-blue text-brand-blue" />
                    <span className="text-sm font-semibold text-brand-blue-dark">
                      {p.rating}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-blue-light">
                    {p.location}
                  </p>
                  <h3 className="mb-4 font-heading text-xl font-bold text-brand-blue-dark">
                    {p.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        Desde / noche
                      </p>
                      <p className="text-2xl font-bold text-brand-blue">
                        {p.price}
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hola, estoy interesado en cotizar el amoblado: ${p.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-[#f4c45c] px-6 py-2.5 text-sm font-bold text-[var(--brand-blue-dark)] shadow-lg transition-all hover:bg-[#f0b830] active:scale-95"
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
