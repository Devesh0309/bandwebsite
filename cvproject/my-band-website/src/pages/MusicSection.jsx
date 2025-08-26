import React, { useRef, useEffect, useState } from "react";
import useIntersectionObserver from "../components/hooks/useIntersectionObserver";

const MusicSection = () => {
  const sectionRef = useRef(null); 
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  const [setElements, entries] = useIntersectionObserver({
    threshold: 0.4,
    rootMargin: '0px 0px -50px 0px',
  });

  const albums = [
    { id: 1, title: "Echoes of the Void", releaseDate: "Oct 2024", imageUrl: "/MusicSection/—Pngtree—electronic music album_1301130.jpg" },
    { id: 2, title: "Infinite Descent", releaseDate: "Jan 2024", imageUrl: "/MusicSection/WhatsApp Image 2025-08-26 at 02.34.10.jpeg" },
    { id: 3, title: "The Unseen Pulse", releaseDate: "May 2023", imageUrl: "/MusicSection/568873-Music-vinyl-album-covers-John-Lennon-2560x1440.jpg" },
  ];
  
  useEffect(() => {
    const elements = cardRefs.current.filter(el => el !== null);
    setElements(elements);
  }, [setElements, albums.length]);

  // ✨ THIS IS THE UPDATED BLOCK FOR RE-ANIMATION ✨
  useEffect(() => {
    // This check prevents updates if entries are not yet populated
    if (entries.length === 0) return;

    // A mutable copy to batch updates
    const updatedVisibleCards = new Set(visibleCards);

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the card's ID when it ENTERS the viewport
        updatedVisibleCards.add(entry.target.id);
      } else {
        // Remove the card's ID when it LEAVES the viewport
        updatedVisibleCards.delete(entry.target.id);
      }
    });
    
    // Update the state with the new Set
    setVisibleCards(updatedVisibleCards);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries]); // We only want this to run when `entries` changes.

  const initialAnimationClasses = [
    "opacity-0 -translate-x-20", // Left card
    "opacity-0 translate-y-10",   // Center card
    "opacity-0 translate-x-20",  // Right card
  ];

  return (
    <section
      id="music"
      ref={sectionRef}
      className="w-full min-h-screen py-20 px-4 bg-gray-900"
      style={{ scrollMarginTop: "10px" }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 mt-4 text-[white]">Latest Music</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album, index) => {
            const isVisible = visibleCards.has(`album-${album.id}`);
            return (
              <div
                key={album.id}
                id={`album-${album.id}`}
                ref={el => (cardRefs.current[index] = el)}
                className={`
                  bg-gray-800 rounded-2xl overflow-hidden shadow-md transform 
                  transition-all duration-700 ease-out 
                  hover:scale-105
                  ${isVisible ? "opacity-100 translate-x-0 translate-y-0" : initialAnimationClasses[index]}
                `}
              >
                <img
                  src={album.imageUrl}
                  alt="Album Cover"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white mb-1">{album.title}</h3>
                  <p className="text-gray-400 text-xs">Released: {album.releaseDate}</p>
                  <a
                    href="#"
                    className="mt-3 inline-block bg-gray-700 text-white text-sm font-semibold py-1.5 px-4 rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300"
                  >
                    Listen Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
