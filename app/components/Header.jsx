"use client"; // This marks the file as a Client Component

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll event to update scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine the header text based on the pathname
  const headerText =
    pathname === '/'
      ? "Hi! I'm Melissa Jacobi"
      : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  // Enhanced parallax styles with greater separation between layers
  const parallaxStyles = [
    { transform: `translateY(calc(${-scrollY * 0.05}px + 4px))` }, // 1.svg (farthest)
    { transform: `translateY(calc(${-scrollY * 0.15}px + 30px))` }, // 2.svg
    { transform: `translateY(calc(${-scrollY * 0.3}px + 190px))` }, // 3.svg
    { transform: `translateY(calc(${-scrollY * 0.5}px + 400px))` }, // 4.svg (closest)
  ];

  return (
    <header>
      <div className="relative w-full h-screen overflow-hidden bg-white">
        {/* Parallax Images */}
        {[1, 2, 3, 4].map((num, index) => (
          <img
            key={num}
            src={`/${num}.svg`}
            alt={`Parallax Layer ${num}`}
            className={`absolute w-full`}
            style={{
              ...parallaxStyles[index],
              bottom: 0, // Position at the bottom of the container
              left: 0,   // Position at the left of the container
            }}
          />
        ))}

        {/* Header Text */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="font-quicksand text-4xl font-bold text-black text-center px-4">
            {headerText}
          </h1>
        </div>
      </div>
    </header>
  );
}
