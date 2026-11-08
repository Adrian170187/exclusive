"use client";

import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  Ruler,
  Calendar,
  Sparkles,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { SuitItem, buildWhatsAppLink } from "@/data/catalog";

interface SuitModalProps {
  item: SuitItem | null;
  onClose: () => void;
}

export default function SuitModal({ item, onClose }: SuitModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");
  const [eventType, setEventType] = useState<string>("Casamiento / Boda");
  const [activeImg, setActiveImg] = useState<"primary" | "secondary">("primary");

  if (!item) return null;

  const sizeToUse =
    selectedSize || item.availableSizes[2] || item.availableSizes[0];

  const customWhatsAppMsg = `¡Hola Exclusive! Me interesa consultar disponibilidad para alquilar:
• Modelo: ${item.name} (${item.subtitle})
• Talle estimado: ${sizeToUse}
• Tipo de evento: ${eventType}${
    eventDate ? `\n• Fecha del evento: ${eventDate}` : ""
  }
¿Podrían confirmarme disponibilidad para pasar a probarme por Av. San Martín 1425?`;

  const whatsappHref = buildWhatsAppLink(customWhatsAppMsg);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="min-h-full flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6">
        <div
          className="relative w-full max-w-4xl bg-white border-t sm:border border-zinc-200 rounded-t-xl sm:rounded-sm shadow-2xl overflow-hidden max-h-[92vh] sm:max-h-none overflow-y-auto text-zinc-900"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sticky Mobile Header so close button is always reachable */}
          <div className="sticky top-0 z-20 flex md:hidden items-center justify-between px-4 py-3 bg-white/95 backdrop-blur-md border-b border-zinc-200">
            <div className="min-w-0 pr-2">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 truncate">
                {item.categoryLabel}
              </p>
              <p className="font-serif text-lg text-zinc-950 font-semibold truncate">
                {item.name}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-800 hover:bg-zinc-950 hover:text-white flex items-center justify-center shrink-0"
              aria-label="Cerrar detalle"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Close button */}
          <button
            type="button"
            onClick={onClose}
            className="hidden md:flex absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white border border-zinc-300 text-zinc-800 hover:bg-zinc-950 hover:text-white items-center justify-center transition-colors shadow-sm"
            aria-label="Cerrar detalle"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Gallery */}
            <div className="relative bg-zinc-50 flex flex-col justify-between p-4 sm:p-6 border-b md:border-b-0 md:border-r border-zinc-200">
              <div className="relative aspect-[4/4] sm:aspect-[3/4] max-h-80 sm:max-h-none w-full overflow-hidden rounded-sm border border-zinc-200 bg-white">
                <img
                  src={
                    activeImg === "primary" ? item.image : item.secondaryImage
                  }
                  alt={item.name}
                  className="w-full h-full object-cover object-top transition-all duration-500"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-zinc-950 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-sm shadow">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Thumbnail switcher */}
              <div className="flex items-center gap-2.5 sm:gap-3 mt-3 sm:mt-4">
                <button
                  type="button"
                  onClick={() => setActiveImg("primary")}
                  className={`flex-1 py-2.5 sm:py-2 text-xs uppercase tracking-wider border rounded-sm transition-colors ${
                    activeImg === "primary"
                      ? "border-zinc-950 bg-zinc-950 text-white font-semibold"
                      : "border-zinc-300 bg-white text-zinc-600 hover:text-black"
                  }`}
                >
                  Vista Principal
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImg("secondary")}
                  className={`flex-1 py-2.5 sm:py-2 text-xs uppercase tracking-wider border rounded-sm transition-colors ${
                    activeImg === "secondary"
                      ? "border-zinc-950 bg-zinc-950 text-white font-semibold"
                      : "border-zinc-300 bg-white text-zinc-600 hover:text-black"
                  }`}
                >
                  Vista Detalle
                </button>
              </div>
            </div>

            {/* Right: Specs & Booking */}
            <div className="p-4 sm:p-8 flex flex-col justify-between space-y-5 sm:space-y-6 bg-white">
              <div>
                <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                  <span>{item.categoryLabel}</span>
                  <span>•</span>
                  <span>{item.fit}</span>
                </div>

                <h2 className="hidden md:block font-serif text-2xl sm:text-3xl text-zinc-950 font-semibold mt-1">
                  {item.name}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 md:mt-1">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed mt-3 sm:mt-4 border-l-2 border-zinc-950 pl-3">
                  {item.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mt-4 sm:mt-5 text-xs bg-zinc-50 p-3.5 rounded-sm border border-zinc-200">
                  <div>
                    <span className="text-zinc-500 block">Tono / Color:</span>
                    <span className="text-zinc-900 font-medium flex items-center gap-1.5 mt-0.5">
                      <span
                        className="w-3 h-3 rounded-full border border-zinc-400 inline-block shrink-0"
                        style={{ backgroundColor: item.colorHex }}
                      />
                      <span>{item.color}</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Solapa / Corte:</span>
                    <span className="text-zinc-900 font-medium mt-0.5 block">
                      {item.lapel}
                    </span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-zinc-500 block">Tejido:</span>
                    <span className="text-zinc-900 font-medium mt-0.5 block">
                      {item.fabric}
                    </span>
                  </div>
                </div>

                {/* Includes list */}
                <div className="mt-4 sm:mt-5">
                  <h3 className="text-xs uppercase tracking-[0.14em] text-zinc-950 font-bold mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>¿Qué incluye este alquiler?</span>
                  </h3>
                  <ul className="space-y-1.5">
                    {item.includes.map((inc) => (
                      <li
                        key={inc}
                        className="flex items-start gap-2 text-xs text-zinc-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-950 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Size & Date Configurator */}
                <div className="mt-4 sm:mt-5 pt-4 border-t border-zinc-200 space-y-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-zinc-800 font-semibold flex items-center gap-1.5 mb-2">
                      <Ruler className="w-3.5 h-3.5 text-zinc-950 shrink-0" />
                      <span>Seleccioná tu talle estimado:</span>
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {item.availableSizes.map((sz) => (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => setSelectedSize(sz)}
                          className={`min-w-[38px] px-2.5 py-1.5 text-xs rounded-sm border transition-all ${
                            sizeToUse === sz
                              ? "bg-zinc-950 text-white border-zinc-950 font-bold"
                              : "bg-white text-zinc-800 border-zinc-300 hover:border-zinc-950"
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-zinc-600 font-medium block mb-1">
                        Tipo de Evento
                      </label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full bg-white border border-zinc-300 rounded-sm px-3 py-2.5 text-base sm:text-xs text-zinc-900 focus:outline-none focus:border-zinc-950"
                      >
                        <option value="Casamiento / Novio">
                          Casamiento (Novio)
                        </option>
                        <option value="Casamiento / Padrino o Invitado">
                          Casamiento (Padrino / Invitado)
                        </option>
                        <option value="Cena de Egresados">
                          Cena de Egresados
                        </option>
                        <option value="Fiesta de 15 Años">
                          Fiesta de 15 Años
                        </option>
                        <option value="Gala / Evento Corporativo">
                          Gala / Evento Corporativo
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-zinc-600 font-medium flex items-center gap-1 mb-1">
                        <Calendar className="w-3 h-3 text-zinc-950 shrink-0" />
                        <span>Fecha del Evento (Opcional)</span>
                      </label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full bg-white border border-zinc-300 rounded-sm px-3 py-2 text-base sm:text-xs text-zinc-900 focus:outline-none focus:border-zinc-950"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action CTA */}
              <div className="pt-2 pb-2 sm:pb-0 space-y-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-sm bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider sm:tracking-[0.14em] flex items-center justify-center gap-2 shadow-lg transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Consultar Disponibilidad por WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-zinc-500 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-950 shrink-0" />
                  <span>
                    Probate sin compromiso en Av. San Martín 1425, Mendoza
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
