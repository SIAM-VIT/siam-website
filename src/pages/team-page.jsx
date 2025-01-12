// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "../components/navbar";

// const TeamPage = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     if (!isVisible) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isVisible]);

//   const triggerAnimation = () => {
//     setIsVisible(!isVisible);
//   };
//   return (
//     <>
//       <AnimatePresence mode="wait">
//         {isVisible && (
//           <>
//             <div key="blank"></div>
//             <div key="navbar" className="z-[999] absolute w-full">
//               <Navbar />
//             </div>
//             <motion.div
//               key="intro"
//               initial={{ x: 0, opacity: 1 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ x: -100, opacity: 0 }}
//               transition={{ duration: 0.3, delay: 0.15, ease: "easeInOut" }}
//               className="overflow-hidden max-h-screen z-0 w-full poppins bg-gradient-to-r from-black to-[#001B0C] opacity-[94%] text-[#9cebdb]"
//             >
//               <div>
//                 <img
//                   src="laptop-image.png"
//                   alt="image of laptop"
//                   className="-z-10 opacity-[0.07]"
//                 />
//               </div>
//               <div className="flex flex-col z-10 absolute w-[100vw] h-[100vh] top-0 items-center justify-center">
//                 <div className="p-20 mt-32 z-10 border-[#9cebdb] border-2 w-fit">
//                   <span className="text-[#9cebdb] text-[50px] font-semibold text-center block">
//                     Get To Know
//                   </span>
//                   <br />
//                   <span className="text-[#9cebdb] font-bold text-[125px] uppercase text-center block">
//                     Our team
//                   </span>
//                 </div>
//                 <div className="absolute right-40 bottom-[23.5rem]">
//                   <div className="w-full h-full relative">
//                     <button
//                       onClick={triggerAnimation}
//                       className="w-[75px] h-[75px] flex items-center justify-center absolute left-0 top-0 rounded-[25px] bg-gradient-to-r from-[#4DA8EA] to-[#00D856]"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         width="85"
//                         height="85"
//                         color="#c0bcbc"
//                         fill="none"
//                       >
//                         <path
//                           d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
//                           stroke="currentColor"
//                           stroke-width="1.5"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//         {!isVisible && (
//           <>
//             <div key="blank"></div>
//             <div key="navbar" className="z-[999] absolute w-full">
//               <Navbar />
//             </div>
//             <motion.div
//               key="newPage"
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: 100, opacity: 1 }}
//               transition={{
//                 duration: 0.3,
//                 ease: "easeInOut",
//                 delay: 0.1,
//               }}
//               className="-z-10 relative w-fit h-fit min-h-screen poppins overflow-hidden text-white bg-gradient-to-r from-black to-[#001B0C] opacity-[94%]"
//             >
//               <div className="overflow-hidden w-fit h-fit">
//                 <img
//                   src="board.png"
//                   alt="image of board"
//                   className="opacity-[0.25]"
//                 />
//               </div>
//               <div className="top-0 absolute overflow-hidden w-full h-full z-30 flex flex-col items-center">
//                 <div className="pt-24 mb-14 h-1/3 w-full flex items-center justify-center">
//                   <h1 className="text-[65px] font-bold uppercase mt-36">
//                     Our board members
//                   </h1>
//                 </div>
//                 <div className="overflow-hidden h-2/3 w-full flex flex-col items-center justify-center gap-y-5">
//                   <div className="flex items-center justify-between w-[80%] h-[90%]">
//                     <div className="flex flex-col items-center justify-between w-fit h-fit">
//                       <div className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"></div>
//                       <div className="flex flex-col items-center justify-center">
//                         <span className="font-medium text-[22px]">
//                           Aaditya Roshan
//                         </span>
//                         <span className="italic text-[16px] mb-5">
//                           Chairperson
//                         </span>
//                       </div>
//                       <div className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"></div>
//                       <div className="flex flex-col items-center justify-center">
//                         <span className="font-medium text-[22px]">
//                           Akshat Gupta
//                         </span>
//                         <span className="italic text-[16px]">
//                           Technical Head
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex flex-col items-center justify-between w-fit h-fit">
//                       <div className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"></div>
//                       <div className="flex flex-col items-center justify-center">
//                         <span className="font-medium text-[22px]">
//                           Harsh Agrawal
//                         </span>
//                         <span className="italic text-[16px] mb-5">
//                           Vice Chairperson
//                         </span>
//                       </div>
//                       <div className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"></div>
//                       <div className="flex flex-col items-center justify-center">
//                         <span className="font-medium text-[22px]">
//                           Kunal Kundnani
//                         </span>
//                         <span className="italic text-[16px]">Design Head</span>
//                       </div>
//                     </div>
//                     <div className="flex flex-col items-center justify-between w-fit h-fit">
//                       <div className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"></div>
//                       <div className="flex flex-col items-center justify-center">
//                         <span className="font-medium text-[22px]">
//                           Rinika Paramba
//                         </span>
//                         <span className="italic text-[16px] mb-5">
//                           General Secretary
//                         </span>
//                       </div>
//                       <div className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"></div>
//                       <div className="flex flex-col items-center justify-center">
//                         <span className="font-medium text-[22px]">
//                           Nischitha Shetty
//                         </span>
//                         <span className="italic text-[16px]">
//                           Publicity Head
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex flex-col items-center justify-between w-fit h-fit">
//                       <div className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"></div>
//                       <div className="flex flex-col items-center justify-center">
//                         <span className="font-medium text-[22px]">
//                           Leena Kannan
//                         </span>
//                         <span className="italic text-[16px] mb-5">
//                           Co-Secretary
//                         </span>
//                       </div>
//                       <div className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"></div>
//                       <div className="flex flex-col items-center justify-center">
//                         <span className="font-medium text-[22px]">
//                           Ashutosh Chandra
//                         </span>
//                         <span className="italic text-[16px]">
//                           Creativity Head
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex flex-col items-center justify-between w-fit h-fit">
//                       <div className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"></div>
//                       <div className="flex flex-col items-center justify-center">
//                         <span className="font-medium text-[22px]">
//                           Samarth Shokeen
//                         </span>
//                         <span className="italic text-[16px] mb-5">
//                           Events Head
//                         </span>
//                       </div>
//                       <div className="rounded-full bg-[#d9d9d9] w-32 h-32 mb-3"></div>
//                       <div className="flex flex-col items-center justify-center">
//                         <span className="font-medium text-[22px]">
//                           Yash Bothra
//                         </span>
//                         <span className="italic text-[16px]">HR Head</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default TeamPage;

import React from "react";
import TeamPageComponent from "../components/team-page-component";
import Navbar from "../components/navbar";

const TeamPage = () => {
  return (
    <>
      <div className="z-[999] fixed w-full">
        <Navbar />
      </div>
      <TeamPageComponent />
    </>
  );
};

export default TeamPage;
