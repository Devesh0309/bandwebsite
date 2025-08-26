import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./pages/HeroSection";
import MusicSection from "./pages/MusicSection";
import TourSection from "./pages/TourSection";
import ContactPage from "./pages/ContactSection";

const App = () => (
  <div className="bg-gray-950 min-h-screen w-full overflow-x-hidden">
    <Header />
    <main>
      <HeroSection />
      <MusicSection />
      <TourSection />
      <ContactPage/>
    </main>
    <Footer />
  </div>
);

export default App;
