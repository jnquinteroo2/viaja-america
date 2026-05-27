"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Plane } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Airport } from "@/data/airports";

export function AirportAutocomplete({
  label,
  placeholder,
  value,
  onChange,
  onSelect,
  className,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  onSelect: (airport: Airport) => void;
  className?: string;
}) {
  const [query, setQuery] = useState(value);
  const [results, setResults] = useState<Airport[]>([]);
  const [open, setOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const doSearch = useCallback(async (q: string) => {
    if (q.length < 1) {
      setResults([]);
      setOpen(false);
      return;
    }
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    try {
      const res = await fetch(`/api/airports?q=${encodeURIComponent(q)}&limit=8`, {
        signal: controller.signal,
      });
      if (!res.ok) return;
      const data: Airport[] = await res.json();
      setResults(data);
      setOpen(data.length > 0);
      setHighlightIndex(-1);
    } catch {
      /* aborted */
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => doSearch(query), 150);
    return () => clearTimeout(timer);
  }, [query, doSearch]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectAirport = (airport: Airport) => {
    const formatted = `${airport.city} (${airport.iata}) — ${airport.country}`;
    setQuery(formatted);
    setOpen(false);
    onChange(formatted);
    onSelect(airport);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter" && highlightIndex >= 0) {
      e.preventDefault();
      selectAirport(results[highlightIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={containerRef} className={cn("relative flex-1", className)}>
      <label className="mb-1 block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <div className="relative flex items-center">
        <MapPin className="absolute left-0 h-4 w-4 text-[var(--brand-blue)]/40" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange(e.target.value);
          }}
          onFocus={() => {
            if (results.length > 0) setOpen(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full bg-transparent py-1.5 pl-7 pr-2 text-sm font-medium text-[var(--brand-blue-dark)] outline-none placeholder:text-muted-foreground"
          autoComplete="off"
        />
      </div>

      <AnimatePresence>
        {open && results.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl shadow-black/10"
          >
            {results.map((airport, i) => (
              <li key={airport.iata}>
                <button
                  type="button"
                  onClick={() => selectAirport(airport)}
                  onMouseEnter={() => setHighlightIndex(i)}
                  className={cn(
                    "flex w-full items-center gap-3 px-4 py-3 text-left transition-colors",
                    i === highlightIndex
                      ? "bg-[var(--brand-blue)]/5"
                      : "hover:bg-gray-50"
                  )}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-blue)]/10">
                    <Plane className="h-3.5 w-3.5 text-[var(--brand-blue)]" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[var(--brand-blue-dark)]">
                      {airport.city}
                      <span className="ml-1.5 rounded bg-[var(--brand-blue)]/10 px-1.5 py-0.5 text-[11px] font-bold text-[var(--brand-blue)]">
                        {airport.iata}
                      </span>
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {airport.name} &middot; {airport.country}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
