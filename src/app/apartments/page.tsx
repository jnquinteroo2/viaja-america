"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2850&q=80";

const WA_NUMBER = "573007980870";

const APARTMENTS = [
  {
    id: 1,
    title: "101 NOGAL",
    description:
      "Apartamento amoblado en alquiler cuenta con dos habitaciones, sala comedor, cocina integral, nevera, lavadora, televisor, utensilios de cocina, ropa de cama, toallas. Incluye servicios de agua, luz, gas, internet. Zona verde.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 2,
    title: "201 GREEN HOUSE",
    description:
      "Amplio apartamento amoblado con tres habitaciones, dos baños, sala comedor, cocina integral equipada, lavadora, secadora, nevera, wifi de alta velocidad, parqueadero privado. Perfecto para familias o grupos corporativos.",
    images: [
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529408686214-b48b8532f72c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 3,
    title: "202 GREEN HOUSE",
    description:
      "Acogedor apartamento amoblado con una habitación principal, estudio, sala comedor, cocina integral, nevera, lavadora, televisor smart, utensilios de cocina, ropa de cama, toallas. Ideal para viajeros de negocios y estadías cortas.",
    images: [
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529408686214-b48b8532f72c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 4,
    title: "301 GREEN HOUSE",
    description:
      "Penthouse amoblado de lujo con terraza panorámica, tres habitaciones, tres baños, sala comedor, cocina gourmet, nevera doble, lavadora, secadora, televisores en todas las habitaciones, internet fibra óptica, parqueadero doble.",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 5,
    title: "101 GREEN HOUSE",
    description:
      "Apartamento amoblado en primer piso con acceso directo al jardín. Dos habitaciones, sala comedor, cocina integral, nevera, lavadora, televisor, utensilios de cocina, ropa de cama, toallas. Incluye servicios públicos y wifi. Zona tranquila.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564078516393-caf8b3a97741?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529408686214-b48b8532f72c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

function ImageCarousel({
  images,
  title,
  onImageClick,
}: {
  images: string[];
  title: string;
  onImageClick: (index: number) => void;
}) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem]">
      <Image
        src={images[current]}
        alt={`${title} - imagen ${current + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="cursor-pointer object-cover transition-opacity duration-500"
        onClick={() => onImageClick(current)}
      />

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[var(--brand-blue-dark)] shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[var(--brand-blue-dark)] shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 bg-white shadow-md"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Lightbox({
  images,
  current,
  onClose,
}: {
  images: string[];
  current: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(current);

  const prev = () => setIndex((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setIndex((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <Image
        src={images[index]}
        alt={`Imagen ${index + 1}`}
        width={1600}
        height={1200}
        className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 text-sm font-medium text-white/60">
        {index + 1} / {images.length}
      </div>
    </motion.div>
  );
}

export default function ApartmentsPage() {
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="relative h-[45vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-[var(--brand-blue-dark)]/90" />
          <Image
            src={HERO_IMAGE}
            alt="Apartamentos"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
        <div className="container relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <BlurFade delay={0.2}>
            <h1 className="font-heading text-5xl font-bold leading-tight text-white drop-shadow-xl md:text-7xl">
              Apartamentos
            </h1>
          </BlurFade>
          <BlurFade delay={0.4}>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Apartamentos amoblados completamente equipados para estadías
              corporativas, turismo o larga duración.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-24">
        <div className="space-y-20">
          {APARTMENTS.map((apt, i) => (
            <BlurFade key={apt.id} delay={0.1 * i}>
              <div>
                <ImageCarousel
                  images={apt.images}
                  title={apt.title}
                  onImageClick={(index) =>
                    setLightbox({ images: apt.images, index })
                  }
                />

                <div className="mt-8 text-center">
                  <h2 className="font-heading text-3xl font-bold text-[var(--brand-blue-dark)] md:text-4xl">
                    {apt.title}
                  </h2>
                  <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
                    {apt.description}
                  </p>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hola, estoy interesado en cotizar el apartamento: ${apt.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#f4c45c] px-10 py-4 text-base font-bold text-[var(--brand-blue-dark)] shadow-lg transition-all hover:bg-[#f0b830] hover:shadow-xl active:scale-[0.98]"
                  >
                    COTIZAR
                  </a>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightbox != null && (
          <Lightbox
            images={lightbox.images}
            current={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
