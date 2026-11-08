"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  Sparkles,
  Users,
  MessageCircle,
  RotateCcw,
} from "lucide-react";
import {
  CATALOG_ITEMS,
  CATEGORIES,
  OCCASIONS,
  CategoryId,
  OccasionId,
  SuitItem,
  buildWhatsAppLink,
} from "@/data/catalog";
import SuitCard from "@/components/SuitCard";
import SuitModal from "@/components/SuitModal";

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory =
    (searchParams.get("categoria") as CategoryId) || "todos";

  const [selectedCategory, setSelectedCategory] =
    useState<CategoryId>(initialCategory);
  const [selectedOccasion, setSelectedOccasion] = useState<OccasionId>("todos");
  const [selectedFit, setSelectedFit] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalSuit, setModalSuit] = useState<SuitItem | null>(null);

  const filteredItems = useMemo(() => {
    return CATALOG_ITEMS.filter((item) => {
      if (selectedCategory !== "todos" && item.category !== selectedCategory) {
        return false;
      }
      if (
        selectedOccasion !== "todos" &&
        !item.occasions.includes(selectedOccasion)
      ) {
        return false;
      }
      if (selectedFit !== "todos" && item.fit !== selectedFit) {
        return false;
      }
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchSub = item.subtitle.toLowerCase().includes(q);
        const matchColor = item.color.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        return matchName || matchSub || matchColor || matchDesc;
      }
      return true;
    });
  }, [selectedCategory, selectedOccasion, selectedFit, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory("todos");
    setSelectedOccasion("todos");
    setSelectedFit("todos");
    setSearchQuery("");
  };

  const groupPromoWhatsApp = buildWhatsAppLink(
    "¡Hola Exclusive! Quiero consultar por promociones grupales para cortejo de casamiento / promoción de egresados."
  );

  return (
    <div className="bg-white text-zinc-900 min-h-screen py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-b border-zinc-200 pb-6 sm:pb-10 mb-6 sm:mb-10">
          <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-zinc-500 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-zinc-950 shrink-0" />
            <span>Colección Exclusive Mendoza</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-zinc-950 font-semibold mt-2">
            Catálogo de Trajes, Smoking & Etiqueta
          </h1>
          <p className="text-xs sm:text-base text-zinc-600 max-w-3xl mt-2.5 sm:mt-3 leading-relaxed">
            Explorá nuestra línea de alquiler masculino para novios, egresados,
            padrinos e invitados. Filtrá por tipo de prenda, ocasión o corte y
            consultá disponibilidad inmediata para tu fecha en nuestro local de{" "}
            <strong className="text-zinc-950">Av. San Martín 1425</strong>.
          </p>
        </div>

        {/* Category Tabs: 1 full-width + 2x2 grid on mobile, 5 cols on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
          {CATEGORIES.map((cat, idx) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`${
                  idx === 0 ? "col-span-2 sm:col-span-1" : "col-span-1"
                } p-3 sm:p-4 rounded-sm border text-left transition-all ${
                  active
                    ? "bg-zinc-950 border-zinc-950 text-white shadow-md"
                    : "bg-zinc-50 border-zinc-200 text-zinc-800 hover:border-zinc-900"
                }`}
              >
                <p
                  className={`text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-[0.12em] font-bold leading-snug ${
                    active ? "text-white" : "text-zinc-950"
                  }`}
                >
                  {cat.label}
                </p>
                <p
                  className={`text-[10px] sm:text-[11px] mt-0.5 sm:mt-1 truncate ${
                    active ? "text-zinc-300" : "text-zinc-500"
                  }`}
                >
                  {cat.countLabel}
                </p>
              </button>
            );
          })}
        </div>

        {/* Secondary Filters Bar: Occasion, Fit & Search */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-sm p-3.5 sm:p-5 mb-6 sm:mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Search input (16px on mobile to avoid iOS zoom) */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por color (azul, negro, bordó), smoking..."
                className="w-full bg-white border border-zinc-300 rounded-sm pl-10 pr-4 py-2.5 text-base sm:text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950"
              />
            </div>

            {/* Occasion Filter */}
            <div className="md:col-span-3 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-zinc-950 shrink-0 hidden sm:block" />
              <select
                value={selectedOccasion}
                onChange={(e) =>
                  setSelectedOccasion(e.target.value as OccasionId)
                }
                aria-label="Filtrar por ocasión"
                className="w-full bg-white border border-zinc-300 rounded-sm px-3 py-2.5 text-base sm:text-xs text-zinc-900 focus:outline-none focus:border-zinc-950"
              >
                {OCCASIONS.map((occ) => (
                  <option key={occ.id} value={occ.id}>
                    Ocasión: {occ.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Fit Filter */}
            <div className="md:col-span-2">
              <select
                value={selectedFit}
                onChange={(e) => setSelectedFit(e.target.value)}
                aria-label="Filtrar por corte"
                className="w-full bg-white border border-zinc-300 rounded-sm px-3 py-2.5 text-base sm:text-xs text-zinc-900 focus:outline-none focus:border-zinc-950"
              >
                <option value="todos">Corte: Todos</option>
                <option value="Slim Fit">Slim Fit (Entallado)</option>
                <option value="Tailored Fit">Tailored Fit (Sastrero)</option>
                <option value="Classic Fit">Classic Fit</option>
              </select>
            </div>

            {/* Reset button */}
            <div className="md:col-span-2 flex justify-end">
              <button
                type="button"
                onClick={resetFilters}
                className="w-full py-2.5 px-3 rounded-sm bg-white border border-zinc-300 hover:border-zinc-950 text-xs text-zinc-800 hover:text-black font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                <span>Limpiar Filtros</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-zinc-500 mb-5 sm:mb-6">
          <p>
            Mostrando{" "}
            <strong className="text-zinc-950">{filteredItems.length}</strong>{" "}
            opciones disponibles en showroom
          </p>
          <p className="text-[11px] sm:text-xs text-zinc-700 font-medium">
            Tocá cualquier prenda para elegir talle y fecha de tu evento
          </p>
        </div>

        {/* Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {filteredItems.map((item) => (
              <SuitCard
                key={item.id}
                item={item}
                onSelect={(suit) => setModalSuit(suit)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-zinc-50 border border-zinc-200 rounded-sm p-8 sm:p-12 text-center space-y-4">
            <p className="font-serif text-xl sm:text-2xl text-zinc-950">
              No encontramos resultados con esos filtros exactos
            </p>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto">
              En nuestro salón de Av. San Martín 1425 contamos con más
              combinaciones de colores, texturas y talles.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-6 py-3 bg-zinc-950 text-white font-bold text-xs uppercase tracking-wider rounded-sm"
            >
              Ver Todo el Catálogo
            </button>
          </div>
        )}

        {/* Banner Promoción Grupos (Novios + Padrinos / Egresados) */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-sm bg-zinc-50 border border-zinc-300 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-zinc-700 font-bold">
              <Users className="w-4 h-4 shrink-0" />
              <span>Beneficio Especial Grupos & Cortejos</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-semibold">
              ¿Sos Novio con Padrinos o Promoción de Egresados?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl">
              Accedé a descuentos especiales reservando 3 o más trajes juntos,
              con coordinación cromática de corbatas/moños y pruebas grupales en
              el local.
            </p>
          </div>
          <a
            href={groupPromoWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 sm:px-7 py-4 rounded-sm bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2 shadow-md"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Consultar Pack Grupal</span>
          </a>
        </div>
      </div>

      <SuitModal item={modalSuit} onClose={() => setModalSuit(null)} />
    </div>
  );
}

export default function CatalogoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center text-zinc-900 text-xs sm:text-sm uppercase tracking-widest px-4 text-center">
          Cargando catálogo Exclusive...
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
