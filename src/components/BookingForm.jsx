// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// export default function BookingForm() {
//   const location = useLocation();
//   const room = location.state?.room || {};

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     checkIn: "",
//     checkOut: "",
//     guests: 1,
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//  const handlePayment = async () => {
//   try {
//     // ✅ Required fields validation
//     if (!formData.name || !formData.email || !formData.checkIn || !formData.checkOut) {
//       return alert("Please fill all required fields");
//     }

//     const bookingData = {
//       ...formData,
//       roomId: room._id,
//       roomName: room.name,
//       price: Number(room.price), // ensure number
//     };

//     // 1️⃣ Create Razorpay order from backend
//     const { data: orderData } = await axios.post(
//       "http://localhost:5000/api/bookings/create-order",
//       { amount: Number(room.price) } // send as number
//     );

//     console.log("✅ Order data from backend:", orderData);

//     // 2️⃣ Razorpay Checkout options
//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount: orderData.amount, // paisa
//       currency: "INR",
//       name: "Resort Booking",
//       description: `Booking for ${room.name}`,
//       order_id: orderData.orderId,
//       handler: async function (response) {
//         try {
//           // 3️⃣ Verify payment on backend
//           const verifyRes = await axios.post(
//             "http://localhost:5000/api/bookings/verify-payment",
//             {
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//               bookingData, // include amount & other details
//             }
//           );

//           if (verifyRes.data.success) {
//             alert(" Payment successful & booking confirmed!");
//           } else {
//             alert(" Payment verification failed!");
//           }
//         } catch (err) {
//           console.error("Payment verification error:", err);
//           alert(" Payment verification error. Check console.");
//         }
//       },
//       prefill: {
//         name: formData.name,
//         email: formData.email,
//         contact: formData.phone,
//       },
//       theme: { color: "#1e3a8a" },
//     };

//     // 4️⃣ Open Razorpay Checkout
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   } catch (error) {
//     console.error("Error during payment:", error);
//     alert(" Failed to initiate payment. Check console.");
//   }
// };

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-6 md:px-12">
//         <div className="max-w-3xl mx-auto bg-gray-50 shadow-xl rounded-2xl p-8">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//             Book Your Stay
//           </h2>

//           {room && (
//             <div className="mb-6 border rounded-lg overflow-hidden">
//               <img
//                 src={`http://localhost:5000${room.image}`}
//                 alt={room.name}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
//                 <p className="text-gray-600">{room.price} / Night</p>
//               </div>
//             </div>
//           )}

//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               handlePayment();
//             }}
//             className="space-y-4"
//           >
//             <div className="grid md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//               />
//             </div>

//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//             />

//             <div className="grid md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Check-In Date</label>
//                 <input
//                   type="date"
//                   name="checkIn"
//                   value={formData.checkIn}
//                   onChange={handleChange}
//                   required
//                   className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Check-Out Date</label>
//                 <input
//                   type="date"
//                   name="checkOut"
//                   value={formData.checkOut}
//                   onChange={handleChange}
//                   required
//                   className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Number of Guests</label>
//               <input
//                 type="number"
//                 name="guests"
//                 min="1"
//                 value={formData.guests}
//                 onChange={handleChange}
//                 className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all"
//             >
//               Proceed to Payment
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export default function BookingForm() {
//   const location = useLocation();
//   const room = location.state?.room || {};

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     checkIn: null,
//     checkOut: null,
//     guests: 1,
//     roomsBooked: 1,
//   });

//   const [available, setAvailable] = useState(true);
//   const [availabilityMessage, setAvailabilityMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [fullyBookedDates, setFullyBookedDates] = useState([]); // store fully booked dates

//   //  Handle input
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   //  Fetch fully booked dates from backend
//   useEffect(() => {
//     if (room._id) {
//       fetchFullyBookedDates();
//     }
//   }, [room._id]);

//   const fetchFullyBookedDates = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/bookings/fully-booked/${room._id}`
//       );
//       const dates = res.data.map((d) => new Date(d));
//       setFullyBookedDates(dates);
//     } catch (error) {
//       console.error("Error fetching fully booked dates:", error);
//     }
//   };

//   //  Check availability whenever dates change
//   useEffect(() => {
//     if (formData.checkIn && formData.checkOut) {
//       checkRoomAvailability();
//     }
//   }, [formData.checkIn, formData.checkOut, formData.roomsBooked]);

//   const checkRoomAvailability = async () => {
//     try {
//       if (!room._id) return;

//       const res = await axios.post(
//         "http://localhost:5000/api/bookings/check-availability",
//         {
//           roomId: room._id,
//           checkIn: formData.checkIn,
//           checkOut: formData.checkOut,
//           roomsBooked: formData.roomsBooked,
//         }
//       );

//       setAvailable(res.data.available);
//       setAvailabilityMessage(res.data.message);
//     } catch (error) {
//       setAvailable(false);
//       setAvailabilityMessage("Error checking availability.");
//     }
//   };

//   //  Payment logic
//   const handlePayment = async (e) => {
//     e.preventDefault();

//     if (!available) {
//       alert("Room not available for selected dates!");
//       return;
//     }

//     try {
//       setLoading(true);
//       const orderRes = await axios.post(
//         "http://localhost:5000/api/bookings/create-order",
//         {
//           amount: room.price * formData.roomsBooked,
//         }
//       );

//       const { orderId, amount } = orderRes.data;

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//         amount,
//         currency: "INR",
//         name: "Resort Booking",
//         description: "Room Booking Payment",
//         order_id: orderId,
//         handler: async function (response) {
//           const verifyRes = await axios.post(
//             "http://localhost:5000/api/bookings/verify-payment",
//             {
//               ...response,
//               bookingData: {
//                 ...formData,
//                 roomId: room._id,
//                 price: room.price * formData.roomsBooked,
//               },
//             }
//           );

//           if (verifyRes.data.success) {
//             alert(" Booking confirmed!");
//             setFormData({
//               name: "",
//               email: "",
//               phone: "",
//               checkIn: null,
//               checkOut: null,
//               guests: 1,
//               roomsBooked: 1,
//             });
//             fetchFullyBookedDates(); // refresh red dates
//           } else {
//             alert(" Payment verification failed!");
//           }
//         },
//         prefill: {
//           name: formData.name,
//           email: formData.email,
//           contact: formData.phone,
//         },
//         theme: {
//           color: "#003366",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//       setLoading(false);
//     } catch (error) {
//       alert("Payment initialization failed!");
//       setLoading(false);
//     }
//   };

//   //  Disable fully booked dates
//   const isFullyBooked = (date) =>
//     fullyBookedDates.some(
//       (d) =>
//         d.getFullYear() === date.getFullYear() &&
//         d.getMonth() === date.getMonth() &&
//         d.getDate() === date.getDate()
//     );

//   return (
//     <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
//       <h2 className="text-2xl font-semibold text-center mb-6">
//         Book Your Stay — {room.name}
//       </h2>

//       <form onSubmit={handlePayment} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full border rounded-lg p-2"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full border rounded-lg p-2"
//         />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="w-full border rounded-lg p-2"
//         />

//         {/*  Calendar */}
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-1">Check-In</label>
//             <DatePicker
//               selected={formData.checkIn}
//               onChange={(date) => setFormData({ ...formData, checkIn: date })}
//               minDate={new Date()}
//               filterDate={(date) => !isFullyBooked(date)}
//               dayClassName={(date) =>
//                 isFullyBooked(date)
//                   ? "bg-red-200 text-red-700 rounded-full"
//                   : "bg-green-100 text-green-700 rounded-full"
//               }
//               className="w-full border rounded-lg p-2"
//               placeholderText="Select check-in date"
//             />
//           </div>

//           <div>
//             <label className="block mb-1">Check-Out</label>
//             <DatePicker
//               selected={formData.checkOut}
//               onChange={(date) => setFormData({ ...formData, checkOut: date })}
//               minDate={formData.checkIn || new Date()}
//               filterDate={(date) => !isFullyBooked(date)}
//               dayClassName={(date) =>
//                 isFullyBooked(date)
//                   ? "bg-red-200 text-red-700 rounded-full"
//                   : "bg-green-100 text-green-700 rounded-full"
//               }
//               className="w-full border rounded-lg p-2"
//               placeholderText="Select check-out date"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-1">Guests</label>
//             <input
//               type="number"
//               name="guests"
//               value={formData.guests}
//               onChange={handleChange}
//               min="1"
//               className="w-full border rounded-lg p-2"
//             />
//           </div>
//           <div>
//             <label className="block mb-1">Rooms</label>
//             <input
//               type="number"
//               name="roomsBooked"
//               value={formData.roomsBooked}
//               onChange={handleChange}
//               min="1"
//               className="w-full border rounded-lg p-2"
//             />
//           </div>
//         </div>

//         {availabilityMessage && (
//           <p
//             className={`text-sm mt-2 ${
//               available ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             {availabilityMessage}
//           </p>
//         )}

//         <button
//           type="submit"
//           disabled={!available || loading}
//           className={`w-full text-white py-2 rounded-lg ${
//             available
//               ? "bg-blue-800 hover:bg-blue-900"
//               : "bg-gray-400 cursor-not-allowed"
//           }`}
//         >
//           {loading ? "Processing..." : "Pay & Confirm Booking"}
//         </button>
//       </form>
//     </div>
//   );
// }

//today

// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export default function BookingForm() {
//   const location = useLocation();
//   const initialRoom = location.state?.room || {};
//   const [room, setRoom] = useState(initialRoom);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     checkIn: null,
//     checkOut: null,
//     guests: 1,
//     roomsBooked: 1,
//   });

//   const [available, setAvailable] = useState(true);
//   const [availabilityMessage, setAvailabilityMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [fullyBookedDates, setFullyBookedDates] = useState([]); // store fully booked dates

//   // 🟢 If room._id missing → fetch room by name from backend
//   useEffect(() => {
//     const fetchRoomByName = async () => {
//       if (!room._id && room.name) {
//         try {
//           const res = await axios.get("http://localhost:5000/api/rooms");
//           const matchedRoom = res.data.find(
//             (r) => r.name.toLowerCase() === room.name.toLowerCase()
//           );
//           if (matchedRoom) {
//             setRoom(matchedRoom);
//           }
//         } catch (error) {
//           console.error("Error finding room by name:", error);
//         }
//       }
//     };
//     fetchRoomByName();
//   }, [room.name]);

//   //  Handle input
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   //  Fetch fully booked dates from backend
//   useEffect(() => {
//     if (room._id) {
//       fetchFullyBookedDates();
//     }
//   }, [room._id]);

//   const fetchFullyBookedDates = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/bookings/fully-booked/${room._id}`
//       );
//       const dates = res.data.map((d) => new Date(d));
//       setFullyBookedDates(dates);
//     } catch (error) {
//       console.error("Error fetching fully booked dates:", error);
//     }
//   };

//   //  Check availability whenever dates change
//   useEffect(() => {
//     if (formData.checkIn && formData.checkOut && room._id) {
//       checkRoomAvailability();
//     }
//   }, [formData.checkIn, formData.checkOut, formData.roomsBooked, room._id]);

//   const checkRoomAvailability = async () => {
//     try {
//       if (!room._id) return;

//       const res = await axios.post(
//         "http://localhost:5000/api/bookings/check-availability",
//         {
//           roomId: room._id,
//           checkIn: formData.checkIn,
//           checkOut: formData.checkOut,
//           roomsBooked: formData.roomsBooked,
//         }
//       );

//       setAvailable(res.data.available);
//       setAvailabilityMessage(res.data.message);
//     } catch (error) {
//       setAvailable(false);
//       setAvailabilityMessage("Error checking availability.");
//     }
//   };

//   //  Payment logic
//   const handlePayment = async (e) => {
//     e.preventDefault();

//     if (!available) {
//       alert("Room not available for selected dates!");
//       return;
//     }

//     try {
//       setLoading(true);
//       const orderRes = await axios.post(
//         "http://localhost:5000/api/bookings/create-order",
//         {
//           amount: room.price * formData.roomsBooked,
//         }
//       );

//       const { orderId, amount } = orderRes.data;

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//         amount,
//         currency: "INR",
//         name: "Resort Booking",
//         description: "Room Booking Payment",
//         order_id: orderId,
//         handler: async function (response) {
//           const verifyRes = await axios.post(
//             "http://localhost:5000/api/bookings/verify-payment",
//             {
//               ...response,
//               bookingData: {
//                 ...formData,
//                 roomId: room._id,
//                 price: room.price * formData.roomsBooked,
//               },
//             }
//           );

//           if (verifyRes.data.success) {
//             alert(" Booking confirmed!");
//             setFormData({
//               name: "",
//               email: "",
//               phone: "",
//               checkIn: null,
//               checkOut: null,
//               guests: 1,
//               roomsBooked: 1,
//             });
//             fetchFullyBookedDates(); // refresh red dates
//           } else {
//             alert(" Payment verification failed!");
//           }
//         },
//         prefill: {
//           name: formData.name,
//           email: formData.email,
//           contact: formData.phone,
//         },
//         theme: {
//           color: "#003366",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//       setLoading(false);
//     } catch (error) {
//       alert("Payment initialization failed!");
//       setLoading(false);
//     }
//   };

//   //  Disable fully booked dates
//   const isFullyBooked = (date) =>
//     fullyBookedDates.some(
//       (d) =>
//         d.getFullYear() === date.getFullYear() &&
//         d.getMonth() === date.getMonth() &&
//         d.getDate() === date.getDate()
//     );

//   return (
//     <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
//       <h2 className="text-2xl font-semibold text-center mb-6">
//         Book Your Stay — {room.name}
//       </h2>

//       <form onSubmit={handlePayment} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full border rounded-lg p-2"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full border rounded-lg p-2"
//         />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="w-full border rounded-lg p-2"
//         />

//         {/* Calendar with red & green days exactly as before */}
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-1">Check-In</label>
//             <DatePicker
//               selected={formData.checkIn}
//               onChange={(date) => setFormData({ ...formData, checkIn: date })}
//               minDate={new Date()}
//               filterDate={(date) => !isFullyBooked(date)}
//               dayClassName={(date) =>
//                 isFullyBooked(date)
//                   ? "bg-red-200 text-red-700 rounded-full"
//                   : "bg-green-100 text-green-700 rounded-full"
//               }
//               className="w-full border rounded-lg p-2"
//               placeholderText="Select check-in date"
//             />
//           </div>

//           <div>
//             <label className="block mb-1">Check-Out</label>
//             <DatePicker
//               selected={formData.checkOut}
//               onChange={(date) => setFormData({ ...formData, checkOut: date })}
//               minDate={formData.checkIn || new Date()}
//               filterDate={(date) => !isFullyBooked(date)}
//               dayClassName={(date) =>
//                 isFullyBooked(date)
//                   ? "bg-red-200 text-red-700 rounded-full"
//                   : "bg-green-100 text-green-700 rounded-full"
//               }
//               className="w-full border rounded-lg p-2"
//               placeholderText="Select check-out date"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-1">Guests</label>
//             <input
//               type="number"
//               name="guests"
//               value={formData.guests}
//               onChange={handleChange}
//               min="1"
//               className="w-full border rounded-lg p-2"
//             />
//           </div>
//           <div>
//             <label className="block mb-1">Rooms</label>
//             <input
//               type="number"
//               name="roomsBooked"
//               value={formData.roomsBooked}
//               onChange={handleChange}
//               min="1"
//               className="w-full border rounded-lg p-2"
//             />
//           </div>
//         </div>

//         {availabilityMessage && (
//           <p
//             className={`text-sm mt-2 ${
//               available ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             {availabilityMessage}
//           </p>
//         )}

//         <button
//           type="submit"
//           disabled={!available || loading}
//           className={`w-full text-white py-2 rounded-lg ${
//             available
//               ? "bg-blue-800 hover:bg-blue-900"
//               : "bg-gray-400 cursor-not-allowed"
//           }`}
//         >
//           {loading ? "Processing..." : "Pay & Confirm Booking"}
//         </button>
//       </form>
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm() {
  const location = useLocation();
  const initialRoom = location.state?.room || {};
  const [room, setRoom] = useState(initialRoom);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: null,
    checkOut: null,
    guests: 1,
    roomsBooked: 1,
  });

  const [available, setAvailable] = useState(true);
  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [fullyBookedDates, setFullyBookedDates] = useState([]); 

  // Fetch room by name if _id missing
  useEffect(() => {
    const fetchRoomByName = async () => {
      if (!room._id && room.name) {
        try {
          const res = await axios.get("http://localhost:5000/api/rooms");
          const matchedRoom = res.data.find(
            (r) => r.name.toLowerCase() === room.name.toLowerCase()
          );
          if (matchedRoom) setRoom(matchedRoom);
        } catch (error) {
          console.error("Error finding room by name:", error);
        }
      }
    };
    fetchRoomByName();
  }, [room.name]);

  // Fetch fully booked dates
  useEffect(() => {
    if (room._id) fetchFullyBookedDates();
  }, [room._id]);

  const fetchFullyBookedDates = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/bookings/fully-booked/${room._id}`
      );
      const dates = res.data.map((d) => new Date(d));
      setFullyBookedDates(dates);
    } catch (error) {
      console.error("Error fetching fully booked dates:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Check room availability whenever relevant fields change
  useEffect(() => {
    if (formData.checkIn && formData.checkOut && room._id) checkRoomAvailability();
  }, [formData.checkIn, formData.checkOut, formData.roomsBooked, room._id]);

  const checkRoomAvailability = async () => {
    try {
      if (!room._id) return;
      const res = await axios.post(
        "http://localhost:5000/api/bookings/check-availability",
        {
          roomId: room._id,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          roomsBooked: formData.roomsBooked,
        }
      );
      setAvailable(res.data.available);
      setAvailabilityMessage(res.data.message);
    } catch (error) {
      setAvailable(false);
      setAvailabilityMessage("Error checking availability.");
    }
  };

  // ✅ Calculate amount + GST dynamically
  const getTotalAmount = () => {
    if (!formData.checkIn || !formData.checkOut) return { base: 0, gst: 0, total: 0, days: 0 };
    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);
    const timeDiff = checkOutDate - checkInDate;
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (days <= 0) return { base: 0, gst: 0, total: 0, days: 0 };

    const base = room.price * formData.roomsBooked * days;
    const gst = base * 0.18;
    return { base, gst, total: base + gst, days };
  };

  // Handle payment
  const handlePayment = async (e) => {
    e.preventDefault();
    if (!available) {
      alert("Room not available for selected dates!");
      return;
    }

    const { base, gst, total, days } = getTotalAmount();
    if (days <= 0) {
      alert("Check-out date must be after check-in date!");
      return;
    }

    try {
      setLoading(true);
      const orderRes = await axios.post(
        "http://localhost:5000/api/bookings/create-order",
        { amount: total }
      );

      const { orderId, amount } = orderRes.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount,
        currency: "INR",
        name: "Resort Booking",
        description: `Booking for ${days} night(s)`,
        order_id: orderId,
        handler: async function (response) {
          const verifyRes = await axios.post(
            "http://localhost:5000/api/bookings/verify-payment",
            {
              ...response,
              bookingData: {
                ...formData,
                roomId: room._id,
                price: total,
                days,
                gst,
              },
            }
          );
          if (verifyRes.data.success) {
            alert("Booking confirmed!");
            setFormData({
              name: "",
              email: "",
              phone: "",
              checkIn: null,
              checkOut: null,
              guests: 1,
              roomsBooked: 1,
            });
            fetchFullyBookedDates();
          } else {
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#003366" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      setLoading(false);
    } catch (error) {
      alert("Payment initialization failed!");
      setLoading(false);
    }
  };

  const isFullyBooked = (date) =>
    fullyBookedDates.some(
      (d) =>
        d.getFullYear() === date.getFullYear() &&
        d.getMonth() === date.getMonth() &&
        d.getDate() === date.getDate()
    );

  const { base, gst, total, days } = getTotalAmount();

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Book Your Stay — {room.name}
      </h2>

      <form onSubmit={handlePayment} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-2"
        />

        {/* Calendar */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Check-In</label>
            <DatePicker
              selected={formData.checkIn}
              onChange={(date) => setFormData({ ...formData, checkIn: date })}
              minDate={new Date()}
              filterDate={(date) => !isFullyBooked(date)}
              dayClassName={(date) =>
                isFullyBooked(date)
                  ? "bg-red-200 text-red-700 rounded-full"
                  : "bg-green-100 text-green-700 rounded-full"
              }
              className="w-full border rounded-lg p-2"
              placeholderText="Select check-in date"
            />
          </div>
          <div>
            <label className="block mb-1">Check-Out</label>
            <DatePicker
              selected={formData.checkOut}
              onChange={(date) => setFormData({ ...formData, checkOut: date })}
              minDate={formData.checkIn || new Date()}
              filterDate={(date) => !isFullyBooked(date)}
              dayClassName={(date) =>
                isFullyBooked(date)
                  ? "bg-red-200 text-red-700 rounded-full"
                  : "bg-green-100 text-green-700 rounded-full"
              }
              className="w-full border rounded-lg p-2"
              placeholderText="Select check-out date"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Guests</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block mb-1">Rooms</label>
            <input
              type="number"
              name="roomsBooked"
              value={formData.roomsBooked}
              onChange={handleChange}
              min="1"
              className="w-full border rounded-lg p-2"
            />
          </div>
        </div>

        {/* ✅ Show Total Amount */}
        {total > 0 && (
          <div className="p-3 mb-4 border rounded-lg bg-gray-50 text-gray-800">
            <p> Base Amount ({days} night(s)): ₹{base.toFixed(2)}</p>
            <p> GST 18%: ₹{gst.toFixed(2)}</p>
            <p className="font-bold text-lg">Total: ₹{total.toFixed(2)}</p>
          </div>
        )}

        {availabilityMessage && (
          <p
            className={`text-sm mt-2 ${
              available ? "text-green-600" : "text-red-600"
            }`}
          >
            {availabilityMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={!available || loading}
          className={`w-full text-white py-2 rounded-lg ${
            available
              ? "bg-blue-800 hover:bg-blue-900"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {loading ? "Processing..." : "Pay & Confirm Booking"}
        </button>
      </form>
    </div>
  );
}
