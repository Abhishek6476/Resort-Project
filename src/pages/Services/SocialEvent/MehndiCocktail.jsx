// import React, { useState } from "react";
// import { FaCheckCircle } from "react-icons/fa";

// const MehndiCocktail = () => {
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [selectedPackage, setSelectedPackage] = useState("");

//   const gallery = [
//     "/images/mehndi1.jpg",
//     "/images/mehndi2.jpg",
//     "/images/mehndi3.jpg",
//     "/images/mehndi4.jpg",
//     "/images/mehndi5.jpg",
//   ];

//   const packages = [
//     {
//       title: "Silver Package",
//       img: "/images/mehndi1.jpg",
//       features: [
//         "Basic Floral Decoration",
//         "Music & Dhol Setup",
//         "Welcome Drinks",
//         "Seating Arrangement",
//       ],
//     },
//     {
//       title: "Gold Package",
//       img: "/images/mehndi2.jpg",
//       features: [
//         "Thematic Floral Decor",
//         "Live Music / DJ",
//         "Photo Booth",
//         "Buffet Arrangement",
//       ],
//     },
//     {
//       title: "Platinum Package",
//       img: "/images/mehndi3.jpg",
//       features: [
//         "Luxury Theme Decoration",
//         "Live Performers",
//         "Catering & Drinks",
//         "Photography & Videography",
//       ],
//     },
//   ];

//   const handleBookNow = (pkg) => {
//     setSelectedPackage(pkg);
//     setIsFormOpen(true);
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[60vh] bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/images/mehndi-banner.jpg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//           <h1 className="text-white text-5xl font-bold">Mehndi Celebration</h1>
//         </div>
//       </div>

//       {/* About + Gallery */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col lg:flex-row items-stretch gap-10">
//             {/* About */}
//             <div className="flex-1 flex flex-col justify-between">
//               <div>
//                 <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6 leading-tight">
//                   Mehndi Ceremony
//                 </h2>
//                 <p className="text-gray-700 leading-[28px] mb-5">
//                   Celebrate your Mehndi in vibrant style! Our venue brings
//                   together tradition and joy, perfect for creating colorful
//                   memories with music, dance, and decor that reflect your
//                   personality.
//                 </p>
//                 <p className="text-gray-700 leading-[28px] mb-5">
//                   From floral backdrops to traditional seating, our team ensures
//                   every detail radiates warmth and festivity. Whether an
//                   intimate affair or a lively gathering, we make it special.
//                 </p>
//               </div>
//               <button
//                 onClick={() => handleBookNow("Mehndi")}
//                 className="bg-green-700 hover:bg-green-800 text-white text-base py-3 px-8 rounded-lg transition duration-300"
//               >
//                 Get Quote
//               </button>
//             </div>

//             {/* Gallery */}
//             <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
//               {gallery.map((img, i) => (
//                 <img
//                   key={i}
//                   src={img}
//                   alt={`Mehndi ${i + 1}`}
//                   className="w-full h-60 object-cover rounded-lg hover:scale-110 transition duration-500"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Packages */}
//       <section className="pt-16 bg-gray-50">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">
//             Mehndi Packages
//           </h2>
//           <p className="text-gray-600 mb-12">
//             Choose the package that suits your dream celebration.
//           </p>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {packages.map((pkg, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
//               >
//                 <img
//                   src={pkg.img}
//                   alt={pkg.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6 text-left">
//                   <h3 className="text-xl font-bold text-green-700 mb-4">
//                     {pkg.title}
//                   </h3>
//                   <ul className="space-y-2 text-gray-700">
//                     {pkg.features.map((f, j) => (
//                       <li key={j} className="flex items-center gap-2">
//                         <FaCheckCircle className="text-green-600" /> {f}
//                       </li>
//                     ))}
//                   </ul>
//                   <button
//                     onClick={() => handleBookNow(pkg.title)}
//                     className="mt-6 bg-green-700 hover:bg-green-800 text-white w-full py-2 rounded-lg transition"
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Booking Form */}
//       {isFormOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-8 rounded-xl w-full max-w-lg relative">
//             <button
//               className="absolute top-3 right-4 text-gray-600 text-xl"
//               onClick={() => setIsFormOpen(false)}
//             >
//               ✕
//             </button>
//             <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
//               Book Your {selectedPackage} Package
//             </h3>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full border px-4 py-2 rounded-lg"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full border px-4 py-2 rounded-lg"
//                 required
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone"
//                 className="w-full border px-4 py-2 rounded-lg"
//                 required
//               />
//               <input
//                 type="date"
//                 className="w-full border px-4 py-2 rounded-lg"
//                 required
//               />
//               <textarea
//                 placeholder="Message"
//                 rows="3"
//                 className="w-full border px-4 py-2 rounded-lg"
//               ></textarea>
//               <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg">
//                 Submit Booking
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MehndiCocktail;


// 100 work
import { useState } from "react";
import ModalForm from "../../../components/ModalForm";
import {
  FaMusic,
  FaLightbulb,
  FaUtensils,
  FaUsers,
  FaGift,
  FaConciergeBell,
  FaQuoteLeft,
  FaStar,
  FaUserCircle,
  FaCamera,
  FaUserFriends,
  FaLeaf,
  FaPaintBrush,
} from "react-icons/fa";

// import heroImg from "../../../assets/mehndi-hero.jpg";
import img1 from "../../../assets/mehndi1.jpg";
import img2 from "../../../assets/mehndi2.jpg";
import img3 from "../../../assets/mehndi3.jpg";
import img4 from "../../../assets/mehndi4.jpg";
// import pack1 from "../../../assets/pack1.jpg";
// import pack2 from "../../../assets/pack2.jpg";
// import pack3 from "../../../assets/pack3.jpg";

export default function Mehndi() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const gallery = [img1, img2, img3, img4];
//   const packages = [
//     {
//       title: "Silver Mehndi Package",
//       features: ["Basic Decor", "Catering for 50 Guests", "Music & Lights"],
//       img: pack1,
//     },
//     {
//       title: "Gold Mehndi Package",
//       features: ["Premium Decor", "Catering for 100 Guests", "DJ & Folk Dance"],
//       img: pack2,
//     },
//     {
//       title: "Platinum Mehndi Package",
//       features: [
//         "Luxury Decor",
//         "Catering for 200 Guests",
//         "Full Event Coordination",
//       ],
//       img: pack3,
//     },
//   ];

  const timeline = [
    {
      step: "Welcome Rituals",
      time: "3:00 PM",
      description: "Guests arrive and enjoy welcome drinks with traditional music.",
      icon: "leaf",
    },
    {
      step: "Mehndi Ceremony",
      time: "4:30 PM",
      description: "Bride’s mehndi begins with music and laughter.",
      icon: "paint",
    },
    {
      step: "Photo Session",
      time: "6:00 PM",
      description: "Capture the colorful moments with friends & family.",
      icon: "camera",
    },
    {
      step: "Dance & Music",
      time: "7:30 PM",
      description: "Enjoy folk songs and dance performances.",
      icon: "music",
    },
    {
      step: "Dinner & Celebration",
      time: "9:00 PM",
      description: "Delicious dinner with festive desserts.",
      icon: "dinner",
    },
  ];

  const testimonials = [
    { name: "Riya & Anuj", text: "A vibrant and joyful Mehndi setup, we loved it!" },
    { name: "Priya & Karan", text: "Everything from decor to music was perfect." },
    { name: "Sneha & Raj", text: "Our guests still talk about the mehndi celebration!" },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img src={""} alt="Mehndi" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-bold">Mehndi Celebration</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Celebrate your Mehndi with music, color, and unforgettable traditions
          </p>
        </div>
      </section>

      {/* About */}
      <section className="pt-16 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-10">
          <div className="lg:w-5/12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Mehndi & Cocktail </h2>
            <p className="text-gray-700 leading-[28px] mb-5">
              The Mehndi ceremony is one of the most vibrant and cherished pre-wedding rituals, celebrated with joyful music, colorful décor, and heartfelt traditions. It’s a time when the bride’s hands and feet are adorned with intricate henna designs, symbolizing love, luck, and prosperity for the journey ahead.
</p>
 <p className="text-gray-700 leading-[28px] mb-5">
At our Mehndi events, we craft an atmosphere that beautifully blends cultural heritage with a modern twist — where traditional songs and laughter fill the air, and every detail is curated to reflect your unique style.

As the sun sets, the celebration flows seamlessly into a stylish Cocktail evening — bringing together close friends and family in a festive, relaxed setting. Think upbeat music, dazzling lights, signature drinks, and curated bites — all coming together to set the perfect tone for the days to come.


            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Get Quote
            </button>
          </div>

          <div className="lg:w-7/12 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImg(img)}
                className="overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={img}
                  alt="Mehndi"
                  className="w-full h-56 object-cover hover:scale-110 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      {/* <section className="pt-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Mehndi Packages
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div key={i} className="bg-gray-50 shadow-lg rounded-2xl p-6 hover:shadow-2xl">
                <img src={pkg.img} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{pkg.title}</h3>
                <ul className="text-gray-700 leading-7">
                  {pkg.features.map((f, j) => (
                    <li key={j}>• {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline */}
      <section className="pt-16 bg-gray-50">
        <h2 className="text-center text-4xl font-bold text-blue-900 mb-10">Mehndi Event Timeline</h2>
        <div className="container mx-auto px-6 max-w-5xl space-y-10">
          {timeline.map((t, i) => {
            const iconMap = {
              leaf: <FaLeaf />,
              paint: <FaPaintBrush />,
              camera: <FaCamera />,
              music: <FaMusic />,
              dinner: <FaUtensils />,
            };
            return (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
                <div className="text-blue-600 text-3xl">{iconMap[t.icon]}</div>
                <div>
                  <h3 className="text-xl font-bold">{t.step}</h3>
                  <p className="text-blue-600 font-semibold">{t.time}</p>
                  <p className="text-gray-700">{t.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 container mx-auto px-6">
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
      </section>

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
