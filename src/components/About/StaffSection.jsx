
import { FaSmile, FaHandsHelping, FaMedal } from "react-icons/fa";

export default function StaffSection() {
  const staff = [
    {
      icon: <FaSmile size={30} className="text-blue-800" />,
      title: "Friendly Hospitality",
      description:
        "Our staff ensures every guest feels welcomed and cared for with warm smiles and great service.",
    },
    {
      icon: <FaHandsHelping size={30} className="text-blue-800" />,
      title: "Dedicated Support",
      description:
        "From bookings to check-outs, our team is always available to assist with your needs.",
    },
    {
      icon: <FaMedal size={30} className="text-blue-800" />,
      title: "Experienced Team",
      description:
        "Well-trained professionals making your stay smooth, safe, and memorable.",
    },
  ];

  return (
    <section className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
           Our <span className="text-blue-800">Expert Team</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {staff.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex justify-center mb-4">
                {/* Icon blinking on hover */}
                <div className="group-hover:animate-pulse">{item.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
