import React, { useState } from "react";
import { HomeIcon, BellIcon, LockClosedIcon, PaperAirplaneIcon, CurrencyDollarIcon, TicketIcon, LinkIcon } from "@heroicons/react/outline";
import { FaTwitter, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineMoon } from "react-icons/hi";
import { Link } from "react-router-dom"; 


const NFTClaims = () => {
  const [showButton, setShowButton] = useState(false);

  const handleToggle = () => {
    setShowButton(!showButton);
  };
  return (
    <div className="">
      <span
        onClick={handleToggle}
        className="cursor-pointer flex items-center hover:text-yellow-400"
      >
        <img
          src="/arborswapclaims/token.svg"
          className="inline pr-3"
          alt="Token Icon"
        />
        NFT Claims
        <IoMdArrowDropdown className="inline ml-[45px]" />
      </span>
      {showButton && (
        <Link to="/" className="mt-2 p-1 w-40 ml-5 text-white rounded transition duration-300 bg-btnc  flex items-center">
          <img src="/arborswapclaims/Vector.svg" className="inline pr-2" />
          NFT Discoveries
        </Link>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <aside className=" top-0  h-full w-60 bg-[#17181A] dark:bg-gray-800 text-gray-300 p-4 flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center mb-5">
        <img src="/arborswapclaims/arborlogo.svg" alt="ArborSwap Logo" className="w-50" />
      </div>

      {/* Menu Items */}
      <nav className="space-y-2 flex-grow cursor-pointer"> {/* Allow space for footer */}
        <div className="menu-item flex items-center p-1 rounded hover:text-yellow-400">
          <HomeIcon className="h-6 w-6 mr-3" />
          <span>Home <IoMdArrowDropdown className="inline ml-20" /></span>
        </div>
        <div className="menu-item flex items-center p-1 rounded hover:text-yellow-400">
          <BellIcon className="h-6 w-6 mr-3" />
          <span>Launchpad <IoMdArrowDropdown className="inline ml-11" /></span>
        </div>
        <div className="menu-item flex items-center p-1 rounded hover:text-yellow-400">
          <LockClosedIcon className="h-6 w-6 mr-3" />
          <span>Locker <IoMdArrowDropdown className="inline ml-[73px]" /></span>
        </div>
        <div className="menu-item flex items-center p-1 rounded hover:text-yellow-400">
          <PaperAirplaneIcon className="h-6 w-6 mr-3" />
          <span>Airdropper <IoMdArrowDropdown className="inline ml-11" /></span>
        </div>
        <div className="menu-item flex items-center p-1 rounded hover:text-yellow-400">
          <CurrencyDollarIcon className="h-6 w-6 mr-3" />
          <span>Trade <IoMdArrowDropdown className="inline ml-20" /></span>
        </div>
        <div className="menu-item flex items-center p-1 rounded hover:text-yellow-400">
          <TicketIcon className="h-6 mr-3" />
          <span>Staking</span>
        </div>
        <div className="menu-item flex items-center p-1 rounded hover:text-yellow-400 text-green-500">
          <LinkIcon className="h-6 w-6 mr-3" />
          <span>Portal</span>
        </div>
        {/* Integrating NFTClaims Component */}
        <NFTClaims />
      </nav>

      {/* Theme Toggle */}
      <div className="flex items-center space-x-2 justify-start">
        <HiOutlineMoon className=" text-2xl" />
        <button
          onClick={toggleTheme}
          className="flex items-center justify-start w-full p-2"
        >
          <div
            className={`w-10 h-5 flex items-center bg-gray-300 dark:bg-gray-500 rounded-full p-1 ${isDarkMode ? "justify-end" : "justify-start"
              }`}
          >
            <div className="w-4 h-4 bg-white rounded-full transition-transform duration-200 transform"></div>
          </div>
        </button>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-start space-x-4 mt-2 text-xl text-gray-400">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaTelegramPlane />
        </a>
      </div>

      {/* Footer */}
      <div className="mt-2 text-center text-[12px] text-gray-600">
        ©2023 ArborSwap. All rights reserved.
      </div>
    </aside>
  );
};

export default Sidebar;
