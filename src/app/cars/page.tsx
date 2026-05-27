"use client";

import { motion } from "framer-motion";
import { Fuel, Cog, ShieldCheck, Star, Users } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=2850&q=80";

const BENEFITS = [
  { icon: Fuel, label: "Kilometraje Ilimitado" },
  { icon: Cog, label: "Transmisión Automática" },
  { icon: ShieldCheck, label: "Seguro Full Cover" },
  { icon: Users, label: "5 Pasajeros" },
];

const VEHICLES = [
  {
    title: "BMW Serie 3",
    category: "Sedán Premium",
    rating: 4.9,
    price: "COP 350.000",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Mercedes-Benz GLC",
    category: "SUV de Lujo",
    rating: 4.8,
    price: "COP 480.000",
    image:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Porsche 911 Carrera",
    category: "Deportivo",
    rating: 5.0,
    price: "COP 950.000",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Range Rover Sport",
    category: "SUV Premium",
    rating: 4.8,
    price: "COP 550.000",
    image:
      "https://images.unsplash.com/photo-1679506640605-acaa4c7d46ed?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Audi A6",
    category: "Ejecutivo",
    rating: 4.7,
    price: "COP 380.000",
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Toyota 4Runner",
    category: "Todoterreno",
    rating: 4.7,
    price: "COP 300.000",
    image:
      "https://images.unsplash.com/photo-1621993202323-f438eec934ff?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function CarsPage() {
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
            alt="Autos de Alquiler"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <BlurFade delay={0.3}>
            <h1 className="font-heading text-5xl font-bold leading-tight text-white drop-shadow-xl md:text-7xl">
              Carros
            </h1>
          </BlurFade>
          <BlurFade delay={0.4}>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Alquiler de vehículos de lujo, deportivos y todoterreno para
              complementar tu experiencia de viaje.
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
            Flota Disponible
          </h2>
        </BlurFade>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {VEHICLES.map((v, i) => (
            <BlurFade key={v.title} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg transition-shadow hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-blue-dark/60 to-transparent" />
                  <motion.img
                    src={v.image}
                    alt={v.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute right-4 top-4 z-20 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-md shadow-sm">
                    <Star className="h-4 w-4 fill-brand-blue text-brand-blue" />
                    <span className="text-sm font-semibold text-brand-blue-dark">
                      {v.rating}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-blue-light">
                    {v.category}
                  </p>
                  <h3 className="mb-4 font-heading text-xl font-bold text-brand-blue-dark">
                    {v.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        Desde / día
                      </p>
                      <p className="text-2xl font-bold text-brand-blue">
                        {v.price}
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/573007980870?text=${encodeURIComponent(`Hola, estoy interesado en cotizar el alquiler del vehículo: ${v.title}`)}`}
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