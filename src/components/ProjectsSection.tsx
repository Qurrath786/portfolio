// src/components/ProjectsSection.tsx
"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-heading">Selected Projects</h2>
        <p className="section-lead">A few highlights — click to explore more.</p>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
