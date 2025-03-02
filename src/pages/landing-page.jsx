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
      }, 6500);
      return () => clearTimeout(timer);
    } else {
      setIsLoaded(true);
    }
  }, [hasAnimated]);
  return (
    <>
      <div className="flex flex-col justify-center items-center min-w-screen min-h-screen bg-gradient-to-l from-[#001B0C] via-[#001B0C] to-black poppins overflow-hidden">
        <h1 className="z-30 text-white sm:text-[6rem] text-[2.4rem] text-center">
          We're coming soon!
        </h1>
        <h2 className="z-30 text-white sm:text-[1.5rem] mb-32 text-center text-[1rem]">
          This website is currently under construction.
        </h2>
        <div className="relative sm:-bottom-5 bottom-0 -rotate-12 bg-yellow-500 border border-white/35 sm:w-[140vw] w-[100vw] h-[35px] opacity-90 z-0">
          <div className="text-white text-[1.8rem] sm:space-x-20 space-x-16">
            <span className="sm:ml-24 ml-5">SIAM-VIT</span>
            <span>SIAM-VIT</span>
            <span className="hidden sm:inline">SIAM-VIT</span>
            <span className="hidden sm:inline">SIAM-VIT</span>
            <span className="hidden sm:inline">SIAM-VIT</span>
            <span className="hidden sm:inline">SIAM-VIT</span>
            <span className="hidden sm:inline">SIAM-VIT</span>
            <span className="hidden sm:inline">SIAM-VIT</span>
          </div>
        </div>
        <div className="relative sm:ml-96 bottom-10 sm:bottom-0 rotate-12 bg-yellow-500 border border-white/35 sm:w-[140vw] w-[100vw] h-[35px] opacity-90 z-0">
          <div className="text-white text-[1.8rem] sm:space-x-14 space-x-16">
            <span className="sm:ml-24 ml-5">SIAM-VIT</span>
            <span>SIAM-VIT</span>
            <span className="hidden sm:inline">SIAM-VIT</span>
            <span className="hidden sm:inline">SIAM-VIT</span>
            <span className="hidden sm:inline">SIAM-VIT</span>
            <span className="hidden sm:inline">SIAM-VIT</span>
            <span className="hidden sm:inline">SIAM-VIT</span>
            <span className="hidden sm:inline">SIAM-VIT</span>
          </div>
        </div>
      </div>
    </>
    // <>
    //   <AnimatePresence mode="wait">
    //     {!isLoaded && !hasAnimated && (
    //       <>
    //         <motion.div
    //           animate={{
    //             background: [
    //               "linear-gradient(-45deg, rgba(0, 0, 0, 1), rgba(30, 50, 70, 0.85))",
    //               "linear-gradient(-45deg, rgba(30, 50, 70, 0.85), rgba(20, 170, 80, 0.5))",
    //               "linear-gradient(-45deg, rgba(20, 170, 80, 0.5), rgba(40, 100, 150, 0.48))",
    //               "linear-gradient(-45deg, rgba(40, 100, 150, 0.48), rgba(50, 70, 80, 0.6))",
    //               "linear-gradient(-45deg, rgba(50, 70, 80, 0.6), rgba(30, 50, 70, 0.85))",
    //               "linear-gradient(-45deg, rgba(30, 50, 70, 0.85), rgba(20, 40, 60, 0.6))",
    //               "linear-gradient(-45deg, rgba(20, 40, 60, 0.6), rgba(0, 27, 12, 0.4))",
    //               "linear-gradient(-45deg, rgba(0, 27, 12, 0.4), rgba(0, 27, 12, 0.5))",
    //               "linear-gradient(-45deg, rgba(0, 27, 12, 0.8), rgba(0, 27, 12, 0.9))",
    //               "linear-gradient(-45deg, rgba(0, 27, 12, 1), rgba(0, 0, 0, 1))",
    //             ],
    //           }}
    //           transition={{
    //             delay: 0.45,
    //             duration: 10,
    //             ease: "linear",
    //           }}
    //           className="fixed top-0 left-0 bg-black flex items-center justify-center w-full h-full sm:p-0 px-5"
    //         >
    //           <motion.img
    //             src="/siam-white.png"
    //             alt="logo"
    //             className="w-max h-max"
    //             initial={{ opacity: 0, scale: 0.35 }}
    //             animate={{
    //               scale: 1,
    //               opacity: 1,
    //               ease: easeOut,
    //               transition: { duration: 2.25 },
    //             }}
    //             exit={{
    //               scale: 6,
    //               opacity: 0,
    //               transition: { duration: 1.25, ease: easeIn },
    //             }}
    //           />
    //         </motion.div>
    //       </>
    //     )}
    //   </AnimatePresence>
    //   <AnimatePresence mode="sync">
    //     {isLoaded && (
    //       <div className="max-h-screen bg-gradient-to-l from-[#001B0C] via-[#001B0C] to-black poppins overflow-hidden">
    //         <LandingPageContent />
    //       </div>
    //     )}
    //   </AnimatePresence>
    // </>
  );
};

export default LandingPage;
