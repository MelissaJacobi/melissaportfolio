"use client";
import styles from "./driftstone.module.css";
import Footer from "../components/Footer";


export default function Elfheim({ params }) {
  const { projectName } = params;

  return (
    <>
    <div className={styles.container}>
      {/* Main Section */}
      <div className={`${styles.mainSection}`}>
        <div className={styles.mainImageContainer}>
          <img
            src="/driftstone-hero-01.jpg"
            alt="Elfheim"
            className={styles.mainImage}
          />
        </div>
        
      </div>

      <div className={styles.textContainer}>
          <h2 className={`${styles.title}`}>Overview</h2>
          <p className={`${styles.paragraph} `}>
          Driftstone is a small craft brewery based in British Columbia, inspired by the province’s rugged landscapes and adventurous spirit
          This project focused on creating can designs for three distinct Driftstone Ale flavors: Wheat Ale, Pale Ale, and Amber Ale. The challenge was to ensure each can had its own identity while maintaining a cohesive brand image.
          To achieve this balance, the designs shared a color palette, but  featured different central images: a bridge, a plane, and a boat.
          </p>
        </div>

      <div className={styles.textContainer}>
        <h2 className={`${styles.variations}`}>Variations</h2>
        <div className={`${styles.mainSection} ${styles.mainSectionLg}`}>
        <div className={styles.mainImageContainer}>
          <img
            src="/can-mockup-orange.jpg"
            alt="Elfheim"
            className={styles.mockupImage}
          />
        </div>
        <div className={styles.textContainer}>
          <img
              src="/can-mockup-blue.jpg"
              alt="Elfheim"
              className={styles.mockupImage}
            />
        </div>
        <div className={styles.textContainer}>
          <img
              src="/can-mockup-coral.jpg"
              alt="Elfheim"
              className={styles.mockupImage}
            />
        </div>
        </div>
      </div>   

    </div>    
    </>
  );
}
