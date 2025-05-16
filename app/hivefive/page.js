"use client";
import styles from "./hivefive.module.css";
import NextProjectButton from "../components/NextProjectButton";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";


export default function hivefive({ params }) {
    const projectName = params?.projectName || "";
  
      const router = useRouter();
    
      const projects = [
        { name: "ReachOut", url: "/reachout", image: "/reachout-next.jpg" },
      ];
      const currentIndex = projects.findIndex((p) => p.name.toLowerCase() === projectName.toLowerCase());
      const nextProject = projects[(currentIndex + 1) % projects.length] || projects[0];
    
  
  return (
    <div className={styles.container}>
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
        <div classnmame={styles.mainSection}>
        <NextProjectButton nextProjectUrl={nextProject.url} image={nextProject.image} />  
            
        </div>
    </div>
  );
}
