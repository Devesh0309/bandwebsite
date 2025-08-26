import React from "react";
// import ParticleBackground from "../components/ParticleBackground";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center p-4 w-full bg-cover bg-center"
    style={{ backgroundImage: "url('/HeroSection/WhatsApp Image 2025-08-26 at 03.02.37.jpeg')" }}
  >
    {/* <ParticleBackground /> */}
    <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
    
    {/* Enhanced text with multiple visual effects */}
    <div className="absolute bottom-[120px] left-1/2 transform -translate-x-1/2 z-10 text-center">
      <h1 className="text-6xl md:text-8xl font-black text-white tracking-wider leading-none mb-4 animate-slideInLeft relative">
        {/* Multiple text shadow layers for depth */}
        <span 
          className="relative z-10"
          style={{
            textShadow: `
              0 0 10px rgba(255, 255, 255, 0.3),
              0 0 20px rgba(255, 255, 255, 0.2),
              0 0 30px rgba(255, 255, 255, 0.1),
              3px 3px 0px rgba(0, 0, 0, 0.8),
              6px 6px 0px rgba(0, 0, 0, 0.6),
              9px 9px 0px rgba(0, 0, 0, 0.4)
            `
          }}
        >
          THE BLACKS
        </span>
        {/* Background glow effect */}
        <span 
          className="absolute inset-0 text-6xl md:text-8xl font-black text-white opacity-20 blur-sm animate-pulse"
          aria-hidden="true"
        >
          THE BLACKS
        </span>
      </h1>
      
      {/* Enhanced subtitle with better contrast */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/60 blur-lg rounded-lg"></div>
        <p
          className="relative text-xl md:text-3xl font-light text-gray-100 animate-fadeIn px-6 py-3"
          style={{ 
            animationDelay: "0.5s",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)"
          }}
        >
          Forging soundscapes from shadows and light.
        </p>
      </div>
    </div>

    {/* Additional custom styles */}
    <style jsx>{`
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-100px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-slideInLeft {
        animation: slideInLeft 1s ease-out;
      }
      
      .animate-fadeIn {
        animation: fadeIn 1s ease-out;
        opacity: 0;
        animation-fill-mode: forwards;
      }
      
      /* Responsive text scaling */
      @media (max-width: 640px) {
        h1 {
          font-size: 4rem !important;
        }
      }
      
      @media (min-width: 1536px) {
        h1 {
          font-size: 14rem !important;
        }
      }
    `}</style>
  </section>
);

export default HeroSection;