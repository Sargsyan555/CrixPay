'use client'
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex z-20 items-center fixed top-0 left-0 w-full shadow-md h-[96px]">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <h3 className="font-inter font-medium text-[40px] uppercase text-white">
            LOGO
          </h3>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <Link href="/about" className="hover:text-gray-400 font-roboto text-[18px] text-white">About</Link>
          <Link href="/solutions" className="hover:text-gray-400 font-roboto text-[18px] text-white">Solutions</Link>
          <Link href="/services" className="hover:text-gray-400 font-roboto text-[18px] text-white">Services</Link>
          <Link href="/partners" className="hover:text-gray-400 font-roboto text-[18px] text-white">Partners</Link>
          <Link href="/contact_us" className="hover:text-gray-400 font-roboto text-[18px] text-white">Contact us</Link>
          <Link href="/peview" className="hover:text-gray-400 font-roboto text-[18px] text-white">Review</Link>
          <Link href="/faq" className="hover:text-gray-400 font-roboto text-[18px] text-white">FAQ</Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Absolute Full-Width Overlay) */}
      {isMenuOpen && (
        <div className="absolute top-[96px] left-0 w-full h-[400px] bg-[#07182CB2] bg-opacity-90 p-4 flex flex-col items-center space-y-6">
          <Link href="/about" className="block hover:text-gray-400 font-roboto text-[18px] text-white">About</Link>
          <Link href="/solutions" className="block hover:text-gray-400 font-roboto text-[18px] text-white">Solutions</Link>
          <Link href="/services" className="block hover:text-gray-400 font-roboto text-[18px] text-white">Services</Link>
          <Link href="/partners" className="block hover:text-gray-400 font-roboto text-[18px] text-white">Partners</Link>
          <Link href="/contact_us" className="block hover:text-gray-400 font-roboto text-[18px] text-white">Contact us</Link>
          <Link href="/peview" className="block hover:text-gray-400 font-roboto text-[18px] text-white">Review</Link>
          <Link href="/faq" className="block hover:text-gray-400 font-roboto text-[18px] text-white">FAQ</Link>
        </div>
      )}
    </header>
  );
}
