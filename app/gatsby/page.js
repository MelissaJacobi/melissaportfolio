"use client";
import styles from "./gatsby.module.css";


export default function Gatsby({ params }) {
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
        Gatsby Glamour is an 1920's fashion exibit at the National Canandian Museum of History. The goal of this project was to advertise
        the exibit with two posters. one banner poster and one digital. The design goal of this project was to showcase
        the range of the exhibit by combining black and 
        white photography with the art deco style that was popular at that time. The chosen fonts also fit with the art deco style.
        the layout also draws inspiration from many 1920's posters which featured a large image in the center with a 
        border.
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
    </div>
  );
}
