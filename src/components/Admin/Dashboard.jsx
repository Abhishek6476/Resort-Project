
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch all contacts from backend
  const fetchContacts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contact/all");
      const data = await res.json();
      setContacts(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();

    // Optional: Polling every 5 seconds for real-time updates
    const interval = setInterval(fetchContacts, 5000);
    return () => clearInterval(interval);
  }, []);

  // Filter contacts based on search
  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search) ||
      c.message.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentContacts = filteredContacts.slice(startIndex, startIndex + itemsPerPage);

  // Pagination handlers
  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  // Delete contact
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/contact/${id}`, { method: "DELETE" });
      if (res.ok) {
        setContacts(contacts.filter((c) => c._id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Submissions Dashboard</h1>

      {/* Search */}
      <input
        type="text"
        value={search}
        onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
        placeholder="Search by name, email, phone, or message"
        className="mb-4 w-full border border-gray-300 rounded-lg px-4 py-2"
      />

      {currentContacts.length === 0 ? (
        <p>No submissions found.</p>
      ) : (
        <>
          {/* Table */}
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Message</th>
                <th className="border px-4 py-2">Submitted At</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentContacts.map((c) => (
                <tr key={c._id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{c.name}</td>
                  <td className="border px-4 py-2">{c.email}</td>
                  <td className="border px-4 py-2">{c.phone}</td>
                  <td className="border px-4 py-2">{c.message}</td>
                  <td className="border px-4 py-2">{new Date(c.createdAt).toLocaleString()}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleDelete(c._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;





// import React, { useState, useEffect } from "react";

// const Dashboard = () => {
//   const [contacts, setContacts] = useState([]);
//   const [filteredContacts, setFilteredContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const contactsPerPage = 5;

//   // Fetch contact data from backend
//   useEffect(() => {
//     const fetchContacts = async () => {
//       try { 
//          const res = await fetch("http://localhost:5000/api/contact/all");
//         if (!res.ok) throw new Error("Failed to fetch contacts");
//         const data = await res.json();
//         setContacts(data);
//         setFilteredContacts(data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };
//     fetchContacts();
//   }, []);

//   // Handle search
//   useEffect(() => {
//     const results = contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(search.toLowerCase()) ||
//       contact.email.toLowerCase().includes(search.toLowerCase()) ||
//       contact.phone.toLowerCase().includes(search.toLowerCase())
//     );
//     setFilteredContacts(results);
//     setCurrentPage(1);
//   }, [search, contacts]);

//   // Handle delete
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this record?")) return;

//     try {
//       const res = await fetch(`http://localhost:5000/api/contact/${id}`, {
//         method: "DELETE",
//       });
//       if (!res.ok) throw new Error("Failed to delete");
//       setContacts(contacts.filter((c) => c._id !== id));
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   // Pagination logic
//   const indexOfLast = currentPage * contactsPerPage;
//   const indexOfFirst = indexOfLast - contactsPerPage;
//   const currentContacts = filteredContacts.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//         Admin Dashboard
//       </h1>

//       {/* Search */}
//       <div className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="Search by name, email, or phone"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Loading / Error */}
//       {loading && <p className="text-center text-gray-600">Loading data...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       {/* Table */}
//       {!loading && !error && currentContacts.length > 0 ? (
//         <div className="overflow-x-auto">
//           <table className="w-full bg-white rounded-lg shadow-md">
//             <thead className="bg-blue-600 text-white">
//               <tr>
//                 <th className="py-3 px-4 text-left">Name</th>
//                 <th className="py-3 px-4 text-left">Email</th>
//                 <th className="py-3 px-4 text-left">Phone</th>
//                 <th className="py-3 px-4 text-left">Message</th>
//                 <th className="py-3 px-4 text-left">Date</th>
//                 <th className="py-3 px-4 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentContacts.map((contact) => (
//                 <tr
//                   key={contact._id}
//                   className="border-b hover:bg-gray-100 transition"
//                 >
//                   <td className="py-2 px-4">{contact.name}</td>
//                   <td className="py-2 px-4">{contact.email}</td>
//                   <td className="py-2 px-4">{contact.phone}</td>
//                   <td className="py-2 px-4">{contact.message}</td>
//                   <td className="py-2 px-4">
//                     {new Date(contact.createdAt).toLocaleString()}
//                   </td>
//                   <td className="py-2 px-4 text-center">
//                     <button
//                       onClick={() => handleDelete(contact._id)}
//                       className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         !loading && !error && (
//           <p className="text-center text-gray-600">No submissions found.</p>
//         )
//       )}

//       {/* Pagination */}
//       <div className="flex justify-center mt-6">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             onClick={() => paginate(i + 1)}
//             className={`mx-1 px-4 py-2 rounded ${
//               currentPage === i + 1
//                 ? "bg-blue-600 text-white"
//                 : "bg-white border text-gray-700 hover:bg-gray-100"
//             }`}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

