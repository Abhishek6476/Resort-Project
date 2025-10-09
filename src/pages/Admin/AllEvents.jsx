// // src/pages/Admin/Events/AllEvents.jsx
// import { useState } from "react";
// import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";

// export default function AllEvents() {
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");

//   const [events, setEvents] = useState([
//     {
//       id: 1,
//       name: "Rohit Mehta",
//       email: "rohit@gmail.com",
//       phone: "9876543210",
//       eventType: "Wedding",
//       date: "2025-11-15",
//       guests: 200,
//       status: "Pending",
//     },
//     {
//       id: 2,
//       name: "Abhishek",
//       email: "abhi@gmail.com",
//       phone: "9876500000",
//       eventType: "Conference",
//       date: "2025-12-05",
//       guests: 50,
//       status: "Contacted",
//     },
//     {
//       id: 3,
//       name: "Raviranjan",
//       email: "ravi@gmail.com",
//       phone: "9876500000",
//       eventType: "Conference",
//       date: "2025-12-05",
//       guests: 50,
//       status: "Contacted",
//     },
//     {
//       id: 4,
//       name: "Raviranjan",
//       email: "ravi@gmail.com",
//       phone: "9876500000",
//       eventType: "Conference",
//       date: "2025-12-05",
//       guests: 50,
//       status: "Pending",
//     },
//   ]);

//   // Filter logic
//   const filteredEvents = events.filter((e) => {
//     const matchesSearch =
//       e.name.toLowerCase().includes(search.toLowerCase()) ||
//       e.eventType.toLowerCase().includes(search.toLowerCase());
//     const matchesStatus =
//       statusFilter === "All" ? true : e.status === statusFilter;
//     return matchesSearch && matchesStatus;
//   });

//   // Delete
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this enquiry?")) {
//       setEvents(events.filter((e) => e.id !== id));
//     }
//   };

//   // Mark as Contacted
//   const handleStatusChange = (id, newStatus) => {
//     setEvents(
//       events.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
//     );
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* Top Controls */}
//       <div className="flex justify-end items-center gap-3 mb-6">
//         {/* Search */}
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

//         {/* Filter */}
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

//       {/* Events Table */}
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
//                   key={e.id}
//                   className={
//                     idx % 2 === 0
//                       ? "bg-white hover:bg-gray-50"
//                       : "bg-gray-50 hover:bg-gray-100"
//                   }
//                 >
//                   <td className="px-4 py-2">{e.name}</td>
//                   <td className="px-4 py-2">{e.email}</td>
//                   <td className="px-4 py-2">{e.phone}</td>
//                   <td className="px-4 py-2">{e.eventType}</td>
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
//                       onClick={() =>
//                         handleStatusChange(
//                           e.id,
//                           e.status === "Pending" ? "Contacted" : "Pending"
//                         )
//                       }
//                       className="text-gray-600 hover:text-blue-600 transition"
//                     >
//                       <FaEdit size={16} />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(e.id)}
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


import { useState, useEffect } from "react";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

export default function AllEvents() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // ✅ Fetch all events from backend when page loads
  useEffect(() => {
  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/all");
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };
  fetchEvents();
}, []);

  // ✅ Filter logic
const filteredEvents = events.filter((e) => {
  const matchesSearch =
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.occasion.toLowerCase().includes(search.toLowerCase()); // <-- yaha change
  const matchesStatus =
    statusFilter === "All" ? true : e.status === statusFilter;
  return matchesSearch && matchesStatus;
});


  // ✅ Delete Event
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this enquiry?")) {
      try {
        await axios.delete(`http://localhost:5000/api/events/${id}`);
        setEvents(events.filter((e) => e._id !== id));
      } catch (error) {
        console.error("Error deleting event:", error);
      }
    }
  };

  // ✅ Update Status (Pending ↔ Contacted)
const handleStatusChange = async (id, currentStatus) => {
  const newStatus = currentStatus === "Pending" ? "Contacted" : "Pending";
  try {
    const res = await axios.patch(`http://localhost:5000/api/events/${id}`, { status: newStatus });
    const updatedEvent = res.data.event;
    setEvents(events.map((e) => (e._id === id ? updatedEvent : e)));
  } catch (error) {
    console.error("Error updating status:", error);
    alert("Status update failed. Try again!");
  }
};

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* 🔍 Top Controls */}
      <div className="flex justify-end items-center gap-3 mb-6">
        <div className="relative w-64">
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or event type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Contacted">Contacted</option>
        </select>
      </div>

      {/* 📋 Events Table */}
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
                "Guests",
                "Status",
                "Actions",
              ].map((head) => (
                <th
                  key={head}
                  className="px-4 py-2 text-left text-gray-700 font-semibold uppercase border-b border-gray-300 text-sm"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((e, idx) => (
                <tr
                  key={e._id}
                  className={
                    idx % 2 === 0
                      ? "bg-white hover:bg-gray-50"
                      : "bg-gray-50 hover:bg-gray-100"
                  }
                >
                  <td className="px-4 py-2">{e.name}</td>
                  <td className="px-4 py-2">{e.email}</td>
                  <td className="px-4 py-2">{e.phone}</td>
                  <td className="px-4 py-2">{e.occasion}</td>
                  <td className="px-4 py-2">{e.date}</td>
                  <td className="px-4 py-2">{e.guests}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        e.status === "Contacted"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {e.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleStatusChange(e._id, e.status)}
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      <FaEdit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(e._id)}
                      className="text-gray-600 hover:text-red-600 transition"
                    >
                      <FaTrash size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  No enquiries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
