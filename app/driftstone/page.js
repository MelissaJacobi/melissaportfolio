"use client";
import styles from "./driftstone.module.css";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import NextProjectButton from "../components/NextProjectButton";

export default function Elfheim({ params }) {
  const router = useRouter();

  // Ensure params exists and projectName is defined
  const projectName = params?.projectName || "";

  const projects = [
    { name: "Gatsby", url: "/gatsby", image: "/gatsby-glamour.jpg" },
  ];
  const currentIndex = projects.findIndex((p) => p.name.toLowerCase() === projectName.toLowerCase());
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

      <NextProjectButton nextProjectUrl={nextProject.url} image={nextProject.image} />
    </div>
  );
}
