"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 620; // Set scroll threshold
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-10 flex justify-center flex-wrap px-[7rem] bg-black transition-colors duration-300">
        <button className="font-quicksand px-4 py-2 m-4 w-[7rem] rounded-full bg-gradient-to-r from-[rgb(251,83,115)] to-[rgb(255,164,0)] text-black font-semibold duration-300 hover:translate-y-1">
          <Link href="/graphics">Graphics</Link>
        </button>
        <button className="font-quicksand px-4 py-2 m-4 w-[7rem] rounded-full bg-gradient-to-r from-[rgb(251,83,115)] to-[rgb(255,164,0)] text-black font-semibold duration-300 hover:translate-y-1">
          <Link href="/print">Print</Link>
        </button>
        <button className="font-quicksand px-4 py-2 m-4 w-[7rem] rounded-full bg-gradient-to-r from-[rgb(251,83,115)] to-[rgb(255,164,0)] text-black font-semibold duration-300 hover:translate-y-1">
          <Link href="/branding">Branding</Link>
        </button>
        <button className="font-quicksand px-4 py-2 m-4 w-[7rem] rounded-full bg-gradient-to-r from-[rgb(251,83,115)] to-[rgb(255,164,0)] text-black font-semibold duration-300 hover:translate-y-1">
          <Link href="/video">Video</Link>
        </button>
      </nav>

      {/* Logo */}
      <div className="fixed top-0 left-0 p-4 z-30">
        <img
          src={isScrolled ? "/logowhite.png" : "/logoblack.svg"}
          alt="Logo"
          className="w-24 h-auto transition-all duration-300"
        />
      </div>

      {/* Hamburger Menu */}
      <div
        className="fixed top-0 right-0 p-4 z-40 flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-8 h-[0.25rem] rounded-full mb-1 transition-all duration-300 ${
            isScrolled ? "bg-white" : "bg-black"
          } ${isOpen ? "rotate-45 translate-y-2" : "hover:translate-x-1"}`}
        ></div>
        <div
          className={`w-8 h-[0.25rem] rounded-full mb-1 transition-all duration-300 ${
            isScrolled ? "bg-white" : "bg-black"
          } ${isOpen ? "opacity-0" : "hover:scale-125"}`}
        ></div>
        <div
          className={`w-8 h-[0.25rem] rounded-full mb-1 transition-all duration-300 ${
            isScrolled ? "bg-white" : "bg-black"
          } ${isOpen ? "-rotate-45 -translate-y-2" : "hover:translate-x-1"}`}
        ></div>
      </div>

      {/* Menu Overlay */}
      {isOpen && (
        <div
          className={`fixed top-0 right-0 bottom-0 z-30 transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-start items-center p-4 bg-[#161616] w-[15rem] h-[15rem] rounded-b-[4rem] rounded-l-[4rem] shadow-lg">
            <button className="text-white p-2 mt-10 font-quicksand duration-300 hover:translate-x-1">
              <Link href="/">Home</Link>
            </button>
            <button className="text-white p-2 font-quicksand duration-300 hover:translate-x-1">
              <Link href="/about">About</Link>
            </button>
            <button className="text-white p-2 font-quicksand duration-300 hover:translate-x-1">
              <Link href="/contact">Contact</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
