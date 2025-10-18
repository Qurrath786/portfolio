import React from "react";
import ThreeScene from "@/components/ThreeScene";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import "@/app/globals.css";

export default function Page() {
  return (
    <>
      <div className="bg-canvas" aria-hidden="true">
        <ThreeScene />
      </div>
      <div className="vignette" />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
