// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaUpload, FaTrash } from "react-icons/fa";

// export default function AdminGallery() {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // ✅ Fetch all images from backend
//   const fetchImages = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:5000/api/gallery");
//       setImages(data);
//     } catch (error) {
//       console.error("Error fetching gallery:", error);
//     }
//   };

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   // ✅ Handle image upload
//   const handleUpload = async (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length === 0) return;

//     setLoading(true);

//     try {
//       for (const file of files) {
//         const formData = new FormData();
//         formData.append("image", file);

//         // Upload image to backend
//         await axios.post("http://localhost:5000/api/gallery", formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//       }

//       // Re-fetch updated list
//       fetchImages();
//     } catch (error) {
//       console.error("Upload failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Handle delete image
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this image?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/gallery/${id}`);
//       setImages((prev) => prev.filter((img) => img._id !== id));
//     } catch (error) {
//       console.error("Delete failed:", error);
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-semibold text-gray-800">
//           Manage Gallery
//         </h2>

//         <label className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg cursor-pointer transition">
//           <FaUpload /> {loading ? "Uploading..." : "Upload Images"}
//           <input
//             type="file"
//             multiple
//             accept="image/*"
//             className="hidden"
//             onChange={handleUpload}
//             disabled={loading}
//           />
//         </label>
//       </div>

//       {/* Gallery Images */}
//       {images.length === 0 ? (
//         <p className="text-gray-500 text-center mt-10">
//           No images uploaded yet.
//         </p>
//       ) : (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//           {images.map((img) => (
//             <div
//               key={img._id}
//               className="relative group rounded-lg overflow-hidden shadow-md border border-gray-200"
//             >
//               <img
//                 src={`http://localhost:5000${img.image}`}
//                 alt="Gallery"
//                 className="w-full h-40 object-cover transition-transform duration-200 group-hover:scale-105"
//               />

//               <button
//                 onClick={() => handleDelete(img._id)}
//                 className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition"
//               >
//                 <FaTrash size={14} />
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


//new 

import { useState, useEffect } from "react";
import axios from "axios";
import { FaUpload, FaTrash } from "react-icons/fa";

export default function AdminGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 NEW STATES (for popup)
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // ✅ Fetch all images from backend
  const fetchImages = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/gallery");
      setImages(data);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // ✅ Handle image upload
  const handleUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setLoading(true);

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append("image", file);

        await axios.post("http://localhost:5000/api/gallery", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      fetchImages();
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle delete image (API logic SAME)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/gallery/${id}`);
      setImages((prev) => prev.filter((img) => img._id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Manage Gallery</h2>

        <label className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg cursor-pointer transition">
          <FaUpload />
          {loading ? "Uploading..." : "Upload Images"}
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
            disabled={loading}
          />
        </label>
      </div>

      {/* Gallery Images */}
      {images.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">
          No images uploaded yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((img) => (
            <div
              key={img._id}
              className="relative group rounded-lg overflow-hidden shadow-md border border-gray-200"
            >
              <img
                src={`http://localhost:5000${img.image}`}
                alt="Gallery"
                className="w-full h-40 object-cover transition-transform duration-200 group-hover:scale-105"
              />

              {/* DELETE BUTTON */}
              <button
                onClick={() => {
                  setDeleteId(img._id);
                  setShowDeleteModal(true);
                }}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <FaTrash size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 🔥 CENTER DELETE CONFIRMATION POPUP */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-[90%] max-w-md p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Delete Image?
            </h3>

            <p className="text-gray-600 mb-6">
              Are you sure you want to permanently delete this image?
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
