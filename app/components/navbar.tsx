"use client";
import { useState , useEffect} from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-4xl flex items-center justify-between px-6 py-3 rounded-full shadow-lg z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#121212]/90 backdrop-blur-md border border-white/10"
          : "bg-[#121212]/80 backdrop-blur-none border border-transparent"
      }`}
    >
      {/* Left section - Profile */}
      <div className="flex items-center space-x-3">
        <Image
          src="/home/s-abas.png" // place your image in public/profile.jpg
          alt="Profile"
          width={40}
          height={40}
          className=" "
        />
        <div>
          <h2 className="text-sm font-semibold">Muhammed Abbas</h2>
          <p className="text-[12px] text-gray-400">CEO Multi Techno</p>
        </div>
      </div>

      {/* Middle section - Links (Desktop only) */}
      <div className="hidden md:flex space-x-6 text-sm">
        <a href="#about" className="hover:text-blue-400 transition">About</a>
        <a href="#service" className="hover:text-blue-400 transition">Service</a>
        <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        <a href="#pricing" className="hover:text-blue-400 transition">Pricing</a>
      </div>

      {/* Right section - Button (Desktop only) */}
      <div className="hidden md:block">
        <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-400 to-blue-600 text-black font-medium px-4 py-2 rounded-full hover:scale-105 transition">
          <span>Start A Business</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 text-gray-300 hover:text-white transition"
      >
        {menuOpen ? <X className="w-6 h-6 cursor-pointer" /> : <Menu className="w-6 h-6 cursor-pointer" />}
      </button>

      {/* Mobile dropdown with animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-16 left-0 w-full bg-[#1c1c1c] rounded-xl  py-4 px-6 flex flex-col items-center space-y-4 md:hidden shadow-lg z-50"
          >
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#service" className="hover:text-blue-400 transition">Service</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#pricing" className="hover:text-blue-400 transition">Pricing</a>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-400 to-blue-600 text-black font-medium px-4 py-2 rounded-full hover:scale-105 transition">
              <span>Start A Business</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
