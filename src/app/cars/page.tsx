"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Fuel, Cog, ShieldCheck, Users } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=2850&q=80";

const BENEFITS = [
  { icon: Fuel, label: "Kilometraje Ilimitado" },
  { icon: Cog, label: "Transmisión Automática" },
  { icon: ShieldCheck, label: "Seguro Full Cover" },
  { icon: Users, label: "5 Pasajeros" },
];

interface Vehicle {
  title: string;
  category: string;
  plan: string;
  priceLabel: string;
  price: string;
  image: string;
}

const VEHICLES: Vehicle[] = [
  {
    title: "Renault Logan",
    category: "Vehículos",
    plan: "Cancelación gratuita · Paga al recoger el auto",
    priceLabel: "Desde / día",
    price: "$36",
    image:
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785175062/RENAULT-Logan_zsllrq.jpg",
  },
  {
    title: "Chevrolet Joy",
    category: "Vehículos",
    plan: "Cancelación gratuita · Paga al recoger el auto",
    priceLabel: "Desde / día",
    price: "$29",
    image:
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785175062/Chevrolet_Joy.jpg_ykq0zu.webp",
  },
  {
    title: "Chevrolet Captiva",
    category: "Vehículos",
    plan: "Cancelación gratuita · Paga al recoger el auto",
    priceLabel: "Desde / día",
    price: "$81",
    image:
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785175062/Chevrolet_Captiva.jpg_nuwccg.avif",
  },
  {
    title: "Suzuki Swift",
    category: "Vehículos",
    plan: "Cancelación gratuita · Paga al recoger el auto",
    priceLabel: "Desde / día",
    price: "$35",
    image:
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785175062/Suzuki_Swift_z8kpbs.jpg",
  },
  {
    title: "Kia Picanto",
    category: "Vehículos",
    plan: "Cancelación gratuita · Paga al recoger el auto",
    priceLabel: "Desde / día",
    price: "$32",
    image:
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785175063/Kia_picanto.png_rg94sr.webp",
  },
  {
    title: "Seat Arona",
    category: "Vehículos",
    plan: "Cancelación gratuita · Paga al recoger el auto",
    priceLabel: "Desde / día",
    price: "$50",
    image:
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785175062/camioneta_suv_compacta_seat_arona_yfxm9y.webp",
  },
];

export default function CarsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="relative h-[45vh] min-h-[400px] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-brand-blue-dark/90" />
          <Image
            src={HERO_IMAGE}
            alt="Autos de Alquiler"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </motion.div>
        <div className="container relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <BlurFade delay={0.3}>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white drop-shadow-xl md:text-6xl">
              Vehículos
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
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-blue-light">
                    {v.category}
                  </p>
                  <h3 className="mb-1 font-heading text-xl font-bold text-brand-blue-dark">
                    {v.title}
                  </h3>
                  <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                    {v.plan}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        {v.priceLabel}
                      </p>
                      <p className="text-2xl font-bold text-brand-blue">
                        {v.price}
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/573187080678?text=${encodeURIComponent(`Hola, estoy interesado en cotizar el alquiler del vehículo: ${v.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-brand-gold text-[var(--brand-blue-dark)] hover:bg-brand-gold-dark font-bold px-6 py-2.5 text-sm inline-flex items-center justify-center transition-all shadow-md active:scale-95"
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