import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

const layers = [
  { z: 30, w: 900, h: 284, top: -256, left: 80, rotate: -24.89, delay: 0 },
  { z: 20, w: 950, h: 300, top: -240, left: 56, rotate: -24.37, delay: 0.1 },
  { z: 10, w: 1025, h: 323, top: -224, left: 40, rotate: -22.38, delay: 0.2 },
  { z: 0, w: 1100, h: 347, top: -208, left: 24, rotate: -20.55, delay: 0.3 },
];

const layers2 = [
  { z: 30, w: 900, h: 284, bottom: -256, right: 80, rotate: 155.11, delay: 0 },
  {
    z: 20,
    w: 950,
    h: 300,
    bottom: -240,
    right: 56,
    rotate: 155.63,
    delay: 0.1,
  },
  {
    z: 10,
    w: 1025,
    h: 323,
    bottom: -224,
    right: 40,
    rotate: 157.62,
    delay: 0.2,
  },
  {
    z: 0,
    w: 1100,
    h: 347,
    bottom: -208,
    right: 24,
    rotate: 159.45,
    delay: 0.3,
  },
];
const images = [
  {
    src: "/Rectangle 28.svg",
    zIndex: "z-0",
    left: "-left-0",
    top: "-top-14",
    delay: 0,
  },
  {
    src: "/Rectangle 29.svg",
    zIndex: "z-20",
    left: "sm:-left-4 -left-5",
    top: "-top-14",
    delay: 0.1,
  },
  {
    src: "/Rectangle 30.svg",
    zIndex: "z-10",
    left: "sm:-left-5 left-5",
    top: "sm:-top-14 top-0",
    delay: 0.2,
  },
  {
    src: "/Rectangle 31.svg",
    zIndex: "z-20",
    left: "-left-4",
    top: "sm:-top-14 top-0",
    delay: 0.3,
  },
  {
    src: "/Rectangle 32.svg",
    zIndex: "z-30",
    left: "sm:-left-5 left-0",
    top: "sm:-top-14 -top-20",
    delay: 0.4,
  },
];
const images2 = [
  {
    src: "/Rectangle 28.svg",
    zIndex: "z-0",
    right: "-right-0",
    bottom: "-bottom-14",
    delay: 0,
  },
  {
    src: "/Rectangle 29.svg",
    zIndex: "z-20",
    right: "sm:-right-4 -right-5",
    bottom: "-bottom-14",
    delay: 0.1,
  },
  {
    src: "/Rectangle 30.svg",
    zIndex: "z-10",
    right: "sm:-right-5 right-5",
    bottom: "sm:-bottom-14 bottom-0",
    delay: 0.2,
  },
  {
    src: "/Rectangle 31.svg",
    zIndex: "z-20",
    right: "-right-4",
    bottom: "sm:-bottom-14 bottom-0",
    delay: 0.3,
  },
  {
    src: "/Rectangle 32.svg",
    zIndex: "z-30",
    right: "-right-5",
    bottom: "sm:-bottom-14 -bottom-20",
    delay: 0.4,
  },
];
const images3 = [
  {
    src: "/Rectangle 40.svg",
    zIndex: "z-0",
    left: "-left-0",
    top: "sm:-top-14 top-0",
    delay: 0,
  },
  {
    src: "/Rectangle 41.svg",
    zIndex: "z-10",
    left: "-left-4",
    top: "sm:-top-14 -top-6",
    delay: 0.1,
  },
  {
    src: "/Rectangle 42.svg",
    zIndex: "z-20",
    left: "-left-5",
    top: "sm:-top-14 -top-28",
    delay: 0.2,
  },
];
const images4 = [
  {
    src: "/Rectangle 40.svg",
    zIndex: "z-0",
    right: "-right-0",
    bottom: "sm:-bottom-14 bottom-0",
    delay: 0,
  },
  {
    src: "/Rectangle 41.svg",
    zIndex: "z-10",
    right: "-right-4",
    bottom: "sm:-bottom-14 -bottom-6",
    delay: 0.1,
  },
  {
    src: "/Rectangle 42.svg",
    zIndex: "z-20",
    right: "-right-5",
    bottom: "sm:-bottom-14 -bottom-28",
    delay: 0.2,
  },
];
const images5 = [
  {
    src: "/Rectangle 53.svg",
    zIndex: "z-0",
    top: "-top-0",
    delay: 0,
  },
  {
    src: "/Rectangle 54.svg",
    zIndex: "z-10",
    top: "-top-10",
    left: "-left-0",
    delay: 0.1,
  },
];
const images6 = [
  {
    src: "/Rectangle 53.svg",
    zIndex: "z-0",
    bottom: "-bottom-0",
    delay: 0,
  },
  {
    src: "/Rectangle 54.svg",
    zIndex: "z-10",
    right: "-right-0",
    bottom: "-bottom-10",
    delay: 0.1,
  },
];
const images7 = [
  {
    src: "/Rectangle 44.svg",
    zIndex: "z-10",
    top: "sm:-top-14 -top-8",
    left: "sm:-left-0 -left-10",
    delay: 0,
  },
  {
    src: "/Rectangle 46.svg",
    zIndex: "z-30",
    top: "sm:-top-5 -top-4",
    left: "-left-0",
    delay: 0.1,
  },
  {
    src: "/Rectangle 47.svg",
    zIndex: "z-20",
    top: "sm:-top-10 -top-20",
    left: "sm:-left-0 -left-5",
    delay: 0.2,
  },
];
const images8 = [
  {
    src: "/Rectangle 61.svg",
    zIndex: "z-10",
    top: "sm:-top-14 -top-8",
    right: "sm:-right-0 -right-10",
    delay: 0,
  },
  {
    src: "/Rectangle 59.svg",
    zIndex: "z-30",
    top: "sm:-top-5 -top-4",
    right: "-right-0",
    delay: 0.1,
  },
  {
    src: "/Rectangle 60.svg",
    zIndex: "z-20",
    top: "sm:-top-10 -top-20",
    right: "sm:-right-0 -right-5",
    delay: 0.2,
  },
];
const images9 = [
  {
    src: "/Rectangle 65.svg",
    zIndex: "z-10",
    bottom: "sm:-bottom-24 -bottom-14",
    left: "sm:left-0 -left-10",
    delay: 0,
  },
  {
    src: "/Rectangle 63.svg",
    zIndex: "z-30",
    left: "left-0",
    bottom: "sm:-bottom-14 -bottom-8",
    delay: 0.1,
  },
  {
    src: "/Rectangle 64.svg",
    zIndex: "z-20",
    left: "sm:-left-0 -left-5",
    bottom: "-bottom-24",
    delay: 0.2,
  },
];
const images10 = [
  {
    src: "/Rectangle 68.svg",
    zIndex: "z-10",
    bottom: "sm:-bottom-24 -bottom-14",
    right: "sm:-right-0 -right-10",
    delay: 0,
  },
  {
    src: "/Rectangle 66.svg",
    zIndex: "z-30",
    right: "-right-0",
    bottom: "sm:-bottom-14 -bottom-8",
    delay: 0.1,
  },
  {
    src: "/Rectangle 67.svg",
    zIndex: "z-20",
    right: "sm:-right-0 -right-5",
    bottom: "-bottom-24",
    delay: 0.2,
  },
];
const images11 = [
  {
    src: "/Rectangle 70.svg",
    zIndex: "z-40",
    top: "sm:-top-24 -top-5",
    left: "sm:-left-0 -left-20",
    delay: 0,
  },
  {
    src: "/Rectangle 71.svg",
    zIndex: "z-30",
    left: "sm:left-0 -left-20",
    top: "sm:-top-24 -top-10",
    delay: 0.1,
  },
  {
    src: "/Rectangle 72.svg",
    zIndex: "z-20",
    left: "sm:-left-0 left-5",
    top: "sm:-top-20 top-0",
    delay: 0.2,
  },
  {
    src: "/Rectangle 73.svg",
    zIndex: "z-10",
    left: "sm:-left-0 left-1",
    top: "sm:-top-20 top-0",
    delay: 0.3,
  },
  {
    src: "/Rectangle 74.svg",
    zIndex: "z-0",
    left: "-left-0",
    top: "sm:-top-24 top-0",
    delay: 0.4,
  },
];
const images12 = [
  {
    src: "/Rectangle 75.svg",
    zIndex: "z-40",
    bottom: "sm:-bottom-24 -bottom-5",
    right: "sm:-right-0 -right-20",
    delay: 0,
  },
  {
    src: "/Rectangle 76.svg",
    zIndex: "z-30",
    right: "sm:right-0 -right-20",
    bottom: "sm:-bottom-24 -bottom-10",
    delay: 0.1,
  },
  {
    src: "/Rectangle 77.svg",
    zIndex: "z-20",
    right: "sm:-right-0 right-5",
    bottom: "sm:-bottom-20 bottom-0",
    delay: 0.2,
  },
  {
    src: "/Rectangle 78.svg",
    zIndex: "z-10",
    right: "sm:-right-0 right-1",
    bottom: "sm:-bottom-20 bottom-0",
    delay: 0.3,
  },
  {
    src: "/Rectangle 79.svg",
    zIndex: "z-0",
    right: "-right-0",
    bottom: "sm:-bottom-24 bottom-0",
    delay: 0.4,
  },
];

const WrappedPage = () => {
  const [currentPart, setCurrentPart] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        setCurrentPart(currentPart < 7 ? currentPart + 1 : 7);
      }, 5000);
      // setCurrentPart(6);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentPart, isPaused]);

  const handleTouchStart = () => {
    handleMouseEnter();
  };

  const handleTouchEnd = () => {
    handleMouseLeave();
  };

  const handlePrev = () => {
    if (currentPart > 1) {
      setCurrentPart(currentPart - 1);
    }
  };

  const handleNext = () => {
    if (currentPart < 7) {
      setCurrentPart(currentPart + 1);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {currentPart === 1 ? (
          <div
            key="part1"
            className="bg-black text-white dm-sans min-h-screen min-w-screen flex flex-col items-center justify-center leading-none relative"
          >
            {layers.map(({ z, w, h, top, left, rotate, delay }, index) => (
              <motion.div
                key={index}
                initial={{
                  rotate: rotate + 90,
                  y: -800,
                }}
                animate={{
                  rotate: rotate,
                  y: 0,
                }}
                exit={{
                  rotate: rotate - 90,
                  y: -800,
                }}
                transition={{
                  duration: 1,
                  ease: easeInOut,
                  delay: delay,
                }}
                className={`fixed bg-gradient-to-r from-[#1CBAFF] via-[#4f76f5] to-[#6366FD] shadow-[0px_4px_51px_#6564FD]`}
                style={{
                  zIndex: z,
                  width: `${w}px`,
                  height: `${h}px`,
                  top: `${top}px`,
                  left: `${left}px`,
                }}
              />
            ))}
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -20, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5, ease: easeInOut }}
              exit={{ opacity: 0, y: 20 }}
              className="z-50 sm:text-[6rem] text-[3.5rem] font-[700]"
            >
              SIAM
            </motion.span>
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -30, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.65, ease: easeInOut }}
              exit={{ opacity: 0, y: 30 }}
              className="z-50 sm:text-[7rem] text-[4.5rem] font-[700]"
            >
              2024
            </motion.span>
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -40, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.85, ease: easeInOut }}
              exit={{ opacity: 0, y: 40 }}
              className="z-50 sm:text-[6rem] text-[3.5rem] font-[700]"
            >
              Wrapped
            </motion.span>
            {layers2.map(({ z, w, h, bottom, right, rotate, delay }, index) => (
              <motion.div
                key={index}
                initial={{
                  rotate: rotate - 90,
                  y: 800,
                }}
                animate={{
                  rotate: rotate,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  ease: easeInOut,
                  delay: delay,
                }}
                exit={{
                  rotate: rotate + 90,
                  y: 800,
                }}
                className={`fixed bg-gradient-to-r from-[#1CBAFF] via-[#4f76f5] to-[#6366FD] shadow-[0px_4px_51px_#6564FD]`}
                style={{
                  zIndex: z,
                  width: `${w}px`,
                  height: `${h}px`,
                  bottom: `${bottom}px`,
                  right: `${right}px`,
                }}
              />
            ))}
            {isPaused && (
              <div className="z-50 absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
                Paused
              </div>
            )}
            <button
              className="z-50 absolute bottom-4 left-4 bg-white text-black text-xl px-3 py-1 rounded-full"
              onClick={handlePrev}
              disabled={currentPart === 1}
            >
              Previous
            </button>
            <button
              className="z-50 absolute bottom-4 right-4 bg-white text-black text-xl px-3 py-1 rounded-full"
              onClick={handleNext}
              disabled={currentPart === 7}
            >
              Next
            </button>
          </div>
        ) : currentPart === 2 ? (
          <div
            key="part6"
            className="overflow-hidden bg-black text-white dm-sans min-h-screen min-w-screen flex flex-col items-center justify-center leading-none relative"
          >
            {images11.map((img, index) => (
              <motion.img
                key={index}
                src={img.src}
                alt={`Rectangle ${53 + index}`}
                className={`absolute ${img.zIndex} ${img.top} ${img.left}`}
                initial={{ y: -1000, rotate: -90 }}
                animate={{ y: 0, rotate: 0 }}
                exit={{ y: -1000, rotate: -90 }}
                transition={{
                  duration: 0.85,
                  delay: img.delay,
                  ease: easeInOut,
                }}
              />
            ))}
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -20, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: easeInOut }}
              exit={{ opacity: 0, y: 20 }}
              className="sm:text-[6rem] text-[5rem] font-[700] z-40 text-center"
            >
              100+
            </motion.span>
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -30, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6, ease: easeInOut }}
              exit={{ opacity: 0, y: 30 }}
              className="sm:text-[4rem] text-[3rem] font-[700] z-40 text-center"
            >
              participants
            </motion.span>
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -40, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9, ease: easeInOut }}
              exit={{ opacity: 0, y: 40 }}
              className="sm:text-[4rem] text-[3rem] font-[700] z-40 text-center mt-4"
            >
              created over 25 websites during Yantra'24
            </motion.span>
            {images12.map((img, index) => (
              <motion.img
                key={index}
                src={img.src}
                alt={`Rectangle ${53 + index}`}
                className={`absolute ${img.zIndex} ${img.bottom} ${img.right}`}
                initial={{ y: 1000, rotate: -90 }}
                animate={{ y: 0, rotate: 0 }}
                exit={{ y: 1000, rotate: -90 }}
                transition={{
                  duration: 0.85,
                  delay: img.delay,
                  ease: easeInOut,
                }}
              />
            ))}
            {isPaused && (
              <div className="z-50 absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
                Paused
              </div>
            )}
            <button
              className="z-50 absolute bottom-4 left-4 bg-white text-black text-xl px-3 py-1 rounded-full"
              onClick={handlePrev}
              disabled={currentPart === 1}
            >
              Previous
            </button>
            <button
              className="z-50 absolute bottom-4 right-4 bg-white text-black text-xl px-3 py-1 rounded-full"
              onClick={handleNext}
              disabled={currentPart === 7}
            >
              Next
            </button>
          </div>
        ) : currentPart === 3 ? (
          <div
            key="part2"
            className="overflow-hidden bg-black text-white dm-sans min-h-screen min-w-screen flex flex-col items-center justify-center leading-none relative"
          >
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img.src}
                alt={`Rectangle ${28 + index}`}
                className={`absolute ${img.zIndex} ${img.left} ${img.top}`}
                initial={{ y: -600, rotate: 90 }}
                animate={{ y: 0, rotate: 0 }}
                exit={{ y: -600, rotate: 90 }}
                transition={{
                  duration: 1,
                  delay: img.delay,
                  ease: easeInOut,
                }}
              />
            ))}
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -20, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: easeInOut }}
              exit={{ opacity: 0, y: 20 }}
              className="z-50 sm:text-[6rem] text-[4.5rem] font-[700]"
            >
              150+
            </motion.span>
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -30, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5, ease: easeInOut }}
              exit={{ opacity: 0, y: 30 }}
              className="z-50 sm:text-[4rem] text-[3rem] font-[700] text-center"
            >
              students participated
            </motion.span>
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -40, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7, ease: easeInOut }}
              exit={{ opacity: 0, y: 40 }}
              className="z-50 sm:text-[4rem] text-[3rem] font-[700] text-center"
            >
              in our events in Riviera'24
            </motion.span>
            {images2.map((img, index) => (
              <motion.img
                key={index}
                src={img.src}
                alt={`Rectangle ${28 + index}`}
                className={`absolute ${img.zIndex} ${img.right} ${img.bottom}`}
                initial={{ y: 800, rotate: 270 }}
                animate={{ y: 0, rotate: 180 }}
                exit={{ y: 800, rotate: 270 }}
                transition={{
                  duration: 1,
                  delay: img.delay,
                  ease: easeInOut,
                }}
              />
            ))}
            {isPaused && (
              <div className="z-50 absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
                Paused
              </div>
            )}
            <button
              className="z-50 absolute bottom-4 left-4 bg-white text-black text-xl px-3 py-1 rounded-full"
              onClick={handlePrev}
              disabled={currentPart === 1}
            >
              Previous
            </button>
            <button
              className="z-50 absolute bottom-4 right-4 bg-white text-black text-xl px-3 py-1 rounded-full"
              onClick={handleNext}
              disabled={currentPart === 7}
            >
              Next
            </button>
          </div>
        ) : currentPart === 4 ? (
          <div
            key="part5"
            className="overflow-hidden bg-black text-white dm-sans min-h-screen min-w-screen flex flex-col items-center justify-center leading-none relative"
          >
            {images7.map((img, index) => (
              <motion.img
                key={index}
                src={img.src}
                alt={`Rectangle ${53 + index}`}
                className={`absolute ${img.zIndex} ${img.top} ${img.left}`}
                initial={{ y: -600, rotate: 90 }}
                animate={{ y: 0, rotate: 0 }}
                exit={{ y: -600, rotate: 90 }}
                transition={{
                  duration: 0.85,
                  delay: img.delay,
                  ease: easeInOut,
                }}
              />
            ))}
            {images8.map((img, index) => (
              <motion.img
                key={index}
                src={img.src}
                alt={`Rectangle ${53 + index}`}
                className={`absolute ${img.zIndex} ${img.top} ${img.right}`}
                initial={{ y: -600, rotate: -90 }}
                animate={{ y: 0, rotate: 0 }}
                exit={{ y: -600, rotate: -90 }}
                transition={{
                  duration: 0.85,
                  delay: img.delay,
                  ease: easeInOut,
                }}
              />
            ))}
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -20, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: easeInOut }}
              exit={{ opacity: 0, y: 20 }}
              className="sm:text-[6rem] text-[5rem] font-[700] z-40 text-center"
            >
              120+
            </motion.span>
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -30, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6, ease: easeInOut }}
              exit={{ opacity: 0, y: 30 }}
              className="sm:text-[4rem] text-[3rem] font-[700] z-40 text-center"
            >
              math enthusiasts participated
            </motion.span>
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -40, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9, ease: easeInOut }}
              exit={{ opacity: 0, y: 40 }}
              className="sm:text-[4rem] text-[3rem] font-[700] z-40 text-center"
            >
              in our flagship event MPL during Gravitas'24
            </motion.span>
            {images9.map((img, index) => (
              <motion.img
                key={index}
                src={img.src}
                alt={`Rectangle ${53 + index}`}
                className={`absolute ${img.zIndex} ${img.bottom} ${img.left}`}
                initial={{ y: 600, rotate: -90 }}
                animate={{ y: 0, rotate: 0 }}
                exit={{ y: 600, rotate: -90 }}
                transition={{
                  duration: 0.85,
                  delay: img.delay,
                  ease: easeInOut,
                }}
              />
            ))}
            {images10.map((img, index) => (
              <motion.img
                key={index}
                src={img.src}
                alt={`Rectangle ${53 + index}`}
                className={`absolute ${img.zIndex} ${img.bottom} ${img.right}`}
                initial={{ y: 600, rotate: 90 }}
                animate={{ y: 0, rotate: 0 }}
                exit={{ y: 600, rotate: 90 }}
                transition={{
                  duration: 0.85,
                  delay: img.delay,
                  ease: easeInOut,
                }}
              />
            ))}
            {isPaused && (
              <div className="z-50 absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
                Paused
              </div>
            )}
            <button
              className="z-50 absolute bottom-4 left-4 bg-white text-black text-xl px-3 py-1 rounded-full"
              onClick={handlePrev}
              disabled={currentPart === 1}
            >
              Previous
            </button>
            <button
              className="z-50 absolute bottom-4 right-4 bg-white text-black text-xl px-3 py-1 rounded-full"
              onClick={handleNext}
              disabled={currentPart === 7}
            >
              Next
            </button>
          </div>
        ) : currentPart === 5 ? (
          <div
            key="part4"
            className="overflow-hidden bg-black text-white dm-sans min-h-screen min-w-screen flex flex-col items-center justify-center leading-none relative"
          >
            {images5.map((img, index) => (
              <motion.img
                key={index}
                src={img.src}
                alt={`Rectangle ${53 + index}`}
                className={`absolute ${img.zIndex} ${img.top} ${img.left}`}
                initial={{ y: -600, rotate: 30 }}
                animate={{ y: 0, rotate: 0 }}
                exit={{ y: -600, rotate: 30 }}
                transition={{
                  duration: 0.85,
                  delay: img.delay,
                  ease: easeInOut,
                }}
              />
            ))}
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -20, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: easeInOut }}
              exit={{ opacity: 0, y: 20 }}
              className="sm:text-[4rem] text-[3rem] font-[700] z-40 text-center"
            >
              <span className="sm:text-[5rem] text-[3.5rem]">9</span> expos
            </motion.span>
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -30, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55, ease: easeInOut }}
              exit={{ opacity: 0, y: 30 }}
              className="sm:text-[4rem] text-[3rem] font-[700] z-40 text-center"
            >
              <span className="sm:text-[5rem] text-[3.5rem]">40+</span> hours of
              pitching
            </motion.span>
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -40, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.75, ease: easeInOut }}
              exit={{ opacity: 0, y: 40 }}
              className="sm:text-[4rem] text-[3rem] font-[700] z-40 text-center"
            >
              <span className="sm:text-[5rem] text-[3.5rem]">1.4k+</span>{" "}
              followers on Instagram
            </motion.span>
            {images6.map((img, index) => (
              <motion.img
                key={index}
                src={img.src}
                alt={`Rectangle ${53 + index}`}
                className={`absolute ${img.zIndex} ${img.bottom} ${img.right}`}
                initial={{ y: 600, rotate: 210 }}
                animate={{ y: 0, rotate: 180 }}
                exit={{ y: 600, rotate: 210 }}
                transition={{
                  duration: 0.85,
                  delay: img.delay,
                  ease: easeInOut,
                }}
              />
            ))}
            {isPaused && (
              <div className="z-50 absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
                Paused
              </div>
            )}
            <button
              className="z-50 absolute bottom-4 left-4 bg-white text-black text-xl px-3 py-1 rounded-full"
              onClick={handlePrev}
              disabled={currentPart === 1}
            >
              Previous
            </button>
            <button
              className="z-50 absolute bottom-4 right-4 bg-white text-black text-xl px-3 py-1 rounded-full"
              onClick={handleNext}
              disabled={currentPart === 7}
            >
              Next
            </button>
          </div>
        ) : currentPart === 6 ? (
          <div
            key="part3"
            className="overflow-hidden bg-black text-white dm-sans min-h-screen min-w-screen flex flex-col items-center justify-center leading-none relative"
          >
            {images3.map((img, index) => (
              <motion.img
                key={index}
                src={img.src}
                alt={`Rectangle ${40 + index}`}
                className={`absolute ${img.zIndex} ${img.left} ${img.top}`}
                initial={{ y: -1000, rotate: -90 }}
                animate={{ y: 0, rotate: 0 }}
                exit={{ y: -1000, rotate: -90 }}
                transition={{
                  duration: 0.85,
                  delay: img.delay,
                  ease: easeInOut,
                }}
              />
            ))}
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -30, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: easeInOut }}
              exit={{ opacity: 0, y: 30 }}
              className="sm:text-[3.5rem] text-[3rem] font-[700] z-40 text-center"
            >
              Think SIAM strives for productivity alone?{" "}
              <br className="sm:hidden visible" /> Think again!
            </motion.span>
            <br className="sm:hidden visible" />
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -30, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5, ease: easeInOut }}
              exit={{ opacity: 0, y: 30 }}
              className="sm:text-[3.5rem] text-[2.5rem] font-[700] z-40 text-center"
            >
              We had 50+ night slips
            </motion.span>
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              initial={{ y: -40, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7, ease: easeInOut }}
              exit={{ opacity: 0, y: 40 }}
              className="sm:text-[3.5rem] text-[2.5rem] font-[700] z-40 text-center"
            >
              with more than 60 hours of impromptu dancing <br /> and infinite
              amount of fun!
            </motion.span>
            {images4.map((img, index) => (
              <motion.img
                key={index}
                src={img.src}
                alt={`Rectangle ${28 + index}`}
                className={`absolute ${img.zIndex} ${img.right} ${img.bottom}`}
                initial={{ y: 1200, rotate: 90 }}
                animate={{ y: 0, rotate: 180 }}
                exit={{ y: 1200, rotate: 90 }}
                transition={{
                  duration: 0.85,
                  delay: img.delay,
                  ease: easeInOut,
                }}
              />
            ))}
            {isPaused && (
              <div className="z-50 absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
                Paused
              </div>
            )}
            <button
              className="z-50 absolute bottom-4 left-4 bg-white text-black text-xl px-3 py-1 rounded-full"
              onClick={handlePrev}
              disabled={currentPart === 1}
            >
              Previous
            </button>
            <button
              className="z-50 absolute bottom-4 right-4 bg-white text-black text-xl px-3 py-1 rounded-full"
              onClick={handleNext}
              disabled={currentPart === 7}
            >
              Next
            </button>
          </div>
        ) : currentPart === 7 ? (
          <div
            key="final"
            className="text-center overflow-hidden bg-black text-white dm-sans min-h-screen min-w-screen flex flex-col items-center justify-center leading-tight relative"
          >
            {layers.map(({ z, w, h, top, left, rotate, delay }, index) => (
              <motion.div
                key={index}
                initial={{
                  rotate: rotate + 90,
                  y: -800,
                }}
                animate={{
                  rotate: rotate,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  ease: easeInOut,
                  delay: delay,
                }}
                exit={{
                  rotate: rotate - 90,
                  y: -800,
                }}
                className={`fixed bg-gradient-to-r from-[#1CBAFF] via-[#4f76f5] to-[#6366FD] shadow-[0px_4px_51px_#6564FD]`}
                style={{
                  zIndex: z,
                  width: `${w}px`,
                  height: `${h}px`,
                  top: `${top}px`,
                  left: `${left}px`,
                }}
              />
            ))}
            <motion.span
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: easeInOut }}
              exit={{ opacity: 0, y: -30 }}
              className="sm:mt-0 mt-5 sm:text-[7rem] text-[3rem] font-[700] z-40"
            >
              This is us.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: easeInOut }}
              exit={{ opacity: 0, y: -40 }}
              className="sm:text-[7rem] text-[3rem] font-[700] z-40"
            >
              This is SIAM-VIT.
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2, ease: easeInOut }}
              exit={{ opacity: 0, y: -30 }}
              className="z-50"
            >
              <Link to="/">
                <button className="mb-7 sm:mt-10 mt-5 uppercase rounded-full sm:py-1.5 py-1 sm:px-3 px-2.5 font-bold text-[#f9f9f9] bg-gradient-to-r from-[#1CBAFF] via-[#4f76f5] to-[#6366FD] shadow-[0px_4px_51px_#6564FD]">
                  <span className="[text-shadow:_0_2px_4px_rgb(000_000_000_/0.65)] text-[26px]">
                    Back to main page
                  </span>
                </button>
              </Link>
            </motion.div>
            {layers2.map(({ z, w, h, bottom, right, rotate, delay }, index) => (
              <motion.div
                key={index}
                initial={{
                  rotate: rotate - 90,
                  y: 800,
                }}
                animate={{
                  rotate: rotate,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  ease: easeInOut,
                  delay: delay,
                }}
                exit={{
                  rotate: rotate + 90,
                  y: 800,
                }}
                className={`fixed bg-gradient-to-r from-[#1CBAFF] via-[#4f76f5] to-[#6366FD] shadow-[0px_4px_51px_#6564FD]`}
                style={{
                  zIndex: z,
                  width: `${w}px`,
                  height: `${h}px`,
                  bottom: `${bottom}px`,
                  right: `${right}px`,
                }}
              />
            ))}
            <button
              className="z-50 absolute bottom-4 left-4 bg-white text-black text-xl px-3 py-1 rounded-full"
              onClick={handlePrev}
              disabled={currentPart === 1}
            >
              Previous
            </button>
            <button
              className="z-50 absolute bottom-4 right-4 bg-white text-black text-xl px-3 py-1 rounded-full"
              onClick={handleNext}
              disabled={currentPart === 7}
            >
              Next
            </button>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default WrappedPage;
