import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";

const slideInVariants = {
  hidden: { opacity: 0, x: -150 },
  visible: { opacity: 1, x: 0 },
};

const slideInRightVariants = {
  hidden: { opacity: 0, x: 150 },
  visible: { opacity: 1, x: 0 },
};

const LandingPage = () => {
  return (
    <div className="max-h-screen bg-black poppins overflow-hidden">
      <Navbar />
      <section className="w-full flex items-start gap-x-20">
        <div className="w-[55%]">
          <motion.h1
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
              duration: 0.1,
              delay: 0.2,
            }}
            className="uppercase text-[#9cebdb] font-bold text-[64px] ml-12 mb-7 leading-[1.3]"
          >
            Society for Industrial & Applied Mathematics
          </motion.h1>
          <motion.h2
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
              duration: 0.1,
              delay: 0.42,
            }}
            className="uppercase font-normal text-[20px] text-[#9cebdb] ml-12 mb-9 tracking-[0.3rem]"
          >
            Turning knowledge into power
          </motion.h2>
          <motion.button
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
              duration: 0.1,
              delay: 0.57,
            }}
            className="ml-12 mb-8 uppercase rounded-full py-1.5 px-3 font-bold text-[#f9f9f9] bg-gradient-to-r from-[#4DA8EA] to-[#00D856]"
          >
            <span className="[text-shadow:_0_2px_4px_rgb(000_000_000_/0.65)] text-[22px]">
              2024 highlights
            </span>
          </motion.button>
          <hr className="w-[100vw]" />
          <motion.p
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
              duration: 0.1,
              delay: 0.75,
            }}
            className="mt-8 font-bold text-white text-[18px] text-justify ml-12 text-base"
          >
            Applied mathematics, computational and data science are essential to
            moving society forward and solving many of the world’s most pressing
            questions and problems. SIAM plays a central role in bringing
            mathematical and computational scientists together, providing a
            platform and community for this important work.
          </motion.p>
        </div>
        <motion.div
          variants={slideInRightVariants}
          initial="hidden"
          animate="visible"
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
            duration: 0.25,
            delay: 1,
          }}
          className="w-[45%]"
        >
          <div className="mt-10 ml-6 z-10 rounded-full py-[2.05rem] w-[42rem] h-[42rem] bg-gradient-to-r from-[#4DA8EA] to-[#00D856]">
            <div className="rounded-full bg-white w-[38rem] h-[38rem] mx-auto"></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;
