"use client";
import styles from "./gatsby.module.css";

import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";


export default function Gatsby({ params }) {
  const projectName = params?.projectName || "";

    const router = useRouter();
  
    const projects = [
      
      { name: "Elfheim", url: "/elfheim" },
      { name: "Driftstone", url: "/driftstone" },
    ];
  
    const currentIndex = projects.findIndex(
      (p) => p.name.toLowerCase() === projectName.toLowerCase()
    );
  
    // If project is not found, default to first project to avoid errors
    const nextProject = projects[(currentIndex + 1) % projects.length] || projects[0];
  


  return (
    <div className={styles.container}>
      {/* Main Section */}
      <div className={`${styles.mainSection} ${styles.mainSectionLg}`}>
        <div className={styles.mainImageContainer}>
          <img
            src="/gatsby-glamour-sm.jpg"
            alt="Elfheim"
            className={styles.mainImage}
          />
        </div>
        <div className={`${styles.textContainer}${styles.textContainer}`}>
            <img
                src="/gatsby-glamour-lg.jpg"
                alt="Elfheim"
                className={styles.mainImage}
            />
        </div>
      </div>
    <div>
        <h2 className={`${styles.title} ${styles.overview}`}>Overview</h2>
        <p className={`${styles.paragraph}`}>
        Gatsby Glamour is a 1920s fashion exhibit at the National Canadian Museum of History. 
        The goal of this project was to advertise the exhibit with two posters: one banner poster and one digital. 
        The design objective was to showcase the range of the exhibit by combining black-and-white photography with 
        the Art Deco style that was popular at the time. The chosen fonts also reflect the Art Deco aesthetic. 
        The layout draws inspiration from many 1920s posters, which often featured a large central image with a border.
        </p>

    </div>

      <div className={styles.container}>
        <div className={`${styles.mainSection} ${styles.mainSectionLg}`}>
        <div className={styles.mainImageContainer}>
          <img
            src="/gatsby-mockup.jpg"
            alt="Elfheim"
            className={styles.mockupImage}
          />
        </div>
        <div className={styles.textContainer}>
          <img
              src="/gatsby-mockup-sm.jpg"
              alt="Elfheim"
              className={`${styles.mockupImage} ${styles.shortMockup}`}
            />
        </div>
        </div>
      </div>
      <div className={styles.upNextSection}>
        <button className="p-2 flex items-center justify-center gap-2 z-10 w-[9rem] mt-[4.25rem] mb-[3.25rem] bg-white text-black rounded-[3rem] font-quicksand font-bold duration-300 hover:translate-y-1 transition group" onClick={() => router.push(nextProject.url)}>
          Next Project 
          <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>   
    </div>
  );
}
