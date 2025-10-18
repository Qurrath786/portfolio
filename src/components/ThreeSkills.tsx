"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SKILLS } from "@/data/skills";

function SkillBars({ data }: { data: { label: string; pct: number }[] }) {
  const group = useRef<THREE.Group | null>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.25) * 0.1;
  });

  return (
    <group ref={group} position={[-(data.length - 1) * 0.8, 0, 0]}>
      {data.map((d, i) => {
        const height = (d.pct / 100) * 3 + 0.1;
        const x = i * 1.6;
        const color = new THREE.Color(`hsl(${120 - d.pct}, 80%, 60%)`);
        return (
          <group key={i} position={[x, height / 2 - 0.2, 0]}>
            <mesh>
              <boxGeometry args={[1.2, height, 1]} />
              <meshStandardMaterial color={color} roughness={0.5} metalness={0.3} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function SkillLabels({ data }: { data: { label: string; pct: number }[] }) {
  return (
    <div className="skill-graph-labels">
      {data.map((d, i) => (
        <div key={i} style={{ flex: 1, textAlign: "center", color: "#fff", fontSize: 12 }}>
          {d.label}
          <br />
          <span style={{ color: "#aaa" }}>{d.pct}%</span>
        </div>
      ))}
    </div>
  );
}

export default function ThreeSkills() {
  // Pick top 6 skills by percentage
  const top = [...SKILLS]
    .sort((a, b) => b.pct - a.pct)
    .slice(0, 6)
    .map((s) => ({ label: s.name.split(" ")[0], pct: s.pct }));

  return (
    <div style={{ width: "100%", height: 280, position: "relative" }}>
      <Canvas camera={{ position: [0, 2.4, 6], fov: 40 }}>
        <color attach="background" args={["#0d0d0d"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 6, 5]} intensity={0.9} />
        <SkillBars data={top} />
      </Canvas>
      <SkillLabels data={top} />
    </div>
  );
}
