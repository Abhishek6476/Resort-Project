

// import { useState, useEffect } from "react";
// import { FaSearch, FaTrash } from "react-icons/fa";
// import axios from "axios";

// export default function AllContacts() {
//   const [contacts, setContacts] = useState([]);
//   const [search, setSearch] = useState("");

//   // ✅ Fetch all contacts from backend
//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/contact");
//         setContacts(res.data);
//       } catch (err) {
//         console.error("Error fetching contact messages:", err);
//       }
//     };
//     fetchContacts();
//   }, []);

//   // ✅ Filter logic
//   const filteredContacts = contacts.filter(
//     (c) =>
//       c.name.toLowerCase().includes(search.toLowerCase()) ||
//       c.email.toLowerCase().includes(search.toLowerCase()) ||
//       (c.message && c.message.toLowerCase().includes(search.toLowerCase()))
//   );

//   // ✅ Delete contact
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this contact?")) {
//       try {
//         await axios.delete(`http://localhost:5000/api/contact/${id}`);
//         setContacts(contacts.filter((c) => c._id !== id));
//       } catch (error) {
//         console.error("Error deleting contact:", error);
//       }
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* 🔍 Top Controls */}
//       <div className="flex justify-end items-center gap-3 mb-6">
//         <div className="relative w-64">
//           <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search by name, email or message..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />
//         </div>
//       </div>

//       {/* 📋 Contacts Table */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200 text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               {["Name", "Email", "Phone", "Message", "Date", "Actions"].map(
//                 (head) => (
//                   <th
//                     key={head}
//                     className="px-4 py-2 text-left text-gray-700 font-semibold uppercase border-b border-gray-300 text-sm"
//                   >
//                     {head}
//                   </th>
//                 )
//               )}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {filteredContacts.length > 0 ? (
//               filteredContacts.map((c, idx) => (
//                 <tr
//                   key={c._id}
//                   className={
//                     idx % 2 === 0
//                       ? "bg-white hover:bg-gray-50"
//                       : "bg-gray-50 hover:bg-gray-100"
//                   }
//                 >
//                   <td className="px-4 py-2">{c.name}</td>
//                   <td className="px-4 py-2">{c.email}</td>
//                   <td className="px-4 py-2">{c.phone || "—"}</td>
//                   <td className="px-4 py-2 max-w-xs truncate">{c.message}</td>
//                   <td className="px-4 py-2">
//                     {new Date(c.createdAt).toLocaleDateString()}
//                   </td>
//                   <td className="px-4 py-2">
//                     <button
//                       onClick={() => handleDelete(c._id)}
//                       className="text-gray-600 hover:text-red-600 transition"
//                     >
//                       <FaTrash size={16} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center py-4 text-gray-500">
//                   No contact messages found.
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
import { FaSearch, FaTrash } from "react-icons/fa";
import axios from "axios";

export default function AllContacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  // 🔹 NEW STATES (popup only)
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

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

  // ✅ Filter logic (UNCHANGED)
  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      (c.message && c.message.toLowerCase().includes(search.toLowerCase()))
  );

  // ✅ Delete contact (API logic SAME)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      setContacts(contacts.filter((c) => c._id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
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
                  <td className="px-4 py-2 max-w-xs truncate">
                    {c.message}
                  </td>
                  <td className="px-4 py-2">
                    {new Date(c.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => {
                        setDeleteId(c._id);
                        setShowDeleteModal(true);
                      }}
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

      {/* 🔥 PROFESSIONAL DELETE POPUP (Light Dark Background) */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-[90%] max-w-md p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Delete Contact?
            </h3>

            <p className="text-gray-600 mb-6">
              Are you sure you want to permanently delete this contact message?
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  handleDelete(deleteId);
                  setShowDeleteModal(false);
                }}
                className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}