import React, { useState } from 'react';
import NFTCardGrid from './NFTCardGrid';
import { initialCards, additionalCards } from './CardData';

export default function Home() {
  const [pageTitle, setPageTitle] = useState('Arborswap NFT Claims');
  const [showInitialCards, setShowInitialCards] = useState(true);

  const handleBackButtonClick = () => {
    setShowInitialCards(true);
    setPageTitle('Arborswap NFT Claims');
  };

  return (
    <div className={`flex ${showInitialCards ? "h-screen" : "h-full"} bg-neutral-900` }>
      <aside className="fixed top-0 left-0 h-full z-30">
        <img src="./arborswapclaims/sidebar.svg" alt="Sidebar" className="w-full h-full object-contain" />
      </aside>

      <div className="flex-1 pl-[230px] relative">
        <header className="fixed bg-[#17181A] top-0 left-0 w-full pl-[250px] z-20">
          <div className="relative flex items-center justify-between px-10 h-[80px]">
            <img 
              src="./arborswapclaims/navbar.svg" 
              alt="Navbar" 
              className="inset-0 w-full h-[60px] object-cover opacity-90"
            />
          </div>
        </header>
        <div className="pt-[120px] pl-[3px] z-10 flex items-center space-x-4">
          {!showInitialCards && (
            <img
              src="/arborswapclaims/back.svg"
              alt="Back"
              className="w-6 h-10 cursor-pointer hover:opacity-80 transition-opacity duration-300"
              onClick={handleBackButtonClick}
            />
          )}
          <span className="font-inter text-[18px] font-bold text-white">
            {pageTitle}
          </span>
        </div>
        <div className="pt-2"> 
          <NFTCardGrid
            initialCards={initialCards}
            additionalCards={additionalCards}
            showInitialCards={showInitialCards}
            setShowInitialCards={setShowInitialCards}
            setPageTitle={setPageTitle}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center items-center h-screen">
          <img
            src="./arborswapclaims/bgimage.svg"
            alt="Background"
            className="object-contain max-w-[847.71px] h-[79vh] filter brightness-60"
          />
        </div>
      </div>
    </div>
  );
}
