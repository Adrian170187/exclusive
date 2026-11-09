"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Scissors,
  ShieldCheck,
  Award,
  Clock,
  Star,
  MapPin,
  Instagram,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";
import {
  BUSINESS_INFO,
  CATALOG_ITEMS,
  RENTAL_STEPS,
  TESTIMONIALS,
  SuitItem,
  buildWhatsAppLink,
} from "@/data/catalog";
import SuitCard from "@/components/SuitCard";
import SuitModal from "@/components/SuitModal";
import BrandLogo from "@/components/BrandLogo";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function HomePage() {
  const [selectedSuit, setSelectedSuit] = useState<SuitItem | null>(null);

  const featuredSuits = CATALOG_ITEMS.filter((item) => item.featured).slice(
    0,
    6
  );

  const heroWhatsApp = buildWhatsAppLink(
    "¡Hola Exclusive! Quiero reservar un turno para probarme trajes en el local de Av. San Martín 1425, Mendoza."
  );

  return (
    <div className="bg-hyatt-ivory text-hyatt-charcoal">
      {/* HERO SECTION - Park Hyatt Mendoza Editorial Warm Ivory & White */}
      <section className="relative flex items-center overflow-hidden border-b border-hyatt-border bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* Official Original Black-on-White Logo */}
              <BrandLogo variant="hero" className="mb-1" />

              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-sm bg-hyatt-cream border border-hyatt-border text-hyatt-burgundy text-[10px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.2em] font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-hyatt-taupe shrink-0" />
                <span>Alta Sastrería & Alquiler Masculino en Mendoza</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-hyatt-charcoal font-semibold leading-[1.12] sm:leading-[1.08] tracking-tight">
                La Distinción de un{" "}
                <span className="italic text-hyatt-burgundy underline decoration-hyatt-taupe/50 underline-offset-8">
                  Calce Perfecto
                </span>{" "}
                en tu Gran Noche.
              </h1>

              <p className="text-sm sm:text-lg text-hyatt-muted max-w-2xl leading-relaxed">
                Especialistas en alquiler de{" "}
                <strong className="text-hyatt-charcoal font-semibold">
                  trajes Slim Fit, ambos tres piezas, esmóquines (smoking), frac
                  y jaqué de ceremonia para hombres
                </strong>
                . Vestimos a novios, egresados, padrinos e invitados con ajustes
                sartoriales a medida y accesorios completos incluidos.
              </p>

              {/* Key Pills */}
              <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2 sm:gap-3 pt-1 text-xs text-hyatt-charcoal">
                <span className="flex items-center gap-2 bg-hyatt-ivory border border-hyatt-border px-3 py-2 sm:py-1.5 rounded-sm font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-hyatt-burgundy shrink-0" />
                  <span>Novios, Padrinos, Egresados & Invitados</span>
                </span>
                <span className="flex items-center gap-2 bg-hyatt-ivory border border-hyatt-border px-3 py-2 sm:py-1.5 rounded-sm font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-hyatt-burgundy shrink-0" />
                  <span>Smoking, Frac & Jaqué de Etiqueta</span>
                </span>
                <span className="flex items-center gap-2 bg-hyatt-ivory border border-hyatt-border px-3 py-2 sm:py-1.5 rounded-sm font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-hyatt-burgundy shrink-0" />
                  <span>Camisas, Chalecos, Moños & Zapatos</span>
                </span>
              </div>

              {/* CTA Buttons - Park Hyatt Burgundy & Warm Ivory */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 rounded-sm bg-hyatt-burgundy hover:bg-hyatt-wine text-white font-bold text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-lg transition-all text-center"
                >
                  <span>Explorar Catálogo</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>

                <a
                  href={heroWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 rounded-sm bg-hyatt-cream hover:bg-hyatt-sand text-hyatt-charcoal border border-hyatt-taupe font-semibold text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] transition-all text-center"
                >
                  <CalendarCheck className="w-4 h-4 text-hyatt-burgundy shrink-0" />
                  <span>Agendar Prueba en el Local</span>
                </a>
              </div>

              {/* Location Mini-bar */}
              <div className="pt-4 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2.5 sm:gap-6 text-xs text-hyatt-muted border-t border-hyatt-border">
                <div className="flex items-start sm:items-center gap-2">
                  <MapPin className="w-4 h-4 text-hyatt-burgundy shrink-0 mt-0.5 sm:mt-0" />
                  <span>
                    <strong className="text-hyatt-charcoal">Showroom:</strong>{" "}
                    Av. San Martín 1425 (Galería Bamac), Mendoza
                  </span>
                </div>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-hyatt-burgundy font-semibold hover:underline"
                >
                  <Instagram className="w-4 h-4 shrink-0" />
                  <span>{BUSINESS_INFO.instagramHandle}</span>
                </a>
              </div>
            </div>

            {/* Hero Editorial Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="hidden sm:block absolute -inset-3 border border-hyatt-taupe/50 rounded-sm translate-x-3 translate-y-3 pointer-events-none" />
                <div className="relative aspect-[16/11] sm:aspect-[4/5] rounded-sm overflow-hidden border border-hyatt-border shadow-2xl bg-hyatt-cream">
                  <img
                    src={`${BASE_PATH}/catalogo/smoking-imperial-noir.jpg`}
                    alt="Smoking de etiqueta masculino Exclusive Mendoza"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-5 bg-hyatt-ivory/95 backdrop-blur-md border border-hyatt-border rounded-sm shadow-lg">
                    <p className="text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.24em] text-hyatt-burgundy font-bold">
                      Temporada Bodas & Egresados
                    </p>
                    <p className="font-serif text-lg sm:text-xl text-hyatt-charcoal font-semibold mt-0.5 sm:mt-1">
                      Packs Todo Incluido listos para vestir
                    </p>
                    <p className="text-[11px] sm:text-xs text-hyatt-muted mt-1">
                      Saco + Pantalón + Camisa + Chaleco/Faja + Moño o Corbata +
                      Ajustes a tu medida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Strip - Park Hyatt Cream Cards */}
          <div className="mt-10 sm:mt-16 pt-8 sm:pt-10 border-t border-hyatt-border grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {BUSINESS_INFO.stats.map((st) => (
              <div
                key={st.label}
                className="bg-hyatt-cream border border-hyatt-border p-3.5 sm:p-5 rounded-sm text-center flex flex-col justify-center"
              >
                <p className="font-serif text-2xl sm:text-4xl text-hyatt-burgundy font-bold">
                  {st.value}
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] text-hyatt-muted mt-1 leading-snug font-medium">
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAS 3 LINEAS PRINCIPALES */}
      <section className="py-14 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-hyatt-ivory">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-hyatt-taupe font-semibold">
            Nuestras Líneas de Alquiler Masculino
          </span>
          <h2 className="font-serif text-2xl sm:text-5xl text-hyatt-charcoal font-semibold mt-2">
            Indumentaria de Etiqueta para Cada Ocasión
          </h2>
          <p className="text-xs sm:text-base text-hyatt-muted mt-2.5 sm:mt-3">
            Seleccioná la línea que buscás para tu próximo casamiento en bodega,
            cena de egresados, fiesta de 15 o evento de gala en Mendoza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Trajes y Ambos */}
          <div className="group relative rounded-sm overflow-hidden bg-white border border-hyatt-border hover:border-hyatt-taupe shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="relative h-60 sm:h-72 overflow-hidden bg-hyatt-cream">
              <img
                src={`${BASE_PATH}/catalogo/ambo-milano-azul-noche.jpg`}
                alt="Alquiler de Trajes y Ambos para Hombres en Mendoza"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 right-3 sm:right-auto px-2.5 py-1 bg-hyatt-burgundy text-white text-[10px] font-bold uppercase tracking-wider rounded-sm w-fit shadow">
                Novios · Egresados · Padrinos · Invitados
              </span>
            </div>
            <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-hyatt-charcoal font-semibold">
                  Trajes & Ambos Sartoriales
                </h3>
                <p className="text-xs sm:text-sm text-hyatt-muted mt-2 leading-relaxed">
                  Cortes <strong>Slim Fit y Tailored Fit</strong> en azul noche,
                  negro obsidiana, gris marengo, bordeaux y beige champagne para
                  bodas de día o de noche. Opciones de 2 y 3 piezas con chaleco.
                </p>
              </div>
              <div className="mt-5 sm:mt-6 pt-4 border-t border-hyatt-border">
                <Link
                  href="/catalogo?categoria=ambos"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-hyatt-burgundy font-bold group-hover:underline"
                >
                  <span>Ver Trajes y Ambos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Smoking, Frac y Jaqué */}
          <div className="group relative rounded-sm overflow-hidden bg-white border border-hyatt-border hover:border-hyatt-taupe shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="relative h-60 sm:h-72 overflow-hidden bg-hyatt-cream">
              <img
                src={`${BASE_PATH}/catalogo/smoking-azul-medianoche.jpg`}
                alt="Alquiler de Smoking, Frac y Jaqué para Hombres en Mendoza"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-hyatt-burgundy text-white text-[10px] font-bold uppercase tracking-wider rounded-sm shadow">
                Black Tie & Alta Ceremonia
              </span>
            </div>
            <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-hyatt-charcoal font-semibold">
                  Smoking, Frac & Jaqué
                </h3>
                <p className="text-xs sm:text-sm text-hyatt-muted mt-2 leading-relaxed">
                  La máxima expresión de la etiqueta: <strong>Smoking</strong>{" "}
                  con solapa chal o en punta de raso italiano,{" "}
                  <strong>Jaqué inglés</strong> con levita para bodas de
                  ceremonia y <strong>Frac White Tie</strong> de gala.
                </p>
              </div>
              <div className="mt-5 sm:mt-6 pt-4 border-t border-hyatt-border">
                <Link
                  href="/catalogo?categoria=esmoquin"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-hyatt-burgundy font-bold group-hover:underline"
                >
                  <span>Ver Smoking & Etiqueta</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Accesorios y Calzado */}
          <div className="group relative rounded-sm overflow-hidden bg-white border border-hyatt-border hover:border-hyatt-taupe shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="relative h-60 sm:h-72 overflow-hidden bg-hyatt-cream">
              <img
                src={`${BASE_PATH}/catalogo/calzado-oxford-charol-cuero.jpg`}
                alt="Accesorios de etiqueta y calzado formal masculino en Mendoza"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-hyatt-burgundy text-white text-[10px] font-bold uppercase tracking-wider rounded-sm shadow">
                Incluidos en Packs o Adicionales
              </span>
            </div>
            <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-hyatt-charcoal font-semibold">
                  Accesorios & Calzado
                </h3>
                <p className="text-xs sm:text-sm text-hyatt-muted mt-2 leading-relaxed">
                  Resolvé tu look completo en un solo lugar:{" "}
                  <strong>
                    camisas de gala, chalecos sastreros, corbatas, moños en +60
                    tonos, gemelos, fajas, tiradores y zapatos Oxford
                  </strong>{" "}
                  de cuero o charol (talles 38 al 46).
                </p>
              </div>
              <div className="mt-5 sm:mt-6 pt-4 border-t border-hyatt-border">
                <Link
                  href="/catalogo?categoria=accesorios"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-hyatt-burgundy font-bold group-hover:underline"
                >
                  <span>Ver Accesorios y Calzado</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTACADOS DEL CATALOGO - Park Hyatt Warm Cream Surface */}
      <section className="py-14 sm:py-20 bg-hyatt-cream border-y border-hyatt-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-hyatt-taupe font-semibold">
                Colección Seleccionada
              </span>
              <h2 className="font-serif text-2xl sm:text-5xl text-hyatt-charcoal font-semibold mt-1.5 sm:mt-2">
                Modelos Más Solicitados
              </h2>
            </div>
            <Link
              href="/catalogo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-3 rounded-sm border border-hyatt-burgundy text-hyatt-burgundy hover:bg-hyatt-burgundy hover:text-white text-xs uppercase tracking-[0.14em] font-semibold transition-all bg-white"
            >
              <span>Ver los 12 Modelos y Accesorios</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {featuredSuits.map((item) => (
              <SuitCard
                key={item.id}
                item={item}
                onSelect={(suit) => setSelectedSuit(suit)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIALES / POR QUE ELEGIR EXCLUSIVE */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-hyatt-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-hyatt-taupe font-semibold">
              La Experiencia Exclusive
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-hyatt-charcoal font-semibold leading-tight">
              No solo alquilás un traje: vestís una prenda ajustada a tu cuerpo.
            </h2>
            <p className="text-xs sm:text-sm text-hyatt-muted leading-relaxed">
              En nuestro local del microcentro mendocino combinamos la rapidez y
              practicidad del alquiler con el oficio de la sastrería clásica.
              Cada saco y pantalón pasa por nuestro taller antes de tu evento.
            </p>
            <div className="pt-1">
              <Link
                href="/como-funciona"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-hyatt-burgundy font-bold hover:underline"
              >
                <span>Conocé el paso a paso del alquiler</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="p-5 sm:p-6 bg-white border border-hyatt-border rounded-sm shadow-sm">
              <Scissors className="w-6 h-6 sm:w-7 sm:h-7 text-hyatt-burgundy mb-3" />
              <h3 className="font-serif text-xl text-hyatt-charcoal font-semibold">
                Ajuste Sartorial Incluido
              </h3>
              <p className="text-xs text-hyatt-muted mt-2 leading-relaxed">
                Adaptamos largo de mangas, botamanga y cintura para que el traje
                luzca exactamente como hecho a medida para vos.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-white border border-hyatt-border rounded-sm shadow-sm">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-hyatt-burgundy mb-3" />
              <h3 className="font-serif text-xl text-hyatt-charcoal font-semibold">
                Tintorería 100% Bonificada
              </h3>
              <p className="text-xs text-hyatt-muted mt-2 leading-relaxed">
                Disfrutá de la fiesta sin preocupaciones. Al devolver el traje
                no necesitás lavarlo ni plancharlo; nosotros nos ocupamos.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-white border border-hyatt-border rounded-sm shadow-sm">
              <Award className="w-6 h-6 sm:w-7 sm:h-7 text-hyatt-burgundy mb-3" />
              <h3 className="font-serif text-xl text-hyatt-charcoal font-semibold">
                Curva Completa de Talles
              </h3>
              <p className="text-xs text-hyatt-muted mt-2 leading-relaxed">
                Desde el talle 40 hasta talles especiales (62+), en molderías
                Slim Fit modernas y cortes clásicos confortables.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-white border border-hyatt-border rounded-sm shadow-sm">
              <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-hyatt-burgundy mb-3" />
              <h3 className="font-serif text-xl text-hyatt-charcoal font-semibold">
                Urgencias & Último Momento
              </h3>
              <p className="text-xs text-hyatt-muted mt-2 leading-relaxed">
                ¿Tenés un casamiento o gala este fin de semana? Contamos con
                stock permanente en salón para entregas rápidas en el día.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA PREVIEW */}
      <section className="py-14 sm:py-20 bg-hyatt-cream border-t border-hyatt-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-hyatt-taupe font-semibold">
              Proceso Simple y Transparente
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-hyatt-charcoal font-semibold mt-2">
              Tu Traje Listo en 4 Pasos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {RENTAL_STEPS.map((st) => (
              <div
                key={st.step}
                className="relative p-5 sm:p-6 bg-white border border-hyatt-border rounded-sm flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-hyatt-burgundy">
                      {st.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-hyatt-cream text-hyatt-charcoal border border-hyatt-border rounded-sm font-semibold">
                      {st.highlight}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-hyatt-charcoal font-semibold">
                    {st.title}
                  </h3>
                  <p className="text-xs text-hyatt-taupe font-medium mt-1">
                    {st.subtitle}
                  </p>
                  <p className="text-xs text-hyatt-muted mt-3 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS DE CLIENTES EN MENDOZA */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-hyatt-ivory">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-hyatt-taupe font-semibold">
            Clientes Reales en Mendoza
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-hyatt-charcoal font-semibold mt-2">
            La Confianza de Novios, Padrinos y Egresados
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-5 sm:p-6 bg-white border border-hyatt-border rounded-sm flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center gap-1 text-hyatt-taupe mb-3 sm:mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-hyatt-taupe text-hyatt-taupe"
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-hyatt-muted italic leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
              <div className="mt-5 sm:mt-6 pt-4 border-t border-hyatt-border">
                <p className="text-sm font-semibold text-hyatt-charcoal">
                  {t.name}
                </p>
                <p className="text-xs text-hyatt-burgundy font-medium">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL + INSTAGRAM BANNER */}
      <section className="py-12 sm:py-16 bg-hyatt-sand/60 border-t border-hyatt-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] sm:tracking-[0.24em] text-hyatt-burgundy font-semibold">
            <Instagram className="w-4 h-4 shrink-0" />
            <span>Seguinos en {BUSINESS_INFO.instagramHandle}</span>
          </span>
          <h2 className="font-serif text-2xl sm:text-5xl text-hyatt-charcoal font-semibold">
            ¿Listo para Probarte tu Próximo Traje?
          </h2>
          <p className="text-xs sm:text-base text-hyatt-muted max-w-2xl mx-auto">
            Acercate a nuestro showroom en{" "}
            <strong className="text-hyatt-charcoal">
              Av. San Martín 1425 (Galería Bamac), Ciudad de Mendoza
            </strong>{" "}
            o escribinos ahora por WhatsApp para recibir asesoramiento inmediato.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href={heroWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-sm bg-hyatt-burgundy hover:bg-hyatt-wine text-white font-bold text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] transition-all text-center shadow-md"
            >
              WhatsApp ({BUSINESS_INFO.phoneDisplay})
            </a>
            <Link
              href="/contacto"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-sm bg-white border border-hyatt-charcoal hover:bg-hyatt-cream text-hyatt-charcoal text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] font-semibold transition-all text-center"
            >
              Ver Mapa y Horarios
            </Link>
          </div>
        </div>
      </section>

      {/* Modal de Detalle */}
      <SuitModal item={selectedSuit} onClose={() => setSelectedSuit(null)} />
    </div>
  );
}
