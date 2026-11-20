import Image from "next/image";
import { cn } from "@/lib/utils";
import { CLIENT_LOGOS } from "./data";

const LOGO_HEIGHT = 48;

/**
 * Carrusel infinito de logos de clientes. La lista se duplica para que la
 * animación (translateX -50%) haga un loop sin saltos. Se pausa en hover y se
 * detiene con prefers-reduced-motion (ver .marquee en globals.css).
 */
export function LogoMarquee({ className }: { className?: string }) {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div
      className={cn(
        "marquee relative overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <ul className="marquee-track flex w-max items-center gap-14 md:gap-20">
        {logos.map((logo, i) => {
          const width = Math.round((logo.w / logo.h) * LOGO_HEIGHT);
          return (
            <li
              key={`${logo.file}-${i}`}
              aria-hidden={i >= CLIENT_LOGOS.length}
              className="flex shrink-0 items-center"
            >
              <Image
                src={`/images/clientes/${logo.file}.png`}
                alt={i < CLIENT_LOGOS.length ? logo.name : ""}
                width={width}
                height={LOGO_HEIGHT}
                style={{ height: LOGO_HEIGHT, width: "auto", maxWidth: 170 }}
                className="object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
