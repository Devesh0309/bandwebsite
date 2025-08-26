import React from 'react';

// TourModal component with a horizontal layout for a sleek, modern look.
const TourModal = ({ tourData, onClose }) => {
  // If no tour data is provided, the modal should not render.
  if (!tourData) return null;

  return (
    // The main backdrop that covers the screen.
    // Clicking it closes the modal.
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg transition-opacity duration-500 ease-out animate-fadeIn " >
      {/* The main modal container. Using flex-col to keep content centered on mobile */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl m-4 p-8 bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-3xl text-white transform transition-all duration-500 ease-out animate-scaleIn border border-gray-700/50 flex flex-col items-center" 
      >
        {/* Close Button with a sleek design */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white transition-transform duration-300 transform hover:rotate-90 focus:outline-none"
          aria-label="Close modal"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Horizontal layout container for desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8 w-full">
          {/* Modal Header/Details Section */}
          <div className="text-center md:text-left flex-1 mb-6 md:mb-0">
            <h3 className="text-4xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg">
              {tourData.venue}
            </h3>
            <p className="text-lg text-gray-300 font-light">{tourData.location}</p>
            <p className="text-sm text-gray-400 font-mono mt-1">{tourData.date}</p>
          </div>

          {/* Pricing Details Section */}
          <div className="flex-1 w-full">
            <h4 className="text-2xl font-semibold mb-4 text-center md:text-left">Ticket Tiers</h4>
            <div className="space-y-4">
              {tourData.pricing.map((tier) => (
                <div
                  key={tier.tier}
                  className="flex justify-between items-center p-4 bg-gray-800/60 rounded-xl transition-transform duration-300 hover:scale-[1.02] shadow-inner"
                >
                  <span className="font-semibold text-gray-100 text-lg">{tier.tier}</span>
                  {/* The pricing is now highlighted in a vibrant green */}
                  <span className="font-extrabold text-2xl text-green-400 tracking-wide">{tier.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-8 w-full">
          <a
            href="#"
            className="w-full block text-center bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:from-fuchsia-600 hover:to-purple-700 transition-colors duration-300 transform hover:scale-[1.01]"
          >
            Grab Your Tickets!
          </a>
        </div>
      </div>
    </div>
  );
};
export default TourModal;
