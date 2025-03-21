import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { useWindowSize } from "react-use";

const TeamPageContent = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);
  const triggerAnimation = () => {
    setIsVisible(!isVisible);
  };
  const [activePerson, setActivePerson] = useState(null);
  const { width, height } = useWindowSize();
  const handleClose = () => {
    setActivePerson(null);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const boardDetails = [
    {
      name: "Aaditya Roshan",
      role: "Chairperson",
      desc: "blah blah blah",
      img: "",
    },
    {
      name: "Akshat Gupta",
      role: "Technical Head",
      desc: "blah blah blah",
      img: "",
      linkedin: "https://www.linkedin.com/in/akshat-gupta-864b39235",
    },
    {
      name: "Harsh Agrawal",
      role: "Vice Chairperson",
      desc: "blah blah blah",
      img: "",
    },
    {
      name: "Kunal Kundnani",
      role: "Design Head",
      desc: "blah blah blah",
      img: "",
    },
    {
      name: "Rinika Paramba",
      role: "General Secretary",
      desc: "blah blah blah",
      img: "",
    },
    {
      name: "Nischitha Shetty",
      role: "Publicity Head",
      desc: "blah blah blah",
      img: "",
    },
    {
      name: "Leena Kannan",
      role: "Co-Secretary",
      desc: "blah blah blah",
      img: "",
    },
    {
      name: "Ashutosh Chandra",
      role: "Creativity Head",
      desc: "blah blah blah",
      img: "",
    },
    {
      name: "Samarth Shokeen",
      role: "Events Head",
      desc: "blah blah blah",
      img: "",
    },
    { name: "Yash Bothra", role: "HR Head", desc: "blah blah blah", img: "" },
  ];
  const person = boardDetails.find(
    (member) => member.name.toLowerCase() === activePerson
  );
  const personImage = boardDetails.map((member) => ({
    imageUrl: `/${member}.webp`,
  }));

  return (
    <>
      <AnimatePresence mode="wait">
        {isVisible && (
          <>
            <div
              key="intro"
              className="overflow-hidden sm:h-full max-w-screen max-h-screen -z-10 sm:w-full poppins bg-gradient-to-r from-black to-[#001B0C] opacity-[94%] text-[#9cebdb]"
            >
              <div className="min-h-screen">
                <img
                  src="laptop-image.webp"
                  alt="laptop"
                  className="z-0 opacity-[0.07] sm:block hidden"
                />
                <img
                  src="ml-page-1.webp"
                  alt="laptop"
                  className="z-10 sm:hidden visible absolute top-10 min-w-[100vw]"
                />
              </div>
              <div className="flex flex-col z-10 absolute w-full h-full sm:w-[100vw] sm:h-[100vh] sm:top-0 -top-32 items-center justify-center">
                <div className="sm:p-20 p-10 mt-32 z-10 border-[#9cebdb] border-2 sm:w-fit w-max">
                  <span className="text-[#9cebdb] text-[32px] sm:text-[50px] font-semibold text-center block">
                    Get To Know
                  </span>
                  <br />
                  <span className="text-[#9cebdb] font-bold text-[50px] sm:text-[125px] uppercase text-center block">
                    Our team
                  </span>
                </div>
                <div className="absolute sm:right-40 right-[12.75rem] sm:bottom-[23.5rem] bottom-[9rem]">
                  <div className="w-full h-full relative">
                    <button
                      onClick={triggerAnimation}
                      className="sm:w-[75px] sm:h-[75px] h-[50px] w-[50px] flex items-center justify-center absolute left-0 top-0 rounded-[15px] sm:rounded-[25px] bg-gradient-to-r from-[#4DA8EA] to-[#00D856]"
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
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {!isVisible && !isMobile && (
          <>
            <motion.div
              key="newPage"
              initial={{ x: width, opacity: 0.65 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: width, opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: easeOut,
                delay: 0.1,
              }}
              className="relative w-fit h-fit min-h-screen poppins overflow-hidden text-white bg-gradient-to-r from-black to-[#001B0C] opacity-[100%]"
            >
              <div className="overflow-hidden w-fit h-fit">
                <img src="board.webp" alt="board" className="opacity-[0.25]" />
              </div>
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="top-0 absolute overflow-hidden w-full h-full z-30 flex flex-col items-center"
              >
                <div className="pt-8 h-1/3 w-full flex items-center justify-center">
                  <h1 className="text-[65px] font-bold uppercase mt-36">
                    Our board members
                  </h1>
                </div>
                <div className="overflow-hidden h-2/3 w-full flex flex-col items-center justify-center gap-y-5">
                  <div className="flex items-center justify-between w-[80%] h-[90%]">
                    <div className="flex flex-col items-center justify-between w-fit h-fit">
                      <button
                        onClick={() => setActivePerson("aaditya roshan")}
                        className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"
                      ></button>
                      <button
                        onClick={() => setActivePerson("aaditya roshan")}
                        className="flex flex-col items-center justify-center"
                      >
                        <span className="font-medium text-[22px]">
                          Aaditya Roshan
                        </span>
                        <span className="italic text-[16px] mb-5">
                          Chairperson
                        </span>
                      </button>
                      <button
                        onClick={() => setActivePerson("akshat gupta")}
                        className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"
                      ></button>
                      <button
                        onClick={() => setActivePerson("akshat gupta")}
                        className="flex flex-col items-center justify-center"
                      >
                        <span className="font-medium text-[22px]">
                          Akshat Gupta
                        </span>
                        <span className="italic text-[16px]">
                          Technical Head
                        </span>
                      </button>
                    </div>
                    <div className="flex flex-col items-center justify-between w-fit h-fit">
                      <button
                        onClick={() => setActivePerson("harsh agrawal")}
                        className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"
                      ></button>
                      <button
                        onClick={() => setActivePerson("harsh agrawal")}
                        className="flex flex-col items-center justify-center"
                      >
                        <span className="font-medium text-[22px]">
                          Harsh Agrawal
                        </span>
                        <span className="italic text-[16px] mb-5">
                          Vice Chairperson
                        </span>
                      </button>
                      <button
                        onClick={() => setActivePerson("kunal kundnani")}
                        className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"
                      ></button>
                      <button
                        onClick={() => setActivePerson("kunal kundnani")}
                        className="flex flex-col items-center justify-center"
                      >
                        <span className="font-medium text-[22px]">
                          Kunal Kundnani
                        </span>
                        <span className="italic text-[16px]">Design Head</span>
                      </button>
                    </div>
                    <div className="flex flex-col items-center justify-between w-fit h-fit">
                      <button
                        onClick={() => setActivePerson("rinika paramba")}
                        className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"
                      ></button>
                      <button
                        onClick={() => setActivePerson("rinika paramba")}
                        className="flex flex-col items-center justify-center"
                      >
                        <span className="font-medium text-[22px]">
                          Rinika Paramba
                        </span>
                        <span className="italic text-[16px] mb-5">
                          General Secretary
                        </span>
                      </button>
                      <button
                        onClick={() => setActivePerson("nischitha shetty")}
                        className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"
                      ></button>
                      <button
                        onClick={() => setActivePerson("nischitha shetty")}
                        className="flex flex-col items-center justify-center"
                      >
                        <span className="font-medium text-[22px]">
                          Nischitha Shetty
                        </span>
                        <span className="italic text-[16px]">
                          Publicity Head
                        </span>
                      </button>
                    </div>
                    <div className="flex flex-col items-center justify-between w-fit h-fit">
                      <button
                        onClick={() => setActivePerson("leena kannan")}
                        className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"
                      ></button>
                      <button
                        onClick={() => setActivePerson("leena kannan")}
                        className="flex flex-col items-center justify-center"
                      >
                        <span className="font-medium text-[22px]">
                          Leena Kannan
                        </span>
                        <span className="italic text-[16px] mb-5">
                          Co-Secretary
                        </span>
                      </button>
                      <button
                        onClick={() => setActivePerson("ashutosh chandra")}
                        className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"
                      ></button>
                      <button
                        onClick={() => setActivePerson("ashutosh chandra")}
                        className="flex flex-col items-center justify-center"
                      >
                        <span className="font-medium text-[22px]">
                          Ashutosh Chandra
                        </span>
                        <span className="italic text-[16px]">
                          Creativity Head
                        </span>
                      </button>
                    </div>
                    <div className="flex flex-col items-center justify-between w-fit h-fit">
                      <button
                        onClick={() => setActivePerson("samarth shokeen")}
                        className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"
                      ></button>
                      <button
                        onClick={() => setActivePerson("samarth shokeen")}
                        className="flex flex-col items-center justify-center"
                      >
                        <span className="font-medium text-[22px]">
                          Samarth Shokeen
                        </span>
                        <span className="italic text-[16px] mb-5">
                          Events Head
                        </span>
                      </button>
                      <button
                        onClick={() => setActivePerson("yash bothra")}
                        className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"
                      ></button>
                      <button
                        onClick={() => setActivePerson("yash bothra")}
                        className="flex flex-col items-center justify-center"
                      >
                        <span className="font-medium text-[22px]">
                          Yash Bothra
                        </span>
                        <span className="italic text-[16px]">HR Head</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
        {!isVisible && isMobile && (
          <motion.div
            key="newPageMobile"
            initial={{ x: width, opacity: 0.65 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: width, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: easeOut,
              delay: 0.1,
            }}
            className="overflow-y-scroll bg-gradient-to-l from-[#001B0C] via-[#001B0C] to-black poppins relative mb-[10rem] top-0 h-screen max-w-screen flex flex-col items-center justify-center poppins text-white"
          >
            <div className="pt-20 text-[30px] text-[#9CEBDB] uppercase font-bold">
              <span>Our board members</span>
            </div>
            <div
              className="overflow-y-auto w-full mb-[4.5rem] h-screen
             pt-4 flex flex-row items-center justify-between"
            >
              <div className="h-full w-1/2">
                <div className="flex flex-col items-center w-full h-fit">
                  <button
                    onClick={() => setActivePerson("aaditya roshan")}
                    className="rounded-full bg-[#d9d9d9] w-20 h-20 mb-1.5"
                  ></button>
                  <button
                    onClick={() => setActivePerson("aaditya roshan")}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className="font-medium text-[16px]">
                      Aaditya Roshan
                    </span>
                    <span className="italic text-[12px] mb-3">Chairperson</span>
                  </button>
                  <button
                    onClick={() => setActivePerson("rinika paramba")}
                    className="rounded-full bg-[#d9d9d9] w-20 h-20 mb-1.5"
                  ></button>
                  <button
                    onClick={() => setActivePerson("rinika paramba")}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className="font-medium text-[16px]">
                      Rinika Paramba
                    </span>
                    <span className="italic text-[12px] mb-3">
                      General Secretary
                    </span>
                  </button>
                </div>
                <div className="flex flex-col items-center justify-between w-full h-fit">
                  <button
                    onClick={() => setActivePerson("samarth shokeen")}
                    className="rounded-full bg-[#d9d9d9] w-20 h-20 mb-1.5"
                  ></button>
                  <button
                    onClick={() => setActivePerson("samarth shokeen")}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className="font-medium text-[16px]">
                      Samarth Shokeen
                    </span>
                    <span className="italic text-[12px] mb-3">Events Head</span>
                  </button>
                  <button
                    onClick={() => setActivePerson("kunal kundnani")}
                    className="rounded-full bg-[#d9d9d9] w-20 h-20 mb-1.5"
                  ></button>
                  <button
                    onClick={() => setActivePerson("kunal kundnani")}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className="font-medium text-[16px]">
                      Kunal Kundnani
                    </span>
                    <span className="italic text-[12px] mb-3">Design Head</span>
                  </button>
                  <button
                    onClick={() => setActivePerson("ashutosh chandra")}
                    className="rounded-full bg-[#d9d9d9] w-20 h-20 mb-1.5"
                  ></button>
                  <button
                    onClick={() => setActivePerson("ashutosh chandra")}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className="font-medium text-[16px]">
                      Ashutosh Chandra
                    </span>
                    <span className="italic text-[12px] mb-3">
                      Creativity Head
                    </span>
                  </button>
                </div>
              </div>
              <div className="h-full w-1/2">
                <div className="flex flex-col items-center justify-between w-full h-fit">
                  <button
                    onClick={() => setActivePerson("harsh agrawal")}
                    className="rounded-full bg-[#d9d9d9] w-20 h-20 mb-1.5"
                  ></button>
                  <button
                    onClick={() => setActivePerson("harsh agrawal")}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className="font-medium text-[16px]">
                      Harsh Agrawal
                    </span>
                    <span className="italic text-[12px] mb-3">
                      Vice Chairperson
                    </span>
                  </button>
                  <button
                    onClick={() => setActivePerson("leena kannan")}
                    className="rounded-full bg-[#d9d9d9] w-20 h-20 mb-1.5"
                  ></button>
                  <button
                    onClick={() => setActivePerson("leena kannan")}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className="font-medium text-[16px]">
                      Leena Kannan
                    </span>
                    <span className="italic text-[12px] mb-3">
                      Co-Secretary
                    </span>
                  </button>
                </div>
                <div className="flex flex-col items-center justify-between w-full h-fit">
                  <button
                    onClick={() => setActivePerson("akshat gupta")}
                    className="rounded-full bg-[#d9d9d9] w-20 h-20 mb-1.5"
                  ></button>
                  <button
                    onClick={() => setActivePerson("akshat gupta")}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className="font-medium text-[16px]">
                      Akshat Gupta
                    </span>
                    <span className="italic text-[12px] mb-3">
                      Technical Head
                    </span>
                  </button>
                  <button
                    onClick={() => setActivePerson("nischitha shetty")}
                    className="rounded-full bg-[#d9d9d9] w-20 h-20 mb-1.5"
                  ></button>
                  <button
                    onClick={() => setActivePerson("nischitha shetty")}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className="font-medium text-[16px]">
                      Nischitha Shetty
                    </span>
                    <span className="italic text-[12px] mb-3">
                      Publicity Head
                    </span>
                  </button>
                </div>
                <div className="flex flex-col items-center justify-between w-full h-fit">
                  <button
                    onClick={() => setActivePerson("yash bothra")}
                    className="rounded-full bg-[#d9d9d9] w-20 h-20 mb-1.5"
                  ></button>
                  <button
                    onClick={() => setActivePerson("yash bothra")}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className="font-medium text-[16px]">Yash Bothra</span>
                    <span className="italic text-[12px] mb-3">HR Head</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {activePerson && person && (
          <>
            <motion.div
              onClick={handleClose}
              initial={{ opacity: 0.8, y: height }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0.8, y: height }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="overflow-auto poppins absolute sm:top-0 inset-0 bg-black bg-opacity-[0.865] z-50 flex items-center justify-center"
            >
              <div className="mt-0 sm:mt-20 flex flex-col items-center justify-between sm:justify-center bg-transparent h-2/3 w-4/5 z-50 text-center relative">
                <div className="w-full">
                  <button className="pointer-events-none cursor-none rounded-full bg-[#d9d9d9] w-60 h-60 sm:w-52 sm:h-52 sm:mb-3 mb-8">
                    <img
                      src={personImage}
                      alt="board member"
                      className="object-cover"
                    />
                  </button>
                  <h2 className="text-6xl font-bold sm:mb-4 mb-0 text-white">
                    {person.name}
                  </h2>
                </div>

                <h3 className="text-3xl sm:mt-3 mt-2 sm:mb-4 mb-3 text-white italic">
                  {person.role}
                </h3>
                <p className="sm:mt-6 mt-0 text-pretty text-[#9cebdb] text-xl">
                  {person.desc}
                </p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 justify-center w-fit h-fit"
                >
                  <div className="mt-3 sm:mb-0 mb-3 border border-white rounded-lg p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      color="#ffffff"
                      fill="none"
                    >
                      <path
                        d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <path
                        d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <path
                        d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  {/* <span className="text-3xl text-white mt-3">Linkedin</span> */}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default TeamPageContent;
