// // src/components/About/AwardsRecognition.jsx
// import { FaAward, FaTrophy, FaMedal } from "react-icons/fa";

// export default function AwardsRecognition() {
//   const awards = [
//     { icon: <FaAward size={36} className="text-blue-800" />, title: "Best Luxury Resort 2023" },
//     { icon: <FaTrophy size={36} className="text-blue-800" />, title: "Excellence in Hospitality 2021" },
//     { icon: <FaMedal size={36} className="text-blue-800" />, title: "Top Rated Guest Experience 2022" },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           Awards & <span className="text-blue-800">Recognition</span>
//         </h2>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {awards.map((award, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition transform hover:scale-105"
//             >
//               <div className="flex justify-center mb-4">{award.icon}</div>
//               <h3 className="text-lg font-semibold">{award.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// src/components/About/AwardsRecognition.jsx
import { FaAward, FaTrophy, FaMedal } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AwardsRecognition() {
  const awards = [
    { 
      icon: <FaAward size={36} className="text-white" />, 
      title: "Best Luxury Resort 2023",
      bg: "/images/awards/luxury-resort.jpg",
    },
    { 
      icon: <FaTrophy size={36} className="text-white" />, 
      title: "Excellence in Hospitality 2021",
      bg: "/images/awards/hospitality.jpg",
    },
    { 
      icon: <FaMedal size={36} className="text-white" />, 
      title: "Top Rated Guest Experience 2022",
      bg: "/images/awards/guest-experience.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Awards & <span className="text-blue-800">Recognition</span>
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-transform duration-500 h-64"
              style={{
                backgroundImage: `url(${award.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Subtle moving background effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/10 to-black/20 animate-bgMove"></div>

              {/* Icon with hover animation */}
              <motion.div
                className="absolute top-6 left-6 p-4 rounded-full bg-blue-800/70"
                whileHover={{ rotate: [0, 15, -15, 0], scale: 1.3 }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
              >
                {award.icon}
              </motion.div>

              {/* Title with glow effect */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white font-semibold text-lg md:text-xl text-center px-4 drop-shadow-lg">
                {award.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
