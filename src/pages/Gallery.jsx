
import React, { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // 🔹 Fetch gallery images from backend API
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/gallery");
        // backend se milta hai: [{ _id, image, caption }]
        setGalleryImages(res.data);
      } catch (err) {
        console.error("Error fetching gallery:", err);
      }
    };
    fetchGallery();
  }, []);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <div className="relative w-full h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1712314947761-a8d718bd8c32?w=2900&auto=format&fit=crop&q=80"
          alt="Gallery Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6 sm:px-16">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-2">Gallery</h1>
            <p className="text-lg">
              <span className="text-white text-xl">Home</span> &gt; Gallery
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="px-4 sm:px-10 py-10">
        <h2 className="text-4xl font-bold text-center mb-10">Event Gallery</h2>

        {galleryImages.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">
            No images found in gallery.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div
                key={img._id || index}
                onClick={() => setSelectedIndex(index)}
                className="cursor-pointer block overflow-hidden rounded-md shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={`http://localhost:5000${img.image}`} // 🔹 backend image path
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for full image */}
      {selectedIndex !== null && galleryImages[selectedIndex] && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/70"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={`http://localhost:5000${galleryImages[selectedIndex].image}`}
            alt="Full View"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/70"
          >
            ›
          </button>

          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            className="absolute top-6 right-6 bg-black/50 px-3 py-1 rounded-full text-white text-2xl"
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;



