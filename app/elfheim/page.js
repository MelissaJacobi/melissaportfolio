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
          <h2 className={`${styles.title} ${styles.overview}`}>Overview</h2>
          <p className={`${styles.paragraph}`}>
            The aim of this project was to create a poster that advertised Elfheim
            as a great place to spend your next vacation.
            Elfheim is a mythical place from Nordic mythology where they believed elves lived.
            To capture this otherworldly flavor, the poster features a grand statue, lush forests,
            and a glowing sunset. To ensure that the image is cohesive, all shadows are
            consistent with the position of the sun, and all assets have a slight golden hue.
          </p>
        </div>
      </div>

      <div className={styles.textContainer}>
        <h2 className={`${styles.title} ${styles.composite}`}>Mockups</h2>
        <div className={`${styles.mainSection} ${styles.mainSectionLg}`}>
        <div className={styles.mainImageContainer}>
          <img
            src="/elfheim-mockup.jpg"
            alt="Elfheim"
            className={styles.mockupImage}
          />
        </div>
        <div className={styles.textContainer}>
          <img
              src="/elfheim-mockup-2.jpg"
              alt="Elfheim"
              className={`${styles.mockupImage} ${styles.shortMockup}`}
            />
        </div>
        </div>
      </div>

      {/* Gallery */}
      
      <div className={styles.container}>
      <h2 className={`${styles.title} ${styles.titleLg} ${styles.composite}`}>Composited Images</h2>
      <p className={`${styles.paragraph}`}>
            Here are some of the images used to create this poster!
          </p>
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
      
      </div>    
    </div>
  );
}
