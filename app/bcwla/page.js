"use client";
import { useState, useRef } from "react";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import NextProjectButton from "../components/NextProjectButton";

export default function bcwla({ params }) {
  const router = useRouter();
  const projectName = params?.projectName || "";

    const projects = [
    { name: "ReachOut", url: "/reachout", image: "/reachout-next.jpg" },
    ];
  const currentIndex = projects.findIndex((p) => p.name.toLowerCase() === projectName.toLowerCase());
  const nextProject = projects[(currentIndex + 1) % projects.length] || projects[0];


  return (
    <div className="p-[1.5Rem] flex flex-col items-center w-full">
      <div className="relative flex justify-center w-[70rem]">
        <img src="BCWLA-header.png" className="w-full object-cover mt-[6rem] mb-[2rem]">
        </img>
      </div>
       <div  className="w-full max-w-[70rem] mt-[8rem] flex justify-between">
          <div className="w-[70%]">
            <h2  className="font-mitr font-semibold text-[2rem]">Overview</h2>
            <p className="font-quicksand leading-[2rem]">
            BCWLA is a hub for British Columbia’s wholesale lumber professionals, fostering connection, 
            collaboration, and industry growth. Their website brings members together through a clean, approachable
             design that highlights the strength of the community and the natural beauty of BC. Inspired by the textures 
             and tones of the forest, the site reflects the industry’s deep roots in nature while offering modern functionality 
             for events, resources, and networking. It’s a digital space where tradition meets progress—grounded in wood, 
             and built for the people who move it.
            </p>
          </div>
          <div className="flex w-[15rem] bg-[#415850] text-white p-5">
            <div>
              <h2  className="font-mitr font-semibold text-[2rem]">My Role</h2>
              <p className="font-quicksand leading-[2rem]">
                UI/UX
              </p>
              <p className="font-quicksand leading-[1.5rem] text-sm pt-8">
                This project was created during my internship at Flying Horse Design Studio
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center w-[70rem]">
           <div className="w-[50%]">
                <img src="bcwla-home-events.png" className="w-full h-[25rem] object-cover mt-[8rem]">
                </img>
            </div>
            <div className="w-[50%]">
                <img src="bcwla-contact-about.png" className="w-full h-[25rem] object-cover mt-[8rem] mb-[2rem]">
                </img>
            </div> 
        </div>
        <p className="font-quicksand leading-[2rem] w-[70rem]"><strong>Disclaimer:</strong> The final version of the website may differ from the design shown here due to client preferences and revisions made during the development process.</p>
      <NextProjectButton nextProjectUrl={nextProject.url} image={nextProject.image} />
    </div>
  );
}
