

//100 % work with api work
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Gallery = () => {
//   const [galleryImages, setGalleryImages] = useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   // 🔹 Fetch gallery images from backend API
//   useEffect(() => {
//     const fetchGallery = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/gallery");
//         // backend se milta hai: [{ _id, image, caption }]
//         setGalleryImages(res.data);
//       } catch (err) {
//         console.error("Error fetching gallery:", err);
//       }
//     };
//     fetchGallery();
//   }, []);

//   const handlePrev = (e) => {
//     e.stopPropagation();
//     setSelectedIndex((prev) =>
//       prev === 0 ? galleryImages.length - 1 : prev - 1
//     );
//   };

//   const handleNext = (e) => {
//     e.stopPropagation();
//     setSelectedIndex((prev) =>
//       prev === galleryImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Banner Section */}
//       <div className="relative w-full h-[60vh]">
//         <img
//           src="https://images.unsplash.com/photo-1712314947761-a8d718bd8c32?w=2900&auto=format&fit=crop&q=80"
//           alt="Gallery Banner"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 flex items-center justify-center text-center px-6 sm:px-16">
//           <div className="text-white">
//             <h1 className="text-5xl font-bold mb-2">Gallery</h1>
//             <ul className="flex justify-center space-x-3 text-sm md:text-base">
//               <li>
//                 <a
//                   href="/"
//                   className="hover:underline hover:text-gray-200 transition"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>&gt;</li>
//               <li className="text-gray-200">Gallery</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <div className="px-4 sm:px-10 py-10">
//         <h2 className="text-4xl font-bold text-center mb-10">Event Gallery</h2>

//         {galleryImages.length === 0 ? (
//           <p className="text-gray-500 text-center mt-10">
//             No images found in gallery.
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {galleryImages.map((img, index) => (
//               <div
//                 key={img._id || index}
//                 onClick={() => setSelectedIndex(index)}
//                 className="cursor-pointer block overflow-hidden rounded-md shadow-md hover:shadow-xl transition duration-300"
//               >
//                 <img
//                   src={`http://localhost:5000${img.image}`} // 🔹 backend image path
//                   alt={`Gallery ${index + 1}`}
//                   className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Modal for full image */}
//       {selectedIndex !== null && galleryImages[selectedIndex] && (
//         <div
//           className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
//           onClick={() => setSelectedIndex(null)}
//         >
//           {/* Prev Button */}
//           <button
//             onClick={handlePrev}
//             className="absolute left-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/70"
//           >
//             ‹
//           </button>

//           {/* Image */}
//           <img
//             src={`http://localhost:5000${galleryImages[selectedIndex].image}`}
//             alt="Full View"
//             className="w-[800px] h-[500px] object-cover rounded-lg shadow-lg"
//           />

//           {/* Next Button */}
//           <button
//             onClick={handleNext}
//             className="absolute right-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/70"
//           >
//             ›
//           </button>

//           {/* Close Button */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setSelectedIndex(null);
//             }}
//             className="absolute top-6 right-6 bg-black/50 px-3 py-1 rounded-full text-white text-2xl"
//           >
//             ✖
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;




import React, { useState, useEffect } from "react";

const Gallery = () => {
  const galleryImages = [
    { src: "/src/assets/eng1.jpg" },
    { src: "/src/assets/pack2.jpg" },
    { src: "/src/assets/eng3.jpg" },
    { src: "/src/assets/eng4.jpg" },
    { src: "/src/assets/eng5.jpg" },
    { src: "/src/assets/eng6.jpg" },
    { src: "/src/assets/eng7.jpg" },
    { src: "/src/assets/grand1.jpg" },
    { src: "/src/assets/meeting1.jpg" },
    { src: "/src/assets/meeting2.jpg" },
    { src: "/src/assets/mehndi1.jpg" },
    { src: "/src/assets/room2.jpg" },
    { src: "/src/assets/mehndi2.jpg" },
    { src: "/src/assets/room1.jpg" },
    { src: "/src/assets/meeting3.jpg" },
    { src: "/src/assets/wedding1.jpg" },
    { src: "/src/assets/pack3.jpg" },
    { src: "/src/assets/wedding5.jpg" },
    { src: "/src/assets/wedding3.jpg" },
    { src: "/src/assets/wedding4.jpg" },
    { src: "/src/assets/pack1.jpg" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowLeft") prevImage(e);
        if (e.key === "ArrowRight") nextImage(e);
        if (e.key === "Escape") closeModal();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  // Swipe support for mobile
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextImage(e); 
    else if (diff < -50) prevImage(e); 
    setTouchStart(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div className="relative w-full h-[60vh]">
        <img
          src="/src/assets/wedding5.jpg"
          alt="Gallery Banner"
          className="w-full h-full object-cover brightness-110"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6 sm:px-16">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-2">Gallery</h1>
            <p className="text-lg">
              <span className="text-white font-bold text-xl">Home</span> &gt; Gallery
            </p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="px-4 sm:px-10 py-10">
        <h2 className="text-4xl font-bold text-center mb-10">Event Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="cursor-pointer block overflow-hidden rounded-md shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={img.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-10 text-white text-4xl md:text-5xl font-bold hover:text-gray-300 z-50"
          >
            &#10094;
          </button>

          {/* Full Image */}
          <img
            src={galleryImages[selectedIndex].src}
            alt="Full View"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-10 text-white text-4xl md:text-5xl font-bold hover:text-gray-300 z-50"
          >
            &#10095;
          </button>

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-4xl md:text-5xl font-bold hover:text-gray-300 z-50"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
