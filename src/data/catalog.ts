const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export type CategoryId =
  | "todos"
  | "ambos"
  | "esmoquin"
  | "etiqueta"
  | "accesorios";

export type OccasionId =
  | "todos"
  | "novios"
  | "egresados"
  | "padrinos"
  | "invitados"
  | "gala";

export interface SuitItem {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: Exclude<CategoryId, "todos">;
  categoryLabel: string;
  occasions: Exclude<OccasionId, "todos">[];
  fit: "Slim Fit" | "Tailored Fit" | "Classic Fit" | "Talle Único / Ajustable";
  color: string;
  colorHex: string;
  fabric: string;
  lapel: string;
  priceTier: string;
  badge?: string;
  image: string;
  secondaryImage: string;
  description: string;
  includes: string[];
  availableSizes: string[];
  featured?: boolean;
}

export const BUSINESS_INFO = {
  name: "EXCLUSIVE",
  fullName: "Exclusive — Alquiler de Trajes",
  tagline: "Alta Sastrería & Etiqueta Masculina en Mendoza",
  instagramHandle: "@trajes_exclusive",
  instagramUrl: "https://www.instagram.com/trajes_exclusive/",
  taplinkUrl: "https://taplink.cc/exclusivealquilertrajes",
  whatsappNumber: "5492616091545",
  phoneDisplay: "+54 9 261 609-1545",
  address: "Av. San Martín 1425 (Galería Bamac), Ciudad de Mendoza",
  city: "Mendoza, Argentina (CP M5500)",
  googleMapsQuery:
    "https://www.google.com/maps/search/?api=1&query=Av.+San+Martin+1425,+Ciudad+de+Mendoza,+Mendoza,+Argentina",
  hours: [
    { days: "Lunes a Viernes", time: "09:30 a 13:30 hs · 16:30 a 20:30 hs" },
    { days: "Sábados", time: "09:30 a 14:00 hs" },
  ],
  stats: [
    { value: "+1.900", label: "Seguidores en Instagram" },
    { value: "100%", label: "Ajuste Sartorial a Medida" },
    { value: "+500", label: "Eventos y Bodas por Temporada" },
    { value: "4.9★", label: "Valoración de Clientes en Mendoza" },
  ],
};

export const CATEGORIES: {
  id: CategoryId;
  label: string;
  countLabel: string;
}[] = [
  { id: "todos", label: "Toda la Colección", countLabel: "12 piezas" },
  {
    id: "ambos",
    label: "Trajes & Ambos",
    countLabel: "Novios · Egresados · Invitados",
  },
  {
    id: "esmoquin",
    label: "Smoking (Black Tie)",
    countLabel: "Solapa Razo & Gala",
  },
  {
    id: "etiqueta",
    label: "Frac & Jaqué",
    countLabel: "Protocolo & Alta Ceremonia",
  },
  {
    id: "accesorios",
    label: "Accesorios & Calzado",
    countLabel: "Camisas · Chalecos · Zapatos",
  },
];

export const OCCASIONS: { id: OccasionId; label: string }[] = [
  { id: "todos", label: "Todas las ocasiones" },
  { id: "novios", label: "Novios" },
  { id: "egresados", label: "Egresados" },
  { id: "padrinos", label: "Padrinos" },
  { id: "invitados", label: "Invitados & 15 Años" },
  { id: "gala", label: "Gala & Etiqueta Rigurosa" },
];

export const CATALOG_ITEMS: SuitItem[] = [
  {
    id: "smoking-imperial-noir",
    slug: "smoking-imperial-noir",
    name: "Smoking Imperial Noir",
    subtitle: "Solapa Smoking en Razo de Seda Italiano",
    category: "esmoquin",
    categoryLabel: "Smoking / Black Tie",
    occasions: ["novios", "gala", "egresados"],
    fit: "Slim Fit",
    color: "Negro Obsidiana",
    colorHex: "#111115",
    fabric: "Lana fría Super 120s con solapa en raso",
    lapel: "Solapa Chal (Shawl Lapel) en satén",
    priceTier: "Línea Black Tie Exclusive",
    badge: "Más Elegido por Novios",
    image: `${BASE_PATH}/catalogo/smoking-imperial-noir.jpg`,
    secondaryImage: `${BASE_PATH}/catalogo/smoking-azul-medianoche.jpg`,
    description:
      "Nuestro esmoquin insignia para novios y galas de etiqueta en Mendoza. Corte Slim Fit contemporáneo con solapa redonda de raso negro, botón forrado y pantalón con galón lateral de seda.",
    includes: [
      "Saco Smoking con solapa de raso",
      "Pantalón de etiqueta con galón lateral",
      "Camisa blanca de gala (cuello paloma o clásico)",
      "Moño de satén negro y faja o chaleco a elección",
      "Ajuste de largo de mangas y botamanga incluido",
    ],
    availableSizes: ["44", "46", "48", "50", "52", "54", "56", "58", "60"],
    featured: true,
  },
  {
    id: "ambo-milano-azul-noche",
    slug: "ambo-milano-azul-noche",
    name: "Ambo Milano Azul Noche",
    subtitle: "Tres Piezas con Chaleco Sartorial a Tono",
    category: "ambos",
    categoryLabel: "Trajes & Ambos",
    occasions: ["novios", "egresados", "padrinos", "invitados"],
    fit: "Slim Fit",
    color: "Azul Noche Profundo",
    colorHex: "#17233b",
    fabric: "Casimir liviano italiano antipilling",
    lapel: "Solapa en Punta (Peak Lapel)",
    priceTier: "Pack Completo 3 Piezas",
    badge: "Favorito Egresados & Bodas",
    image: `${BASE_PATH}/catalogo/ambo-milano-azul-noche.jpg`,
    secondaryImage: `${BASE_PATH}/catalogo/pack-camisa-chaleco-sastrero.jpg`,
    description:
      "Elegancia versátil que estiliza la figura tanto de día en bodegas mendocinas como de noche en salones. Incluye chaleco entallado de 5 botones y corbata o moño a elección.",
    includes: [
      "Saco entallado dos botones",
      "Chaleco sartorial al tono",
      "Pantalón corte italiano",
      "Camisa entallada blanca o celeste hielo",
      "Corbata slim o moño + pañuelo de bolsillo",
    ],
    availableSizes: ["42", "44", "46", "48", "50", "52", "54", "56", "58"],
    featured: true,
  },
  {
    id: "jaque-ceremonia-windsor",
    slug: "jaque-ceremonia-windsor",
    name: "Jaqué Windsor de Ceremonia",
    subtitle: "Etiqueta Europea para Bodas de Día y Catedral",
    category: "etiqueta",
    categoryLabel: "Frac & Jaqué",
    occasions: ["novios", "padrinos", "gala"],
    fit: "Tailored Fit",
    color: "Gris Marengo & Contraste Perla",
    colorHex: "#2d3036",
    fabric: "Lana peinada inglesa con pantalón fantasía",
    lapel: "Levita clásica con faldón curvo",
    priceTier: "Alta Etiqueta Ceremonial",
    badge: "Etiqueta de Máximo Nivel",
    image: `${BASE_PATH}/catalogo/jaque-ceremonia-windsor.jpg`,
    secondaryImage: `${BASE_PATH}/catalogo/pack-camisa-chaleco-sastrero.jpg`,
    description:
      "El máximo exponente de distinción para novios y padrinos en bodas diurnas o de tarde en viñedos de Mendoza. Levita de corte impecable combinada con chaleco gris perla cruzado y pantalón milrayas.",
    includes: [
      "Levita de Jaqué corte inglés",
      "Chaleco cruzado o simple en tono contraste",
      "Pantalón clásico de etiqueta a rayas",
      "Camisa de ceremonia doble puño",
      "Corbatón o corbata de seda + gemelos",
    ],
    availableSizes: ["46", "48", "50", "52", "54", "56", "58"],
    featured: true,
  },
  {
    id: "smoking-ivory-velvet",
    slug: "smoking-ivory-velvet",
    name: "Smoking Bianco & Solapa Negra",
    subtitle: "Saco Marfil con Solapa en Punta Contrastada",
    category: "esmoquin",
    categoryLabel: "Smoking / Black Tie",
    occasions: ["novios", "egresados", "gala"],
    fit: "Slim Fit",
    color: "Blanco Marfil & Negro",
    colorHex: "#ece8df",
    fabric: "Gabardina satinada de alto gramaje",
    lapel: "Solapa en Punta de raso negro",
    priceTier: "Edición Red Carpet",
    badge: "Tendencia Novios & Egresados",
    image: `${BASE_PATH}/catalogo/smoking-ivory-velvet.jpg`,
    secondaryImage: `${BASE_PATH}/catalogo/smoking-imperial-noir.jpg`,
    description:
      "Diseñado para quienes buscan destacar con absoluta distinción. Saco marfil con solapa negra en contraste, acompañado de pantalón negro de etiqueta y moño de seda.",
    includes: [
      "Saco Smoking Ivory con solapa negra",
      "Pantalón negro con galón satinado",
      "Camisa de gala plisada o lisa",
      "Moño negro y botones de gala",
      "Pañuelo de seda negro",
    ],
    availableSizes: ["44", "46", "48", "50", "52", "54"],
    featured: true,
  },
  {
    id: "ambo-marengo-ejecutivo",
    slug: "ambo-marengo-ejecutivo",
    name: "Ambo Torino Gris Marengo",
    subtitle: "Sobriedad Sartorial para Padrinos e Invitados",
    category: "ambos",
    categoryLabel: "Trajes & Ambos",
    occasions: ["padrinos", "invitados", "egresados"],
    fit: "Tailored Fit",
    color: "Gris Marengo Carbón",
    colorHex: "#373a40",
    fabric: "Tropical mecánico premium de caída fluida",
    lapel: "Solapa Clásica (Notch Lapel)",
    priceTier: "Alquiler Clásico Completo",
    image: `${BASE_PATH}/catalogo/ambo-marengo-ejecutivo.jpg`,
    secondaryImage: `${BASE_PATH}/catalogo/pack-camisa-chaleco-sastrero.jpg`,
    description:
      "Un clásico infalible para padrinos de boda, invitados especiales, graduaciones y congresos empresariales en Mendoza. Corte Tailored Fit cómodo y elegante.",
    includes: [
      "Saco gris marengo corte sastre",
      "Pantalón a tono con ajuste personalizado",
      "Camisa formal blanca o celeste",
      "Corbata italiana de seda a elección",
    ],
    availableSizes: ["44", "46", "48", "50", "52", "54", "56", "58", "62"],
    featured: false,
  },
  {
    id: "frac-gala-viena",
    slug: "frac-gala-viena",
    name: "Frac Imperial White Tie",
    subtitle: "Protocolo Diplomático, Lírica y Gala Suprema",
    category: "etiqueta",
    categoryLabel: "Frac & Jaqué",
    occasions: ["gala", "novios"],
    fit: "Tailored Fit",
    color: "Negro Riguroso & Piqué Blanco",
    colorHex: "#0f0f12",
    fabric: "Paño de lana virgen con solapa de seda mate",
    lapel: "Solapa en Punta con faldón de pingüino",
    priceTier: "Protocolo White Tie",
    image: `${BASE_PATH}/catalogo/frac-gala-viena.jpg`,
    secondaryImage: `${BASE_PATH}/catalogo/smoking-imperial-noir.jpg`,
    description:
      "Traje de máxima etiqueta masculina para galas protocolares, conciertos sinfónicos y casamientos de etiqueta rigurosa. Incluye chaleco y moño en piqué blanco.",
    includes: [
      "Chaquetilla de Frac con faldones traseros",
      "Chaleco de piqué blanco abotonado",
      "Pantalón con doble galón de seda",
      "Camisa de cuello diplomático (paloma)",
      "Moño blanco de piqué",
    ],
    availableSizes: ["46", "48", "50", "52", "54", "56"],
    featured: false,
  },
  {
    id: "ambo-bordeaux-egresados",
    slug: "ambo-bordeaux-egresados",
    name: "Ambo Venezia Bordeaux",
    subtitle: "Personalidad y Corte Ultra Slim para Egresados",
    category: "ambos",
    categoryLabel: "Trajes & Ambos",
    occasions: ["egresados", "novios", "invitados"],
    fit: "Slim Fit",
    color: "Bordó / Vino Malbec",
    colorHex: "#4f1824",
    fabric: "Gabardina elastizada importada",
    lapel: "Solapa angosta con vivo satinado",
    priceTier: "Línea Egresados & Fiesta",
    badge: "Especial Egresados Mendoza",
    image: `${BASE_PATH}/catalogo/ambo-bordeaux-egresados.jpg`,
    secondaryImage: `${BASE_PATH}/catalogo/set-corbatas-monos-gemelos.jpg`,
    description:
      "Inspirado en los tonos del Malbec mendocino, este ambo Slim Fit ofrece un calce moderno e impactante para cenas de egresados y novios que buscan un look audaz.",
    includes: [
      "Saco Slim Fit tono Bordeaux",
      "Pantalón chupín formal al tono o negro",
      "Camisa negra o blanca entallada",
      "Moño o corbata slim + pañuelo",
    ],
    availableSizes: ["42", "44", "46", "48", "50", "52", "54"],
    featured: true,
  },
  {
    id: "ambo-arena-bodega",
    slug: "ambo-arena-bodega",
    name: "Ambo Toscana Beige Champagne",
    subtitle: "Especial Bodas de Día y Atardeceres en Bodegas",
    category: "ambos",
    categoryLabel: "Trajes & Ambos",
    occasions: ["novios", "invitados", "padrinos"],
    fit: "Slim Fit",
    color: "Arena / Champagne Claro",
    colorHex: "#cbbba0",
    fabric: "Textura lino-sastrero fresco antiarrugas",
    lapel: "Solapa Clásica pespunteada",
    priceTier: "Colección Sunset & Viñedos",
    badge: "Ideal Bodas en Bodegas",
    image: `${BASE_PATH}/catalogo/ambo-arena-bodega.jpg`,
    secondaryImage: `${BASE_PATH}/catalogo/set-corbatas-monos-gemelos.jpg`,
    description:
      "Pensado especialmente para casamientos al aire libre en Luján de Cuyo, Maipú y Valle de Uco. Fresco, luminoso y con una caída sartorial impecable en fotografías de día.",
    includes: [
      "Saco color arena / beige champagne",
      "Chaleco opcional a tono",
      "Pantalón corte slim",
      "Camisa blanca de algodón puro",
      "Corbata o moño en tonos tierra, verde oliva o terracota",
    ],
    availableSizes: ["44", "46", "48", "50", "52", "54", "56"],
    featured: true,
  },
  {
    id: "smoking-azul-medianoche",
    slug: "smoking-azul-medianoche",
    name: "Smoking Midnight Blue",
    subtitle: "Azul Medianoche con Solapa en Punta de Seda Negra",
    category: "esmoquin",
    categoryLabel: "Smoking / Black Tie",
    occasions: ["novios", "gala", "egresados"],
    fit: "Slim Fit",
    color: "Azul Medianoche & Negro",
    colorHex: "#121b2e",
    fabric: "Lana fría con microbrillo nocturno",
    lapel: "Solapa en Punta en raso negro",
    priceTier: "Línea Black Tie Exclusive",
    image: `${BASE_PATH}/catalogo/smoking-azul-medianoche.jpg`,
    secondaryImage: `${BASE_PATH}/catalogo/smoking-imperial-noir.jpg`,
    description:
      "El favorito de las alfombras rojas internacionales: bajo luz artificial se percibe aún más intenso que el negro y resalta el contraste con las solapas de seda negra.",
    includes: [
      "Saco Smoking azul medianoche con solapa negra",
      "Pantalón al tono o negro de etiqueta",
      "Camisa blanca para gemelos",
      "Moño de satén negro y pañuelo",
    ],
    availableSizes: ["44", "46", "48", "50", "52", "54", "56"],
    featured: false,
  },
  {
    id: "pack-camisa-chaleco-sastrero",
    slug: "pack-camisa-chaleco-sastrero",
    name: "Chalecos Sartoriales & Camisería de Gala",
    subtitle: "Cruzados, Simples, Fantasía y Cuello Paloma",
    category: "accesorios",
    categoryLabel: "Accesorios & Calzado",
    occasions: ["novios", "padrinos", "invitados", "egresados"],
    fit: "Slim Fit",
    color: "Negro, Gris Perla, Azul, Marfil",
    colorHex: "#8d929c",
    fabric: "Sarga sastrera y algodón egipcio",
    lapel: "Escote en V sastrero de 4 a 6 botones",
    priceTier: "Adicional o Alquiler Individual",
    image: `${BASE_PATH}/catalogo/pack-camisa-chaleco-sastrero.jpg`,
    secondaryImage: `${BASE_PATH}/catalogo/ambo-milano-azul-noche.jpg`,
    description:
      "Elevá tu ambo con un chaleco sastrero en contraste o al tono y camisas impecables de puño simple o doble para gemelos, cuello italiano o diplomático (paloma).",
    includes: [
      "Chaleco sastrero con hebilla reguladora trasera",
      "Camisa planchada a vapor lista para vestir",
      "Asesoramiento de combinación cromática en el local",
    ],
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    featured: false,
  },
  {
    id: "calzado-oxford-charol-cuero",
    slug: "calzado-oxford-charol-cuero",
    name: "Zapatos Oxford de Cuero & Charol de Gala",
    subtitle: "Calzado Formal Masculino del Talle 38 al 46",
    category: "accesorios",
    categoryLabel: "Accesorios & Calzado",
    occasions: ["novios", "egresados", "padrinos", "invitados", "gala"],
    fit: "Classic Fit",
    color: "Negro Charol y Cuero Negro Mate",
    colorHex: "#1c1917",
    fabric: "Cuero vacuno legítimo y charol italiano",
    lapel: "Horma estilizada acordonada",
    priceTier: "Complemento de Alquiler",
    badge: "Del Talle 38 al 46",
    image: `${BASE_PATH}/catalogo/calzado-oxford-charol-cuero.jpg`,
    secondaryImage: `${BASE_PATH}/catalogo/set-corbatas-monos-gemelos.jpg`,
    description:
      "Completá tu conjunto sin preocuparte por comprar calzado para una sola noche. Zapatos Oxford en cuero mate para trajes y charol espejado para smoking y frac, higienizados y lustrados profesionalmente.",
    includes: [
      "Par de zapatos de vestir para hombre en caja",
      "Cinturón de cuero al tono (opcional)",
      "Higienización ozonizada garantizada",
    ],
    availableSizes: ["38", "39", "40", "41", "42", "43", "44", "45", "46"],
    featured: false,
  },
  {
    id: "set-corbatas-monos-gemelos",
    slug: "set-corbatas-monos-gemelos",
    name: "Set de Moños, Corbatas, Tiradores & Gemelos",
    subtitle: "Más de 60 Tonos para Combinar con el Evento",
    category: "accesorios",
    categoryLabel: "Accesorios & Calzado",
    occasions: ["novios", "egresados", "padrinos", "invitados", "gala"],
    fit: "Talle Único / Ajustable",
    color: "Carta de +60 Colores en Seda y Satén",
    colorHex: "#d4af37",
    fabric: "Seda natural, microfibra italiana y acero quirúrgico",
    lapel: "Accesorios de Etiqueta Masculina",
    priceTier: "Incluido en Packs o Individual",
    image: `${BASE_PATH}/catalogo/set-corbatas-monos-gemelos.jpg`,
    secondaryImage: `${BASE_PATH}/catalogo/pack-camisa-chaleco-sastrero.jpg`,
    description:
      "El detalle define al caballero: contamos con una amplia paleta de corbatas slim y clásicas, corbatones para novios, moños armados o para anudar, pañuelos de bolsillo, fajas de smoking, tiradores y gemelos.",
    includes: [
      "Moño o corbata del color exacto que buscás",
      "Pañuelo de bolsillo (pochette) haciendo juego",
      "Gemelos metálicos, faja de raso o tiradores elásticos",
    ],
    availableSizes: ["Regulable"],
    featured: false,
  },
];

export const RENTAL_STEPS = [
  {
    step: "01",
    title: "Asesoramiento & Elección en el Local",
    subtitle: "Con o sin turno previo en Av. San Martín 1425",
    description:
      "Te recibimos en nuestro showroom de Ciudad de Mendoza (Galería Bamac). Analizamos el tipo de evento (boda de día en bodega, gala nocturna, egreso o fiesta de 15), tu fisonomía y el código de vestimenta para recomendarte el traje, smoking o jaqué ideal.",
    highlight: "Atención personalizada",
  },
  {
    step: "02",
    title: "Toma de Medidas & Ajustes de Sastrería",
    subtitle: "Calce perfecto hecho para vos",
    description:
      "Nuestros especialistas toman tus medidas exactas de largo de mangas, entalle de saco, cintura y ruedo de pantalón. Reservás tu prenda con una seña mínima para bloquear la fecha de tu evento.",
    highlight: "Ajustes incluidos en el alquiler",
  },
  {
    step: "03",
    title: "Prueba Final & Retiro Listo para Vestir",
    subtitle: "24 a 48 hs antes de tu evento",
    description:
      "Retirás tu traje planchado a vapor en funda porta-traje exclusiva, junto con la camisa, chaleco, moño/corbata y calzado. Te realizás una última prueba rápida en el local para verificar que cada detalle luzca impecable.",
    highlight: "Entrega en porta-traje",
  },
  {
    step: "04",
    title: "Disfrutá tu Noche & Devolución Simple",
    subtitle: "Tintorería incluida a nuestro cargo",
    description:
      "Después de la fiesta, simplemente devolvés las prendas en el local el primer día hábil acordado. ¡No tenés que lavarlo ni plancharlo! Nuestro equipo se encarga de la tintorería y sanitización profesional.",
    highlight: "Sin lavado previo al devolver",
  },
];

export const FAQS = [
  {
    question: "¿Con cuánta anticipación conviene reservar el traje?",
    answer:
      "Para novios, padrinos y egresados en temporada alta (septiembre a abril en Mendoza), recomendamos acercarse entre 15 y 45 días antes del evento para asegurar disponibilidad de modelo y talle. Si tenés un evento de último momento este mismo fin de semana, ¡escribinos por WhatsApp! Contamos con stock inmediato y taller de ajuste rápido.",
  },
  {
    question: "¿Qué incluye el alquiler de un traje o smoking completo?",
    answer:
      "Nuestros packs completos incluyen Saco, Pantalón, Camisa formal (cuello clásico o cuello paloma de gala), y accesorio a elección (Corbata o Moño + Pañuelo de bolsillo), además de los ajustes de largo de mangas y botamanga y el servicio de tintorería posterior. También podés sumar chaleco, faja, gemelos, tiradores y zapatos.",
  },
  {
    question: "¿Tengo que lavar el traje antes de devolverlo?",
    answer:
      "No, en absoluto. El servicio de tintorería, desinfección y planchado a vapor corre 100% por cuenta de Exclusive Alquiler de Trajes. Solo te pedimos devolverlo en su porta-traje y percha original en la fecha pactada.",
  },
  {
    question: "¿Qué requisitos solicitan para alquilar y cómo se reserva?",
    answer:
      "Para congelar el precio y reservar la prenda para tu fecha, se abona una seña (en efectivo, transferencia o Mercado Pago) y al retirar se cancela el saldo restante presentando DNI y una boleta de servicio o garantía simple.",
  },
  {
    question:
      "¿Tienen talles especiales y trajes para grupos de egresados o cortejos?",
    answer:
      "Sí, trabajamos una curva amplísima desde el talle 40/42 hasta talles especiales (60/62+), en cortes Slim Fit y Clásico. Además ofrecemos beneficios exclusivos por grupo para promociones de egresados y cortejos de boda (novio + padrinos + testigos).",
  },
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Novios en Bodegas de Mendoza",
    category: "Novios & Ceremonia",
    caption:
      "Ambo tres piezas beige champagne y smoking clásico en casamientos de Luján de Cuyo y Maipú.",
    image: `${BASE_PATH}/catalogo/ambo-arena-bodega.jpg`,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "gal-2",
    title: "Black Tie & Solapa de Seda",
    category: "Smoking",
    caption:
      "Detalle de solapa chal en raso italiano, moño de satén y pañuelo de bolsillo.",
    image: `${BASE_PATH}/catalogo/smoking-imperial-noir.jpg`,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-3",
    title: "Noche de Egresados",
    category: "Egresados",
    caption:
      "Cortes Slim Fit modernos en tonos bordeaux Malbec, azul noche y negro obsidiana.",
    image: `${BASE_PATH}/catalogo/ambo-bordeaux-egresados.jpg`,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-4",
    title: "Sastrería Tres Piezas",
    category: "Ambos & Chalecos",
    caption:
      "Chalecos entallados que mantienen la elegancia incluso al quitarse el saco durante la fiesta.",
    image: `${BASE_PATH}/catalogo/ambo-milano-azul-noche.jpg`,
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: "gal-5",
    title: "Smoking Blanco & Medianoche",
    category: "Edición Red Carpet",
    caption:
      "Sacos smoking en blanco marfil y azul medianoche con solapa en punta de seda negra.",
    image: `${BASE_PATH}/catalogo/smoking-ivory-velvet.jpg`,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gal-6",
    title: "Calzado Oxford & Charol",
    category: "Accesorios Masculinos",
    caption:
      "Zapatos de vestir para hombre lustrados a espejo y accesorios de etiqueta para un look integral.",
    image: `${BASE_PATH}/catalogo/calzado-oxford-charol-cuero.jpg`,
    span: "md:col-span-1 md:row-span-1",
  },
];

export const TESTIMONIALS = [
  {
    name: "Matías G.",
    role: "Novio · Boda en Luján de Cuyo",
    text: "Alquilé mi smoking y los trajes de los 4 padrinos en Exclusive. La atención en el local de calle San Martín fue de diez: nos tomaron las medidas a todos y los retoques de sastrería quedaron como hechos a medida.",
    rating: 5,
  },
  {
    name: "Valentín R.",
    role: "Cena de Egresados · Mendoza",
    text: "Fui buscando un ambo Slim Fit azul noche con chaleco y moño. Tienen muchísima variedad de talles y colores modernos que en otros lugares no conseguía. Lo retiré impecable en su porta-traje.",
    rating: 5,
  },
  {
    name: "Fernando L.",
    role: "Padrino de Casamiento",
    text: "Necesitaba un traje completo con zapatos incluidos a tres días de un casamiento. Me asesoraron rapidísimo por WhatsApp, pasé a probarme a la Galería Bamac y al día siguiente ya tenía todo ajustado.",
    rating: 5,
  },
];

export function buildWhatsAppLink(customMessage: string): string {
  const encoded = encodeURIComponent(customMessage);
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
}
