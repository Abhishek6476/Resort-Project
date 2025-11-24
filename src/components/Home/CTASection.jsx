

import React from "react";
import ctaImg from "/src/assets/wedding.jpg";  // 
export default function CTASection() {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${ctaImg})` }}   // 
    >
      {/* Dark Overlay (same as WeddingReception) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-4xl font-bold mb-4">
          Plan Your Perfect Stay With Us
        </h2>

        <p className="text-lg mb-8 text-gray-200">
          Experience luxury, comfort, and world-class hospitality at unbeatable
          prices.<br/> Book your dream getaway now!
        </p>

        <a
          href="/contact"
          className="bg-blue-800 hover:bg-blue-900 px-8 py-3 rounded-full text-white font-medium"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
