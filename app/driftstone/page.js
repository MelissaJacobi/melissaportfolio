"use client";
import styles from "./driftstone.module.css";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Elfheim({ params }) {
  const router = useRouter();

  // Ensure params exists and projectName is defined
  const projectName = params?.projectName || "";

  const projects = [
    { name: "Gatsby", url: "/gatsby" },
    { name: "Elfheim", url: "/elfheim" },
  ];

  const currentIndex = projects.findIndex(
    (p) => p.name.toLowerCase() === projectName.toLowerCase()
  );

  // If project is not found, default to first project to avoid errors
  const nextProject = projects[(currentIndex + 1) % projects.length] || projects[0];

  return (
    <div className={styles.container}>
      {/* Main Section */}
      <div className={`${styles.textContainer} ${styles}`}>
        <div className={`${styles.mainSection} ${styles.mainSectionLg}`}>
          <div className={styles.mainImageContainer}>
            <img src="/can-mockup-orange.jpg" alt="Elfheim" className={styles.mockupImage} />
          </div>
          <div className={styles.textContainer}>
            <img src="/can-mockup-blue.jpg" alt="Elfheim" className={styles.mockupImage} />
          </div>
          <div className={styles.textContainer}>
            <img src="/can-mockup-coral.jpg" alt="Elfheim" className={styles.mockupImage} />
          </div>
        </div>
      </div>

      <div className={styles.textContainer}>
        <h2 className={`${styles.title}`}>Overview</h2>
        <p className={`${styles.paragraph}`}>
          Driftstone is a small craft brewery based in British Columbia, inspired by the province’s rugged landscapes and adventurous spirit.  
          This project focused on creating can designs for three distinct Driftstone Ale flavors: Wheat Ale, Pale Ale, and Amber Ale. The challenge was to ensure that each can had its own unique identity while maintaining a cohesive brand image.  
          To achieve this balance, the designs shared a consistent color palette but featured different central images: a bridge, a plane, and a boat. These images were chosen to reflect the brand's deep connection to the British Columbian outdoors.
          The colors further reinforced this message by incorporating the oranges and blues found in British Columbia’s sunsets.  
        </p>
      </div>

      <div className={`${styles.dielineSection}`}>
        <h2 className={`${styles.variations}`}>Dielines</h2>
        <div className={styles.mainImageContainer}>
          <img src="/driftstone-hero-01.jpg" alt="Elfheim" className={styles.mainImage} />
        </div>
        <div className={styles.mainImageContainer}>
          <img src="/driftstone-dieline-plane.jpg" alt="Elfheim" className={styles.mainImage} />
        </div>
        <div className={styles.mainImageContainer}>
          <img src="/driftstone-dieline-boat.jpg" alt="Elfheim" className={styles.mainImage} />
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
