
//100 work
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  Search,
  User,
  Eye,
  Trash2,
  X,
  Pencil,
  Check,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
} from "lucide-react";

export default function ContactSidebar() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [editData, setEditData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch contacts
  const fetchContacts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contact/all");
      const data = await res.json();
      setContacts(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      toast.error("Failed to fetch contacts.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Delete contact
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this contact?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setContacts((prev) => prev.filter((c) => c._id !== id));
        toast.success("Contact deleted successfully!");
      } else {
        toast.error("Failed to delete contact.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error deleting contact.");
    }
  };

  // Edit contact
  const handleEdit = (contact) => {
    setEditData({ ...contact });
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/contact/${editData._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editData),
      });
      if (res.ok) {
        toast.success("Contact updated successfully!");
        setIsEditing(false);
        fetchContacts();
      } else {
        toast.error("Failed to update contact.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error updating contact.");
    }
  };

  // Filtered + paginated contacts
  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const paginatedContacts = filteredContacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); 
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500 animate-pulse">Loading...</p>
      </div>
    );

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Contact Submissions
          </h1>

          {/* 🔍 Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search by name, email, or phone..."
              className="pl-12 w-full bg-white border border-gray-200 rounded-full px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* 📋 Contact List */}
          <div className="space-y-4">
            {paginatedContacts.length === 0 ? (
              <p className="text-gray-500 text-center py-8 text-lg">
                No contacts found.
              </p>
            ) : (
              paginatedContacts.map((c) => (
                <div
                  key={c._id}
                  className="flex items-center justify-between bg-gradient-to-r from-white to-blue-50 border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-blue-800" />
                    <span className="font-semibold text-gray-800">{c.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedContact(c)}
                      className="flex items-center gap-1 bg-blue-800 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-900 transition"
                    >
                      <Eye className="w-4 h-4" /> View
                    </button>
                    <button
                      onClick={() => handleDelete(c._id)}
                      className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-sm hover:bg-red-600 transition"
                    >
                      <Trash2 className="w-4 h-4" /> Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* ⬅️➡️ Pagination Controls */}
          {filteredContacts.length > itemsPerPage && (
            <div className="flex justify-between items-center mt-8 px-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Previous
              </button>
              <span className="text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* 📄 View Modal */}
        {selectedContact && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl relative">
              <button
                onClick={() => setSelectedContact(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Details
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-600" /> {selectedContact.name}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-600" /> {selectedContact.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-green-600" /> {selectedContact.phone}
                </p>
                <p className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 text-purple-600 mt-1" />{" "}
                  {selectedContact.message}
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />{" "}
                  {new Date(selectedContact.createdAt).toLocaleString()}
                </p>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => {
                    handleEdit(selectedContact);
                    setSelectedContact(null);
                  }}
                  className="px-5 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 flex items-center gap-2 transition"
                >
                  <Pencil className="w-4 h-4" /> Edit
                </button>
                <button
                  onClick={() => setSelectedContact(null)}
                  className="px-5 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ✏️ Edit Modal */}
        {isEditing && editData && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl relative">
              <button
                onClick={() => setIsEditing(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Contact</h2>
              <form onSubmit={handleEditSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleEditChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleEditChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="phone"
                  value={editData.phone}
                  onChange={handleEditChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="Phone"
                />
                <textarea
                  name="message"
                  value={editData.message}
                  onChange={handleEditChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="Message"
                  rows="3"
                />
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-5 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 flex items-center gap-2 transition"
                  >
                    <Check className="w-4 h-4" /> Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}





//100 work code 

// import React, { useEffect, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Search,
//   User,
//   Eye,
//   Trash2,
//   X,
//   Pencil,
//   Check,
//   Mail,
//   Phone,
//   MessageSquare,
//   Calendar,
// } from "lucide-react";

// export default function ContactSidebar() {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [editData, setEditData] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   // Fetch contacts
//   const fetchContacts = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/contact/all");
//       const data = await res.json();
//       setContacts(data);
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching contacts:", err);
//       toast.error("Failed to fetch contacts.");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   // Delete contact
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this contact?")) return;
//     try {
//       const res = await fetch(`http://localhost:5000/api/contact/${id}`, {
//         method: "DELETE",
//       });
//       if (res.ok) {
//         setContacts(contacts.filter((c) => c._id !== id));
//         toast.success("Contact deleted successfully!");
//       } else {
//         toast.error("Failed to delete contact.");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Error deleting contact.");
//     }
//   };

//   // Edit contact
//   const handleEdit = (contact) => {
//     setEditData({ ...contact });
//     setIsEditing(true);
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !editData.name?.trim() ||
//       !editData.email?.trim() ||
//       !editData.phone?.trim()
//     ) {
//       toast.error("Please fill out all required fields.");
//       return;
//     }

//     if (!editData._id) {
//       toast.error("Missing contact ID.");
//       return;
//     }

//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/contact/${editData._id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(editData),
//         }
//       );

//       if (res.ok) {
//         toast.success("Contact updated successfully!");
//         setIsEditing(false);
//         fetchContacts();
//       } else {
//         const errorText = await res.text();
//         toast.error("Failed to update contact: " + errorText);
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Error updating contact.");
//     }
//   };

//   const filteredContacts = contacts.filter(
//     (c) =>
//       c.name.toLowerCase().includes(search.toLowerCase()) ||
//       new Date(c.createdAt).toLocaleDateString().includes(search)
//   );

//   if (loading)
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-lg text-gray-500 animate-pulse">Loading...</p>
//       </div>
//     );

//   return (
//     <>
//       <Toaster position="top-right" reverseOrder={false} />
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
//         <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-6">
//             Contact Submissions
//           </h1>

//           {/* Search */}
//           <div className="relative mb-6">
//             <Search className="absolute left-4 top-3 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search by name or date..."
//               className="pl-12 w-full bg-white border border-gray-200 rounded-full px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
//             />
//           </div>

//           {/* Contact List */}
//           <div className="space-y-4">
//             {filteredContacts.length === 0 ? (
//               <p className="text-gray-500 text-center py-8 text-lg">
//                 No contacts found.
//               </p>
//             ) : (
//               filteredContacts.map((c) => (
//                 <div
//                   key={c._id}
//                   className="flex justify-between items-center bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition"
//                 >
//                   {/* Date above name, fully centered block */}
//                   <div className="w-48 text-center">
//                     <div className="text-gray-500 font-medium">
//                       {new Date(c.createdAt).toLocaleDateString()}
//                     </div>
//                     <div className="flex justify-center items-center gap-2 font-semibold text-gray-800 mt-1">
//                       <User className="w-5 h-5 text-blue-600" /> {c.name}
//                     </div>
//                   </div>

//                   {/* Action buttons */}
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => setSelectedContact(c)}
//                       className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition"
//                     >
//                       <Eye className="w-4 h-4" /> View Details
//                     </button>
//                     <button
//                       onClick={() => handleDelete(c._id)}
//                       className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-sm hover:bg-red-600 transition"
//                     >
//                       <Trash2 className="w-4 h-4" /> Delete
//                     </button>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>

//         {/* View Details Modal */}
//         {selectedContact && (
//           <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//             <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl relative">
//               <button
//                 onClick={() => setSelectedContact(null)}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">
//                 Contact Details
//               </h2>
//               <div className="space-y-3 text-gray-700">
//                 <p className="flex items-center gap-2">
//                   <User className="w-4 h-4 text-blue-600" /> {selectedContact.name}
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <Mail className="w-4 h-4 text-gray-600" /> {selectedContact.email}
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <Phone className="w-4 h-4 text-green-600" /> {selectedContact.phone}
//                 </p>
//                 <p className="flex items-start gap-2">
//                   <MessageSquare className="w-4 h-4 text-purple-600 mt-1" />{" "}
//                   {selectedContact.message}
//                 </p>
//                 <p className="flex items-center gap-2 font-medium text-gray-500">
//                   <Calendar className="w-4 h-4" />{" "}
//                   {new Date(selectedContact.createdAt).toLocaleString()}
//                 </p>
//               </div>
//               <div className="flex justify-end gap-3 mt-6">
//                 <button
//                   onClick={() => {
//                     handleEdit(selectedContact);
//                     setSelectedContact(null);
//                   }}
//                   className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center gap-2 transition"
//                 >
//                   <Pencil className="w-4 h-4" /> Edit
//                 </button>
//                 <button
//                   onClick={() => setSelectedContact(null)}
//                   className="px-5 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Edit Modal */}
//         {isEditing && editData && (
//           <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//             <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl relative">
//               <button
//                 onClick={() => setIsEditing(false)}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">
//                 Edit Contact
//               </h2>
//               <form onSubmit={handleEditSubmit} className="space-y-4">
//                 <input
//                   type="text"
//                   name="name"
//                   value={editData.name}
//                   onChange={handleEditChange}
//                   className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
//                   placeholder="Name"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   value={editData.email}
//                   onChange={handleEditChange}
//                   className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
//                   placeholder="Email"
//                 />
//                 <input
//                   type="text"
//                   name="phone"
//                   value={editData.phone}
//                   onChange={handleEditChange}
//                   className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
//                   placeholder="Phone"
//                 />
//                 <textarea
//                   name="message"
//                   value={editData.message}
//                   onChange={handleEditChange}
//                   className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
//                   placeholder="Message"
//                   rows="3"
//                 />
//                 <div className="flex justify-end gap-3">
//                   <button
//                     type="button"
//                     onClick={() => setIsEditing(false)}
//                     className="px-5 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 flex items-center gap-2 transition"
//                   >
//                     <Check className="w-4 h-4" /> Save
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }


