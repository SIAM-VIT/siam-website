import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/navbar";

const eventLogos = {
  GRAVITAS: "logofinal.png",
  RIVIERA: "rivieralogo.png",
  YANTRA: "yantralogo.png",
};

export default function Events() {
  const [currentSection, setCurrentSection] = useState("landing");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 100 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.65,
  };

  const handleDiscoverNext = () => {
    setCurrentSection("whatWeDo");
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setCurrentSection("eventDetails");
  };

  const handleBackToEvents = () => {
    setSelectedEvent(null);
    setCurrentSection("whatWeDo");
  };

  const handleBackToLanding = () => {
    setCurrentSection("landing");
  };

  return (
    <div className="poppins bg-gradient-to-l from-[#001B0C] via-[#001B0C] to-black min-h-screen text-white">
      <div className="absolute z-[0] h-full w-full overflow-hidden">
        <motion.img
          src="events-bg.webp"
          alt="event"
          className="opacity-[0.25]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="z-[1000] relative">
        <Navbar />
      </div>
      <div className="z-[999] absolute w-full">
        <AnimatePresence mode="wait">
          {currentSection === "landing" && (
            <motion.section
              key="landing"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen flex flex-col sm:flex-row items-center relative justify-center gap-y-20 pl-5 -mt-10"
            >
              <div className="text-left sm:mt-0 -mt-40">
                <h1 className="uppercase text-white font-bold text-[48px] sm:text-[84px] sm:mb-10 mb-5 leading-none">
                  Discover Our Events
                </h1>
                <h3 className="text-white text-[24px] sm:text-[28px]">
                  Where Ideas Transform Into Reality
                </h3>
              </div>
              <motion.img
                src="events-bg-2.webp"
                alt="event2"
                className="w-[100vw] sm:w-[100vw] sm:h-[80vh]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <button
                onClick={handleDiscoverNext}
                className={`sm:w-[75px] sm:h-[75px] h-[50px] w-[50px] flex items-center justify-center absolute left-10 sm:bottom-10 bottom-32 rounded-[15px] sm:rounded-[25px] bg-gradient-to-r from-[#4DA8EA] to-[#00D856]`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="85"
                  height="85"
                  color="#ffffff"
                  fill="none"
                >
                  <path
                    d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </motion.section>
          )}

          {currentSection === "whatWeDo" && (
            <motion.section
              key="whatWeDo"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="overflow-hidden sm:h-full min-h-screen sm:mt-0 relative"
            >
              <motion.h1 className="uppercase text-center text-white font-bold text-[64px] sm:text-[68px] sm:ml-12 sm:mb-10 sm:mt-32 mt-8 leading-none">
                What we do?
              </motion.h1>
              <motion.h2 className="text-center text-white text-xl font-bold px-12 m-5">
                SIAM thrives on blending innovation and creativity by organizing
                diverse events during cultural and tech fests. From interactive
                workshops and coding challenges to tech exhibitions and fun
                cultural-themed technical games, we ensure a perfect mix of
                learning and entertainment.
              </motion.h2>
              <motion.div className="flex flex-row items-center sm:justify-around justify-center sm:ml-8 gap-10 sm:mt-12">
                {["GRAVITAS", "RIVIERA", "YANTRA"].map((event) => (
                  <motion.div
                    key={event}
                    onClick={() => handleEventSelect(event)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer"
                  >
                    <div className="bg-gradient-green transition-all duration-300 hover:shadow-[0px_10px_20px_rgba(255,255,255,0.6)] rounded-full w-20 h-20 sm:w-40 sm:h-40 flex justify-center items-center overflow-hidden">
                      <img
                        src={eventLogos[event]}
                        alt={`${event} Logo`}
                        className="w-full h-full object-contain p-1.5"
                      />
                    </div>
                    <h3 className="text-white text-center italic font-bold sm:mt-10 mt-0 underline sm:text-[32px] text-lg">
                      {event}
                    </h3>
                  </motion.div>
                ))}
              </motion.div>
              <img
                src="group01.svg"
                alt="decorator"
                className="absolute top-0 left-0 sm:block hidden"
              />
              <img
                src="group02.svg"
                alt="decorator"
                className="absolute top-48 right-0 sm:block hidden"
              />
              <button
                onClick={handleBackToLanding}
                className={`sm:w-[75px] sm:h-[75px] h-[50px] w-[50px] flex items-center justify-center absolute left-10 sm:bottom-10 bottom-0 rounded-[15px] sm:rounded-[25px] bg-gradient-to-r from-[#4DA8EA] to-[#00D856]`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="85"
                  height="85"
                  color="#ffffff"
                  fill="none"
                  className="rotate-180"
                >
                  <path
                    d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </motion.section>
          )}

          {currentSection === "eventDetails" && selectedEvent && (
            <motion.section
              key="eventDetails"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="relative mt-5"
            >
              <button
                onClick={handleBackToEvents}
                className={`z-[1000] sm:w-[75px] sm:h-[75px] h-[50px] w-[50px] flex items-center justify-center absolute left-2 sm:top-10 bottom-0 rounded-[15px] sm:rounded-[25px] bg-gradient-to-r from-[#4DA8EA] to-[#00D856]`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="85"
                  height="85"
                  color="#ffffff"
                  fill="none"
                  className="rotate-180"
                >
                  <path
                    d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {selectedEvent === "GRAVITAS" && (
                <motion.div className="h-screen text-white font-bold font-poppins flex flex-col sm:flex-row md:flex-row">
                  <div className="lg:w-2/5 sm:w-1/2 flex flex-col justify-center relative text-center">
                    <h1 className="uppercase mb-2 text-center text-white font-bold text-[64px] sm:text-[68px] sm:ml-12 sm:mb-10 leading-none">
                      GRAVITAS
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

                  <div className="lg:w-3/5 sm:w-1/2 h-full grid grid-cols-2 grid-rows-2 justify-items-center content-center">
                    <div className="flex justify-center items-center">
                      <img
                        src="gravitasEvent1.jpeg"
                        alt="MPL"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="text-center text-[28px] sm:text-[36px]">
                        MPL 2024
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="text-center text-[28px] sm:text-[36px]">
                        Math Premier League
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="gravitasEvent2.jpeg"
                        alt="MPL"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedEvent === "RIVIERA" && (
                <motion.div className="h-screen text-white font-bold font-poppins flex flex-col sm:flex-row md:flex-row">
                  <div className="lg:w-2/5 sm:w-1/2 flex flex-col justify-center relative text-center">
                    <h1 className="uppercase mb-2 text-center text-white font-bold text-[64px] sm:text-[68px] sm:ml-12 sm:mb-10 leading-none">
                      RIVIERA
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

                  <div className="lg:w-3/5 sm:w-1/2 h-full grid grid-cols-2 grid-rows-2 justify-items-center content-center">
                    <div className="flex justify-center items-center">
                      <img
                        src="rivieraEvent1.jpg"
                        alt="shipwreck"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="text-center text-[28px] sm:text-[36px]">
                        Shipwreck
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="text-center text-[28px] sm:text-[36px]">
                        Showdown 2025
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="rivieraEvent2.jpg"
                        alt="shipwreck"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedEvent === "YANTRA" && (
                <motion.div className="h-screen text-white font-bold font-poppins flex flex-col sm:flex-row md:flex-row">
                  <div className="lg:w-2/5 sm:w-1/2 flex flex-col justify-center relative text-center">
                    <h1 className="uppercase mb-2 text-center text-white font-bold text-[64px] sm:text-[68px] sm:ml-12 sm:mb-10 leading-none">
                      YANTRA
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

                  <div className="lg:w-3/5 sm:w-1/2 h-full grid grid-cols-2 grid-rows-2 justify-items-center content-center">
                    <div className="flex justify-center items-center">
                      <img
                        src="yantraEvent2.jpeg"
                        alt="codingrelay"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="text-center text-[28px] sm:text-[36px]">
                        Coding Relay 2025
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="text-center text-[28px] sm:text-[36px]">
                        Blogathon 2024
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="yantraEvent1.jpeg"
                        alt="blogathon"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
