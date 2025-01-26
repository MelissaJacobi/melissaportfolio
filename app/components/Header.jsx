"use client"; // This marks the file as a Client Component

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

export default function Header() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const [screenSize, setScreenSize] = useState("desktop"); // Tracks the current screen size

  // Handle scroll event to update scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update screen size based on window width
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth <= 768) {
        setScreenSize("mobile");
      } else if (window.innerWidth <= 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    updateScreenSize(); // Set the initial value
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Adjust parallax values based on screen size
  const parallaxPixelAdjustments = {
    desktop: [-50, -50, -50, 1700],
    tablet: [-200, -200, -200, 1000],
    mobile: [-150, -150, -150, 500],
  };

  const parallaxStyles = [
    { transform: `translateY(calc(${-scrollY * 0.05}px + ${parallaxPixelAdjustments[screenSize][0]}px))` },
    { transform: `translateY(calc(${-scrollY * 0.15}px + ${parallaxPixelAdjustments[screenSize][1]}px))` },
    { transform: `translateY(calc(${-scrollY * 0.2}px + ${parallaxPixelAdjustments[screenSize][2]}px))` },
    { transform: `translateY(calc(${-scrollY * 0.3}px + ${parallaxPixelAdjustments[screenSize][3]}px))` },
  ];

  // Only render the header on the home page
  if (pathname !== "/") {
    return null;
  }

  return (
    <header>
      <div className="relative w-full h-[calc(100vh-5rem)] overflow-hidden bg-white">
        {/* Parallax Images */}
        {[1, 2, 3, 4].map((num, index) => (
          <img
            key={num}
            src={`/${num}.svg`}
            alt={`Parallax Layer ${num}`}
            className={`absolute w-[110%]`}
            style={{
              ...parallaxStyles[index],
              bottom: 0, // Position at the bottom of the container
              left: 0, // Position at the left of the container
            }}
          />
        ))}

        {/* Header Text */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="font-quicksand lg:text-[4rem] sm:text-xl md:text-[3rem] font-bold text-black text-center p-8 bg-white/50 rounded-lg backdrop-blur-sm">
            Hi! I'm Melissa Jacobi
          </h1>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-0 w-full flex justify-center">
          <div className="bg-white/50 p-2  backdrop-blur-sm w-20 h-20 rounded-[3rem] flex justify-center pt-6">
            <FaChevronDown className="text-black text-[3rem] animate-bounce" />
          </div>
        </div>
      </div>
    </header>
  );
}
