
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MissionVision() {
  const cards = [
    {
      title: "Our Mission",
      icon: <FaBullseye size={28} />,
      description:
        "To provide our guests with exceptional hospitality, blending comfort, luxury, and personalized experiences that create unforgettable memories.",
    },
    {
      title: "Our Vision",
      icon: <FaEye size={28} />,
      description:
        "To be recognized as a leading resort destination, known for excellence in service, sustainable practices, and enriching guest experiences worldwide.",
    },
    {
      title: "Our Values",
      icon: <FaHeart size={28} />,
      description:
        "We uphold integrity, respect, and excellence in all we do, ensuring our guests feel valued and cared for during every stay.",
    },
  ];

  return (
    <section className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our <span className="text-blue-800">Mission, Vision & Values</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:bg-blue-50"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-800 rounded-full mx-auto mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}