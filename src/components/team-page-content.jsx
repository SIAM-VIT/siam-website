import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { useWindowSize } from "react-use";

const TeamPageContent = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activePerson, setActivePerson] = useState(null);
  const { height } = useWindowSize();
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  useEffect(() => {
    document.body.style.overflow = isAnimating ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isAnimating]);

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
      desc: "A visionary leader with persistent optimism, Aaditya has been the driving force behind our chapter’s growth and success. His ability to bring out the best in people, combined with his sharp wit and approachable nature, makes him an exceptional mentor and guide. A commanding presence, he leads with confidence and purpose—steering the team forward with encouragement. Whether it’s solving challenges, or ensuring that every initiative runs smoothly, he has a knack for getting things done effortlessly. Always ready to help and uplift those around him, Aaditya’s leadership is defined by both efficiency and a genuine commitment to the people he works with.",
      img: "aaditya roshan.webp",
      linkedin: "https://www.linkedin.com/in/aaditya-roshan-02a519274/",
    },
    {
      name: "Akshat Gupta",
      role: "Technical Head",
      desc: "One of the sharpest minds and most passionate tech enthusiasts you'll ever meet, Akshat represents the very best our chapter has to offer. Whether it's coding, backend development, or staying ahead of the latest tech trends, he's always at the forefront, pushing boundaries and innovating. His keen intellect is matched by his approachable and friendly nature, making him not just a brilliant problem-solver but also a great mentor. With a deep love for technology, Akshat is the go-to person for anything tech-related, always ready to share knowledge and spark engaging discussions.",
      img: "akshat gupta.webp",
      linkedin: "https://www.linkedin.com/in/akshat-gupta-864b39235",
    },
    {
      name: "Harsh Agrawal",
      role: "Vice Chairperson",
      desc: "Harsh Agrawal is the Vice-Chairperson of SIAM, and he represents persistence, reasonableness, and logic in everything he does. Friendly and approachable, he creates a team-like atmosphere while also remaining acutely problem-solving in nature. He is a sports buff who is an avid fan of football and athletics, which instils in him the competitive nature. In addition to his passion for sports, Harsh also has an interest in developing apps, where he uses his analytical mind to develop creative solutions. His skill in merging leadership, technical know-how, and teamwork makes him a valued and esteemed person in both professional and co-curricular life.",
      img: "harsh agarwal.webp",
      linkedin: "https://www.linkedin.com/in/harsh-agrawal-9706a12aa/",
    },
    {
      name: "Kunal Kundnani",
      role: "Design Head",
      desc: "If SIAM had a face of creativity, it would undoubtedly be Kunal Kundnani! With his amazing design skills, sharp aesthetics and out-of-the-box creativity, he made every project look outstanding. From stunning event posters to stylish social media designs, his work spoke volumes, making SIAM VIT’s visual identity stand out effortlessly. But Kunal wasn’t just about pixels and palettes-he is also the heart of the team! His fun-loving, approachable and ever-helpful nature made working with him an absolute delight. Whether it was brainstorming ideas, guiding juniors or simply cracking jokes to keep the vibe light, he ensured that creativity always flowed without pressure.",
      img: "kunal kundnani.webp",
      linkedin: "https://www.linkedin.com/in/kunal-kundnani-452288274/",
    },
    {
      name: "Rinika Paramba",
      role: "General Secretary",
      desc: "Rinika, the name itself exudes confidence, boldness, and an unyielding drive for excellence. She may seem strict at first, but beneath that tough exterior lies a heart of gold. A true pillar of reliability, she’s always there when you need her. With the most unpredictable (and slightly maniacal?) ideas, she brings an energy to SIAM that no one else can match. A force to reckon with, she’s not just a leader but an inspiring mentor, especially in speaking, anchoring, and commanding a stage with finesse. She is the kind of General Secretary every team wishes for!",
      img: "rinika paramba.webp",
      linkedin: "https://www.linkedin.com/in/rinika-sujith-paramba-712a41279/",
    },
    {
      name: "Nischitha Shetty",
      role: "Projects & Publicity Head",
      desc: "Nischitha has been playing a crucial role in driving both project execution and outreach, as the Projects & Publicity Head of our chapter. Known for her unwavering focus and efficiency, she approaches every task with a decisive, all-in attitude—getting things done in one go, especially when deadlines are approaching. Her ability to manage multiple initiatives while maintaining quality has left a lasting impact on the chapter’s work. In addition to overseeing projects, she ensures that our initiatives reach a wider audience. As a dedicated leader, she has set a high standard for commitment and excellence.",
      img: "nischitha shetty.webp",
      linkedin: "https://www.linkedin.com/in/nischitha-n-shetty-b70756283/",
    },
    {
      name: "Leena Kannan",
      role: "Co-Secretary",
      desc: "Leena is the backbone of our chapter’s operations, effortlessly balancing event coordination and documentation while keeping everything running like clockwork. As our co-secretary, she ensures that every event is flawlessly executed, reports are precise, and all necessary processes like OD handling are completed on time. Beyond her incredible abilities, Leena is an avid Liverpool supporter and truly appreciates metallic legends like AC/DC, Def Leppard, Jimi Hendrix, Nirvana, and Linkin Park. But what really lights up her world? Animals—she loves interacting with all the cats and dogs she meets. With her efficiency, enthusiasm, and love for both order and chaos, Leena is truly one of a kind!",
      img: "leena kannan.webp",
      linkedin: "https://www.linkedin.com/in/leena-kannan-a69459267/",
    },
    {
      name: "Ashutosh Chandra",
      role: "Creative Head",
      desc: "Ashutosh Chandra, our Creative Head at SIAM VIT, is the driving force behind our Instagram magic, event reels, and public presence. With a keen eye for detail and a knack for getting things done, he makes sure every initiative is executed flawlessly and on time. His creative vision brings a unique touch to everything he works on, from brainstorming concepts to final edits. Though he prefers letting his work do the talking, his impact is undeniable. Always behind the scenes, but never unnoticed. His ability to consistently deliver outstanding results makes him an essential part of our team’s success.",
      img: "ashutosh chandra.webp",
      linkedin: "https://www.linkedin.com/in/ashutosh-chandra-7b76a92aa/",
    },
    {
      name: "Samarth Shokeen",
      role: "Events Head",
      desc: "Samarth is the kind of senior who leads effortlessly, making things happen while ensuring everything feels easier. He’s caring and always ready to listen, making sure no one feels unheard. Chill and approachable, yet when needed, he knows when to switch from a friend to a mentor, balancing firmness with understanding. A great basketball player, he carries himself with confidence but never arrogance, always making the game fun. When things get tricky, he steps in with the right mix of support, guidance, and perspective. A senior you respect, not because you have to, but because you genuinely want to.",
      img: "samarth shokeen.webp",
      linkedin: "https://www.linkedin.com/in/samarth-shokeen-933a80257/",
    },
    {
      name: "Yash Bothra",
      role: "HR & Finance Head",
      desc: "A natural leader with a strong commitment to teamwork, Yash is the driving force behind our chapter’s community. He ensures smooth operations by planning, coordinating, and fostering collaboration between the board and core members. Dedicated to creating a professional and inclusive environment, he oversees enrollment, training, and team development while maintaining unity within the core committee. Approachable and insightful, he plays a key role in building a motivated and cohesive team, ensuring everyone works together toward a shared vision.",
      img: "yash bothra.webp",
      linkedin: "https://www.linkedin.com/in/yashb1729/",
    },
  ];
  const person = boardDetails.find(
    (member) => member.name.toLowerCase() === activePerson
  );

  return (
    <>
      <AnimatePresence mode="wait">
        {!isMobile && (
          <>
            <motion.div
              key="newPage"
              initial={{ y: height, opacity: 0.65 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: height, opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: easeOut,
                delay: 0.1,
              }}
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
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
                      >
                        <img
                          src="aaditya roshan.webp"
                          alt="chairperson"
                          className="object-cover rounded-full w-full h-full"
                        />
                      </button>
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
                      >
                        <img
                          src="akshat gupta.webp"
                          alt="technical head"
                          className="object-cover rounded-full w-full h-full"
                        />
                      </button>
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
                      >
                        <img
                          src="harsh agarwal.webp"
                          alt="vice-chairperson"
                          className="object-cover rounded-full w-full h-full"
                        />
                      </button>
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
                      >
                        <img
                          src="kunal kundnani.webp"
                          alt="design head"
                          className="object-cover rounded-full w-full h-full"
                        />
                      </button>
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
                      >
                        <img
                          src="rinika paramba.webp"
                          alt="gen sec"
                          className="object-cover rounded-full w-full h-full"
                        />
                      </button>
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
                      >
                        <img
                          src="nischitha shetty.webp"
                          alt="projects & pr"
                          className="object-cover rounded-full w-full h-full"
                        />
                      </button>
                      <button
                        onClick={() => setActivePerson("nischitha shetty")}
                        className="flex flex-col items-center justify-center"
                      >
                        <span className="font-medium text-[22px]">
                          Nischitha Shetty
                        </span>
                        <span className="italic text-[16px]">
                          Projects & Publicity Head
                        </span>
                      </button>
                    </div>
                    <div className="flex flex-col items-center justify-between w-fit h-fit">
                      <button
                        onClick={() => setActivePerson("leena kannan")}
                        className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"
                      >
                        <img
                          src="leena kannan.webp"
                          alt="co-sec"
                          className="object-cover rounded-full w-full h-full"
                        />
                      </button>
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
                      >
                        <img
                          src="ashutosh chandra.webp"
                          alt="creative head"
                          className="object-cover rounded-full w-full h-full"
                        />
                      </button>
                      <button
                        onClick={() => setActivePerson("ashutosh chandra")}
                        className="flex flex-col items-center justify-center"
                      >
                        <span className="font-medium text-[22px]">
                          Ashutosh Chandra
                        </span>
                        <span className="italic text-[16px]">
                          Creative Head
                        </span>
                      </button>
                    </div>
                    <div className="flex flex-col items-center justify-between w-fit h-fit">
                      <button
                        onClick={() => setActivePerson("samarth shokeen")}
                        className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"
                      >
                        <img
                          src="samarth shokeen.webp"
                          alt="events head"
                          className="object-cover rounded-full w-full h-full"
                        />
                      </button>
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
                      >
                        <img
                          src="yash bothra.webp"
                          alt="hr & finance"
                          className="object-cover rounded-full w-full h-full"
                        />
                      </button>
                      <button
                        onClick={() => setActivePerson("yash bothra")}
                        className="flex flex-col items-center justify-center"
                      >
                        <span className="font-medium text-[22px]">
                          Yash Bothra
                        </span>
                        <span className="italic text-[16px]">
                          HR & Finance Head
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
        {isMobile && (
          <motion.div
            key="newPageMobile"
            initial={{ y: height, opacity: 0.65 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: height, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: easeOut,
              delay: 0.1,
            }}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
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
                  >
                    <img
                      src="aaditya roshan.webp"
                      alt="chairperson"
                      className="object-cover rounded-full w-full h-full"
                    />
                  </button>
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
                  >
                    <img
                      src="rinika paramba.webp"
                      alt="gen sec"
                      className="object-cover rounded-full w-full h-full"
                    />
                  </button>
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
                  >
                    <img
                      src="samarth shokeen.webp"
                      alt="events head"
                      className="object-cover rounded-full w-full h-full"
                    />
                  </button>
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
                  >
                    <img
                      src="kunal kundnani.webp"
                      alt="design head"
                      className="object-cover rounded-full w-full h-full"
                    />
                  </button>
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
                  >
                    <img
                      src="ashutosh chandra.webp"
                      alt="creative head"
                      className="object-cover rounded-full w-full h-full"
                    />
                  </button>
                  <button
                    onClick={() => setActivePerson("ashutosh chandra")}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className="font-medium text-[16px]">
                      Ashutosh Chandra
                    </span>
                    <span className="italic text-[12px] mb-3">
                      Creative Head
                    </span>
                  </button>
                </div>
              </div>
              <div className="h-full w-1/2">
                <div className="flex flex-col items-center justify-between w-full h-fit">
                  <button
                    onClick={() => setActivePerson("harsh agrawal")}
                    className="rounded-full bg-[#d9d9d9] w-20 h-20 mb-1.5"
                  >
                    <img
                      src="harsh agarwal.webp"
                      alt="vice-chairperson"
                      className="object-cover rounded-full w-full h-full"
                    />
                  </button>
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
                  >
                    <img
                      src="leena kannan.webp"
                      alt="co-sec"
                      className="object-cover rounded-full w-full h-full"
                    />
                  </button>
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
                  >
                    <img
                      src="akshat gupta.webp"
                      alt="tech head"
                      className="object-cover rounded-full w-full h-full"
                    />
                  </button>
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
                  >
                    <img
                      src="nischitha shetty.webp"
                      alt="projects & pr"
                      className="object-cover rounded-full w-full h-full"
                    />
                  </button>
                  <button
                    onClick={() => setActivePerson("nischitha shetty")}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className="font-medium text-[16px]">
                      Nischitha Shetty
                    </span>
                    <span className="italic text-[12px] mb-3">
                      Projects & Publicity Head
                    </span>
                  </button>
                </div>
                <div className="flex flex-col items-center justify-between w-full h-fit">
                  <button
                    onClick={() => setActivePerson("yash bothra")}
                    className="rounded-full bg-[#d9d9d9] w-20 h-20 mb-1.5"
                  >
                    <img
                      src="yash bothra.webp"
                      alt="hr & finance"
                      className="object-cover rounded-full w-full h-full"
                    />
                  </button>
                  <button
                    onClick={() => setActivePerson("yash bothra")}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className="font-medium text-[16px]">Yash Bothra</span>
                    <span className="italic text-[12px] mb-3">
                      HR & Finance Head
                    </span>
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
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
              className="overflow-auto poppins absolute sm:top-0 inset-0 bg-black bg-opacity-[0.865] z-50 flex items-center justify-center"
            >
              <div className="-mt-32 sm:mt-20 flex flex-col items-center justify-between sm:justify-center bg-transparent h-2/3 w-4/5 z-50 text-center relative">
                <div className="w-full">
                  <button className="mt-10 pointer-events-none cursor-none rounded-full bg-[#d9d9d9] w-60 h-60 sm:w-52 sm:h-52 sm:mb-3 mb-8">
                    <img
                      src={person.img}
                      alt="board member"
                      className="object-cover rounded-full w-full h-full"
                    />
                  </button>
                  <h2 className="text-6xl font-bold sm:mb-2 mb-0 text-white">
                    {person.name}
                  </h2>
                </div>

                <h3 className="text-3xl sm:mt-0 mt-2 sm:mb-0 mb-3 text-white italic">
                  {person.role}
                </h3>
                <p className="sm:mt-3 sm:mb-5 mt-0 text-pretty text-[#9cebdb] text-xl">
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
                      width="28"
                      height="28"
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
