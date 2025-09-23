// import { useState } from "react";

// export default function ReserveForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     guests: "",
//     date: "",
//     time: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Reservation Data:", formData);
//     alert("Your table reservation request has been submitted!");
//     // Later: send this data to backend or Google Sheets
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
//     >
//       <div>
//         <label className="block text-gray-700 mb-2">Full Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-800"
//           placeholder="Enter your name"
//         />
//       </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-gray-700 mb-2">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-800"
//             placeholder="you@example.com"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 mb-2">Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-800"
//             placeholder="+91 9876543210"
//           />
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-gray-700 mb-2">No. of Guests</label>
//           <input
//             type="number"
//             name="guests"
//             value={formData.guests}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-800"
//             placeholder="e.g. 4"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 mb-2">Date</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-800"
//           />
//         </div>
//       </div>

//       <div>
//         <label className="block text-gray-700 mb-2">Time</label>
//         <input
//           type="time"
//           name="time"
//           value={formData.time}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-800"
//         />
//       </div>

//       <div>
//         <label className="block text-gray-700 mb-2">Special Request</label>
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           rows="4"
//           className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-800"
//           placeholder="Any specific request (optional)"
//         ></textarea>
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition"
//       >
//         Reserve Now
//       </button>
//     </form>
//   );
// }


import React from 'react'

function ReserveForm() {
  return (
    <div>ReserveForm</div>
  )
}

export default ReserveForm