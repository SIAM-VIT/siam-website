import React, { useRef } from "react";
// import arrow from "../../public/arrow.svg";
// import { section } from "framer-motion/client";

export default function Events() {
  return (
    <div className="flex flex-col  gap-20  bg-gradient-custom">
      <section className="events h-[100vh] flex flex-col sm:flex-row items-center justify-between ml-5 pl-10">
        <div className="text-center">
          <h1 className="uppercase text-white font-bold text-[64px] sm:text-[48px] mb-10 leading-none">
            DISCOVER
            <br />
            OUR EVENTS
          </h1>
          <h3 className="text-white font-bold ">
            Where Ideas Transform Into Reality
          </h3>
        </div>
        <div>
          <img src="placeholder.png" alt="placeholder" className="w-100 h-80" />
        </div>
      </section>

      <section className="objective h-[100vh] mt-12 relative">
        <div>
          <div className="bg-[#9CEBDB] absolute top-0 left-0 h-10 w-10"></div>
          <div className="bg-[#9CEBDB] absolute top-10 left-10 h-10 w-10"></div>
          <div className="bg-[#9CEBDB] absolute top-20 left-0 h-80 w-10"></div>
        </div>
        <h1 className="uppercase text-center text-white font-bold text-[64px] sm:text-[48px] ml-12 mb-10 leading-none">
          WHAT WE DO?
        </h1>
        <h3 className="text-center text-white font-bold p-5 m-10">
          SIAM thrives on blending innovation and creativity by organizing
          diverse events during cultural and tech fests. From interactive
          workshops and coding challenges to tech exhibitions and fun
          cultural-themed technical games, we ensure a perfect mix of learning
          and entertainment. These events cater to enthusiasts of all levels,
          fostering collaboration, skill development, and a passion for
          technology in an engaging environment.
        </h3>
        <div className="flex flex-col sm:flex-row justify-evenly items-center p-2  gap-5">
          <div>
            <div className="bg-gradient-green rounded-full w-40 h-40"></div>
            <h3 className="text-white text-center italic font-bold mt-10 underline text-[32px] hidden sm:block">
              GRAVITAS
            </h3>
          </div>
          <div>
            <div className="bg-gradient-green rounded-full w-40 h-40"></div>
            <h3 className="text-white text-center italic font-bold mt-10 underline text-[32px] hidden sm:block">
              RIVIERA
            </h3>
          </div>
          <div>
            <div className="bg-gradient-green rounded-full w-40 h-40"></div>
            <h3 className="text-white text-center italic font-bold mt-10 underline text-[32px] hidden sm:block">
              YANTRA
            </h3>
          </div>
          <div>
            <div className="bg-[#9CEBDB] absolute bottom-0 right-0 h-10 w-10"></div>
            <div className="bg-[#9CEBDB] absolute bottom-10 right-10 h-10 w-10"></div>
            <div className="bg-[#9CEBDB] absolute bottom-20 right-0 h-80 w-10"></div>
          </div>
        </div>
      </section>
      <section className="gravitas relative mt-12">
        <div className="h-screen bg-gradient-custom text-white font-bold font-poppins flex flex-col sm:flex-row md:flex-row">
          {/* Left Section */}
          <div className="lg:w-2/5 sm:w-1/2 flex flex-col justify-center relative">
            <h1 className="uppercase font-bold text-[64px] sm:text-[48px] ml-12 mb-10 leading-none">
              Gravitas
            </h1>
            <div className="relative w-80 h-60">
              <div className="bg-gradient-green w-full h-[40%]"></div>
              <img
                src="circle.svg"
                className="absolute top-5 left-12 transform -translate-x-1/2 -translate-y-1 "
              />
              <svg
                width="100%"
                height="80%"
                viewBox="0 0 62 357"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-10 left-12  transform -translate-x-1/2 -translate-y-1"
              >
                <path
                  d="M26.3338 6.0289C26.438 2.91134 28.9181 0.262752 32.1556 0.291452C35.3833 0.31562 37.9992 2.9891 37.895 6.10665L36.5765 301.926L61.1689 302.019L30.6512 356.973L0.531588 301.678L25.0163 301.847L26.3338 6.0289Z"
                  fill="#9CEBDB"
                />
              </svg>
            </div>
          </div>
          <div className="lg:w-3/5 sm:w-1/2 mr-10 h-full grid grid-cols-2 grid-rows-2 justify-items-center content-center ">
            <div className="flex justify-center items-center">
              <img
                src="placeholder.png"
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-center text-[36px]">MATH PREMIER LEAGUE</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-center text-[36px]">EVENTS 2</p>
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
        </div>
      </section>
      <section className="riviera relative">
        <div className="h-screen bg-gradient-custom text-white font-bold font-poppins flex flex-col sm:flex-row md:flex-row">
          {/* Left Section */}
          <div className="lg:w-2/5 sm:w-1/2 flex flex-col justify-center relative">
            <h1 className="uppercase font-bold text-[64px] sm:text-[48px] ml-12 mb-10 leading-none">
              Riviera
            </h1>
            <div className="relative w-80 h-60">
              <div className="bg-gradient-green w-full h-[40%]"></div>
              <img
                src="circle.svg"
                className="absolute top-5 left-12 transform -translate-x-1/2 -translate-y-1 "
              />
              <svg
                width="100%"
                height="80%"
                viewBox="0 0 62 357"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-10 left-12  transform -translate-x-1/2 -translate-y-1"
              >
                <path
                  d="M26.3338 6.0289C26.438 2.91134 28.9181 0.262752 32.1556 0.291452C35.3833 0.31562 37.9992 2.9891 37.895 6.10665L36.5765 301.926L61.1689 302.019L30.6512 356.973L0.531588 301.678L25.0163 301.847L26.3338 6.0289Z"
                  fill="#9CEBDB"
                />
              </svg>
            </div>
          </div>
          <div className="lg:w-3/5 sm:w-1/2 mr-10 h-full grid grid-cols-2 grid-rows-2 justify-items-center content-center ">
            <div className="flex justify-center items-center">
              <img
                src="placeholder.png"
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gradient-green h-[8%] w-[10%] absolute right-2 block sm:hidden"></div>
            <div className="flex justify-center items-center">
              <p className="text-center text-[36px]">VIT'S GOT TALENT</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-center text-[36px]">TRIWIZARD TOURNAMENT</p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="placeholder.png"
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-gradient-green absolute bottom-0 lg:right-2 sm:right-2 h-[10vw] w-[10vw]"></div>
        </div>
      </section>
      <section className="yantra relative">
        <div className="h-screen bg-gradient-custom text-white font-bold font-poppins flex flex-col sm:flex-row md:flex-row">
          {/* Left Section */}
          <div className="lg:w-2/5 sm:w-1/2 flex flex-col justify-center relative">
            <h1 className="uppercase font-bold text-[64px] sm:text-[48px] ml-12 mb-10 leading-none">
              Yantra
            </h1>
            <div className="relative w-80 h-60">
              <div className="bg-gradient-green w-full h-[40%]"></div>
              <img
                src="circle.svg"
                className="absolute top-5 left-12 transform -translate-x-1/2 -translate-y-1 "
              />
              <svg
                width="100%"
                height="80%"
                viewBox="0 0 62 357"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-10 left-12  transform -translate-x-1/2 -translate-y-1"
              >
                <path
                  d="M26.3338 6.0289C26.438 2.91134 28.9181 0.262752 32.1556 0.291452C35.3833 0.31562 37.9992 2.9891 37.895 6.10665L36.5765 301.926L61.1689 302.019L30.6512 356.973L0.531588 301.678L25.0163 301.847L26.3338 6.0289Z"
                  fill="#9CEBDB"
                />
              </svg>
            </div>
          </div>
          <div className="lg:w-3/5 sm:w-1/2 mr-10 h-full grid grid-cols-2 grid-rows-2 justify-items-center content-center ">
            <div className="bg-gradient-green h-[8%] w-[10%] absolute right-2 block sm:hidden"></div>
            <div className="flex justify-center items-center">
              <img
                src="placeholder.png"
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-center text-[36px]">EVENT 2</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-center text-[36px]">EVENT 2</p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="placeholder.png"
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-gradient-green absolute bottom-0 lg:right-2 sm:right-2 h-[10vw] w-[10vw]"></div>
        </div>
      </section>
    </div>
  );
}
