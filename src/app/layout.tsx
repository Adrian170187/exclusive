import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "EXCLUSIVE | Alquiler de Trajes, Smoking y Etiqueta en Mendoza",
  description:
    "Alquiler de trajes Slim Fit, ambos, esmóquines (smoking), frac, jaqué y accesorios para novios, egresados, padrinos e invitados en Ciudad de Mendoza. Av. San Martín 1425 (Galería Bamac).",
  keywords: [
    "alquiler de trajes mendoza",
    "trajes exclusive mendoza",
    "alquiler de smoking mendoza",
    "trajes para novios mendoza",
    "trajes para egresados mendoza",
    "alquiler de frac y jaque mendoza",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-AR"
      className={`${cormorant.variable} ${montserrat.variable}`}
    >
      <body className="font-sans bg-white text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
