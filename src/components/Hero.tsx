import React from "react";
import HeroTitle from "./HeroTitle";
import HeroCTA from "./HeroCTA";

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-card">
        <HeroTitle />
        <p className="hero-subtitle">App Developer • AI Enthusiast • Cyber Explorer</p>
        <HeroCTA />
      </div>
    </section>
  );
}
