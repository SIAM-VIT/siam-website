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
      title: "Web Development",
      description:
        "We specialize in building high-performance web applications, ranging from static single-page websites to dynamic multi-page platforms. Leveraging cutting-edge frameworks and libraries, we ensure seamless interactivity, scalability, and efficiency. You'll gain hands-on experience in developing real-world web applications and contributing to impactful projects with SIAM.",
      logo: "webdev.webp",
    },
    {
      title: "App Development",
      description:
        "Our expertise lies in designing and developing scalable, responsive mobile applications tailored for both iOS and Android. Using modern technologies like Flutter, we create seamless cross-platform solutions while focusing on optimized UI/UX and production-level performance. You'll master app structuring, UI design, and performance tuning for real-world applications.",
      logo: "appdev.webp",
    },
    {
      title: "Machine Learning",
      description:
        "We focus on building intelligent systems by exploring machine learning algorithms, neural networks, and AI-driven applications. We delve into deep learning, reinforcement learning, and generative AI. You'll gain hands-on experience in training and deploying models using TensorFlow, PyTorch, and Scikit-Learn, working on real-world AI solutions.",
      logo: "aiml.webp",
    },
    {
      title: "Competitive Coding",
      description:
        "We provide structured training in problem-solving, data structures, and algorithms through daily LeetCode challenges and competitive programming exercises. We prepare you for placements by strengthening your coding fundamentals, improving algorithmic thinking, and offering curated resources to excel in coding interviews and contests.",
      logo: "compcoding.webp",
    },
    {
      title: "Design and UI/UX",
      description:
        "We craft visually stunning designs for digital platforms, including social media content, event posters, and promotional banners. Our focus extends to UI/UX design, where you'll learn to create website and app prototypes using Figma. With hands-on experience in tools like Canva and Figma, you'll develop professional-level designs for diverse applications.",
      logo: "design.webp",
    },
    {
      title: "Content Creation",
      description:
        "We specialize in producing engaging and high-quality multimedia content for social media, YouTube, and LinkedIn. This domain covers the entire content creation pipeline, from ideation and scripting to shooting and editing aftermovies and digital campaigns. You'll develop expertise in video production, reel making, and social media branding.",
      logo: "cc.webp",
    },
    {
      title: "Research and Development",
      description:
        "We empower students to initiate and execute impactful research projects by providing guidance on formulating research questions, structuring methodologies, and collaborating with faculty. This domain emphasizes leveraging mathematical modeling, computational techniques, and innovative problem-solving strategies to drive meaningful research advancements.",
      logo: "r&d.webp",
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
                className="group transition-all duration-1000 hover:shadow-[0px_10px_20px_rgba(255,255,255,0.6)] w-[270px] h-[420px] flex-shrink-0 relative rounded-[20px]"
              >
                <div className="relative w-full h-full transition-transform duration-1000 transform-style-preserve-3d group-hover:rotate-y-180">
                  <div className="absolute w-full h-full bg-gradient-to-r from-[#4DA8EA] to-[#00D856] rounded-[20px] flex flex-col items-center justify-center border-2 border-black backface-hidden">
                    <img
                      src={domain.logo}
                      alt={`${domain.title} logo`}
                      width={250}
                      height={250}
                      className="rounded-[20px] mb-3 -mt-10"
                    />
                    <h1 className="text-[2.15rem] font-bold text-center text-white leading-tight">
                      {domain.title}
                    </h1>
                  </div>
                  <div className="p-5 absolute w-full h-full bg-gradient-to-r from-[#00D856] to-[#4DA8EA] rounded-[20px] flex flex-col items-center justify-center text-white border-2 border-black rotate-y-180 backface-hidden">
                    <p className="text-[1rem] text-center text-black mt-2">
                      {domain.description}
                    </p>
                  </div>
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
