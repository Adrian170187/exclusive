import React from "react";

interface BrandLogoProps {
  variant?: "navbar" | "footer" | "hero";
  className?: string;
}

/**
 * Vector reproduction of the official "Exclusive - Alquiler de Trajes" logo
 * featuring the tuxedo lapels, bow tie, 3 dress studs, and architectural frame.
 */
export default function BrandLogo({
  variant = "navbar",
  className = "",
}: BrandLogoProps) {
  if (variant === "hero") {
    return (
      <div className={`inline-flex flex-col items-start select-none ${className}`}>
        <svg
          viewBox="0 0 420 225"
          className="w-64 sm:w-80 h-auto overflow-visible"
          role="img"
          aria-label="Exclusive - Alquiler de Trajes"
        >
          {/* Tuxedo Emblem (Bow tie, 3 studs, notched lapels) */}
          <g transform="translate(88, 6)">
            {/* Bow Tie */}
            <path
              d="M 19 8 C 19 5, 29 9, 34 11 L 36 11 C 41 9, 51 5, 51 8 L 51 20 C 51 23, 41 19, 36 17 L 34 17 C 29 19, 19 23, 19 20 Z"
              className="fill-white"
            />
            <rect
              x="32.5"
              y="10.5"
              width="5"
              height="7"
              rx="1.2"
              className="fill-gold-400"
            />

            {/* Three Shirt Studs */}
            <circle cx="35" cy="28" r="2.2" className="fill-gold-400" />
            <circle cx="35" cy="40" r="2.2" className="fill-gold-400" />
            <circle cx="35" cy="52" r="2.2" className="fill-gold-400" />

            {/* Left Notched Lapel */}
            <path
              d="M 16 7 L 0 24 L 8 30 L 2 35 L 33 88 L 21 34 L 17 20 Z"
              className="fill-white"
            />
            {/* Right Notched Lapel */}
            <path
              d="M 54 7 L 70 24 L 62 30 L 68 35 L 37 88 L 49 34 L 53 20 Z"
              className="fill-white"
            />
          </g>

          {/* Left Open Frame */}
          <path
            d="M 65 95 H 18 V 198 H 170"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            className="text-gold-400"
          />

          {/* Right Open Frame */}
          <path
            d="M 242 95 H 402 V 198 H 372"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            className="text-gold-400"
          />

          {/* "Exclusive" Serif Wordmark */}
          <text
            x="68"
            y="156"
            className="fill-white font-serif"
            style={{
              fontSize: "64px",
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}
          >
            Exclusive
          </text>

          {/* "ALQUILER DE TRAJES" Subtitle */}
          <text
            x="160"
            y="181"
            className="fill-gold-300 font-sans"
            style={{
              fontSize: "12.5px",
              fontWeight: 500,
              letterSpacing: "0.34em",
            }}
          >
            ALQUILER DE TRAJES
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}
    >
      {/* Emblem Icon Box with Tuxedo & Frame Accent */}
      <div className="relative w-10 h-11 sm:w-12 sm:h-13 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 80 96"
          className="w-full h-full overflow-visible"
          aria-hidden="true"
        >
          {/* Subtle gold corner frame inspired by official logo */}
          <path
            d="M 14 22 H 3 V 92 H 44"
            fill="none"
            stroke="#d4af37"
            strokeWidth="2.5"
          />
          <path
            d="M 66 22 H 77 V 92 H 64"
            fill="none"
            stroke="#d4af37"
            strokeWidth="2.5"
          />

          {/* Tuxedo Bow Tie */}
          <path
            d="M 25 10 C 25 7, 34 11, 38.5 13 L 41.5 13 C 46 11, 55 7, 55 10 L 55 21 C 55 24, 46 20, 41.5 18 L 38.5 18 C 34 20, 25 24, 25 21 Z"
            fill="#ffffff"
          />
          <rect
            x="37.5"
            y="12"
            width="5"
            height="7"
            rx="1.2"
            fill="#d4af37"
          />

          {/* 3 Shirt Studs */}
          <circle cx="40" cy="29" r="2.2" fill="#d4af37" />
          <circle cx="40" cy="40" r="2.2" fill="#d4af37" />
          <circle cx="40" cy="51" r="2.2" fill="#d4af37" />

          {/* Left Lapel */}
          <path
            d="M 22 9 L 8 24 L 15 30 L 10 35 L 38 84 L 27 33 L 23 20 Z"
            fill="#ffffff"
          />
          {/* Right Lapel */}
          <path
            d="M 58 9 L 72 24 L 65 30 L 70 35 L 42 84 L 53 33 L 57 20 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Text Wordmark matching official logo */}
      <div className="flex flex-col min-w-0">
        <span className="font-serif text-2xl sm:text-3xl tracking-[0.04em] text-white font-normal leading-none truncate">
          Exclusive
        </span>
        <span className="text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-gold-400 mt-1 truncate font-medium">
          Alquiler de Trajes
        </span>
      </div>
    </div>
  );
}
