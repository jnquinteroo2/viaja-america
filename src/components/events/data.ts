export const WA_NUMBER = "573187080678";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Video de eventos (brochure Viaja América) en Cloudinary. */
export const EVENTS_VIDEO_URL =
  "https://res.cloudinary.com/dvrz5uflr/video/upload/f_auto,q_auto/v1795187961/Brochure_Viaja_Ame%CC%81rica_gwwm2s.mp4";

/** Poster del video: mismo asset de Cloudinary pidiendo un frame como imagen. */
export function videoPoster(url: string, second = 1) {
  return url.replace("/upload/", `/upload/so_${second}/`).replace(/\.mp4$/, ".jpg");
}

/** Logos recortados del slide "Nuestros clientes" del brochure. */
export const CLIENT_LOGOS = [
  { name: "Federación Colombiana de Ciclismo", file: "fedeciclismo", w: 90, h: 168 },
  { name: "Comité Paralímpico Colombiano", file: "comite-paralimpico", w: 133, h: 114 },
  { name: "Millonarios FC", file: "millonarios", w: 307, h: 77 },
  { name: "BYD", file: "byd", w: 191, h: 117 },
  { name: "Makita", file: "makita", w: 235, h: 86 },
  { name: "RCN Radio", file: "rcn-radio", w: 153, h: 118 },
  { name: "Colombia Potencia de la Vida", file: "colombia-potencia-vida", w: 154, h: 60 },
  { name: "Deportivo Saprissa", file: "saprissa", w: 128, h: 129 },
  { name: "Voith", file: "voith", w: 148, h: 89 },
  { name: "Procasur", file: "procasur", w: 290, h: 91 },
  { name: "Ara", file: "ara", w: 127, h: 111 },
  { name: "Amcor", file: "amcor", w: 195, h: 97 },
  { name: "Sistecrédito", file: "sistecredito", w: 230, h: 89 },
  { name: "San Lorenzo", file: "san-lorenzo", w: 314, h: 78 },
  { name: "Lipesa", file: "lipesa", w: 165, h: 84 },
  { name: "Chilco", file: "chilco", w: 180, h: 85 },
  { name: "Liga de Tenis de Bogotá", file: "liga-tenis-bogota", w: 133, h: 146 },
  { name: "Fundación Luker", file: "fundacion-luker", w: 189, h: 81 },
  { name: "Get Down Producciones", file: "get-down", w: 118, h: 87 },
  { name: "Sound Trip", file: "sound-trip", w: 125, h: 139 },
  { name: "Claps", file: "claps", w: 165, h: 38 },
  { name: "Arpro", file: "arpro", w: 133, h: 113 },
] as const;

/** Eventos en los que Viaja América ha participado (brochure). */
export const PARTICIPATIONS = [
  { name: "Vuelta a Colombia", category: "Ciclismo" },
  { name: "Vuelta a Colombia Femenina", category: "Ciclismo" },
  { name: "Vuelta del Porvenir", category: "Ciclismo" },
  { name: "Vuelta a la Juventud", category: "Ciclismo" },
  { name: "Clásico RCN", category: "Ciclismo" },
  { name: "UCI BMX Racing World Cup Bogotá", category: "Ciclismo" },
  { name: "Torneo Las Américas", category: "Deportivo" },
  { name: "Megaland Musicfest", category: "Musical" },
] as const;
