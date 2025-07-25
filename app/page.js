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
      title: "DRIFTSTONE",
      image1: "/can-mockup-blue.jpg",
      image2: "/can-mockup-coral.jpg",
      link: "/driftstone",
      bgColor: "bg-[#C68E37]"
    },
    {
      id: 2,
      title: "ELFHEIM",
      image1: "/elfheim.jpg",
      image2: "/elfheim-mockup-2.jpg",
      link: "/elfheim",
      bgColor: "bg-[#819D50]"
    },
    {
      id: 3,
      title: "GATSBYGLAMOUR",
      image1: "/gatsby-glamour.jpg",
      image2: "/gatsby-mockup-sm.jpg",
      link: "/gatsby",
      bgColor: "bg-[#6C9AB4]"
    },
  ];
  
  

  return (
    <div className="flex flex-col items-center gap-[17rem] mb-[5rem]">
      <div className="w-full h-[5rem]"></div>
      {projects.map((project, index) => (
        <div key={project.id} className="relative w-full max-w-6xl flex flex-col items-center gap-6">
          {/* Background Highlight */}
          <div
            className={`absolute top-1/2 left-1/2 w-[70%] h-[100%] bg-[var(--secondary)] opacity-75 transform -translate-x-1/2 -translate-y-1/2`}
          />
        
          {/* Project Title */}
          <div
            className="absolute top-[-10rem] text-[var(--secondary)] left-[5rem] leading-tight opacity-75 z-0 
  text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] font-mitr font-bold drop-shadow-lg"
          >
            {project.title}
          </div>
        
          {/* Image Container */}
          <div className="relative w-full flex items-center justify-center gap-6">
            <img
              src={project.image1}
              alt={`Project ${project.id} Image 1`}
              className="w-[90%] sm:w-[45%] shadow-lg"
              style={{
                transform: `translateY(${-(scrollY * 0.1 - index * 50)}px)`,
              }}
            />
        
            <img
              src={project.image2}
              alt={`Project ${project.id} Image 2`}
              className="hidden sm:block w-[45%] shadow-xl"
              style={{
                transform: `translateY(${-(scrollY * 0.15 - index * 50)}px)`,
              }}
            />
        
            {/* Button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Link href={project.link}>
                <button className="w-[10rem] border-black border-solid border-[0.7px] bg-white text-black py-2 shadow-xl rounded-[3rem] font-quicksand font-bold duration-300 hover:translate-y-1 transition m-3 mt-[8rem]">
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
