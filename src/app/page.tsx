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
    <div className="bg-obsidian-900">
      {/* HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden border-b border-gold-400/20">
        {/* Background Image & Luxury Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=85"
            alt="Exclusive Alquiler de Trajes en Mendoza"
            className="w-full h-full object-cover object-center scale-105 opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900 via-obsidian-900/90 to-obsidian-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-obsidian-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-gold-400/10 border border-gold-400/40 text-gold-300 text-xs uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Alta Sastrería & Alquiler en Ciudad de Mendoza</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-semibold leading-[1.08] tracking-tight">
                La Distinción de un{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200 italic">
                  Calce Perfecto
                </span>{" "}
                en tu Gran Noche.
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-light">
                Especialistas en alquiler de{" "}
                <strong className="text-white font-medium">
                  trajes Slim Fit, ambos tres piezas, esmóquines (smoking), frac
                  y jaqué de ceremonia
                </strong>
                . Vestimos a novios, egresados, padrinos e invitados con ajustes
                sartoriales a medida y accesorios completos incluidos.
              </p>

              {/* Key Pills */}
              <div className="flex flex-wrap gap-3 pt-1 text-xs text-zinc-300">
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  Novios, Padrinos, Egresados & Invitados
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  Smoking, Frac & Jaqué de Etiqueta
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  Camisas, Chalecos, Moños & Zapatos
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-obsidian-900 font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-gold-400/20 transition-all"
                >
                  <span>Explorar Catálogo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={heroWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-sm bg-obsidian-800/90 hover:bg-white/10 text-white border border-gold-400/40 font-semibold text-xs uppercase tracking-[0.18em] transition-all"
                >
                  <CalendarCheck className="w-4 h-4 text-gold-400" />
                  <span>Agendar Prueba en el Local</span>
                </a>
              </div>

              {/* Location Mini-bar */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-zinc-400 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>
                    <strong className="text-zinc-200">Showroom:</strong> Av. San
                    Martín 1425 (Galería Bamac), Ciudad de Mendoza
                  </span>
                </div>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gold-300 hover:underline"
                >
                  <Instagram className="w-4 h-4" />
                  <span>{BUSINESS_INFO.instagramHandle}</span>
                </a>
              </div>
            </div>

            {/* Hero Editorial Showcase Card */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-3 border border-gold-400/30 rounded-sm translate-x-3 translate-y-3 pointer-events-none" />
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-gold-400/40 shadow-2xl bg-obsidian-800">
                  <img
                    src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85"
                    alt="Smoking de etiqueta Exclusive Mendoza"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-5 bg-obsidian-900/90 backdrop-blur-md border border-gold-400/30 rounded-sm">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
                      Temporada Bodas & Egresados
                    </p>
                    <p className="font-serif text-xl text-white mt-1">
                      Packs Todo Incluido listos para vestir
                    </p>
                    <p className="text-xs text-zinc-400 mt-1">
                      Saco + Pantalón + Camisa + Chaleco/Faja + Moño o Corbata +
                      Ajustes a tu medida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Strip */}
          <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_INFO.stats.map((st) => (
              <div
                key={st.label}
                className="bg-obsidian-800/60 border border-white/10 p-5 rounded-sm text-center"
              >
                <p className="font-serif text-3xl sm:text-4xl text-gold-400 font-bold">
                  {st.value}
                </p>
                <p className="text-xs uppercase tracking-[0.15em] text-zinc-300 mt-1">
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAS 3 LINEAS PRINCIPALES PEDIDAS POR EL USUARIO */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Nuestras Líneas de Alquiler
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-semibold mt-2">
            Indumentaria de Etiqueta para Cada Ocasión
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3">
            Seleccioná la línea que buscás para tu próximo casamiento en bodega,
            cena de egresados, fiesta de 15 o evento de gala en Mendoza.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Trajes y Ambos */}
          <div className="group relative rounded-sm overflow-hidden bg-obsidian-800 border border-white/10 hover:border-gold-400/60 transition-all flex flex-col justify-between">
            <div className="relative h-72 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=900&q=85"
                alt="Alquiler de Trajes y Ambos en Mendoza"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-800 via-obsidian-900/30 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-gold-400 text-obsidian-900 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                Novios · Egresados · Padrinos · Invitados
              </span>
            </div>
            <div className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl text-white font-semibold">
                  Trajes & Ambos Sartoriales
                </h3>
                <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                  Cortes <strong>Slim Fit y Tailored Fit</strong> en azul noche,
                  negro obsidiana, gris marengo, bordeaux y beige champagne para
                  bodas de día o de noche. Opciones de 2 y 3 piezas con chaleco.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  href="/catalogo?categoria=ambos"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold-400 group-hover:text-gold-300 font-semibold"
                >
                  <span>Ver Trajes y Ambos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Smoking, Frac y Jaqué */}
          <div className="group relative rounded-sm overflow-hidden bg-obsidian-800 border border-white/10 hover:border-gold-400/60 transition-all flex flex-col justify-between">
            <div className="relative h-72 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85"
                alt="Alquiler de Smoking, Frac y Jaqué en Mendoza"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-800 via-obsidian-900/30 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-gold-400 text-obsidian-900 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                Black Tie & Alta Ceremonia
              </span>
            </div>
            <div className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl text-white font-semibold">
                  Smoking, Frac & Jaqué
                </h3>
                <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                  La máxima expresión de la etiqueta: <strong>Smoking</strong>{" "}
                  con solapa chal o en punta de raso italiano,{" "}
                  <strong>Jaqué inglés</strong> con levita para bodas de
                  ceremonia y <strong>Frac White Tie</strong> de gala.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  href="/catalogo?categoria=esmoquin"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold-400 group-hover:text-gold-300 font-semibold"
                >
                  <span>Ver Smoking & Etiqueta</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Accesorios y Calzado */}
          <div className="group relative rounded-sm overflow-hidden bg-obsidian-800 border border-white/10 hover:border-gold-400/60 transition-all flex flex-col justify-between">
            <div className="relative h-72 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=85"
                alt="Accesorios de etiqueta y calzado formal en Mendoza"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-800 via-obsidian-900/30 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 bg-gold-400 text-obsidian-900 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                Incluidos en Packs o Adicionales
              </span>
            </div>
            <div className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl text-white font-semibold">
                  Accesorios & Calzado
                </h3>
                <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                  Resolvé tu look completo en un solo lugar:{" "}
                  <strong>
                    camisas de gala, chalecos sastreros, corbatas, moños en +60
                    tonos, gemelos, fajas, tiradores y zapatos Oxford
                  </strong>{" "}
                  de cuero o charol (talles 38 al 46).
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  href="/catalogo?categoria=accesorios"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold-400 group-hover:text-gold-300 font-semibold"
                >
                  <span>Ver Accesorios y Calzado</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTACADOS DEL CATALOGO */}
      <section className="py-20 bg-obsidian-800/50 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
                Colección Seleccionada
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-semibold mt-2">
                Modelos Más Solicitados
              </h2>
            </div>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-gold-400/50 text-gold-400 hover:bg-gold-400 hover:text-obsidian-900 text-xs uppercase tracking-[0.16em] font-semibold transition-all self-start md:self-auto"
            >
              <span>Ver los 12 Modelos y Accesorios</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
              La Experiencia Exclusive
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold leading-tight">
              No solo alquilás un traje: vestís una prenda ajustada a tu cuerpo.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              En nuestro local del microcentro mendocino combinamos la rapidez y
              practicidad del alquiler con el oficio de la sastrería clásica.
              Cada saco y pantalón pasa por nuestro taller antes de tu evento.
            </p>
            <div className="pt-2">
              <Link
                href="/como-funciona"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold-400 hover:text-gold-300 font-semibold"
              >
                <span>Conocé el paso a paso del alquiler</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 bg-obsidian-800 border border-white/10 rounded-sm">
              <Scissors className="w-7 h-7 text-gold-400 mb-3" />
              <h3 className="font-serif text-xl text-white font-semibold">
                Ajuste Sartorial Incluido
              </h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Adaptamos largo de mangas, botamanga y cintura para que el traje
                luzca exactamente como hecho a medida para vos.
              </p>
            </div>

            <div className="p-6 bg-obsidian-800 border border-white/10 rounded-sm">
              <ShieldCheck className="w-7 h-7 text-gold-400 mb-3" />
              <h3 className="font-serif text-xl text-white font-semibold">
                Tintorería 100% Bonificada
              </h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Disfrutá de la fiesta sin preocupaciones. Al devolver el traje
                no necesitás lavarlo ni plancharlo; nosotros nos ocupamos.
              </p>
            </div>

            <div className="p-6 bg-obsidian-800 border border-white/10 rounded-sm">
              <Award className="w-7 h-7 text-gold-400 mb-3" />
              <h3 className="font-serif text-xl text-white font-semibold">
                Curva Completa de Talles
              </h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Desde el talle 40 hasta talles especiales (62+), en molderías
                Slim Fit modernas y cortes clásicos confortables.
              </p>
            </div>

            <div className="p-6 bg-obsidian-800 border border-white/10 rounded-sm">
              <Clock className="w-7 h-7 text-gold-400 mb-3" />
              <h3 className="font-serif text-xl text-white font-semibold">
                Urgencias & Último Momento
              </h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                ¿Tenés un casamiento o gala este fin de semana? Contamos con
                stock permanente en salón para entregas rápidas en el día.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA PREVIEW */}
      <section className="py-20 bg-obsidian-800/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
              Proceso Simple y Transparente
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mt-2">
              Tu Traje Listo en 4 Pasos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RENTAL_STEPS.map((st) => (
              <div
                key={st.step}
                className="relative p-6 bg-obsidian-800 border border-white/10 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-4xl font-bold text-gold-400/90">
                      {st.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-gold-400/10 text-gold-300 border border-gold-400/30 rounded-sm">
                      {st.highlight}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-white font-semibold">
                    {st.title}
                  </h3>
                  <p className="text-xs text-gold-400/90 mt-1">{st.subtitle}</p>
                  <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS DE CLIENTES EN MENDOZA */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Clientes Reales en Mendoza
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mt-2">
            La Confianza de Novios, Padrinos y Egresados
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-6 bg-obsidian-800 border border-white/10 rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-gold-400 mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-zinc-300 italic leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-gold-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL + INSTAGRAM BANNER */}
      <section className="py-16 bg-gradient-to-r from-obsidian-800 via-obsidian-900 to-obsidian-800 border-t border-gold-400/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-gold-400 font-semibold">
            <Instagram className="w-4 h-4" />
            <span>Seguinos en {BUSINESS_INFO.instagramHandle}</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-semibold">
            ¿Listo para Probarte tu Próximo Traje?
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            Acercate a nuestro showroom en{" "}
            <strong className="text-white">
              Av. San Martín 1425 (Galería Bamac), Ciudad de Mendoza
            </strong>{" "}
            o escribinos ahora por WhatsApp para recibir asesoramiento inmediato.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={heroWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-sm bg-gold-400 hover:bg-gold-300 text-obsidian-900 font-bold text-xs uppercase tracking-[0.18em] transition-all"
            >
              Hablar por WhatsApp (+54 9 261 609-1545)
            </a>
            <Link
              href="/contacto"
              className="w-full sm:w-auto px-8 py-4 rounded-sm border border-white/20 hover:border-gold-400 text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all"
            >
              Ver Mapa y Horarios de Atención
            </Link>
          </div>
        </div>
      </section>

      {/* Modal de Detalle */}
      <SuitModal item={selectedSuit} onClose={() => setSelectedSuit(null)} />
    </div>
  );
}
