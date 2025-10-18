import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="container">
        <a href="/" className="logo">Qurrath Ul Aain</a>
        <ul className="nav-list">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
