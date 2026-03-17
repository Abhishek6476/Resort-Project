
// import { useState, useEffect } from "react";
// import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
// import axios from "axios";

// export default function AllEvents() {
//   const [events, setEvents] = useState([]);
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");

//   // ✅ Fetch all events from backend when page loads
//   useEffect(() => {
//   const fetchEvents = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/all");
//       setEvents(res.data);
//     } catch (err) {
//       console.error("Error fetching events:", err);
//     }
//   };
//   fetchEvents();
// }, []);

//   // ✅ Filter logic
// const filteredEvents = events.filter((e) => {
//   const matchesSearch =
//     e.name.toLowerCase().includes(search.toLowerCase()) ||
//     e.occasion.toLowerCase().includes(search.toLowerCase()); 
//   const matchesStatus =
//     statusFilter === "All" ? true : e.status === statusFilter;
//   return matchesSearch && matchesStatus;
// });


//   // ✅ Delete Event
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this enquiry?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/events/${id}`);
//         setEvents(events.filter((e) => e._id !== id));
//       } catch (error) {
//         console.error("Error deleting event:", error);
//       }
//     }
//   };

//   // ✅ Update Status (Pending ↔ Contacted)
// const handleStatusChange = async (id, currentStatus) => {
//   const newStatus = currentStatus === "Pending" ? "Contacted" : "Pending";
//   try {
//     const res = await axios.patch(`http://localhost:5000/api/events/${id}`, { status: newStatus });
//     const updatedEvent = res.data.event;
//     setEvents(events.map((e) => (e._id === id ? updatedEvent : e)));
//   } catch (error) {
//     console.error("Error updating status:", error);
//     alert("Status update failed. Try again!");
//   }
// };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* 🔍 Top Controls */}
//       <div className="flex justify-end items-center gap-3 mb-6">
//         <div className="relative w-64">
//           <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search by name or event type..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />
//         </div>

//         <select
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//           className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//         >
//           <option value="All">All</option>
//           <option value="Pending">Pending</option>
//           <option value="Contacted">Contacted</option>
//         </select>
//       </div>

//       {/* 📋 Events Table */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200 text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               {[
//                 "Name",
//                 "Email",
//                 "Phone",
//                 "Event Type",
//                 "Date",
//                 "Guests",
//                 "Status",
//                 "Actions",
//               ].map((head) => (
//                 <th
//                   key={head}
//                   className="px-4 py-2 text-left text-gray-700 font-semibold uppercase border-b border-gray-300 text-sm"
//                 >
//                   {head}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {filteredEvents.length > 0 ? (
//               filteredEvents.map((e, idx) => (
//                 <tr
//                   key={e._id}
//                   className={
//                     idx % 2 === 0
//                       ? "bg-white hover:bg-gray-50"
//                       : "bg-gray-50 hover:bg-gray-100"
//                   }
//                 >
//                   <td className="px-4 py-2">{e.name}</td>
//                   <td className="px-4 py-2">{e.email}</td>
//                   <td className="px-4 py-2">{e.phone}</td>
//                   <td className="px-4 py-2">{e.occasion}</td>
//                   <td className="px-4 py-2">{e.date}</td>
//                   <td className="px-4 py-2">{e.guests}</td>
//                   <td className="px-4 py-2">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                         e.status === "Contacted"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-yellow-100 text-yellow-700"
//                       }`}
//                     >
//                       {e.status}
//                     </span>
//                   </td>
//                   <td className="px-4 py-2 flex gap-2">
//                     <button
//                       onClick={() => handleStatusChange(e._id, e.status)}
//                       className="text-gray-600 hover:text-blue-600 transition"
//                     >
//                       <FaEdit size={16} />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(e._id)}
//                       className="text-gray-600 hover:text-red-600 transition"
//                     >
//                       <FaTrash size={16} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="8" className="text-center py-4 text-gray-500">
//                   No enquiries found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

//new 


// import { useState, useEffect } from "react";
// import { FaTrash, FaDownload } from "react-icons/fa";
// import axios from "axios";

// export default function AdminEvents() {
//   const [events, setEvents] = useState([]);
//   const [search, setSearch] = useState("");

//   // ✅ Fetch all bookings from backend
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/events/bookings");
//         setEvents(res.data);
//       } catch (err) {
//         console.error("Error fetching events:", err);
//       }
//     };
//     fetchEvents();
//   }, []);

//   // ✅ Filter by name or event type
//   const filteredEvents = events.filter(
//     (e) =>
//       e.name.toLowerCase().includes(search.toLowerCase()) ||
//       e.eventType.toLowerCase().includes(search.toLowerCase())
//   );

//   // ✅ Delete booking
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this booking?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/events/bookings/${id}`);
//         setEvents(events.filter((e) => e._id !== id));
//       } catch (err) {
//         console.error("Error deleting booking:", err);
//       }
//     }
//   };

//   // ✅ PDF URL
//   const getPdfUrl = (id) => {
//     return `http://localhost:5000/uploads/event-invoices/event_${id}.pdf`;
//   };

//   // ✅ Calculate Paid & Remaining same as PDF logic
//   const calculatePaid = (booking) => {
//     if (booking.paymentType === "full") return booking.totalAmount || 0;
//     if (booking.paymentType === "advance") return Math.round((booking.totalAmount || 0) * 0.3);
//     return booking.amountPaid || 0; // fallback
//   };

//   const calculateRemaining = (booking) => {
//     return (booking.totalAmount || 0) - calculatePaid(booking);
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* 🔍 Search */}
//       <div className="flex justify-end mb-4">
//         <div className="relative w-64">
//           <input
//             type="text"
//             placeholder="Search by name or event type..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full pl-3 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       </div>

//       {/* 📋 Table */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200 text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               {[
//                 "Name",
//                 "Email",
//                 "Phone",
//                 "Event Type",
//                 "Date",
//                 "Paid Amount",
//                 "Remaining Amount",
//                 "Actions",
//               ].map((head) => (
//                 <th
//                   key={head}
//                   className="px-4 py-2 text-left text-gray-700 font-semibold uppercase border-b border-gray-300"
//                 >
//                   {head}
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-200">
//             {filteredEvents.length > 0 ? (
//               filteredEvents.map((e, idx) => {
//                 const paid = calculatePaid(e);
//                 const remaining = calculateRemaining(e);

//                 return (
//                   <tr
//                     key={e._id}
//                     className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                   >
//                     <td className="px-4 py-2">{e.name}</td>
//                     <td className="px-4 py-2">{e.email}</td>
//                     <td className="px-4 py-2">{e.phone}</td>
//                     <td className="px-4 py-2">{e.eventType}</td>
//                     <td className="px-4 py-2">
//                       {new Date(e.eventDate).toLocaleDateString()}
//                     </td>
//                     <td className="px-4 py-2">₹{paid}</td>
//                     <td className="px-4 py-2">₹{remaining}</td>

//                     {/* Actions */}
//                     <td className="px-4 py-2 flex items-center gap-2">
//                       {/* Download PDF */}
//                       <a
//                         href={getPdfUrl(e._id)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 hover:text-blue-800"
//                       >
//                         <FaDownload />
//                       </a>

//                       {/* Delete */}
//                       <button
//                         onClick={() => handleDelete(e._id)}
//                         className="text-red-600 hover:text-red-800"
//                       >
//                         <FaTrash />
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td colSpan="8" className="text-center py-4 text-gray-500">
//                   No bookings found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import { FaTrash, FaDownload } from "react-icons/fa";
// import axios from "axios";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// export default function AdminEvents() {
//   const [events, setEvents] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);

//   // ✅ Fetch all bookings
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/events/bookings");
//         setEvents(res.data);
//       } catch (err) {
//         console.error("Error fetching events:", err);
//       }
//     };
//     fetchEvents();
//   }, []);

//   // ✅ Search filter
//   const filteredEvents = events.filter(
//     (e) =>
//       e.name.toLowerCase().includes(search.toLowerCase()) ||
//       e.eventType.toLowerCase().includes(search.toLowerCase())
//   );

//   // ✅ Delete booking
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this booking?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/events/bookings/${id}`);
//         setEvents(events.filter((e) => e._id !== id));
//       } catch (err) {
//         console.error("Error deleting booking:", err);
//       }
//     }
//   };

//   // ✅ PDF URL
//   const getPdfUrl = (id) => {
//     return `http://localhost:5000/uploads/event-invoices/event_${id}.pdf`;
//   };

//   // ✅ Paid / Remaining calculation (same as PDF)
//   const calculatePaid = (booking) => {
//     if (booking.paymentType === "full") return booking.totalAmount || 0;
//     if (booking.paymentType === "advance")
//       return Math.round((booking.totalAmount || 0) * 0.3);
//     return booking.amountPaid || 0;
//   };

//   const calculateRemaining = (booking) => {
//     return (booking.totalAmount || 0) - calculatePaid(booking);
//   };

//   // ✅ Download Excel (ALL BOOKINGS)
//   const downloadExcel = () => {
//     const data = events.map((e) => ({
//       Name: e.name,
//       Email: e.email,
//       Phone: e.phone,
//       "Event Type": e.eventType,
//       Date: new Date(e.eventDate).toLocaleDateString(),
//       "Paid Amount": calculatePaid(e),
//       "Remaining Amount": calculateRemaining(e),
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Event Bookings");

//     const excelBuffer = XLSX.write(workbook, {
//       bookType: "xlsx",
//       type: "array",
//     });

//     const blob = new Blob([excelBuffer], {
//       type: "application/octet-stream",
//     });

//     saveAs(blob, "Event_Bookings.xlsx");
//   };

//   // ✅ Download ALL PDFs
//   const downloadPDFs = () => {
//     events.forEach((e) => {
//       window.open(getPdfUrl(e._id), "_blank");
//     });
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* 🔍 Search + Download */}
//       <div className="flex justify-end mb-4 items-center gap-2 relative">
//         <div className="relative w-64">
//           <input
//             type="text"
//             placeholder="Search by name or event type..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full pl-3 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* ⬇ Download Button */}
//         <div className="relative">
//           <button
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
//           >
//             Download <FaDownload />
//           </button>

//           {showDropdown && (
//             <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow z-10">
//               <button
//                 onClick={() => {
//                   downloadPDFs();
//                   setShowDropdown(false);
//                 }}
//                 className="w-full text-left px-4 py-2 hover:bg-gray-100"
//               >
//                 PDF
//               </button>
//               <button
//                 onClick={() => {
//                   downloadExcel();
//                   setShowDropdown(false);
//                 }}
//                 className="w-full text-left px-4 py-2 hover:bg-gray-100"
//               >
//                 Excel
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* 📋 Table */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200 text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               {[
//                 "Name",
//                 "Email",
//                 "Phone",
//                 "Event Type",
//                 "Date",
//                 "Paid Amount",
//                 "Remaining Amount",
//                 "Actions",
//               ].map((head) => (
//                 <th
//                   key={head}
//                   className="px-4 py-2 text-left text-gray-700 font-semibold uppercase border-b"
//                 >
//                   {head}
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-200">
//             {filteredEvents.length > 0 ? (
//               filteredEvents.map((e, idx) => {
//                 const paid = calculatePaid(e);
//                 const remaining = calculateRemaining(e);

//                 return (
//                   <tr
//                     key={e._id}
//                     className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                   >
//                     <td className="px-4 py-2">{e.name}</td>
//                     <td className="px-4 py-2">{e.email}</td>
//                     <td className="px-4 py-2">{e.phone}</td>
//                     <td className="px-4 py-2">{e.eventType}</td>
//                     <td className="px-4 py-2">
//                       {new Date(e.eventDate).toLocaleDateString()}
//                     </td>
//                     <td className="px-4 py-2">₹{paid}</td>
//                     <td className="px-4 py-2">₹{remaining}</td>

//                     <td className="px-4 py-2 flex items-center gap-2">
//                       <a
//                         href={getPdfUrl(e._id)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 hover:text-blue-800"
//                       >
//                         <FaDownload />
//                       </a>
//                       <button
//                         onClick={() => handleDelete(e._id)}
//                         className="text-red-600 hover:text-red-800"
//                       >
//                         <FaTrash />
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td colSpan="8" className="text-center py-4 text-gray-500">
//                   No bookings found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


//new

// import { useState, useEffect } from "react";
// import { FaTrash, FaDownload } from "react-icons/fa";
// import axios from "axios";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// export default function AdminEvents() {
//   const [events, setEvents] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);

//   //  Delete modal states (NEW – logic safe)
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);

//   // Fetch all bookings
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/events/bookings");
//         setEvents(res.data);
//       } catch (err) {
//         console.error("Error fetching events:", err);
//       }
//     };
//     fetchEvents();
//   }, []);

//   //  Search filter
//   const filteredEvents = events.filter(
//     (e) =>
//       e.name.toLowerCase().includes(search.toLowerCase()) ||
//       e.eventType.toLowerCase().includes(search.toLowerCase())
//   );

//   //  Open delete modal (instead of window.confirm)
//   const openDeleteModal = (id) => {
//     setDeleteId(id);
//     setShowDeleteModal(true);
//   };

//   // Confirm delete (same API + logic)
//   const confirmDelete = async () => {
//     try {
//       await axios.delete(
//         `http://localhost:5000/api/events/bookings/${deleteId}`
//       );
//       setEvents(events.filter((e) => e._id !== deleteId));
//     } catch (err) {
//       console.error("Error deleting booking:", err);
//     } finally {
//       setShowDeleteModal(false);
//       setDeleteId(null);
//     }
//   };

//   //  Cancel delete
//   const cancelDelete = () => {
//     setShowDeleteModal(false);
//     setDeleteId(null);
//   };

//   //  PDF URL
//   const getPdfUrl = (id) =>
//     `http://localhost:5000/uploads/event-invoices/event_${id}.pdf`;

//   //  Paid / Remaining calculation (UNCHANGED)
//   const calculatePaid = (booking) => {
//     if (booking.paymentType === "full") return booking.totalAmount || 0;
//     if (booking.paymentType === "advance")
//       return Math.round((booking.totalAmount || 0) * 0.3);
//     return booking.amountPaid || 0;
//   };

//   const calculateRemaining = (booking) =>
//     (booking.totalAmount || 0) - calculatePaid(booking);

//   //  Download Excel 
//   const downloadExcel = () => {
//     const data = events.map((e) => ({
//       Name: e.name,
//       Email: e.email,
//       Phone: e.phone,
//       "Event Type": e.eventType,
//       Date: new Date(e.eventDate).toLocaleDateString(),
//       "Paid Amount": calculatePaid(e),
//       "Remaining Amount": calculateRemaining(e),
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Event Bookings");

//     const excelBuffer = XLSX.write(workbook, {
//       bookType: "xlsx",
//       type: "array",
//     });

//     saveAs(new Blob([excelBuffer]), "Event_Bookings.xlsx");
//   };

//   //  Download ALL PDFs 
//   const downloadPDFs = () => {
//     events.forEach((e) => {
//       window.open(getPdfUrl(e._id), "_blank");
//     });
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/*  Search + Download */}
//       <div className="flex justify-end mb-4 items-center gap-2 relative">
//         <input
//           type="text"
//           placeholder="Search by name or event type..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-64 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//         />

//         <div className="relative">
//           <button
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
//           >
//             Download <FaDownload />
//           </button>

//           {showDropdown && (
//             <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow z-10">
//               <button
//                 onClick={() => {
//                   downloadPDFs();
//                   setShowDropdown(false);
//                 }}
//                 className="w-full px-4 py-2 text-left hover:bg-gray-100"
//               >
//                 PDF
//               </button>
//               <button
//                 onClick={() => {
//                   downloadExcel();
//                   setShowDropdown(false);
//                 }}
//                 className="w-full px-4 py-2 text-left hover:bg-gray-100"
//               >
//                 Excel
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/*  Table */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200 text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               {[
//                 "Name",
//                 "Email",
//                 "Phone",
//                 "Event Type",
//                 "Date",
//                 "Paid Amount",
//                 "Remaining Amount",
//                 "Actions",
//               ].map((h) => (
//                 <th key={h} className="px-4 py-2 text-left font-semibold">
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-200">
//             {filteredEvents.map((e, i) => {
//               const paid = calculatePaid(e);
//               const remaining = calculateRemaining(e);

//               return (
//                 <tr key={e._id} className={i % 2 ? "bg-gray-50" : ""}>
//                   <td className="px-4 py-2">{e.name}</td>
//                   <td className="px-4 py-2">{e.email}</td>
//                   <td className="px-4 py-2">{e.phone}</td>
//                   <td className="px-4 py-2">{e.eventType}</td>
//                   <td className="px-4 py-2">
//                     {new Date(e.eventDate).toLocaleDateString()}
//                   </td>
//                   <td className="px-4 py-2">₹{paid}</td>
//                   <td className="px-4 py-2">₹{remaining}</td>
//                   <td className="px-4 py-2 flex gap-3">
//                     <a
//                       href={getPdfUrl(e._id)}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="text-blue-600"
//                     >
//                       <FaDownload />
//                     </a>
//                     <button
//                       onClick={() => openDeleteModal(e._id)}
//                       className="text-red-600"
//                     >
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       {/*  DELETE CONFIRM MODAL (SAME AS OTHER PAGES) */}
//       {showDeleteModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl p-6 w-96 shadow-lg">
//             <h2 className="text-lg font-semibold text-gray-800 mb-3">
//               Delete Booking?
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Are you sure you want to delete this booking?
//             </p>

//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={cancelDelete}
//                 className="px-4 py-2 border rounded-lg"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmDelete}
//                 className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState, useEffect, useRef } from "react";
import { FaTrash, FaDownload } from "react-icons/fa";
import axios from "axios";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Delete modal states
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // NEW: dropdown ref
  const dropdownRef = useRef(null);

  // Fetch all bookings
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/events/bookings");
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
    fetchEvents();
  }, []);

  // NEW: close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  // Search filter
  const filteredEvents = events.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.eventType.toLowerCase().includes(search.toLowerCase())
  );

  // Open delete modal
  const openDeleteModal = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  // Confirm delete
  const confirmDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/events/bookings/${deleteId}`
      );
      setEvents(events.filter((e) => e._id !== deleteId));
    } catch (err) {
      console.error("Error deleting booking:", err);
    } finally {
      setShowDeleteModal(false);
      setDeleteId(null);
    }
  };

  // Cancel delete
  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  // PDF URL
  const getPdfUrl = (id) =>
    `http://localhost:5000/uploads/event-invoices/event_${id}.pdf`;

  // Paid / Remaining calculation
  const calculatePaid = (booking) => {
    if (booking.paymentType === "full") return booking.totalAmount || 0;
    if (booking.paymentType === "advance")
      return Math.round((booking.totalAmount || 0) * 0.3);
    return booking.amountPaid || 0;
  };

  const calculateRemaining = (booking) =>
    (booking.totalAmount || 0) - calculatePaid(booking);

  // Download Excel
  const downloadExcel = () => {
    const data = events.map((e) => ({
      Name: e.name,
      Email: e.email,
      Phone: e.phone,
      "Event Type": e.eventType,
      Date: new Date(e.eventDate).toLocaleDateString(),
      "Paid Amount": calculatePaid(e),
      "Remaining Amount": calculateRemaining(e),
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Event Bookings");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    saveAs(new Blob([excelBuffer]), "Event_Bookings.xlsx");
  };

  // Download all PDFs
  const downloadPDFs = () => {
    events.forEach((e) => {
      window.open(getPdfUrl(e._id), "_blank");
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search + Download */}
      <div className="flex justify-end mb-4 items-center gap-2 relative">
        <input
          type="text"
          placeholder="Search by name or event type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-64 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            Download <FaDownload />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow z-10">
              <button
                onClick={() => {
                  downloadPDFs();
                  setShowDropdown(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                PDF
              </button>
              <button
                onClick={() => {
                  downloadExcel();
                  setShowDropdown(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Excel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              {[
                "Name",
                "Email",
                "Phone",
                "Event Type",
                "Date",
                "Paid Amount",
                "Remaining Amount",
                "Actions",
              ].map((h) => (
                <th key={h} className="px-4 py-2 text-left font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {filteredEvents.map((e, i) => {
              const paid = calculatePaid(e);
              const remaining = calculateRemaining(e);

              return (
                <tr key={e._id} className={i % 2 ? "bg-gray-50" : ""}>
                  <td className="px-4 py-2">{e.name}</td>
                  <td className="px-4 py-2">{e.email}</td>
                  <td className="px-4 py-2">{e.phone}</td>
                  <td className="px-4 py-2">{e.eventType}</td>
                  <td className="px-4 py-2">
                    {new Date(e.eventDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">₹{paid}</td>
                  <td className="px-4 py-2">₹{remaining}</td>
                  <td className="px-4 py-2 flex gap-3">
                    <a
                      href={getPdfUrl(e._id)}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600"
                    >
                      <FaDownload />
                    </a>
                    <button
                      onClick={() => openDeleteModal(e._id)}
                      className="text-red-600"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Delete Confirm Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Delete Booking?
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this booking?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
