"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Function to check token and update state
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };

    checkAuth(); // Initial check

    // Listen for custom login/logout events
    const handleAuthChange = () => checkAuth();
    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);

    // Dispatch custom event to update other components
    window.dispatchEvent(new Event("authChange"));

    router.push("/"); // Redirect to home
  };

  return (
    <nav className="navbar w-full fixed top-0 z-[1200] shadow-md bg-white">
      <div className="mx-auto flex max-w-8xl items-center h-16 justify-between sm:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href={`/`} className="text-2xl font-bold flex items-center">
            <img
              src="https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=1"
              alt="Logo"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span>Classic Curtains</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/category" className="nav-link">Category</Link>
          <Link href="/" className="nav-link">About</Link>
          <Link href="/" className="nav-link">Contact</Link>
          <Link href="/" className="nav-link">Blog</Link>

          {/* Login/Logout Button */}
          {isAuthenticated ? (
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
              Logout
            </button>
          ) : (
            <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <Link href="/" className="block py-2 w-full text-left">Home</Link>
            <Link href="/category" className="block py-2 w-full text-left">Category</Link>
            <Link href="/about" className="block py-2 w-full text-left">About</Link>
            <Link href="/contact" className="block py-2 w-full text-left">Contact</Link>
            <Link href="/blog" className="block py-2 w-full text-left">Blog</Link>

            {/* Mobile Login/Logout Button */}
            {isAuthenticated ? (
              <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded w-full">
                Logout
              </button>
            ) : (
              <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
