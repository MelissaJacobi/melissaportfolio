"use client";
import { useState, useRef } from "react";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import NextProjectButton from "../components/NextProjectButton";

export default function aquahorse({ params }) {
  const router = useRouter();
  const projectName = params?.projectName || "";

  const projects = [
    { name: "thewerx", url: "/thewerx", image: "/werx-cover.png" },
  ];
  const currentIndex = projects.findIndex((p) => p.name.toLowerCase() === projectName.toLowerCase());
  const nextProject = projects[(currentIndex + 1) % projects.length] || projects[0];

  return (
    <div className="p-6 flex flex-col items-center w-full  overflow-hidden">
      <div className="relative flex justify-center w-full max-w-[70rem]">
        <img src="aqua-horse-header.png" className="w-full object-cover mt-24 mb-8" />
      </div>

      <div className="w-full max-w-[70rem] mt-32 flex flex-col lg:flex-row justify-between gap-6">
        <div className="w-full lg:w-[70%]">
          <h2 className="font-mitr font-semibold text-2xl">Overview</h2>
          <p className="font-quicksand leading-8">
             Aqua Horse designs innovative water treadmills that help horses recover, train, and thrive. For this project, I created a bold banner 
             and sleek business cards that reflect the brand’s focus on strength, motion, and care. Inspired by the fluidity of water and the power 
             of equine movement, the visuals combine clean lines with dynamic energy. The result is a look that feels professional yet 
             approachable, mirroring the balance of science and compassion at the heart of Aqua Horse’s mission.
          </p>
        </div>

        <div className="w-full lg:w-[15rem] bg-[#1f4a8c] text-white p-5">
          <h2 className="font-mitr font-semibold text-2xl">My Role</h2>
          <p className="font-quicksand leading-8">Graphic Design</p>
          <p className="font-quicksand leading-6 text-sm pt-8">
            This project was created during my internship at Flying Horse Design Studio
          </p>
        </div>
      </div>

      <h2 className="font-mitr font-semibold text-2xl mt-24 mb-4 text-left w-full max-w-[70rem]">Banner</h2>
      <div className="relative flex justify-center w-full max-w-[70rem]">
        <img src="aqua-horse-banner.png" className="w-full object-cover mb-8" />
      </div>
      <h2 className="font-mitr font-semibold text-2xl mt-24 mb-4 text-left w-full max-w-[70rem]">Business Cards</h2>
      <div className="relative flex justify-center w-full max-w-[70rem]">
        <img src="aqua-horse-business-cards.png" className="w-full object-cover mb-8" />
      </div>

      <NextProjectButton nextProjectUrl={nextProject.url} image={nextProject.image} />
    </div>
  );
}
