// src/components/SkillsSection.tsx
"use client";

import React from "react";
import { SKILLS } from "@/data/skills";
import SkillCard from "./SkillCard";
import dynamic from "next/dynamic";
const ThreeSkills = dynamic(() => import("./ThreeSkills"), { ssr: false });

export default function SkillsSection() {
  // group skills by category (simple)
  const groups = SKILLS.reduce<Record<string, typeof SKILLS>>((acc, s) => {
    if (!acc[s.category ?? "Other"]) acc[s.category ?? "Other"] = [];
    acc[s.category ?? "Other"].push(s);
    return acc;
  }, {} as any);

  // pick a sample of top skills for the 3D bar chart
  const topSample = [
    { label: "React", pct: 90, color: "#61dafb" },
    { label: "Python", pct: 90, color: "#306998" },
    { label: "Flutter", pct: 88, color: "#42A5F5" },
    { label: "Git", pct: 92, color: "#F05032" },
  ];

  return (
    <section id="skills" className="section skills-section" style={{ padding: "48px 16px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 className="section-heading">⚙️ Skills</h2>
        <p className="section-lead">Technical stacks, tools and soft skills — approximate proficiency shown as percentages.</p>

        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 24 }}>
          <div>
            {Object.keys(groups).map((cat) => (
              <div key={cat} style={{ marginBottom: 18 }}>
                <h4 style={{ color: "#fff", marginBottom: 8 }}>{cat}</h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 12 }}>
                  {groups[cat].map((s) => (
                    <SkillCard key={s.id} skill={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* right panel: 3D graph + small legend */}
          <aside style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))", padding: 18, borderRadius: 12 }}>
            <h4 style={{ color: "#fff", marginBottom: 12 }}>3D Skill Graph</h4>
            <ThreeSkills sample={topSample} />
            <p style={{ color: "rgba(255,255,255,0.7)", marginTop: 8, fontSize: 13 }}>
              Animated 3D bars representing a sample of top skills. Hover cards for per-item percentages.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
