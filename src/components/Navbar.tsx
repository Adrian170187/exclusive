"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MapPin,
  Phone,
  Instagram,
  Menu,
  X,
  Sparkles,
  CalendarCheck,
} from "lucide-react";
import { BUSINESS_INFO, buildWhatsAppLink } from "@/data/catalog";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/como-funciona", label: "Cómo Funciona" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto & Turnos" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const reservaUrl = buildWhatsAppLink(
    "¡Hola Exclusive! Quiero consultar disponibilidad y agendar una prueba de traje en el local de Av. San Martín 1425."
  );

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-obsidian-900/95 border-b border-gold-400/20">
      {/* Top Info Bar */}
      <div className="bg-obsidian-800 border-b border-white/5 text-[11px] sm:text-xs text-zinc-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-8 sm:h-9 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <a
              href={BUSINESS_INFO.googleMapsQuery}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gold-400 transition-colors truncate"
            >
              <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span className="truncate sm:hidden">
                Av. San Martín 1425, Mendoza
              </span>
              <span className="hidden sm:inline truncate">
                {BUSINESS_INFO.address}
              </span>
            </a>
            <span className="hidden md:inline text-white/20">|</span>
            <a
              href={`tel:+${BUSINESS_INFO.whatsappNumber}`}
              className="hidden md:flex items-center gap-1.5 hover:text-gold-400 transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          <div className="flex items-center shrink-0">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gold-300 hover:text-gold-400 font-medium transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 shrink-0" />
              <span>{BUSINESS_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="group flex items-center gap-2.5 sm:gap-3 min-w-0"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-sm border border-gold-400/60 bg-gradient-to-br from-gold-400/20 to-transparent flex items-center justify-center shadow-inner group-hover:border-gold-400 transition-colors shrink-0">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-gold-400">
              E
            </span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-xl sm:text-3xl tracking-[0.14em] sm:tracking-[0.22em] text-white font-semibold leading-none truncate">
              EXCLUSIVE
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.14em] sm:tracking-[0.26em] text-gold-400 mt-1 truncate">
              Alquiler de Trajes · Mendoza
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-xs xl:text-sm uppercase tracking-[0.14em] transition-colors ${
                  isActive
                    ? "text-gold-400 font-semibold"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-400 via-gold-300 to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button (Tablet & Desktop) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={reservaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-sm bg-gradient-to-r from-gold-400 to-gold-500 text-obsidian-900 font-semibold text-xs uppercase tracking-[0.14em] hover:from-gold-300 hover:to-gold-400 transition-all shadow-lg shadow-gold-400/10"
          >
            <CalendarCheck className="w-4 h-4 shrink-0" />
            <span>Reservar Prueba</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 rounded-sm border border-white/15 text-zinc-200 hover:text-gold-400 hover:border-gold-400/40 transition-colors shrink-0"
          aria-label="Abrir menú de navegación"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-obsidian-800 border-b border-gold-400/30 px-4 pt-3 pb-6 space-y-2 shadow-2xl max-h-[calc(100vh-6rem)] overflow-y-auto">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3.5 py-3 rounded-sm text-xs sm:text-sm uppercase tracking-[0.14em] ${
                  isActive
                    ? "bg-gold-400/15 text-gold-400 border-l-2 border-gold-400 font-semibold"
                    : "text-zinc-200 hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={reservaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3.5 rounded-sm bg-gold-400 text-obsidian-900 font-bold text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2 shadow-md"
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Reservar Prueba por WhatsApp</span>
            </a>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 rounded-sm border border-white/15 text-zinc-200 text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Instagram {BUSINESS_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
