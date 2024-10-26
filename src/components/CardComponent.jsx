import React from 'react';

const CardComponent = ({ image, title, description, onClick, hoverEffect, showClaimButton, isInitial }) => {
  const boxShadow = isInitial
    ? '2px 2px 8px rgba(255, 255, 0, 0.4), -2px -2px 8px rgba(0, 128, 0, 0.4)'
    : '';
  const cardWidth = isInitial ? 'w-[238px]' : 'w-[230px]'; 

  return (
    <div
      className={`z-10 ${cardWidth} border rounded-lg overflow-hidden shadow-lg bg-white relative cursor-pointer transition-transform duration-300 ease-in-out ${
        hoverEffect ? 'transform hover:scale-105' : ''
      }`}
      onClick={onClick}
      style={{ boxShadow }}
    >
      <img 
        src={image} 
        alt={title} 
        className={`${cardWidth} ${isInitial ? 'h-[250px]' : 'h-[170px]'} object-cover`}
      />
      {hoverEffect && (
        <div className="absolute inset-0 flex items-center justify-center bg-greens bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
          <p className="text-[26px] font-semibold text-white transform" style={{ transform: 'rotate(299deg)' }}>
            Click to see more
          </p>
        </div>
      )}
      <div className={`p-1 ${isInitial ? 'bg-greens' : 'bg-cardb'} ${isInitial ? 'text-center' : ''} ${isInitial ? 'py-3' : ''} ${isInitial ? 'text-[16px]' : ''} leading-[18px] tracking-[0px']`}>
        <h2 className="text-center text-textc font-bold">{title}</h2>
        <p className="text-left pl-1 text-[14px]">{description}</p>
      </div>
      {showClaimButton && (
        <div className="bg-greens flex justify-center items-center py-1">
          <img 
            src="/arborswapclaims/claim.svg" 
            alt="Claim" 
            className="w-1/3 h-auto cursor-pointer hover:opacity-80 transition-opacity duration-300"
            onClick={onClick}
          />
        </div>
      )}
    </div>
  );
};

export default CardComponent;
