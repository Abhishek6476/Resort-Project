// export default function CTASection() {
//   return (
//     <section
//       className="relative w-full h-[60vh] flex items-center justify-center text-center"
//       style={{
//         backgroundImage: "url('/images/cta-bg.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-3xl px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//           Plan Your Perfect Stay With Us
//         </h2>
//         <p className="text-lg text-gray-200 mb-8">
//           Experience luxury, comfort, and world-class hospitality at unbeatable
//           prices. Book your dream getaway now!
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href="/contact"
//             className="bg-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-900 transition"
//           >
//            Contact Us
//           </a>
//           {/* <a
//             href="/contact"
//             className="bg-white text-blue-800 px-8 py-3 rounded-full hover:bg-gray-200 transition"
//           >
//             Contact Us
//           </a> */}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import ctaImg from "/src/assets/wedding.jpg";  // ⭐ apni image yahan import karo

export default function CTASection() {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${ctaImg})` }}   // ⭐ Exactly WeddingReception style
    >
      {/* Dark Overlay (same as WeddingReception) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-4xl font-bold mb-4">
          Plan Your Perfect Stay With Us
        </h2>

        <p className="text-lg mb-8 text-gray-200">
          Experience luxury, comfort, and world-class hospitality at unbeatable
          prices.<br/> Book your dream getaway now!
        </p>

        <a
          href="/contact"
          className="bg-blue-800 hover:bg-blue-900 px-8 py-3 rounded-full text-white font-medium"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
