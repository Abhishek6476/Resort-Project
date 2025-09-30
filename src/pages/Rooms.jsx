
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Bed,
//   Maximize,
//   Users,
//   Star,
//   Bath,
//   Wifi,
//   Tv,
//   Coffee,
// } from "lucide-react";

// // local images
// import room from "../assets/room.jpg";
// import room1 from "../assets/room1.jpg";
// import room2 from "../assets/room2.jpg";
// import room3 from "../assets/room3.jpg";
// import room4 from "../assets/room4.jpg";
// import room5 from "../assets/room5.jpg";
// import room6 from "../assets/room6.jpg";
// import room7 from "../assets/room7.jpeg";
// import room8 from "../assets/room8.jpg";
// import room9 from "../assets/room9.jpeg";

// const Rooms = () => {
//   const [isOpen, setIsOpen] = useState(false); // booking form
//   const [selectedRoom, setSelectedRoom] = useState("");
//   const [previewImage, setPreviewImage] = useState(null); // full screen image preview

//   const openModal = (room) => {
//     setSelectedRoom(room);
//     setIsOpen(true);
//   };
//   const closeModal = () => setIsOpen(false);

//   const openImage = (src) => setPreviewImage(src);
//   const closeImage = () => setPreviewImage(null);

//   return (
//     <div className="w-full overflow-hidden">
//       {/* Banner Image */}
//       <div
//         className="relative w-full h-[60vh] bg-center bg-no-repeat bg-cover"
//         style={{
//           backgroundImage: `url(${room})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black/30"></div>

//         {/* Text Content */}
//         <div className="absolute inset-0 flex items-center justify-center text-center px-8 sm:px-16 z-10">
//           <div className="text-white">
//             <h1 className="text-5xl font-bold mb-4">Rooms</h1>
//             <p className="text-lg">
//               <span className="text-white">Home</span> &gt; Rooms
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Deluxe Room Section */}
//       <section className="pt-20 pb-12 px-8 bg-gradient-to-r from-gray-50 to-white relative">
//         <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
//           {/* Left Side Text */}
//           <div className="space-y-6">
//             <h2 className="text-4xl font-bold">
//               <span className="text-blue-800">Deluxe</span> Rooms
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               Experience comfort and elegance with our Deluxe Rooms, perfect for
//               both leisure and business travelers. Modern design, cozy lighting,
//               and large windows offer the ideal stay.
//             </p>

//             <ul className="space-y-3 text-gray-700 text-lg">
//               <li className="flex items-center gap-2">
//                 <Maximize className="text-blue-800" size={20} /> Spacious layout
//               </li>
//               <li className="flex items-center gap-2">
//                 <Bed className="text-blue-800" size={20} /> King/Queen size bed
//               </li>
//               <li className="flex items-center gap-2">
//                 <Users className="text-blue-800" size={20} /> Ideal for 2 guests
//               </li>
//               <li className="flex items-center gap-2">
//                 <Star className="text-blue-800" size={20} /> City view & premium
//                 amenities
//               </li>
//             </ul>

//             <button
//               onClick={() => openModal("Deluxe Room")}
//               className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-semibold transition mt-6"
//             >
//               Book Now
//             </button>
//           </div>

//           {/* Right Side Images */}
//           <div className="flex flex-col md:flex-row gap-4">
//             <img
//               src={room1}
//               alt="Deluxe Room"
//               className="rounded-lg shadow-md w-full md:w-1/2 object-cover cursor-pointer"
//               onClick={() => openImage(room1)}
//             />
//             <div className="flex flex-col gap-4 w-full md:w-1/2">
//               <img
//                 src={room2}
//                 alt="Deluxe Room"
//                 className="rounded-lg shadow-md object-cover h-[180px] cursor-pointer"
//                 onClick={() => openImage(room2)}
//               />
//               <img
//                 src={room3}
//                 alt="Deluxe Room"
//                 className="rounded-lg shadow-md object-cover h-[180px] cursor-pointer"
//                 onClick={() => openImage(room3)}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Superior Room Section */}
//       <section className="py-12 px-8 bg-gradient-to-r from-white to-gray-50 relative">
//         <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
//           {/* Left Side Images */}
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex flex-col gap-4 w-full md:w-1/2">
//               <img
//                 src={room5}
//                 alt="Superior Room"
//                 className="rounded-lg shadow-md object-cover h-[180px] cursor-pointer"
//                 onClick={() => openImage(room5)}
//               />
//               <img
//                 src={room6}
//                 alt="Superior Room"
//                 className="rounded-lg shadow-md object-cover h-[180px] cursor-pointer"
//                 onClick={() => openImage(room6)}
//               />
//             </div>
//             <img
//               src={room7}
//               alt="Superior Room"
//               className="rounded-lg shadow-md w-full md:w-1/2 object-cover cursor-pointer"
//               onClick={() => openImage(room7)}
//             />
//           </div>

//           {/* Right Side Text */}
//           <div className="space-y-6">
//             <h2 className="text-4xl font-bold">
//               <span className="text-blue-800">Superior</span> Rooms
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               Superior Rooms bring you an extra touch of elegance, with modern
//               interiors, premium finishes, and warm colors to make your stay
//               memorable.
//             </p>

//             <ul className="space-y-3 text-gray-700 text-lg">
//               <li className="flex items-center gap-2">
//                 <Star className="text-blue-800" size={20} /> Premium interiors
//               </li>
//               <li className="flex items-center gap-2">
//                 <Wifi className="text-blue-800" size={20} /> High-speed Wi-Fi
//               </li>
//               <li className="flex items-center gap-2">
//                 <Tv className="text-blue-800" size={20} /> Smart TV
//               </li>
//               <li className="flex items-center gap-2">
//                 <Coffee className="text-blue-800" size={20} /> In-room coffee &
//                 tea
//               </li>
//             </ul>

//             <button
//               onClick={() => openModal("Superior Room")}
//               className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-semibold transition"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Suite Room Section */}
//       <section className="py-12 px-8 bg-gradient-to-r from-gray-50 to-white relative">
//         <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
//           {/* Left Side Text */}
//           <div className="space-y-6">
//             <h2 className="text-4xl font-bold">
//               <span className="text-blue-800">Suite</span> Rooms
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               Suites are designed for those who demand luxury. With separate
//               living areas, bathtubs, and exclusive facilities, our suites are
//               ideal for long stays and family vacations.
//             </p>

//             <ul className="space-y-3 text-gray-700 text-lg">
//               <li className="flex items-center gap-2">
//                 <Maximize className="text-blue-800" size={20} /> Separate living
//                 & bedroom
//               </li>
//               <li className="flex items-center gap-2">
//                 <Bath className="text-blue-800" size={20} /> Luxury bathrooms
//               </li>
//               <li className="flex items-center gap-2">
//                 <Users className="text-blue-800" size={20} /> Perfect for
//                 families & VIPs
//               </li>
//               <li className="flex items-center gap-2">
//                 <Star className="text-blue-800" size={20} /> Premium furniture &
//                 decor
//               </li>
//             </ul>

//             <button
//               onClick={() => openModal("Suite Room")}
//               className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-semibold transition"
//             >
//               Book Now
//             </button>
//           </div>

//           {/* Right Side Images*/}
//           <div className="flex flex-col gap-4">
//             <img
//               src={room8}
//               alt="Suite Room"
//               className="rounded-lg shadow-md object-cover h-[200px] w-full cursor-pointer"
//               onClick={() => openImage(room8)}
//             />
//             <div className="grid grid-cols-2 gap-4">
//               <img
//                 src={room9}
//                 alt="Suite Room"
//                 className="rounded-lg shadow-md object-cover h-[180px] w-full cursor-pointer"
//                 onClick={() => openImage(room9)}
//               />
//               <img
//                 src={room4}
//                 alt="Suite Room"
//                 className="rounded-lg shadow-md object-cover h-[180px] w-full cursor-pointer"
//                 onClick={() => openImage(room4)}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Popup Modal Form */}
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="bg-white p-8 rounded-lg shadow-xl w-[90%] max-w-md relative"
//           >
//             <button
//               onClick={closeModal}
//               className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-full text-gray-700 text-lg"
//             >
//               ✖
//             </button>

//             <h2 className="text-2xl font-bold mb-4 text-gray-900">
//               Submit Your Details
//             </h2>

//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
//               />
//               <input
//                 type="number"
//                 placeholder="Mob No"
//                 className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
//               />
//               <input
//                 type="date"
//                 placeholder="Checked In"
//                 className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
//               />
//               <textarea
//                 placeholder="Your Message"
//                 className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
//                 rows="4"
//               ></textarea>

//               <button className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-md font-semibold transition hover:scale-105">
//                 Submit
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       )}

//       {/* Full Screen Image Preview */}

//       {previewImage && (
//         <div
//           className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
//           onClick={closeImage}
//         >
//           {/* Prev Button */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               const currentIndex = [
//                 room1,
//                 room2,
//                 room3,
//                 room4,
//                 room5,
//                 room6,
//                 room7,
//                 room8,
//                 room9,
//               ].indexOf(previewImage);
//               const prevIndex = (currentIndex - 1 + 9) % 9; // wrap around
//               setPreviewImage(
//                 [room1, room2, room3, room4, room5, room6, room7, room8, room9][
//                   prevIndex
//                 ]
//               );
//             }}
//             className="absolute left-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/70"
//           >
//             ‹
//           </button>

//           {/* Image */}
//           <img
//             src={previewImage}
//             alt="Preview"
//             className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
//           />

//           {/* Next Button */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               const currentIndex = [
//                 room1,
//                 room2,
//                 room3,
//                 room4,
//                 room5,
//                 room6,
//                 room7,
//                 room8,
//                 room9,
//               ].indexOf(previewImage);
//               const nextIndex = (currentIndex + 1) % 9; // wrap around
//               setPreviewImage(
//                 [room1, room2, room3, room4, room5, room6, room7, room8, room9][
//                   nextIndex
//                 ]
//               );
//             }}
//             className="absolute right-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/70"
//           >
//             ›
//           </button>

//           {/* Close Button */}
//           <button
//             onClick={closeImage}
//             className="absolute top-6 right-6 bg-black/50 px-3 py-1 rounded-full text-white text-2xl"
//           >
//             ✖
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Rooms;




import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Bed,
  Maximize,
  Users,
  Star,
  Bath,
  Wifi,
  Tv,
  Coffee,
} from "lucide-react";

// local images
import room from "../assets/room.jpg";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";
import room5 from "../assets/room5.jpg";
import room6 from "../assets/room6.jpg";
import room7 from "../assets/room7.jpeg";
import room8 from "../assets/room8.jpg";
import room9 from "../assets/room9.jpeg";

const Rooms = () => {
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null); // full screen image preview

  const openImage = (src) => setPreviewImage(src);
  const closeImage = () => setPreviewImage(null);

  // Function to handle "Book Now" click
  const handleBooking = (roomTitle, price) => {
    navigate("/booking", { state: { room: { title: roomTitle, price } } });
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Banner Image */}
      <div
        className="relative w-full h-[60vh] bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${room})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-8 sm:px-16 z-10">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Rooms</h1>
            <p className="text-lg">
              <span className="text-white">Home</span> &gt; Rooms
            </p>
          </div>
        </div>
      </div>

      {/* Deluxe Room Section */}
      <section className="pt-20 pb-12 px-8 bg-gradient-to-r from-gray-50 to-white relative">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              <span className="text-blue-800">Deluxe</span> Rooms
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Experience comfort and elegance with our Deluxe Rooms, perfect for
              both leisure and business travelers. Modern design, cozy lighting,
              and large windows offer the ideal stay.
            </p>

            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-center gap-2">
                <Maximize className="text-blue-800" size={20} /> Spacious layout
              </li>
              <li className="flex items-center gap-2">
                <Bed className="text-blue-800" size={20} /> King/Queen size bed
              </li>
              <li className="flex items-center gap-2">
                <Users className="text-blue-800" size={20} /> Ideal for 2 guests
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-blue-800" size={20} /> City view & premium
                amenities
              </li>
            </ul>

            <button
              onClick={() => handleBooking("Deluxe Room", "₹3,500 / Night")}
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-semibold transition mt-6"
            >
              Book Now
            </button>
          </div>

          {/* Right Side Images */}
          <div className="flex flex-col md:flex-row gap-4">
            <img
              src={room1}
              alt="Deluxe Room"
              className="rounded-lg shadow-md w-full md:w-1/2 object-cover cursor-pointer"
              onClick={() => openImage(room1)}
            />
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <img
                src={room2}
                alt="Deluxe Room"
                className="rounded-lg shadow-md object-cover h-[180px] cursor-pointer"
                onClick={() => openImage(room2)}
              />
              <img
                src={room3}
                alt="Deluxe Room"
                className="rounded-lg shadow-md object-cover h-[180px] cursor-pointer"
                onClick={() => openImage(room3)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Superior Room Section */}
      <section className="py-12 px-8 bg-gradient-to-r from-white to-gray-50 relative">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side Images */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <img
                src={room5}
                alt="Superior Room"
                className="rounded-lg shadow-md object-cover h-[180px] cursor-pointer"
                onClick={() => openImage(room5)}
              />
              <img
                src={room6}
                alt="Superior Room"
                className="rounded-lg shadow-md object-cover h-[180px] cursor-pointer"
                onClick={() => openImage(room6)}
              />
            </div>
            <img
              src={room7}
              alt="Superior Room"
              className="rounded-lg shadow-md w-full md:w-1/2 object-cover cursor-pointer"
              onClick={() => openImage(room7)}
            />
          </div>

          {/* Right Side Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              <span className="text-blue-800">Superior</span> Rooms
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Superior Rooms bring you an extra touch of elegance, with modern
              interiors, premium finishes, and warm colors to make your stay
              memorable.
            </p>

            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-center gap-2">
                <Star className="text-blue-800" size={20} /> Premium interiors
              </li>
              <li className="flex items-center gap-2">
                <Wifi className="text-blue-800" size={20} /> High-speed Wi-Fi
              </li>
              <li className="flex items-center gap-2">
                <Tv className="text-blue-800" size={20} /> Smart TV
              </li>
              <li className="flex items-center gap-2">
                <Coffee className="text-blue-800" size={20} /> In-room coffee & tea
              </li>
            </ul>

            <button
              onClick={() => handleBooking("Superior Room", "₹4,500 / Night")}
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Suite Room Section */}
      <section className="py-12 px-8 bg-gradient-to-r from-gray-50 to-white relative">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              <span className="text-blue-800">Suite</span> Rooms
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Suites are designed for those who demand luxury. With separate
              living areas, bathtubs, and exclusive facilities, our suites are
              ideal for long stays and family vacations.
            </p>

            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-center gap-2">
                <Maximize className="text-blue-800" size={20} /> Separate living
                & bedroom
              </li>
              <li className="flex items-center gap-2">
                <Bath className="text-blue-800" size={20} /> Luxury bathrooms
              </li>
              <li className="flex items-center gap-2">
                <Users className="text-blue-800" size={20} /> Perfect for families & VIPs
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-blue-800" size={20} /> Premium furniture & decor
              </li>
            </ul>

            <button
              onClick={() => handleBooking("Suite Room", "₹7,500 / Night")}
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Book Now
            </button>
          </div>

          {/* Right Side Images*/}
          <div className="flex flex-col gap-4">
            <img
              src={room8}
              alt="Suite Room"
              className="rounded-lg shadow-md object-cover h-[200px] w-full cursor-pointer"
              onClick={() => openImage(room8)}
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src={room9}
                alt="Suite Room"
                className="rounded-lg shadow-md object-cover h-[180px] w-full cursor-pointer"
                onClick={() => openImage(room9)}
              />
              <img
                src={room4}
                alt="Suite Room"
                className="rounded-lg shadow-md object-cover h-[180px] w-full cursor-pointer"
                onClick={() => openImage(room4)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Image Preview */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = [
                room1, room2, room3, room4, room5, room6, room7, room8, room9,
              ].indexOf(previewImage);
              const prevIndex = (currentIndex - 1 + 9) % 9;
              setPreviewImage(
                [room1, room2, room3, room4, room5, room6, room7, room8, room9][
                  prevIndex
                ]
              );
            }}
            className="absolute left-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/70"
          >
            ‹
          </button>

          <img
            src={previewImage}
            alt="Preview"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = [
                room1, room2, room3, room4, room5, room6, room7, room8, room9,
              ].indexOf(previewImage);
              const nextIndex = (currentIndex + 1) % 9;
              setPreviewImage(
                [room1, room2, room3, room4, room5, room6, room7, room8, room9][
                  nextIndex
                ]
              );
            }}
            className="absolute right-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/70"
          >
            ›
          </button>

          <button
            onClick={closeImage}
            className="absolute top-6 right-6 bg-black/50 px-3 py-1 rounded-full text-white text-2xl"
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

export default Rooms;

