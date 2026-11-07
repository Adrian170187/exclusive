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
    <div className="bg-obsidian-900 min-h-screen py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-b border-white/10 pb-10 mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Colección Exclusive Mendoza</span>
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold mt-2">
            Catálogo de Trajes, Smoking & Etiqueta
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-3xl mt-3">
            Explorá nuestra línea de alquiler para novios, egresados, padrinos e
            invitados. Filtrá por tipo de prenda, ocasión o corte y consultá
            disponibilidad inmediata para tu fecha en nuestro local de{" "}
            <strong className="text-zinc-200">Av. San Martín 1425</strong>.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-4 rounded-sm border text-left transition-all ${
                  active
                    ? "bg-gold-400/15 border-gold-400 text-white shadow-lg shadow-gold-400/5"
                    : "bg-obsidian-800 border-white/10 text-zinc-300 hover:border-white/25"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-[0.14em] font-bold ${
                    active ? "text-gold-400" : "text-white"
                  }`}
                >
                  {cat.label}
                </p>
                <p className="text-[11px] text-zinc-400 mt-1">
                  {cat.countLabel}
                </p>
              </button>
            );
          })}
        </div>

        {/* Secondary Filters Bar: Occasion, Fit & Search */}
        <div className="bg-obsidian-800 border border-white/10 rounded-sm p-4 sm:p-5 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por color (azul, negro, bordó, beige), smoking, zapatos..."
                className="w-full bg-obsidian-900 border border-white/15 rounded-sm pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-gold-400"
              />
            </div>

            {/* Occasion Filter */}
            <div className="md:col-span-3 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-gold-400 shrink-0 hidden sm:block" />
              <select
                value={selectedOccasion}
                onChange={(e) =>
                  setSelectedOccasion(e.target.value as OccasionId)
                }
                aria-label="Filtrar por ocasión"
                className="w-full bg-obsidian-900 border border-white/15 rounded-sm px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
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
                className="w-full bg-obsidian-900 border border-white/15 rounded-sm px-3 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
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
                className="w-full py-2.5 px-3 rounded-sm border border-white/15 hover:border-gold-400 text-xs text-zinc-300 hover:text-gold-400 flex items-center justify-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Limpiar Filtros</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-zinc-400 mb-6">
          <p>
            Mostrando{" "}
            <strong className="text-white">{filteredItems.length}</strong>{" "}
            opciones disponibles en showroom
          </p>
          <p className="hidden sm:block text-gold-300">
            Hacé clic en cualquier prenda para elegir talle y fecha de tu evento
          </p>
        </div>

        {/* Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredItems.map((item) => (
              <SuitCard
                key={item.id}
                item={item}
                onSelect={(suit) => setModalSuit(suit)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-obsidian-800 border border-white/10 rounded-sm p-12 text-center space-y-4">
            <p className="font-serif text-2xl text-white">
              No encontramos resultados con esos filtros exactos
            </p>
            <p className="text-sm text-zinc-400 max-w-md mx-auto">
              En nuestro salón de Av. San Martín 1425 contamos con más
              combinaciones de colores, texturas y talles.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-6 py-2.5 bg-gold-400 text-obsidian-900 font-bold text-xs uppercase tracking-wider rounded-sm"
            >
              Ver Todo el Catálogo
            </button>
          </div>
        )}

        {/* Banner Promoción Grupos (Novios + Padrinos / Egresados) */}
        <div className="mt-16 p-8 sm:p-10 rounded-sm bg-gradient-to-r from-obsidian-800 via-obsidian-700 to-obsidian-800 border border-gold-400/40 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold">
              <Users className="w-4 h-4" />
              <span>Beneficio Especial Grupos & Cortejos</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-semibold">
              ¿Sos Novio con Padrinos o Promoción de Egresados?
            </h2>
            <p className="text-sm text-zinc-300 max-w-2xl">
              Accedé a descuentos especiales reservando 3 o más trajes juntos,
              con coordinación cromática de corbatas/moños y pruebas grupales en
              el local.
            </p>
          </div>
          <a
            href={groupPromoWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-4 rounded-sm bg-gold-400 hover:bg-gold-300 text-obsidian-900 font-bold text-xs uppercase tracking-[0.16em] flex items-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
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
        <div className="min-h-screen bg-obsidian-900 flex items-center justify-center text-gold-400 text-sm uppercase tracking-widest">
          Cargando catálogo Exclusive...
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
