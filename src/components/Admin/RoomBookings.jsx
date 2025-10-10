//simple code
// import React, { useEffect, useState } from "react";

// const RoomBookings = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/bookings")
//       .then((res) => res.json())
//       .then((data) => setBookings(data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">All Room Bookings</h2>
//       <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
//         <thead className="bg-blue-800 text-white">
//           <tr>
//             <th className="p-2 border">Name</th>
//             {/* <th className="p-2 border">Email</th> */}
//             <th className="p-2 border">Room Type</th>
//             <th className="p-2 border">Rooms</th>
//             <th className="p-2 border">Guests</th>
//             {/* <th className="p-2 border">Check-in</th>
//             <th className="p-2 border">Check-out</th> */}
//             <th className="p-2 border">Total Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((b) => (
//             <tr key={b._id} className="border text-center hover:bg-gray-100">
//               <td className="p-2">{b.name}</td>
//               <td className="p-2">{b.email}</td>
//               <td className="p-2">{b.roomType}</td>
//               <td className="p-2">{b.roomCount}</td>
//               <td className="p-2">{b.guestCount}</td>
//               <td className="p-2">{b.checkIn}</td>
//               <td className="p-2">{b.checkOut}</td>
//               <td className="p-2 font-semibold text-green-700">
//                 ₹{b.totalPrice?.toLocaleString("en-IN")}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RoomBookings;

import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaSearch } from "react-icons/fa";

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
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${color}`}>
        {status?.charAt(0).toUpperCase() + status?.slice(1) || "Pending"}
      </span>
    );
  };

  // Handle edit submit
  const handleEditSave = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/bookings/${selectedBooking._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(selectedBooking),
        }
      );
      if (res.ok) {
        const updated = await res.json();
        setBookings((prev) =>
          prev.map((b) => (b._id === updated._id ? updated : b))
        );
        alert("Booking updated successfully!");
        setSelectedBooking(null);
      } else {
        alert("Failed to update booking.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Room Bookings</h2>
        <div className="relative w-80">
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
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((b) => (
                <tr key={b._id} className="border text-center hover:bg-gray-100">
                  <td className="p-2">{b.name}</td>
                  <td className="p-2">{b.roomType}</td>
                  <td className="p-2">{b.roomCount}</td>
                  <td className="p-2">{b.guestCount}</td>
                  <td className="p-2 font-semibold text-green-700">
                    ₹{b.totalPrice?.toLocaleString("en-IN")}
                  </td>
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
                <td colSpan="7" className="text-center p-4 text-gray-700">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


      {/* Popup Modal for Details + Edit */}
      {selectedBooking && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
    <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-2xl relative animate-fadeIn mx-4 my-8">
      <h3 className="text-2xl font-bold mb-4 text-blue-800 border-b pb-3">
        Booking Details 
      </h3>

      <div className="space-y-4 text-gray-800 text-sm max-h-[70vh] overflow-y-auto pr-2">
        {[
          { label: "Name", field: "name" },
          { label: "Email", field: "email" },
          { label: "Phone", field: "phone" },
          { label: "Room Type", field: "roomType" },
          { label: "Room Count", field: "roomCount" },
          { label: "Guest Count", field: "guestCount" },
          { label: "Message", field: "message" },
        ].map(({ label, field }) => (
          <div key={field}>
            <label className="font-medium block mb-1">{label}</label>
            <input
              type="text"
              value={selectedBooking[field] || ""}
              onChange={(e) =>
                setSelectedBooking({
                  ...selectedBooking,
                  [field]: e.target.value,
                })
              }
              className="border border-gray-300 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <div>
          <label className="font-medium block mb-1">Status</label>
          <select
            value={selectedBooking.status || "pending"}
            onChange={(e) =>
              setSelectedBooking({
                ...selectedBooking,
                status: e.target.value,
              })
            }
            className="border border-gray-300 w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Check-In</p>
            <p className="font-semibold">
              {new Date(selectedBooking.checkIn).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Check-Out</p>
            <p className="font-semibold">
              {new Date(selectedBooking.checkOut).toLocaleString()}
            </p>
          </div>
        </div>

        <div>
          <p className="text-lg font-bold text-green-700">
            Total Price: ₹{selectedBooking.totalPrice?.toLocaleString("en-IN")}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleEditSave}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition"
        >
          Save Changes
        </button>
        <button
          onClick={() => setSelectedBooking(null)}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold transition"
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






// 100 current work code

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



// all ok status dropdown pending, conform

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

//   // Search logic
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

//   // Update booking status
//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/bookings/${id}/status`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       if (res.ok) {
//         const updatedBookings = bookings.map((b) =>
//           b._id === id ? { ...b, status: newStatus } : b
//         );
//         setBookings(updatedBookings);
//         alert("Status updated successfully!");
//       } else {
//         alert("Failed to update status.");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Badge color logic
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
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold text-blue-800">All Room Bookings</h2>
//         <div className="relative w-64">
//           <FaSearch className="absolute top-3 left-3 text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search by name, room, price, status..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-800 focus:outline-none"
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
//                   <td className="p-2">
//                     {getStatusBadge(b.status)}
//                     <select
//                       value={b.status || "pending"}
//                       onChange={(e) => handleStatusChange(b._id, e.target.value)}
//                       className="ml-2 border rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-blue-700"
//                     >
//                       <option value="pending">Pending</option>
//                       <option value="confirmed">Confirmed</option>
//                       <option value="canceled">Canceled</option>
//                     </select>
//                   </td>
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

//       {/* Modal */}
//       {selectedBooking && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg w-[400px] shadow-2xl relative animate-fadeIn">
//             <h3 className="text-xl font-bold mb-4 text-blue-800 border-b pb-2">
//               Booking Details
//             </h3>
//             <div className="space-y-2 text-gray-700 text-sm">
//               <p><strong>Name:</strong> {selectedBooking.name}</p>
//               <p><strong>Email:</strong> {selectedBooking.email}</p>
//               <p><strong>Mobile:</strong> {selectedBooking.phone}</p>
//               <p><strong>Room Type:</strong> {selectedBooking.roomType}</p>
//               <p><strong>Rooms:</strong> {selectedBooking.roomCount}</p>
//               <p><strong>Guests:</strong> {selectedBooking.guestCount}</p>
//               <p><strong>Message:</strong> {selectedBooking.message || "N/A"}</p>
//               <p><strong>Status:</strong> {getStatusBadge(selectedBooking.status)}</p>
//               <p><strong>Check-In:</strong> {new Date(selectedBooking.checkIn).toLocaleString()}</p>
//               <p><strong>Check-Out:</strong> {new Date(selectedBooking.checkOut).toLocaleString()}</p>
//               <p className="font-semibold text-green-700">
//                 <strong>Total Price:</strong> ₹{selectedBooking.totalPrice?.toLocaleString("en-IN")}
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
