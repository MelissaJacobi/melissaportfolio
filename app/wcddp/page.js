"use client";
import { useState, useRef } from "react";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import NextProjectButton from "../components/NextProjectButton";

export default function wcddp({ params }) {
  const router = useRouter();
  const projectName = params?.projectName || "";

  const projects = [
    { name: "JaredWalker", url: "/jaredwalker", image: "/jared-walker-cover.png" },
  ];
  const currentIndex = projects.findIndex((p) => p.name.toLowerCase() === projectName.toLowerCase());
  const nextProject = projects[(currentIndex + 1) % projects.length] || projects[0];

  return (
    <div className="p-6 flex flex-col items-center w-full  overflow-hidden">
      <div className="relative flex justify-center w-full max-w-[70rem]">
        <img src="wcddp-header.png" className="w-full object-cover mt-24 mb-8" />
      </div>

      <div className="w-full max-w-[70rem] mt-32 flex flex-col lg:flex-row justify-between gap-6">
        <div className="w-full lg:w-[70%]">
          <h2 className="font-mitr font-semibold text-2xl">Overview</h2>
          <p className="font-quicksand leading-8">
             The West Coast Dressage Development Program (WCDDP) is a showcase of emerging talent in the equestrian world. 
             My role was to design a poster and social media graphics that felt fresh and distinctive while staying true to 
             the organization’s existing brand. Using glowing overlays and soft gradients, I brought energy and individuality to the 
             visuals, while a consistent colour palette ensured everything felt cohesive. The result is a set of promotional materials 
             that stand out — yet still feel right at home within the brand.
          </p>
        </div>

        <div className="w-full lg:w-[15rem] bg-[#03434f] text-white p-5">
          <h2 className="font-mitr font-semibold text-2xl">My Role</h2>
          <p className="font-quicksand leading-8">Graphic Design</p>
          <p className="font-quicksand leading-6 text-sm pt-8">
            This project was created during my internship at Flying Horse Design Studio
          </p>
        </div>
      </div>

      <h2 className="font-mitr font-semibold text-2xl mt-24 mb-4 text-left w-full max-w-[70rem]">Poster</h2>
      <div className="relative flex justify-center w-full max-w-[70rem]">
        <img src="wcddp-poster.png" className="w-full object-cover mb-8" />
      </div>

      <h2 className="font-mitr font-semibold text-2xl mt-24 mb-4 text-left w-full max-w-[70rem]">Social Media Posts</h2>
      <div className="w-full max-w-[70rem] grid grid-cols-1 sm:grid-cols-2 gap-4">
        <img src="/social_graphic_01.jpg" alt="Social Media Post 1" className="w-full" />
        <img src="/social_graphic_02.jpg" alt="Social Media Post 2" className="w-full" />
        <img src="/social_graphic_03.jpg" alt="Social Media Post 3" className="w-full" />
        <img src="/social_graphic_04.jpg" alt="Social Media Post 4" className="w-full" />
      </div>

      <NextProjectButton nextProjectUrl={nextProject.url} image={nextProject.image} />
    </div>
  );
}
