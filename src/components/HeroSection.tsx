// src/components/HeroSection.tsx
"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false, loading: () => null });

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen h-screen w-full overflow-hidden"
    >
      {/* Canvas sits behind content but not with a negative z-index (use z-0) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ThreeScene />
      </div>

      {/* Foreground content stays above the canvas */}
      <div className="z-20 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7B7] to-[#FF6B56]"
        >
          Qurrath Ul Aain
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.9 }}
          className="mt-4 text-base md:text-lg text-gray-300 max-w-2xl">
          App Developer • AI Enthusiast • Cyber Explorer
        </motion.p>

        <div className="mt-8 flex gap-4">
          <button className="px-5 py-2 rounded-md bg-[#FF6B56] text-black font-semibold shadow">View Projects</button>
          <button className="px-5 py-2 rounded-md border border-gray-500 text-white hover:bg-white/5">Contact</button>
        </div>
      </div>
    </section>
  );
}
