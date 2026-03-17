// // src/components/PopupForm/MultiStepPopup.jsx
// import { useState } from "react";

// export default function MultiStepPopup({ isOpen, onClose }) {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     occasion: "",
//     guests: "",
//     date: "",
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const occasions = [
//     "Wedding",
//     "Engagement",
//     "Corporate Event",
//     "Birthday Party",
//     "Cocktail Party",
//     "Social Gathering",
//   ];

//   const guestsOptions = [
//     "50", "100", "150", "200", "300", "400", "500", "Still Larger Gathering?",
//   ];

//   const handleChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleSubmit = () => {
//     console.log("Form Data:", formData);
//     onClose(); // close popup
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-lg p-6 relative">
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
//         >
//           ✖
//         </button>

//         <h2 className="text-xl font-bold text-center mb-4 text-blue-800">
//           Call Toll Free: 1800 2578 009
//         </h2>

//         {/* Step 1 */}
//         {step === 1 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Select Occasion
//             </h3>
//             <div className="grid grid-cols-2 gap-3">
//               {occasions.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => handleChange("occasion", item)}
//                   className={`border rounded-lg px-4 py-2 text-sm ${
//                     formData.occasion === item
//                       ? "bg-blue-800 text-white"
//                       : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Step 2 */}
//         {step === 2 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Minimum Expected Guests
//             </h3>
//             <div className="grid grid-cols-2 gap-3">
//               {guestsOptions.map((g) => (
//                 <button
//                   key={g}
//                   onClick={() => handleChange("guests", g)}
//                   className={`border rounded-lg px-4 py-2 text-sm ${
//                     formData.guests === g
//                       ? "bg-blue-800 text-white"
//                       : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//                 >
//                   {g}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Step 3 */}
//         {step === 3 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Select Event Date
//             </h3>
//             <input
//               type="date"
//               value={formData.date}
//               onChange={(e) => handleChange("date", e.target.value)}
//               className="w-full border rounded-lg px-3 py-2"
//             />
//           </div>
//         )}

//         {/* Step 4 */}
//         {step === 4 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Enter Your Details
//             </h3>
//             <div className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={(e) => handleChange("name", e.target.value)}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={(e) => handleChange("email", e.target.value)}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={(e) => handleChange("phone", e.target.value)}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//             </div>
//           </div>
//         )}

//         {/* Navigation Buttons */}
//         <div className="flex justify-between mt-6">
//           {step > 1 ? (
//             <button
//               onClick={() => setStep(step - 1)}
//               className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
//             >
//               Back
//             </button>
//           ) : (
//             <span />
//           )}

//           {step < 4 ? (
//             <button
//               onClick={() => setStep(step + 1)}
//               className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg text-white"
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               onClick={handleSubmit}
//               className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg text-white"
//             >
//               Submit
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useState } from "react";
// import { AiOutlineClose } from "react-icons/ai"; // Close icon

// export default function MultiStepPopup({ isOpen, onClose }) {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     occasion: "",
//     guests: "",
//     date: "",
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const occasions = [
//     "Wedding",
//     "Engagement",
//     "Corporate Event",
//     "Birthday Party",
//     "Cocktail Party",
//     "Social Gathering",
//   ];

//   const guestsOptions = [
//     "50",
//     "100",
//     "150",
//     "200",
//     "300",
//     "400",
//     "500",
//     "Still Larger Gathering?",
//   ];

//   const handleChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleSubmit = () => {
//     console.log("Form Data:", formData);
//     onClose(); // close popup
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-lg p-6 relative">
//         {/* Close button with react-icon */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
//         >
//           <AiOutlineClose />
//         </button>

//         <h2 className="text-xl font-bold text-center mb-4 text-blue-800">
//           Call Toll Free: 1800 2578 009
//         </h2>

//         {/* Step 1 */}
//         {step === 1 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Select Occasion
//             </h3>
//             <div className="grid grid-cols-2 gap-3">
//               {occasions.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => handleChange("occasion", item)}
//                   className={`border rounded-lg px-4 py-2 text-sm ${
//                     formData.occasion === item
//                       ? "bg-blue-800 text-white"
//                       : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Step 2 */}
//         {step === 2 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Minimum Expected Guests
//             </h3>
//             <div className="grid grid-cols-2 gap-3">
//               {guestsOptions.map((g) => (
//                 <button
//                   key={g}
//                   onClick={() => handleChange("guests", g)}
//                   className={`border rounded-lg px-4 py-2 text-sm ${
//                     formData.guests === g
//                       ? "bg-blue-800 text-white"
//                       : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//                 >
//                   {g}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Step 3 */}
//         {step === 3 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Select Event Date
//             </h3>
//             <input
//               type="date"
//               value={formData.date}
//               onChange={(e) => handleChange("date", e.target.value)}
//               className="w-full border rounded-lg px-3 py-2"
//             />
//           </div>
//         )}

//         {/* Step 4 */}
//         {step === 4 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Enter Your Details
//             </h3>
//             <div className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={(e) => handleChange("name", e.target.value)}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={(e) => handleChange("email", e.target.value)}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={(e) => handleChange("phone", e.target.value)}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//             </div>
//           </div>
//         )}

//         {/* Navigation Buttons */}
//         <div className="flex justify-between mt-6">
//           {step > 1 ? (
//             <button
//               onClick={() => setStep(step - 1)}
//               className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
//             >
//               Back
//             </button>
//           ) : (
//             <span />
//           )}

//           {step < 4 ? (
//             <button
//               onClick={() => setStep(step + 1)}
//               className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg text-white"
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               onClick={handleSubmit}
//               className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg text-white"
//             >
//               Submit
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useState } from "react";
// import axios from "axios";
// import { AiOutlineClose } from "react-icons/ai";

// export default function MultiStepPopup({ isOpen, onClose }) {
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     occasion: "",
//     guests: "",
//     date: "",
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const occasions = [
//     "Wedding",
//     "Engagement",
//     "Corporate Event",
//     "Birthday Party",
//     "Cocktail Party",
//     "Social Gathering",
//   ];

//   const guestsOptions = [
//     "50",
//     "100",
//     "150",
//     "200",
//     "300",
//     "400",
//     "500",
//     "Still Larger Gathering?",
//   ];

//   const handleChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   // ✅ API Submit Function
//   const handleSubmit = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post("http://localhost:5000/api/event-booking", formData);
//       console.log(" Booking saved:", response.data);

//       alert("Your event details have been submitted successfully!");
//       onClose(); // Close popup
//       setStep(1);
//       setFormData({
//         occasion: "",
//         guests: "",
//         date: "",
//         name: "",
//         email: "",
//         phone: "",
//       });
//     } catch (error) {
//       console.error(" Error saving booking:", error);
//       alert("Something went wrong while submitting the form.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-lg p-6 relative">
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
//         >
//           <AiOutlineClose />
//         </button>

//         <h2 className="text-xl font-bold text-center mb-4 text-blue-800">
//           Call Toll Free: 1800 2578 009
//         </h2>

//         {/* Step Components */}
//         {step === 1 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Select Occasion
//             </h3>
//             <div className="grid grid-cols-2 gap-3">
//               {occasions.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => handleChange("occasion", item)}
//                   className={`border rounded-lg px-4 py-2 text-sm ${
//                     formData.occasion === item
//                       ? "bg-blue-800 text-white"
//                       : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {step === 2 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Minimum Expected Guests
//             </h3>
//             <div className="grid grid-cols-2 gap-3">
//               {guestsOptions.map((g) => (
//                 <button
//                   key={g}
//                   onClick={() => handleChange("guests", g)}
//                   className={`border rounded-lg px-4 py-2 text-sm ${
//                     formData.guests === g
//                       ? "bg-blue-800 text-white"
//                       : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//                 >
//                   {g}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {step === 3 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Select Event Date
//             </h3>
//             <input
//               type="date"
//               value={formData.date}
//               onChange={(e) => handleChange("date", e.target.value)}
//               className="w-full border rounded-lg px-3 py-2"
//             />
//           </div>
//         )}

//         {step === 4 && (
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Enter Your Details
//             </h3>
//             <div className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={(e) => handleChange("name", e.target.value)}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={(e) => handleChange("email", e.target.value)}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={(e) => handleChange("phone", e.target.value)}
//                 className="w-full border rounded-lg px-3 py-2"
//               />
//             </div>
//           </div>
//         )}

//         {/* Navigation Buttons */}
//         <div className="flex justify-between mt-6">
//           {step > 1 ? (
//             <button
//               onClick={() => setStep(step - 1)}
//               className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
//               disabled={loading}
//             >
//               Back
//             </button>
//           ) : (
//             <span />
//           )}

//           {step < 4 ? (
//             <button
//               onClick={() => setStep(step + 1)}
//               className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg text-white"
//               disabled={loading}
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               onClick={handleSubmit}
//               className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg text-white"
//               disabled={loading}
//             >
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// new

// import { useState, useMemo } from "react";
// import axios from "axios";
// import { AiOutlineClose } from "react-icons/ai";

// export default function MultiStepPopup({ isOpen, onClose }) {
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     eventType: "",
//     guests: 1,
//     eventDate: "",
//     days: 1,
//     name: "",
//     email: "",
//     phone: "",
//     paymentType: "",
//   });

//   // 💰 SAME PRICE LOGIC AS MODALFORM
//   const eventPrices = {
//     Wedding: 8000,
//     Engagement: 4000,
//     "Corporate Event": 6000,
//     "Birthday Party": 3000,
//     "Cocktail Party": 5000,
//     "Social Gathering": 3500,
//   };

//   const occasions = Object.keys(eventPrices);

//   const guestsOptions = [
//     "50",
//     "100",
//     "150",
//     "200",
//     "300",
//     "400",
//     "500",
//     "Still Larger Gathering?",
//   ];

//   const handleChange = (field, value) => {
//     setFormData((p) => ({ ...p, [field]: value }));
//   };

//   // 💰 CALCULATION (EXACT SAME AS MODALFORM)
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

//   // 🧾 FINAL SUBMIT WITH RAZORPAY
//   const handleSubmit = async () => {
//     if (!calculations.payNow) {
//       alert("Please select payment type");
//       return;
//     }

//     setLoading(true);

//     try {
//       // ✅ CHECK DATE AVAILABILITY
//       const { data: availability } = await axios.post(
//         "http://localhost:5000/api/events/check-availability",
//         {
//           eventDate: formData.eventDate,
//           days: formData.days,
//         }
//       );

//       if (!availability.available) {
//         alert("⚠️ Selected date is already booked");
//         setLoading(false);
//         return;
//       }

//       // 1️⃣ CREATE ORDER
//       const { data } = await axios.post(
//         "http://localhost:5000/api/events/create-order",
//         { amount: calculations.payNow }
//       );

//       // 2️⃣ OPEN RAZORPAY
//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//         amount: data.order.amount,
//         currency: "INR",
//         name: "Event Booking",
//         order_id: data.order.id,

//         handler: async function (response) {
//           // 3️⃣ VERIFY PAYMENT
//           await axios.post(
//             "http://localhost:5000/api/events/verify-payment",
//             {
//               ...response,
//               bookingData: {
//                 ...formData,
//                 guests: Number(formData.guests),
//                 days: Number(formData.days),
//                 pricePerDay: calculations.pricePerDay,
//                 basePrice: calculations.basePrice,
//                 gst: calculations.gst,
//                 totalAmount: calculations.totalAmount,
//               },
//             }
//           );

//           alert("🎉 Booking Successful!");
//           onClose();
//           setStep(1);
//         },

//         prefill: {
//           name: formData.name,
//           email: formData.email,
//           contact: formData.phone,
//         },
//         theme: { color: "#1e40af" },
//       };

//       new window.Razorpay(options).open();
//     } catch (err) {
//       console.error(err);
//       alert("Payment failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-lg p-6 relative">
//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 text-2xl"
//         >
//           <AiOutlineClose />
//         </button>

//         <h2 className="text-xl font-bold text-center mb-4 text-blue-800">
//           Call Toll Free: 1800 2578 009
//         </h2>

//         {/* STEP 1 */}
//         {step === 1 && (
//           <>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Select Occasion
//             </h3>
//             <div className="grid grid-cols-2 gap-3">
//               {occasions.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => handleChange("eventType", item)}
//                   className={`border rounded-lg px-4 py-2 text-sm ${
//                     formData.eventType === item
//                       ? "bg-blue-800 text-white"
//                       : "bg-gray-100"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </>
//         )}

//         {/* STEP 2 */}
//         {step === 2 && (
//           <>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Minimum Expected Guests
//             </h3>
//             <div className="grid grid-cols-2 gap-3">
//               {guestsOptions.map((g) => (
//                 <button
//                   key={g}
//                   onClick={() => handleChange("guests", g)}
//                   className={`border rounded-lg px-4 py-2 text-sm ${
//                     formData.guests === g
//                       ? "bg-blue-800 text-white"
//                       : "bg-gray-100"
//                   }`}
//                 >
//                   {g}
//                 </button>
//               ))}
//             </div>
//           </>
//         )}

//         {/* STEP 3 */}
//         {step === 3 && (
//           <>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Select Date & Days
//             </h3>

//             <input
//               type="date"
//               value={formData.eventDate}
//               onChange={(e) => handleChange("eventDate", e.target.value)}
//               className="w-full border rounded-lg px-3 py-2 mb-3"
//             />

//             <select
//               value={formData.days}
//               onChange={(e) => handleChange("days", Number(e.target.value))}
//               className="w-full border rounded-lg px-3 py-2"
//             >
//               <option value={1}>1 Day</option>
//               <option value={2}>2 Days</option>
//               <option value={3}>3 Days</option>
//             </select>
//           </>
//         )}

//         {/* STEP 4 */}
//         {step === 4 && (
//           <>
//             <h3 className="text-lg font-semibold mb-4 text-center">
//               Enter Your Details
//             </h3>
//             <div className="space-y-3">
//               <input
//                 placeholder="Name"
//                 className="w-full border rounded-lg px-3 py-2"
//                 value={formData.name}
//                 onChange={(e) => handleChange("name", e.target.value)}
//               />
//               <input
//                 placeholder="Email"
//                 className="w-full border rounded-lg px-3 py-2"
//                 value={formData.email}
//                 onChange={(e) => handleChange("email", e.target.value)}
//               />
//               <input
//                 placeholder="Phone"
//                 className="w-full border rounded-lg px-3 py-2"
//                 value={formData.phone}
//                 onChange={(e) => handleChange("phone", e.target.value)}
//               />

//               <select
//                 className="w-full border rounded-lg px-3 py-2"
//                 value={formData.paymentType}
//                 onChange={(e) =>
//                   handleChange("paymentType", e.target.value)
//                 }
//               >
//                 <option value="">Payment Type</option>
//                 <option value="advance">Advance (30%)</option>
//                 <option value="full">Full</option>
//               </select>

//               <div className="bg-gray-100 p-3 rounded">
//                 <p>Total: ₹{calculations.totalAmount}</p>
//                 <p className="font-semibold">
//                   Pay Now: ₹{calculations.payNow}
//                 </p>
//               </div>
//             </div>
//           </>
//         )}

//         {/* NAV BUTTONS */}
//         <div className="flex justify-between mt-6">
//           {step > 1 ? (
//             <button
//               onClick={() => setStep(step - 1)}
//               className="bg-gray-300 px-4 py-2 rounded-lg"
//             >
//               Back
//             </button>
//           ) : (
//             <span />
//           )}

//           {step < 4 ? (
//             <button
//               onClick={() => setStep(step + 1)}
//               className="bg-blue-800 text-white px-4 py-2 rounded-lg"
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               onClick={handleSubmit}
//               disabled={loading}
//               className="bg-blue-800 text-white px-4 py-2 rounded-lg"
//             >
//               {loading ? "Processing..." : "Pay & Book"}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState, useMemo } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";

export default function MultiStepPopup({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    eventType: "",
    guests: 1,
    eventDate: "",
    days: 1,
    name: "",
    email: "",
    phone: "",
    paymentType: "",
  });

  const eventPrices = {
    Wedding: 8000,
    Engagement: 4000,
    "Corporate Event": 6000,
    "Birthday Party": 3000,
    "Cocktail Party": 5000,
    "Social Gathering": 3500,
  };

  const occasions = Object.keys(eventPrices);

  const guestsOptions = [
    "50",
    "100",
    "150",
    "200",
    "300",
    "400",
    "500",
    "Still Larger Gathering?",
  ];

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

  const handleSubmit = async () => {
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
        alert("Selected date is already booked");
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
        name: "Event Booking",
        order_id: data.order.id,

        handler: async function (response) {
          await axios.post(
            "http://localhost:5000/api/events/verify-payment",
            {
              ...response,
              bookingData: {
                ...formData,
                guests: Number(formData.guests),
                days: Number(formData.days),
                pricePerDay: calculations.pricePerDay,
                basePrice: calculations.basePrice,
                gst: calculations.gst,
                totalAmount: calculations.totalAmount,
              },
            }
          );

          setSuccess(true);

          setTimeout(() => {
            setSuccess(false);
            onClose();
            setStep(1);
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

  if (!isOpen) return null;

  return (
    <>
      {/* SUCCESS SCREEN */}
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

      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-lg p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 text-2xl"
          >
            <AiOutlineClose />
          </button>

          <h2 className="text-xl font-bold text-center mb-4 text-blue-800">
            Call Toll Free: 1800 2578 009
          </h2>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h3 className="text-lg font-semibold mb-4 text-center">
                Select Occasion
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {occasions.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleChange("eventType", item)}
                    className={`border rounded-lg px-4 py-2 text-sm ${
                      formData.eventType === item
                        ? "bg-blue-800 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <h3 className="text-lg font-semibold mb-4 text-center">
                Minimum Expected Guests
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {guestsOptions.map((g) => (
                  <button
                    key={g}
                    onClick={() => handleChange("guests", g)}
                    className={`border rounded-lg px-4 py-2 text-sm ${
                      formData.guests === g
                        ? "bg-blue-800 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <h3 className="text-lg font-semibold mb-4 text-center">
                Select Date & Days
              </h3>

              <input
                type="date"
                value={formData.eventDate}
                onChange={(e) => handleChange("eventDate", e.target.value)}
                className="w-full border rounded-lg px-3 py-2 mb-3"
              />

              <select
                value={formData.days}
                onChange={(e) => handleChange("days", Number(e.target.value))}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value={1}>1 Day</option>
                <option value={2}>2 Days</option>
                <option value={3}>3 Days</option>
              </select>
            </>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <>
              <h3 className="text-lg font-semibold mb-4 text-center">
                Enter Your Details
              </h3>
              <div className="space-y-3">
                <input
                  placeholder="Name"
                  className="w-full border rounded-lg px-3 py-2"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                <input
                  placeholder="Email"
                  className="w-full border rounded-lg px-3 py-2"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                <input
                  placeholder="Phone"
                  className="w-full border rounded-lg px-3 py-2"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />

                <select
                  className="w-full border rounded-lg px-3 py-2"
                  value={formData.paymentType}
                  onChange={(e) =>
                    handleChange("paymentType", e.target.value)
                  }
                >
                  <option value="">Payment Type</option>
                  <option value="advance">Advance (30%)</option>
                  <option value="full">Full</option>
                </select>

                <div className="bg-gray-100 p-3 rounded">
                  <p>Total: ₹{calculations.totalAmount}</p>
                  <p className="font-semibold">
                    Pay Now: ₹{calculations.payNow}
                  </p>
                </div>
              </div>
            </>
          )}

          {/* NAV BUTTONS */}
          <div className="flex justify-between mt-6">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="bg-gray-300 px-4 py-2 rounded-lg"
              >
                Back
              </button>
            ) : (
              <span />
            )}

            {step < 4 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="bg-blue-800 text-white px-4 py-2 rounded-lg"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-blue-800 text-white px-4 py-2 rounded-lg"
              >
                {loading ? "Processing..." : "Pay & Book"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}