import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-10 px-5 poppins">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="w-[40%] border-t-[0.5px] border-b-[0.5px] border-white py-5 mr-16">
          <ul className="flex flex-row items-center justify-around">
            <li className="uppercase text-[#9cebdb] text-[28px] font-medium">
              About us
            </li>
            <li className="uppercase text-[#9cebdb] text-[28px] font-medium">
              <Link to="/team-page">Team</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img src="siam-white.png" alt="siam logo" width={360} height={360} />
        </Link>
        <div className="w-[40%] ml-16 border-t-[0.5px] border-b-[0.5px] border-white py-5">
          <ul className="flex flex-row items-cenetr justify-around">
            <li className="uppercase text-[#9cebdb] text-[28px] font-medium">
              Events
            </li>
            <li className="uppercase text-[#9cebdb] text-[28px] font-medium">
              Projects
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
