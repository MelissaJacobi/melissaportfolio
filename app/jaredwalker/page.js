"use client";
import { useState, useRef } from "react";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import NextProjectButton from "../components/NextProjectButton";

export default function jaredwalker({ params }) {
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
        <img src="jared-walker-header.png" className="w-full object-cover mt-24 mb-8" />
      </div>

      <div className="w-full max-w-[70rem] mt-32 flex flex-col lg:flex-row justify-between gap-6">
        <div className="w-full lg:w-[70%]">
          <h2 className="font-mitr font-semibold text-2xl">Overview</h2>
          <p className="font-quicksand leading-8">
             Jared Walker is a motorcycle racer. For this project, I designed a dynamic poster that captures the intensity of his racing. 
             The composite design blends two action shots of Jared with clouds, motion blur, and streaking motion lines to amplify the sense 
             of speed and adrenaline. The result is a bold, high-energy visual that feels cinematic, celebrating the thrill of the ride and the 
             athlete at its core.
          </p>
        </div>

        <div className="w-full lg:w-[15rem] bg-[#2c2c2c] text-white p-5">
          <h2 className="font-mitr font-semibold text-2xl">My Role</h2>
          <p className="font-quicksand leading-8">Graphic Design</p>
        </div>
      </div>

      <h2 className="font-mitr font-semibold text-2xl mt-24 mb-4 text-left w-full max-w-[70rem]">Full poster</h2>
      <div className="relative flex justify-center w-full max-w-[70rem]">
        <img src="full-poster.png" className="w-full object-cover mb-8" />
      </div>
      <NextProjectButton nextProjectUrl={nextProject.url} image={nextProject.image} />
    </div>
  );
}
