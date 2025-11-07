// import { useState } from "react";
// import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
// import BookingSidebar from "../../../components/Admin/BookingSidebar";

// export default function AllBookings() {
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [editingBooking, setEditingBooking] = useState(null);

//   const [bookings, setBookings] = useState([
//     {
//       id: 1,
//       name: "Rahul Sharma",
//       email: "rahul@gmail.com",
//       phone: "9876543210",
//       roomType: "Luxury",
//       guests: 2,
//       checkIn: "2025-10-12",
//       checkOut: "2025-10-14",
//       amount: 10000,
//       status: "Confirmed",
//     },
//     {
//       id: 2,
//       name: "Neha Gupta",
//       email: "neha@gmail.com",
//       phone: "9876500000",
//       roomType: "Deluxe",
//       guests: 1,
//       checkIn: "2025-10-20",
//       checkOut: "2025-10-22",
//       amount: 7000,
//       status: "Pending",
//     },
//     {
//       id: 3,
//       name: "Abhishek",
//       email: "abhi@gmail.com",
//       phone: "9876500000",
//       roomType: "Deluxe",
//       guests: 1,
//       checkIn: "2025-10-20",
//       checkOut: "2025-10-22",
//       amount: 7000,
//       status: "Pending",
//     },
//     {
//       id: 4,
//       name: "Raviranjan",
//       email: "ravi@gmail.com",
//       phone: "9876500000",
//       roomType: "Deluxe",
//       guests: 1,
//       checkIn: "2025-10-20",
//       checkOut: "2025-10-22",
//       amount: 7000,
//       status: "Pending",
//     },
//   ]);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     roomType: "",
//     guests: 1,
//     checkIn: "",
//     checkOut: "",
//     amount: "",
//     status: "Pending",
//   });

//   //  Open for editing
//   const handleEdit = (booking) => {
//     setFormData(booking);
//     setEditingBooking(booking);
//     setIsSidebarOpen(true);
//   };

//   //  Delete booking
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this booking?")) {
//       setBookings(bookings.filter((b) => b.id !== id));
//     }
//   };

//   //  Save (Add / Update)
//   const handleSave = (e) => {
//     e.preventDefault();

//     if (
//       !formData.name ||
//       !formData.email ||
//       !formData.roomType ||
//       !formData.checkIn ||
//       !formData.checkOut
//     ) {
//       return alert("Please fill all fields");
//     }

//     if (editingBooking) {
//       //  Update booking
//       setBookings((prev) =>
//         prev.map((b) =>
//           b.id === editingBooking.id ? { ...formData, id: b.id } : b
//         )
//       );
//     } else {
//       //  Add new booking
//       setBookings((prev) => [...prev, { ...formData, id: Date.now() }]);
//     }

//     //  Reset + Close
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       roomType: "",
//       guests: 1,
//       checkIn: "",
//       checkOut: "",
//       amount: "",
//       status: "Pending",
//     });
//     setEditingBooking(null);
//     setIsSidebarOpen(false);
//   };

//   //  Filter bookings
//   const filteredBookings = bookings.filter((b) => {
//     const matchesSearch =
//       b.name.toLowerCase().includes(search.toLowerCase()) ||
//       b.roomType.toLowerCase().includes(search.toLowerCase());
//     const matchesStatus =
//       statusFilter === "All" ? true : b.status === statusFilter;
//     return matchesSearch && matchesStatus;
//   });

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen relative">
//       {/* Top Controls */}
//       <div className="flex justify-end items-center gap-3 mb-6">
//         {/* Search Box */}
//         <div className="relative w-64">
//           <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search booking..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Status Filter */}
//         <select
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//           className="border px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="All">All</option>
//           <option value="Confirmed">Confirmed</option>
//           <option value="Pending">Pending</option>
//           <option value="Cancelled">Cancelled</option>
//         </select>
//       </div>

//       {/* Bookings Table */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200 text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               {[
//                 "Guest Name",
//                 "Email",
//                 "Phone",
//                 "Room Type",
//                 "Guests",
//                 "Check-in",
//                 "Check-out",
//                 "Amount",
//                 "Status",
//                 "Actions",
//               ].map((head) => (
//                 <th
//                   key={head}
//                   className="px-4 py-2 text-left text-gray-700 font-semibold uppercase tracking-wider border-b border-gray-300 text-sm"
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
//                   key={b.id}
//                   className={
//                     idx % 2 === 0
//                       ? "bg-white hover:bg-gray-50"
//                       : "bg-gray-50 hover:bg-gray-100"
//                   }
//                 >
//                   <td className="px-4 py-2">{b.name}</td>
//                   <td className="px-4 py-2">{b.email}</td>
//                   <td className="px-4 py-2">{b.phone}</td>
//                   <td className="px-4 py-2">{b.roomType}</td>
//                   <td className="px-4 py-2">{b.guests}</td>
//                   <td className="px-4 py-2">{b.checkIn}</td>
//                   <td className="px-4 py-2">{b.checkOut}</td>
//                   <td className="px-4 py-2">₹{b.amount}</td>
//                   <td className="px-4 py-2">{b.status}</td>
//                   <td className="px-4 py-2 flex justify-center gap-2">
//                     <button
//                       onClick={() => handleEdit(b)}
//                       className="text-gray-600 hover:text-blue-600 transition-colors"
//                     >
//                       <FaEdit size={16} />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(b.id)}
//                       className="text-gray-600 hover:text-red-600 transition-colors"
//                     >
//                       <FaTrash size={16} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="10" className="text-center py-4 text-gray-500">
//                   No bookings found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Sidebar (Edit/Add Booking) */}
//       <BookingSidebar
//         isOpen={isSidebarOpen}
//         onClose={() => setIsSidebarOpen(false)}
//         formData={formData}
//         setFormData={setFormData}
//         onSubmit={handleSave} 
//       />
//     </div>
//   );
// }




import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import BookingSidebar from "../../../components/Admin/BookingSidebar";

export default function AllBookings() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null);
  const [bookings, setBookings] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
    guests: 1,
    checkIn: "",
    checkOut: "",
    amount: "",
    status: "Pending",
  });

  //  Fetch Bookings from Backend
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/bookings");
        setBookings(res.data);
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

  //  Edit
  const handleEdit = (booking) => {
    setFormData(booking);
    setEditingBooking(booking);
    setIsSidebarOpen(true);
  };

  //  Delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        await axios.delete(`http://localhost:5000/api/bookings/${id}`);
        setBookings(bookings.filter((b) => b._id !== id));
      } catch (err) {
        console.error("Error deleting booking:", err);
      }
    }
  };

  //  Save
 const handleSave = async (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.roomType ||
    !formData.checkIn ||
    !formData.checkOut
  ) {
    return alert("Please fill all fields");
  }

  try {
    if (editingBooking) {
      // 🔹 Update in backend
      const res = await axios.put(
        `http://localhost:5000/api/bookings/${editingBooking._id}`,
        formData
      );
      // 🔹 Update in local state
      setBookings((prev) =>
        prev.map((b) => (b._id === res.data._id ? res.data : b))
      );
    } else {
      // Optional: Create new booking (if ever needed)
      const res = await axios.post(
        "http://localhost:5000/api/bookings",
        formData
      );
      setBookings((prev) => [...prev, res.data]);
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      roomType: "",
      guests: 1,
      checkIn: "",
      checkOut: "",
      amount: "",
      status: "Pending",
    });
    setEditingBooking(null);
    setIsSidebarOpen(false);
  } catch (err) {
    console.error("Error saving booking:", err);
    alert("Failed to save booking");
  }
};


  // 🔍 Filter Bookings
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
              className="w-full pl-8 pr-2 py-1.5 border border-gray-300 rounded-md text-xs focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border px-2 py-1.5 rounded-md text-xs focus:ring-1 focus:ring-blue-500"
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
          <thead className="bg-black-100">
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
                  className="px-3 py-2 text-left text-black font-bold uppercase tracking-wider border-b border-gray-300 text-[11px]"
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

                  {/*  Payment Status fix */}
                  <td className="px-3 py-2 font-semibold">
                    {b.paymentStatus === "paid" ? (
                      <span className="text-green-600">Confirmed</span>
                    ) : (
                      <span className="text-yellow-600">Pending</span>
                    )}
                  </td>

                  <td className="px-3 py-2 flex justify-center gap-1">
                    <button
                      onClick={() => handleEdit(b)}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <FaEdit size={12} />
                    </button>
                    <button
                      onClick={() => handleDelete(b._id)}
                      className="text-gray-600 hover:text-red-600 transition-colors"
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

      {/* Sidebar */}
      <BookingSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSave}
      />
    </div>
  );
}
