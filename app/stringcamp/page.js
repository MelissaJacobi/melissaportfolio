"use client";
import { useState, useRef } from "react";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import NextProjectButton from "../components/NextProjectButton";

export default function StringCamp({ params }) {
  const router = useRouter();
  const projectName = params?.projectName || "";

  const projects = [
    { name: "Gatsby", url: "/gatsby", image: "/gatsby-glamour.jpg" },
  ];
  const currentIndex = projects.findIndex((p) => p.name.toLowerCase() === projectName.toLowerCase());
  const nextProject = projects[(currentIndex + 1) % projects.length] || projects[0];

  return (
    <div className="p-6 flex flex-col items-center w-full  overflow-hidden">
      <div className="relative flex justify-center w-full max-w-[70rem]">
        <img src="RSC-header.png" className="w-full object-cover mt-24 mb-8" />
      </div>

      <div className="w-full max-w-[70rem] mt-32 flex flex-col lg:flex-row justify-between gap-6">
        <div className="w-full lg:w-[70%]">
          <h2 className="font-mitr font-semibold text-2xl">Overview</h2>
          <p className="font-quicksand leading-8">
             Reformed String Camp is a music camp dedicated to cultivating classical skill and community in a faith-based environment. 
             For this project, I designed lanyards, a program cover, and a striking poster intended to quickly capture attention while maintaining an air of refinement. 
             Elegant serif typography paired with high-contrast colors helped achieve a polished and eye-catching look. The chosen imagery—both 
             graceful and endearing—added a warm, inviting touch that reflects the camp’s balance of musical excellence and joyful participation.
          </p>
        </div>

        <div className="w-full lg:w-[15rem] bg-[#000000] text-white p-5">
          <h2 className="font-mitr font-semibold text-2xl">My Role</h2>
          <p className="font-quicksand leading-8">Graphic Design</p>
        </div>
      </div>

      <h2 className="font-mitr font-semibold text-2xl mt-24 mb-4 text-left w-full max-w-[70rem]">Program Cover</h2>
      <div className="relative flex justify-center w-full max-w-[70rem]">
        <img src="RSC-program.png" className="w-full object-cover mb-8" />
      </div>
      <h2 className="font-mitr font-semibold text-2xl mt-24 mb-4 text-left w-full max-w-[70rem]">Lanyard</h2>
      <div className="relative flex justify-center w-full max-w-[70rem]">
        <img src="RSC-lanyard.png" className="w-full object-cover mb-8" />
      </div>

      <NextProjectButton nextProjectUrl={nextProject.url} image={nextProject.image} />
    </div>
  );
}
