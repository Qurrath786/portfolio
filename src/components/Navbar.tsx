import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="p-4 fixed top-0 left-0 right-0 z-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold">Qurrath</Link>
        <div className="space-x-4">
          <Link href="#projects" className="text-sm text-gray-300">Projects</Link>
          <Link href="#about" className="text-sm text-gray-300">About</Link>
          <Link href="#contact" className="text-sm text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
