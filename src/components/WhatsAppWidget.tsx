"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/data/catalog";

export default function WhatsAppWidget() {
  const url = buildWhatsAppLink(
    "¡Hola Exclusive! Quisiera consultar por el alquiler de un traje en Mendoza."
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp a Exclusive Alquiler de Trajes"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 group flex items-center gap-2.5 sm:gap-3 bg-[#1f9d55] hover:bg-[#198748] text-white px-4 py-3 sm:pl-4 sm:pr-5 sm:py-3.5 rounded-full shadow-2xl shadow-black/70 border border-white/20 transition-all duration-300 active:scale-95 sm:hover:scale-105"
    >
      <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-white"></span>
      </span>
      <MessageCircle className="w-5 h-5 fill-white/20 shrink-0" />
      <div className="flex flex-col text-left leading-tight">
        <span className="hidden sm:block text-[10px] uppercase tracking-wider text-emerald-100">
          Atención Inmediata
        </span>
        <span className="text-xs font-semibold tracking-wide">
          WhatsApp
        </span>
      </div>
    </a>
  );
}
