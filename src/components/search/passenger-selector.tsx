"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PassengerSelector({
  adults,
  setAdults,
  childrenCount,
  setChildrenCount,
  infants,
  setInfants,
}: {
  adults: number;
  setAdults: (val: number) => void;
  childrenCount: number;
  setChildrenCount: (val: number) => void;
  infants?: number;
  setInfants?: (val: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const total = adults + childrenCount + (infants || 0);

  return (
    <div className="relative flex-1">
      <label className="mb-1 block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        Pasajeros
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center py-1.5 text-left text-sm font-medium text-[var(--brand-blue-dark)] outline-none"
      >
        {total === 0 ? "¿Cuántos?" : `${total} ${total === 1 ? "viajero" : "viajeros"}`}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.96 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute right-0 top-full z-50 mt-2 w-72 rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl shadow-black/10"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-900">Adultos</p>
                    <p className="text-xs text-gray-400">Edad 13 o más</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-gray-900 hover:text-gray-900"
                    >
                      &minus;
                    </button>
                    <span className="w-4 text-center text-sm font-semibold text-gray-900">
                      {adults}
                    </span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-gray-900 hover:text-gray-900"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-900">Niños</p>
                    <p className="text-xs text-gray-400">Edades de 2 a 12</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-gray-900 hover:text-gray-900"
                    >
                      &minus;
                    </button>
                    <span className="w-4 text-center text-sm font-semibold text-gray-900">
                      {childrenCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setChildrenCount(childrenCount + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-gray-900 hover:text-gray-900"
                    >
                      +
                    </button>
                  </div>
                </div>
                {setInfants != null && (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-gray-900">Bebés</p>
                      <p className="text-xs text-gray-400">Menos de 2 años</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setInfants(Math.max(0, (infants || 0) - 1))}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-gray-900 hover:text-gray-900"
                      >
                        &minus;
                      </button>
                      <span className="w-4 text-center text-sm font-semibold text-gray-900">
                        {infants || 0}
                      </span>
                      <button
                        type="button"
                        onClick={() => setInfants((infants || 0) + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-gray-900 hover:text-gray-900"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
