"use client"; // This marks the file as a Client Component

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

export default function Header() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const parallaxPixelAdjustments = {
    desktop: [-50, -50, -50, -10], 
    tablet: [-20, -20, -50, 20],
    mobile: [-70, -70, -80, 20],
  };

  const parallaxSpeeds = [0.05, 0.15, 0.2, 0.3];

  if (pathname !== "/") {
    return null;
  }

  return (
    <header>
      <div className="relative w-full h-[calc(100vh-5rem)] overflow-hidden bg-white">
        {/* Parallax Images (1-4) */}
        {[1, 2, 3, 4].map((num, index) => (
          <img
            key={num}
            src={`/${num}.svg`}
            alt={`Parallax Layer ${num}`}
            className="absolute w-[110%]"
            style={{
              transform: `translateY(calc(${-scrollY * parallaxSpeeds[index]}px + ${parallaxPixelAdjustments[screenSize][index]}px))`,
              bottom: 0,
              left: 0,
            }}
          />
        ))}

        {/* Header Text & Foreground Image */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center relative">
          {/* Header Text */}
          <h1 className="font-Mitr text-[4rem] w-full text-center font-bold text-white p-2 bg-black/40 backdrop-blur-[0.2rem] translate-y-10 relative z-10">
            MELISSA JACOBI
          </h1>

          {/* 5.svg - Foreground Layer (Above H1) */}
          <img
            src="/5.svg"
            alt="Parallax Layer 5"
            className="absolute w-[110%] z-20"
            style={{
              transform: `translateY(calc(${-scrollY * 0.4}px + 100px))`,
              bottom: 0,
              left: 0,
            }}
          />
        </div>
      </div>
    </header>
  );
}
