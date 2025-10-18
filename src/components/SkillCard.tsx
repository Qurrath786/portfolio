// src/components/SkillCard.tsx
"use client";

import React, { useRef, useEffect, useState } from "react";
import type { Skill } from "@/data/skills";

export default function SkillCard({ skill }: { skill: Skill }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(false);
  const [animatedPct, setAnimatedPct] = useState(0);

  useEffect(() => {
    // animate the ring from 0 to skill.pct
    let raf = 0;
    const start = performance.now();
    const duration = 800;
    function frame(ts: number) {
      const t = Math.min(1, (ts - start) / duration);
      setAnimatedPct(Math.round(t * skill.pct));
      if (t < 1) raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [skill.pct]);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 12;
    const rotateX = (0.5 - py) * 8;
    el.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "none";
  }

  const size = 76;
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - animatedPct / 100);

  return (
    <div
      ref={ref}
      className="skill-card"
      onMouseMove={handleMove}
      onMouseLeave={() => {
        reset();
        setHover(false);
      }}
      onMouseEnter={() => setHover(true)}
      tabIndex={0}
      onFocus={() => setHover(true)}
      onBlur={() => {
        setHover(false);
        reset();
      }}
      role="article"
      aria-label={`${skill.name} proficiency ${skill.pct} percent`}
    >
      <div className="skill-left">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
          <defs>
            <linearGradient id={`g-${skill.id}`} x1="0" x2="1">
              <stop offset="0" stopColor="#6ee7b7" />
              <stop offset="1" stopColor="#f97316" />
            </linearGradient>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={stroke}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`url(#g-${skill.id})`}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${circumference}`}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            fill="transparent"
          />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="16"
            fill="#fff"
            style={{ fontWeight: 700 }}
          >
            {`${animatedPct}%`}
          </text>
        </svg>
      </div>

      <div className="skill-right">
        <div className="skill-name">{skill.name}</div>
        <div className="skill-meta">{skill.category}</div>
      </div>
    </div>
  );
}
