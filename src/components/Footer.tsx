import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Instagram,
  Clock,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { BUSINESS_INFO, buildWhatsAppLink } from "@/data/catalog";

export default function Footer() {
  const whatsappUrl = buildWhatsAppLink(
    "¡Hola Exclusive! Vi su página web y me gustaría recibir asesoramiento para alquilar un traje."
  );

  return (
    <footer className="bg-obsidian-900 border-t border-gold-400/20 text-zinc-400 pb-20 sm:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm border border-gold-400/60 bg-gold-400/10 flex items-center justify-center shrink-0">
                <span className="font-serif text-xl font-bold text-gold-400">
                  E
                </span>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl tracking-[0.18em] text-white font-semibold">
                  EXCLUSIVE
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-400">
                  Alquiler de Trajes · Mendoza
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Especialistas en alquiler de trajes, ambos Slim Fit, esmóquines,
              frac, jaqué y accesorios de etiqueta para casamientos, egresados y
              galas en la Ciudad de Mendoza.
            </p>
            <div className="flex items-center gap-2 text-xs text-gold-300 pt-1">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Ajustes sartoriales y tintorería incluidos</span>
            </div>
          </div>

          {/* Col 2: Navegación */}
          <div>
            <h3 className="font-serif text-lg text-white tracking-wider uppercase mb-3 sm:mb-4">
              Explorar
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-gold-400 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo"
                  className="hover:text-gold-400 transition-colors"
                >
                  Catálogo Completo
                </Link>
              </li>
              <li>
                <Link
                  href="/como-funciona"
                  className="hover:text-gold-400 transition-colors"
                >
                  Cómo Funciona el Alquiler
                </Link>
              </li>
              <li>
                <Link
                  href="/galeria"
                  className="hover:text-gold-400 transition-colors"
                >
                  Lookbook & Clientes Reales
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-gold-400 transition-colors"
                >
                  Ubicación & Reserva de Turnos
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Líneas Destacadas */}
          <div>
            <h3 className="font-serif text-lg text-white tracking-wider uppercase mb-3 sm:mb-4">
              Colecciones
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/catalogo?categoria=ambos"
                  className="hover:text-gold-400 transition-colors"
                >
                  Ambos Slim Fit (Novios & Egresados)
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo?categoria=esmoquin"
                  className="hover:text-gold-400 transition-colors"
                >
                  Smoking Black Tie & Solapa Razo
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo?categoria=etiqueta"
                  className="hover:text-gold-400 transition-colors"
                >
                  Jaqué de Ceremonia & Frac
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo?categoria=accesorios"
                  className="hover:text-gold-400 transition-colors"
                >
                  Camisas, Chalecos, Moños & Zapatos
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Showroom Mendoza */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg text-white tracking-wider uppercase mb-3 sm:mb-4">
              Showroom Mendoza
            </h3>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
              <div>
                <p className="text-zinc-200 font-medium">
                  {BUSINESS_INFO.address}
                </p>
                <p className="text-xs text-zinc-500">{BUSINESS_INFO.city}</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm">
              <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-gold-400 transition-colors"
              >
                {BUSINESS_INFO.phoneDisplay} (WhatsApp)
              </a>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm">
              <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
              <div className="text-xs space-y-1">
                {BUSINESS_INFO.hours.map((h) => (
                  <p key={h.days}>
                    <span className="text-zinc-200 font-medium">{h.days}:</span>{" "}
                    {h.time}
                  </p>
                ))}
              </div>
            </div>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-sm bg-white/5 hover:bg-gold-400/20 border border-white/10 hover:border-gold-400/40 text-xs text-white transition-all"
              >
                <Instagram className="w-3.5 h-3.5 text-gold-400" />
                <span>{BUSINESS_INFO.instagramHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.fullName}. Todos los
            derechos reservados.
          </p>
          <p>
            Av. San Martín 1425, Ciudad de Mendoza · Atención en salón y vía
            WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  );
}
