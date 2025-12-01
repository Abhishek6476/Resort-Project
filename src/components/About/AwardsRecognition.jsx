// src/components/About/AwardsRecognition.jsx
import { FaAward, FaTrophy, FaMedal } from "react-icons/fa";

export default function AwardsRecognition() {
  const awards = [
    { icon: <FaAward size={36} className="text-blue-800" />, title: "Best Luxury Resort 2023" },
    { icon: <FaTrophy size={36} className="text-blue-800" />, title: "Excellence in Hospitality 2021" },
    { icon: <FaMedal size={36} className="text-blue-800" />, title: "Top Rated Guest Experience 2022" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Awards & <span className="text-blue-800">Recognition</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">{award.icon}</div>
              <h3 className="text-lg font-semibold">{award.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// working award image background 
// import React from "react";
// import { FaAward, FaTrophy, FaMedal } from "react-icons/fa";

// const AwardsRecognition = () => {
//   return (
//     <section
//       className="relative min-h-screen flex items-center py-28 bg-fixed bg-center bg-cover"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1501117716987-c8e1ecb21024?q=80&w=1200')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 backdrop-blur-sm"></div>

//       <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
//         {/* Title */}
//         <h2 className="text-6xl md:text-7xl font-bold mb-4 tracking-wide animate-fadeIn">
//           Awards & Recognition
//         </h2>

//         {/* Sub Title */}
//         <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-16 animate-fadeInSlow">
//           We take pride in achieving excellence in world-class hospitality, luxury living, and unforgettable guest experiences.
//         </p>

//         {/* Award Cards */}
//         <div className="grid md:grid-cols-3 gap-12">
          
//           {/* Card 1 */}
//           <div className="group bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-yellow-500/50 shadow-[0_0_30px_rgba(255,215,0,0.3)] transform transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_0_55px_rgba(255,215,0,0.7)] animate-slideUp">
//             <div className="gold-circle">
//               <FaTrophy className="text-white text-4xl" />
//             </div>
//             <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-white transition">
//               Best Luxury Resort
//             </h3>
//             <p className="opacity-90 leading-relaxed">
//               Honored for setting unmatched standards in premium luxury hospitality.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="group bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-yellow-500/50 shadow-[0_0_30px_rgba(255,215,0,0.3)] transform transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_0_55px_rgba(255,215,0,0.7)] animate-slideUp delay-150">
//             <div className="gold-circle">
//               <FaMedal className="text-white text-4xl" />
//             </div>
//             <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-white transition">
//               Excellence in Hospitality
//             </h3>
//             <p className="opacity-90 leading-relaxed">
//               Awarded for outstanding service excellence and unforgettable stay experience.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="group bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-yellow-500/50 shadow-[0_0_30px_rgba(255,215,0,0.3)] transform transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_0_55px_rgba(255,215,0,0.7)] animate-slideUp delay-300">
//             <div className="gold-circle">
//               <FaAward className="text-white text-4xl" />
//             </div>
//             <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-white transition">
//               Top Rated Guest Experience
//             </h3>
//             <p className="opacity-90 leading-relaxed">
//               Voted #1 by guests for ambiance, comfort & world-class hospitality.
//             </p>
//           </div>

//         </div>
//       </div>

//       {/* Shine Animation */}
//       <style>{`
//         .gold-circle {
//           width: 90px;
//           height: 90px;
//           margin: 0 auto 20px;
//           border-radius: 50%;
//           background: rgba(255, 215, 0, 0.2);
//           border: 2px solid rgba(255, 215, 0, 0.5);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 0 25px rgba(255,215,0,0.4);
//           transition: 0.4s;
//         }
//         .group:hover .gold-circle {
//           transform: rotate(8deg) scale(1.1);
//           box-shadow: 0 0 40px rgba(255, 215, 0, 0.8);
//         }
//         .animate-fadeIn {
//           animation: fadeIn 1.2s ease forwards;
//         }
//         .animate-fadeInSlow {
//           animation: fadeIn 2s ease forwards;
//         }
//         .animate-slideUp {
//           opacity: 0;
//           animation: slideUp 1s ease forwards;
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(40px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default AwardsRecognition;

