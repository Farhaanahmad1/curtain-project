"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Living Room", slug: "living-room", image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg" },
  { name: "Bedroom", slug: "bedroom", image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg" },
  { name: "Luxury", slug: "luxury", image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg" },
  { name: "Office & Hotel", slug: "office-hotel", image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg" },
  { name: "Custom Made", slug: "custom-made", image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg" },
  { name: "Accessories", slug: "accessories", image: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg" },
];

const Categories = () => {
  return (
    <section id="categories" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Curtain Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category`} passHref>
              <div className="cursor-pointer category-card group">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" />
                  <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
