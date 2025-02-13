"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation


export default function Checkout() {
  const router = useRouter()
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const calculateSubtotal = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
<div className="min-h-screen bg-[#FFF8F0] p-4 md:p-6 pt-20">
  {!isSubmitted && (
    <h1 className="text-3xl md:text-4xl font-semibold text-center border-b pb-2">
      Your Cart ({cart.length} {cart.length === 1 ? "item" : "items"})
    </h1>
  )}

  {isSubmitted ? (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md text-center mt-24">
      <h2 className="text-2xl font-bold text-green-600">🎉 Purchase Successful!</h2>
      <p className="text-gray-600 mt-2">Thank you, {formData.name}, for your order.</p>
      <p className="text-gray-500">
        A confirmation email has been sent to <strong>{formData.email}</strong>.
      </p>
      {/* Back to Home Button */}
      <button
        onClick={() => router.push("/")} 
        className="mt-4 bg-blue-500 text-white py-2 px-6 rounded font-semibold hover:bg-blue-600 transition duration-300"
      >
        Back to Home
      </button>
    </div>
  ) : (
    <div className="max-w-4xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow-md">
      {/* Responsive Cart Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse mb-6">
          <thead>
            <tr className="border-b font-semibold text-sm md:text-base">
              <th className="text-left pl-4 md:pl-6">Item</th>
              <th className="text-center p-2">Price</th>
              <th className="text-center p-2">Quantity</th>
              <th className="text-right p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="flex items-center gap-2 p-2">
                  <img src={item.image} alt={item.title} className="w-12 h-12 md:w-16 md:h-16 rounded" />
                  <p className="font-semibold text-sm md:text-base hidden sm:block">{item.title}</p>
                </td>
                <td className="text-center p-2 text-sm md:text-base">${item.price}</td>
                <td className="text-center p-2 text-sm md:text-base">{item.quantity}</td>
                <td className="text-right p-2 text-sm md:text-base">${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Summary */}
      <div className="text-right mb-6 text-sm md:text-base">
        <p className="font-semibold">Subtotal: ${calculateSubtotal().toFixed(2)}</p>
        <p className="text-gray-600">Sales Tax: ${(calculateSubtotal() * 0.01).toFixed(2)}</p>
        <p className="text-xl text-red-500 font-bold">Total: ${(calculateSubtotal() * 1.01).toFixed(2)}</p>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full border p-2 rounded text-sm md:text-base"
          />
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full border p-2 rounded text-sm md:text-base"
          />
        </div>
        <div>
          <label className="block font-semibold">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="w-full border p-2 rounded text-sm md:text-base"
          />
        </div>
        <div>
          <label className="block font-semibold">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full border p-2 rounded text-sm md:text-base"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded font-semibold hover:bg-green-600 transition duration-300"
        >
          Buy Now
        </button>
      </form>
    </div>
  )}
</div>



  );
}
