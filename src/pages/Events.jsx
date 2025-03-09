import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Navbar from "../components/navbar";

const events = [
  {
    name: "GRAVITAS",
    event1: "MPL",
    event2: "EVENT 2",
  },
  {
    name: "RIVIERA",
    event1: "VIT'S GOT TALENT",
    event2: "TRIWIZARD TOURNAMENT",
  },
  {
    name: "YANTRA",
    event1: "EVENT",
    event2: "EVENT",
  },
];

export default function Events() {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <div>
      <div className="z-[0] absolute w-fit h-fit overflow-hidden bg-gradient-custom">
        <motion.img
          src="events-bg.jpeg"
          alt="event"
          className="opacity-[0.25]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="z-[1000] absolute w-full">
        <Navbar />
        <motion.section
          className="min-h-screen flex flex-col sm:flex-row items-center justify-center gap-y-20 pl-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mr-7 sm:mt-0 -mt-64">
            <h1 className="uppercase text-white font-bold text-[48px] sm:text-[84px] sm:mb-10 mb-5 leading-none">
              Discover
              <br />
              Our Events
            </h1>
            <h3 className="text-white text-[24px] sm:text-[36px]">
              Where Ideas Transform Into Reality
            </h3>
          </div>
          <motion.img
            src="events-bg-2.jpeg"
            alt="event2"
            className="w-[100vw] sm:w-[100vw] sm:h-[80vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.section>

        <section className="min-h-screen sm:mt-12 -mt-52 relative" ref={ref}>
          <motion.h1
            className="uppercase text-center text-white font-bold text-[64px] sm:text-[68px] sm:ml-12 sm:mb-10 leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1 }}
          >
            What we do?
          </motion.h1>
          <motion.h2
            className="text-center text-white text-xl font-bold p-5 m-10"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, delay: 0.2 }}
          >
            SIAM thrives on blending innovation and creativity by organizing
            diverse events during cultural and tech fests. From interactive
            workshops and coding challenges to tech exhibitions and fun
            cultural-themed technical games, we ensure a perfect mix of learning
            and entertainment. These events cater to enthusiasts of all levels,
            fostering collaboration, skill development, and a passion for
            technology in an engaging environment.
          </motion.h2>
          <motion.div
            className="flex flex-row items-center sm:justify-around justify-center sm:ml-8 gap-10 sm:mt-12 -mt-5"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {["GRAVITAS", "RIVIERA", "YANTRA"].map((event, index) => (
              <motion.div
                key={event}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <div className="bg-gradient-green transition-all duration-300 hover:shadow-[0px_10px_20px_rgba(255,255,255,0.6)] rounded-full w-20 h-20 sm:w-40 sm:h-40"></div>
                <h3 className="text-white text-center italic font-bold sm:mt-10 mt-0 underline sm:text-[32px] text-lg">
                  {event}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {events.map((event, index) => (
          <motion.section
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="h-screen text-white font-bold font-poppins flex flex-col sm:flex-row md:flex-row"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="lg:w-2/5 sm:w-1/2 flex flex-col justify-center relative text-center">
                <h1 className="uppercase font-bold text-[64px] sm:text-[68px] sm:ml-12 sm:mb-10 my-5 leading-none">
                  {event.name}
                </h1>
                <div className="relative w-80 h-60">
                  <div className="bg-gradient-green w-full h-[40%]"></div>
                  <img
                    src="circle.svg"
                    className="absolute top-5 left-12 transform -translate-x-1/2 -translate-y-1"
                    alt="decorative circle"
                  />
                  <svg
                    width="100%"
                    height="80%"
                    viewBox="0 0 62 357"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-10 left-12 transform -translate-x-1/2 -translate-y-1"
                  >
                    <path
                      d="M26.3338 6.0289C26.438 2.91134 28.9181 0.262752 32.1556 0.291452C35.3833 0.31562 37.9992 2.9891 37.895 6.10665L36.5765 301.926L61.1689 302.019L30.6512 356.973L0.531588 301.678L25.0163 301.847L26.3338 6.0289Z"
                      fill="#9CEBDB"
                    />
                  </svg>
                </div>
              </div>

              <div className="lg:w-3/5 sm:w-1/2 mr-10 h-full grid grid-cols-2 grid-rows-2 justify-items-center content-center">
                <div className="flex justify-center items-center">
                  <img
                    src="placeholder.png"
                    alt="Placeholder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-center text-[16px] sm:text-[36px]">
                    {event.event1}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-center text-[16px] sm:text-[36px]">
                    {event.event2}
                  </p>
                </div>
                <div className="bg-gradient-green h-[8%] w-[10%] absolute right-2 block sm:hidden"></div>
                <div className="flex justify-center items-center">
                  <img
                    src="placeholder.png"
                    alt="Placeholder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="bg-gradient-green absolute bottom-0 lg:right-2 sm:right-2 h-[10vw] w-[10vw]"></div>
            </motion.div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
