import React, { useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";

const DomainsPageContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const totalItems = 7;
  const visibleItems = 4;
  const maxIndex = totalItems - visibleItems;
  const maxIndexOnPhone = 6;

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      Math.min(prev + 1, isMobile ? maxIndexOnPhone : maxIndex)
    );
  };

  const domainInfo = [
    {
      title: "Web Dev",
      description:
        "We develop websites and web applications using modern technologies and frameworks.",
      logo: "/webdev.webp",
    },
    {
      title: "App Dev",
      description:
        "We develop mobile applications for Android and iOS using Flutter and React Native.",
      logo: "/appdev.webp",
    },
    {
      title: "AI/ML",
      description:
        "We provide resources and guidance for artificial intelligence and machine learning.",
      logo: "/aiml.webp",
    },
    {
      title: "Competitive Coding",
      description:
        "We provide resources and guidance for competitive programming.",
      logo: "/compcoding.webp",
    },
    {
      title: "Design",
      description:
        "We design user interfaces and user experiences for websites and applications.",
      logo: "/design.webp",
    },
    {
      title: "Content Creation",
      description: "We create reels and after movies for our events.",
      logo: "/cc.webp",
    },
    {
      title: "Research and Development",
      description:
        "We provide resources and guidance for research and development.",
      logo: "/r&d.webp",
    },
  ];

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-l from-[#001B0C] via-[#001B0C] to-black poppins overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: easeInOut }}
        className="text-center font-[700] sm:text-[76px] text-[36px] uppercase text-[#9CEBDB] sm:mt-36 mt-20"
      >
        Our domains
      </motion.h1>
      <section className="flex flex-col items-center justify-center gap-y-16 h-full w-full mx-auto mt-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.8 }}
          className="overflow-hidden w-4/5 pb-6 rounded-[20px]"
        >
          <motion.div
            className="flex sm:ml-0 ml-[0.75rem] sm:gap-5 gap-14"
            animate={
              isMobile
                ? {
                    x: `-${activeIndex * (270 + 56)}px`,
                  }
                : {
                    x: `-${activeIndex * (100 / visibleItems)}%`,
                  }
            }
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {domainInfo.map((domain, index) => (
              <div
                key={index}
                className="transition-all duration-300 hover:shadow-[0px_10px_20px_rgba(255,255,255,0.6)] w-[270px] h-[420px] flex-shrink-0 relative bg-gradient-to-r from-[#4DA8EA] to-[#00D856] rounded-[20px]"
              >
                <div className="p-3 text-center w-[255px] h-[405px] absolute top-2 left-2 bg-gradient-to-r from-[#4DA8EA] to-[#00D856] rounded-[20px] border-2 border-black">
                  <img
                    src={domain.logo}
                    alt={`${domain.title} logo`}
                    width={250}
                    height={250}
                    className="rounded-[20px] mb-3"
                  />
                  <h1 className="text-3xl font-bold text-center text-white">
                    {domain.title}
                  </h1>
                  <p className="text-[0.9rem] text-center text-black mt-2">
                    {domain.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 1.4 }}
          className="sm:-mt-16 -mt-10 flex items-center justify-center gap-x-2"
        >
          {isMobile
            ? Array.from({ length: maxIndexOnPhone + 1 }).map((_, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 rounded-full ${
                    activeIndex === index ? "w-6 h-6" : "w-4 h-4"
                  } bg-green-500`}
                />
              ))
            : Array.from({ length: totalItems - visibleItems + 1 }).map(
                (_, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 rounded-full ${
                      activeIndex === index ? "w-6 h-6" : "w-4 h-4"
                    } bg-green-500`}
                  />
                )
              )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.8 }}
          className="absolute sm:right-28 sm:bottom-[20.5rem] bottom-[6.25rem] right-[5.5rem]"
        >
          <button
            onClick={handleNext}
            className={`sm:w-[75px] sm:h-[75px] h-[50px] w-[50px] flex items-center justify-center absolute left-0 top-0 rounded-[15px] sm:rounded-[25px] bg-gradient-to-r from-[#4DA8EA] to-[#00D856] ${
              activeIndex === (isMobile ? maxIndexOnPhone : maxIndex)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.8 }}
          className="absolute sm:left-10 sm:bottom-[20.5rem] bottom-[6.25rem] left-10"
        >
          <button
            onClick={handlePrev}
            className={`sm:w-[75px] sm:h-[75px] h-[50px] w-[50px] flex items-center justify-center absolute left-0 top-0 rounded-[15px] sm:rounded-[25px] bg-gradient-to-r from-[#4DA8EA] to-[#00D856] ${
              activeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
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
        </motion.div>
      </section>
    </div>
  );
};

export default DomainsPageContent;
