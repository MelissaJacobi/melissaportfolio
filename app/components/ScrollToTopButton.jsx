'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronUp } from "react-icons/fa6";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setIsScrolling(true);

    const scrollSpeed = 50;
    const scrollToTop = () => {
      const currentPosition = window.scrollY;

      if (currentPosition > 0) {
        window.scrollBy(0, -scrollSpeed);
        requestAnimationFrame(scrollToTop);
      } else {
        setIsScrolling(false);
      }
    };

    scrollToTop();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-5 right-5 w-24 h-24 cursor-pointer group rounded-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.5 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={handleClick}
        >
          {!isScrolling ? (
            <>
              <motion.img
                src="/bird-static.png"
                alt="Scroll to top"
                className="w-full h-full object-contain"
              />
              {/* Arrow appears & bounces ONLY when hovering */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center mb-[5rem] text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <motion.div
                  animate={{ y: [-10, 0, -10] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                >
                  <FaChevronUp />
                </motion.div>
              </motion.div>
            </>
          ) : (
            <motion.video
              src="/bird.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-contain"
              onEnded={() => setIsScrolling(false)}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
