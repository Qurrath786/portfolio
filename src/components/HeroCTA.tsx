// src/components/HeroCTA.tsx
"use client";

import React from "react";

export default function HeroCTA() {
  // local handlers live in this client component
  const handleView = () => {
    // example: scroll to projects or navigate — replace as needed
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = () => {
    // example: open mail or scroll to contact
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-cta" role="group" aria-label="Hero actions">
      <button className="btn-primary" onClick={handleView} type="button">
        View Projects
      </button>
      <button className="btn-secondary" onClick={handleContact} type="button">
        Contact
      </button>
    </div>
  );
}
