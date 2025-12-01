
import { FaConciergeBell, FaShieldAlt, FaCalendarCheck, FaHandshake } from "react-icons/fa";

export default function UniqueSection() {
  const features = [
    {
      icon: <FaConciergeBell size={30} />,
      title: "Exceptional Hospitality",
      description:
        "Our dedicated staff ensures world-class service, making every guest feel valued and cared for.",
    },
    {
      icon: <FaShieldAlt size={30} />,
      title: "Trusted & Safe",
      description:
        "We follow strict cleanliness and safety standards for a worry-free and comfortable stay.",
    },
    {
      icon: <FaCalendarCheck size={30} />,
      title: "Easy Bookings",
      description:
        "From instant confirmations to flexible planning, we make your booking experience smooth.",
    },
    {
      icon: <FaHandshake size={30} />,
      title: "Guest-Centric Approach",
      description:
        "Everything we do is centered around creating memorable experiences for our guests.",
    },
  ];

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Makes <span className="text-blue-800">Us Unique</span>
        </h2>
        <p className="text-gray-600 mb-12">
          We go beyond hospitality, creating unforgettable experiences with excellence and care.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 shadow-lg rounded-xl p-8 transition 
                         hover:shadow-xl hover:bg-blue-50 hover:scale-105 cursor-pointer group"
            >
              <div className="text-blue-800 mb-4 flex justify-center">
                {/* icon will blink on hover */}
                <div className="group-hover:animate-pulse">{item.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}