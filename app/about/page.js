"use client";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function About() {


  return (
    <>
     <div className="p-[1.5rem] flex flex-col items-center w-full max-w-[70rem] m-auto mt-8">
           <div className="flex justify-center gap-[2rem]">
             <div className="">
             <img
                 src="/about.jpg"
                 alt="me, my violin, and my bird"
                 className="h-full max-w-[30rem] object-cover rounded-[1rem] "
               />
             </div>
             <div className="w-[60%]">
                 <h2 className="font-mitr font-semibold text-[2rem]">Hi! I'm Melissa</h2>
                 <p className="font-quicksand leading-[2rem]">
                 A passionate graphic designer with a love for creativity, music, and the beauty of nature. 
                 With a background in digital development and design, I bring a strong combination of artistic expression and 
                 technical expertise to each of my projects. When I'm not designing, you'll often
                  find me playing the violin, arranging music on the piano, or birdwatching.
                Whether it's in the form of bold graphics or delicate details, my goal is
                 to create designs that resonate with people and bring a sense of harmony, 
                 drawing inspiration from  the music I play and the beauty I see in nature.

                 </p>
             </div>
     
     
           </div>


            <div>
            <Link href="/contact">
                <button className="p-2 flex items-center justify-center gap-2 z-10 w-[9rem] mt-[4.25rem] mb-[3.25rem] bg-white text-black rounded-[3rem] font-quicksand font-bold duration-300 hover:translate-y-1 transition group">
                Get in touch!
                <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </Link>
            </div>

         </div>
    </>
  );
}
