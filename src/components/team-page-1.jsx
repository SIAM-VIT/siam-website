import React from "react";

const TeamPageIntro = () => {
  return (
    <div className="overflow-hidden max-h-screen z-0 w-full poppins bg-gradient-to-r from-black to-[#001B0C] opacity-[94%] text-[#9cebdb]">
      <div>
        <img
          src="laptop-image.png"
          alt="image of laptop"
          className="-z-10 opacity-[0.07]"
        />
      </div>
      <div className="flex flex-col z-10 absolute w-[100vw] h-[100vh] top-0 items-center justify-center">
        <div className="p-20 z-10 border-[#9cebdb] border-2 w-fit">
          <span className="text-[#9cebdb] text-[50px] font-semibold text-center block">
            Get To Know
          </span>
          <br />
          <span className="text-[#9cebdb] font-bold text-[125px] uppercase text-center block">
            Our team
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamPageIntro;
