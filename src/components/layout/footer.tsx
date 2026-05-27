import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[var(--brand-blue-dark)] pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="https://viajaamerica.com/wp-content/uploads/2022/01/logo1.png" 
                alt="Viaja América Logo" 
                width={200}
                height={64}
                className="h-auto w-40 object-contain brightness-0 invert"
                unoptimized
              />
            </Link>
            <p className="leading-relaxed text-white/70">
              Agencia de viajes premium con sede en Funza, Cundinamarca. 
              Creamos experiencias de lujo, corporativas y vacaciones inolvidables alrededor del mundo.
            </p>
          </div>

          <div>
            <h3 className="mb-6 font-heading text-lg font-semibold text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <Phone className="h-5 w-5 shrink-0 text-[var(--brand-orange)]" />
                <a href="tel:3007980870" className="transition-colors hover:text-white">
                  +57 300 798 0870
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-5 w-5 shrink-0 text-[var(--brand-orange)]" />
                <span>
                  Funza, Cundinamarca<br />
                  Colombia
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Mail className="h-5 w-5 shrink-0 text-[var(--brand-orange)]" />
                <a href="mailto:contacto@viajaamerica.com" className="transition-colors hover:text-white">
                  contacto@viajaamerica.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-heading text-lg font-semibold text-white">Explorar</h3>
            <ul className="space-y-3">
              {['Destinos', 'Corporativo', 'Paquetes', 'Nosotros'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-white/70 transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-heading text-lg font-semibold text-white">Síguenos</h3>
            <div className="mb-8 flex gap-4">
              <a href="https://instagram.com/viajaamerica_" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 p-3 text-white transition-all hover:text-[#f4c45c] hover:scale-110 hover:bg-white/15">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/viajaamericacolombia" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 p-3 text-white transition-all hover:text-[#f4c45c] hover:scale-110 hover:bg-white/15">
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div>
            <h3 className="mb-6 font-heading text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-white/70 transition-colors hover:text-white">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 transition-colors hover:text-white">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Viaja América. Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}
