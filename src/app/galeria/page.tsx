"use client";

import React, { useState } from "react";
import {
  Instagram,
  Sparkles,
  X,
  ZoomIn,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import {
  GALLERY_ITEMS,
  BUSINESS_INFO,
  buildWhatsAppLink,
} from "@/data/catalog";

export default function GaleriaPage() {
  const [lightboxItem, setLightboxItem] = useState<
    (typeof GALLERY_ITEMS)[0] | null
  >(null);

  return (
    <div className="bg-white text-zinc-900 min-h-screen py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 pb-6 sm:pb-10 mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-zinc-500 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-zinc-950 shrink-0" />
              <span>Inspiración & Estilo Real</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-zinc-950 font-semibold mt-2">
              Galería & Lookbook Exclusive
            </h1>
            <p className="text-xs sm:text-base text-zinc-600 max-w-2xl mt-2.5 sm:mt-3 leading-relaxed">
              Conocé cómo lucen nuestros ambos Slim Fit, esmóquines, jaqués y
              accesorios en bodas en bodegas, cenas de egresados y eventos de
              gala en Mendoza.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-zinc-950 hover:bg-zinc-800 text-white text-xs uppercase tracking-[0.14em] font-semibold transition-all"
          >
            <Instagram className="w-4 h-4 shrink-0" />
            <span>Ver más en {BUSINESS_INFO.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[270px] sm:auto-rows-[320px]">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className={`group relative rounded-sm overflow-hidden border border-zinc-200 hover:border-zinc-900 bg-zinc-100 cursor-pointer shadow-sm hover:shadow-xl transition-all ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-90" />

              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-white/90 border border-zinc-200 flex items-center justify-center text-zinc-950 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity shadow">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-300 font-semibold">
                  {item.category}
                </span>
                <h2 className="font-serif text-xl sm:text-2xl text-white font-semibold mt-0.5">
                  {item.title}
                </h2>
                <p className="text-xs text-zinc-200 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Feed Callout */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-12 rounded-sm bg-zinc-50 border border-zinc-200 text-center space-y-4 sm:space-y-5">
          <Instagram className="w-9 h-9 sm:w-10 sm:h-10 text-zinc-950 mx-auto" />
          <h2 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-semibold">
            Comunidad {BUSINESS_INFO.instagramHandle} en Instagram
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-xl mx-auto">
            Más de 1.900 seguidores en Mendoza comparten sus historias,
            casamientos y noches de egresados vistiendo Exclusive Alquiler de
            Trajes.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-7 py-3.5 rounded-sm bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-[0.14em] inline-flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4 shrink-0" />
              <span>Abrir Instagram Oficial</span>
            </a>
            <a
              href={buildWhatsAppLink(
                "¡Hola Exclusive! Vi su galería web y quiero consultar para probarme un look similar."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-7 py-3.5 rounded-sm bg-white border border-zinc-950 hover:bg-zinc-100 text-zinc-950 text-xs uppercase tracking-[0.14em] font-semibold inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm overflow-y-auto flex items-center justify-center p-3 sm:p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white border border-zinc-200 rounded-sm overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 border border-zinc-300 text-zinc-900 hover:bg-zinc-950 hover:text-white flex items-center justify-center shadow"
              aria-label="Cerrar imagen"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[4/4] sm:aspect-[4/3] max-h-80 sm:max-h-none w-full bg-zinc-100">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
              <div>
                <span className="text-xs uppercase tracking-[0.16em] text-zinc-500 font-semibold">
                  {lightboxItem.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-zinc-950 font-semibold">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs text-zinc-600 mt-1">
                  {lightboxItem.caption}
                </p>
              </div>
              <a
                href={buildWhatsAppLink(
                  `¡Hola Exclusive! Me encantó el look "${lightboxItem.title}" de la galería web y quisiera probarme algo así.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto shrink-0 px-5 py-3.5 sm:py-3 rounded-sm bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Lo Quiero Probar</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
