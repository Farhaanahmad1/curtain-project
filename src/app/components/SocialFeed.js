"use client";

import Image from "next/image";

const SocialFeed = () => {
  return (
<section id="social-feed" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">
      Follow Us on Social Media
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Instagram Feed */}
      <div
        id="instagram-feed"
        className="social-card bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-center mb-6">
            <i className="fab fa-instagram text-3xl text-pink-500 mr-3" />
            <h3 className="text-xl font-semibold">Instagram</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg"
              alt="Instagram Post 1"
              className="w-full h-32 object-cover rounded-lg hover:opacity-75 transition-opacity"
            />
            <img
              src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg"
              alt="Instagram Post 2"
              className="w-full h-32 object-cover rounded-lg hover:opacity-75 transition-opacity"
            />
            <img
              src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg"
              alt="Instagram Post 3"
              className="w-full h-32 object-cover rounded-lg hover:opacity-75 transition-opacity"
            />
            <img
              src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg"
              alt="Instagram Post 4"
              className="w-full h-32 object-cover rounded-lg hover:opacity-75 transition-opacity"
            />
          </div>
          <a
            href="#"
            className="block text-center mt-6 text-pink-500 hover:text-pink-600 transition-colors"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
      {/* Facebook Feed */}
      <div
        id="facebook-feed"
        className="social-card bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-center mb-6">
            <i className="fab fa-facebook text-3xl text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Facebook</h3>
          </div>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <p className="text-gray-600 mb-2">
                Check out our latest collection of luxury curtains! Perfect for
                modern homes.
              </p>
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                alt="Facebook Post"
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <div className="flex items-center text-gray-500 text-sm">
                <i className="far fa-heart mr-2" />
                245
                <i className="far fa-comment ml-4 mr-2" />
                18
              </div>
            </div>
          </div>
          <a
            href="#"
            className="block text-center mt-6 text-blue-600 hover:text-blue-700 transition-colors"
          >
            Follow Us on Facebook
          </a>
        </div>
      </div>
      {/* Pinterest Feed */}
      <div
        id="pinterest-feed"
        className="social-card bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="p-6">
          <div className="flex items-center mb-6">
            <i className="fab fa-pinterest text-3xl text-red-600 mr-3" />
            <h3 className="text-xl font-semibold">Pinterest</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg"
                alt="Pinterest Pin 1"
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <i className="fas fa-thumbtack text-white text-xl" />
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
                alt="Pinterest Pin 2"
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <i className="fas fa-thumbtack text-white text-xl" />
              </div>
            </div>
          </div>
          <a
            href="#"
            className="block text-center mt-6 text-red-600 hover:text-red-700 transition-colors"
          >
            Follow Us on Pinterest
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


  );
};

export default SocialFeed;