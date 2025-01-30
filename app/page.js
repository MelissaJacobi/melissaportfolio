"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      image1: "/can-mockup-blue.jpg",
      image2: "/can-mockup-coral.jpg",
      link: "/driftstone",
      bgColor: "bg-[#C68E37]", // Customize color here
    },
    {
      id: 2,
      image1: "/elfheim.jpg",
      image2: "/elfheim-mockup-2.jpg",
      link: "/elfheim",
      bgColor: "bg-[#819D50]", // Customize color here
    },
    {
      id: 3,
      image1: "/gatsby-glamour.jpg",
      image2: "/gatsby-mockup-sm.jpg",
      link: "/gatsby",
      bgColor: "bg-[#6C9AB4]", // Customize color here
    },
  ];

  return (
    <div className="flex flex-col items-center gap-[30rem] bg-black">
      <div className="w-full h-[5rem]"></div>
      {projects.map((project, index) => (
        <div key={project.id} className="relative w-full max-w-4xl flex flex-col items-center gap-6">
          {/* Background Highlight */}
          <div
            className={`absolute top-1/2 left-1/2 w-[70%] h-[100%] ${project.bgColor} opacity-75 rounded-xl transform -translate-x-1/2 -translate-y-1/2`}
          />

          {/* Image Container */}
          <div className="relative w-full flex items-center justify-center gap-6">
            {/* Background Image */}
            <img
              src={project.image1}
              alt={`Project ${project.id} Image 1`}
              className="w-[45%] rounded-xl shadow-lg"
              style={{
                transform: `translateY(${-(scrollY * 0.1 - index * 50)}px)`,
              }}
            />
            {/* Foreground Image */}
            <img
              src={project.image2}
              alt={`Project ${project.id} Image 2`}
              className="w-[45%] rounded-xl shadow-xl"
              style={{
                transform: `translateY(${-(scrollY * 0.2 - index * 50)}px)`,
              }}
            />

            {/* Button - Positioned on Top of the Images */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Link href={project.link}>
                <button className="w-[10rem] bg-white text-black py-2 shadow-xl rounded-[3rem] font-quicksand font-bold duration-300 hover:translate-y-1 transition m-3 mt-[8rem]">
                  View
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
