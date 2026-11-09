import React from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface BrandLogoProps {
  variant?: "navbar" | "footer" | "hero";
  theme?: "dark" | "light";
  className?: string;
}

/**
 * Displays the official "Exclusive - Alquiler de Trajes" logo.
 * - theme="dark": crisp white logo on transparent background for black containers (Navbar, Hero intro, Footer).
 * - theme="light": original black-on-white logo for white surfaces.
 */
export default function BrandLogo({
  variant = "navbar",
  theme = "dark",
  className = "",
}: BrandLogoProps) {
  const logoSrc =
    theme === "dark"
      ? `${BASE_PATH}/logo-exclusive-white.png`
      : `${BASE_PATH}/logo-exclusive-crop.jpg`;

  const containerBg = theme === "dark" ? "bg-transparent" : "bg-white";

  if (variant === "hero") {
    return (
      <div
        className={`inline-flex items-center select-none ${containerBg} ${className}`}
      >
        <img
          src={logoSrc}
          alt="Exclusive - Alquiler de Trajes"
          className="w-52 sm:w-64 h-auto object-contain"
        />
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div
        className={`inline-flex items-center select-none ${containerBg} ${className}`}
      >
        <img
          src={logoSrc}
          alt="Exclusive - Alquiler de Trajes"
          className="w-44 sm:w-52 h-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center select-none ${containerBg} ${className}`}
    >
      <img
        src={logoSrc}
        alt="Exclusive - Alquiler de Trajes"
        className="h-12 sm:h-16 w-auto object-contain"
      />
    </div>
  );
}
