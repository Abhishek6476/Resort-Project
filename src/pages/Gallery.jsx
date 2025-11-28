// code is working but image link here 
// import React, { useState } from "react";

// const galleryImages = [
//    {
//     src: "https://media.istockphoto.com/id/1334542458/photo/elopement-wedding.jpg?s=612x612&w=0&k=20&c=s1UrQjSa-YMf9CeWd9mnHQ13IVnFd9hfq-jU-cXNmsI=",
//     link: "https://media.istockphoto.com/id/1334542458/photo/elopement-wedding.jpg?s=612x612&w=0&k=20&c=s1UrQjSa-YMf9CeWd9mnHQ13IVnFd9hfq-jU-cXNmsI=",
//   },
//   {
//     src: "https://media.istockphoto.com/id/1139776817/photo/blank-ad-space-frame-sign-wedding-setup-decoration-during-reception-tender-pink-and-white.jpg?s=612x612&w=0&k=20&c=GbBDgBJa_maYZfpL1SWY7sUe10DXtf90qHZJmtWQSxQ=",
//     link: "https://media.istockphoto.com/id/1139776817/photo/blank-ad-space-frame-sign-wedding-setup-decoration-during-reception-tender-pink-and-white.jpg?s=612x612&w=0&k=20&c=GbBDgBJa_maYZfpL1SWY7sUe10DXtf90qHZJmtWQSxQ=",
//   },
//   {
//     src: "https://media.istockphoto.com/id/836012728/photo/holiday-turkey-dinner.jpg?s=612x612&w=0&k=20&c=f40xa5igjwqfNQq0qO0W0M0KCY_9MEZVztrPjgmBhBg=",
//     link: "https://example.com/page3",
//   },
//   {
//     src: "https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA=",
//     link: "https://example.com/page4",
//   },
//   {
//     src: "https://media.istockphoto.com/id/530976921/photo/interior-of-a-wedding-tent-decoration-ready-for-guests.jpg?s=612x612&w=0&k=20&c=-BfusjaGM_af2UmAw6sTvvuUBVgK2v81hXicu9qiIzU=",
//     link: "https://media.istockphoto.com/id/530976921/photo/interior-of-a-wedding-tent-decoration-ready-for-guests.jpg?s=612x612&w=0&k=20&c=-BfusjaGM_af2UmAw6sTvvuUBVgK2v81hXicu9qiIzU=",
//   },
//   {
//     src: "https://media.istockphoto.com/id/2162626070/photo/picture-of-a-wedding-reception-restaurant.jpg?s=612x612&w=0&k=20&c=PBQVchvG11p11OfB_R4aUBTJaVbLAhBXjpbIy2UlIrQ=",
//     link: "https://media.istockphoto.com/id/2162626070/photo/picture-of-a-wedding-reception-restaurant.jpg?s=612x612&w=0&k=20&c=PBQVchvG11p11OfB_R4aUBTJaVbLAhBXjpbIy2UlIrQ=",
//   },
//   {
//     src: "https://media.istockphoto.com/id/1224704144/photo/muslim-ramadan-iftar-family-dinner-table-with-traditional-turkish-foods.jpg?s=612x612&w=0&k=20&c=vJERROwMwl5VlDpyPNS98hOgjF6b9Xc1osaMJWkJ83I=",
//     link: "https://example.com/page7",
//   },
//   {
//     src: "https://media.istockphoto.com/id/2182484282/photo/banquet-hall-in-a-restaurant-with-decor-for-a-wedding.webp?a=1&b=1&s=612x612&w=0&k=20&c=xcFx9bl4Fn9XwxpVJEPPX-G2dE5vSDGaqCLqJEWXgVQ=",
//     link: "https://media.istockphoto.com/id/2182484282/photo/banquet-hall-in-a-restaurant-with-decor-for-a-wedding.webp?a=1&b=1&s=612x612&w=0&k=20&c=xcFx9bl4Fn9XwxpVJEPPX-G2dE5vSDGaqCLqJEWXgVQ=",
//   },
//   {
//     src: "https://media.istockphoto.com/id/1371666656/photo/a-tent-for-a-large-number-of-people-for-a-holiday-4032.jpg?s=612x612&w=0&k=20&c=wr6U8ROlJn2eXQ6neMlT8Ff9Q0b_kZcwBL7RN-X2c6o=",
//     link: "https://media.istockphoto.com/id/1371666656/photo/a-tent-for-a-large-number-of-people-for-a-holiday-4032.jpg?s=612x612&w=0&k=20&c=wr6U8ROlJn2eXQ6neMlT8Ff9Q0b_kZcwBL7RN-X2c6o=",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1747115275646-49725fb5a003?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwaW1hZ2UlMjB3ZWRkaW5nfGVufDB8fDB8fHww",
//     link: "https://images.unsplash.com/photo-1747115275646-49725fb5a003?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwaW1hZ2UlMjB3ZWRkaW5nfGVufDB8fDB8fHww",
//   },
//   {
//     src: "https://media.istockphoto.com/id/1164435677/photo/happy-hotel-clerks-are-welcoming-professional-at-counter.jpg?s=612x612&w=0&k=20&c=XNbtAFwGK4AHd7JKKQycDwTQcIXFagIxt9TXLNb0Dd4=",
//     link: "https://example.com/page11",
//   },
//   {
//     src: "https://media.istockphoto.com/id/1336116827/photo/suitcase-delivered-standing-in-hotel-room-concept-of-hotel-service-and-travel.jpg?s=612x612&w=0&k=20&c=IC_afKa6Fwgrb7nTGz8OF-2KsHIioahL-eyZIjmZxVU=",
//     link: "https://example.com/page12",
//   },
//   {
//     src: "https://media.istockphoto.com/id/1175640611/photo/beautiful-banquet-hall-under-a-tent-for-a-wedding-reception-interior-of-a-wedding-tent.jpg?s=612x612&w=0&k=20&c=kW1v6OyLjqSQQb05N3RMa5x0HANqiuUEa30-YPXBsEU=",
//     link: "https://example.com/page13",
//   },
//   {
//     src: "https://media.istockphoto.com/id/544489935/photo/young-couple-and-their-guests-sitting-at-table-during-wedding-reception-in-garden.jpg?s=612x612&w=0&k=20&c=UUUaMcL7bEs-HHyqUlw7eYeQt70wsY284XjheeK919c=",
//     link: "https://example.com/page14",
//   },
//   {
//     src: "https://media.istockphoto.com/id/157377031/photo/wedding-reception-hall-table-setting.jpg?s=612x612&w=0&k=20&c=yJR-VnyaP3C7oyex0psAzbzUaJVwLt7VjVkIuRS_m-k=",
//     link: "https://example.com/page15",
//   },


//     {
//     src: "https://media.istockphoto.com/id/1192752555/photo/luxurious-high-tent-decorated-for-wedding-celebration.jpg?s=612x612&w=0&k=20&c=XCkM81DeER83SVYvXdDDSRfefZwip4qJey7q_yKgxHI=",
//     link: "https://media.istockphoto.com/id/2182484282/photo/banquet-hall-in-a-restaurant-with-decor-for-a-wedding.webp?a=1&b=1&s=612x612&w=0&k=20&c=xcFx9bl4Fn9XwxpVJEPPX-G2dE5vSDGaqCLqJEWXgVQ=",
//   },
//     {
//     src: "https://media.istockphoto.com/id/1249206724/photo/banquet-catering-buffet-food.jpg?s=612x612&w=0&k=20&c=EDQZDZDQYeWT0UYasMivgDXwEa-QWPWEQn62szACVVM=",
//     link: "https://media.istockphoto.com/id/2182484282/photo/banquet-hall-in-a-restaurant-with-decor-for-a-wedding.webp?a=1&b=1&s=612x612&w=0&k=20&c=xcFx9bl4Fn9XwxpVJEPPX-G2dE5vSDGaqCLqJEWXgVQ=",
//   },
//     {
//     src: "https://media.istockphoto.com/id/1097179756/photo/wedding-tables-for-guests-with-flowers-in-the-tent.jpg?s=612x612&w=0&k=20&c=4SsZigM8So4TicjTO0mtHF2iB54MPHK9dr2206-1epo=",
//     link: "https://media.istockphoto.com/id/2182484282/photo/banquet-hall-in-a-restaurant-with-decor-for-a-wedding.webp?a=1&b=1&s=612x612&w=0&k=20&c=xcFx9bl4Fn9XwxpVJEPPX-G2dE5vSDGaqCLqJEWXgVQ=",
//   },
// ];

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

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
//             <p className="text-lg">
//               <span className="text-white font-bold text-xl">Home</span> &gt; Gallery
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <div className="px-4 sm:px-10 py-10">
//         <h2 className="text-4xl font-bold text-center mb-10">Event Gallery</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {galleryImages.map((img, index) => (
//             <div
//               key={index}
//               onClick={() => setSelectedImage(img.link)}
//               className="cursor-pointer block overflow-hidden rounded-md shadow-md hover:shadow-xl transition duration-300"
//             >
//               <img
//                 src={img.src}
//                 alt={`Gallery ${index + 1}`}
//                 className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal for full image */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
//           onClick={() => setSelectedImage(null)}
//         >
//           <img
//             src={selectedImage}
//             alt="Full View"
//             className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
//           />
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
    if (diff > 50) nextImage(e); // swipe left
    else if (diff < -50) prevImage(e); // swipe right
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
