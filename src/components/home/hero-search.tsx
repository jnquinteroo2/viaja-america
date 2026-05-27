"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightLeft, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { AirportAutocomplete } from "@/components/search/airport-autocomplete";
import { PassengerSelector } from "@/components/search/passenger-selector";
import { DateRangePicker } from "@/components/search/date-picker";
import type { Airport } from "@/data/airports";

const TRIP_TYPES = ["Solo ida", "Ida y vuelta"] as const;
type TripType = (typeof TRIP_TYPES)[number];

const blurFadeInitial = { filter: "blur(14px)", opacity: 0, y: 32 };
const blurFadeAnimate = {
  filter: "blur(0px)",
  opacity: 1,
  y: 0,
  transition: {
    duration: 1.1,
    ease: [0.16, 1, 0.3, 1] as const,
    delay: 0.05,
  },
};

const springEntrance = {
  type: "spring" as const,
  stiffness: 60,
  damping: 15,
};

function Divider() {
  return (
    <div className="hidden shrink-0 lg:block py-3" aria-hidden>
      <div className="h-8 w-px bg-gray-200" />
    </div>
  );
}

export function HeroSearchSection() {
  const [tripType, setTripType] = useState<TripType>("Ida y vuelta");
  const [originText, setOriginText] = useState("");
  const [destText, setDestText] = useState("");
  const [originAirport, setOriginAirport] = useState<Airport | null>(null);
  const [destAirport, setDestAirport] = useState<Airport | null>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infants, setInfants] = useState(0);
  const [swapKey, setSwapKey] = useState(0);

  const swapLocations = () => {
    const prevOrigin = originText;
    const prevDest = destText;
    const prevOriginAirport = originAirport;
    const prevDestAirport = destAirport;
    setOriginText(prevDest);
    setDestText(prevOrigin);
    setOriginAirport(prevDestAirport);
    setDestAirport(prevOriginAirport);
    setSwapKey((k) => k + 1);
  };

  const handleSearch = () => {
    const originIATA = originAirport?.iata || null;
    const destIATA = destAirport?.iata || null;

    if (!originIATA || !destIATA) {
      alert("Por favor selecciona un origen y destino de la lista desplegable.");
      return;
    }
    if (!startDate) {
      alert("Por favor selecciona la fecha de salida.");
      return;
    }
    if (tripType === "Ida y vuelta" && !endDate) {
      alert("Por favor selecciona la fecha de regreso.");
      return;
    }

    const dateSegment =
      tripType === "Solo ida" || !endDate
        ? startDate
        : `${startDate}+${endDate}`;
    const passengerSegment = `${adults}-${childrenCount}-${infants}`;
    const url = `http://reservas.viajaamerica.com/vuelos/${originIATA}-${destIATA}/${dateSegment}/${passengerSegment}`;

    window.open(url, "_blank");
  };

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center">
      <div className="absolute inset-0 overflow-hidden bg-gray-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 h-full w-full object-cover object-center"
        >
          <source src="/herosection.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-[var(--brand-blue-dark)]/90" />
      </div>

      <div className="container relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-16 sm:pt-24 md:pt-32 pb-16 md:px-8">
        <motion.h1
          className="mb-5 sm:mb-8 md:mb-12 text-center font-heading text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl"
          initial={blurFadeInitial}
          animate={blurFadeAnimate}
        >
          PAQUETES TURÍSTICOS, CORPORATIVOS <br className="hidden sm:block" />A
          TODOS LOS DESTINOS
        </motion.h1>

        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springEntrance, delay: 0.3 }}
        >
          <div
            className="inline-flex items-center gap-1 rounded-full border border-white/30 bg-white/10 p-1.5 backdrop-blur-md"
            role="radiogroup"
            aria-label="Tipo de viaje"
          >
            {TRIP_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                role="radio"
                aria-checked={tripType === type}
                onClick={() => setTripType(type)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-sm",
                  tripType === type
                    ? "scale-105 bg-white text-[var(--brand-blue-dark)] shadow-lg"
                    : "text-white hover:bg-white/20"
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springEntrance, delay: 0.5 }}
        >
          <div className="relative w-full rounded-[2rem] border border-white/40 bg-white/95 p-3 sm:p-5 md:p-6 shadow-2xl shadow-black/40 backdrop-blur-2xl lg:overflow-visible overflow-y-auto max-h-[calc(100dvh-320px)] lg:max-h-none">
            <div className="relative z-10 flex flex-col gap-2 lg:flex-row lg:gap-4 lg:items-center">
              <AirportAutocomplete
                key={`origin-${swapKey}`}
                label="Origen"
                placeholder="¿De dónde sales?"
                value={originText}
                onChange={setOriginText}
                onSelect={setOriginAirport}
                className="px-2"
              />

              <div className="flex justify-center -my-0.5 lg:my-0">
                <button
                  type="button"
                  onClick={swapLocations}
                  className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-all hover:border-[var(--brand-blue)] hover:shadow-md"
                >
                  <ArrowRightLeft className="h-3 w-3 text-[var(--brand-blue)]" />
                </button>
              </div>

              <AirportAutocomplete
                key={`dest-${swapKey}`}
                label="Destino"
                placeholder="¿A dónde vas?"
                value={destText}
                onChange={setDestText}
                onSelect={setDestAirport}
                className="px-2"
              />

              <Divider />

              <DateRangePicker
                startValue={startDate}
                endValue={endDate}
                onChange={(s, e) => {
                  setStartDate(s);
                  setEndDate(e);
                }}
                mode={tripType === "Solo ida" ? "oneway" : "roundtrip"}
              />

              <Divider />

              <PassengerSelector
                adults={adults}
                setAdults={setAdults}
                childrenCount={childrenCount}
                setChildrenCount={setChildrenCount}
                infants={infants}
                setInfants={setInfants}
              />

              <button
                type="button"
                onClick={handleSearch}
                className="flex h-10 sm:h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--brand-blue)] px-6 text-sm font-bold text-white shadow-lg shadow-[var(--brand-blue)]/20 transition-all duration-300 hover:bg-[var(--brand-blue-dark)] hover:scale-[1.02] hover:shadow-xl active:scale-95 lg:w-auto"
              >
                <Search className="h-5 w-5" />
                <span className="lg:hidden">Buscar</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}