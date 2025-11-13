// import { useState } from "react";
// import { FaUpload, FaTrash } from "react-icons/fa";

// export default function AdminGallery() {
//   const [images, setImages] = useState([
//     // Sample initial images (you can remove later)
//     { id: 1, url: "https://placekitten.com/300/200" },
//     { id: 2, url: "https://placekitten.com/301/200" },
//   ]);

//   // Handle upload
//   const handleUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const newImages = files.map((file) => ({
//       id: Date.now() + Math.random(),
//       url: URL.createObjectURL(file),
//       file,
//     }));
//     setImages((prev) => [...prev, ...newImages]);
//   };

//   // Handle delete
//   const handleDelete = (id) => {
//     setImages(images.filter((img) => img.id !== id));
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-semibold text-gray-800">Manage Gallery</h2>

//         <label className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg cursor-pointer transition">
//           <FaUpload /> Upload Images
//           <input
//             type="file"
//             multiple
//             accept="image/*"
//             className="hidden"
//             onChange={handleUpload}
//           />
//         </label>
//       </div>

//       {images.length === 0 ? (
//         <p className="text-gray-500 text-center mt-10">No images uploaded yet.</p>
//       ) : (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//           {images.map((img) => (
//             <div
//               key={img.id}
//               className="relative group rounded-lg overflow-hidden shadow-md border border-gray-200"
//             >
//               <img
//                 src={img.url}
//                 alt="Gallery"
//                 className="w-full h-40 object-cover transition-transform duration-200 group-hover:scale-105"
//               />
//               <button
//                 onClick={() => handleDelete(img.id)}
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



import { useState, useEffect } from "react";
import axios from "axios";
import { FaUpload, FaTrash } from "react-icons/fa";

export default function AdminGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

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

        // Upload image to backend
        await axios.post("http://localhost:5000/api/gallery", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      // Re-fetch updated list
      fetchImages();
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle delete image
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;

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
        <h2 className="text-2xl font-semibold text-gray-800">
          Manage Gallery
        </h2>

        <label className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg cursor-pointer transition">
          <FaUpload /> {loading ? "Uploading..." : "Upload Images"}
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

              <button
                onClick={() => handleDelete(img._id)}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <FaTrash size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
