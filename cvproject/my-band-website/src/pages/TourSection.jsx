import React, { useRef, useEffect, useState } from "react";
import TourModal from "../components/TourModal.jsx"; // Make sure to import the new modal component

// A placeholder for the custom hook since its definition was not provided.
// This allows the component to be self-contained and runnable.
const useIntersectionObserver = (options) => {
  const [entries, setEntries] = useState([]);
  const [elements, setElements] = useState([]);

  useEffect(() => {
    if (!window.IntersectionObserver) return;

    const observer = new IntersectionObserver(observedEntries => {
      setEntries(observedEntries);
    }, options);

    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, [elements, options]);

  return [setElements, entries];
};


const TourSection = () => {
  const tourRef = useRef(null);
  const [setElements, entries] = useIntersectionObserver({ threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // --- NEW: State for managing the selected tour and modal visibility ---
  const [selectedTour, setSelectedTour] = useState(null);

  // Set up the intersection observer to watch the main section
  useEffect(() => {
    setElements([tourRef.current]);
  }, [setElements]);

  // Handle the fade-in animation when the section becomes visible
  useEffect(() => {
    entries.forEach(entry => {
      if (entry.target.id === "tour" && entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  }, [entries]);

  // --- Slideshow Data and Logic ---

  const slideImages = [
    { url: "/TourSection/WhatsApp Image 2025-08-26 at 04.10.00.jpeg", alt: "View from the concert crowd" },
    { url: "/TourSection/WhatsApp Image 2025-08-26 at 04.10.01 (1).jpeg", alt: "Artist performing on stage" },
    { url: "/TourSection/WhatsApp Image 2025-08-26 at 04.10.01.jpeg", alt: "Backstage view of the event" },
    { url: "/TourSection/WhatsApp Image 2025-08-26 at 04.10.20.jpeg", alt: "Exterior of the concert venue" },
  ];

  // Auto-play functionality for the slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slideImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer); // Cleanup on component unmount
  }, [slideImages.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  // --- UPDATED: Tour Dates Data with Pricing ---

  const tourDates = [
    { id: 1, date: "November 15, 2024", venue: "The Warehouse", location: "New York, NY", pricing: [
      { tier: "General Admission", price: "$75" },
      { tier: "Mezzanine", price: "$120" },
      { tier: "VIP Meet & Greet", price: "$250" },
    ]},
    { id: 2, date: "December 2, 2024", venue: "Black Box Theatre", location: "Los Angeles, CA", pricing: [
      { tier: "Floor Standing", price: "$85" },
      { tier: "Balcony Seated", price: "$135" },
    ]},
    { id: 3, date: "January 10, 2025", venue: "The Underground", location: "London, UK", pricing: [
      { tier: "General Admission", price: "£60" },
      { tier: "VIP Package", price: "£150" },
    ]},
    { id: 4, date: "February 5, 2025", venue: "The Fillmore", location: "San Francisco, CA", pricing: [
      { tier: "General Admission", price: "$80" },
      { tier: "Mezzanine", price: "$125" },
      { tier: "VIP Table (4 seats)", price: "$600" },
    ]},
  ];
  
  // --- NEW: Handlers for opening and closing the modal ---
  const handleOpenModal = (tour) => {
    setSelectedTour(tour);
  };

  const handleCloseModal = () => {
    setSelectedTour(null);
  };

  return (
    <> {/* Use React Fragment to wrap the section and the modal */}
      <section 
        id="tour" 
        ref={tourRef} 
        className={`w-full bg-gray-800 text-white flex items-center py-28 transition-opacity duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} bg-cover bg-center`} style={{ backgroundImage: "url('/Backgrounds/WhatsApp Image 2025-08-26 at 16.48.29 (1).jpeg')" }} >
      
        <div className="container mx-auto max-w-full lg:max-w-7xl" >
          <div className="flex flex-col lg:flex-row items-center justify-center">
            
            {/* Left Side: Image Slideshow */}
            <div className="w-full lg:w-1/2 h-80 lg:h-[500px] p-4">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                {slideImages.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <img src={slide.url} alt={slide.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {slideImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Tour Dates */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
              <div className="w-full max-w-md">
                <h2 className="text-3xl md:text-4xl font-bold text-left mb-8">Tour Dates</h2>
                <div className="space-y-4">
                  {tourDates.map(tour => (
                    // --- MODIFIED: Changed the div to a button for better accessibility and added onClick ---
                    <div 
                      key={tour.id} 
                      className="flex flex-col md:flex-row justify-between items-center bg-gray-800/50 rounded-xl p-4 shadow-lg transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm border border-gray-700"
                    >
                      <div className="flex-1 mb-4 md:mb-0 text-left">
                        <p className="text-base font-bold text-white">{tour.date}</p>
                        <p className="text-sm text-gray-300">{tour.venue} - {tour.location}</p>
                      </div>
                      <button 
                        onClick={() => handleOpenModal(tour)}
                        className="bg-white text-gray-900 font-semibold py-2 px-6 rounded-full hover:bg-gray-300 transition-colors duration-300 shadow-md text-sm"
                      >
                        Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW: Conditionally render the modal component --- */}
      <TourModal tourData={selectedTour} onClose={handleCloseModal} />
    </>
  );
};

export default TourSection;