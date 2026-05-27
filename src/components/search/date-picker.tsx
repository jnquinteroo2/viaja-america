"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DateRangePickerProps {
  startValue: string;
  endValue: string;
  onChange: (start: string, end: string) => void;
  mode: "oneway" | "roundtrip";
  className?: string;
}

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const DAYS = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];

function formatDateForInput(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parseDate(dateString: string) {
  if (!dateString) return null;
  const [y, m, d] = dateString.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function DateRangePicker({
  startValue,
  endValue,
  onChange,
  mode,
  className,
}: DateRangePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  });
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const nextMonth = () =>
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  const prevMonth = () =>
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));

  const handleDayClick = (year: number, month: number, day: number) => {
    const clickedDate = new Date(year, month, day);
    const clickedStr = formatDateForInput(clickedDate);

    if (mode === "oneway") {
      onChange(clickedStr, "");
      setIsOpen(false);
    } else {
      if (!startValue || (startValue && endValue)) {
        onChange(clickedStr, "");
      } else {
        const startObj = parseDate(startValue)!;
        if (clickedDate < startObj) {
          onChange(clickedStr, "");
        } else {
          onChange(startValue, clickedStr);
          setIsOpen(false);
        }
      }
    }
  };

  const start = parseDate(startValue);
  const end = parseDate(endValue);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  function displayFormat(dateStr: string) {
    if (!dateStr) return "";
    const d = parseDate(dateStr);
    if (!d) return "";
    return `${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 3)}`;
  }

  const renderMonth = (dateOffset: number) => {
    const targetDate = new Date(
      viewDate.getFullYear(),
      viewDate.getMonth() + dateOffset,
      1
    );
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    return (
      <div className="w-full flex-1 md:w-[320px]">
        <div className="relative mb-6 flex items-center justify-center px-2">
          {dateOffset === 0 && (
            <button
              type="button"
              onClick={prevMonth}
              className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
          <div className="text-base font-bold text-gray-900">
            {MONTHS[month]} {year}
          </div>
          {dateOffset === 1 && (
            <button
              type="button"
              onClick={nextMonth}
              className="absolute right-0 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
          {dateOffset === 0 && (
            <button
              type="button"
              onClick={nextMonth}
              className="absolute right-0 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 md:hidden"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </div>

        <div
          className="mb-2 grid gap-1 text-center"
          style={{ gridTemplateColumns: "repeat(7, minmax(0, 1fr))" }}
        >
          {DAYS.map((d) => (
            <div key={d} className="text-xs font-semibold text-gray-400">
              {d}
            </div>
          ))}
        </div>

        <div
          className="grid justify-items-center gap-x-0 gap-y-1"
          style={{ gridTemplateColumns: "repeat(7, minmax(0, 1fr))" }}
        >
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="h-10 w-10" />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dateObj = new Date(year, month, day);
            const dateStr = formatDateForInput(dateObj);
            const isPast = dateObj < today;
            const isStart = dateStr === startValue;
            const isEnd = dateStr === endValue;
            const isBetween = start && end && dateObj > start && dateObj < end;

            return (
              <div
                key={day}
                className={cn(
                  "relative flex h-10 w-10 items-center justify-center",
                  isBetween && "bg-gray-100",
                  isStart && endValue && "rounded-l-full bg-gray-100",
                  isEnd && "rounded-r-full bg-gray-100"
                )}
              >
                <button
                  type="button"
                  disabled={isPast}
                  onClick={() => handleDayClick(year, month, day)}
                  className={cn(
                    "relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all",
                    isPast
                      ? "cursor-not-allowed text-gray-300"
                      : "text-gray-900 hover:border hover:border-gray-900",
                    (isStart || isEnd) &&
                      "border-transparent bg-[var(--brand-blue-dark)] text-white hover:bg-[var(--brand-blue-dark)]",
                    isBetween && "border-transparent"
                  )}
                >
                  {day}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "relative flex flex-1 cursor-pointer rounded-full transition-colors hover:bg-gray-100/80",
        className
      )}
      onClick={() => !isOpen && setIsOpen(true)}
    >
      <div className="flex-1 px-6 py-3">
        <label className="block cursor-pointer text-[11px] font-bold uppercase tracking-wider text-gray-800">
          {mode === "oneway" ? "Fecha de viaje" : "Salida"}
        </label>
        <div className="relative mt-0.5 flex items-center">
          <div className="w-full truncate bg-transparent p-0 text-left text-sm font-medium outline-none">
            <span
              className={cn(startValue ? "text-gray-900" : "text-gray-400")}
            >
              {startValue ? displayFormat(startValue) : "Agregar fechas"}
            </span>
          </div>
        </div>
      </div>

      {mode === "roundtrip" && (
        <>
          <div className="hidden shrink-0 py-3 lg:block" aria-hidden>
            <div className="h-8 w-px bg-gray-200" />
          </div>
          <div className="flex-1 px-6 py-3">
            <label className="block cursor-pointer text-[11px] font-bold uppercase tracking-wider text-gray-800">
              Regreso
            </label>
            <div className="relative mt-0.5 flex items-center">
              <div className="w-full truncate bg-transparent p-0 text-left text-sm font-medium outline-none">
                <span
                  className={cn(endValue ? "text-gray-900" : "text-gray-400")}
                >
                  {endValue ? displayFormat(endValue) : "Agregar fechas"}
                </span>
              </div>
            </div>
          </div>
        </>
      )}

      {isOpen && (
        <div className="absolute left-1/2 top-[110%] z-[100] mt-2 flex -translate-x-1/2 flex-col gap-8 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-2xl md:left-0 md:translate-x-0 md:flex-row">
          {renderMonth(0)}
          <div className="hidden md:block">{renderMonth(1)}</div>
        </div>
      )}
    </div>
  );
}