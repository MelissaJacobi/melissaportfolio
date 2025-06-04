"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
    desktop: [-10, -10, -10, 10],
    tablet: [-20, -20, -50, 20],
    mobile: [-70, -70, -80, -50],
  };

  const parallaxSpeeds = [0.05, 0.15, 0.2, 0.3];

  if (pathname !== "/") {
    return null;
  }

  return (
    <header>
      <div className="relative w-full h-[calc(100vh-5rem)] overflow-hidden bg-white">
        {/* Parallax Images */}
        {screenSize === "mobile" ? (
          <img
            src="/4.svg"
            alt="Mobile Parallax"
            className="absolute w-[200%] scale-[2]"
            style={{
              transform: `scale(1.4) translateY(calc(${-scrollY * parallaxSpeeds[3]}px + ${parallaxPixelAdjustments.mobile[3]}px))`,
              bottom: 0,
              left: 0,
            }}
          />
        ) : (
          [1, 2, 3, 4].map((num, index) => (
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
          ))
        )}


        {/* Foreground Layer 5 */}
        {screenSize !== "mobile" && (
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
        )}
      </div>
    </header>
  );
}
