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
import BrandLogo from "@/components/BrandLogo";

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
    <header className="sticky top-0 z-40 w-full bg-[#0F0F0F] border-b border-white/10 shadow-lg">
      {/* Top Info Bar - Deep Black & Warm Bronze */}
      <div className="bg-black text-[11px] sm:text-xs text-white/75 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-8 sm:h-9 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <a
              href={BUSINESS_INFO.googleMapsQuery}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors truncate"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C59B6D] shrink-0" />
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
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B6D] shrink-0" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          <div className="flex items-center shrink-0">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/80 hover:text-white font-medium transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C59B6D] shrink-0" />
              <span>{BUSINESS_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation on Black Container with White Contrast Logo */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-2 bg-[#0F0F0F]">
        {/* Official Brand Logo in White */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="group min-w-0 flex items-center"
        >
          <BrandLogo variant="navbar" theme="dark" />
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
                    ? "text-white font-bold"
                    : "text-white/70 hover:text-white font-medium"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C59B6D]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={reservaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-sm bg-hyatt-burgundy text-white font-semibold text-xs uppercase tracking-[0.14em] hover:bg-hyatt-wine border border-white/15 transition-all shadow-sm"
          >
            <CalendarCheck className="w-4 h-4 shrink-0" />
            <span>Reservar Prueba</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 rounded-sm border border-white/20 text-white hover:bg-white/10 transition-colors shrink-0"
          aria-label="Abrir menú de navegación"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#141414] border-b border-white/15 px-4 pt-3 pb-6 space-y-2 shadow-2xl max-h-[calc(100vh-6rem)] overflow-y-auto">
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
                    ? "bg-white/10 text-white border-l-2 border-[#C59B6D] font-bold"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 mt-2 border-t border-white/15 flex flex-col gap-2.5">
            <a
              href={reservaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3.5 rounded-sm bg-hyatt-burgundy text-white font-bold text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2 shadow-md"
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Reservar Prueba por WhatsApp</span>
            </a>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 rounded-sm border border-white/20 bg-white/5 text-white text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2 font-medium"
            >
              <Instagram className="w-4 h-4 text-[#C59B6D] shrink-0" />
              <span>Instagram {BUSINESS_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
