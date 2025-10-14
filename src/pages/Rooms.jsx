// ye phle simple code h
// import React, { useState } from "react";
// import { motion } from "framer-motion";

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
//         {/* Light Dark Overlay */}
//         <div className="absolute inset-0 bg-black/20"></div>

//         {/* Text Content */}
//         <div className="absolute inset-0 flex items-center justify-center px-8 sm:px-16 z-10">
//           <div className="text-white text-center">
//             <h1 className="text-5xl font-bold mb-2">Rooms</h1>
//             <p className="text-lg">
//               <span className="text-white">Home</span> &gt; Rooms
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Deluxe Room Section */}
//       <section className=" pt-20 pb-8 px-8 bg-gradient-to-r from-gray-50 to-white relative">
//         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
//         <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-8 items-center">
//           {/* Left Side Text */}
//           <div className="space-y-6">
//             <h2 className="text-4xl font-bold">
//               <span className="text-gray-900"> Deluxe Rooms</span>
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               Our Deluxe Rooms combine contemporary style with ultimate comfort.
//               Each room features luxurious bedding, modern interiors, soft
//               lighting, and sweeping city views — perfect for both business and
//               leisure travelers.
//             </p>

//             <div className="text-gray-700 text-lg leading-relaxed mt-4 space-y-1">
//               <p>
//                 <strong>Size : </strong> Larger than standard
//               </p>
//               <p>
//                 <strong>Bed : </strong> King or queen-size bed
//               </p>
//               <p>
//                 <strong>Ideal for : </strong> Guests wanting more space and
//                 comfort
//               </p>
//               <p>
//                 <strong>Amenities : </strong> Upgraded decor, larger bathroom,
//                 better view, more amenities
//               </p>
//             </div>

//             <button
//               onClick={() => openModal("Deluxe Room")}
//               className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition mt-6"
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
//               onClick={() => openImage(room2)}
//             />
//             <div className="flex flex-col gap-4 w-full md:w-1/2">
//               <img
//                 src={room2}
//                 alt="Deluxe Room"
//                 className="rounded-lg shadow-md object-cover h-[180px] md:h-1/2 cursor-pointer"
//                 onClick={() => openImage(room3)}
//               />
//               <img
//                 src={room3}
//                 alt="Deluxe Room"
//                 className="rounded-lg shadow-md object-cover h-[180px] md:h-1/2 cursor-pointer"
//                 onClick={() => openImage(room4)}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Superior Room Section */}
//       <section className="py-8 px-8 bg-gradient-to-r from-white to-gray-50 relative">
//         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]"></div>
//         <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-8 items-center">
//           {/* Left Side Images */}
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex flex-col gap-4 w-full md:w-1/2">
//               <img
//                 src={room5}
//                 alt="Superior Room"
//                 className="rounded-lg shadow-md object-cover h-[180px] md:h-1/2 cursor-pointer"
//                 onClick={() => openImage(room5)}
//               />
//               <img
//                 src={room6}
//                 alt="Superior Room"
//                 className="rounded-lg shadow-md object-cover h-[180px] md:h-1/2 cursor-pointer"
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
//               <span className="text-gray-900"> Superior Rooms</span>
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               Our Superior Rooms are designed for ultimate comfort with premium
//               furnishings and elegant finishes. Enjoy luxurious bedding,
//               flat-screen TVs, high-speed Wi-Fi, and 24x7 personalized service.
//             </p>
//             <div className="text-gray-700 text-lg leading-relaxed mt-4 space-y-1">
//               <p>
//                 <strong>Size : </strong> Similar to or slightly larger than
//                 deluxe
//               </p>
//               <p>
//                 <strong>Features : </strong> Often newly renovated or located on
//                 higher floors with better views
//               </p>
//               <p>
//                 <strong>Amenities : </strong> Enhanced interiors, premium
//                 toiletries, extra comfort features
//               </p>
//             </div>

//             <button
//               onClick={() => openModal("Superior Room")}
//               className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Suite Room Section */}
//       <section className="py-8 px-8 bg-gradient-to-r from-gray-50 to-white relative">
//         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
//         <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-8 items-center">
//           {/* Left Side Text */}
//           <div className="space-y-6">
//             <h2 className="text-4xl font-bold">
//               <span className="text-gray-900">Suite Rooms</span>
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               The Suite Rooms offer an elevated stay experience with spacious
//               living areas and modern interiors. Complimentary bottled water, a
//               fully-stocked minibar, and an in-room coffee and tea station are
//               included for your convenience and enjoyment.
//             </p>

//             <div className="text-gray-700 text-lg leading-relaxed mt-4 space-y-1">
//               <p>
//                 <strong>Types : </strong> Junior Suite, Executive Suite,
//                 Presidential Suite
//               </p>
//               <p>
//                 <strong>Layout : </strong> Bedroom + living room (separate or
//                 semi-separated)
//               </p>
//               <p>
//                 <strong>Ideal for : </strong> Families, long stays, VIP guests
//               </p>
//               <p>
//                 <strong>Luxury : </strong> High-end furniture, bathtubs,
//                 kitchenettes, sometimes multiple bathrooms
//               </p>
//             </div>

//             <button
//               onClick={() => openModal("Suite Room")}
//               className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition"
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
//                 onClick={() => openImage(room2)}
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
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
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
//                 className="w-full border border-gray-300 px-4 py-2 rounded-md"
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full border border-gray-300 px-4 py-2 rounded-md"
//               />
//               <input
//                 type="number"
//                 placeholder="Mob No"
//                 className="w-full border border-gray-300 px-4 py-2 rounded-md"
//               />
//               <input
//                 type="date"
//                 placeholder="Checked In"
//                 className="w-full border border-gray-300 px-4 py-2 rounded-md"
//               />
//               <textarea
//                 placeholder="Your Message"
//                 className="w-full border border-gray-300 px-4 py-2 rounded-md"
//                 rows="4"
//               ></textarea>

//               <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-md font-semibold transition hover:scale-105">
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
//           <img
//             src={previewImage}
//             alt="Preview"
//             className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
//           />
//           <button
//             onClick={closeImage}
//             className="absolute top-6 right-6 text-white text-3xl"
//           >
//             ✖
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Rooms;









// 100 working code

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedRoom, setSelectedRoom] = useState("");
  const [previewImage, setPreviewImage] = useState(null); 

  const [totalPrice, setTotalPrice] = useState(0);

    


 // 🧩 NEW: form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
    price:0,
    roomCount: "",
    guestCount: "",
    checkIn: "",
    checkOut: "",
    message: "",
  });



  // 🧩 handle input change
  
  const handleChange = (e) => {
  const { name, value } = e.target;
  let updatedForm = { ...formData, [name]: value };

  // Guest limit logic
  if (name === "guestCount" || name === "roomCount") {
    const rooms = name === "roomCount" ? parseInt(value || 0) : parseInt(formData.roomCount || 0);
    const guests = name === "guestCount" ? parseInt(value || 0) : parseInt(formData.guestCount || 0);

    const maxGuestsAllowed = rooms * 3;

    if (guests > maxGuestsAllowed) {
      alert(`❌ Only ${maxGuestsAllowed} guests allowed for ${rooms} room(s).`);
      updatedForm.guestCount = maxGuestsAllowed; // reset to max allowed
    }
  }

  setFormData(updatedForm);
};


  useEffect(() => {
  if (formData.checkIn && formData.checkOut && formData.price > 0) {
    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);
    const diffTime = checkOutDate - checkInDate;
    const nights = diffTime > 0 ? Math.ceil(diffTime / (1000 * 60 * 60 * 24)) : 0;

    const total = formData.price * formData.roomCount * nights;
    setTotalPrice(total);
  } else {
    setTotalPrice(0);
  }
}, [formData.checkIn, formData.checkOut, formData.price, formData.roomCount]);




// //   // 🧩 handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const bookingData = { ...formData, roomType: selectedRoom, totalPrice };


//     try {
//       const response = await fetch("http://localhost:5000/api/bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingData),
//       });

//       if (response.ok) {
//         alert(" Booking submitted successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           roomCount: 1,
//           guestCount: 1,
//           checkIn: "",
//           checkOut: "",
//           message: "",
//         });
//         setIsOpen(false);
//       } else {
//         alert(" Failed to submit booking");
//       }
//     } catch (error) {
//       console.error(error);
//       alert(" Error submitting booking");
//     }
//   };

//  handle form submit
const handleSubmit = async (e) => {
  e.preventDefault();
  const bookingData = { ...formData, roomType: selectedRoom, totalPrice };

  try {
    //  Create Razorpay order from backend
    const response = await fetch("http://localhost:5000/api/payment/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: totalPrice }),
  });

    const order = await response.json();
    if (!order?.id) {
      alert("Failed to create order!");
      return;
    }


    //  Dynamically load Razorpay script if not already loaded
    if (!window.Razorpay) {
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Try again later.");
      return;
    }

    //  Open Razorpay Checkout
    const options = {
      key:"rzp_test_41Nyj6VrclMlo7", //  Replace with your frontend key
      amount: order.amount,
      currency: "INR",
      name: "Hotel Booking",
      description: `Booking for ${selectedRoom}`,
      order_id: order.id,
      handler: async function (response) {
        alert(" Payment Successful!");

        //  Save booking details + payment ID in DB
        const bookingResponse = await fetch(
          "http://localhost:5000/api/bookings",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...bookingData,
              paymentId: response.razorpay_payment_id,
            
               paymentStatus: "success",  
              status: "confirmed" 
            }),
          }
        );

        if (bookingResponse.ok) {
          alert("Booking confirmed successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            roomCount: "",
            guestCount: "",
            checkIn: "",
            checkOut: "",
            message: "",
             price: 0,
            roomType: "",
          });
          setIsOpen(false);
          //alert(`✅ Booking confirmed!\nPayment ID: ${response.razorpay_payment_id}`);

        } else {
          alert("Booking save failed after payment!");
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: { color: "#1E40AF" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (error) {
    console.error("Payment Error:", error);
    alert("Something went wrong during payment.");
  }
};





  const openModal = (room) => {
    setSelectedRoom(room);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  const openImage = (src) => setPreviewImage(src);
  const closeImage = () => setPreviewImage(null);

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
              onClick={() => openModal("Deluxe Room")}
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
                <Coffee className="text-blue-800" size={20} /> In-room coffee &
                tea
              </li>
            </ul>

            <button
              onClick={() => openModal("Superior Room")}
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
                <Users className="text-blue-800" size={20} /> Perfect for
                families & VIPs
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-blue-800" size={20} /> Premium furniture &
                decor
              </li>
            </ul>

            <button
              onClick={() => openModal("Suite Room")}
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

      {/* Popup Modal Form */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
             className="bg-white p-6 md:p-10 rounded-lg shadow-xl w-[95%] max-w-2xl relative max-h-[90vh] overflow-y-auto"

          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-full text-gray-700 text-lg"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Book {selectedRoom}
            </h2>

            {/*  Updated Booking Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
              />


                {/* Room Type Dropdown */}
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={(e) => {
                    const selectedType = e.target.value;
                    const prices = {
                      Deluxe : 3500,
                      Superior:5000,
                      Suite : 7500,
                      
      
                    };
                    setFormData({
                      ...formData,
                      roomType: selectedType,
                      price: prices[selectedType] || 0,
                    });
                  }}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                >
                  <option value="">Select Room Type</option>
                  <option value="Deluxe">Deluxe Room</option>
                  <option value="Superior">Superior Room</option>
                  <option value="Suite">Suite Room</option>
                  
                </select>

                {/* Auto-filled Room Price */}
                {formData.price > 0 && (
                  <div className="text-gray-700 font-medium">
                    Room Price: ₹{formData.price.toLocaleString("en-IN")} 
                  </div>
                )}

              <div className="flex gap-2">
                <input
                  type="number"
                  name="roomCount"
                  value={formData.roomCount}
                  onChange={handleChange}
                  min="1"
                  required
                  className="w-1/2 border border-gray-300 px-4 py-2 rounded-md"
                  placeholder="Rooms"
                />
                <input
                  type="number"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  min="1"
                  required
                  className="w-1/2 border border-gray-300 px-4 py-2 rounded-md"
                  placeholder="Guests"
                />
              </div>

              <div className="flex gap-2">
                <input
                  type="datetime-local"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                   min={new Date().toISOString().slice(0, 16)}
                  className="w-1/2 border border-gray-300 px-4 py-2 rounded-md"
                />
                <input
                  type="datetime-local"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                   min={formData.checkIn || new Date().toISOString().slice(0, 16)}
                  className="w-1/2 border border-gray-300 px-4 py-2 rounded-md"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message or Special Request"
                rows="3"
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
              ></textarea>

                {/*  ADD total price display  */}
                  {totalPrice > 0 && (
                    <div className="text-lg font-semibold text-green-700">
                      Total Price: ₹{totalPrice.toLocaleString("en-IN")}
                    </div>
                  )}

              <button
                type="submit"
                className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-md font-semibold transition hover:scale-105"
              >
                Pay Now
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Full Screen Image Preview */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
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
