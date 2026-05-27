import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

const WHATSAPP_NUMBER = "573007980870";

const destinations = [
  {
    id: 1,
    title: "Europa Clásica",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "París, Roma, Madrid",
    featured: true,
  },
  {
    id: 2,
    title: "Caribe Exclusivo",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Punta Cana, Cancún, Bahamas",
    featured: false,
  },
  {
    id: 3,
    title: "Mágica Suramérica",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Machu Picchu, Patagonia, Río",
    featured: false,
  },
  {
    id: 4,
    title: "Norteamérica",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Nueva York, Miami, Canadá",
    featured: false,
  },
  {
    id: 5,
    title: "Mundo Árabe",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Dubái, Egipto, Turquía",
    featured: false,
  },
  {
    id: 6,
    title: "Asia Exótica",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Japón, Tailandia, China",
    featured: false,
  },
];

export function DestinationsSection() {
  return (
    <section className="py-24 md:py-32 relative z-10" style={{ backgroundColor: "#162032" }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-medium tracking-wider uppercase mb-4 text-sm" style={{ color: "#24759e" }}>
              Nuestros Destinos
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-white">
              Explora destinos extraordinarios
            </h3>
          </div>
          <Link
            href="/destinations"
            className="flex items-center gap-2 font-medium group transition-colors hover:opacity-80"
            style={{ color: "#24759e" }}
          >
            Ver todos los destinos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((dest) => {
            const waMessage = encodeURIComponent(
              `Hola, estoy interesado en conocer los paquetes de viaje para: ${dest.title}`
            );
            const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

            return (
              <Card
                key={dest.id}
                className={`group overflow-hidden rounded-2xl border-none shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${
                  dest.featured ? "md:col-span-2 lg:col-span-2 xl:col-span-2" : ""
                }`}
                style={{ backgroundColor: "#1c2739" }}
              >
                <div className="relative h-80 md:h-[400px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform transition-transform duration-500 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 text-white/80 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium text-slate-300">
                        {dest.description}
                      </span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-2">
                      {dest.title}
                    </h4>

                    <div className="mt-4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white font-medium border-b border-white pb-1 hover:opacity-80 transition-opacity"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Consultar por WhatsApp <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
