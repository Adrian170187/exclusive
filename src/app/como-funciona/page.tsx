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
    <div className="bg-white text-zinc-900 min-h-screen py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-20">
        {/* Header */}
        <div className="border-b border-zinc-200 pb-6 sm:pb-10">
          <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-zinc-500 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-zinc-950 shrink-0" />
            <span>Experiencia Simple & Sin Complicaciones</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-zinc-950 font-semibold mt-2">
            ¿Cómo Funciona el Alquiler en Exclusive?
          </h1>
          <p className="text-xs sm:text-base text-zinc-600 max-w-3xl mt-2.5 sm:mt-3 leading-relaxed">
            Nos ocupamos de cada detalle —desde la elección del corte y los
            ajustes de sastrería hasta el planchado a vapor y la tintorería
            final— para que tu única preocupación sea disfrutar de tu evento.
          </p>
        </div>

        {/* 4 STEPS TIMELINE */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {RENTAL_STEPS.map((st) => (
            <div
              key={st.step}
              className="p-5 sm:p-8 bg-zinc-50 border border-zinc-200 hover:border-zinc-900 rounded-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-6">
                  <span className="font-serif text-3xl sm:text-5xl font-bold text-zinc-950">
                    Paso {st.step}
                  </span>
                  <span className="px-2.5 py-1 rounded-sm bg-white border border-zinc-300 text-zinc-900 text-[10px] sm:text-xs uppercase tracking-wider font-semibold">
                    {st.highlight}
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-semibold">
                  {st.title}
                </h2>
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500 font-semibold mt-1">
                  {st.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 mt-3 sm:mt-4 leading-relaxed">
                  {st.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* INTERACTIVE DRESS CODE ADVISOR */}
        <section className="bg-zinc-50 border border-zinc-300 rounded-sm p-5 sm:p-10">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <span className="text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] text-zinc-600 font-semibold flex items-center gap-1.5">
              <Shirt className="w-4 h-4 text-zinc-950 shrink-0" />
              <span>Asesor Sartorial Interactivo</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-zinc-950 font-semibold mt-1">
              ¿Qué Necesitás Alquilar Según tu Rol?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-2">
              Seleccioná tu perfil para ver la recomendación de nuestros sastres
              y las piezas incluidas en el pack.
            </p>
          </div>

          {/* Role Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            {DRESS_CODE_ADVISOR.map((item) => {
              const isSelected = activeRole.id === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveRole(item)}
                  className={`py-3 px-2.5 sm:px-4 rounded-sm border text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-[0.14em] font-semibold transition-all text-center ${
                    isSelected
                      ? "bg-zinc-950 text-white border-zinc-950 shadow-md"
                      : "bg-white text-zinc-800 border-zinc-300 hover:border-zinc-950"
                  }`}
                >
                  {item.role}
                </button>
              );
            })}
          </div>

          {/* Active Recommendation Card */}
          <div className="bg-white border border-zinc-200 rounded-sm p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.15em] text-zinc-500 font-semibold block">
                Etiqueta Sugerida para {activeRole.role}
              </span>
              <h3 className="font-serif text-xl sm:text-3xl text-zinc-950 font-semibold">
                {activeRole.recommended}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed border-l-2 border-zinc-950 pl-3.5 sm:pl-4">
                {activeRole.tip}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={advisorWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-sm bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-[0.14em] transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Cotizar este Pack por WhatsApp</span>
                </a>
                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm border border-zinc-300 hover:border-zinc-950 text-zinc-900 text-xs uppercase tracking-[0.14em] font-semibold transition-all text-center"
                >
                  <span>Ver Modelos en Catálogo</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-zinc-50 p-5 sm:p-6 rounded-sm border border-zinc-200">
              <h4 className="text-xs uppercase tracking-[0.14em] text-zinc-950 font-bold mb-3">
                Piezas disponibles para tu pack:
              </h4>
              <ul className="space-y-2.5">
                {activeRole.includes.map((inc) => (
                  <li
                    key={inc}
                    className="flex items-start gap-2.5 text-xs text-zinc-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-zinc-950 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* GARANTIA SARTORIAL & TALLES */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
          <div className="p-6 sm:p-8 bg-zinc-50 border border-zinc-200 rounded-sm space-y-3 sm:space-y-4">
            <Scissors className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-950" />
            <h3 className="font-serif text-xl sm:text-2xl text-zinc-950 font-semibold">
              Taller de Ajustes Propio en el Local
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Sabemos que cada cuerpo es único. Por eso, al momento de tu prueba
              en{" "}
              <strong className="text-zinc-950">
                Av. San Martín 1425 (Galería Bamac)
              </strong>
              , marcamos con alfileres el largo exacto de tus mangas y el ruedo
              del pantalón para que el calzado luzca impecable y sin arrugas.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-zinc-50 border border-zinc-200 rounded-sm space-y-3 sm:space-y-4">
            <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-950" />
            <h3 className="font-serif text-xl sm:text-2xl text-zinc-950 font-semibold">
              Higiene Ozonizada & Planchado Industrial
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Cada traje, camisa y par de zapatos pasa por un riguroso proceso
              de tintorería ecológica, desinfección y planchado a vapor vertical
              antes de entregarse en su funda porta-traje exclusiva.
            </p>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-zinc-500 font-semibold">
              Dudas Frecuentes
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-zinc-950 font-semibold mt-2">
              Preguntas Frecuentes sobre el Alquiler
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="bg-white border border-zinc-200 rounded-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-3 hover:bg-zinc-50 transition-colors"
                  >
                    <span className="font-serif text-base sm:text-xl text-zinc-950 font-semibold leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-zinc-950 shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 bg-zinc-50/50">
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
