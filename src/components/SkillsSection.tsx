import React from "react";

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        <span className="badge">React</span>
        <span className="badge">Three.js</span>
        {/* add badges */}
      </div>
    </section>
  );
}
