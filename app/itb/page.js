"use client";
import { useState, useRef } from "react";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import NextProjectButton from "../components/NextProjectButton";
import Link from "next/link";

export default function itb({ params }) {
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
        <img src="itb-header.png" className="w-full object-cover mt-24 mb-8" />
      </div>
<a
  href="https://itb-brochure.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="w-[10rem] border-black border-solid border-[0.7px] bg-white text-black py-2 shadow-xl rounded-[3rem] font-quicksand font-bold duration-300 hover:translate-y-1 transition m-1 mt-[8rem]">
    View Flipbook
  </button>
</a>

      <div className="w-full max-w-[70rem] mt-32 flex flex-col lg:flex-row justify-between gap-6">
        <div className="w-full lg:w-[70%]">
          <h2 className="font-mitr font-semibold text-2xl">Overview</h2>
          <p className="font-quicksand leading-8">
             Intercontinental Truck Body specializes in custom truck bodies and a wide range of parts for heavy-duty vehicles. 
             For this project, I designed a modern, industrial-style magazine showcasing the key products available in their parts 
             department. I photographed and edited the parts myself to ensure consistency and clarity across the layout, giving the 
             publication a polished and professional feel. I also transformed the magazine into an interactive online flipbook using HTML, 
             CSS, JavaScript, and Turn.js—complete with a progress bar to help users track their place as they browse. The result is a seamless 
             blend of print and digital that elevates both the brand and the user experience.
          </p>
        </div>

        <div className="w-full lg:w-[15rem] bg-[#000c64] text-white p-5">
          <h2 className="font-mitr font-semibold text-2xl">My Role</h2>
          <p className="font-quicksand leading-8">Graphic Design</p>
          <p className="font-quicksand leading-6 text-sm pt-8">
            This project was created during my time at Intercontinental Truck Body.
          </p>
        </div>
      </div>

      <h2 className="font-mitr font-semibold text-2xl mt-24 mb-4 text-left w-full max-w-[70rem]">Spreads</h2>
      <div className="w-full max-w-[70rem] grid grid-cols-1 sm:grid-cols-2 gap-4">
        <img src="/itb-spread-1.png" alt="Social Media Post 1" className="w-full" />
        <img src="/itb-spread-2.png" alt="Social Media Post 2" className="w-full" />
        <img src="/itb-spread-3.png" alt="Social Media Post 3" className="w-full" />
        <img src="/itb-spread-5.png" alt="Social Media Post 4" className="w-full" />
      </div>
      <NextProjectButton nextProjectUrl={nextProject.url} image={nextProject.image} />
    </div>
  );
}
