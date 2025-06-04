"use client";
import { useState, useRef } from "react";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import NextProjectButton from "../components/NextProjectButton";

export default function quackattack({ params }) {
  const router = useRouter();
  const projectName = params?.projectName || "";

  const projects = [
    { name: "Hivefive", url: "/hivefive", image: "/hivefive.jpg" },
  ];
  const currentIndex = projects.findIndex((p) => p.name.toLowerCase() === projectName.toLowerCase());
  const nextProject = projects[(currentIndex + 1) % projects.length] || projects[0];


  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const [hovered, setHovered] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const characters = [
    { name: "Duck Level 1", role: "Protagonist", image: "/duck-1.png" },
    { name: "Duck Level 2", role: "Protagonist", image: "/duck-2.png" },
    { name: "Duck Level 3", role: "Protagonist", image: "/duck-3.png" },
    { name: "Rooster", role: "Enemy", image: "/rooster.png" },
    { name: "Mole", role: "Enemy", image: "/mole.png" },
    { name: "Chuck", role: "Enemy", image: "/Boy.png" },
    { name: "Chef", role: "Boss", image: "/Chef.png" },
    { name: "Raven", role: "Shopkeep", image: "/Crow.png" },
    { name: "Owl", role: "Mentor", image: "/Owl.png" },
  ];

  return (
    <div className="p-[1.5Rem] flex flex-col items-center w-full">
      <div className="relative flex justify-center w-[70rem]">
        <video ref={videoRef} className="w-full object-cover mt-[6rem] mb-[2rem]" autoPlay loop muted={isMuted}>
          <source src="/qa-promo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className="absolute bottom-[35px] left-[5px] bg-black/60 border-none text-white p-[10px] rounded-full cursor-pointer flex items-center justify-center transition duration-300 ease-in-out hover:bg-black/50" onClick={toggleMute}>
          {isMuted ? <IoVolumeMute size={24} /> : <IoVolumeHigh size={24} />}
        </button>
      </div>
       <div  className="w-full max-w-[70rem] mt-[8rem] flex justify-between">
          <div className="w-[60%]">
            <h2  className="font-mitr font-semibold text-[2rem]">Overview</h2>
            <p className="font-quicksand leading-[2rem]">
            QuackAttack is a metroidvania all about saving the 
            farm from certain doom and emerging as the ultimate hero! Dive into a captivating 
            platform-scrolling adventure that will push you to your limits and keep you
            on the edge of your seat. As our courageous duck protagonist, you'll navigate through a 
            charming yet perilous world filled with enemies lurking around every corner. But fear not,
             for with each victory, you'll inch closer to your ultimate goal: defeating Chef Louis, 
             the mastermind behind the farm's plight.
            </p>
          </div>
          <div className="flex  bg-[var(--secondary)] p-5">
            <div>
              <h2  className="font-mitr font-semibold text-[2rem]">My Role</h2>
              <p className="font-quicksand leading-[2rem]">
                Character design
              </p>
              <p className="font-quicksand leading-[2rem]">
                Animation
              </p>
              <p className="font-quicksand leading-[2rem]">
                User Research
              </p>

            </div>
            <img
              src="/melissa-duck.png"
              alt="role image"
              className=" h-[10rem] mx-5"
            />
          </div>
        </div>
        <div className="w-full max-w-[70rem] mt-[8rem]">
          <h2 className="font-mitr font-semibold text-[2rem]">Characters</h2>
          <div className="grid grid-cols-3 gap-4">
            {characters.map((char, index) => (
              <div key={index} className="relative group overflow-hidden bg-[var(--secondary)] h-[10rem] flex items-center justify-center">
                <img 
                  src={char.image} 
                  alt={char.name} 
                  className={`w-[8rem] h-auto object-cover transition-transform duration-300 group-hover:scale-105 ${char.name === "Chef" || char.name === "Chuck" ? "mt-[8rem]" : ""}`} 
                />
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-bold">{char.name}</h3>
                  <p className="text-white text-lg">{char.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      <div className="w-full max-w-[70rem] mt-[8rem]">
        <h2 className="font-mitr font-semibold text-[2rem]">Animation</h2>
        <p className="font-quicksand leading-[2rem]">
          Metroidvania's typically feature an array of different animations. Attacks, walk cycles, taking damage, and more.
          QuackAttack is no different. Having these animations help the player immerse themselves in the world,
          compelling them to defeat bosses, and explore. Creating these animations came with its own set of challenges:
          keeping file sizes down, learning about movement, and the time-consuming nature of frame-by-frame animation.
        </p>
        <div className="w-full flex justify-between items-center gap-[2rem] mt-8">
          <video className="object-cover  h-[15rem] w-[15rem]" autoPlay loop muted playsInline>
            <source src="/duck.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img src="/Chef-Attack.gif" alt="chef attack animation" className="object-cover h-[15rem] w-[15rem]" />
          <img src="/duck-flap.gif" alt="duck flap animation" className="object-cover h-[15rem] w-[15rem]" />
          <video className="object-cover h-[15rem] w-[15rem]" autoPlay loop muted playsInline>
            <source src="/mole.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <NextProjectButton nextProjectUrl={nextProject.url} image={nextProject.image} />
    </div>
  );
}
