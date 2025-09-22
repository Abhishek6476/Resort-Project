import {
  FaWifi,
  FaSwimmer,
  FaConciergeBell,
  FaUtensils,
  FaDumbbell,
  FaBriefcase,
} from "react-icons/fa";

export default function FacilitiesSection() {
  const facilities = [
    {
      icon: <FaWifi className="text-3xl text-blue-800" />,
      title: "Free High-Speed Wi-Fi",
      desc: "Stay connected everywhere in the resort with fast & unlimited internet access.",
    },
    {
      icon: <FaSwimmer className="text-3xl text-blue-800" />,
      title: "Luxury Swimming Pool",
      desc: "Relax and refresh yourself in our spacious outdoor pool with premium facilities.",
    },
    {
      icon: <FaConciergeBell className="text-3xl text-blue-800" />,
      title: "24/7 Concierge Service",
      desc: "Round-the-clock service to make your stay hassle-free and enjoyable.",
    },
    {
      icon: <FaUtensils className="text-3xl text-blue-800" />,
      title: "Fine Dining & Lounge",
      desc: "Enjoy multi-cuisine restaurants, rooftop lounges, and cozy cafes at the resort.",
    },
    {
      icon: <FaDumbbell className="text-3xl text-blue-800" />,
      title: "Fitness & Wellness",
      desc: "State-of-the-art gym and relaxing spa for your health and well-being.",
    },
    {
      icon: <FaBriefcase className="text-3xl text-blue-800" />,
      title: "Conference & Events",
      desc: "Modern halls for corporate meetings, banquets, and weddings.",
    },
  ];

  return (
    <section className="py-16 bg-white" id="facilities">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Facilities & Why Choose Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide the perfect blend of luxury, comfort, and convenience to
            make your stay truly memorable.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-4">
                {facility.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/rooms"
            className="bg-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-900 transition"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}
