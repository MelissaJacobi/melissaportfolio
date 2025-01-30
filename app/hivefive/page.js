"use client";
import styles from "./hivefive.module.css";
import Footer from "../components/Footer";


export default function hivefive({ params }) {
  const { projectName } = params;

  return (
    <div className={styles.container}>
        {/* Main Section */}
        <div className={`${styles.mainSection}`}>
          <div className={styles.mainImageContainer}>
          <video 
              className={styles.mainImage} 
              autoPlay 
              loop 
              muted
              >
              <source src="/hivefive-mockup.mp4" type="video/mp4" />
              Your browser does not support the video tag.
              </video>
          </div>
          
        </div>

      <div className={styles.textContainer}>
        <div className={styles.overviewBtn}>
          <h2 className={styles.title}>Overview</h2>
          <button
            className="z-10 w-[7rem] mt-[4.25rem] mb-[3.25rem] bg-white text-black rounded-[3rem] font-quicksand font-bold duration-300 hover:translate-y-1 transition"
            onClick={() => window.open("https://hivefive-bee.vercel.app/Home", "_blank")}
          >
            Try it out!
          </button>
        </div>
          <p className={`${styles.paragraph} `}>
          The Hivefive app is designed to promote awareness and support for bee conservation through engaging and accessible 
          features. Users can take quizzes to earn points that convert to donations for the cause, read educational articles
          about bees, and enjoy interactive matching games. Accessibility was a key challenge, which was resolved by implementing features like text-to-sound and 
          voice-to-text in the quiz section, high-contrast color schemes, legible fonts, and settings for dark mode and adjustable text size. 
          Hivefive combines education, entertainment, and impact, making it easy for everyone to contribute to saving the bees.
          </p>
      </div>

      <div className={`${styles.mainSection}`}>
          
        <h2 className={`${styles.title}`}>Wireframes</h2>
        <div className={styles.mainImageContainer}>         
          <video 
              className={styles.mainImage} 
              autoPlay 
              loop 
              muted
              >
              <source src="/figma-scroll.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
          
        </div>

        <div className={styles.container}>
          <h2 className={`${styles.title}`}>Colour Scheme</h2>
          <div className={`${styles.mainSection} ${styles.mainSectionLg}`}>
            <div className={styles.colourContainer}>
              <img
                src="/bee-white.svg"
                alt="Elfheim"
                className={styles.mockupImage}
              />
              <img
                  src="/bee-pale.svg"
                  alt="Elfheim"
                  className={styles.mockupImage}
                />
              <img
                  src="/bee-golden.svg"
                  alt="Elfheim"
                  className={styles.mockupImage}
                />
              <img
                  src="/bee-salmon.svg"
                  alt="Elfheim"
                  className={styles.mockupImage}
                />
              <img
                  src="/bee-green.svg"
                  alt="Elfheim"
                  className={styles.mockupImage}
                />
              <img
                  src="/bee-tiffany.svg"
                  alt="Elfheim"
                  className={styles.mockupImage}
                />
              <img
                  src="/bee-black.svg"
                  alt="Elfheim"
                  className={styles.mockupImage}
                />
            </div>
          </div>
        </div>   
        <div classnmame={styles.mainSection}>
        
            
        </div>
    </div>
  );
}
