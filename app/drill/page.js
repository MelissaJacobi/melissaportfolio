"use client";
import { useState, useRef } from "react";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";

import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function drill({ params }) {

  const router = useRouter();

  const projectName = params?.projectName || "";

  const projects = [
    { name: "QuackAttack", url: "/quackattack" }
  ];

  const currentIndex = projects.findIndex(
    (p) => p.name.toLowerCase() === projectName.toLowerCase()
  );

  const nextProject = projects[(currentIndex + 1) % projects.length] || projects[0];



  return (
    <div className="p-[1.5rem] flex flex-col items-center w-full max-w-[70rem] m-auto">
      <div className="flex justify-center gap-[2rem]">
        <div className="w-[45%]">
        <img
            src="/drill.webp"
            alt="Drill"
            className="w-full max-w-[40rem] object-cover rounded-[1rem] "
          />
        </div>
        <div className="w-[40%]">
            <h2 className="font-mitr font-semibold text-[2rem]">Overview</h2>
            <p className="font-quicksand leading-[2rem]">
            The aim of the project was to create a realistic depiction of a mechanical object in a 
            vector environment. A challange with this project was to decide
            which tools in the program would be best to solve certain "problems". Learning and creating
            new techniques was an important skill developed in this exercise.
            </p>
        </div>


      </div>
      <div >
        <button className="p-2 flex items-center justify-center gap-2 z-10 w-[9rem] mt-[4.25rem] mb-[3.25rem] bg-white text-black rounded-[3rem] font-quicksand font-bold duration-300 hover:translate-y-1 transition group" onClick={() => router.push(nextProject.url)}>
          Next Project 
          <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div> 
    </div>
  );
}
