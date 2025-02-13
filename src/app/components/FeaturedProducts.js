"use client";

import Image from "next/image";

const FeaturedProducts = () => {
  return (
<section id="featured-products" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Product 1 */}
      <div
        id="product-card-1"
        className="product-card group bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg"
            alt="Luxury Velvet Curtains"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            Sale
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Luxury Velvet Curtains</h3>
          <p className="text-gray-600 mb-4">
            Premium quality velvet curtains with elegant draping
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-primary">$129.99</span>
            <button
              id="add-to-cart-1"
              className="btn-primary px-4 py-2 rounded-lg text-white hover:opacity-90 transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* Product 2 */}
      <div
        id="product-card-2"
        className="product-card group bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg"
            alt="Sheer Linen Curtains"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            New
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Sheer Linen Curtains</h3>
          <p className="text-gray-600 mb-4">
            Light and airy linen curtains for a natural look
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-primary">$89.99</span>
            <button
              id="add-to-cart-2"
              className="btn-primary px-4 py-2 rounded-lg text-white hover:opacity-90 transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* Product 3 */}
      <div
        id="product-card-3"
        className="product-card group bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg"
            alt="Blackout Curtains"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
            Popular
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Blackout Curtains</h3>
          <p className="text-gray-600 mb-4">
            100% light blocking curtains for perfect sleep
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-primary">$149.99</span>
            <button
              id="add-to-cart-3"
              className="btn-primary px-4 py-2 rounded-lg text-white hover:opacity-90 transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default FeaturedProducts;
