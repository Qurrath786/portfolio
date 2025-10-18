import React from "react";
import ThreeScene from "@/components/ThreeScene";
import "@/app/globals.css";

export default function Page() {
  return (
    <main>
      {/* Canvas background container */}
      <div className="bg-canvas" aria-hidden="true">
        <ThreeScene />
      </div>

      {/* subtle overlay between canvas and content */}
      <div className="vignette" />

      {/* Hero content on top */}
      <section className="hero-wrapper">
        <div className="hero-card">
          <h1 className="hero-title">Qurrath Ul Aain</h1>
          <p className="hero-subtitle">App Developer • AI Enthusiast • Cyber Explorer</p>
          <div className="hero-cta">
            <button className="btn-primary">View Projects</button>
            <button className="btn-secondary">Contact</button>
          </div>
        </div>
      </section>
    </main>
  );
}
