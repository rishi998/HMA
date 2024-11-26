import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-teal-600 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-white text-2xl font-extrabold tracking-wide">
          Downtown Latvia
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-white text-lg font-medium">
          <a href="/" className="hover:text-gray-200 transition duration-300">
            Home
          </a>
          <a href="/about" className="hover:text-gray-200 transition duration-300">
            About
          </a>
          <a href="/blog" className="hover:text-gray-200 transition duration-300">
            Blog
          </a>
          <a href="/contact" className="hover:text-gray-200 transition duration-300">
            Contact
          </a>
        </div>

        {/* Register Button */}
        <div>
          <a
            href="/login"
            className="bg-black text-white px-5 py-2 text-lg rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg transition duration-300"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;