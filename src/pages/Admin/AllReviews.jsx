// // src/pages/Admin/Reviews/AllReviews.jsx
// import { useState, useEffect } from "react";
// import { FaSearch, FaTrash, FaStar, FaRegStar } from "react-icons/fa";
// import axios from "axios";

// export default function AllReviews() {
//   const [reviews, setReviews] = useState([]);
//   const [search, setSearch] = useState("");

//   // ✅ Fetch all reviews from backend
//   const fetchReviews = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/reviews");
//       setReviews(res.data);
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//     }
//   };

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   // Filter reviews by name/email
//   const filteredReviews = reviews.filter((r) => {
//     return (
//       r.name.toLowerCase().includes(search.toLowerCase()) ||
//       r.email.toLowerCase().includes(search.toLowerCase())
//     );
//   });

//   // Delete review
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this review?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/reviews/${id}`);
//       setReviews(reviews.filter((r) => r._id !== id));
//     } catch (error) {
//       console.error("Error deleting review:", error);
//     }
//   };

//   // Render stars
//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         i <= rating ? (
//           <FaStar key={i} className="text-yellow-400 inline-block" />
//         ) : (
//           <FaRegStar key={i} className="text-yellow-400 inline-block" />
//         )
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* 🔍 Top Controls */}
//       <div className="flex justify-end items-center gap-3 mb-6">
//         <div className="relative w-64">
//           <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search by name or email..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />
//         </div>
//       </div>

//       {/* 📋 Reviews Table */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200 text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               {["Name", "Email", "Review", "Rating", "Action"].map((head) => (
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
//             {filteredReviews.length > 0 ? (
//               filteredReviews.map((r, idx) => (
//                 <tr
//                   key={r._id}
//                   className={
//                     idx % 2 === 0
//                       ? "bg-white hover:bg-gray-50"
//                       : "bg-gray-50 hover:bg-gray-100"
//                   }
//                 >
//                   <td className="px-4 py-2">{r.name}</td>
//                   <td className="px-4 py-2">{r.email}</td>
//                   <td className="px-4 py-2">{r.text}</td>
//                   <td className="px-4 py-2">{renderStars(r.rating || 0)}</td>
//                   <td className="px-4 py-2">
//                     <button
//                       onClick={() => handleDelete(r._id)}
//                       className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
//                     >
//                       <FaTrash size={14} /> Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center py-4 text-gray-500">
//                   No reviews found.
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

// src/pages/Admin/Reviews/AllReviews.jsx
import { useState, useEffect } from "react";
import { FaSearch, FaTrash, FaStar, FaRegStar } from "react-icons/fa";
import axios from "axios";

export default function AllReviews() {
  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState("");

  //  NEW STATES (popup only)
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  //  Fetch all reviews from backend
  const fetchReviews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/reviews");
      setReviews(res.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  //  Filter reviews (UNCHANGED)
  const filteredReviews = reviews.filter((r) => {
    return (
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  //  Delete review (API LOGIC SAME)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/reviews/${id}`);
      setReviews(reviews.filter((r) => r._id !== id));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  //  Render stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-yellow-400 inline-block" />
        ) : (
          <FaRegStar key={i} className="text-yellow-400 inline-block" />
        )
      );
    }
    return stars;
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/*  Top Controls */}
      <div className="flex justify-end items-center gap-3 mb-6">
        <div className="relative w-64">
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/*  Reviews Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              {["Name", "Email", "Review", "Rating", "Action"].map((head) => (
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
            {filteredReviews.length > 0 ? (
              filteredReviews.map((r, idx) => (
                <tr
                  key={r._id}
                  className={
                    idx % 2 === 0
                      ? "bg-white hover:bg-gray-50"
                      : "bg-gray-50 hover:bg-gray-100"
                  }
                >
                  <td className="px-4 py-2">{r.name}</td>
                  <td className="px-4 py-2">{r.email}</td>
                  <td className="px-4 py-2">{r.text}</td>
                  <td className="px-4 py-2">
                    {renderStars(r.rating || 0)}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => {
                        setDeleteId(r._id);
                        setShowDeleteModal(true);
                      }}
                      className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                      <FaTrash size={14} /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/*  PROFESSIONAL DELETE POPUP (LIGHT DIM BACKGROUND) */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-[90%] max-w-md p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Delete Review?
            </h3>

            <p className="text-gray-600 mb-6">
              Are you sure you want to permanently delete this review?
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