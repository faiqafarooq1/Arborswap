import React from 'react';
import { useState, useEffect } from 'react';
import CardComponent from './CardComponent';

const NFTCardGrid = ({ initialCards, additionalCards, showInitialCards, setShowInitialCards, setPageTitle }) => {
    const [cards, setCards] = useState(initialCards); 

    useEffect(() => {
        if (showInitialCards) {
            setCards(initialCards); 
        }
    }, [showInitialCards, initialCards]); 

    const loadMoreCards = (index) => {
        if (showInitialCards) {
            if (index === 0) { 
                setCards(additionalCards[0]); 
                setPageTitle('Robusnipe NFT Discoveries'); 
            } else if (index === 1) { 
                setCards(additionalCards[1]); 
                setPageTitle('Manga AI NFT Discoveries');
            } else if (index === 2) { 
                setCards(additionalCards[2]); 
                setPageTitle('Roburna NFT Discoveries');
            } else if (index === 3) { 
                setCards(additionalCards[3]); 
                setPageTitle('F4H NFT Discoveries'); 
            }

            setShowInitialCards(false); 
        }
    };

    return (
        <main className="pt-[20px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 ">
                {cards.map((nft, index) => (
                    <CardComponent
                        key={index}
                        image={nft.image}
                        title={nft.title}
                        description={nft.description}
                        onClick={showInitialCards ? () => loadMoreCards(index) : null} 
                        hoverEffect={showInitialCards} 
                        showClaimButton={!showInitialCards} 
                        isInitial={showInitialCards && index < initialCards.length}
                    />
                ))}
            </div>
        </main>
    );
};

export default NFTCardGrid;
