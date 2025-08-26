import React from "react";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-gray-950/90 backdrop-blur-sm transition-all duration-300">
    <nav className="w-full max-w-7xl mx-auto flex justify-between items-center overflow-x-hidden">
      <div className="text-3xl font-bold tracking-tight animate-slideInLeft whitespace-nowrap">
        <span className="text-white">ALL</span> <span className="text-gray-400">BLACKS</span>
      </div>
      <ul className="hidden md:flex space-x-8 text-lg font-semibold overflow-x-hidden">
      <li><a href="#hero" className="text-gray-300 hover:text-white transition-colors duration-300 animate-fadeIn" style={{ animationDelay: "0.2s" }}>Home</a></li>
        <li><a href="#music" className="text-gray-300 hover:text-white transition-colors duration-300 animate-fadeIn" style={{ animationDelay: "0.2s" }}>Music</a></li>
        <li><a href="#tour" className="text-gray-300 hover:text-white transition-colors duration-300 animate-fadeIn" style={{ animationDelay: "0.4s" }}>Tour</a></li>
        <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 animate-fadeIn" style={{ animationDelay: "0.6s" }}>Contact us</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
