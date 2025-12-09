

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import ModalForm from "../../components/ModalForm";

// // Images
// import heroImg from "../../assets/grand5.jpg";
// import img1 from "../../assets/grand2.jpg";
// import img2 from "../../assets/grand3.jpg";
// import img3 from "../../assets/grand8.jpg";
// import img4 from "../../assets/grand5.jpg";
// import img5 from "../../assets/grand6.jpg";
// import img6 from "../../assets/grand7.jpg";

// // Icons
// import {
//   FaMusic,
//   FaUtensils,
//   FaLightbulb,
//   FaUsers,
//   FaCar,
//   FaCrown,
//   FaChevronDown,
// } from "react-icons/fa";

// export default function Venue() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openFAQ, setOpenFAQ] = useState(null);

//   const rooms = [
//     {
//       name: "Elite BallRoom",
//       img: img1,
//       desc: "Perfect for exclusive events and high-end gatherings.",
//       path: "/Services/venue/elite",
//     },
//     {
//       name: "Grand BallRoom",
//       img: img2,
//       desc: "Our largest venue for grand celebrations and weddings.",
//       path: "/Services/venue/grand",
//     },
//     {
//       name: "Royal BallRoom",
//       img: img3,
//       desc: "Elegant interiors for corporate and social events.",
//       path: "/services/venue/royal",
//     },
//   ];

//   const faqs = [
//     {
//       q: "How can I book a venue?",
//       a: "You can click on 'Get Quote' and fill the form, our team will contact you.",
//     },
//     {
//       q: "What is the maximum capacity?",
//       a: "Grand BallRoom can host up to 1500 guests comfortably.",
//     },
//     {
//       q: "Are catering services provided?",
//       a: "Yes, we offer world-class catering customized for your event.",
//     },
//     {
//       q: "Is parking available?",
//       a: "Ample parking is available for all guests with valet service.",
//     },
//   ];

//   return (
//     <div className="w-full">
//       {/* Hero Section */}{" "}
//       <section className="relative w-full h-[60vh]">
//         {" "}
//         <img
//           src={heroImg}
//           alt="Venue"
//           className="w-full h-full object-cover"
//         />{" "}
//         <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
//           {" "}
//           <h1 className="text-4xl md:text-5xl font-bold">Our Venues</h1>{" "}
//           <p className="mt-4 text-lg md:text-2xl max-w-2xl">
//             Luxury event spaces for weddings, conferences & celebrations
//           </p>{" "}
//         </div>{" "}
//       </section>
//       {/* Intro Text */}
//       <section className="py-14 container mx-auto px-6 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//           Explore Our Event Spaces
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Select from our exclusive range of ballrooms, each designed to make
//           your event unforgettable.
//         </p>
//       </section>
//       {/* Rooms Cards Section */}
//       <section className="py-6 container mx-auto px-6">
//         <div className="grid md:grid-cols-3 gap-8">
//           {rooms.map((room, idx) => (
//             <Link
//               key={idx}
//               to={room.path}
//               className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
//             >
//               <img
//                 src={room.img}
//                 alt={room.name}
//                 className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
//               />
//               <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
//                 <h3 className="text-2xl font-bold text-white">{room.name}</h3>
//                 <p className="text-white mt-2">{room.desc}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </section>
//       {/* Amenities Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-6 lg:px-12">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//               Amenities & <span className="text-blue-800">Facilities</span>
//             </h2>
//             <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//               World-class facilities to ensure your event is truly memorable.
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <FaMusic className="text-3xl text-blue-800" />,
//                 title: "Sound System",
//                 desc: "Crystal clear audio for every event.",
//               },
//               {
//                 icon: <FaLightbulb className="text-3xl text-blue-800" />,
//                 title: "Lighting",
//                 desc: "Customizable ambiance for your event.",
//               },
//               {
//                 icon: <FaUtensils className="text-3xl text-blue-800" />,
//                 title: "Catering",
//                 desc: "Delicious cuisines tailored for you.",
//               },
//               {
//                 icon: <FaUsers className="text-3xl text-blue-800" />,
//                 title: "Private Rooms",
//                 desc: "Comfortable bridal & VIP rooms.",
//               },
//               {
//                 icon: <FaCar className="text-3xl text-blue-800" />,
//                 title: "Parking",
//                 desc: "Safe & hassle-free parking space.",
//               },
//               {
//                 icon: <FaCrown className="text-3xl text-blue-800" />,
//                 title: "Event Manager",
//                 desc: "Professional support throughout.",
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
//               >
//                 <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-4">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                 <p className="text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* FAQ Section */}
//       <section className="py-16 container mx-auto px-6 lg:px-12">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Frequently Asked <span className="text-blue-800">Questions</span>
//           </h2>
//         </div>
//         <div className="max-w-3xl mx-auto space-y-4">
//           {faqs.map((faq, idx) => (
//             <div key={idx} className="border rounded-lg overflow-hidden">
//               <button
//                 className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-100"
//                 onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
//               >
//                 <span className="text-gray-800 font-medium">{faq.q}</span>
//                 <FaChevronDown
//                   className={`text-gray-600 transition-transform ${
//                     openFAQ === idx ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               {openFAQ === idx && (
//                 <p className="px-6 py-4 bg-gray-50 text-gray-600">{faq.a}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* CTA Section */}
//       <section className="relative w-full h-[50vh] mt-16">
//         <img
//           src={heroImg}
//           alt="Book Now"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Plan Your Event With Us
//           </h2>
//           <p className="text-white mb-6 text-lg md:text-xl max-w-xl">
//             Luxury venues, world-class amenities, and professional support for
//             your perfect event.
//           </p>
//           <button
//             onClick={() => setIsOpen(true)}
//             className="bg-blue-800 text-white py-3 px-6 rounded-full text-lg hover:bg-blue-900 transition"
//           >
//             Get Quote
//           </button>
//         </div>
//       </section>
//       {/* Modal Form */}
//       {isOpen && <ModalForm onClose={() => setIsOpen(false)} />}
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalForm from "../../components/ModalForm";

// Images
import heroImg from "../../assets/grand5.jpg";
import img1 from "../../assets/grand2.jpg";
import img2 from "../../assets/grand3.jpg";
import img3 from "../../assets/grand8.jpg";
import img4 from "../../assets/grand5.jpg";
import img5 from "../../assets/grand6.jpg";
import img6 from "../../assets/grand7.jpg";

// Icons
import {
  FaMusic,
  FaUtensils,
  FaLightbulb,
  FaUsers,
  FaCar,
  FaCrown,
  FaChevronDown,
} from "react-icons/fa";

// SLIDER IMAGES ARRAY
const sliderImages = [img4, img5, img6, img1, img2];

export default function Venue() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  // Rooms Data
  const rooms = [
    {
      name: "Elite BallRoom",
      img: img1,
      desc: "Perfect for exclusive events and high-end gatherings.",
      path: "/Services/venue/elite",
    },
    {
      name: "Grand BallRoom",
      img: img2,
      desc: "Our largest venue for grand celebrations and weddings.",
      path: "/Services/venue/grand",
    },
    {
      name: "Royal BallRoom",
      img: img3,
      desc: "Elegant interiors for corporate and social events.",
      path: "/services/venue/royal",
    },
  ];

  // FAQ Data
  const faqs = [
    {
      q: "How can I book a venue?",
      a: "You can click on 'Get Quote' and fill the form, our team will contact you.",
    },
    {
      q: "What is the maximum capacity?",
      a: "Grand BallRoom can host up to 1500 guests comfortably.",
    },
    {
      q: "Are catering services provided?",
      a: "Yes, we offer world-class catering customized for your event.",
    },
    {
      q: "Is parking available?",
      a: "Ample parking is available for all guests with valet service.",
    },
  ];

  return (
    <div className="w-full">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative w-full h-[60vh]">
        <img src={heroImg} alt="Venue" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Our Venues</h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl">
            Luxury event spaces for weddings, conferences & celebrations
          </p>
        </div>
      </section>

      {/* ---------------- INTRO TEXT ---------------- */}
      <section className="py-14 container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Explore Our Event Spaces
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select from our exclusive range of ballrooms, each designed to make
          your event unforgettable.
        </p>
      </section>

      {/* ---------------- ROOMS GRID ---------------- */}
      <section className="py-6 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <Link
              key={idx}
              to={room.path}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <img
                src={room.img}
                alt={room.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white">{room.name}</h3>
                <p className="text-white mt-2">{room.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------------- AMENITIES SECTION ---------------- */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Amenities & <span className="text-blue-800">Facilities</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              World-class facilities to ensure your event is truly memorable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMusic className="text-3xl text-blue-800" />,
                title: "Sound System",
                desc: "Crystal clear audio for every event.",
              },
              {
                icon: <FaLightbulb className="text-3xl text-blue-800" />,
                title: "Lighting",
                desc: "Customizable ambiance for your event.",
              },
              {
                icon: <FaUtensils className="text-3xl text-blue-800" />,
                title: "Catering",
                desc: "Delicious cuisines tailored for you.",
              },
              {
                icon: <FaUsers className="text-3xl text-blue-800" />,
                title: "Private Rooms",
                desc: "Comfortable bridal & VIP rooms.",
              },
              {
                icon: <FaCar className="text-3xl text-blue-800" />,
                title: "Parking",
                desc: "Safe & hassle-free parking space.",
              },
              {
                icon: <FaCrown className="text-3xl text-blue-800" />,
                title: "Event Manager",
                desc: "Professional support throughout.",
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
        </div>
      </section>

      {/* ---------------- 3D SLIDER SECTION ------------------ */}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Venue <span className="text-blue-800">Highlights</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Experience luxury through stunning visuals
            </p>
          </div>

          <Slider3D />
        </div>
      </section>

      {/* ---------------- FAQ SECTION ---------------- */}
      <section className="py-16 container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Frequently Asked <span className="text-blue-800">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-100"
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              >
                <span className="text-gray-800 font-medium">{faq.q}</span>
                <FaChevronDown
                  className={`text-gray-600 transition-transform ${
                    openFAQ === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFAQ === idx && (
                <p className="px-6 py-4 bg-gray-50 text-gray-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="relative w-full h-[50vh] mt-16">
        <img src={heroImg} alt="Book Now" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Plan Your Event With Us
          </h2>
          <p className="text-white mb-6 text-lg md:text-xl max-w-xl">
            Luxury venues, world-class amenities, and professional support for
            your perfect event.
          </p>

         <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-md text-white"
          >
            Get a Quote
          </button>
        </div>
      </section>

      {isOpen && <ModalForm onClose={() => setIsOpen(false)} />}
    </div>
  );
}

/* ----------- 3D SLIDER COMPONENT (EXACT) -------------- */

function Slider3D() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Function to calculate position smoothly
  const getPositionStyle = (i) => {
    const diff = (i - index + sliderImages.length) % sliderImages.length;

    let style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transition: "0.75s cubic-bezier(0.25, 0.8, 0.25, 1)",
    };

    // CENTER IMAGE
    if (diff === 0) {
      return {
        ...style,
        width: "518px",
        height: "415px",
        transform: "translate(-50%, -50%) translateX(0px)",
        opacity: 1,
        zIndex: 30,
      };
    }

    // RIGHT IMAGE
    if (diff === 1) {
      return {
        ...style,
        width: "506px",
        height: "296px",
        transform: "translate(-50%, -50%) translateX(280px)",
        opacity: 0.88,
        zIndex: 20,
      };
    }

    // LEFT IMAGE
    if (diff === sliderImages.length - 1) {
      return {
        ...style,
        width: "506px",
        height: "296px",
        transform: "translate(-50%, -50%) translateX(-280px)",
        opacity: 0.88,
        zIndex: 20,
      };
    }

    // Hide other images (for smooth)
    return {
      ...style,
      opacity: 0,
      transform: "translate(-50%, -50%) scale(0.9)",
      zIndex: 0,
    };
  };

  return (
    <div className="relative h-[450px] w-full flex justify-center items-center overflow-visible">
      {sliderImages.map((img, i) => (
        <div key={i} style={getPositionStyle(i)}>
          <img
            src={img}
            className="rounded-lg shadow-lg border-2 border-white w-full h-full object-cover"
            draggable="false"
          />
        </div>
      ))}
    </div>
  );
}

 