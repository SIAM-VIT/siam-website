import React, { useState, useEffect } from "react";
import { AnimatePresence, easeIn, easeOut, motion } from "framer-motion";
import LandingPageContent from "../components/landing-page-content";

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(
    JSON.parse(sessionStorage.getItem("hasAnimated")) || false
  );
  useEffect(() => {
    if (!hasAnimated) {
      sessionStorage.setItem("hasAnimated", JSON.stringify(false));
      sessionStorage.setItem("hasAnimatedLanding", JSON.stringify(false));
      const timer = setTimeout(() => {
        setIsLoaded(true);
        setHasAnimated(false);
        sessionStorage.setItem("hasAnimated", JSON.stringify(true));
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setIsLoaded(true);
    }
  }, [hasAnimated]);
  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && !hasAnimated && (
          <>
            <motion.div
              animate={{
                background: [
                  "linear-gradient(-45deg, rgba(0, 0, 0, 1), rgba(30, 50, 70, 0.85))",
                  "linear-gradient(-45deg, rgba(30, 50, 70, 0.85), rgba(20, 170, 80, 0.5))",
                  "linear-gradient(-45deg, rgba(20, 170, 80, 0.5), rgba(40, 100, 150, 0.48))",
                  "linear-gradient(-45deg, rgba(40, 100, 150, 0.48), rgba(50, 70, 80, 0.6))",
                  "linear-gradient(-45deg, rgba(50, 70, 80, 0.6), rgba(30, 50, 70, 0.85))",
                  "linear-gradient(-45deg, rgba(30, 50, 70, 0.85), rgba(20, 40, 60, 0.6))",
                  "linear-gradient(-45deg, rgba(20, 40, 60, 0.6), rgba(0, 27, 12, 0.4))",
                  "linear-gradient(-45deg, rgba(0, 27, 12, 0.4), rgba(0, 27, 12, 0.5))",
                  "linear-gradient(-45deg, rgba(0, 27, 12, 0.8), rgba(0, 27, 12, 0.9))",
                  "linear-gradient(-45deg, rgba(0, 27, 12, 1), rgba(0, 0, 0, 1))",
                ],
              }}
              transition={{
                delay: 0.45,
                duration: 10,
                ease: "linear",
              }}
              className="fixed top-0 left-0 bg-black flex items-center justify-center w-full h-full sm:p-0 px-5"
            >
              <motion.img
                src="/siam-white.webp"
                alt="logo"
                className="w-max h-max"
                initial={{ opacity: 0, scale: 0.35 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  ease: easeOut,
                  transition: { duration: 2.25 },
                }}
                exit={{
                  scale: 6,
                  opacity: 0,
                  transition: { duration: 1.25, ease: easeIn },
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence mode="sync">
        {isLoaded && (
          <div className="min-h-screen bg-gradient-to-l from-[#001B0C] via-[#001B0C] to-black poppins overflow-hidden">
            <LandingPageContent />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LandingPage;
