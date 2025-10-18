"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2>Contact</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert("Form submitted: " + email); }}>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
