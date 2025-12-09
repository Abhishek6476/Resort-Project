// import { useState } from "react";
// import ModalForm from "../../../components/ModalForm";
// import {
//   FaMusic,
//   FaLightbulb,
//   FaUtensils,
//   FaUsers,
//   FaCar,
//   FaGift,
//   FaConciergeBell,
// } from "react-icons/fa";
// import { FaQuoteLeft, FaStar, FaUserCircle, FaHeart } from "react-icons/fa";
// import { FaGlassCheers, FaCamera, FaUserFriends } from "react-icons/fa";

// // Hero Image
// import heroImg from "../../../assets/eng1.jpg";

// // Gallery Images
// import img1 from "../../../assets/eng2.jpg";
// import img2 from "../../../assets/eng3.jpg";
// import img3 from "../../../assets/eng4.jpg";
// import img4 from "../../../assets/eng5.jpg";
// import img5 from "../../../assets/eng6.jpg";
// import img6 from "../../../assets/eng7.jpg";

// // Packages Images (Placeholder)
// import pack1 from "../../../assets/pack1.jpg";
// import pack2 from "../../../assets/pack2.jpg";
// import pack3 from "../../../assets/pack3.jpg";

// export default function Engagement() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedImg, setSelectedImg] = useState(null);

//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const handleClose = () => setSelectedIndex(null);
//   const handleNext = () =>
//     setSelectedIndex((prev) => (prev + 1) % gallery.length);
//   const handlePrev = () =>
//     setSelectedIndex((prev) => (prev - 1 + gallery.length) % gallery.length);

//   const gallery = [img3, img4, img5, pack3, img2, img1];

//   const packages = [
//     {
//       title: "Silver Package",
//       img: pack1,
//       features: [
//         "Music System",
//         "Buffet Dinner",
//         "Basic Decorations",
//         "Catering for 100 Guests",
//       ],
//     },
//     {
//       title: "Gold Package",
//       img: pack2,
//       features: [
//         "DJ & Music",
//         "Candlelight Dinner",
//         "Premium Decorations",
//         "Catering for 200 Guests",
//       ],
//     },
//     {
//       title: "Platinum Package",
//       img: img3,
//       features: [
//         "Live Music & DJ",
//         "Gourmet Dining",
//         "Luxury Decorations",
//         "Catering for 500 Guests",
//       ],
//     },
//   ];
//   // 🎨 Map features to icons
//   const getIcon = (feature) => {
//     const f = feature.toLowerCase();
//     if (f.includes("music") || f.includes("band"))
//       return <FaMusic className="text-blue-600 text-lg" />;
//     if (f.includes("cocktail") || f.includes("drinks") || f.includes("bar"))
//       return <FaGlassCheers className="text-pink-600 text-lg" />;
//     if (f.includes("dinner") || f.includes("dining") || f.includes("buffet"))
//       return <FaUtensils className="text-green-600 text-lg" />;
//     if (f.includes("photo"))
//       return <FaCamera className="text-yellow-600 text-lg" />;
//     if (f.includes("guest") || f.includes("people"))
//       return <FaUsers className="text-purple-600 text-lg" />;
//     if (f.includes("gift") || f.includes("decor"))
//       return <FaGift className="text-red-600 text-lg" />;
//     if (f.includes("light") || f.includes("candle"))
//       return <FaLightbulb className="text-orange-600 text-lg" />;
//     return <FaHeart className="text-blue-500 text-lg" />;
//   };

//   const timeline = [
//     {
//       step: "Arrival & Welcome",
//       time: "3:00 PM",
//       description: "Guests arrive and enjoy welcome drinks at the lounge.",
//       icon: "cheers",
//     },
//     {
//       step: "Event Ceremony",
//       time: "5:00 PM",
//       description: "The formal engagement ceremony begins in the main hall.",
//       icon: "friends",
//     },
//     {
//       step: "Photo Session",
//       time: "6:00 PM",
//       description: "Photos with family, friends, and the lovely couple.",
//       icon: "camera",
//     },

//     {
//       step: "Music & Dance",
//       time: "7:30 PM",
//       description: "Live music and dancing to celebrate the joyous occasion.",
//       icon: "music",
//     },
//     {
//       step: "Dinner & Toasts",
//       time: "9:00 PM",
//       description:
//         "A gourmet dinner is served with heartfelt toasts and speeches.",
//       icon: "dinner",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Rohit & Priya",
//       text: "The engagement was magical! Everything perfect.",
//     },
//     { name: "Ankit & Neha", text: "Beautiful venue and amazing service!" },
//     { name: "Rahul & Simran", text: "Guests loved the setup and the food." },
//   ];

//   return (
//     <div className="w-full">
//       {/* Hero Section */}
//       <section className="relative w-full h-[60vh] overflow-hidden">
//         <img
//           src={heroImg}
//           alt="Engagement Hall"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center text-white px-4">
//           <h1 className="text-4xl md:text-6xl font-bold animate-fadeInDown">
//             Engagement
//           </h1>
//           <p className="mt-4 text-lg md:text-2xl max-w-3xl animate-fadeInUp">
//             celebrate your engagement in style with our elegant and intimate
//             venue
//           </p>
//         </div>
//       </section>

//       {/* About + Gallery Section */}
//       <section className="pt-16 px-8 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col lg:flex-row items-stretch gap-20">
//             {/* About Section - narrower, clean */}
//             <div className="lg:w-5/12 flex flex-col justify-between h-full">
//               <div>
//                 <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-6 leading-tight">
//                   Engagement
//                 </h2>
//                 <p className="text-gray-700 text-justify leading-[28px] mb-5">
//                   Your engagement marks the beginning of a beautiful journey and
//                   there's no better place to begin than in our elegantly
//                   designed engagement hall. With a perfect blend of charm and
//                   sophistication, we create unforgettable moments tailored to
//                   your love story.
//                 </p>
//                 <p className="text-gray-700 text-justify leading-[28px] mb-5">
//                   Whether you're planning an intimate gathering or a lavish
//                   celebration, our venue offers customizable décor, seamless
//                   coordination, and a romantic atmosphere that sets the tone for
//                   your big day. From floral arrangements to curated menus, our
//                   experienced team handles every detail with care.
//                 </p>
//                 <br />
//                 <br />
//               </div>

//               {/* Button aligned at the bottom */}
//               <div className="mt-4 lg:mt-0">
//                 <button
//                   onClick={() => setIsOpen(true)}
//                   className="bg-blue-800 text-white text-base font-medium py-3 px-8 rounded-lg hover:bg-blue-900 transition duration-300"
//                 >
//                   Get Quote
//                 </button>
//               </div>
//             </div>

//             {/* Gallery Section - wider */}
//             {/* <div className="lg:w-7/12 grid grid-cols-2 sm:grid-cols-3 gap-4">
//         {gallery.map((img, idx) => (
//           <div
//             key={idx}
//             className="overflow-hidden rounded-lg cursor-pointer"
//             onClick={() => setSelectedImg(img)}
//           >
//             <img
//               src={img}
//               alt={`Engagement Hall ${idx + 1}`}
//               className="w-full h-60 object-cover hover:scale-110 transition-transform duration-500"
//             />
//           </div>
//         ))}
//       </div> */}

//             <div className="lg:w-7/12 grid grid-cols-2 sm:grid-cols-3 gap-4">
//               {/* Gallery Grid */}
//               {gallery.map((img, idx) => (
//                 <div
//                   key={idx}
//                   className="overflow-hidden rounded-lg cursor-pointer"
//                   onClick={() => setSelectedIndex(idx)}
//                 >
//                   <img
//                     src={img}
//                     alt={`Engagement Hall ${idx + 1}`}
//                     className="w-full h-60 object-cover hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//               ))}

//               {/* Modal */}
//               {selectedIndex !== null && (
//                 <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//                   <div className="relative max-w-full w-full px-4">
//                     {/* Close Button */}
//                     <button
//                       onClick={handleClose}
//                       className="absolute top-2 right-6 text-white text-3xl font-bold hover:text-gray-300"
//                     >
//                       ✖
//                     </button>

//                     {/* Image */}
//                     <img
//                       src={gallery[selectedIndex]}
//                       alt="Selected"
//                       className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
//                     />

//                     {/* Navigation */}
//                     <button
//                       onClick={handlePrev}
//                       className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold hover:text-gray-300"
//                     >
//                       ‹
//                     </button>
//                     <button
//                       onClick={handleNext}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold hover:text-gray-300"
//                     >
//                       ›
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Engagement Packages*/}

//       <section className="pt-16 px-8 bg-gray-50">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//             Our Engagement Packages
//           </h2>
//           <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
//             Choose a package that fits your dream engagement.
//           </p>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {packages.map((pkg, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col items-center text-left"
//               >
//                 <img
//                   src={pkg.img}
//                   alt={pkg.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-blue-800 mb-6">
//                     {pkg.title}
//                   </h3>

//                   {/* 🌟 Features Centered with Icons */}
//                   <ul className="text-gray-800 flex flex-col items-left gap-3">
//                     {pkg.features.map((feature, i) => (
//                       <li key={i} className="flex items-center gap-2">
//                         {getIcon(feature)}
//                         <span className="leading-tight">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Event Timeline / Itinerary */}
//       <section className="pt-16 pb-8 bg-gradient-to-b from-gray-50 via-white to-gray-50">
//   <div className="container mx-auto px-6 max-w-6xl">
//     <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
//       Engagement Event Timeline
//     </h2>

//     <div className="relative">
//       {/* Center Line – Visible only on md+ */}
//       <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-300 -translate-x-1/2 hidden md:block"></div>

//       <div className="space-y-10">
//         {timeline.map((item, idx) => {
//           let Icon;
//           switch (item.icon) {
//             case "cheers": Icon = FaGlassCheers; break;
//             case "camera": Icon = FaCamera; break;
//             case "dinner": Icon = FaUtensils; break;
//             case "music": Icon = FaMusic; break;
//             case "friends": Icon = FaUserFriends; break;
//             default: Icon = FaGlassCheers;
//           }

//           return (
//             <div
//               key={idx}
//               className={`flex flex-col md:flex-row items-center md:items-start ${
//                 idx % 2 === 0
//                   ? "md:justify-start md:pl-16"
//                   : "md:justify-end md:pr-16 md:text-right"
//               }`}
//             >
//               <div className="relative z-10">
//                 <div className="w-12 h-12 bg-blue-800 rounded-full text-white flex items-center justify-center text-2xl shadow-lg">
//                   <Icon />
//                 </div>
//               </div>

//               <div className="bg-white border border-blue-200 shadow-xl rounded-2xl p-8 w-full max-w-sm mt-4 md:mt-0 md:ml-12">
//                 <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-3">
//                   <Icon className="text-blue-800" /> {item.step}
//                 </h3>
//                 <p className="text-blue-600 font-semibold mb-1">{item.time}</p>
//                 <p className="text-gray-900">{item.description}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// </section>

//       {/* Amenities / Features */}
//       <section className="pt-16 container mx-auto px-8 lg:px-12">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Amenities & <span className="text-blue-800">Facilities</span>
//           </h2>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             All you need for a seamless and memorable engagement celebration.
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             {
//               icon: <FaMusic className="text-3xl text-blue-800" />,
//               title: "Live Music & DJ",
//               desc: "Set the perfect mood.",
//             },
//             {
//               icon: <FaLightbulb className="text-3xl text-blue-800" />,
//               title: "Ambient Lighting",
//               desc: "Create a romantic atmosphere.",
//             },
//             {
//               icon: <FaUtensils className="text-3xl text-blue-800" />,
//               title: "Catering Services",
//               desc: "Delicious cuisines for your guests.",
//             },
//             {
//               icon: <FaUsers className="text-3xl text-blue-800" />,
//               title: "Private Lounges",
//               desc: "Comfortable spaces for the couple and family.",
//             },
//             {
//               icon: <FaCar className="text-3xl text-blue-800" />,
//               title: "Parking",
//               desc: "Safe & convenient parking.",
//             },
//             {
//               icon: <FaGift className="text-3xl text-blue-800" />,
//               title: "Event Coordination",
//               desc: "Professional support for a smooth celebration.",
//             },
//           ].map((item, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
//             >
//               <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-4">
//                 {item.icon}
//               </div>
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               <p className="text-gray-600">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="pt-16 py-16 container mx-auto px-8 lg:px-12">
//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Why Choose <span className="text-blue-800">Our Hall</span>
//           </h2>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
//             Make your engagement truly unforgettable with our elegant venue and
//             top-notch amenities designed to impress.
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {[
//             {
//               icon: <FaGift className="text-3xl text-white" />,
//               title: "Romantic Ambiance",
//               desc: "Elegant décor perfect for engagement celebrations.",
//             },
//             {
//               icon: <FaCar className="text-3xl text-white" />,
//               title: "Spacious Parking",
//               desc: "Convenient and secure parking for your guests.",
//             },
//             {
//               icon: <FaUsers className="text-3xl text-white" />,
//               title: "Event Support",
//               desc: "Professional coordination for a seamless experience.",
//             },
//             {
//               icon: <FaLightbulb className="text-3xl text-white" />,
//               title: "Custom Lighting",
//               desc: "Create the perfect atmosphere with dynamic lighting.",
//             },
//             {
//               icon: <FaMusic className="text-3xl text-white" />,
//               title: "Live Music Ready",
//               desc: "Acoustic-ready space for bands or DJs to perform.",
//             },
//             {
//               icon: <FaConciergeBell className="text-3xl text-white" />,
//               title: "In-House Catering",
//               desc: "Delicious menus crafted by expert chefs for your guests.",
//             },
//           ].map((item, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300"
//             >
//               {/* Icon */}
//               <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 mb-5 shadow-md">
//                 {item.icon}
//               </div>

//               {/* Title & Description */}
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* { Review} */}
//       {/* <section className="py-16 container mx-auto px-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//           What Our Guests Say
//         </h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((test, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500"
//             >
//               <div className="text-blue-500 text-6xl mb-4">
//                 <FaUserCircle className="mx-auto" />
//               </div>

//               <div className="text-blue-400 text-2xl mb-3">
//                 <FaQuoteLeft className="mx-auto" />
//               </div>

//               <p className="text-gray-600 italic mb-4">"{test.text}"</p>

//               <div className="flex justify-center text-yellow-400 mb-2">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} />
//                 ))}
//               </div>

//               <h4 className="font-semibold text-blue-800">{test.name}</h4>
//             </div>
//           ))}
//         </div>
//       </section> */}

//       {/* Modal Form */}
//       {isOpen && <ModalForm onClose={() => setIsOpen(false)} />}

//       {/* Image Modal */}
//       {selectedImg && (
//         <div
//           className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
//           onClick={() => setSelectedImg(null)}
//         >
//           <img
//             src={selectedImg}
//             alt="Enlarged"
//             className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
//           />
//         </div>
//       )}
//     </div>
//   );
// }



import { useState } from "react";
import ModalForm from "../../../components/ModalForm";
import {
  FaMusic,
  FaLightbulb,
  FaUtensils,
  FaUsers,
  FaCar,
  FaGift,
  FaConciergeBell,
} from "react-icons/fa";
import { FaQuoteLeft, FaStar, FaUserCircle, FaHeart } from "react-icons/fa";
import { FaGlassCheers, FaCamera, FaUserFriends } from "react-icons/fa";

import heroImg from "../../../assets/eng1.jpg";
import img1 from "../../../assets/eng2.jpg";
import img2 from "../../../assets/eng3.jpg";
import img3 from "../../../assets/eng4.jpg";
import img4 from "../../../assets/eng5.jpg";
import img5 from "../../../assets/eng6.jpg";
import img6 from "../../../assets/eng7.jpg";

import pack1 from "../../../assets/pack1.jpg";
import pack2 from "../../../assets/pack2.jpg";
import pack3 from "../../../assets/pack3.jpg";

export default function Engagement() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const gallery = [img3, img4, img5, pack3, img2, img1];

  const handleClose = () => setSelectedIndex(null);
  const handleNext = () =>
    setSelectedIndex((prev) => (prev + 1) % gallery.length);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev - 1 + gallery.length) % gallery.length);

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
      img: img3,
      features: [
        "Live Music & DJ",
        "Gourmet Dining",
        "Luxury Decorations",
        "Catering for 500 Guests",
      ],
    },
  ];

  const getIcon = (feature) => {
    const f = feature.toLowerCase();
    if (f.includes("music") || f.includes("band"))
      return <FaMusic className="text-blue-600 text-lg" />;
    if (f.includes("cocktail") || f.includes("bar"))
      return <FaGlassCheers className="text-pink-600 text-lg" />;
    if (f.includes("dinner") || f.includes("buffet"))
      return <FaUtensils className="text-green-600 text-lg" />;
    if (f.includes("photo"))
      return <FaCamera className="text-yellow-600 text-lg" />;
    if (f.includes("guest"))
      return <FaUsers className="text-purple-600 text-lg" />;
    if (f.includes("gift") || f.includes("decor"))
      return <FaGift className="text-red-600 text-lg" />;
    if (f.includes("light"))
      return <FaLightbulb className="text-orange-600 text-lg" />;
    return <FaHeart className="text-blue-500 text-lg" />;
  };

  const timeline = [
    {
      step: "Arrival & Welcome",
      time: "3:00 PM",
      description: "Guests arrive and enjoy welcome drinks at the lounge.",
      icon: "cheers",
    },
    {
      step: "Event Ceremony",
      time: "5:00 PM",
      description: "The formal engagement ceremony begins in the main hall.",
      icon: "friends",
    },
    {
      step: "Photo Session",
      time: "6:00 PM",
      description: "Photos with family, friends, and the couple.",
      icon: "camera",
    },
    {
      step: "Music & Dance",
      time: "7:30 PM",
      description: "Live music and dancing celebrations.",
      icon: "music",
    },
    {
      step: "Dinner & Toasts",
      time: "9:00 PM",
      description: "Dinner served with heartfelt toasts.",
      icon: "dinner",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Engagement Hall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Engagement</h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl">
            Celebrate your engagement in style with our elegant and intimate
            venue.
          </p>
        </div>
      </section>

      {/* About + Gallery */}
      <section className="pt-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-10 md:gap-14 lg:gap-20">
            {/* About */}
            <div className="lg:w-5/12 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-6">
                  Engagement
                </h2>
                <p className="text-gray-700 text-justify leading-[28px] mb-4">
                  Your engagement marks the beginning of a beautiful journey and
                  there's no better place to begin than in our elegantly
                  designed engagement hall. With a perfect blend of charm and
                  sophistication, we create unforgettable moments tailored to
                  your love story.
                </p>
                <p className="text-gray-700 text-justify leading-[28px] mb-4">
                   Whether you're planning an intimate gathering or a lavish
                  celebration, our venue offers customizable décor, seamless
                  coordination, and a romantic atmosphere that sets the tone for
                  your big day. From floral arrangements to curated menus, our
                  experienced team handles every detail with care.
                </p>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-800 text-white py-3 px-8 rounded-lg hover:bg-blue-900 transition mt-4 lg:mt-0"
              >
                Get Quote
              </button>
            </div>

            {/* Gallery */}
            <div className="lg:w-7/12 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedIndex(idx)}
                >
                  <img
                    src={img}
                    alt="Gallery"
                    className="w-full h-40 sm:h-52 md:h-60 object-cover hover:scale-110 transition duration-500"
                  />
                </div>
              ))}

              {/* Modal */}
              {selectedIndex !== null && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                  {/* <div className="relative w-full max-w-[90%] mx-auto px-2 sm:px-4"> */}
                    <button
                      onClick={handleClose}
                      className="absolute top-6 right-6 bg-black/50 px-3 py-1 rounded-full text-white text-2xl"
                    >
                      ✖
                    </button>
                    <img
                      src={gallery[selectedIndex]}
                      alt="Selected"
                      className="w-[800px] h-[500px] object-cover rounded-lg shadow-lg "
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
                  {/* </div> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Packages */}
      <section className="pt-16 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Engagement Packages
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Choose a package that fits your dream celebration.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col h-full overflow-hidden"
              >
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-blue-800 mb-6">
                    {pkg.title}
                  </h3>
                  <ul className="text-gray-800 flex flex-col gap-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        {getIcon(feature)}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pt-16 pb-8 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
            Engagement Event Timeline
          </h2>

          <div className="relative">
            {/* Center Line – Visible only on md+ */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-300 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-10">
              {timeline.map((item, idx) => {
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

                return (
                  <div
                    key={idx}
                    className={`flex flex-col md:flex-row items-center md:items-start ${
                      idx % 2 === 0
                        ? "md:justify-start md:pl-16"
                        : "md:justify-end md:pr-16 md:text-right"
                    }`}
                  >
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-blue-800 rounded-full text-white flex items-center justify-center text-2xl shadow-lg">
                        <Icon />
                      </div>
                    </div>

                    <div className="bg-white border border-blue-200 shadow-xl rounded-2xl p-8 w-full max-w-sm mt-4 md:mt-0 md:ml-12">
                      <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-3">
                        <Icon className="text-blue-800" /> {item.step}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-1">
                        {item.time}
                      </p>
                      <p className="text-gray-900">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="pt-16 container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Amenities & <span className="text-blue-800">Facilities</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            All you need for a seamless celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaMusic className="text-3xl text-blue-800" />,
              title: "Live Music & DJ",
              desc: "Set the perfect mood.",
            },
            {
              icon: <FaLightbulb className="text-3xl text-blue-800" />,
              title: "Ambient Lighting",
              desc: "Romantic atmosphere.",
            },
            {
              icon: <FaUtensils className="text-3xl text-blue-800" />,
              title: "Catering Services",
              desc: "Delicious cuisines.",
            },
            {
              icon: <FaUsers className="text-3xl text-blue-800" />,
              title: "Private Lounges",
              desc: "Comfortable spaces.",
            },
            {
              icon: <FaCar className="text-3xl text-blue-800" />,
              title: "Parking",
              desc: "Safe & convenient.",
            },
            {
              icon: <FaGift className="text-3xl text-blue-800" />,
              title: "Event Coordination",
              desc: "Professional support.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="pt-16 py-16 container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose <span className="text-blue-800">Our Hall</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Make your engagement unforgettable with our top-notch amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <FaGift className="text-3xl text-white" />,
              title: "Romantic Ambiance",
              desc: "Elegant décor for memorable celebrations.",
            },
            {
              icon: <FaCar className="text-3xl text-white" />,
              title: "Spacious Parking",
              desc: "Secure parking for guests.",
            },
            {
              icon: <FaUsers className="text-3xl text-white" />,
              title: "Event Support",
              desc: "Professional coordination.",
            },
            {
              icon: <FaLightbulb className="text-3xl text-white" />,
              title: "Custom Lighting",
              desc: "Perfect ambience.",
            },
            {
              icon: <FaMusic className="text-3xl text-white" />,
              title: "Live Music Ready",
              desc: "DJs & bands can perform.",
            },
            {
              icon: <FaConciergeBell className="text-3xl text-white" />,
              title: "In-House Catering",
              desc: "Delicious curated menus.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {isOpen && <ModalForm onClose={() => setIsOpen(false)} />}
    </div>
  );
}
