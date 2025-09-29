
import { useState } from "react";
import ModalForm from "../../../components/ModalForm";
import { FaMusic, FaGlassCheers, FaUtensils, FaUsers, FaStar, FaCar } from "react-icons/fa";
import { FaLightbulb, FaGift, FaConciergeBell, FaQuoteLeft, FaUserCircle, FaCamera, FaUserFriends, FaLeaf, FaPaintBrush,} from "react-icons/fa";

import bannerimg from "../../../assets/mehndi.jpg";
import img1 from "../../../assets/mehndi1.jpg";
import img2 from "../../../assets/mehndi2.jpg";
import img3 from "../../../assets/mehndi3.jpg";
import img4 from "../../../assets/mehndi4.jpg";
import img5 from "../../../assets/mehndi5.jpg";
import img6 from "../../../assets/mehndi6.jpg";
import img7 from "../../../assets/mehndi7.jpg";
import img8 from "../../../assets/mehndi8.jpg";
import img9 from "../../../assets/mehndi9.jpg";
import img10 from "../../../assets/mehndi10.jpg";
import img11 from "../../../assets/mehndi11.jpg";
import img12 from "../../../assets/mehndi12.jpg";
import img13 from "../../../assets/mehndi13.jpg";
import img14 from "../../../assets/mehndi14.jpg";
import img15 from "../../../assets/mehndi15.jpg";

import pack1 from "../../../assets/pack1.jpg";
import pack2 from "../../../assets/pack2.jpg";
import pack3 from "../../../assets/pack3.jpg";

export default function Mehndi() {
 const gallery = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

 const [selectedIndex, setSelectedIndex] = useState(null);
   const handleClose = () => setSelectedIndex(null);
  const handleNext = () => setSelectedIndex((prev) => (prev + 1) % gallery.length);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev - 1 + gallery.length) % gallery.length);


  const packages = [
    {
      title: "Silver Package",
      img: pack1,
      features: [ "Live Music", "Cocktail Drinks", "Delicious Food", "Catering for 50 Guests"],
    },
    {
      title: "Gold Package",
       img: pack2,
      features: ["DJ & Music", "Cocktail Bar", "Buffet Dinner", "Catering for 100 Guests"],
    },
    {
      title: "Platinum Package",
       img: pack3,
      features: ["Live Band", "Signature Cocktails", "Gourmet Dining", " Catering for 200 Guests"],
    },
  ];

  // Function to map feature to icon
  const getIcon = (feature) => {
    if (feature.toLowerCase().includes("music")) return <FaMusic className="text-blue-500 mr-2" />;
    if (feature.toLowerCase().includes("cocktail")) return <FaGlassCheers className="text-pink-500 mr-2" />;
    if (feature.toLowerCase().includes("food") || feature.toLowerCase().includes("dine")) return <FaUtensils className="text-green-500 mr-2" />;
    if (feature.toLowerCase().includes("guests") || feature.toLowerCase().includes("people")) return <FaUsers className="text-yellow-500 mr-2" />;
    return <FaUsers className="text-gray-700 mr-2" />;
  };

  
    {/* Mehndi time*/}
  const mehndiTimeline = [
  {
    step: "Arrival & Welcome",
    time: "05:00 PM",
    description:
      "Guests are welcomed with traditional drinks, colorful décor, and light snacks. The atmosphere is vibrant and cheerful.",
    icon: "cheers",
  },
  {
    step: "Mehndi Ceremony",
    time: "06:30 PM",
    description:
      "The bride's hands and feet are adorned with intricate henna designs, while traditional songs and dances celebrate the pre-wedding ritual.",
    icon: "music",
  },
  {
    step: "Photo Session",
    time: "08:30 PM",
    description:
      "Capture memorable moments with family and friends in a colorful and festive setting.",
    icon: "camera",
  },
  {
    step: "Cocktail & Mingling",
    time: "10:00 PM",
    description:
      "Guests enjoy signature cocktails and curated bites while mingling in a relaxed, vibrant ambiance.",
    icon: "friends",
  },
  {
    step: "Dinner & Toasts",
    time: "11:00 PM",
    description:
      "A delicious dinner is served with heartfelt toasts and celebrations to conclude the Mehndi & Cocktail evening.",
    icon: "dinner",
  },
];


  // const testimonials = [
  //   { name: "Riya & Anuj", text: "A vibrant and joyful Mehndi setup, we loved it!" },
  //   { name: "Priya & Karan", text: "Everything from decor to music was perfect." },
  //   { name: "Sneha & Raj", text: "Our guests still talk about the mehndi celebration!" },
  // ];

  return (
    <div className="w-full">
      {/* Banner */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img src={bannerimg} alt="Mehndi" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-bold text-center">Mehndi</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Celebrate your Mehndi with music, color, and unforgettable traditions
          </p>
        </div>
      </section>

      {/* About */}
   <section className="pt-16  bg-gray-50">
      {/* Text Section */}
      <div className="container mx-auto px-6 text-justify">
        <h2 className="text-4xl font-bold text-gray-700 mb-6 text-center">
         Mehndi
        </h2>

        <p className="text-gray-700 leading-[28px] max-w-full mx-auto mb-5">
          The Mehndi ceremony is one of the most vibrant and cherished
          pre-wedding rituals, celebrated with joyful music, colorful décor, and
          heartfelt traditions. It’s a time when the bride’s hands and feet are
          adorned with intricate henna designs, symbolizing love, luck, and
          prosperity for the journey ahead.
        </p>

        <p className="text-gray-700 leading-[28px] max-w-full mx-auto mb-8 text-justify">
          At our Mehndi events, we craft an atmosphere that beautifully blends
          cultural heritage with a modern twist — where traditional songs and
          laughter fill the air, and every detail is curated to reflect your
          unique style.
          <br />
          <br />
          As the sun sets, the celebration flows seamlessly into a stylish
          Cocktail evening — bringing together close friends and family in a
          festive, relaxed setting. Think upbeat music, dazzling lights,
          signature drinks, and curated bites — all coming together to set the
          perfect tone for the days to come.
        </p>
      </div>

      {/* Gallery Section */}
            <div className="container mx-auto px-6 mt-12 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-8">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {gallery.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedIndex(i)}
              className="overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Section */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-blue-800"
          >
            ✖
          </button>

          {/* Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-6 text-white text-4xl font-bold hover:text-gray-400"
          >
             ‹
          </button>

          {/* Image */}
          <img
            src={gallery[selectedIndex]}
            alt="Selected"
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg transition-transform duration-500"
          />

          {/* Next */}
          <button
            onClick={handleNext}
            className="absolute right-6 text-white text-4xl font-bold hover:text-gray-400"
          >
            ›
          </button>
        </div>

      )}
    </section>



      {/* Packages */}
      <section className="pt-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-10">
          Mehndi Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="bg-gray-50 shadow-lg rounded-2xl p-6 hover:shadow-2xl w-full max-w-sm flex flex-col items-center"
            >
              <img
                src={pkg.img}
                className="w-full h-48 object-cover rounded-xl mb-4"
                alt={pkg.title}
              />
              <h3 className="text-xl font-semibold text-blue-800 mb-6">
                {pkg.title}
              </h3>

              {/* Features list */}
              <ul className="flex flex-col items-center text-gray-700 w-full">
                {pkg.features.map((f, j) => (
                  <li key={j}
                    className="flex items-center mb-3 justify-center"
                  >
                    {getIcon(f)}
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Timeline */}
      <section className="pt-16 pb-4 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-16 tracking-widest drop-shadow-md">
          Mehndi & Cocktail Timeline
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-500 rounded-full shadow-lg -translate-x-1/2"></div>

          <div className="space-y-12">
            {mehndiTimeline.map((item, idx) => {
              let Icon;
              switch (item.icon) {
                case "cheers":
                  Icon = FaGlassCheers;
                  break;
                case "camera":
                  Icon = FaCamera;
                  break;
                case "dinner":
                  Icon = FaUtensils;
                  break;
                case "music":
                  Icon = FaMusic;
                  break;
                case "friends":
                  Icon = FaUserFriends;
                  break;
                default:
                  Icon = FaGlassCheers;
              }

              // Determine side for large screens
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center justify-center md:justify-${isLeft ? "start" : "end"} md:space-x-0`}
                >
                  {/* Timeline Dot with pulse */}
                  <div className="relative z-10 mb-4 md:mb-0">
                    <div
                      className="w-14 h-14 bg-blue-700 rounded-full shadow-lg border-4 border-white
                    flex items-center justify-center text-white text-2xl
                    hover:scale-110 hover:shadow-blue-400 transition-transform duration-300
                    before:absolute before:inset-0 before:rounded-full before:bg-blue-300 before:opacity-50 before:animate-ping"
                    >
                      <Icon />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`bg-white border border-blue-200 shadow-xl rounded-2xl p-6 md:p-8 max-w-md w-full text-center hover:shadow-blue-400 transition-shadow duration-300
                    ${isLeft ? "md:ml-12 md:mr-0" : "md:mr-12 md:ml-0"}`}
                  >
                    <h3 className="flex items-center justify-center gap-3 text-2xl font-bold text-gray-900 mb-2 tracking-wide">
                      <Icon className="text-blue-700" />
                      {item.step}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2">{item.time}</p>
                    <p className="text-gray-900 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>


{/* Amenities / Features */}
<section className="py-16 container mx-auto px-6 lg:px-12">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
      Mehndi Amenities & <span className="text-blue-800">Facilities</span>
    </h2>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      Everything you need to celebrate a colorful, joyous, and memorable Mehndi event.
    </p>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        icon: <FaMusic className="text-3xl text-blue-800" />,
        title: "Live Mehndi Music",
        desc: "Traditional songs and live performances to set a festive mood."
      },
      {
        icon: <FaLightbulb className="text-3xl text-blue-800" />,
        title: "Decor & Lighting",
        desc: "Vibrant decorations and ambient lighting to enhance the Mehndi vibe."
      },
      {
        icon: <FaUtensils className="text-3xl text-blue-800" />,
        title: "Delicious Catering",
        desc: "Festive snacks and cuisines for all your guests to enjoy."
      },
      {
        icon: <FaUsers className="text-3xl text-blue-800" />,
        title: "Family Lounges",
        desc: "Comfortable spaces for family and close friends."
      },
      {
        icon: <FaCar className="text-3xl text-blue-800" />,
        title: "Guest Parking",
        desc: "Safe and convenient parking for all attendees."
      },
      {
        icon: <FaGift className="text-3xl text-blue-800" />,
        title: "Event Coordination",
        desc: "Professional support to ensure a smooth Mehndi celebration."
      },
    ].map((item, idx) => (
      <div key={idx} className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-4">
          {item.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* Testimonials */}
      {/* <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl text-center font-bold text-blue-800 mb-10">What Our Guests Say</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <FaUserCircle className="text-blue-500 text-6xl mx-auto mb-3" />
              <FaQuoteLeft className="text-blue-400 text-2xl mx-auto mb-3" />
              <p className="italic text-gray-700 mb-4">"{t.text}"</p>
              <div className="flex justify-center text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h4 className="font-semibold text-blue-700">{t.name}</h4>
            </div>
          ))}
        </div>
      </section> */}

      {isOpen && <ModalForm onClose={() => setIsOpen(false)} />}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img src={selectedImg} className="max-w-3xl rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
}
