"use client";
import { useState, useRef } from "react";
import styles from "./tutorial.module.css";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
import NextProjectButton from "../components/NextProjectButton";

export default function tutorial({ params }) {
  const { projectName } = params;
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const projects = [
    { name: "Violin", url: "/violin", image: "/violin-tut.webp" },
  ];
  const currentIndex = projects.findIndex((p) => p.name.toLowerCase() === (projectName?.toLowerCase() || ""));
  const nextProject = projects[(currentIndex + 1) % projects.length] || projects[0];



  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <div className={styles.mainImageContainer}>
          <div className={styles.videoWrapper}>
            <video ref={videoRef} className={`${styles.mainImage}  border-solid border-4 border-[#3a8690]`} autoPlay loop muted={isMuted}>
              <source src="/finch.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <button className={styles.muteButton} onClick={toggleMute}>
              {isMuted ? <IoVolumeMute size={24} /> : <IoVolumeHigh size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.textContainer}>
        <h2 className="font-mitr font-semibold text-[2rem] mt-[2rem]">Overview</h2>
        <p className={styles.paragraph}>
          This tutorial shows the viewer how to hand feed a zebra finch. It goes over why you would need to, what materials you need, and step
          by step instructions on how to complete the task. A challenge faced when creating this was ensuring that the instructions were clear
          and that those who followed them would not harm their finch. To do this, imagery was used wherever possible to illustrate the tasks
          that the viewer had to take. For example, when using the syringe to feed the chick, the video not only shows the correct angle at which to 
          hold the syringe, but also the correct speed at which to feed the chick.
        </p>
      </div>


      <h2 className="font-mitr font-semibold text-[2rem] mt-[2rem] ml-8">Created Assets</h2>
      <div className="w-full max-w-[70rem] mt-8 flex justify-center">
        <img
          src="/bird.svg"
          alt="normal zebra finch"
          className="w-full h-[15rem] rounded-lg mb-4"
        />
        <img
          src="/forest.svg"
          alt='forest background'
          className="w-full h-[15rem] rounded-lg mb-4"
        />
        <img
          src="/gross.svg"
          alt="disgusted person"
          className="w-full h-[15rem] rounded-lg mb-4"
        />
        <img
          src="/baby.svg"
          alt="baby finch"
          className="w-full h-[15rem] rounded-lg mb-4"
        />
      </div>
      
      <NextProjectButton nextProjectUrl={nextProject.url} image={nextProject.image} /> 
    </div>
  );
}
