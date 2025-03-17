"use client";
import { useState, useRef } from "react";
import styles from "./tutorial.module.css";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";

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

  return (
    <div className={styles.container}>
      {/* Main Section */}
      <div className={styles.mainSection}>
        <div className={styles.mainImageContainer}>
          {/* Video Wrapper for Relative Positioning */}
          <div className={styles.videoWrapper}>
            <video ref={videoRef} className={styles.mainImage} autoPlay loop muted={isMuted}>
              <source src="/Melissa_Jacobi.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Mute Button */}
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
    </div>
  );
}
