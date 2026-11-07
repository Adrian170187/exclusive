"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Scissors,
  ShieldCheck,
  ArrowRight,
  Shirt,
} from "lucide-react";
import { RENTAL_STEPS, FAQS, buildWhatsAppLink } from "@/data/catalog";

const DRESS_CODE_ADVISOR = [
  {
    id: "novio",
    role: "Soy el Novio",
    recommended: "Smoking Imperial Noir, Jaqué Windsor o Ambo 3 Piezas",
    tip: "El novio siempre debe diferenciarse por nivel de etiqueta o por un tercer elemento (chaleco sastrero en contraste, solapa de raso o corbatón/moño exclusivo).",
    includes: [
      "Saco + Pantalón + Chaleco Sartorial",
      "Camisa de gala doble puño o cuello paloma",
      "Moño, corbata italiana o corbatón + pañuelo",
      "Gemelos + Zapatos Oxford de cuero o charol",
      "Ajuste de sastrería prioritario",
    ],
  },
  {
    id: "egresado",
    role: "Soy Egresado",
    recommended: "Ambo Slim Fit (Azul Noche, Negro o Bordeaux) o Smoking",
    tip: "El corte Slim Fit entallado al cuerpo y botamanga al tobillo estiliza la silueta. Podés combinarlo con moño o corbata slim y camisa blanca o negra.",
    includes: [
      "Saco Slim Fit + Pantalón chupín formal",
      "Camisa entallada blanca o negra",
      "Moño o corbata slim en +60 colores",
      "Chaleco o tiradores opcionales",
      "Promoción especial por grupo de compañeros",
    ],
  },
  {
    id: "padrino",
    role: "Soy Padrino / Padre",
    recommended: "Ambo Torino Marengo, Azul Noche o Jaqué de Ceremonia",
    tip: "Coordinamos tu traje con la elección del novio para lograr armonía visual en el altar y en las fotografías familiares.",
    includes: [
      "Saco Tailored o Slim Fit + Pantalón",
      "Chaleco opcional a tono",
      "Camisa formal + Corbata de seda y pochette",
      "Calzado formal de cuero lustrado",
      "Ajuste de cintura y largos incluido",
    ],
  },
  {
    id: "invitado",
    role: "Soy Invitado / Gala",
    recommended: "Ambo Clásico / Slim Fit o Smoking Black Tie",
    tip: "Para bodas de día en bodegas mendocinas recomendamos tonos beige arena, azul o gris medio; para noche, azul profundo o negro.",
    includes: [
      "Ambo 2 piezas impecable listo para usar",
      "Camisa planchada a vapor",
      "Corbata o moño incluido",
      "Tintorería post-evento 100% incluida",
    ],
  },
];

export default function ComoFuncionaPage() {
  const [activeRole, setActiveRole] = useState(DRESS_CODE_ADVISOR[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const advisorWhatsApp = buildWhatsAppLink(
    `¡Hola Exclusive! Estuve viendo la sección "Cómo Funciona". ${activeRole.role} y me gustaría recibir asesoramiento para alquilar (${activeRole.recommended}).`
  );

  return (
    <div className="bg-obsidian-900 min-h-screen py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="border-b border-white/10 pb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Experiencia Simple & Sin Complicaciones</span>
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold mt-2">
            ¿Cómo Funciona el Alquiler en Exclusive?
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-3xl mt-3">
            Nos ocupamos de cada detalle —desde la elección del corte y los
            ajustes de sastrería hasta el planchado a vapor y la tintorería
            final— para que tu única preocupación sea disfrutar de tu evento.
          </p>
        </div>

        {/* 4 STEPS TIMELINE */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RENTAL_STEPS.map((st) => (
            <div
              key={st.step}
              className="p-8 bg-obsidian-800 border border-white/10 hover:border-gold-400/40 rounded-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-5xl font-bold text-gold-400">
                    Paso {st.step}
                  </span>
                  <span className="px-3 py-1 rounded-sm bg-gold-400/15 border border-gold-400/40 text-gold-300 text-xs uppercase tracking-wider font-semibold">
                    {st.highlight}
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-semibold">
                  {st.title}
                </h2>
                <p className="text-xs uppercase tracking-[0.16em] text-gold-400 mt-1">
                  {st.subtitle}
                </p>
                <p className="text-sm text-zinc-300 mt-4 leading-relaxed">
                  {st.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* INTERACTIVE DRESS CODE ADVISOR */}
        <section className="bg-obsidian-800 border border-gold-400/30 rounded-sm p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-[0.22em] text-gold-400 font-semibold flex items-center gap-1.5">
              <Shirt className="w-4 h-4" />
              <span>Asesor Sartorial Interactivo</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mt-1">
              ¿Qué Necesitás Alquilar Según tu Rol?
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Seleccioná tu perfil para ver la recomendación de nuestros sastres
              y las piezas incluidas en el pack.
            </p>
          </div>

          {/* Role Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {DRESS_CODE_ADVISOR.map((item) => {
              const isSelected = activeRole.id === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveRole(item)}
                  className={`py-3.5 px-4 rounded-sm border text-xs uppercase tracking-[0.15em] font-semibold transition-all ${
                    isSelected
                      ? "bg-gold-400 text-obsidian-900 border-gold-400 shadow-lg"
                      : "bg-obsidian-900 text-zinc-300 border-white/10 hover:border-gold-400/50"
                  }`}
                >
                  {item.role}
                </button>
              );
            })}
          </div>

          {/* Active Recommendation Card */}
          <div className="bg-obsidian-900 border border-white/10 rounded-sm p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.18em] text-gold-400 font-semibold">
                Etiqueta Sugerida para {activeRole.role}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-semibold">
                {activeRole.recommended}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed border-l-2 border-gold-400 pl-4">
                {activeRole.tip}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={advisorWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-gold-400 hover:bg-gold-300 text-obsidian-900 font-bold text-xs uppercase tracking-[0.16em] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Cotizar este Pack por WhatsApp</span>
                </a>
                <Link
                  href="/catalogo"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-sm border border-white/15 hover:border-gold-400 text-zinc-200 text-xs uppercase tracking-[0.15em] transition-all"
                >
                  <span>Ver Modelos en Catálogo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-obsidian-800 p-6 rounded-sm border border-white/10">
              <h4 className="text-xs uppercase tracking-[0.16em] text-gold-400 font-semibold mb-3">
                Piezas disponibles para tu pack:
              </h4>
              <ul className="space-y-2.5">
                {activeRole.includes.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-start gap-2.5 text-xs text-zinc-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* GARANTIA SARTORIAL & TALLES */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 bg-obsidian-800 border border-white/10 rounded-sm space-y-4">
            <Scissors className="w-8 h-8 text-gold-400" />
            <h3 className="font-serif text-2xl text-white font-semibold">
              Taller de Ajustes Propio en el Local
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Sabemos que cada cuerpo es único. Por eso, al momento de tu prueba
              en{" "}
              <strong className="text-white">
                Av. San Martín 1425 (Galería Bamac)
              </strong>
              , marcamos con alfileres el largo exacto de tus mangas y el ruedo
              del pantalón para que el calzado luzca impecable y sin arrugas.
            </p>
          </div>

          <div className="p-8 bg-obsidian-800 border border-white/10 rounded-sm space-y-4">
            <ShieldCheck className="w-8 h-8 text-gold-400" />
            <h3 className="font-serif text-2xl text-white font-semibold">
              Higiene Ozonizada & Planchado Industrial
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Cada traje, camisa y par de zapatos pasa por un riguroso proceso
              de tintorería ecológica, desinfección y planchado a vapor vertical
              antes de entregarse en su funda porta-traje exclusiva.
            </p>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
              Dudas Frecuentes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mt-2">
              Preguntas Frecuentes sobre el Alquiler
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="bg-obsidian-800 border border-white/10 rounded-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                  >
                    <span className="font-serif text-lg sm:text-xl text-white font-medium">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-400 shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
