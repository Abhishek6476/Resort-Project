import { FaBed, FaBuilding, FaUsers, FaGlassCheers, FaUtensils, FaUserTie } from "react-icons/fa";

export default function WhatWeOffer() {
  const offers = [
    {
      icon: <FaBed className="text-blue-800 text-4xl mb-3" />,
      title: "Luxury Room Booking",
      description:
        "Choose from beautifully designed rooms offering comfort, elegance, and premium hospitality.",
    },
    {
      icon: <FaBuilding className="text-blue-800 text-4xl mb-3" />,
      title: "Wedding & Venue Services",
      description:
        "Perfect venues for grand celebrations, intimate ceremonies, and dream weddings.",
    },
    {
      icon: <FaUsers className="text-blue-800 text-4xl mb-3" />,
      title: "Corporate Events",
      description:
        "State-of-the-art facilities for conferences, meetings, seminars, and business gatherings.",
    },
    {
      icon: <FaGlassCheers className="text-blue-800 text-4xl mb-3" />,
      title: "Social Events",
      description:
        "From birthdays to anniversaries, create unforgettable moments with seamless hospitality.",
    },
    {
      icon: <FaUtensils className="text-blue-800 text-4xl mb-3" />,
      title: "Dining Experiences",
      description:
        "Relish flavors from around the world with our premium dining and culinary services.",
    },
    {
      icon: <FaUserTie className="text-blue-800 text-4xl mb-3" />,
      title: "Career Opportunities",
      description:
        "Join a professional, passionate team shaping the future of hospitality.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What <span className="text-blue-800">We Offer</span>
          </h2>
        <p className="text-gray-600 mb-12">
          A complete hospitality experience tailored for leisure, business, and celebrations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {offers.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow-md p-8 hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}