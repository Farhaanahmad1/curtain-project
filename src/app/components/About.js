"use client";

import Image from "next/image";

const About = () => {
  return (
<section id="about" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="lg:w-1/2">
        <div id="about-image-container" className="relative">
          <img
            id="about-image"
            src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg"
            alt="Classic Home Curtains Showroom"
            className="rounded-lg shadow-xl w-full h-auto"
          />
          <div
            id="about-decoration"
            className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary opacity-10 rounded-full -z-10"
          />
        </div>
      </div>
      <div className="lg:w-1/2">
        <h2 id="about-title" className="text-4xl font-bold mb-6">
          About Classic Home Curtains
        </h2>
        <p id="about-description-1" className="text-gray-600 mb-4">
          Welcome to Classic Home Curtains, where elegance meets functionality.
          With over a decade of experience in transforming homes through
          exquisite window treatments, we take pride in offering premium quality
          curtains that enhance your living spaces.
        </p>
        <p id="about-description-2" className="text-gray-600 mb-6">
          Our commitment to excellence is reflected in every product we offer,
          from luxurious velvet drapes to lightweight sheers, each carefully
          selected to meet our high standards of quality and style.
        </p>
        <div
          id="about-features"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
        >
          <div id="feature-1" className="flex items-center space-x-3">
            <i className="fas fa-check-circle text-primary text-xl" />
            <span className="text-gray-700">Premium Materials</span>
          </div>
          <div id="feature-2" className="flex items-center space-x-3">
            <i className="fas fa-star text-primary text-xl" />
            <span className="text-gray-700">Expert Craftsmanship</span>
          </div>
          <div id="feature-3" className="flex items-center space-x-3">
            <i className="fas fa-tools text-primary text-xl" />
            <span className="text-gray-700">Professional Installation</span>
          </div>
          <div id="feature-4" className="flex items-center space-x-3">
            <i className="fas fa-heart text-primary text-xl" />
            <span className="text-gray-700">Customer Satisfaction</span>
          </div>
        </div>
        <div id="about-cta" className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="btn-primary px-8 py-3 rounded-lg text-white bg-primary hover:opacity-90 transition-all duration-300 text-center"
          >
            Contact Us
          </a>
          <a
            href="#categories"
            className="btn-secondary px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-center"
          >
            View Collections
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default About;
