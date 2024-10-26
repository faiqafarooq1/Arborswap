import React from "react";
import { FaCog, FaWallet, FaEllipsisH } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <header className="flex items-center bg-[#17181A] text-white p-3 rounded-lg space-x-4 w-fit ml-auto">
      {/* Network section with shadow and hover border */}
      <div
        className="flex items-center bg-[#1f262e] px-3 py-2 rounded-md space-x-2 transition-all duration-300 text-xs sm:text-sm"
        style={{
          boxShadow: "2px 2px 8px rgba(0, 128, 0, 0.3), -2px -2px 8px rgba(0, 128, 0, 0.3)"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.border = "1px solid white")}
        onMouseLeave={(e) => (e.currentTarget.style.border = "none")}
      >
        <span className="flex items-center">
          Binance Smart Chain <IoMdArrowDropdown className="inline ml-1" />
        </span>
      </div>

      {/* Settings icon with hover effect */}
      <div className="p-2 hover:bg-[#1f262e] rounded-md transition-all duration-300">
        <FaCog className="text-lg sm:text-xl" />
      </div>

      {/* Wallet section with shadow and hover border */}
      <div
        className="flex items-center bg-[#1f262e] px-3 py-2 rounded-md space-x-2 transition-all duration-300 text-xs sm:text-sm"
        style={{
          boxShadow: "2px 2px 8px rgba(0, 128, 0, 0.4), -2px -2px 8px rgba(0, 128, 0, 0.4)"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.border = "1px solid white")}
        onMouseLeave={(e) => (e.currentTarget.style.border = "none")}
      >
        <FaWallet className="text-lg sm:text-xl" />
        <span className="hidden sm:block">0x...aC5d</span>
        <FaEllipsisH className="text-lg sm:text-xl" />
      </div>
    </header>
  );
};

export default Header;
