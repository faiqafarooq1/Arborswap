import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';

const NFTCardGrid = ({ initialCards, additionalCards, showInitialCards, setShowInitialCards, setPageTitle }) => {
    const [cards, setCards] = useState(initialCards); // Start with initial cards

    useEffect(() => {
        if (showInitialCards) {
            setCards(initialCards); // Ensure cards are set to initial cards when showing initial
        }
    }, [showInitialCards, initialCards]); // Update cards when showInitialCards changes

    const loadMoreCards = (index) => {
        if (showInitialCards) {
            if (index === 0) { // First initial card clicked
                setCards(additionalCards[0]); // Display only "Robusnipe" cards
                setPageTitle('Robusnipe NFT Discoveries'); // Update title
            } else if (index === 1) { // Second initial card clicked
                setCards(additionalCards[1]); // Display only "Manga AI" cards
                setPageTitle('Manga AI NFT Discoveries'); // Update title
            } else if (index === 2) { // Third initial card clicked
                setCards(additionalCards[2]); // Display only "Roburna" cards
                setPageTitle('Roburna NFT Discoveries'); // Update title
            } else if (index === 3) { // Fourth initial card clicked
                setCards(additionalCards[3]); // Display only "Roburna" cards
                setPageTitle('F4H NFT Discoveries'); // Update title
            }

            setShowInitialCards(false); // Hide initial cards
        }
    };

    return (
        <main className="pt-[40px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10 ">
                {cards.map((nft, index) => (
                    <CardComponent
                        key={index}
                        image={nft.image}
                        title={nft.title}
                        description={nft.description}
                        onClick={showInitialCards ? () => loadMoreCards(index) : null} // Clickable only when showing initial cards
                        hoverEffect={showInitialCards} // Enable hover effect only for initial cards
                        showClaimButton={!showInitialCards} // Show claim button only for new cards
                        isInitial={showInitialCards && index < initialCards.length}
                    />
                ))}
            </div>
        </main>
    );
};

export default NFTCardGrid;
