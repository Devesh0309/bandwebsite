import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  const faqs = [
    {
      question: "How can I book The Blacks for a performance?",
      answer:
        "For performance or event bookings, please reach out via our Booking Inquiry Form or email bookings@theblacks.com.",
    },
    {
      question: "Where can I find info on The Blacks’ new releases?",
      answer:
        "Check the Campaign/News section or follow us on Instagram, YouTube, and Spotify for real-time updates.",
    },
    {
      question: "How can I reach your management team?",
      answer: "Direct email: management@theblacks.com",
    },
    {
      question: "How to buy official merchandise?",
      answer: "Visit the Store section on our website.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Message received, we’ll reach out soon ✨");
    setFormData({ name: "", phone: "", email: "", description: "" });

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <section className="px-6 md:px-20 py-20 bg-[#1a1a1a]"style={{ backgroundImage: "url('/Backgrounds/WhatsApp Image 2025-08-26 at 16.06.59.jpeg')" }}>
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      
        {/* Left: FAQ */}
        <div className="space-y-10 w-full">
          <h2 className="text-4xl font-extrabold mb-6 text-[#f5f5dc]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg bg-[#000000] overflow-hidden transition transform hover:scale-[1.01]"
            >
              <button
                className="flex justify-between w-full text-left text-lg font-semibold text-[#aaaaaa] px-5 py-4 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="ml-4 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="px-5 pb-5 text-gray-300 text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right: Reach Out Form */}
        <div className="w-full bg-[#2a2a2a] p-8 rounded-2xl shadow-lg border border-[#3d3d3d]">
          <h3 className="text-2xl font-bold mb-6 text-[#f5f5dc]">
            Reach out to us
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-[#1a1a1a] text-white border border-gray-600 focus:ring-2 focus:ring-[#f5f5dc] focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-[#1a1a1a] text-white border border-gray-600 focus:ring-2 focus:ring-[#f5f5dc] focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-[#1a1a1a] text-white border border-gray-600 focus:ring-2 focus:ring-[#f5f5dc] focus:outline-none"
              required
            />
            <textarea
              name="description"
              placeholder="Your Message"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-[#1a1a1a] text-white border border-gray-600 focus:ring-2 focus:ring-[#f5f5dc] focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#f5f5dc] text-black font-semibold py-3 rounded-xl hover:bg-[#e6e6c4] transition"
            >
              Send Message
            </button>
          </form>
          {message && (
            <p className="mt-4 text-green-400 font-medium">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
