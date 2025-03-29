"use client";
import { useState, useRef } from "react";
import styles from "./tutorial.module.css";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
import NextProjectButton from "../components/NextProjectButton";

export default function violin({ params }) {
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
    { name: "driftstone", url: "/driftstone", image: "/driftstone-hero.jpg" },
  ];
  const currentIndex = projects.findIndex((p) => p.name.toLowerCase() === (projectName?.toLowerCase() || ""));
  const nextProject = projects[(currentIndex + 1) % projects.length] || projects[0];



  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <div className={styles.mainImageContainer}>
          <div className={styles.videoWrapper}>
            <video ref={videoRef} className={`${styles.mainImage}  border-solid border-4 border-[#7e5531]`} autoPlay loop muted={isMuted}>
              <source src="/Melissa_Jacobi.mp4" type="video/mp4" />
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
      
      <NextProjectButton nextProjectUrl={nextProject.url} image={nextProject.image} /> 
    </div>
  );
}
