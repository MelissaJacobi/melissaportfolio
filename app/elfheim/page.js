"use client";
import styles from "./elfheim.module.css";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";


export default function Elfheim({ params }) {
  const projectName = params?.projectName || "";
  
  const galleryImages = [
    "/trees.jpeg",
    "/stream.jpg",
    "/statue.webp",
    "/peaks.jpg",
  ];

    const router = useRouter();
  
    const projects = [
      { name: "mechanical", url: "/mechanical" },
      { name: "Gatsby", url: "/gatsby" },
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
      <div className={styles.upNextSection}>
        <button className="p-2 flex items-center justify-center gap-2 z-10 w-[9rem] mt-[4.25rem] mb-[3.25rem] bg-white text-black rounded-[3rem] font-quicksand font-bold duration-300 hover:translate-y-1 transition group" onClick={() => router.push(nextProject.url)}>
          Next Project 
          <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>  
    </div>
  );
}
