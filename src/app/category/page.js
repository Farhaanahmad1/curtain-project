"use client";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
// Sample product data with tags
const products = [
  { id: 1, title: "Luxury Living Room Curtain", price: 750, category: "living-room", image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg", tag: "Sale" },
  { id: 2, title: "Elegant Bedroom Curtain", price: 850, category: "bedroom", image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg", tag: "New" },
  { id: 3, title: "Modern Luxury Curtain", price: 1200, category: "luxury", image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg", tag: "Popular" },
  { id: 4, title: "Office Space Curtain", price: 650, category: "office-hotel", image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg", tag: "Sale" },
  { id: 5, title: "Custom Made Designer Curtain", price: 950, category: "custom-made", image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg", tag: "Sale" },
  { id: 6, title: "Accessory Set for Curtains", price: 300, category: "accessories", image: "https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "New" },
  { id: 7, title: "Silk Window Panels", price: 810, category: "living-room", image: "https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "Sale" },
  { id: 8, title: "Elegant Sheer Curtains", price: 920, category: "bedroom", image: "https://images.pexels.com/photos/2029663/pexels-photo-2029663.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "New" },
  { id: 9, title: "Plush Velvet Drapery", price: 1450, category: "luxury", image: "https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "Popular" },
  { id: 10, title: "Minimalist Office Shades", price: 695, category: "office-hotel", image: "https://images.pexels.com/photos/1701408/pexels-photo-1701408.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "Sale" },
  { id: 11, title: "Boho Tassel Window Covers", price: 1100, category: "custom-made", image: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "Sale" },
  { id: 12, title: "Premium Curtain Tiebacks", price: 350, category: "accessories", image: "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "New" },
];


export default function CategoryDetail() {
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({ priceRange: null, category: null, searchQuery: "" });
  const [cartOpen, setCartOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const [products, setProducts] = useState([
    { id: 1, title: "Luxury Living Room Curtain", price: 750, category: "living-room", image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg", tag: "Sale" },
    { id: 2, title: "Elegant Bedroom Curtain", price: 850, category: "bedroom", image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg", tag: "New" },
    { id: 3, title: "Modern Luxury Curtain", price: 1200, category: "luxury", image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg", tag: "Popular" },
    { id: 4, title: "Office Space Curtain", price: 650, category: "office-hotel", image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg", tag: "Sale" },
    { id: 5, title: "Custom Made Designer Curtain", price: 950, category: "custom-made", image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg", tag: "Sale" },
    { id: 6, title: "Accessory Set for Curtains", price: 300, category: "accessories", image: "https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "New" },
    { id: 7, title: "Silk Window Panels", price: 810, category: "living-room", image: "https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "Sale" },
    { id: 8, title: "Elegant Sheer Curtains", price: 920, category: "bedroom", image: "https://images.pexels.com/photos/2029663/pexels-photo-2029663.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "New" },
    { id: 9, title: "Plush Velvet Drapery", price: 1450, category: "luxury", image: "https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "Popular" },
    { id: 10, title: "Minimalist Office Shades", price: 695, category: "office-hotel", image: "https://images.pexels.com/photos/1701408/pexels-photo-1701408.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "Sale" },
    { id: 11, title: "Boho Tassel Window Covers", price: 1100, category: "custom-made", image: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "Sale" },
    { id: 12, title: "Premium Curtain Tiebacks", price: 350, category: "accessories", image: "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=400", tag: "New" },
  ]); // Store editable products
  const [admin, setAdmin] = useState(false); // Check if user is admin
  const [editProduct, setEditProduct] = useState(null); // Stores product being edited
  const [modalOpen, setModalOpen] = useState(false);



  useEffect(() => {
    // Check if user is admin from JWT token in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
        if (decoded.role === "admin") {
          setAdmin(true);
        }
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  // Open edit modal with selected product
  const handleEdit = (product) => {
    setEditProduct(product);
    setModalOpen(true);
  };

  // Handle form input change
  const handleChange = (e) => {
    setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updatedProducts = products.map((p) =>
      p.id === editProduct.id ? editProduct : p
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts)); // Save to localStorage
    setModalOpen(false);
  };


  useEffect(() => {
    // Load products from local storage on mount
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);



    // Load cart from local storage on mount
    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(storedCart);
    }, []);

      // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);



  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };
  
  const handleUpdateQuantity = (index, change) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };
  
  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  

  // Filter products based on search + selected filters
  const filteredProducts = products.filter((product) => {
    const matchesCategory = filters.category ? product.category === filters.category : true;
    const matchesPrice =
      filters.priceRange === "500-1000"
        ? product.price >= 500 && product.price <= 1000
        : filters.priceRange === "0-500"
        ? product.price >= 0 && product.price <= 500
        : true;
    const matchesSearch = product.title?.toLowerCase().includes(filters.searchQuery.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  });

  const cartTableRef = useRef(null);

  useEffect(() => {
    if (cart.length >= 4) {
      cartTableRef.current?.scrollTo({ top: cartTableRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [cart]);


  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    setAddedToCart((prev) => ({ ...prev, [product.id]: true }));

    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

    // Pagination logic
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    
    // Calculate total pages
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    // Get current page products
    const startIndex = (currentPage - 1) * productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);
    
    // Handle Page Change
    const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    };
    


  return (
    <div className="sm:flex min-h-screen bg-[#FFF8F0] p-6 pt-20">
      {/* Sidebar */}
      <aside className="sm:w-1/4 bg-[#FFF8F0] p-6 rounded-lg shadow-lg w-full">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 border rounded"
            value={filters.searchQuery}
            onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
          />
        </div>

        {/* Price Filter */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Price Range</h3>
          <label className="flex items-center">
            <input type="radio" name="price" className="mr-2" onChange={() => handleFilterChange("priceRange", "0-500")} />
            $0 - $500
          </label>
          <label className="flex items-center mt-2">
            <input type="radio" name="price" className="mr-2" onChange={() => handleFilterChange("priceRange", "500-1000")} />
            $500 - $1000
          </label>
          <label className="flex items-center mt-2">
            <input type="radio" name="price" className="mr-2" onChange={() => handleFilterChange("priceRange", null)} />
            All Prices
          </label>
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Category</h3>
          {["living-room", "bedroom", "luxury", "office-hotel", "custom-made", "accessories"].map((cat) => (
            <label key={cat} className="flex items-center mt-2">
              <input type="radio" name="category" className="mr-2" onChange={() => handleFilterChange("category", cat)} />
              {cat.replace("-", " ")}
            </label>
          ))}
          <label className="flex items-center mt-2">
            <input type="radio" name="category" className="mr-2" onChange={() => handleFilterChange("category", null)} />
            All Categories
          </label>
        </div>
      </aside>

      {/* Main Content */}
      <main className="sm:w-3/4 p-6 pl-0 pr-0 relative w-full">
        {/* Cart Icon */}
        <div className="absolute top-6 right-0">
          <button className="relative p-2 bg-gray-800 text-white rounded-full" onClick={() => setCartOpen(true)}>
            <FaShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        <h1 className="text-3xl font-bold text-left sm:text-center mb-6">Curtain Collection</h1>

        <div className="grid sm:grid-cols-3 gap-6 sm:pl-6">
  {paginatedProducts.length > 0 ? (
    paginatedProducts.map((product) => (
      <div key={product.id} className="bg-white p-4 rounded-lg shadow-md relative">


            {/* Admin Edit Button */}
            {admin && (
              <button
                onClick={() => handleEdit(product)}
                className="absolute top-6 left-6 bg-blue-500 text-white p-2 rounded"
              >
                <FaEdit />
              </button>
            )}


    {!admin ? (
    <Link href={`/product/${product.id}`} className="block">
      {/* Product Content (Image, Title, Price) */}
      <div>

        {/* Product Tag */}
        {product.tag && (
          <span className={`absolute top-6 right-6 px-3 py-1 text-white text-sm font-semibold rounded-full ${product.tag === "Sale" ? "bg-red-500" : product.tag === "New" ? "bg-green-500" : "bg-blue-500"}`}>
            {product.tag}
          </span>
        )}

        {/* Product Image */}
        <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded" />

        {/* Product Details */}
        <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-600">${product.price}</p>
        </div>
    </Link>
    ) : (
       // Show Only for Admin Without Link
       <>
       {/* Product Tag */}
       {product.tag && (
         <span className={`absolute top-6 right-6 px-3 py-1 text-white text-sm font-semibold rounded-full ${product.tag === "Sale" ? "bg-red-500" : product.tag === "New" ? "bg-green-500" : "bg-blue-500"}`}>
           {product.tag}
         </span>
       )}
 
       {/* Product Image */}
       <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded" />
 
       {/* Product Details */}
       <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
       <p className="text-gray-600">${product.price}</p>
     </>
   )}

        <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded w-full" onClick={() => handleAddToCart(product)}>
          {addedToCart[product.id] ? "Successfully Added..." : "Add to Cart"}
        </button>
      </div>
    ))
  ) : (
    <p className="text-center col-span-3 text-gray-500">No products found.</p>
  )}
</div>
{/* Pagination Controls */}
{totalPages > 1 && (
  <div className="flex justify-center items-center mt-6 space-x-4">
    <button 
      className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-700"}`}
      disabled={currentPage === 1}
      onClick={() => handlePageChange(currentPage - 1)}
    >
      Previous
    </button>
    <span className="font-semibold text-lg">{currentPage} / {totalPages}</span>
    <button 
      className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-700"}`}
      disabled={currentPage === totalPages}
      onClick={() => handlePageChange(currentPage + 1)}
    >
      Next
    </button>
  </div>
)}

      </main>

      

      {cartOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
    <div className="bg-white p-4 md:p-6 rounded-lg w-full max-w-lg md:max-w-3xl overflow-y-auto shadow-lg relative">
      
      {/* Close (X) Icon */}
      <button 
        className="absolute top-2 right-4 text-gray-500 hover:text-red-500 text-3xl md:text-4xl"
        onClick={() => setCartOpen(false)}
      >
        ×
      </button>

      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
        Your Cart ({cart.length} items)
      </h2>

      {cart.length > 0 ? (
        <div ref={cartTableRef} className="max-h-60 md:max-h-72 overflow-y-auto">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Item</th>
                <th className="text-center p-2">Price</th>
                <th className="text-center p-2">Qty</th>
                <th className="text-right p-2">Total</th>
                <th className="text-right p-2">Action</th>
              </tr>
            </thead>
            
            <tbody>
              {cart.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="flex items-center gap-2 p-2">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-12 h-12 md:w-16 md:h-16 rounded"
                    />
<p className="font-semibold text-xs md:text-sm hidden md:block">{item.title}</p>
                  </td>
                  <td className="text-center p-2">${item.price}</td>
                  <td className="text-center p-2">
                    <div className="flex items-center justify-center border rounded">
                      <button 
                        onClick={() => handleUpdateQuantity(index, -1)} 
                        className="px-2 py-1 text-xs md:text-sm"
                      >
                        -
                      </button>
                      <span className="px-2 md:px-3">{item.quantity}</span>
                      <button 
                        onClick={() => handleUpdateQuantity(index, 1)} 
                        className="px-2 py-1 text-xs md:text-sm"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="text-right p-2">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="text-right p-2">
                    {/* Remove Button */}
                    <button 
                      onClick={() => handleRemoveFromCart(index)} 
                      className="bg-red-500 text-white px-2 py-1 rounded text-xs md:text-sm hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}

      <div className="mt-4 text-right text-sm md:text-base">
        <p className="font-semibold">Subtotal: ${calculateSubtotal().toFixed(2)}</p>
        <p className="text-gray-600">Sales Tax: ${(calculateSubtotal() * 0.01).toFixed(2)}</p>
        <p className="text-lg md:text-xl font-bold">Grand Total: ${(calculateSubtotal() * 1.01).toFixed(2)}</p>
      </div>

      <button 
        onClick={() => window.location.href = '/checkout'} 
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded w-full text-sm md:text-base"
      >
        Check Out 
      </button>
    </div>
  </div>
)}


  {/* Edit Modal */}
  {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Category</h2>

            <label className="block mb-2">Image URL:</label>
            <input
              type="text"
              name="image"
              value={editProduct.image}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
            />

            <label className="block mb-2">Title:</label>
            <input
              type="text"
              name="title"
              value={editProduct.title}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
            />

            <label className="block mb-2">Price:</label>
            <input
              type="number"
              name="price"
              value={editProduct.price}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
            />
            

            <div className="flex justify-end space-x-2">
              <button onClick={() => setModalOpen(false)} className="bg-gray-400 text-white px-4 py-2 rounded">
                Cancel
              </button>
              <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}
