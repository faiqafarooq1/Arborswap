import React, { useState } from "react";
import NFTCardGrid from "./NFTCardGrid";
import { initialCards, additionalCards } from "./CardData";
import Sidebar from "./Sidebar";
import Header from "./Header"; // Import the Header component
import { IoCaretBackCircleOutline } from "react-icons/io5";

export default function Home() {
  const [pageTitle, setPageTitle] = useState("Arborswap NFT Claims");
  const [showInitialCards, setShowInitialCards] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // State to manage sidebar visibility

  const handleBackButtonClick = () => {
    setShowInitialCards(true);
    setPageTitle("Arborswap NFT Claims");
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div
      className={`flex w-full ${
        showInitialCards ? "lg:h-screen" : "h-full"
      } bg-neutral-900 px-4`}
    >
      <div className="relative">
        {isSidebarVisible && (
          <aside className="hidden lg:flex  top-0 left-0 h-full z-30">
            <Sidebar />
          </aside>
        )}

        <button
          onClick={toggleSidebar}
          className={`hidden lg:flex lg:absolute top-[77px] z-40 transform -translate-y-1/2 text-white p-2 rounded-full shadow-lg transition-all duration-300 ${
            isSidebarVisible ? "left-[210px]" : "left-4"
          }`}
        >
          <IoCaretBackCircleOutline
            className={`text-4xl text-greens transition-transform ${
              isSidebarVisible ? "" : "rotate-180"
            }`}
          />
        </button>
      </div>
      <div className={`flex-1  relative transition-all duration-300`}>
        <header className="flex items-center justify-between   lg:justify-end  bg-[#17181A] top-0  w-full z-20">
          <div className="block lg:hidden">
            <img src="arborswapclaims/arborlogo.svg" alt="logo" />
          </div>
          <div className="relative flex items-center justify-between  md:px-10 h-[70px] sm:h-[80px]">
            <Header />
          </div>
        </header>
        <div
          className={`flex flex-col px-10 items-center lg:items-start w-full`}
        >
          <div className=" py-3 z-10 flex items-center justify-center lg:justify-start  space-x-4 text-center lg:text-left w-full">
            {!showInitialCards && (
              <img
                src="/arborswapclaims/back.svg"
                alt="Back"
                className="w-5 sm:w-6 h-8 sm:h-10 cursor-pointer hover:opacity-80 transition-opacity duration-300"
                onClick={handleBackButtonClick}
              />
            )}
            <div className="font-inter text-[16px] sm:text-[18px]  font-bold text-white">
              {pageTitle}
            </div>
          </div>

          <div className="py-5">
            <NFTCardGrid
              initialCards={initialCards}
              additionalCards={additionalCards}
              showInitialCards={showInitialCards}
              setShowInitialCards={setShowInitialCards}
              setPageTitle={setPageTitle}
            />
          </div>
        </div>
        {/* Background Image Container */}
        {/* <div className="absolute bottom-0 left-0 w-full flex justify-center items-center h-screen">
          <img
            src="./arborswapclaims/bgimage.svg"
            alt="Background"
            className="object-contain md:max-w-[847.71px] h-[70vh] sm:h-screen md:h-[79vh] filter brightness-60"
          />
        </div> */}
      </div>
    </div>
  );
}
