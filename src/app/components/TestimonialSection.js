"use client";

import Image from "next/image";

const TestimonialsSection = () => {
  return (
<section id="testimonials" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">
      What Our Clients Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div
        id="testimonial-card-1"
        className="testimonial-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex items-center mb-4">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
            alt="Client 1"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg">Sarah Johnson</h3>
            <p className="text-gray-600 text-sm">Dubai Marina</p>
          </div>
        </div>
        <div className="mb-4">
          <i className="fas fa-quote-left text-2xl text-primary mb-2" />
          <p className="text-gray-600">
            The quality of their curtains is exceptional. The team was
            professional and helped me choose the perfect style for my living
            room.
          </p>
        </div>
        <div className="flex text-yellow-400">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
      </div>
      {/* Testimonial 2 */}
      <div
        id="testimonial-card-2"
        className="testimonial-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex items-center mb-4">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            alt="Client 2"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg">Michael Chen</h3>
            <p className="text-gray-600 text-sm">Palm Jumeirah</p>
          </div>
        </div>
        <div className="mb-4">
          <i className="fas fa-quote-left text-2xl text-primary mb-2" />
          <p className="text-gray-600">
            Excellent service from start to finish. The custom-made curtains
            perfectly match our interior design theme.
          </p>
        </div>
        <div className="flex text-yellow-400">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
      </div>
      {/* Testimonial 3 */}
      <div
        id="testimonial-card-3"
        className="testimonial-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex items-center mb-4">
          <img
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
            alt="Client 3"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg">Emma Thompson</h3>
            <p className="text-gray-600 text-sm">Business Bay</p>
          </div>
        </div>
        <div className="mb-4">
          <i className="fas fa-quote-left text-2xl text-primary mb-2" />
          <p className="text-gray-600">
            I'm impressed with their attention to detail and the installation
            service. Would highly recommend!
          </p>
        </div>
        <div className="flex text-yellow-400">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default TestimonialsSection;