"use client"; // Required if using Next.js App Router

import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Footer = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
<footer className="footer w-full bg-white py-12 px-4 sm:px-8">
  <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Company Info */}
    <div id="footer-company" className="space-y-4">
      <h3 id="footer-company-title" className="text-xl font-bold mb-4">
        Classic Home Curtains
      </h3>
      <p id="footer-company-desc" className="text-gray-600">
        Transform your home with our premium collection of elegant curtains and
        exceptional service.
      </p>
      <div id="footer-social" className="flex space-x-4">
        <a
          href="#"
          className="text-gray-400 hover:text-primary transition-colors"
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-primary transition-colors"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-primary transition-colors"
        >
          <i className="fab fa-pinterest-p" />
        </a>
      </div>
    </div>
    {/* Quick Links */}
    <div id="footer-links" className="space-y-4">
      <h3 id="footer-links-title" className="text-xl font-bold mb-4">
        Quick Links
      </h3>
      <ul id="footer-links-list" className="space-y-2">
        <li>
          <a
            href="#home"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#categories"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Categories
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
    {/* Contact Info */}
    <div id="footer-contact" className="space-y-4">
      <h3 id="footer-contact-title" className="text-xl font-bold mb-4">
        Contact Us
      </h3>
      <div id="footer-contact-info" className="space-y-2">
        <p className="flex items-center text-gray-600">
          <i className="fas fa-phone mr-2" /> +1 234 567 890
        </p>
        <p className="flex items-center text-gray-600">
          <i className="fas fa-envelope mr-2" /> info@classichomecurtains.com
        </p>
        <p className="flex items-center text-gray-600">
          <i className="fas fa-map-marker-alt mr-2" /> 123 Curtain Street,
          Dubai, UAE
        </p>
      </div>
    </div>
    {/* Newsletter */}
    <div id="footer-newsletter" className="space-y-4">
      <h3 id="footer-newsletter-title" className="text-xl font-bold mb-4">
        Newsletter
      </h3>
      <p id="footer-newsletter-desc" className="text-gray-600">
        Subscribe to receive updates and exclusive offers.
      </p>
      <form id="newsletter-form" className="space-y-2">
        <input
          type="email"
          id="newsletter-email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
        />
        <button
          type="submit"
          className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
  {/* Copyright */}
  <div
    id="footer-copyright"
    className="mt-8 pt-8 border-t text-center text-gray-600"
  >
    <p>© 2024 Classic Home Curtains. All rights reserved.</p>
  </div>
</footer>




  );
};

export default Footer;
