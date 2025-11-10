// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaEnvelope, FaPhoneAlt, FaUserAlt, FaClock } from "react-icons/fa";
// import { Loader2 } from "lucide-react";

// export default function AllContacts() {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//        const res = await axios.get("http://localhost:5000/api/contact");

//         setMessages(res.data);
//       } catch (err) {
//         console.error("Error fetching contact messages:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMessages();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-[70vh]">
//         <Loader2 className="animate-spin text-blue-800 w-8 h-8" />
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//         Contact Messages
//       </h2>

//       {messages.length === 0 ? (
//         <p className="text-gray-500 text-center">No messages yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {messages.map((msg) => (
//             <div
//               key={msg._id}
//               className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-all duration-200"
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <FaUserAlt className="text-blue-800" />
//                 <h3 className="font-semibold text-lg text-gray-700">
//                   {msg.name}
//                 </h3>
//               </div>

//               <div className="flex items-center gap-2 text-gray-600 mb-2">
//                 <FaEnvelope className="text-blue-800" /> {msg.email}
//               </div>

//               <div className="flex items-center gap-2 text-gray-600 mb-2">
//                 <FaPhoneAlt className="text-blue-800" /> {msg.phone}
//               </div>

//               <div className="flex items-center gap-2 text-gray-600 mb-4">
//                 <FaClock className="text-blue-800" />
//                 {new Date(msg.createdAt).toLocaleString()}
//               </div>

//               <p className="text-gray-700 bg-gray-50 p-3 rounded-md border border-gray-100">
//                 {msg.message}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }






import { useState, useEffect } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import axios from "axios";

export default function AllContacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  // ✅ Fetch all contacts from backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/contact");
        setContacts(res.data);
      } catch (err) {
        console.error("Error fetching contact messages:", err);
      }
    };
    fetchContacts();
  }, []);

  // ✅ Filter logic
  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      (c.message && c.message.toLowerCase().includes(search.toLowerCase()))
  );

  // ✅ Delete contact
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await axios.delete(`http://localhost:5000/api/contact/${id}`);
        setContacts(contacts.filter((c) => c._id !== id));
      } catch (error) {
        console.error("Error deleting contact:", error);
      }
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
            placeholder="Search by name, email or message..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* 📋 Contacts Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              {["Name", "Email", "Phone", "Message", "Date", "Actions"].map(
                (head) => (
                  <th
                    key={head}
                    className="px-4 py-2 text-left text-gray-700 font-semibold uppercase border-b border-gray-300 text-sm"
                  >
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((c, idx) => (
                <tr
                  key={c._id}
                  className={
                    idx % 2 === 0
                      ? "bg-white hover:bg-gray-50"
                      : "bg-gray-50 hover:bg-gray-100"
                  }
                >
                  <td className="px-4 py-2">{c.name}</td>
                  <td className="px-4 py-2">{c.email}</td>
                  <td className="px-4 py-2">{c.phone || "—"}</td>
                  <td className="px-4 py-2 max-w-xs truncate">{c.message}</td>
                  <td className="px-4 py-2">
                    {new Date(c.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(c._id)}
                      className="text-gray-600 hover:text-red-600 transition"
                    >
                      <FaTrash size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No contact messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
