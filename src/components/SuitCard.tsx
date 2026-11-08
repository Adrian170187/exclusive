"use client";

import React from "react";
import { Eye, MessageCircle, Sparkles } from "lucide-react";
import { SuitItem, buildWhatsAppLink } from "@/data/catalog";

interface SuitCardProps {
  item: SuitItem;
  onSelect: (item: SuitItem) => void;
}

export default function SuitCard({ item, onSelect }: SuitCardProps) {
  const quickWhatsapp = buildWhatsAppLink(
    `¡Hola Exclusive! Quiero consultar disponibilidad y precio de alquiler del modelo "${item.name}" (${item.subtitle}).`
  );

  return (
    <article className="group bg-white border border-zinc-200 hover:border-zinc-900 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 sm:hover:-translate-y-1 shadow-sm hover:shadow-xl">
      <div>
        {/* Image Container */}
        <div
          onClick={() => onSelect(item)}
          className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-zinc-100 cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15 opacity-80" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
            {item.badge ? (
              <span className="px-2.5 py-1 bg-white text-zinc-950 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow">
                {item.badge}
              </span>
            ) : (
              <span />
            )}
            <span className="px-2.5 py-1 bg-zinc-950/85 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider rounded-sm shrink-0">
              {item.fit}
            </span>
          </div>

          {/* Hover Quick View Overlay (Desktop) */}
          <div className="hidden sm:flex absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-white text-zinc-950 text-xs uppercase tracking-[0.15em] font-bold shadow-lg">
              <Eye className="w-4 h-4" />
              <span>Ver Ficha & Talles</span>
            </span>
          </div>

          {/* Bottom Image Caption */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 text-xs">
            <span className="text-white uppercase tracking-[0.12em] text-[10px] font-semibold truncate">
              {item.categoryLabel}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] text-zinc-900 bg-white/95 px-2 py-0.5 rounded-sm font-medium shrink-0 shadow-sm">
              <span
                className="w-2.5 h-2.5 rounded-full border border-zinc-400 shrink-0"
                style={{ backgroundColor: item.colorHex }}
              />
              <span className="truncate max-w-[110px]">{item.color}</span>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] text-zinc-500 mb-1.5">
            <span className="flex items-center gap-1 text-zinc-800 font-medium">
              <Sparkles className="w-3 h-3 shrink-0" />
              <span>{item.priceTier}</span>
            </span>
            <span>
              Talles: {item.availableSizes[0]} al{" "}
              {item.availableSizes[item.availableSizes.length - 1]}
            </span>
          </div>

          <h3
            onClick={() => onSelect(item)}
            className="font-serif text-xl text-zinc-950 font-semibold group-hover:text-zinc-700 transition-colors cursor-pointer"
          >
            {item.name}
          </h3>
          <p className="text-xs text-zinc-500 mt-1 line-clamp-1">
            {item.subtitle}
          </p>

          <p className="text-xs text-zinc-600 mt-2.5 sm:mt-3 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Actions Footer */}
      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => onSelect(item)}
          className="flex-1 py-3 sm:py-2.5 px-3 rounded-sm border border-zinc-300 hover:border-zinc-950 text-zinc-800 hover:text-black text-xs uppercase tracking-wider font-medium transition-colors flex items-center justify-center gap-1.5"
        >
          <Eye className="w-3.5 h-3.5 shrink-0" />
          <span>Detalles</span>
        </button>
        <a
          href={quickWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 sm:py-2.5 px-3 rounded-sm bg-zinc-950 hover:bg-zinc-800 text-white text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-1.5"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span>Reservar</span>
        </a>
      </div>
    </article>
  );
}
