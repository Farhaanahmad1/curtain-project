"use client";

import Image from "next/image";

const ContactUs = () => {
  return (
<section id="contact" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap -mx-4">
      {/* Contact Info */}
      <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <i className="fab fa-whatsapp text-2xl text-green-500 mr-3" />
            <a
              href="https://wa.me/1234567890"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              +1 234 567 890
            </a>
          </div>
          <div className="flex items-center">
            <i className="fas fa-phone text-2xl text-primary mr-3" />
            <a
              href="tel:1234567890"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              +1 234 567 890
            </a>
          </div>
          <div className="flex items-center">
            <i className="fas fa-envelope text-2xl text-primary mr-3" />
            <a
              href="mailto:info@classichomecurtains.com"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              info@classichomecurtains.com
            </a>
          </div>
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt text-2xl text-primary mr-3" />
            <span className="text-gray-600">
              123 Curtain Street, Dubai, UAE
            </span>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className="w-full lg:w-2/3 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
          <form id="contact-form" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                  required=""
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                  required=""
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                required=""
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors"
                required=""
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-black font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    {/* Google Maps */}
    <div className="mt-12">
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178787593566!2d55.2667!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMDAuMSJF!5e0!3m2!1sen!2sae!4v1629789876543!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default ContactUs;