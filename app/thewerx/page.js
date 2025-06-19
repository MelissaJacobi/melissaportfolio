"use client";
import { useState, useRef } from "react";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import NextProjectButton from "../components/NextProjectButton";

export default function thewerx({ params }) {
  const router = useRouter();
  const projectName = params?.projectName || "";

  const projects = [
    { name: "ITB", url: "/itb", image: "/itb-parts-cover.png" },
  ];
  const currentIndex = projects.findIndex((p) => p.name.toLowerCase() === projectName.toLowerCase());
  const nextProject = projects[(currentIndex + 1) % projects.length] || projects[0];

  return (
    <div className="p-6 flex flex-col items-center w-full  overflow-hidden">
      <div className="relative flex justify-center w-full max-w-[70rem]">
        <img src="werx-header.png" className="w-full object-cover mt-24 mb-8" />
      </div>

      <div className="w-full max-w-[70rem] mt-32 flex flex-col lg:flex-row justify-between gap-6">
        <div className="w-full lg:w-[70%]">
          <h2 className="font-mitr font-semibold text-2xl">Overview</h2>
          <p className="font-quicksand leading-8">
             The Werx is a beauty studio specializing in microblading, lash lifts, and luxury cosmetic services. 
             For this project, I designed a door sign, rack cards, and counter signage that capture the studio’s elevated experience. 
             Using a soft floral motif and refined typography, the visuals reflect The Werx’s focus on quality, care, and exceptional customer service. 
             The design blends elegance with approachability—creating a welcoming atmosphere that feels both high-end and personal.
          </p>
        </div>

        <div className="w-full lg:w-[15rem] bg-[#2c2c2c] text-white p-5">
          <h2 className="font-mitr font-semibold text-2xl">My Role</h2>
          <p className="font-quicksand leading-8">Graphic Design</p>
          <p className="font-quicksand leading-6 text-sm pt-8">
            This project was created during my internship at Flying Horse Design Studio
          </p>
        </div>
      </div>

      <h2 className="font-mitr font-semibold text-2xl mt-24 mb-4 text-left w-full max-w-[70rem]">Table Signs</h2>
      <div className="relative flex justify-center w-full max-w-[70rem]">
        <img src="werx-sign-mockup.png" className="w-full object-cover mb-8" />
      </div>
      <h2 className="font-mitr font-semibold text-2xl mt-24 mb-4 text-left w-full max-w-[70rem]">Banners</h2>
      <div className="relative flex justify-center w-full max-w-[70rem]">
        <img src="werx-banners.png" className="w-full object-cover mb-8" />
      </div>
      <h2 className="font-mitr font-semibold text-2xl mt-24 mb-4 text-left w-full max-w-[70rem]">Rack Cards</h2>
      <div className="relative flex justify-center w-full max-w-[70rem]">
        <img src="werx-cover.png" className="w-full object-cover mb-8" />
      </div>
      <NextProjectButton nextProjectUrl={nextProject.url} image={nextProject.image} />
    </div>
  );
}
