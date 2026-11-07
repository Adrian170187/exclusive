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
    <div className="bg-obsidian-900 min-h-screen py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-10 mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inspiración & Estilo Real</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold mt-2">
              Galería & Lookbook Exclusive
            </h1>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-3">
              Conocé cómo lucen nuestros ambos Slim Fit, esmóquines, jaqués y
              accesorios en bodas en bodegas, cenas de egresados y eventos de
              gala en Mendoza.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-sm bg-obsidian-800 hover:bg-gold-400/15 border border-gold-400/40 text-gold-300 text-xs uppercase tracking-[0.16em] font-semibold transition-all self-start md:self-auto"
          >
            <Instagram className="w-4 h-4 text-gold-400" />
            <span>Ver más fotos en {BUSINESS_INFO.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className={`group relative rounded-sm overflow-hidden border border-white/10 hover:border-gold-400/60 bg-obsidian-800 cursor-pointer ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/25 to-transparent opacity-90" />

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-obsidian-900/80 border border-white/15 flex items-center justify-center text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-gold-400" />
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold">
                  {item.category}
                </span>
                <h2 className="font-serif text-2xl text-white font-semibold mt-0.5">
                  {item.title}
                </h2>
                <p className="text-xs text-zinc-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Feed Callout */}
        <div className="mt-16 p-8 sm:p-12 rounded-sm bg-obsidian-800 border border-white/10 text-center space-y-5">
          <Instagram className="w-10 h-10 text-gold-400 mx-auto" />
          <h2 className="font-serif text-3xl text-white font-semibold">
            Comunidad {BUSINESS_INFO.instagramHandle} en Instagram
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Más de 1.900 seguidores en Mendoza comparten sus historias,
            casamientos y noches de egresados vistiendo Exclusive Alquiler de
            Trajes.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-sm bg-gold-400 hover:bg-gold-300 text-obsidian-900 font-bold text-xs uppercase tracking-[0.16em] inline-flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Abrir Instagram Oficial</span>
            </a>
            <a
              href={buildWhatsAppLink(
                "¡Hola Exclusive! Vi su galería web y quiero consultar para probarme un look similar."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-sm border border-white/15 hover:border-gold-400 text-white text-xs uppercase tracking-[0.16em] font-semibold inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-gold-400" />
              <span>Consultar por un Look en WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-obsidian-800 border border-gold-400/40 rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-obsidian-900/80 border border-white/20 text-white hover:text-gold-400 flex items-center justify-center"
              aria-label="Cerrar imagen"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[4/3] w-full bg-obsidian-900">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.18em] text-gold-400 font-semibold">
                  {lightboxItem.category}
                </span>
                <h3 className="font-serif text-2xl text-white font-semibold">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs text-zinc-300 mt-1">
                  {lightboxItem.caption}
                </p>
              </div>
              <a
                href={buildWhatsAppLink(
                  `¡Hola Exclusive! Me encantó el look "${lightboxItem.title}" de la galería web y quisiera probarme algo así.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-5 py-3 rounded-sm bg-gold-400 text-obsidian-900 font-bold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Lo Quiero Probar</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
