"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowRight, Sparkles, } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="bg-[#F8F9FA] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center">
        <Image
          src="https://images.pexels.com/photos/7745945/pexels-photo-7745945.jpeg?auto=compress&cs=tinysrgb&w=1"
          alt="Luxury Curtains"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <motion.span 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Sparkles className="w-4 h-4" /> Premium Curtain Collection 2025
              </motion.span>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]"
                {...fadeInUp}
              >
                Transform Your Space with Timeless Curtains
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Experience the perfect blend of luxury and functionality with our bespoke curtain designs. Each piece is crafted to elevate your living spaces.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link 
                  href="/shop"
                  className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact"
                  className="bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Floating Stats */}
        <motion.div 
          className="absolute bottom-10 left-0 right-0 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
              {[
                { number: "1500+", label: "Happy Clients" },
                { number: "10+", label: "Years Experience" },
                { number: "100%", label: "Satisfaction" },
                { number: "48h", label: "Fast Installation" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Signature Collections
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Each design tells a unique story of elegance and sophistication
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Royal Velvet",
                description: "Opulent & Timeless",
                image: "https://images.pexels.com/photos/11701153/pexels-photo-11701153.jpeg?auto=compress&cs=tinysrgb&w=1200",
                price: "From $299"
              },
              {
                title: "Modern Minimalist",
                description: "Clean & Contemporary",
                image: "https://images.pexels.com/photos/30673624/pexels-photo-30673624/free-photo-of-cozy-indoor-scene-with-hanging-lamp-and-curtains.jpeg?auto=compress&cs=tinysrgb&w=1200",
                price: "From $249"
              },
              {
                title: "Coastal Dreams",
                description: "Light & Airy",
                image: "https://images.pexels.com/photos/1841149/pexels-photo-1841149.jpeg?auto=compress&cs=tinysrgb&w=1200",
                price: "From $199"
              },
              {
                title: "Urban Chic",
                description: "Bold & Modern",
                image: "https://images.pexels.com/photos/6186818/pexels-photo-6186818.jpeg?auto=compress&cs=tinysrgb&w=1200",
                price: "From $279"
              },
              {
                title: "Classic Estate",
                description: "Traditional Elegance",
                image: "https://images.pexels.com/photos/6301182/pexels-photo-6301182.jpeg?auto=compress&cs=tinysrgb&w=1200",
                price: "From $329"
              },
              {
                title: "Zen Garden",
                description: "Serene & Peaceful",
                image: "https://images.pexels.com/photos/5998127/pexels-photo-5998127.jpeg?auto=compress&cs=tinysrgb&w=1200",
                price: "From $229"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                  <div className="relative h-[400px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 p-8 w-full">
                        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                          <p className="text-gray-200 mb-4">{project.description}</p>
                          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                            {project.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7745945/pexels-photo-7745945.jpeg?auto=compress&cs=tinysrgb&w=1')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-white md:text-6xl font-bold mb-6">Client Stories</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Read what our clients have to say about their experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Anderson",
                role: "Interior Designer",
                review: "The attention to detail and quality of craftsmanship exceeded all expectations. A truly remarkable transformation of our client's space.",
                rating: 5,
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
              },
              {
                name: "Michael Chen",
                role: "Homeowner",
                review: "From consultation to installation, the entire process was seamless. The team's expertise and professionalism are unmatched.",
                rating: 5,
                image: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg"
              },
              {
                name: "Emma Thompson",
                role: "Property Developer",
                review: "We've worked with many curtain suppliers, but none match the level of quality and service we receive here. Absolutely outstanding.",
                rating: 5,
                image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 mb-8 text-lg italic">{testimonial.review}</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl text-white md:text-6xl font-bold mb-8 leading-tight">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Book a consultation with our experts and discover how we can elevate your interior with our bespoke curtain solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/shop"
                className="bg-white text-gray-900 px-10 py-5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                View Collection
              </Link>
              <Link
                href="/contact"
                className="bg-transparent text-white px-10 py-5 rounded-full font-semibold border-2 border-white hover:bg-white/10 transition-all duration-300"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}