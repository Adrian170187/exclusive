"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Send,
  Sparkles,
  Calendar,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { BUSINESS_INFO, buildWhatsAppLink } from "@/data/catalog";

export default function ContactoPage() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipoEvento, setTipoEvento] = useState("Casamiento (Novio / Padrino)");
  const [fechaEvento, setFechaEvento] = useState("");
  const [prendaInteres, setPrendaInteres] = useState(
    "Traje / Ambo Slim Fit Completo"
  );
  const [turnoPreferido, setTurnoPreferido] = useState(
    "Por la tarde (16:30 a 20:30 hs)"
  );
  const [comentarios, setComentarios] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `¡Hola Exclusive! Quiero reservar una prueba / consultar desde la web:
• Nombre: ${nombre || "Cliente Web"}
• Teléfono: ${telefono || "No especificado"}
• Evento: ${tipoEvento}
• Fecha del evento: ${fechaEvento || "A confirmar"}
• Prenda de interés: ${prendaInteres}
• Horario preferido para ir al local: ${turnoPreferido}${
      comentarios ? `\n• Comentarios: ${comentarios}` : ""
    }`;

    const url = buildWhatsAppLink(msg);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white text-hyatt-charcoal min-h-screen pb-8 sm:pb-14">
      {/* Header on Black Container */}
      <div className="bg-[#0F0F0F] text-white border-b border-white/10 py-10 sm:py-14 mb-8 sm:mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C59B6D] font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B6D] shrink-0" />
            <span>Atención en Ciudad de Mendoza</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-white font-semibold mt-2">
            Contacto & Reserva de Prueba
          </h1>
          <p className="text-xs sm:text-base text-white/75 max-w-3xl mt-2.5 sm:mt-3 leading-relaxed">
            Visitá nuestro showroom en{" "}
            <strong className="text-white">
              Av. San Martín 1425 (Galería Bamac), Ciudad de Mendoza
            </strong>{" "}
            o completá el formulario para coordinar tu prueba de traje por
            WhatsApp sin esperas.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Left: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-white border border-hyatt-border rounded-sm p-5 sm:p-8 shadow-sm">
            <div className="mb-5 sm:mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-hyatt-charcoal font-semibold">
                Agendá tu Prueba en el Local
              </h2>
              <p className="text-xs text-hyatt-muted mt-1">
                Completá los datos de tu evento y te responderemos al instante
                por WhatsApp confirmando disponibilidad.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hyatt-charcoal font-semibold mb-1.5">
                    Tu Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej: Lucas Rodríguez"
                    className="w-full bg-hyatt-ivory border border-hyatt-border rounded-sm px-3.5 py-2.5 text-base sm:text-sm text-hyatt-charcoal placeholder:text-hyatt-muted/60 focus:outline-none focus:border-hyatt-burgundy"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-hyatt-charcoal font-semibold mb-1.5">
                    Tu WhatsApp / Teléfono
                  </label>
                  <input
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Ej: 261 555-1234"
                    className="w-full bg-hyatt-ivory border border-hyatt-border rounded-sm px-3.5 py-2.5 text-base sm:text-sm text-hyatt-charcoal placeholder:text-hyatt-muted/60 focus:outline-none focus:border-hyatt-burgundy"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hyatt-charcoal font-semibold mb-1.5">
                    ¿Para qué evento buscás traje?
                  </label>
                  <select
                    value={tipoEvento}
                    onChange={(e) => setTipoEvento(e.target.value)}
                    className="w-full bg-hyatt-ivory border border-hyatt-border rounded-sm px-3.5 py-2.5 text-base sm:text-sm text-hyatt-charcoal focus:outline-none focus:border-hyatt-burgundy"
                  >
                    <option value="Casamiento (Novio)">
                      Casamiento (Soy el Novio)
                    </option>
                    <option value="Casamiento (Padrino / Testigo)">
                      Casamiento (Soy Padrino / Testigo)
                    </option>
                    <option value="Casamiento (Invitado)">
                      Casamiento (Soy Invitado)
                    </option>
                    <option value="Cena de Egresados">Cena de Egresados</option>
                    <option value="Fiesta de 15 Años">Fiesta de 15 Años</option>
                    <option value="Gala / Evento Empresarial">
                      Gala / Evento Empresarial
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-hyatt-charcoal font-semibold mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-hyatt-burgundy shrink-0" />
                    <span>Fecha Estimada del Evento</span>
                  </label>
                  <input
                    type="date"
                    value={fechaEvento}
                    onChange={(e) => setFechaEvento(e.target.value)}
                    className="w-full bg-hyatt-ivory border border-hyatt-border rounded-sm px-3.5 py-2.5 text-base sm:text-sm text-hyatt-charcoal focus:outline-none focus:border-hyatt-burgundy"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-hyatt-charcoal font-semibold mb-1.5">
                    Prenda de Interés Principal
                  </label>
                  <select
                    value={prendaInteres}
                    onChange={(e) => setPrendaInteres(e.target.value)}
                    className="w-full bg-hyatt-ivory border border-hyatt-border rounded-sm px-3.5 py-2.5 text-base sm:text-sm text-hyatt-charcoal focus:outline-none focus:border-hyatt-burgundy"
                  >
                    <option value="Traje / Ambo Slim Fit Completo">
                      Traje / Ambo Slim Fit Completo
                    </option>
                    <option value="Ambo 3 Piezas con Chaleco">
                      Ambo 3 Piezas con Chaleco Sartorial
                    </option>
                    <option value="Smoking (Black Tie) Solapa Razo">
                      Smoking (Black Tie) Solapa Razo
                    </option>
                    <option value="Jaqué de Ceremonia o Frac">
                      Jaqué de Ceremonia o Frac
                    </option>
                    <option value="Accesorios / Camisa / Calzado">
                      Accesorios / Camisa / Calzado Oxford
                    </option>
                    <option value="Promoción Grupal (3+ trajes)">
                      Promoción Grupal (Cortejo o Egresados)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-hyatt-charcoal font-semibold mb-1.5">
                    Horario Preferido para Probarte
                  </label>
                  <select
                    value={turnoPreferido}
                    onChange={(e) => setTurnoPreferido(e.target.value)}
                    className="w-full bg-hyatt-ivory border border-hyatt-border rounded-sm px-3.5 py-2.5 text-base sm:text-sm text-hyatt-charcoal focus:outline-none focus:border-hyatt-burgundy"
                  >
                    <option value="Por la mañana (09:30 a 13:30 hs)">
                      Por la mañana (09:30 a 13:30 hs)
                    </option>
                    <option value="Por la tarde (16:30 a 20:30 hs)">
                      Por la tarde (16:30 a 20:30 hs)
                    </option>
                    <option value="Sábado por la mañana (09:30 a 14:00 hs)">
                      Sábado por la mañana (09:30 a 14:00 hs)
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-hyatt-charcoal font-semibold mb-1.5">
                  Talle Estimado o Consulta Adicional (Opcional)
                </label>
                <textarea
                  rows={3}
                  value={comentarios}
                  onChange={(e) => setComentarios(e.target.value)}
                  placeholder="Ej: Mido 1.78m, peso 76kg, busco ambo azul noche con zapatos talle 42..."
                  className="w-full bg-hyatt-ivory border border-hyatt-border rounded-sm px-3.5 py-2.5 text-base sm:text-sm text-hyatt-charcoal placeholder:text-hyatt-muted/60 focus:outline-none focus:border-hyatt-burgundy"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-4 sm:px-6 rounded-sm bg-hyatt-burgundy hover:bg-hyatt-wine text-white font-bold text-xs uppercase tracking-wider sm:tracking-[0.16em] flex items-center justify-center gap-2 shadow-lg transition-all text-center"
              >
                <Send className="w-4 h-4 shrink-0" />
                <span>Enviar Solicitud al WhatsApp del Local</span>
              </button>

              <p className="text-[11px] text-hyatt-muted text-center flex items-center justify-center gap-1.5 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-hyatt-taupe shrink-0" />
                <span>
                  Atención directa con nuestros asesores en Ciudad de Mendoza
                </span>
              </p>
            </form>
          </div>

          {/* Right: Store Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-hyatt-cream border border-hyatt-border rounded-sm p-5 sm:p-7 space-y-5">
              <h3 className="font-serif text-2xl text-hyatt-charcoal font-semibold">
                Datos del Showroom
              </h3>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-white border border-hyatt-border flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-hyatt-burgundy" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-hyatt-taupe font-semibold">
                    Dirección en Microcentro
                  </p>
                  <p className="text-sm text-hyatt-charcoal font-semibold mt-0.5">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-hyatt-muted">
                    {BUSINESS_INFO.city}
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsQuery}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-hyatt-burgundy font-semibold hover:underline mt-1.5"
                  >
                    <span>Cómo llegar en Google Maps</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-white border border-hyatt-border flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-hyatt-burgundy" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-hyatt-taupe font-semibold">
                    Teléfono & WhatsApp
                  </p>
                  <p className="text-sm text-hyatt-charcoal font-semibold mt-0.5">
                    {BUSINESS_INFO.phoneDisplay}
                  </p>
                  <p className="text-xs text-hyatt-muted">
                    Consultas de stock, señas y turnos de prueba
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-white border border-hyatt-border flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-hyatt-burgundy" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-hyatt-taupe font-semibold">
                    Horarios de Atención
                  </p>
                  <div className="mt-1 space-y-1 text-xs text-hyatt-muted">
                    {BUSINESS_INFO.hours.map((h) => (
                      <p key={h.days}>
                        <strong className="text-hyatt-charcoal">
                          {h.days}:
                        </strong>{" "}
                        {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-white border border-hyatt-border flex items-center justify-center shrink-0 mt-0.5">
                  <Instagram className="w-4 h-4 text-hyatt-burgundy" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-hyatt-taupe font-semibold">
                    Instagram Oficial
                  </p>
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-hyatt-burgundy hover:underline font-semibold mt-0.5 inline-flex items-center gap-1"
                  >
                    <span>{BUSINESS_INFO.instagramHandle}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Map of Av. San Martín 1425, Mendoza */}
            <div className="rounded-sm overflow-hidden border border-hyatt-border bg-hyatt-cream h-64 sm:h-72">
              <iframe
                title="Ubicación Exclusive Alquiler de Trajes - Av. San Martín 1425, Mendoza"
                src="https://www.google.com/maps?q=Av.+San+Martin+1425,+Mendoza,+Argentina&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
