import React, { useState } from "react";
import FAQSection from "../components/FAQSection";

const ContactPage = () => {
  const [openIndex, setOpenIndex] = useState(null);


  
  return (
    <div
      id="contact"
      className="linear-gradient(180deg, #0f0c29, #302b63, #24243e) text-white min-h-screen scroll-mt-[68px]"
    >
      {/* HERO */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-24 overflow-hidden">
        {/* Text */}
        <div className="z-10 max-w-2xl">
          <h1 className="text-7xl md:text-9xl font-extrabold leading-tight ">
            CONTACT US
          </h1>
          <p className="mt-6 text-lg max-w-lg">
            For any inquiries, collaborations, or just to say hello, we’d love
            to hear from you. Reach out and let’s connect.
          </p>
        </div>

        {/* Images Side by Side */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:flex">
          <img
            src="/ContactSection/@pexrljam · rock wallpaper's.jpeg"
            alt="The Blacks band 1"
            className="h-full w-1/2 object-cover opacity-90"
          />
          <img
            src="/ContactSection/Rock Wallpapers.jpeg"
            alt="The Blacks band 2"
            className="h-full w-1/2 object-cover opacity-90"
          />
        </div>
      </section>

      {/* CONTACT INFO GRID */}
      <section className="grid md:grid-cols-3 gap-12 px-8 md:px-20 py-20 border-t border-gray-300">
        <div>
          <h2 className="text-xl font-semibold mb-3">PRESS</h2>
          <p>The Blacks Media Office</p>
          <p>Email: press@theblacks.com</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">BOOKINGS</h2>
          <p>For concerts, tours, festivals</p>
          <p>Email: bookings@theblacks.com</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">MANAGEMENT</h2>
          <p>The Blacks HQ</p>
          <p>Email: management@theblacks.com</p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection/>

      {/* FOOTER CTA */}
      <footer className="px-8 md:px-20 py-12 border-t border-gray-300 text-center">
        <p className="text-lg">
          Follow The Blacks on Instagram, YouTube & Spotify
        </p>
      </footer>
    </div>
  );
};

export default ContactPage;
