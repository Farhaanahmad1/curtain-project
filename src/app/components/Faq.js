"use client";

import Image from "next/image";

const Faq = () => {
  return (
<section
  className="relative py-16 min-w-screen animation-fade animation-delay"
  id="faq-section"
>
  <div
    className="container px-8 py-12 mx-auto sm:px-12 xl:px-5"
    id="faq-container"
  >
    <h3
      className="mt-1 text-2xl  font-bold text-left text-gray-800 sm:text-3xl md:text-4xl sm:mx-6  lg:text-5xl sm:text-center "
      id="faq-title"
    >
      Frequently Asked Questions
    </h3>
    <div
      className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
      id="faq-1"
    >
      <h3
        className="text-lg font-bold text-primary sm:text-xl md:text-2xl"
        id="faq-q1"
      >
        What types of curtains do you offer?
      </h3>
      <p
        className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal"
        id="faq-a1"
      >
        We offer a wide range of curtains including sheer, blackout, thermal,
        decorative, and custom-made curtains for all rooms.
      </p>
    </div>
    <div
      className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
      id="faq-2"
    >
      <h3
        className="text-lg font-bold text-primary sm:text-xl md:text-2xl"
        id="faq-q2"
      >
        Do you provide installation services?
      </h3>
      <p
        className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal"
        id="faq-a2"
      >
        Yes, we provide professional installation services with all our curtain
        purchases. Our expert team ensures proper fitting and hanging.
      </p>
    </div>
    <div
      className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
      id="faq-3"
    >
      <h3
        className="text-lg font-bold text-primary sm:text-xl md:text-2xl"
        id="faq-q3"
      >
        What is your return policy?
      </h3>
      <p
        className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal"
        id="faq-a3"
      >
        We offer a 30-day return policy for unused curtains in original
        packaging. Custom orders cannot be returned unless defective.
      </p>
    </div>
    <div
      className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
      id="faq-4"
    >
      <h3
        className="text-lg font-bold text-primary sm:text-xl md:text-2xl"
        id="faq-q4"
      >
        How long does shipping take?
      </h3>
      <p
        className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal"
        id="faq-a4"
      >
        Standard shipping takes 3-5 business days. Custom orders may take 2-3
        weeks for production plus shipping time.
      </p>
    </div>
  </div>
</section>


  );
};

export default Faq;