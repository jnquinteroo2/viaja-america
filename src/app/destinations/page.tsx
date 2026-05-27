import { Metadata } from "next";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Destinos Internacionales | Viaja América",
  description: "Explora nuestros destinos premium alrededor del mundo. Vuelos, hoteles y tours.",
};

const destinations = [
  { id: 1, title: "Norteamérica", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", desc: "Estados Unidos, Canadá, México" },
  { id: 2, title: "Suramérica", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", desc: "Perú, Argentina, Brasil, Chile" },
  { id: 3, title: "Europa", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", desc: "España, Francia, Italia, Reino Unido" },
  { id: 4, title: "Caribe", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", desc: "Punta Cana, Cancún, Aruba, Bahamas" },
  { id: 5, title: "Medio Oriente", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", desc: "Dubái, Egipto, Turquía" },
  { id: 6, title: "Asia", image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", desc: "Japón, Tailandia, China" },
];

export default function DestinationsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-semibold mb-6">Nuestros Destinos</h1>
          <p className="text-xl text-muted-foreground">
            Ofrecemos los mejores destinos alrededor del mundo con opciones para todos los gustos: playas, ciudades históricas, cruceros y turismo ecológico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Card key={dest.id} className="group overflow-hidden rounded-2xl border-none shadow-lg cursor-pointer h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
              <Image 
                src={dest.image} 
                alt={dest.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <div className="flex items-center gap-2 text-white/80 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{dest.desc}</span>
                </div>
                <h3 className="text-3xl font-heading font-semibold text-white mb-2">{dest.title}</h3>
                <Link href="/packages" className="inline-flex items-center gap-2 text-primary-foreground font-medium mt-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Ver paquetes <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
