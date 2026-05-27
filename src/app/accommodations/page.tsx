"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2850&q=80";

const WA_NUMBER = "573007980870";

const HOTELS = [
  {
    id: 1,
    title: "Hotel de Película",
    description:
      "Viva una experiencia cinematográfica en este hotel boutique inspirado en los grandes clásicos del cine. Cada habitación está temáticamente decorada con utilería original, carteles de época y una ambientación que lo transportará a la época dorada de Hollywood. Disfrute de salas de proyección privadas y una colección curada de películas.",
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 2,
    title: "Hotel Orígenes",
    description:
      "Ubicado en el corazón de la región cafetera, Hotel Orígenes es un refugio de paz y tradición. Construido con materiales locales y rodeado de jardines nativos, ofrece una conexión auténtica con la cultura colombiana. Deguste café de origen en nuestra terraza panorámica y explore los secretos de la montaña.",
    images: [
      "https://images.unsplash.com/photo-1506059612708-99d6c258160e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 3,
    title: "Hotel de Alma",
    description:
      "Un santuario de bienestar y renovación espiritual en medio de la naturaleza. Hotel de Alma combina arquitectura minimalista con vistas panorámicas impresionantes. Disfrute de nuestro spa holístico, clases de yoga al amanecer y una gastronomía orgánica que nutre cuerpo y alma en cada bocado.",
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506059612708-99d6c258160e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 4,
    title: "Hotel de Caño Dulce",
    description:
      "A orillas de un caño cristalino se levanta este paraíso tropical donde la naturaleza dicta el ritmo. Hotel de Caño Dulce ofrece cabañas ecológicas con acceso privado al agua, paseos en kayak, avistamiento de aves y una experiencia inmersiva en la biodiversidad colombiana. Ideal para desconectarse del mundo.",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506059612708-99d6c258160e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 5,
    title: "Glamping 8 Caminos",
    description:
      "Descubra el lujo de acampar bajo las estrellas en nuestro glamping exclusivo. Domos geodésicos completamente equipados con cama king, baño privado, calefacción y terraza privada con vista a las montañas. Fogata nocturna, cenas gourmet al aire libre y ocho senderos ecológicos esperan por usted.",
    images: [
      "https://images.unsplash.com/photo-1526491109672-74740652b963?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

function HotelCarousel({ images, title }: { images: string[]; title: string }) {
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
        className="object-cover transition-opacity duration-500"
      />

      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[var(--brand-blue-dark)] shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={next}
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

export default function AccommodationsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="relative h-[45vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-[var(--brand-blue-dark)]/90" />
          <Image
            src={HERO_IMAGE}
            alt="Alojamiento"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
        <div className="container relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <BlurFade delay={0.2}>
            <h1 className="font-heading text-5xl font-bold leading-tight text-white drop-shadow-xl md:text-7xl">
              Alojamiento
            </h1>
          </BlurFade>
          <BlurFade delay={0.4}>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Los alojamientos más exclusivos y únicos de Colombia
              seleccionados para los viajeros más exigentes.
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-24">
        <div className="space-y-20">
          {HOTELS.map((hotel, i) => (
            <BlurFade key={hotel.id} delay={0.1 * i}>
              <div>
                <HotelCarousel images={hotel.images} title={hotel.title} />

                <div className="mt-8 text-center">
                  <h2 className="font-heading text-3xl font-bold italic text-[var(--brand-blue-dark)] md:text-4xl">
                    {hotel.title}
                  </h2>
                  <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
                    {hotel.description}
                  </p>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hola, estoy interesado en cotizar el alojamiento: ${hotel.title}`)}`}
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
    </main>
  );
}
