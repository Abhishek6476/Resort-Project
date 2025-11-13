import { FaHotel, FaUtensils, FaGlassCheers, FaLeaf, FaStar, FaUsers } from "react-icons/fa";

export default function HighlightSection() {
  const highlights = [
    {
      icon: <FaHotel className="text-blue-800 text-4xl mb-3" />,
      title: "100+ Luxurious Rooms",
      description: "Spacious and elegant rooms designed for comfort.",
    },
    {
      icon: <FaUtensils className="text-blue-800 text-4xl mb-3" />,
      title: "3 Multi-Cuisine Restaurants",
      description: "Delightful dining experiences from around the world.",
    },
    {
      icon: <FaGlassCheers className="text-blue-800 text-4xl mb-3" />,
      title: "500+ Events Hosted",
      description: "Banquets & weddings crafted with perfection.",
    },
    {
      icon: <FaLeaf className="text-blue-800 text-4xl mb-3" />,
      title: "10 Acres of Greenery",
      description: "Experience peace surrounded by lush nature.",
    },
    {
      icon: <FaStar className="text-blue-800 text-4xl mb-3" />,
      title: "4.8/5 Guest Rating",
      description: "Trusted by thousands of happy guests.",
    },
    {
      icon: <FaUsers className="text-blue-800 text-4xl mb-3" />,
      title: "Professional Team",
      description: "Hospitality with dedication & passion.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Highlights</h2>
        <p className="text-gray-600 mb-12">
          Discover what makes our resort the preferred choice for travelers, families, and businesses.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
