
// import React, { useState } from "react";
// import axios from "axios";

// export default function ModalForm({ onClose }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     guests: "",
//     eventType: "", 
//   });
//   const [loading, setLoading] = useState(false);

//   const eventOptions = [
//     "Royal Ball Room",
//     "Grand Ball Room",
//     "Engagement",
//     "Corporate Meetings",
//     "Seminar",
//     "Mehndi",
//     "Elite Ball Room",
//   ];

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.eventType) {
//       alert("Please select Event Type!");
//       return;
//     }

//     try {
//       setLoading(true);

//       // ✅ Map eventType to backend field 'occasion'
//       const payload = {
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         date: formData.date,
//         guests: formData.guests,
//         occasion: formData.eventType, // ← backend field
//       };

//       const response = await axios.post(
//         "http://localhost:5000/api/event-booking",
//         payload,
//         { headers: { "Content-Type": "application/json" } }
//       );

//       console.log("Booking saved:", response.data);
//       alert("Your event details have been submitted successfully!");
//       onClose();

//       // reset form
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         date: "",
//         guests: "",
//         eventType: "",
//       });
//     } catch (error) {
//       console.error("Error saving booking:", error);
//       alert("Something went wrong while submitting the form.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       <div
//         className="absolute inset-0 bg-black/50"
//         onClick={onClose}
//       ></div>

//       <div className="relative bg-white rounded-xl shadow-lg w-full max-w-lg mx-4 p-6 z-10">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold text-gray-800 mb-4">
//           Get a Quote
//         </h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={formData.name}
//             onChange={(e) => handleChange("name", e.target.value)}
//             className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) => handleChange("email", e.target.value)}
//             className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//             required
//           />
//           <input
//             type="tel"
//             placeholder="Phone"
//             value={formData.phone}
//             onChange={(e) => handleChange("phone", e.target.value)}
//             className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//             required
//           />

//           {/* Event Type Dropdown */}
//           <select
//             value={formData.eventType}
//             onChange={(e) => handleChange("eventType", e.target.value)}
//             className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//             required
//           >
//             <option value="">Select Event Type</option>
//             {eventOptions.map((item) => (
//               <option key={item} value={item}>
//                 {item}
//               </option>
//             ))}
//           </select>

//           <input
//             type="date"
//             value={formData.date}
//             onChange={(e) => handleChange("date", e.target.value)}
//             className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//             required
//           />
//           <input
//             type="number"
//             placeholder="Number of Guests"
//             value={formData.guests}
//             onChange={(e) => handleChange("guests", e.target.value)}
//             className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//             required
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition"
//             disabled={loading}
//           >
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



// import React, { useState, useMemo, useEffect } from "react";
// import axios from "axios";

// export default function ModalForm({ onClose }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     days: 1,
//     guests: "",
//     eventType: "",
//     paymentType: "",
//   });

//   const [available, setAvailable] = useState(true);
//   const [availabilityMessage, setAvailabilityMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [bookedDates, setBookedDates] = useState([]);

//   // 🎯 Price per DAY
//   const eventPrices = {
//     "Royal Ball Room": 50000,
//     "Grand Ball Room": 80000,
//     "Elite Ball Room": 100000,
//     Engagement: 40000,
//     Mehndi: 30000,
//     "Corporate Meetings": 60000,
//     Seminar: 45000,
//   };

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   // 📅 Fetch already booked dates for selected event
//   useEffect(() => {
//     if (!formData.eventType) return;

//     const fetchBookedDates = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/events/booked-dates?eventType=${formData.eventType}`
//         );
//         setBookedDates(res.data); // array of yyyy-mm-dd
//       } catch (err) {
//         console.error("Error fetching booked dates");
//       }
//     };

//     fetchBookedDates();
//   }, [formData.eventType]);

//   // ❌ Check availability when date or days change
//   useEffect(() => {
//     if (formData.date && formData.eventType) checkAvailability();
//   }, [formData.date, formData.days, formData.eventType]);

//   const checkAvailability = async () => {
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/events/check-availability",
//         {
//           eventType: formData.eventType,
//           date: formData.date,
//           days: formData.days,
//         }
//       );
//       setAvailable(res.data.available);
//       setAvailabilityMessage(res.data.message);
//     } catch (err) {
//       setAvailable(false);
//       setAvailabilityMessage("Error checking availability");
//     }
//   };

//   // 💰 PRICE CALCULATION
//   const calculations = useMemo(() => {
//     const pricePerDay = formData.eventType
//       ? eventPrices[formData.eventType]
//       : 0;

//     const days = Number(formData.days) || 1;
//     const basePrice = pricePerDay * days;
//     const gst = Math.round(basePrice * 0.18);
//     const totalAmount = basePrice + gst;

//     const payNow =
//       formData.paymentType === "advance"
//         ? Math.round(totalAmount * 0.3)
//         : formData.paymentType === "full"
//         ? totalAmount
//         : 0;

//     return {
//       pricePerDay,
//       basePrice,
//       gst,
//       totalAmount,
//       payNow,
//       remaining: totalAmount - payNow,
//     };
//   }, [formData.eventType, formData.days, formData.paymentType]);

//   // 💳 Razorpay Payment
//   const handlePayment = async (e) => {
//     e.preventDefault();

//     if (!available) {
//       alert("Selected date is not available!");
//       return;
//     }

//     try {
//       setLoading(true);

//       const orderRes = await axios.post(
//         "http://localhost:5000/api/events/create-order",
//         { amount: calculations.payNow }
//       );

//       const { orderId, amount } = orderRes.data;

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//         amount,
//         currency: "INR",
//         name: "Resort Event Booking",
//         description: `${formData.eventType} (${formData.days} day(s))`,
//         order_id: orderId,

//         handler: async function (response) {
//           const verifyRes = await axios.post(
//             "http://localhost:5000/api/events/verify-payment",
//             {
//               ...response,
//               bookingData: {
//                 ...formData,
//                 ...calculations,
//               },
//             }
//           );

//           if (verifyRes.data.success) {
//             alert("Event booked successfully!");
//             onClose();
//           } else {
//             alert("Payment verification failed");
//           }
//         },

//         prefill: {
//           name: formData.name,
//           email: formData.email,
//           contact: formData.phone,
//         },
//         theme: { color: "#003366" },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//       setLoading(false);
//     } catch (err) {
//       alert("Payment failed!");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

//       <div className="relative bg-white rounded-xl shadow-lg w-full max-w-lg mx-4 z-10 max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 bg-white z-20 p-6 border-b">
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-xl"
//           >
//             ✕
//           </button>
//           <h2 className="text-2xl font-bold">Event Booking</h2>
//         </div>

//         <div className="p-6">
//           <form className="space-y-4" onSubmit={handlePayment}>
//             <input
//               placeholder="Name"
//               required
//               className="w-full border p-2 rounded-lg"
//               onChange={(e) => handleChange("name", e.target.value)}
//             />
//             <input
//               placeholder="Email"
//               required
//               className="w-full border p-2 rounded-lg"
//               onChange={(e) => handleChange("email", e.target.value)}
//             />
//             <input
//               placeholder="Phone"
//               required
//               className="w-full border p-2 rounded-lg"
//               onChange={(e) => handleChange("phone", e.target.value)}
//             />

//             <select
//               required
//               className="w-full border p-2 rounded-lg"
//               onChange={(e) => handleChange("eventType", e.target.value)}
//             >
//               <option value="">Select Event Type</option>
//               {Object.keys(eventPrices).map((e) => (
//                 <option key={e}>{e}</option>
//               ))}
//             </select>

//             <input
//               type="date"
//               required
//               className="w-full border p-2 rounded-lg"
//               onChange={(e) => handleChange("date", e.target.value)}
//             />

//             <select
//               className="w-full border p-2 rounded-lg"
//               onChange={(e) => handleChange("days", e.target.value)}
//             >
//               {[1, 2, 3, 4].map((d) => (
//                 <option key={d} value={d}>
//                   {d} Day(s)
//                 </option>
//               ))}
//             </select>

//             <select
//               required
//               className="w-full border p-2 rounded-lg"
//               onChange={(e) => handleChange("paymentType", e.target.value)}
//             >
//               <option value="">Payment Type</option>
//               <option value="advance">Advance (30%)</option>
//               <option value="full">Full Payment</option>
//             </select>

//             {calculations.totalAmount > 0 && (
//               <div className="bg-gray-100 p-3 rounded-lg text-sm">
//                 <p>Base: ₹{calculations.basePrice}</p>
//                 <p>GST: ₹{calculations.gst}</p>
//                 <p className="font-bold">
//                   Total: ₹{calculations.totalAmount}
//                 </p>
//                 <p className="text-green-700">
//                   Pay Now: ₹{calculations.payNow}
//                 </p>
//               </div>
//             )}

//             {availabilityMessage && (
//               <p
//                 className={`text-sm ${
//                   available ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 {availabilityMessage}
//               </p>
//             )}

//             <button
//               disabled={!available || loading}
//               className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900"
//             >
//               {loading ? "Processing..." : "Pay & Book Event"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useMemo } from "react";

// export default function ModalForm({ onClose }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     days: 1,
//     guests: "",
//     eventType: "",
//     paymentType: "",
//   });

//   // 🎯 PRICE PER DAY
//   const eventPrices = {
//     "Royal Ball Room": 50000,
//     "Grand Ball Room": 80000,
//     "Elite Ball Room": 100000,
//     Engagement: 40000,
//     Mehndi: 30000,
//     "Corporate Meetings": 60000,
//     Seminar: 45000,
//   };

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   // 💰 DAY-WISE CALCULATION
//   const calculations = useMemo(() => {
//     const pricePerDay = formData.eventType
//       ? eventPrices[formData.eventType]
//       : 0;

//     const days = Number(formData.days) || 1;

//     const basePrice = pricePerDay * days;
//     const gst = Math.round(basePrice * 0.18);
//     const totalAmount = basePrice + gst;

//     let payNow = 0;
//     if (formData.paymentType === "advance") {
//       payNow = Math.round(totalAmount * 0.3);
//     } else if (formData.paymentType === "full") {
//       payNow = totalAmount;
//     }

//     const remaining = totalAmount - payNow;

//     return {
//       pricePerDay,
//       days,
//       basePrice,
//       gst,
//       totalAmount,
//       payNow,
//       remaining,
//     };
//   }, [formData.eventType, formData.days, formData.paymentType]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.eventType || !formData.paymentType) {
//       alert("Please select Event Type & Payment Type");
//       return;
//     }

//     const payload = {
//       ...formData,
//       ...calculations,
//     };

//     console.log("Booking Payload:", payload);
//     alert("Booking captured successfully (Frontend Only)");
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       {/* BACKDROP */}
//       <div
//         className="absolute inset-0 bg-black/50"
//         onClick={onClose}
//       ></div>

//       {/* MODAL */}
//       <div className="relative bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 z-10 max-h-[90vh] overflow-y-auto">
//         {/* HEADER */}
//         <div className="sticky top-0 bg-white border-b p-5 z-20">
//           <button
//             onClick={onClose}
//             className="absolute right-4 top-4 text-xl text-gray-500 hover:text-black"
//           >
//             ✕
//           </button>
//           <h2 className="text-2xl font-bold">Event Booking</h2>
//         </div>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="p-5 space-y-4">
//           <input
//             type="text"
//             placeholder="Full Name"
//             required
//             className="w-full border p-2 rounded-lg"
//             onChange={(e) => handleChange("name", e.target.value)}
//           />

//           <input
//             type="email"
//             placeholder="Email Address"
//             required
//             className="w-full border p-2 rounded-lg"
//             onChange={(e) => handleChange("email", e.target.value)}
//           />

//           <input
//             type="tel"
//             placeholder="Phone Number"
//             required
//             className="w-full border p-2 rounded-lg"
//             onChange={(e) => handleChange("phone", e.target.value)}
//           />

//           {/* EVENT TYPE */}
//           <select
//             required
//             className="w-full border p-2 rounded-lg"
//             value={formData.eventType}
//             onChange={(e) => handleChange("eventType", e.target.value)}
//           >
//             <option value="">Select Event Type</option>
//             {Object.keys(eventPrices).map((event) => (
//               <option key={event} value={event}>
//                 {event}
//               </option>
//             ))}
//           </select>

//           {/* DATE */}
//           <input
//             type="date"
//             required
//             className="w-full border p-2 rounded-lg"
//             onChange={(e) => handleChange("date", e.target.value)}
//           />

//           {/* DAYS */}
//           <select
//             className="w-full border p-2 rounded-lg"
//             value={formData.days}
//             onChange={(e) => handleChange("days", e.target.value)}
//           >
//             <option value={1}>1 Day</option>
//             <option value={2}>2 Days</option>
//             <option value={3}>3 Days</option>
//             <option value={4}>4 Days</option>
//           </select>

//           <input
//             type="number"
//             placeholder="Number of Guests"
//             required
//             className="w-full border p-2 rounded-lg"
//             onChange={(e) => handleChange("guests", e.target.value)}
//           />

//           {/* PAYMENT */}
//           <select
//             required
//             className="w-full border p-2 rounded-lg"
//             value={formData.paymentType}
//             onChange={(e) => handleChange("paymentType", e.target.value)}
//           >
//             <option value="">Payment Type</option>
//             <option value="advance">Advance (30%)</option>
//             <option value="full">Full Payment</option>
//           </select>

//           {/* ❌ CHECK AVAILABILITY (BACKEND NOT READY) */}
//           {/*
//           <button
//             type="button"
//             onClick={checkAvailability}
//             className="w-full border py-2 rounded-lg"
//           >
//             Check Availability
//           </button>
//           */}

//           {/* PRICE SUMMARY */}
//           {calculations.basePrice > 0 && (
//             <div className="bg-gray-100 p-3 rounded-lg text-sm space-y-1">
//               <p>Price / Day: ₹{calculations.pricePerDay}</p>
//               <p>Days: {calculations.days}</p>
//               <p>Base Price: ₹{calculations.basePrice}</p>
//               <p>GST (18%): ₹{calculations.gst}</p>
//               <p className="font-semibold">
//                 Total Amount: ₹{calculations.totalAmount}
//               </p>
//               {formData.paymentType && (
//                 <>
//                   <p className="text-green-700">
//                     Pay Now: ₹{calculations.payNow}
//                   </p>
//                   <p className="text-red-600">
//                     Remaining: ₹{calculations.remaining}
//                   </p>
//                 </>
//               )}
//             </div>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900"
//           >
//             Proceed to Payment
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }






// import React, { useState, useMemo } from "react";
// import { AiOutlineClose } from "react-icons/ai"; // React Icon for close
// import axios from "axios";

// export default function ModalForm({ onClose }) {
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     eventType: "",
//     eventDate: "",
//     days: 1,
//     guests: 1,
//     paymentType: "",
//   });

//   // 💰 PRICE PER DAY
//   const eventPrices = {
//     "Royal Ball Room": 500,
//     "Grand Ball Room": 800,
//     "Elite Ball Room": 1000,
//     Engagement: 4000,
//     Mehndi: 3000,
//     "Corporate Meetings": 6000,
//     Seminar: 4500,
//   };

//   const handleChange = (field, value) => {
//     setFormData((p) => ({ ...p, [field]: value }));
//   };

//   // 💰 CALCULATION (FRONTEND ONLY)
//   const calculations = useMemo(() => {
//     const pricePerDay = formData.eventType
//       ? eventPrices[formData.eventType]
//       : 0;

//     const days = Number(formData.days) || 1;
//     const basePrice = pricePerDay * days;
//     const gst = Math.round(basePrice * 0.18);
//     const totalAmount = basePrice + gst;

//     let payNow = 0;
//     if (formData.paymentType === "advance")
//       payNow = Math.round(totalAmount * 0.3);
//     if (formData.paymentType === "full") payNow = totalAmount;

//     return { pricePerDay, basePrice, gst, totalAmount, payNow };
//   }, [formData]);

//   // 🧾 SUBMIT
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   if (!calculations.payNow) {
//   //     alert("Please select payment type");
//   //     return;
//   //   }

//   //   setLoading(true);

//   //   try {
//   //     // 1️⃣ CREATE ORDER
//   //     const { data } = await axios.post(
//   //       "http://localhost:5000/api/events/create-order",
//   //       { amount: calculations.payNow }
//   //     );

//   //     // 2️⃣ OPEN RAZORPAY
//   //     const options = {
//   //       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//   //       amount: data.order.amount,
//   //       currency: "INR",
//   //       name: "Resort Event Booking",
//   //       order_id: data.order.id,

//   //       handler: async function (response) {
//   //         // 3️⃣ VERIFY PAYMENT
//   //         await axios.post(
//   //           "http://localhost:5000/api/events/verify-payment",
//   //           {
//   //             ...response,
//   //             bookingData: {
//   //               name: formData.name,
//   //               email: formData.email,
//   //               phone: formData.phone,
//   //               eventType: formData.eventType,
//   //               eventDate: formData.eventDate,
//   //               days: Number(formData.days),
//   //               guests: Number(formData.guests),
//   //               paymentType: formData.paymentType,

//   //               pricePerDay: calculations.pricePerDay,
//   //               basePrice: calculations.basePrice,
//   //               gst: calculations.gst,
//   //               totalAmount: calculations.totalAmount,
//   //             },
//   //           }
//   //         );

//   //         alert("🎉 Event Booking Confirmed!");
//   //         onClose();
//   //       },

//   //       prefill: {
//   //         name: formData.name,
//   //         email: formData.email,
//   //         contact: formData.phone,
//   //       },
//   //       theme: { color: "#1e40af" },
//   //     };

//   //     const razor = new window.Razorpay(options);
//   //     razor.open();
//   //   } catch (err) {
//   //     console.error(err);
//   //     alert("Payment failed");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!calculations.payNow) {
//     alert("Please select payment type");
//     return;
//   }

//   setLoading(true);

//   try {
//     // ✅ Check if date(s) is available
//     const { data: availability } = await axios.post(
//       "http://localhost:5000/api/events/check-availability",
//       {
//         eventDate: formData.eventDate,
//         days: formData.days,
//       }
//     );

//     if (!availability.available) {
//       alert("⚠️ The selected date(s) are already booked. Please choose another date.");
//       setLoading(false);
//       return;
//     }

//     // 1️⃣ CREATE ORDER
//     const { data } = await axios.post(
//       "http://localhost:5000/api/events/create-order",
//       { amount: calculations.payNow }
//     );

//     // 2️⃣ OPEN RAZORPAY
//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount: data.order.amount,
//       currency: "INR",
//       name: "Resort Event Booking",
//       order_id: data.order.id,
//       handler: async function (response) {
//         await axios.post(
//           "http://localhost:5000/api/events/verify-payment",
//           {
//             ...response,
//             bookingData: {
//               ...formData,
//               pricePerDay: calculations.pricePerDay,
//               basePrice: calculations.basePrice,
//               gst: calculations.gst,
//               totalAmount: calculations.totalAmount,
//             },
//           }
//         );

//         alert("🎉 Event Booking Confirmed!");
//         onClose();
//       },
//       prefill: {
//         name: formData.name,
//         email: formData.email,
//         contact: formData.phone,
//       },
//       theme: { color: "#1e40af" },
//     };

//     const razor = new window.Razorpay(options);
//     razor.open();
//   } catch (err) {
//     console.error(err);
//     alert("Payment failed");
//   } finally {
//     setLoading(false);
//   }
// };
//   return (
//     <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto relative">
        
//         {/* ❌ Close Icon */}
//         <button
//           type="button"
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
//         >
//           <AiOutlineClose size={24} />
//         </button>

//         <h2 className="text-2xl font-bold mb-4">Event Booking</h2>

//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input
//             required
//             value={formData.name}
//             placeholder="Name"
//             className="w-full border p-2"
//             onChange={(e) => handleChange("name", e.target.value)}
//           />

//           <input
//             required
//             type="email"
//             value={formData.email}
//             placeholder="Email"
//             className="w-full border p-2"
//             onChange={(e) => handleChange("email", e.target.value)}
//           />

//           <input
//             required
//             value={formData.phone}
//             placeholder="Phone"
//             className="w-full border p-2"
//             onChange={(e) => handleChange("phone", e.target.value)}
//           />

//           <select
//             required
//             value={formData.eventType}
//             className="w-full border p-2"
//             onChange={(e) => handleChange("eventType", e.target.value)}
//           >
//             <option value="">Select Event</option>
//             {Object.keys(eventPrices).map((e) => (
//               <option key={e} value={e}>
//                 {e}
//               </option>
//             ))}
//           </select>

//           <input
//             required
//             type="date"
//             min={new Date().toISOString().split("T")[0]}
//             value={formData.eventDate}
//             className="w-full border p-2"
//             onChange={(e) => handleChange("eventDate", e.target.value)}
//           />

//           <select
//             value={formData.days}
//             className="w-full border p-2"
//             onChange={(e) => handleChange("days", Number(e.target.value))}
//           >
//             <option value={1}>1 Day</option>
//             <option value={2}>2 Days</option>
//             <option value={3}>3 Days</option>
//           </select>

//           <input
//             type="number"
//             min={1}
//             value={formData.guests}
//             placeholder="Guests"
//             className="w-full border p-2"
//             onChange={(e) => handleChange("guests", Number(e.target.value))}
//           />

//           <select
//             required
//             value={formData.paymentType}
//             className="w-full border p-2"
//             onChange={(e) => handleChange("paymentType", e.target.value)}
//           >
//             <option value="">Payment Type</option>
//             <option value="advance">Advance (30%)</option>
//             <option value="full">Full</option>
//           </select>

//           <div className="bg-gray-100 p-3 rounded mt-2">
//             <p>Total: ₹{calculations.totalAmount}</p>
//             <p className="font-semibold">Pay Now: ₹{calculations.payNow}</p>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900 mt-2"
//           >
//             {loading ? "Processing..." : "Pay & Book"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }




import React, { useState, useMemo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

export default function ModalForm({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    days: 1,
    guests: 1,
    paymentType: "",
  });

  const eventPrices = {
    "Royal Ball Room": 500,
    "Grand Ball Room": 800,
    "Elite Ball Room": 1000,
    Engagement: 3000,
    Mehndi: 2000,
    "Corporate Meetings": 2000,
    Seminar: 3500,
  };

  const handleChange = (field, value) => {
    setFormData((p) => ({ ...p, [field]: value }));
  };

  const calculations = useMemo(() => {
    const pricePerDay = formData.eventType
      ? eventPrices[formData.eventType]
      : 0;

    const days = Number(formData.days) || 1;
    const basePrice = pricePerDay * days;
    const gst = Math.round(basePrice * 0.18);
    const totalAmount = basePrice + gst;

    let payNow = 0;
    if (formData.paymentType === "advance")
      payNow = Math.round(totalAmount * 0.3);
    if (formData.paymentType === "full") payNow = totalAmount;

    return { pricePerDay, basePrice, gst, totalAmount, payNow };
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!calculations.payNow) {
      alert("Please select payment type");
      return;
    }

    setLoading(true);

    try {
      const { data: availability } = await axios.post(
        "http://localhost:5000/api/events/check-availability",
        {
          eventDate: formData.eventDate,
          days: formData.days,
        }
      );

      if (!availability.available) {
        alert(
          " The selected date(s) are already booked. Please choose another date."
        );
        setLoading(false);
        return;
      }

      const { data } = await axios.post(
        "http://localhost:5000/api/events/create-order",
        { amount: calculations.payNow }
      );

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: "INR",
        name: "Resort Event Booking ",
        order_id: data.order.id,

        handler: async function (response) {
          await axios.post(
            "http://localhost:5000/api/events/verify-payment",
            {
              ...response,
              bookingData: {
                ...formData,
                pricePerDay: calculations.pricePerDay,
                basePrice: calculations.basePrice,
                gst: calculations.gst,
                totalAmount: calculations.totalAmount,
              },
            }
          );

          //  SUCCESS POPUP
          setSuccess(true);

          setTimeout(() => {
            setSuccess(false);
            onClose();
          }, 2500);
        },

        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#1e40af" },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/*  SUCCESS POPUP (SAME AS PREVIOUS) */}
      {success && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]">
          <div className="bg-white rounded-2xl px-8 py-6 text-center shadow-2xl animate-scaleIn">
            <div className="text-5xl mb-3">🎉</div>
            <h2 className="text-2xl font-bold text-green-600">
              Booking Successful
            </h2>
            <p className="text-gray-600 mt-2">
              Payment completed successfully
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Our team will contact you shortly
            </p>
          </div>
        </div>
      )}

      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
        <div className="bg-white rounded-xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          >
            <AiOutlineClose size={24} />
          </button>

          <h2 className="text-2xl font-bold mb-4">Event Booking</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              required
              value={formData.name}
              placeholder="Name"
              className="w-full border p-2"
              onChange={(e) => handleChange("name", e.target.value)}
            />

            <input
              required
              type="email"
              value={formData.email}
              placeholder="Email"
              className="w-full border p-2"
              onChange={(e) => handleChange("email", e.target.value)}
            />

            <input
              required
              value={formData.phone}
              placeholder="Phone"
              className="w-full border p-2"
              onChange={(e) => handleChange("phone", e.target.value)}
            />

            <select
              required
              value={formData.eventType}
              className="w-full border p-2"
              onChange={(e) => handleChange("eventType", e.target.value)}
            >
              <option value="">Select Event</option>
              {Object.keys(eventPrices).map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>

            <input
              required
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={formData.eventDate}
              className="w-full border p-2"
              onChange={(e) => handleChange("eventDate", e.target.value)}
            />

            <select
              value={formData.days}
              className="w-full border p-2"
              onChange={(e) => handleChange("days", Number(e.target.value))}
            >
              <option value={1}>1 Day</option>
              <option value={2}>2 Days</option>
              <option value={3}>3 Days</option>
            </select>

            <input
              type="number"
              min={1}
              value={formData.guests}
              placeholder="Guests"
              className="w-full border p-2"
              onChange={(e) => handleChange("guests", Number(e.target.value))}
            />

            <select
              required
              value={formData.paymentType}
              className="w-full border p-2"
              onChange={(e) => handleChange("paymentType", e.target.value)}
            >
              <option value="">Payment Type</option>
              <option value="advance">Advance (30%)</option>
              <option value="full">Full</option>
            </select>

            <div className="bg-gray-100 p-3 rounded mt-2">
              <p>Total: ₹{calculations.totalAmount}</p>
              <p className="font-semibold">
                Pay Now: ₹{calculations.payNow}
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900 mt-2"
            >
              {loading ? "Processing..." : "Pay & Book"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}