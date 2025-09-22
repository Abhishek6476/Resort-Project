import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our <span className="text-blue-800">Mission & Vision</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-800 rounded-full mx-auto mb-6">
              <FaBullseye size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide our guests with exceptional hospitality, blending
              comfort, luxury, and personalized experiences that create
              unforgettable memories.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-800 rounded-full mx-auto mb-6">
              <FaEye size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be recognized as a leading resort destination, known for
              excellence in service, sustainable practices, and enriching guest
              experiences worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


// import { FaBullseye, FaEye } from "react-icons/fa";

// export default function MissionVision() {
//   return (
//     <section
//       className="relative py-20 bg-fixed bg-center bg-cover"
//       style={{ backgroundImage: "url('/images/about1.jpg')" }} // 👈 apni image ka path dalna
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           Our <span className="text-blue-400">Mission & Vision</span>
//         </h2>

//         {/* Grid */}
//         <div className="grid md:grid-cols-2 gap-10">
//           {/* Mission */}
//           <div className="bg-white/90 text-gray-900 rounded-2xl shadow-md p-8 hover:shadow-lg transition">
//             <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-800 rounded-full mx-auto mb-6">
//               <FaBullseye size={28} />
//             </div>
//             <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
//             <p className="text-gray-600 leading-relaxed">
//               To provide our guests with exceptional hospitality, blending
//               comfort, luxury, and personalized experiences that create
//               unforgettable memories.
//             </p>
//           </div>

//           {/* Vision */}
//           <div className="bg-white/90 text-gray-900 rounded-2xl shadow-md p-8 hover:shadow-lg transition">
//             <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-800 rounded-full mx-auto mb-6">
//               <FaEye size={28} />
//             </div>
//             <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
//             <p className="text-gray-600 leading-relaxed">
//               To be recognized as a leading resort destination, known for
//               excellence in service, sustainable practices, and enriching guest
//               experiences worldwide.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
