import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="sm:block hidden w-full py-10 px-5 poppins">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-[40%] border-t-[0.5px] border-b-[0.5px] border-white py-5 mr-16">
            <ul className="flex flex-row items-center justify-around">
              <li className="uppercase text-[#9cebdb] text-[28px] font-medium">
                <Link to="/about">About us</Link>
              </li>
              <li className="uppercase text-[#9cebdb] text-[28px] font-medium">
                <Link to="/team">Team</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img
              src="siam-white.webp"
              alt="siam logo"
              width={360}
              height={360}
            />
          </Link>
          <div className="w-[40%] ml-16 border-t-[0.5px] border-b-[0.5px] border-white py-5">
            <ul className="flex flex-row items-cenetr justify-around">
              <li className="uppercase text-[#9cebdb] text-[28px] font-medium">
                <Link to="/events">Events</Link>
              </li>
              <li className="uppercase text-[#9cebdb] text-[28px] font-medium">
                <Link to="/domains">Domains</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="sm:hidden visible w-full flex items-center justify-center gap-x-14 px-3 py-4">
        <Link to="/">
          <img src="siam-white.webp" alt="siam logo" width={150} height={150} />
        </Link>
        <button
          onClick={toggleDropdown}
          className="navbarbutton flex items-center gap-x-2.5 uppercase rounded-full py-0.5 px-6 font-light text-[#f9f9f9] bg-gradient-to-r from-[#4DA8EA] to-[#00D856]"
        >
          <span className="[text-shadow:_0_6px_6px_rgb(000_000_000_/0.9)] text-[18px]">
            Menu
          </span>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              color="#ffffff"
              fill="none"
            >
              <path
                d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              color="#f9f9f9"
              fill="none"
            >
              <path
                d="M4 5L20 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12L20 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 19L20 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        {isOpen && (
          <ul className="poppins uppercase flex flex-col items-center text-center fixed right-3 top-14 mt-2 w-48 bg-black/60 rounded-xl shadow-lg text-white space-y-2">
            <Link to="/about" className="w-full">
              <li className="w-full rounded-xl p-1 bg-gradient-to-r from-[#4DA8EA] to-[#00D856] cursor-pointer">
                <div className="bg-black text-white p-2 rounded-xl">
                  About us
                </div>
              </li>
            </Link>
            <hr className="w-4/5" />
            <Link to="/team" className="w-full">
              <li className="w-full rounded-xl p-1 bg-gradient-to-r from-[#4DA8EA] to-[#00D856] cursor-pointer">
                <div className="bg-black text-white p-2 rounded-xl">Team</div>
              </li>
            </Link>
            <hr className="w-4/5" />
            <Link to="/events" className="w-full">
              <li className="w-full rounded-xl p-1 bg-gradient-to-r from-[#4DA8EA] to-[#00D856] cursor-pointer">
                <div className="bg-black text-white p-2 rounded-xl">Events</div>
              </li>
            </Link>
            <hr className="w-4/5" />
            <Link to="/domains" className="w-full">
              <li className="w-full rounded-xl p-1 bg-gradient-to-r from-[#4DA8EA] to-[#00D856] cursor-pointer">
                <div className="bg-black text-white p-2 rounded-xl">
                  Domains
                </div>
              </li>
            </Link>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
