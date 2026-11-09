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
    <div className="bg-white text-hyatt-charcoal">
      {/* 1. IMAGEN DE GALA EN EL PRINCIPIO (Estilo Park Hyatt Mendoza Weddings) */}
      <section className="relative w-full h-[46vh] sm:h-[62vh] lg:h-[74vh] bg-[#0F0F0F] overflow-hidden">
        <img
          src={`${BASE_PATH}/catalogo/gala-hyatt-mendoza.jpg`}
          alt="Gala de etiqueta masculina en Mendoza - Exclusive Alquiler de Trajes"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradiente sutil superior e inferior para fundirse con el Navbar negro y el Container negro siguiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-[#0F0F0F]" />

        {/* Etiqueta editorial estilo Park Hyatt sobre la imagen de gala */}
        <div className="absolute bottom-5 sm:bottom-8 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-black/70 backdrop-blur-md border border-[#C59B6D]/40 text-[#C59B6D] text-[10px] sm:text-xs uppercase tracking-[0.22em] font-semibold">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>Bodas, Galas & Eventos de Etiqueta en Mendoza</span>
              </span>
              <p className="font-serif text-xl sm:text-3xl text-white font-medium mt-2 drop-shadow-md">
                Sastrería Masculina de Gala & Ceremonia
              </p>
            </div>
            <p className="hidden md:block text-xs uppercase tracking-[0.2em] text-white/80 font-medium">
              Av. San Martín 1425 · Ciudad de Mendoza
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTAINER SIGUIENTE EN COLOR NEGRO CON LOGO BLANCO EN CONTRASTE */}
      <section className="relative bg-[#0F0F0F] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Presentación Principal sobre Fondo Negro */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* Logo en blanco para contraste sobre el contenedor negro */}
              <BrandLogo variant="hero" theme="dark" className="mb-1" />

              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-sm bg-white/5 border border-[#C59B6D]/40 text-[#C59B6D] text-[10px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.2em] font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B6D] shrink-0" />
                <span>Alta Sastrería & Alquiler Masculino en Mendoza</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-semibold leading-[1.12] sm:leading-[1.08] tracking-tight">
                La Distinción de un{" "}
                <span className="italic text-[#C59B6D] underline decoration-[#C59B6D]/40 underline-offset-8">
                  Calce Perfecto
                </span>{" "}
                en tu Gran Noche.
              </h1>

              <p className="text-sm sm:text-lg text-white/75 max-w-2xl leading-relaxed">
                Especialistas en alquiler de{" "}
                <strong className="text-white font-semibold">
                  trajes Slim Fit, ambos tres piezas, esmóquines (smoking), frac
                  y jaqué de ceremonia para hombres
                </strong>
                . Vestimos a novios, egresados, padrinos e invitados con ajustes
                sartoriales a medida y accesorios completos incluidos.
              </p>

              {/* Key Pills */}
              <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2 sm:gap-3 pt-1 text-xs text-white/90">
                <span className="flex items-center gap-2 bg-white/5 border border-white/15 px-3 py-2 sm:py-1.5 rounded-sm font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B6D] shrink-0" />
                  <span>Novios, Padrinos, Egresados & Invitados</span>
                </span>
                <span className="flex items-center gap-2 bg-white/5 border border-white/15 px-3 py-2 sm:py-1.5 rounded-sm font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B6D] shrink-0" />
                  <span>Smoking, Frac & Jaqué de Etiqueta</span>
                </span>
                <span className="flex items-center gap-2 bg-white/5 border border-white/15 px-3 py-2 sm:py-1.5 rounded-sm font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B6D] shrink-0" />
                  <span>Camisas, Chalecos, Moños & Zapatos</span>
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 rounded-sm bg-hyatt-burgundy hover:bg-hyatt-wine text-white font-bold text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-lg transition-all text-center border border-white/10"
                >
                  <span>Explorar Catálogo</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>

                <a
                  href={heroWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 rounded-sm bg-white/5 hover:bg-white hover:text-black text-white border border-[#C59B6D]/60 font-semibold text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] transition-all text-center"
                >
                  <CalendarCheck className="w-4 h-4 text-[#C59B6D] shrink-0" />
                  <span>Agendar Prueba en el Local</span>
                </a>
              </div>

              {/* Location Mini-bar */}
              <div className="pt-4 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2.5 sm:gap-6 text-xs text-white/70 border-t border-white/15">
                <div className="flex items-start sm:items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C59B6D] shrink-0 mt-0.5 sm:mt-0" />
                  <span>
                    <strong className="text-white">Showroom:</strong> Av. San
                    Martín 1425 (Galería Bamac), Mendoza
                  </span>
                </div>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#C59B6D] font-semibold hover:underline"
                >
                  <Instagram className="w-4 h-4 shrink-0" />
                  <span>{BUSINESS_INFO.instagramHandle}</span>
                </a>
              </div>
            </div>

            {/* Hero Editorial Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="hidden sm:block absolute -inset-3 border border-[#C59B6D]/40 rounded-sm translate-x-3 translate-y-3 pointer-events-none" />
                <div className="relative aspect-[16/11] sm:aspect-[4/5] rounded-sm overflow-hidden border border-white/15 shadow-2xl bg-[#1A1A1A]">
                  <img
                    src={`${BASE_PATH}/catalogo/smoking-imperial-noir.jpg`}
                    alt="Smoking de etiqueta masculino Exclusive Mendoza"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-5 bg-[#141414]/95 backdrop-blur-md border border-white/15 rounded-sm shadow-lg">
                    <p className="text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.24em] text-[#C59B6D] font-bold">
                      Temporada Bodas & Egresados
                    </p>
                    <p className="font-serif text-lg sm:text-xl text-white font-semibold mt-0.5 sm:mt-1">
                      Packs Todo Incluido listos para vestir
                    </p>
                    <p className="text-[11px] sm:text-xs text-white/70 mt-1">
                      Saco + Pantalón + Camisa + Chaleco/Faja + Moño o Corbata +
                      Ajustes a tu medida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Strip inside the Black Container */}
          <div className="mt-10 sm:mt-16 pt-8 sm:pt-10 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {BUSINESS_INFO.stats.map((st) => (
              <div
                key={st.label}
                className="bg-white/[0.04] border border-white/10 p-3.5 sm:p-5 rounded-sm text-center flex flex-col justify-center"
              >
                <p className="font-serif text-2xl sm:text-4xl text-[#C59B6D] font-bold">
                  {st.value}
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] text-white/75 mt-1 leading-snug font-medium">
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RESTO DEL FONDO EN COLOR BLANCO PURO (#FFFFFF) */}
      {/* LAS 3 LINEAS PRINCIPALES */}
      <section className="py-14 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
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
          <div className="group relative rounded-sm overflow-hidden bg-white border border-neutral-200 hover:border-hyatt-taupe shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="relative h-60 sm:h-72 overflow-hidden bg-neutral-100">
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
              <div className="mt-5 sm:mt-6 pt-4 border-t border-neutral-200">
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
          <div className="group relative rounded-sm overflow-hidden bg-white border border-neutral-200 hover:border-hyatt-taupe shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="relative h-60 sm:h-72 overflow-hidden bg-neutral-100">
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
              <div className="mt-5 sm:mt-6 pt-4 border-t border-neutral-200">
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
          <div className="group relative rounded-sm overflow-hidden bg-white border border-neutral-200 hover:border-hyatt-taupe shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="relative h-60 sm:h-72 overflow-hidden bg-neutral-100">
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
              <div className="mt-5 sm:mt-6 pt-4 border-t border-neutral-200">
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

      {/* DESTACADOS DEL CATALOGO - Fondo Blanco */}
      <section className="py-14 sm:py-20 bg-white border-t border-neutral-200">
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

      {/* DIFERENCIALES / POR QUE ELEGIR EXCLUSIVE - Fondo Blanco */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border-t border-neutral-200">
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
            <div className="p-5 sm:p-6 bg-white border border-neutral-200 rounded-sm shadow-sm">
              <Scissors className="w-6 h-6 sm:w-7 sm:h-7 text-hyatt-burgundy mb-3" />
              <h3 className="font-serif text-xl text-hyatt-charcoal font-semibold">
                Ajuste Sartorial Incluido
              </h3>
              <p className="text-xs text-hyatt-muted mt-2 leading-relaxed">
                Adaptamos largo de mangas, botamanga y cintura para que el traje
                luzca exactamente como hecho a medida para vos.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-white border border-neutral-200 rounded-sm shadow-sm">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-hyatt-burgundy mb-3" />
              <h3 className="font-serif text-xl text-hyatt-charcoal font-semibold">
                Tintorería 100% Bonificada
              </h3>
              <p className="text-xs text-hyatt-muted mt-2 leading-relaxed">
                Disfrutá de la fiesta sin preocupaciones. Al devolver el traje
                no necesitás lavarlo ni plancharlo; nosotros nos ocupamos.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-white border border-neutral-200 rounded-sm shadow-sm">
              <Award className="w-6 h-6 sm:w-7 sm:h-7 text-hyatt-burgundy mb-3" />
              <h3 className="font-serif text-xl text-hyatt-charcoal font-semibold">
                Curva Completa de Talles
              </h3>
              <p className="text-xs text-hyatt-muted mt-2 leading-relaxed">
                Desde el talle 40 hasta talles especiales (62+), en molderías
                Slim Fit modernas y cortes clásicos confortables.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-white border border-neutral-200 rounded-sm shadow-sm">
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

      {/* COMO FUNCIONA PREVIEW - Fondo Blanco */}
      <section className="py-14 sm:py-20 bg-white border-t border-neutral-200">
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
                className="relative p-5 sm:p-6 bg-white border border-neutral-200 rounded-sm flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-hyatt-burgundy">
                      {st.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-neutral-100 text-hyatt-charcoal border border-neutral-200 rounded-sm font-semibold">
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

      {/* TESTIMONIOS DE CLIENTES EN MENDOZA - Fondo Blanco */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border-t border-neutral-200">
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
              className="p-5 sm:p-6 bg-white border border-neutral-200 rounded-sm flex flex-col justify-between shadow-sm"
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
              <div className="mt-5 sm:mt-6 pt-4 border-t border-neutral-200">
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

      {/* CTA FINAL + INSTAGRAM BANNER - Fondo Blanco */}
      <section className="py-12 sm:py-16 bg-white border-t border-neutral-200">
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
              className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-sm bg-white border border-hyatt-charcoal hover:bg-neutral-100 text-hyatt-charcoal text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] font-semibold transition-all text-center"
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
