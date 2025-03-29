"use client";
import { useState, useRef } from "react";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
import NextProjectButton from "../components/NextProjectButton";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function drill({ params }) {

  const router = useRouter();

  const projectName = params?.projectName || "";

  const projects = [
    { name: "QuackAttack", url: "/quackattack", image: "/quackattack.png" },
  ];
  const currentIndex = projects.findIndex((p) => p.name.toLowerCase() === projectName.toLowerCase());
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
      <NextProjectButton nextProjectUrl={nextProject.url} image={nextProject.image} /> 
    </div>
  );
}
