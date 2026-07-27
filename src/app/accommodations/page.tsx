"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2850&q=80";

const WA_NUMBER = "573187080678";

const HOTELS = [
  {
    id: 1,
    title: "Hotel de Película",
    description:
      "Viva una experiencia cinematográfica en este hotel boutique inspirado en los grandes clásicos del cine. Cada habitación está temáticamente decorada con utilería original, carteles de época y una ambientación que lo transportará a la época dorada de Hollywood. Disfrute de salas de proyección privadas y una colección curada de películas.",
    images: [
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174529/101386490_q0ll2g.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174529/96373333_ykkvnm.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174529/96373309_smxgp0.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174528/94694447_mair49.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174528/96373304_pexst1.jpg",
    ],
  },
  {
    id: 2,
    title: "Hotel Orígenes",
    description:
      "Ubicado en el corazón de la región cafetera, Hotel Orígenes es un refugio de paz y tradición. Construido con materiales locales y rodeado de jardines nativos, ofrece una conexión auténtica con la cultura colombiana. Deguste café de origen en nuestra terraza panorámica y explore los secretos de la montaña.",
    images: [
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174528/382727633_afc9ja.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174527/336991866_n4gccx.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174528/336991890_z9ztm7.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174526/336991803_knyth1.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174528/336991937_h3cevm.jpg",
    ],
  },
  {
    id: 3,
    title: "Hotel de Alma",
    description:
      "Un santuario de bienestar y renovación espiritual en medio de la naturaleza. Hotel de Alma combina arquitectura minimalista con vistas panorámicas impresionantes. Disfrute de nuestro spa holístico, clases de yoga al amanecer y una gastronomía orgánica que nutre cuerpo y alma en cada bocado.",
    images: [
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174527/711956506_vgj1ax.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174527/817859110_mfqzhk.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174527/711971414_fvpmzc.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174528/711956553_sqdkfk.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174526/817860314_xxbzbb.jpg",
    ],
  },
  {
    id: 4,
    title: "Hotel de Caño Dulce",
    description:
      "A orillas de un caño cristalino se levanta este paraíso tropical donde la naturaleza dicta el ritmo. Hotel de Caño Dulce ofrece cabañas ecológicas con acceso privado al agua, paseos en kayak, avistamiento de aves y una experiencia inmersiva en la biodiversidad colombiana. Ideal para desconectarse del mundo.",
    images: [
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174526/426233248_cugcmm.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174526/748693722_zzjmvf.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174526/562644308_aunhae.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174526/748693711_cr1xk7.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174526/426221633_wjcvpi.jpg",
    ],
  },
  {
    id: 5,
    title: "Glamping 8 Caminos",
    description:
      "Descubra el lujo de acampar bajo las estrellas en nuestro glamping exclusivo. Domos geodésicos completamente equipados con cama king, baño privado, calefacción y terraza privada con vista a las montañas. Fogata nocturna, cenas gourmet al aire libre y ocho senderos ecológicos esperan por usted.",
    images: [
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174529/421747248_qysm9t.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174530/421740308_fzexzl.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174530/702687659_w0kph3.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174530/421741124_gdlwoc.jpg",
      "https://res.cloudinary.com/dvrz5uflr/image/upload/v1785174529/416018313_g0olsx.jpg",
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
    <main className="min-h-screen bg-white pt-20">
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
            <h1 className="font-heading text-4xl font-bold leading-tight text-white drop-shadow-xl md:text-6xl">
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
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-gold px-10 py-4 text-base font-bold text-[var(--brand-blue-dark)] shadow-lg transition-all hover:bg-brand-gold-dark hover:shadow-xl active:scale-[0.98]"
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
