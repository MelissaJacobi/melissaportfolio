"use client";
import { useRouter } from "next/navigation";
import NextProjectButton from "../components/NextProjectButton";

export default function Drill({ params }) {
  const router = useRouter();
  const projectName = params?.projectName || "";

  const projects = [
    { name: "QuackAttack", url: "/quackattack", image: "/quackattack.png" },
  ];
  const currentIndex = projects.findIndex(
    (p) => p.name.toLowerCase() === projectName.toLowerCase()
  );
  const nextProject = projects[(currentIndex + 1) % projects.length] || projects[0];

  return (
    <div className="px-6 py-8 flex flex-col items-center w-full max-w-[70rem] mx-auto">
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-[2rem] w-full">
        {/* Image Section */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <img
            src="/drill.webp"
            alt="Drill"
            className="w-full max-w-[40rem] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[40%]">
          <h2 className="font-mitr font-semibold text-[2rem] mb-4 text-center lg:text-left">
            Overview
          </h2>
          <p className="font-quicksand leading-[2rem] text-base text-center lg:text-left">
            The aim of the project was to create a realistic depiction of a mechanical object in a 
            vector environment. A challenge with this project was to decide
            which tools in the program would be best to solve certain "problems". Learning and creating
            new techniques was an important skill developed in this exercise.
          </p>
        </div>
      </div>

      {/* Next Project CTA */}
      <div className="mt-12">
        <NextProjectButton nextProjectUrl={nextProject.url} image={nextProject.image} />
      </div>
    </div>
  );
}
