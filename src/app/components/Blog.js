"use client";

import Image from "next/image";

const BlogSection = () => {
  return (
<section id="blog" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">
      Curtain Inspiration &amp; Tips
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Blog Post 1 */}
      <div
        id="blog-card-1"
        className="blog-card group bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg"
            alt="Choosing Perfect Curtains"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
            Tips
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            How to Choose the Perfect Curtains
          </h3>
          <p className="text-gray-600 mb-4">
            Learn about fabrics, patterns, and sizes to make the best choice for
            your home.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              <i className="fas fa-calendar-alt mr-2" />
              June 15, 2023
            </span>
            <a href="#" className="text-primary hover:underline">
              Read More
            </a>
          </div>
        </div>
      </div>
      {/* Blog Post 2 */}
      <div
        id="blog-card-2"
        className="blog-card group bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg"
            alt="2023 Curtain Trends"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            Trends
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            2023 Curtain Design Trends
          </h3>
          <p className="text-gray-600 mb-4">
            Discover the latest trends in curtain designs and home décor styles.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              <i className="fas fa-calendar-alt mr-2" />
              July 1, 2023
            </span>
            <a href="#" className="text-primary hover:underline">
              Read More
            </a>
          </div>
        </div>
      </div>
      {/* Blog Post 3 */}
      <div
        id="blog-card-3"
        className="blog-card group bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg"
            alt="Curtain Care Guide"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            Guide
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            Ultimate Curtain Care Guide
          </h3>
          <p className="text-gray-600 mb-4">
            Essential tips for maintaining and cleaning your curtains properly.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              <i className="fas fa-calendar-alt mr-2" />
              July 15, 2023
            </span>
            <a href="#" className="text-primary hover:underline">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default BlogSection;
