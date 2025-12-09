import React, { useEffect, useRef, useState } from "react";
import ModalForm from "../../components/ModalForm";
import { Link } from "react-router-dom";

import {
  FaMusic,
  FaLightbulb,
  FaUtensils,
  FaUsers,
  FaCar,
  FaGift,
  FaConciergeBell,
  FaGlassCheers,
  FaCamera,
  FaUserFriends,
  FaHeart,
} from "react-icons/fa";

// Images
import eng1 from "../../assets/eng1.jpg";
import eng2 from "../../assets/eng2.jpg";
import eng3 from "../../assets/eng3.jpg";
import eng4 from "../../assets/eng4.jpg";

import mehndi1 from "../../assets/mehndi1.jpg";
import mehndi2 from "../../assets/mehndi2.jpg";
import mehndi3 from "../../assets/mehndi3.jpg";
import mehndi6 from "../../assets/mehndi6.jpg";

import weddingHero from "../../assets/wedding1.jpg";
import wedding from "../../assets/wedding.jpg";
import wedding2 from "../../assets/wedding2.jpg";
import wedding3 from "../../assets/wedding3.jpg";
import wedding4 from "../../assets/wedding4.jpg";

import pack1 from "../../assets/pack1.jpg";
import pack2 from "../../assets/pack2.jpg";

export default function SocialEvents() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const gallery = [eng1, eng4, mehndi1, mehndi6, wedding, wedding2];

  const handleClose = () => setSelectedIndex(null);
  const handleNext = () =>
    setSelectedIndex((prev) => (prev + 1) % gallery.length);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev - 1 + gallery.length) % gallery.length);

  const [isOpen, setIsOpen] = useState(false);

  const rooms = [
    {
      name: "Engagement",
      img: eng1,
      desc: "Perfect for exclusive engagement celebrations.",
      path: "/Services/social/Engagement",
    },
    {
      name: "Mehndi",
      img: mehndi2,
      desc: "Perfect for colorful and traditional Mehndi events.",
      path: "/Services/social/Mehndi",
    },
    {
      name: "Wedding Reception",
      img: wedding,
      desc: "Stunning interiors for your dreamy wedding ceremony.",
      path: "/Services/social/reception",
    },
  ];

  const packages = [
    {
      title: "Silver Package",
      img: pack1,
      features: [
        "Music System",
        "Buffet Dinner",
        "Basic Decorations",
        "Catering for 100 Guests",
      ],
    },
    {
      title: "Gold Package",
      img: pack2,
      features: [
        "DJ & Music",
        "Candlelight Dinner",
        "Premium Decorations",
        "Catering for 200 Guests",
      ],
    },
    {
      title: "Platinum Package",
      img: eng4,
      features: [
        "Live Music & DJ",
        "Gourmet Dining",
        "Luxury Decorations",
        "Catering for 500 Guests",
      ],
    },
  ];

  const timeline = [
    {
      step: "Arrival & Welcome",
      time: "03:00 PM",
      description:
        "Guests arrive and enjoy welcome drinks for the Engagement celebration.",
      icon: "cheers",
    },
    {
      step: "Ring Ceremony",
      time: "05:00 PM",
      description: "Formal ring exchange with family blessings and applause.",
      icon: "friends",
    },
    {
      step: "Photoshoot",
      time: "06:30 PM",
      description: "Couple and family group photography.",
      icon: "camera",
    },
    {
      step: "Mehndi & Snacks",
      time: "07:30 PM",
      description: "Bride and guests enjoy henna art with music and fun.",
      icon: "music",
    },
    {
      step: "Cocktail & DJ Night",
      time: "08:00 PM",
      description: "Party vibes with dance, music, and signature cocktails.",
      icon: "friends",
    },
    {
      step: "Grand Welcome",
      time: "08:30 PM",
      description: "Traditional grand welcome of the groom.",
      icon: "cheers",
    },
    {
      step: "Wedding Rituals & Vows",
      time: "09:00 PM",
      description: "Emotional and sacred wedding rituals.",
      icon: "music",
    },
    {
      step: "Stage Photos",
      time: "10:30 PM",
      description: "Blessings, gifts, and photography with guests.",
      icon: "camera",
    },
    {
      step: "Dinner & Celebration",
      time: "11:30 PM",
      description: "Lavish dining experience and final send-off.",
      icon: "dinner",
    },
  ];

  const getIcon = (iconKey) => {
    switch (iconKey) {
      case "cheers":
        return <FaGlassCheers className="text-white text-xl" />;
      case "camera":
        return <FaCamera className="text-white text-xl" />;
      case "dinner":
        return <FaUtensils className="text-white text-xl" />;
      case "music":
        return <FaMusic className="text-white text-xl" />;
      case "friends":
        return <FaUserFriends className="text-white text-xl" />;
      default:
        return <FaHeart className="text-white text-xl" />;
    }
  };

  const getFeatureIcon = (feature) => {
    const f = feature.toLowerCase();
    if (f.includes("music") || f.includes("dj"))
      return <FaMusic className="text-blue-600 mr-2" />;
    if (f.includes("cocktail") || f.includes("drinks"))
      return <FaGlassCheers className="text-pink-600 mr-2" />;
    if (f.includes("dinner") || f.includes("buffet") || f.includes("catering"))
      return <FaUtensils className="text-green-600 mr-2" />;
    if (f.includes("photo"))
      return <FaCamera className="text-yellow-600 mr-2" />;
    if (f.includes("guest"))
      return <FaUsers className="text-purple-600 mr-2" />;
    if (f.includes("decor")) return <FaGift className="text-red-600 mr-2" />;
    if (f.includes("light") || f.includes("candle"))
      return <FaLightbulb className="text-orange-600 mr-2" />;
    return <FaHeart className="text-blue-500 mr-2" />;
  };

  return (
    <div className="w-full text-gray-800">
      {/* HERO */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[vh] overflow-hidden">
        <img
          src={weddingHero}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Social Event
          </h2>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl text-white">
            Engagement, Mehndi & Cocktail Nights, and Wedding Celebrations all
            in one place.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 text-center">
          <h3 className="text-3xl font-bold mb-3">
            One Destination{" "}
            <span className="text-blue-800">for All Celebrations</span>
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify max-w-full mx-auto">
            From intimate Ring Ceremonies to lively Cocktail & Mehndi nights and
            grand Wedding receptions, we plan and execute every detail with
            care. Celebrate your love story with unforgettable moments in style.
            From intimate Ring Ceremonies to lively Cocktail & Mehndi nights,
            joyful Turmeric rituals, and grand reception nights we plan and
            execute every detail with creativity and care. Your journey of love
            begins with a beautiful Engagement celebration in our elegant hall a
            perfect blend of charm, style, and unforgettable moments. Whether
            intimate or grand, every detail is specially crafted to reflect your
            love story
          </p>
        </div>
      </section>

      {/* Rooms / Event Types */}
      <section className="py-8 container mx-auto px-4 sm:px-6 md:px-10">
        <h3 className="text-3xl font-bold mb-8 text-center">
          Social <span className="text-blue-800">Events</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {rooms.map((room, idx) => (
            <Link
              key={idx}
              to={room.path}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={room.img}
                alt={room.name}
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 sm:p-6">
                <h3 className="text-2xl font-bold text-white">{room.name}</h3>
                <p className="text-white mt-2 text-sm sm:text-base">
                  {room.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About + Gallery Section */}
      <section className="py-8 container mx-auto px-4 sm:px-6 md:px-10 bg-gray-50">
        <div className="container mx-auto  text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {" "}
            Gallery{" "}
          </h2>
          {/* Full Width Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedIndex(idx)}
              >
                <img
                  src={img}
                  alt={`Engagement ${idx + 1}`}
                  className="w-full h-56 md:h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
      </section>

      {/* Packages */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-800">Packages</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose a package that fits your dream celebration.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl flex flex-col items-center text-left"
              >
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 w-full">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    {pkg.title}
                  </h3>
                  <ul className="text-gray-800 flex flex-col gap-2">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        {getFeatureIcon(f)}
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Timeline */}
      <section className="py-12 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-widest">
            Event <span className="text-blue-800">Timeline</span>
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-500 rounded-full shadow-lg -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center ${
                    idx % 2 === 0
                      ? "md:justify-start md:pl-4"
                      : "md:justify-end md:pr-4 text-right"
                  }`}
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-800 rounded-full shadow-lg border-4 border-white flex items-center justify-center text-white text-2xl hover:scale-110 hover:shadow-blue-400 transition-transform duration-300 before:absolute before:inset-0 before:rounded-full before:bg-blue-300 before:opacity-50 before:animate-ping">
                      {getIcon(item.icon)}
                    </div>
                  </div>
                  <div className="bg-white border border-blue-200 shadow-xl rounded-2xl p-6 w-full md:w-[380px] max-w-lg ml-4 md:ml-8 md:mr-0 hover:shadow-blue-400 transition-shadow duration-300">
                    <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {item.step}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-1">
                      {item.time}
                    </p>
                    <p className="text-gray-900 leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 text-center">
          <h3 className="text-3xl font-bold">
            Amenities & <span className="text-blue-800">Facilities</span>
          </h3>
          <p className="max-w-2xl mx-auto mt-3 text-gray-600">
            Everything you need for a flawless ceremony: catering, sound,
            lighting, parking, and professional support.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {[
              {
                icon: <FaMusic className="text-3xl text-blue-800" />,
                title: "Live Music & DJ",
                desc: "Bands, DJ setups and MC.",
              },
              {
                icon: <FaLightbulb className="text-3xl text-blue-800" />,
                title: "Lighting & Ambience",
                desc: "Custom lighting to match each event.",
              },
              {
                icon: <FaUtensils className="text-3xl text-blue-800" />,
                title: "Catering",
                desc: "Multi-cuisine menus designed by chefs.",
              },
              {
                icon: <FaUsers className="text-3xl text-blue-800" />,
                title: "Guest Management",
                desc: "Seating, invites and guest handling.",
              },
              {
                icon: <FaCar className="text-3xl text-blue-800" />,
                title: "Parking",
                desc: "Secure on-site parking available.",
              },
              {
                icon: <FaConciergeBell className="text-3xl text-blue-800" />,
                title: "Event Coordination",
                desc: "Dedicated coordinators for each event.",
              },
            ].map((itm, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-4">
                  {itm.icon}
                </div>
                <h4 className="font-semibold">{itm.title}</h4>
                <p className="text-gray-600 mt-2">{itm.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative min-h-[40vh] sm:h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${weddingHero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Book Your Event?
          </h3>
          <p className="text-white mb-6 text-lg md:text-xl max-w-xl">
            Contact us for availability, custom packages and a personalized
            walkthrough.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-md"
          >
            Get a Quote
          </button>
        </div>
      </section>

      {/* Modal */}
      {isOpen && <ModalForm onClose={() => setIsOpen(false)} />}

      {/* Gallery Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 bg-black/50 px-3 py-1 rounded-full text-white text-2xl"
          >
            ✖
          </button>

          <img
            src={gallery[selectedIndex]}
            alt="Selected"
            className="w-[800px] h-[500px] object-cover rounded-lg shadow-lg"
          />

          <button
            onClick={handlePrev}
            className="absolute left-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-full"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
