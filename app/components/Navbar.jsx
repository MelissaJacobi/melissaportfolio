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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Ensure cleanup
    };
  }, [isOpen]); 

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className="sticky top-0 z-[9997] flex justify-center items-center h-[4rem] px-4 lg:px-[7rem] border-y-solid border-y-[0.7px] border-y-black bg-[var(--secondary)] transition-colors duration-300 backdrop-blur-sm"
        style={{ height: "4rem" }}
      >
        {/* Links visible on large screens */}
        <div className="hidden lg:flex space-x-4">
          <button className="font-quicksand px-4 py-2 m-2 w-[7rem] font-normal text-lg duration-300 hover:translate-y-1 opacity-100">
            <Link href="/">Home</Link>
          </button>
          <button className="font-quicksand px-4 py-2 m-2 w-[7rem] font-normal text-lg duration-300 hover:translate-y-1 opacity-100">
            <Link href="/design">Design</Link>
          </button>
          <button className="font-quicksand px-4 py-2 m-2 w-[7rem] font-normal text-lg duration-300 hover:translate-y-1 opacity-100">
            <Link href="/uiux">UI/UX</Link>
          </button>
          {/*}
          <button className="font-quicksand px-4 py-2 m-2 w-[7rem] text-white font-normal text-lg duration-300 hover:translate-y-1 opacity-100">
            <Link href="/video">Video</Link>
          </button>
          */}
          <button className="font-quicksand px-4 py-2 m-2 w-[7rem] font-normal text-lg duration-300 hover:translate-y-1 opacity-100">
            <Link href="/contact">Contact</Link>
          </button>
          <button className="font-quicksand px-4 py-2 m-2 w-[7rem] font-normal text-lg duration-300 hover:translate-y-1 opacity-100">
            <Link href="/about">About</Link>
          </button>
        </div>
      </nav>  

      {/* Logo */}
      <div className="fixed top-0 left-0 p-4 z-[9999]">
        <Link href="/">
          <img
            src="/logowhite.png"
            alt="Logo"
            className="w-[7rem] h-auto transition-all duration-300 cursor-pointer"
          />
        </Link>
      </div>

      
      {/* Hamburger Menu (Visible on medium screens and below) */}
      <div
        className="fixed top-0 right-0 p-4 z-[9999] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-8 h-[0.25rem] rounded-full mb-1 transition-all duration-300 bg-white border-[0.7px] border-black border-solid ${isOpen ? "rotate-45 translate-y-2" : "hover:translate-x-1"}`}
        ></div>
        <div
          className={`w-8 h-[0.25rem] rounded-full mb-1 transition-all duration-300 bg-white border-[0.7px] border-black border-solid ${isOpen ? "opacity-0" : "hover:scale-125"}`}
        ></div>
        <div
          className={`w-8 h-[0.25rem] rounded-full mb-1 transition-all duration-300 bg-white border-[0.7px] border-black border-solid
          ${isOpen ? "-rotate-45 -translate-y-2" : "hover:translate-x-1"}`}
        ></div>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-30 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } pt-[5rem] z-[9998] w-screen h-full bg-[#425cc7]/85 backdrop-blur-[0.3rem] shadow-lg p-10 flex flex-col space-y-4`}
      >
        {[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
          { href: "/about", label: "About" },
          { href: "/design", label: "Design" },
          { href: "/uiux", label: "UI/UX" },
        ].map((item) => (
          <button
            key={item.href}
            onClick={() => setIsOpen(false)}
            className="text-white font-quicksand text-lg text-left hover:translate-x-1 transition"
          >
            <Link href={item.href}>{item.label}</Link>
          </button>
        ))}
      </div>

    </>
  );
};

export default Navbar;
