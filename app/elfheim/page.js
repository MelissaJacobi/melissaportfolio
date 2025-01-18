"use client";
import styles from "./elfheim.module.css";

export default function Elfheim({ params }) {
  const { projectName } = params;

  const galleryImages = [
    "/trees.jpeg",
    "/stream.jpg",
    "/statue.webp",
    "/peaks.jpg",
  ];

  return (
    <div className={styles.container}>
      {/* Main Section */}
      <div className={`${styles.mainSection} ${styles.mainSectionLg}`}>
        <div className={styles.mainImageContainer}>
          <img
            src="/elfheimhigh.jpg"
            alt="Elfheim"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={`${styles.title} ${styles.titleLg} ${styles.overview}`}>Overview</h2>
          <p className={`${styles.paragraph} ${styles.paragraphLg}`}>
            The aim of this project was to create a poster that advertised Elfheim
            as a great place to spend your next vacation. The goal was to showcase
            Elfheim's grandiose mountains, lush forests, and impressive sunsets.
          </p>
        </div>
      </div>

      {/* Gallery */}
        <div className={`${styles.gallery} ${styles.gallerySm}`}>
            {galleryImages.map((image, index) => (
            <div key={index} className={styles.galleryItem}>
                <img
                src={image}
                alt={`Elfheim gallery ${index + 1}`}
                className={styles.galleryImage}
                />
            </div>
            ))}
        </div>

      {/* Challenge and Solution Section */}
      <div className={`${styles.challengeSolution} ${styles.challengeSolutionLg}`}>
        <div className={styles.challengeSolutionItem}>
          <h2 className={`${styles.title} ${styles.titleLg}`}>Challenge</h2>
          <p className={`${styles.paragraph} ${styles.paragraphLg}`}>
            This poster is a composite image created from various different photos.
            Since so many images were used, it was a challenge to achieve similar
            lighting in each of the fragments. It was also a challenge to transition
            between them to create a cohesive piece.
          </p>
        </div>
        <div className={styles.challengeSolutionItem}>
          <h2 className={`${styles.title} ${styles.titleLg}`}>Solution</h2>
          <p className={`${styles.paragraph} ${styles.paragraphLg}`}>
            Elfheim is a mythical place from Nordic mythology where they believed elves lived.
            To capture this otherworldly flavor, the poster features a grand statue
            and glowing sunset. To ensure that the image is cohesive, all shadows are
            consistent with the position of the sun, and all assets have a slight golden hue.
          </p>
        </div>
      </div>
    </div>
  );
}
