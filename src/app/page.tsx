import { HeroSearchSection } from "@/components/home/hero-search";
import { DestinationsSection } from "@/components/home/destinations";
import { CorporateSection } from "@/components/home/corporate";
import { MessageCircle } from "lucide-react";

const WA_NUMBER = "573007980870";
const WA_MESSAGE = encodeURIComponent("Hola, estoy interesado en conocer los paquetes de viaje.");

export default function Home() {
  return (
    <>
      <HeroSearchSection />
      <DestinationsSection />
      <CorporateSection />

      <section className="py-24 bg-[#18526e] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto">
            Habla directamente con nuestros asesores de viaje y permítenos diseñar una experiencia inolvidable.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full h-14 px-8 text-lg font-semibold bg-white text-[var(--brand-blue-dark)] shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <MessageCircle className="w-6 h-6 text-[#25D366]" />
            Chatear por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
