"use client";
import styles from "./driftstone.module.css";


export default function Elfheim({ params }) {
  const { projectName } = params;

  return (
    <div className={styles.container}>
      {/* Main Section */}
      <div className={`${styles.mainSection} ${styles.mainSectionLg}`}>
        <div className={styles.mainImageContainer}>
          <img
            src="/driftstone-hero-01.jpg"
            alt="Elfheim"
            className={styles.mainImage}
          />
        </div>
        
      </div>

      <div className={styles.textContainer}>
          <h2 className={`${styles.title} ${styles.titleLg} ${styles.overview} ${styles.container}`}>Overview</h2>
          <p className={`${styles.paragraph} ${styles.paragraphLg}`}>
          Driftstone is a small craft brewery nestled in the heart of British Columbia, inspired by the province’s rugged landscapes and adventurous spirit
          This project focused on creating can designs for three distinct Driftstone Ale flavors: Wheat Ale, Pale Ale, and Amber Ale. The challenge was to ensure each can had its own identity while maintaining a cohesive brand image.
          To achieve this balance, the designs shared a color palette, but  featured a different central image: a bridge, a plane, and a boat.
          </p>
        </div>

      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles.titleLg} ${styles.composite}`}>Variations</h2>
        <div className={`${styles.gallery} ${styles.gallerySm}`}></div>
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
  );
}
