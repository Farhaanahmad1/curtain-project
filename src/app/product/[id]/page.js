"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const { id} = useParams();


  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
      const foundProduct = storedProducts.find((item) => item.id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) return <p className="text-center mt-10">Product not found!</p>;

  

  return (
    <div className="h-screen bg-[#FFF8F0]">
    <div className="relative max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg z-50 mt-24" >
      <h1 className="text-3xl font-bold text-left sm:text-center">Related Products</h1>
      <img src={product.image} alt={product.title} className="w-full h-60 object-cover rounded-lg" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600 text-lg mt-2">${product.price}</p>
      <p className="text-gray-500 mt-4">
        {product.description || "This is a premium quality curtain perfect for your space."}
      </p>
    </div>
    <div
          id="hero-bg-pattern"
          className="absolute  top-0 left-0 w-full h-full opacity-5 pattern-grid mt-20"
        > </div>
    </div>

  );
};

export default ProductDetail;
