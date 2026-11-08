import React from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface BrandLogoProps {
  variant?: "navbar" | "footer" | "hero";
  className?: string;
}

/**
 * Displays the official "Exclusive - Alquiler de Trajes" logo
 * preserving its exact original black-on-white design.
 */
export default function BrandLogo({
  variant = "navbar",
  className = "",
}: BrandLogoProps) {
  if (variant === "hero") {
    return (
      <div
        className={`inline-flex items-center select-none bg-white ${className}`}
      >
        <img
          src={`${BASE_PATH}/logo-exclusive-crop.jpg`}
          alt="Exclusive - Alquiler de Trajes"
          className="w-56 sm:w-72 h-auto object-contain"
        />
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div
        className={`inline-flex items-center select-none bg-white ${className}`}
      >
        <img
          src={`${BASE_PATH}/logo-exclusive-crop.jpg`}
          alt="Exclusive - Alquiler de Trajes"
          className="w-44 sm:w-52 h-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none bg-white ${className}`}>
      <img
        src={`${BASE_PATH}/logo-exclusive-crop.jpg`}
        alt="Exclusive - Alquiler de Trajes"
        className="h-12 sm:h-16 w-auto object-contain"
      />
    </div>
  );
}
