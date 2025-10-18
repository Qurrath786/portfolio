// src/components/HeroTitle.tsx
import React from "react";

export default function HeroTitle({ children }: { children?: React.ReactNode }) {
  return (
    <h1 className="hero-title" aria-label="Site title">
      {children}
    </h1>
  );
}
