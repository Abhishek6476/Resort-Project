

// //remove edit button

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaTrash, FaSearch } from "react-icons/fa";

// export default function AllBookings() {
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [bookings, setBookings] = useState([]);

//   //  Fetch Bookings from Backend
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/bookings");
//         setBookings([...res.data].reverse());
//       } catch (err) {
//         console.error("Error fetching bookings:", err);
//       }
//     };
//     fetchBookings();
//   }, []);

//   //  Total rooms booked
//   const totalRoomsBooked = bookings.reduce(
//     (sum, b) => sum + (b.roomsBooked || 1),
//     0
//   );

//   //  Delete Booking (KEEPING THIS)
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this booking?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/bookings/${id}`);
//         setBookings(bookings.filter((b) => b._id !== id));
//       } catch (err) {
//         console.error("Error deleting booking:", err);
//       }
//     }
//   };

//   // 🔍 Filter Bookings
//   const filteredBookings = bookings.filter((b) => {
//     const matchesSearch =
//       b.name?.toLowerCase().includes(search.toLowerCase()) ||
//       b.roomId?.name?.toLowerCase().includes(search.toLowerCase());

//     const matchesStatus =
//       statusFilter === "All" ? true : b.paymentStatus === statusFilter;

//     return matchesSearch && matchesStatus;
//   });

//   return (
//     <div className="p-4 bg-gray-50 min-h-screen relative text-sm">
      
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-lg font-semibold">
//           Bookings ({filteredBookings.length}) •{" "}
//           <span className="text-blue-600">
//             {totalRoomsBooked} Rooms Booked
//           </span>
//         </h1>

//         <div className="flex items-center gap-2">
//           {/* Search */}
//           <div className="relative w-52">
//             <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full pl-8 pr-2 py-1.5 border border-gray-300 rounded-md text-xs focus:ring-1 focus:ring-blue-500"
//             />
//           </div>

//           {/* Filter */}
//           <select
//             value={statusFilter}
//             onChange={(e) => setStatusFilter(e.target.value)}
//             className="border px-2 py-1.5 rounded-md text-xs focus:ring-1 focus:ring-blue-500"
//           >
//             <option value="All">All</option>
//             <option value="paid">Confirmed</option>
//             <option value="Pending">Pending</option>
//           </select>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200 text-xs">
//           <thead className="bg-black-100">
//             <tr>
//               {[
//                 "Name",
//                 "Email",
//                 "Phone",
//                 "Room",
//                 "Guests",
//                 "Check-in",
//                 "Check-out",
//                 "Amount",
//                 "Status",
//                 "Actions",
//               ].map((head) => (
//                 <th
//                   key={head}
//                   className="px-3 py-2 text-left text-black font-bold uppercase tracking-wider border-b border-gray-300 text-[11px]"
//                 >
//                   {head}
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-200">
//             {filteredBookings.length > 0 ? (
//               filteredBookings.map((b, idx) => (
//                 <tr
//                   key={b._id}
//                   className={
//                     idx % 2 === 0
//                       ? "bg-white hover:bg-gray-50"
//                       : "bg-gray-50 hover:bg-gray-100"
//                   }
//                 >
//                   <td className="px-3 py-2">{b.name}</td>
//                   <td className="px-3 py-2">{b.email}</td>
//                   <td className="px-3 py-2">{b.phone}</td>
//                   <td className="px-3 py-2">{b.roomId?.name || "N/A"}</td>
//                   <td className="px-3 py-2">{b.guests}</td>
//                   <td className="px-3 py-2">
//                     {new Date(b.checkIn).toLocaleDateString()}
//                   </td>
//                   <td className="px-3 py-2">
//                     {new Date(b.checkOut).toLocaleDateString()}
//                   </td>
//                   <td className="px-3 py-2">₹{b.amount}</td>

//                   {/* Payment Status */}
//                   <td className="px-3 py-2 font-semibold">
//                     {b.paymentStatus === "paid" ? (
//                       <span className="text-green-600">Confirmed</span>
//                     ) : (
//                       <span className="text-yellow-600">Pending</span>
//                     )}
//                   </td>

//                   {/* ONLY DELETE BUTTON - EDIT REMOVED */}
//                   <td className="px-3 py-2 flex justify-center gap-2">
//                     <button
//                       onClick={() => handleDelete(b._id)}
//                       className="text-gray-600 hover:text-red-600 transition-colors"
//                     >
//                       <FaTrash size={12} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="10" className="text-center py-3 text-gray-500">
//                   No bookings found
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

import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaSearch } from "react-icons/fa";

export default function AllBookings() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [bookings, setBookings] = useState([]);

  //  Delete modal states (SAME AS AdminEvents)
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  //  Fetch bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/bookings");
        setBookings([...res.data].reverse());
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };
    fetchBookings();
  }, []);

  //  Total rooms booked
  const totalRoomsBooked = bookings.reduce(
    (sum, b) => sum + (b.roomsBooked || 1),
    0
  );

  // ✅ Open delete modal
  const openDeleteModal = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  // ✅ Confirm delete
  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/bookings/${deleteId}`);
      setBookings(bookings.filter((b) => b._id !== deleteId));
    } catch (err) {
      console.error("Error deleting booking:", err);
    } finally {
      setShowDeleteModal(false);
      setDeleteId(null);
    }
  };

  // ❌ Cancel delete
  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  // 🔍 Filter bookings
  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.name?.toLowerCase().includes(search.toLowerCase()) ||
      b.roomId?.name?.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ? true : b.paymentStatus === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4 bg-gray-50 min-h-screen relative text-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">
          Bookings ({filteredBookings.length}) •{" "}
          <span className="text-blue-600">
            {totalRoomsBooked} Rooms Booked
          </span>
        </h1>

        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative w-52">
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-2 py-1.5 border border-gray-300 rounded-md text-xs"
            />
          </div>

          {/* Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border px-2 py-1.5 rounded-md text-xs"
          >
            <option value="All">All</option>
            <option value="paid">Confirmed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-xs">
          <thead>
            <tr>
              {[
                "Name",
                "Email",
                "Phone",
                "Room",
                "Guests",
                "Check-in",
                "Check-out",
                "Amount",
                "Status",
                "Actions",
              ].map((head) => (
                <th
                  key={head}
                  className="px-3 py-2 text-left font-bold text-[11px]"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {filteredBookings.length > 0 ? (
              filteredBookings.map((b, idx) => (
                <tr
                  key={b._id}
                  className={
                    idx % 2 === 0
                      ? "bg-white hover:bg-gray-50"
                      : "bg-gray-50 hover:bg-gray-100"
                  }
                >
                  <td className="px-3 py-2">{b.name}</td>
                  <td className="px-3 py-2">{b.email}</td>
                  <td className="px-3 py-2">{b.phone}</td>
                  <td className="px-3 py-2">{b.roomId?.name || "N/A"}</td>
                  <td className="px-3 py-2">{b.guests}</td>
                  <td className="px-3 py-2">
                    {new Date(b.checkIn).toLocaleDateString()}
                  </td>
                  <td className="px-3 py-2">
                    {new Date(b.checkOut).toLocaleDateString()}
                  </td>
                  <td className="px-3 py-2">₹{b.amount}</td>

                  <td className="px-3 py-2 font-semibold">
                    {b.paymentStatus === "paid" ? (
                      <span className="text-green-600">Confirmed</span>
                    ) : (
                      <span className="text-yellow-600">Pending</span>
                    )}
                  </td>

                  {/* DELETE ONLY */}
                  <td className="px-3 py-2 flex justify-center">
                    <button
                      onClick={() => openDeleteModal(b._id)}
                      className="text-gray-600 hover:text-red-600"
                    >
                      <FaTrash size={12} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center py-3 text-gray-500">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 🧾 DELETE CONFIRM MODAL (EXACT SAME AS AdminEvents) */}
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