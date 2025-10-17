// 100 fully work code
// import React, { useEffect, useState } from "react";
// import { FaTrashAlt, FaSearch } from "react-icons/fa";

// const RoomBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [filteredBookings, setFilteredBookings] = useState([]);
//   const [selectedBooking, setSelectedBooking] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Fetch all bookings
//   useEffect(() => {
//     fetch("http://localhost:5000/api/bookings")
//       .then((res) => res.json())
//       .then((data) => {
//         setBookings(data);
//         setFilteredBookings(data);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   // Search filter
//   useEffect(() => {
//     const term = searchTerm.toLowerCase();
//     const filtered = bookings.filter(
//       (b) =>
//         b.name?.toLowerCase().includes(term) ||
//         b.roomType?.toLowerCase().includes(term) ||
//         b.status?.toLowerCase().includes(term) ||
//         b.totalPrice?.toString().includes(term)
//     );
//     setFilteredBookings(filtered);
//   }, [searchTerm, bookings]);

//   // Delete booking
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this booking?")) return;

//     try {
//       const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
//         method: "DELETE",
//       });
//       if (res.ok) {
//         setBookings(bookings.filter((b) => b._id !== id));
//         alert("Booking deleted successfully!");
//       } else {
//         alert("Failed to delete booking.");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Status badge styling
//   const getStatusBadge = (status) => {
//     let color = "bg-gray-300 text-gray-800";
//     if (status === "confirmed") color = "bg-green-200 text-green-800";
//     if (status === "pending") color = "bg-yellow-200 text-yellow-800";
//     if (status === "canceled") color = "bg-red-200 text-red-800";
//     return (
//       <span className={`px-3 py-1 rounded-full text-sm font-semibold ${color}`}>
//         {status?.charAt(0).toUpperCase() + status?.slice(1) || "Pending"}
//       </span>
//     );
//   };

//   // Handle edit submit
//   const handleEditSave = async () => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/bookings/${selectedBooking._id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(selectedBooking),
//         }
//       );
//       if (res.ok) {
//         const updated = await res.json();
//         setBookings((prev) =>
//           prev.map((b) => (b._id === updated._id ? updated : b))
//         );
//         alert("Booking updated successfully!");
//         setSelectedBooking(null);
//       } else {
//         alert("Failed to update booking.");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold">Bookinging Room</h2>
//         <div className="relative w-80">
//           <FaSearch className="absolute top-3 left-3 text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search by name, room, price, status"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-8 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-800 focus:outline-none"
//           />
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
//           <thead className="bg-blue-800 text-white">
//             <tr>
//               <th className="p-2 border">Name</th>
//               <th className="p-2 border">Room Type</th>
//               <th className="p-2 border">Rooms</th>
//               <th className="p-2 border">Guests</th>
//               <th className="p-2 border">Total Price</th>
//               <th className="p-2 border">Payment Status</th>
//               <th className="p-2 border"> Status</th> 
//               <th className="p-2 border">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredBookings.length > 0 ? (
//               filteredBookings.map((b) => (
//                 <tr key={b._id} className="border text-center hover:bg-gray-100">
//                   <td className="p-2">{b.name}</td>
//                   <td className="p-2">{b.roomType}</td>
//                   <td className="p-2">{b.roomCount}</td>
//                   <td className="p-2">{b.guestCount}</td>
//                   <td className="p-2 font-semibold text-green-700">
//                     ₹{b.totalPrice?.toLocaleString("en-IN")}
//                   </td>
//                   <td className="p-2">{getStatusBadge(b.status)}</td>
//                   <td className="p-2">{getStatusBadge(b.paymentStatus)}</td>
//                   <td className="p-2 flex justify-center gap-2">
//                     <button
//                       onClick={() => setSelectedBooking({ ...b })}
//                       className="bg-blue-800 hover:bg-blue-900 text-white px-3 py-1 rounded-md text-sm transition-all duration-200"
//                     >
//                       View Details
//                     </button>
//                     <button
//                       onClick={() => handleDelete(b._id)}
//                       className="text-red-600 hover:text-red-800"
//                     >
//                       <FaTrashAlt size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7" className="text-center p-4 text-gray-700">
//                   No bookings found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>


//       {/* Popup Modal for Details + Edit */}
//       {selectedBooking && (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
//     <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-2xl relative animate-fadeIn mx-4 my-8">
//       <h3 className="text-2xl font-bold mb-4 text-blue-800 border-b pb-3">
//         Booking Details 
//       </h3>

//       <div className="space-y-4 text-gray-800 text-sm max-h-[70vh] overflow-y-auto pr-2">
//         {[
//           { label: "Name", field: "name" },
//           { label: "Email", field: "email" },
//           { label: "Phone", field: "phone" },
//           { label: "Room Type", field: "roomType" },
//           { label: "Room Count", field: "roomCount" },
//           { label: "Guest Count", field: "guestCount" },
//           { label: "Message", field: "message" },
          
//         ].map(({ label, field }) => (
//           <div key={field}>
//             <label className="font-medium block mb-1">{label}</label>
//             <input
//               type="text"
//               value={selectedBooking[field] || ""}
//               onChange={(e) =>
//                 setSelectedBooking({
//                   ...selectedBooking,
//                   [field]: e.target.value,
//                 })
//               }
//               className="border border-gray-300 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         ))}


//       <div>
//         <label className="font-medium block mb-1">Payment Status</label>
//         <select
//           value={selectedBooking.paymentStatus || "pending"}
//           onChange={(e) =>
//             setSelectedBooking({
//               ...selectedBooking,
//               paymentStatus: e.target.value,
//             })
//           }
//           className="border border-gray-300 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="pending">Pending</option>
//           <option value="success">Success</option>
//           <option value="failed">Failed</option>
//         </select>
// </div>


//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <p className="text-sm text-gray-600">Check-In</p>
//             <p className="font-semibold">
//               {new Date(selectedBooking.checkIn).toLocaleString()}
//             </p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-600">Check-Out</p>
//             <p className="font-semibold">
//               {new Date(selectedBooking.checkOut).toLocaleString()}
//             </p>
//           </div>
//         </div>

//         <div>
//           <p className="text-lg font-bold text-green-700">
//             Total Price: ₹{selectedBooking.totalPrice?.toLocaleString("en-IN")}
//           </p>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-4 mt-6">
//         <button
//           onClick={handleEditSave}
//           className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition"
//         >
//           Save Changes
//         </button>
//         <button
//           onClick={() => setSelectedBooking(null)}
//           className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold transition"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   </div>
// )}
//     </div>
//   );
// };

// export default RoomBookings;




//  work as all details
// import React, { useEffect, useState } from "react";
// import { FaTrashAlt, FaSearch } from "react-icons/fa";

// const RoomBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [filteredBookings, setFilteredBookings] = useState([]);
//   const [selectedBooking, setSelectedBooking] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Fetch all bookings
//   useEffect(() => {
//     fetch("http://localhost:5000/api/bookings")
//       .then((res) => res.json())
//       .then((data) => {
//         setBookings(data);
//         setFilteredBookings(data);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   // Search filter
//   useEffect(() => {
//     const term = searchTerm.toLowerCase();
//     const filtered = bookings.filter(
//       (b) =>
//         b.name?.toLowerCase().includes(term) ||
//         b.roomType?.toLowerCase().includes(term) ||
//         b.status?.toLowerCase().includes(term) ||
//         b.totalPrice?.toString().includes(term)
//     );
//     setFilteredBookings(filtered);
//   }, [searchTerm, bookings]);

//   // Delete booking
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this booking?")) return;

//     try {
//       const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
//         method: "DELETE",
//       });
//       if (res.ok) {
//         setBookings(bookings.filter((b) => b._id !== id));
//         alert("Booking deleted successfully!");
//       } else {
//         alert("Failed to delete booking.");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Status badge styling
//   const getStatusBadge = (status) => {
//     let color = "bg-gray-300 text-gray-800";
//     if (status === "confirmed") color = "bg-green-200 text-green-800";
//     if (status === "pending") color = "bg-yellow-200 text-yellow-800";
//     if (status === "canceled") color = "bg-red-200 text-red-800";
//     if (status === "success") color = "bg-green-200 text-green-800";
//     if (status === "failed") color = "bg-red-200 text-red-800";
//     return (
//       <span className={`px-3 py-1 rounded-full text-sm font-semibold ${color}`}>
//         {status?.charAt(0).toUpperCase() + status?.slice(1) || "Pending"}
//       </span>
//     );
//   };

//   return (
//     <div className="p-6">
//       {/* Header Section */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
//         <h2 className="text-2xl font-bold text-blue-900">Booking Room</h2>
//         <div className="relative w-full sm:w-80">
//           <FaSearch className="absolute top-3 left-3 text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search by name, room, price, status"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-8 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-800 focus:outline-none"
//           />
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
//           <thead className="bg-blue-800 text-white">
//             <tr>
//               <th className="p-2 border">Name</th>
//               <th className="p-2 border">Room Type</th>
//               <th className="p-2 border">Rooms</th>
//               <th className="p-2 border">Guests</th>
//               <th className="p-2 border">Total Price</th>
//               <th className="p-2 border">Payment Status</th>
//               <th className="p-2 border">Status</th>
//               <th className="p-2 border">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredBookings.length > 0 ? (
//               filteredBookings.map((b) => (
//                 <tr
//                   key={b._id}
//                   className="border text-center hover:bg-gray-100 transition-all"
//                 >
//                   <td className="p-2">{b.name}</td>
//                   <td className="p-2">{b.roomType}</td>
//                   <td className="p-2">{b.roomCount}</td>
//                   <td className="p-2">{b.guestCount}</td>
//                   <td className="p-2 font-semibold text-green-700">
//                     ₹{b.totalPrice?.toLocaleString("en-IN")}
//                   </td>
//                   <td className="p-2">{getStatusBadge(b.paymentStatus)}</td>
//                   <td className="p-2">{getStatusBadge(b.status)}</td>
//                   <td className="p-2 flex justify-center gap-2">
//                     <button
//                       onClick={() => setSelectedBooking({ ...b })}
//                       className="bg-blue-800 hover:bg-blue-900 text-white px-3 py-1 rounded-md text-sm transition-all duration-200"
//                     >
//                       View Details
//                     </button>
//                     <button
//                       onClick={() => handleDelete(b._id)}
//                       className="text-red-600 hover:text-red-800"
//                     >
//                       <FaTrashAlt size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="8" className="text-center p-4 text-gray-700">
//                   No bookings found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Responsive Animated Read-Only Modal */}
//       {selectedBooking && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-end sm:items-center z-50 px-4 py-6">
//           <div className="bg-white w-full sm:max-w-lg rounded-2xl shadow-2xl p-6 relative animate-slideUp">
//             {/* Header */}
//             <h3 className="text-2xl font-bold mb-4 text-blue-800 border-b pb-3 text-center">
//               Booking Details
//             </h3>

//             <div className="space-y-4 text-gray-800 text-sm max-h-[70vh] overflow-y-auto custom-scrollbar">
//               {/* Basic Info */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 <p><span className="font-semibold">Name:</span> {selectedBooking.name}</p>
//                 <p><span className="font-semibold">Email:</span> {selectedBooking.email}</p>
//                 <p><span className="font-semibold">Mobile No:</span> {selectedBooking.phone}</p>
//                 <p><span className="font-semibold">Room Type:</span> {selectedBooking.roomType}</p>
//                 <p><span className="font-semibold">Room Count:</span> {selectedBooking.roomCount}</p>
//                 <p><span className="font-semibold">Guest Count:</span> {selectedBooking.guestCount}</p>
//                 <p className="sm:col-span-2"><span className="font-semibold">Message:</span> {selectedBooking.message || "—"}</p>
//               </div>

//               {/* Status Info */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t pt-3">
//                 <p>
//                   <span className="font-semibold">Booking Status:</span>{" "}
//                   <span className={`${
//                     selectedBooking.status === "confirmed"
//                       ? "text-green-700"
//                       : selectedBooking.status === "pending"
//                       ? "text-yellow-700"
//                       : "text-red-700"
//                   } font-medium`}>
//                     {selectedBooking.status || "Pending"}
//                   </span>
//                 </p>
//                 <p>
//                   <span className="font-semibold">Payment Status:</span>{" "}
//                   <span className={`${
//                     selectedBooking.paymentStatus === "success"
//                       ? "text-green-700"
//                       : selectedBooking.paymentStatus === "pending"
//                       ? "text-yellow-700"
//                       : "text-red-700"
//                   } font-medium`}>
//                     {selectedBooking.paymentStatus || "Pending"}
//                   </span>
//                 </p>
//               </div>

//               {/* Check-In / Check-Out */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t pt-3">
//                 <div>
//                   <p className="text-sm text-gray-600">Check-In</p>
//                   <p className="font-semibold">
//                     {selectedBooking.checkIn
//                       ? new Date(selectedBooking.checkIn).toLocaleString()
//                       : "—"}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-600">Check-Out</p>
//                   <p className="font-semibold">
//                     {selectedBooking.checkOut
//                       ? new Date(selectedBooking.checkOut).toLocaleString()
//                       : "—"}
//                   </p>
//                 </div>
//               </div>

//               {/* Payment Info */}
//               <div className="border-t pt-3">
//                 <h4 className="text-lg font-semibold text-blue-700 mb-2">
//                   Payment Details
//                 </h4>
//                 <div className="space-y-1">
//                   <p><span className="font-semibold">Booking ID:</span> {selectedBooking._id || "—"}</p>
//                   <p><span className="font-semibold">Payment ID:</span> {selectedBooking.paymentId || "—"}</p>
//                   <p><span className="font-semibold">Room Price:</span> ₹{selectedBooking.roomPrice?.toLocaleString("en-IN") || "0"}</p>
//                   <p><span className="font-semibold">GST:</span> ₹{selectedBooking.gst?.toLocaleString("en-IN") || "0"}</p>
//                   <p className="font-semibold text-green-700">
//                     Total (with GST): ₹
//                     {selectedBooking.totalPriceWithGST?.toLocaleString("en-IN") ||
//                       selectedBooking.totalPrice?.toLocaleString("en-IN") ||
//                       "0"}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Close Button */}
//             <div className="flex justify-end mt-6">
//               <button
//                 onClick={() => setSelectedBooking(null)}
//                 className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-md font-semibold transition duration-200"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RoomBookings;





// 100 work code

// import React, { useEffect, useState } from "react";
// import { FaTrashAlt, FaSearch } from "react-icons/fa";

// const RoomBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [filteredBookings, setFilteredBookings] = useState([]);
//   const [selectedBooking, setSelectedBooking] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Fetch all bookings from backend
//   useEffect(() => {
//     fetch("http://localhost:5000/api/bookings")
//       .then((res) => res.json())
//       .then((data) => {
//         setBookings(data);
//         setFilteredBookings(data);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   // Search filter logic
//   useEffect(() => {
//     const term = searchTerm.toLowerCase();
//     const filtered = bookings.filter(
//       (b) =>
//         b.name?.toLowerCase().includes(term) ||
//         b.roomType?.toLowerCase().includes(term) ||
//         b.status?.toLowerCase().includes(term) ||
//         b.totalPrice?.toString().includes(term)
//     );
//     setFilteredBookings(filtered);
//   }, [searchTerm, bookings]);

//   // Delete booking
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this booking?")) return;

//     try {
//       const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
//         method: "DELETE",
//       });
//       if (res.ok) {
//         setBookings(bookings.filter((b) => b._id !== id));
//         alert("Booking deleted successfully!");
//       } else {
//         alert("Failed to delete booking.");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Function to color-code status
//   const getStatusBadge = (status) => {
//     let color = "bg-gray-300 text-gray-800";
//     if (status === "confirmed") color = "bg-green-200 text-green-800";
//     if (status === "pending") color = "bg-yellow-200 text-yellow-800";
//     if (status === "canceled") color = "bg-red-200 text-red-800";
//     return (
//       <span className={`px-3 py-1 rounded-full text-sm font-semibold ${color}`}>
//         {status?.charAt(0).toUpperCase() + status?.slice(1) || "N/A"}
//       </span>
//     );
//   };

//   return (
//     <div className="p-6">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-4">
      
//        <h2 className="text-2xl font-bold">All Room Bookings</h2>
//         <div className="relative w-77">
//           <FaSearch className="absolute top-3 left-3 text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search by name, room, price, status"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-8 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-800 focus:outline-none"
//           />
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
//           <thead className="bg-blue-800 text-white">
//             <tr>
//               <th className="p-2 border">Name</th>
//               <th className="p-2 border">Room Type</th>
//               <th className="p-2 border">Rooms</th>
//               <th className="p-2 border">Guests</th>
//               <th className="p-2 border">Total Price</th>
//               <th className="p-2 border">Status</th>
//               <th className="p-2 border">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredBookings.length > 0 ? (
//               filteredBookings.map((b) => (
//                 <tr key={b._id} className="border text-center hover:bg-gray-100">
//                   <td className="p-2">{b.name}</td>
//                   <td className="p-2">{b.roomType}</td>
//                   <td className="p-2">{b.roomCount}</td>
//                   <td className="p-2">{b.guestCount}</td>
//                   <td className="p-2 font-semibold text-green-700">
//                     ₹{b.totalPrice?.toLocaleString("en-IN")}
//                   </td>
//                   <td className="p-2">{getStatusBadge(b.status)}</td>
//                   <td className="p-2 flex justify-center gap-2">
//                     <button
//                       onClick={() => setSelectedBooking(b)}
//                       className="bg-blue-800 hover:bg-blue-900 text-white px-3 py-1 rounded-md text-sm transition-all duration-200"
//                     >
//                       View Details
//                     </button>
//                     <button
//                       onClick={() => handleDelete(b._id)}
//                       className="text-red-600 hover:text-red-800"
//                     >
//                       <FaTrashAlt size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7" className="text-center p-4 text-gray-700">
//                   No bookings found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for details */}
//       {selectedBooking && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg w-[400px] shadow-2xl relative animate-fadeIn">
//             <h3 className="text-xl font-bold mb-4 text-blue-800 border-b pb-2">
//               Booking Details
//             </h3>
//             <div className="space-y-2 text-gray-700 text-sm">
//               <p><strong>Name:</strong> {selectedBooking.name}</p>
//               <p><strong>Email:</strong> {selectedBooking.email}</p>
//               <p><strong>Mobile No:</strong> {selectedBooking.phone}</p>
//               <p><strong>Room Type:</strong> {selectedBooking.roomType}</p>
//               <p><strong>Rooms:</strong> {selectedBooking.roomCount}</p>
//               <p><strong>Guests:</strong> {selectedBooking.guestCount}</p>
//               <p><strong>Message:</strong> {selectedBooking.message || "N/A"}</p>
//               <p><strong>Status:</strong> {getStatusBadge(selectedBooking.status)}</p>
//               <p><strong>Check-In:</strong> {new Date(selectedBooking.checkIn).toLocaleString()}</p>
//               <p><strong>Check-Out:</strong> {new Date(selectedBooking.checkOut).toLocaleString()}</p>
//               <p className="font-semibold text-green-700">
//                 <strong>Total Price:</strong> ₹
//                 {selectedBooking.totalPrice?.toLocaleString("en-IN")}
//               </p>
//             </div>

//             <button
//               onClick={() => setSelectedBooking(null)}
//               className="mt-5 w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-md font-semibold transition-all duration-200"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RoomBookings;




import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaSearch, FaFilePdf } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";

const RoomBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all bookings
  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setFilteredBookings(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Search filter
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = bookings.filter(
      (b) =>
        b.name?.toLowerCase().includes(term) ||
        b.roomType?.toLowerCase().includes(term) ||
        b.status?.toLowerCase().includes(term) ||
        b.totalPrice?.toString().includes(term)
    );
    setFilteredBookings(filtered);
  }, [searchTerm, bookings]);

  // Delete booking
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setBookings(bookings.filter((b) => b._id !== id));
        alert("Booking deleted successfully!");
      } else {
        alert("Failed to delete booking.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Status badge styling
  const getStatusBadge = (status) => {
    let color = "bg-gray-300 text-gray-800";
    if (status === "confirmed") color = "bg-green-200 text-green-800";
    if (status === "pending") color = "bg-yellow-200 text-yellow-800";
    if (status === "canceled") color = "bg-red-200 text-red-800";
    if (status === "success") color = "bg-green-200 text-green-800";
    if (status === "failed") color = "bg-red-200 text-red-800";
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${color}`}>
        {status?.charAt(0).toUpperCase() + status?.slice(1) || "Pending"}
      </span>
    );
  };

  // Generate PDF Invoice
  const handleDownloadPDF = (b) => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });

    // Header
    doc.setFontSize(20);
    doc.text("Hotel Room Booking Invoice", 200, 60, { align: "center" });

    doc.setFontSize(12);
    doc.text("Hotel Horizon", 40, 100);
    doc.text("Bangalore, India", 40, 115);
    doc.text("Email: support@hotelhorizon.com", 40, 130);
    doc.text("Phone: +91 9876543210", 40, 145);

    // Line
    doc.setLineWidth(1);
    doc.line(40, 160, 555, 160);

    // Booking Info
    doc.setFontSize(14);
    doc.text("Booking Details:", 40, 190);

    doc.setFontSize(12);
    const details = [
      ["Booking ID", b._id || "—"],
      ["Name", b.name || "—"],
      ["Email", b.email || "—"],
      ["Mobile", b.phone || "—"],
      ["Room Type", b.roomType || "—"],
      ["Rooms", b.roomCount || "—"],
      ["Guests", b.guestCount || "—"],
      ["Check-In", b.checkIn ? new Date(b.checkIn).toLocaleString() : "—"],
      ["Check-Out", b.checkOut ? new Date(b.checkOut).toLocaleString() : "—"],
      ["Status", b.status || "Pending"],
      ["Payment Status", b.paymentStatus || "Pending"],
      ["Payment ID", b.paymentId || "—"],
    ];

    doc.autoTable({
      startY: 200,
      theme: "grid",
      body: details,
      styles: { fontSize: 11, cellPadding: 5 },
      columnStyles: { 0: { fontStyle: "bold" } },
    });

    // Price Section
    const finalY = doc.lastAutoTable.finalY + 20;
    doc.text("Payment Summary:", 40, finalY);

    const priceData = [
      ["Room Price", `₹${b.roomPrice?.toLocaleString("en-IN") || "0"}`],
      ["GST", `₹${b.gst?.toLocaleString("en-IN") || "0"}`],
      [
        "Total (with GST)",
        `₹${
          b.totalPriceWithGST?.toLocaleString("en-IN") ||
          b.totalPrice?.toLocaleString("en-IN") ||
          "0"
        }`,
      ],
    ];

    doc.autoTable({
      startY: finalY + 10,
      theme: "plain",
      body: priceData,
      styles: { fontSize: 12, cellPadding: 5 },
      columnStyles: { 0: { fontStyle: "bold" } },
    });

    // Footer
    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(10);
    doc.text(
      "Thank you for booking with Hotel Horizon! Have a pleasant stay.",
      200,
      pageHeight - 30,
      { align: "center" }
    );

    doc.save(`Booking_Invoice_${b.name}.pdf`);
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
        <h2 className="text-2xl font-bold text-blue-900">Booking Room</h2>
        <div className="relative w-full sm:w-80">
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search by name, room, price, status"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-800 focus:outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Room Type</th>
              <th className="p-2 border">Rooms</th>
              <th className="p-2 border">Guests</th>
              <th className="p-2 border">Total Price</th>
              <th className="p-2 border">Payment Status</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((b) => (
                <tr
                  key={b._id}
                  className="border text-center hover:bg-gray-100 transition-all"
                >
                  <td className="p-2">{b.name}</td>
                  <td className="p-2">{b.roomType}</td>
                  <td className="p-2">{b.roomCount}</td>
                  <td className="p-2">{b.guestCount}</td>
                  <td className="p-2 font-semibold text-green-700">
                    ₹{b.totalPrice?.toLocaleString("en-IN")}
                  </td>
                  <td className="p-2">{getStatusBadge(b.paymentStatus)}</td>
                  <td className="p-2">{getStatusBadge(b.status)}</td>
                  <td className="p-2 flex justify-center gap-2">
                    <button
                      onClick={() => setSelectedBooking({ ...b })}
                      className="bg-blue-800 hover:bg-blue-900 text-white px-3 py-1 rounded-md text-sm transition-all duration-200"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleDelete(b._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrashAlt size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center p-4 text-gray-700">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-end sm:items-center z-50 px-4 py-6">
          <div className="bg-white w-full sm:max-w-lg rounded-2xl shadow-2xl p-6 relative animate-slideUp">
            <h3 className="text-2xl font-bold mb-4 text-blue-800 border-b pb-3 text-center">
              Booking Details
            </h3>

            <div className="space-y-4 text-gray-800 text-sm max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <p><b>Name:</b> {selectedBooking.name}</p>
                <p><b>Email:</b> {selectedBooking.email}</p>
                <p><b>Mobile:</b> {selectedBooking.phone}</p>
                <p><b>Room Type:</b> {selectedBooking.roomType}</p>
                <p><b>Rooms:</b> {selectedBooking.roomCount}</p>
                <p><b>Guests:</b> {selectedBooking.guestCount}</p>
                <p className="sm:col-span-2"><b>Message:</b> {selectedBooking.message || "—"}</p>
              </div>

              <div className="border-t pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <p><b>Check-In:</b> {selectedBooking.checkIn ? new Date(selectedBooking.checkIn).toLocaleString() : "—"}</p>
                <p><b>Check-Out:</b> {selectedBooking.checkOut ? new Date(selectedBooking.checkOut).toLocaleString() : "—"}</p>
              </div>

              <div className="border-t pt-3">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">Payment Details</h4>
                <p><b>Booking ID:</b> {selectedBooking._id}</p>
                <p><b>Payment ID:</b> {selectedBooking.paymentId}</p>
                <p><b>Room Price:</b> ₹{selectedBooking.roomPrice?.toLocaleString("en-IN")}</p>
                <p><b>GST:</b> ₹{selectedBooking.gst?.toLocaleString("en-IN")}</p>
                <p className="font-semibold text-green-700">
                  Total (with GST): ₹
                  {selectedBooking.totalPriceWithGST?.toLocaleString("en-IN") ||
                    selectedBooking.totalPrice?.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => handleDownloadPDF(selectedBooking)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
              >
                <FaFilePdf /> Download Invoice
              </button>
              <button
                onClick={() => setSelectedBooking(null)}
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-md font-semibold transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomBookings;
