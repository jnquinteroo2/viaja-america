"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const LOGO_URL = "https://viajaamerica.com/wp-content/uploads/2022/01/logo1.png";

const NAV_ITEMS = [
  { label: "Paquetes", href: "/packages" },
  { label: "Alojamiento", href: "/accommodations" },
  { label: "Apartamentos", href: "/apartments" },
  { label: "Vuelos", href: "/flights" },
  { label: "Carros", href: "/cars" },
  { label: "Eventos", href: "/events" },
  { label: "Contacto", href: "/contact" },
];

function NavLink({
  href,
  label,
  variant,
  onHover,
}: {
  href: string;
  label: string;
  variant: "transparent" | "solid";
  onHover: (label: string | null) => void;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 text-base tracking-wide transition-colors duration-300",
        variant === "transparent"
          ? "font-medium text-white/90 hover:text-white"
          : "font-semibold text-[var(--brand-blue-dark)] hover:text-[var(--brand-blue)]"
      )}
      onMouseEnter={() => onHover(label)}
      onMouseLeave={() => onHover(null)}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const isHome = pathname === "/";
  const variant = scrolled || !isHome ? "solid" : "transparent";

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-24 items-center transition-all duration-500",
        scrolled || !isHome
          ? "border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="flex w-full max-w-full items-center justify-between px-6 md:px-12">
        <Link href="/" className="relative z-50 shrink-0">
          <Image
            src={LOGO_URL}
            alt="Viaja América"
            width={180}
            height={60}
            className="h-10 w-auto object-contain md:h-16"
            priority
            unoptimized
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              label={item.label}
              variant={variant}
              onHover={setHovered}
            />
          ))}
          <div className="relative hidden lg:block">
            {hovered != null && (
              <motion.div
                layoutId="nav-underline"
                className={cn(
                  "absolute -bottom-1 left-0 right-0 h-[2px]",
                  variant === "transparent" ? "bg-white" : "bg-[var(--brand-blue)]"
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              />
            )}
          </div>
        </nav>

        <div className="hidden lg:block" />

        <div className="lg:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              className={cn(
                "inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                menuOpen
                  ? "relative z-[60] bg-[var(--brand-blue-dark)] text-white shadow-lg"
                  : variant === "transparent"
                    ? "text-white hover:bg-white/20"
                    : "text-[var(--brand-blue)] hover:bg-secondary"
              )}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[400px] border-l-0 bg-white p-0">
              <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>

              <div className="flex h-full flex-col overflow-y-auto">
                <div className="flex items-center border-b border-gray-100 p-6">
                  <Image
                    src={LOGO_URL}
                    alt="Viaja América"
                    width={140}
                    height={48}
                    className="h-10 w-auto object-contain"
                    unoptimized
                  />
                </div>

                <nav className="flex flex-1 flex-col px-4 py-6">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-[var(--brand-blue-dark)] active:bg-gray-100"
                    >
                      {item.label}
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
