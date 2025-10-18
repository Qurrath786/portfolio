// src/components/ProjectCard.tsx
"use client";

import React, { useRef, useState } from "react";
import type { Project } from "@/data/projects";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isHover, setHover] = useState(false);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rotateY = (px - 0.5) * 18; // left/right
    const rotateX = (0.5 - py) * 12; // up/down
    const transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${isHover ? 8 : 0}px)`;
    el.style.transform = transform;
    // subtle shadow offset:
    (el.style as any).boxShadow = `${-rotateY / 2}px ${rotateX / 2}px 30px rgba(0,0,0,0.5)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    el.style.boxShadow = "0 12px 30px rgba(0,0,0,0.35)";
    setHover(false);
  }

  function handleEnter() {
    setHover(true);
  }

  return (
    <div
      ref={ref}
      className={`project-card ${isHover ? "hovered" : ""}`}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      role="article"
      aria-label={project.title}
      tabIndex={0}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      <div className="project-card-inner">
        <div className="project-badge">{project.type}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-stack">{project.stack}</div>
        <ul className="project-highlights">
          {project.highlights.map((h, i) => (
            <li key={i}>• {h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
