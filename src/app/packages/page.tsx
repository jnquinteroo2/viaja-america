"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarDays, Clock, Star } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2850&q=80";

const WA_NUMBER = "573007980870";

const PACKAGES = [
  {
    id: 1,
    title: "Escapada de Lujo a Maldivas",
    location: "Maldivas",
    duration: "7 Días / 6 Noches",
    price: "COP 13.996.000",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Aventura Premium en la Patagonia",
    location: "Argentina / Chile",
    duration: "10 Días / 9 Noches",
    price: "COP 11.400.000",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1558517286-8a9cb0b8c793?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Magia Imperial en Kioto",
    location: "Japón",
    duration: "8 Días / 7 Noches",
    price: "COP 16.800.000",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "Retiro Exclusivo en los Alpes",
    location: "Suiza",
    duration: "5 Días / 4 Noches",
    price: "COP 8.400.000",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1607585011081-241d2bacb7de?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Descubriendo la Riviera Maya",
    location: "México",
    duration: "6 Días / 5 Noches",
    price: "COP 7.400.000",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "Crucero por las Islas Griegas",
    location: "Grecia",
    duration: "9 Días / 8 Noches",
    price: "COP 15.800.000",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1000&q=80",
  },
];

function PackageCard({
  data,
  index,
}: {
  data: (typeof PACKAGES)[0];
  index: number;
}) {
  return (
    <BlurFade delay={0.1 * index}>
      <motion.div
        whileHover={{ y: -6 }}
        className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg transition-shadow hover:shadow-2xl"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--brand-blue-dark)]/60 to-transparent" />
          <motion.img
            src={data.image}
            alt={data.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute right-4 top-4 z-20 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-md shadow-sm">
            <Star className="h-4 w-4 fill-[var(--brand-blue)] text-[var(--brand-blue)]" />
            <span className="text-sm font-semibold text-[var(--brand-blue-dark)]">
              {data.rating}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-7">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--brand-blue-light)]">
            <MapPin className="h-4 w-4" />
            {data.location}
          </div>

          <h3 className="mb-4 font-heading text-xl font-bold leading-tight text-[var(--brand-blue-dark)] transition-colors group-hover:text-[var(--brand-blue)]">
            {data.title}
          </h3>

          <div className="mb-4 flex items-center gap-4 border-y border-gray-100 py-3">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-[var(--brand-blue)]" />
              <span className="text-sm font-medium">{data.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CalendarDays className="h-4 w-4 text-[var(--brand-blue)]" />
              <span className="text-sm font-medium">Flexible</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Desde</p>
              <p className="text-2xl font-bold text-[var(--brand-blue)]">
                {data.price}
              </p>
            </div>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hola, estoy interesado en cotizar el paquete: ${data.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#f4c45c] px-5 py-2.5 text-sm font-bold text-[var(--brand-blue-dark)] shadow-lg transition-all hover:bg-[#f0b830] active:scale-95"
            >
              Cotizar
            </a>
          </div>
        </div>
      </motion.div>
    </BlurFade>
  );
}

export default function PackagesPage() {
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
            alt="Paquetes Exclusivos"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <BlurFade delay={0.2}>
            <h1 className="font-heading text-5xl font-bold leading-tight text-white drop-shadow-xl md:text-7xl">
              Paquetes Exclusivos
            </h1>
          </BlurFade>
          <BlurFade delay={0.4}>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Experiencias extraordinarias diseñadas para los viajeros más
              exigentes.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <BlurFade delay={0.1}>
            <h2 className="font-heading text-4xl font-bold text-[var(--brand-blue-dark)] md:text-5xl">
              Encuentra tu próximo <br /> destino de ensueño
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="max-w-md text-lg text-muted-foreground md:text-right">
              Una selección curada de experiencias extraordinarias.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-6 pb-24 md:px-12 md:pb-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.id} data={pkg} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
