"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";

export default function NextProjectButton({ nextProjectUrl, image }) {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex items-center justify-center mt-[8rem] w-[15rem]">
      <img
        src="/daisy.svg"
        alt="Big Leaf"
        className={`z-20 absolute -top-[2rem] left-[1rem] transition-transform duration-500 translate-x-[2.5rem] translate-y-[8.5rem] z-1 ${hovered ? "scale-75 rotate-0" : "scale-0 rotate-[-30deg]"}`}
        width={50}
        height={50}
      />
      <img
        src="/sunflower.svg"
        alt="Small Leaf"
        className={`z-20 absolute -top-[1.5rem] right-[1rem] transition-transform duration-500 translate-x-[-3rem] translate-y-[8.5rem] ${hovered ? "scale-100 rotate-0" : "scale-0 rotate-[30deg]"}`}
        width={40}
        height={40}
      />
      <img
        src="/big-flower.svg"
        alt="Big Leaf"
        className={`z-20 absolute -top-[2rem] left-[1rem] transition-transform duration-500 translate-x-[5rem] translate-y-[8.5rem] ${hovered ? "scale-100 rotate-0" : "scale-0 rotate-[-30deg]"}`}
        width={50}
        height={50}
      />

      <button
        className="p-2 flex border-solid border-black border-2 items-center justify-center gap-2 w-[9rem] mt-[8rem] mb-[3.25rem] bg-white text-black rounded-[3rem] font-quicksand font-bold duration-300 hover:rounded-t-none hover:rounded-b-[1rem] hover:translate-y-1 transition-all group z-30"
        onClick={() => router.push(nextProjectUrl)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Next Project
        <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      {image && (
        <div
          className={`absolute top-[-2rem] left-[100%] ml-[1rem] w-[12rem] h-[14rem] transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={image}
            alt="Project Preview"
            className="absolute w-[85%] h-[85%] object-cover rounded-[1rem] translate-y-[-0.5rem] translate-x-[-13.5rem]"
          />
          <img
            src="/window-frame.svg"
            alt="Project Frame"
            className="absolute w-full h-full object-cover rounded-[1rem] translate-y-[-2rem] translate-x-[-14.5rem]"
          />
        </div>
      )}
    </div>
  );
}