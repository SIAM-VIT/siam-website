import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import Navbar from "./navbar";

const LandingPageContent = () => {
  const [hasAnimatedLanding, setHasAnimatedLanding] = useState(
    JSON.parse(sessionStorage.getItem("hasAnimatedLanding")) || false
  );
  const [transition] = useState(() => {
    if (sessionStorage.getItem("hasAnimatedLanding") === "true") {
      return {
        duration: 0,
        delay: 0,
      };
    } else {
      return {
        duration: 1,
        ease: easeInOut,
        delay: 0.5,
      };
    }
  });

  useEffect(() => {
    if (sessionStorage.getItem("hasAnimatedLanding") !== "true") {
      sessionStorage.setItem("hasAnimatedLanding", "true");
      setHasAnimatedLanding(true);
    }
  }, [hasAnimatedLanding]);
  return (
    <motion.div
      className="poppins sm:w-full sm:h-full max-w-screen max-h-screen z-[999]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={transition}
    >
      <Navbar />
      <section className="sm:w-full max-w-screen flex sm:flex-row flex-col items-start gap-x-20">
        <div className="sm:w-[55%] w-full">
          <h1 className="mt-0 uppercase text-[#9cebdb] font-bold sm:text-[64px] text-[32px] sm:ml-12 sm:mb-3 ml-6 mb-6 leading-[1.3]">
            Society for Industrial & Applied Mathematics
          </h1>
          <h2 className="uppercase font-normal sm:text-[20px] text-[13px] text-[#9cebdb] sm:ml-12 sm:mb-7 ml-6 mb-5 sm:tracking-[0.3rem] tracking-[0.27rem]">
            Turning knowledge into power
          </h2>
          <button className="sm:ml-12 sm:mb-8 ml-5 mb-4 uppercase rounded-full sm:py-1.5 py-1 sm:px-3 px-2.5 font-bold text-[#f9f9f9] bg-gradient-to-r from-[#4DA8EA] to-[#00D856]">
            <span className="[text-shadow:_0_2px_4px_rgb(000_000_000_/0.65)] sm:text-[22px] text-[15px]">
              2024 highlights
            </span>
          </button>
          <hr className="w-[100vw] sm:block hidden" />
          <p className="sm:mt-5 sm:font-bold font-light text-white sm:text-[20px] sm:leading-7 text-justify sm:ml-12 sm:px-0 px-5 text-base">
            Applied mathematics, computational and data science are essential to
            moving society forward and solving many of the world’s most pressing
            questions and problems. SIAM plays a central role in bringing
            mathematical and computational scientists together, providing a
            platform and community for this important work.
          </p>
        </div>
        <div className="sm:w-[45%] w-full">
          <div className="sm:mt-10 sm:ml-6 ml-16 mt-10 z-10 rounded-full sm:py-[2.05rem] py-[1rem] sm:w-[42rem] sm:h-[42rem] w-[25rem] h-[25rem] bg-gradient-to-r from-[#4DA8EA] to-[#00D856]">
            <div className="rounded-full bg-white sm:w-[38rem] sm:h-[38rem] w-[23rem] h-[23rem] mx-auto"></div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default LandingPageContent;
