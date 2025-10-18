// src/components/Hero.tsx
import React from "react";
import HeroTitle from "./HeroTitle";
import HeroCTA from "./HeroCTA"; // THIS is a client component (it has "use client")

export default function Hero() {
  return (
    <section className="hero-wrapper" aria-labelledby="hero-title">
      <div className="hero-card">
        <HeroTitle>Qurrath Ul Aain</HeroTitle>
        <p className="hero-subtitle">App Developer • AI Enthusiast • Cyber Explorer</p>

        {/* We're not passing any functions from the server into HeroCTA */}
        <HeroCTA />
      </div>
    </section>
  );
}
