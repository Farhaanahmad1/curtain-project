"use client";

import React from "react";

const Hero = () => {
  return (
    <section
  id="hero"
  className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden"
>
  <div className="container mx-auto px-4 py-16 relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1
          id="hero-title"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          Transform Your Home with{" "}
          <span className="text-primary">Classic Elegance</span>
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl mb-8 text-gray-600">
          Discover our premium collection of curtains designed to elevate your
          living spaces
        </p>
        <div
          id="hero-cta"
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <a
            href="#categories"
            className="btn-primary px-8 py-3 rounded-lg text-black border-2 border-primary bg-primary hover:bg-primary-dark transition-all duration-300"
          >
            Shop Now
          </a>
          <a
            href="#contact"
            className="btn-secondary px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-gray-500 transition-all duration-300"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div id="hero-image-container" className="relative">
          <img
            id="hero-image"
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
            alt="Elegant living room with classic curtains"
            className="rounded-lg shadow-xl w-full h-auto max-w-lg mx-auto"
          />
          <div
            id="hero-decoration"
            className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary opacity-10 rounded-full -z-10"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    id="hero-bg-pattern"
    className="absolute top-0 left-0 w-full h-full opacity-5 pattern-grid"
  />
</section>

  );
};

export default Hero;
