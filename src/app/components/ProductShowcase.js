"use client";

import Image from "next/image";

const ProductShowcase = () => {
  return (
<section id="product-showcase" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">
      Our Premium Collections
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Product Card 1 */}
      <div
        id="showcase-card-1"
        className="showcase-card group bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg"
            alt="Classic Living Room Curtains"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            Featured
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            Classic Living Room Collection
          </h3>
          <p className="text-gray-600 mb-4">
            Elegant drapes with premium fabric and classic patterns
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-primary">$199.99</span>
            <button
              id="view-details-1"
              className="btn-primary px-4 py-2 rounded-lg text-white hover:opacity-90 transition-all duration-300"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      {/* Product Card 2 */}
      <div
        id="showcase-card-2"
        className="showcase-card group bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg"
            alt="Modern Bedroom Curtains"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            New Arrival
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Modern Bedroom Series</h3>
          <p className="text-gray-600 mb-4">
            Contemporary designs with blackout features
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-primary">$159.99</span>
            <button
              id="view-details-2"
              className="btn-primary px-4 py-2 rounded-lg text-white hover:opacity-90 transition-all duration-300"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      {/* Product Card 3 */}
      <div
        id="showcase-card-3"
        className="showcase-card group bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg"
            alt="Luxury Hotel Curtains"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
            Best Seller
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            Luxury Hotel Collection
          </h3>
          <p className="text-gray-600 mb-4">
            Premium quality curtains for luxury spaces
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-primary">$249.99</span>
            <button
              id="view-details-3"
              className="btn-primary px-4 py-2 rounded-lg text-white hover:opacity-90 transition-all duration-300"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default ProductShowcase;
