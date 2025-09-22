// src/components/RoomsSection.jsx
import room1 from "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg";
import room3 from "../../assets/room3.jpg";

export default function RoomsSection() {
  const rooms = [
    {
      image: room1,
      title: "Luxury Room",
      price: "₹5,000 / Night",
      desc: "Spacious luxury rooms with modern interiors, private balcony, and premium comfort.",
    },
    {
      image: room2,
      title: "Deluxe Room",
      price: "₹3,500 / Night",
      desc: "Cozy and elegant rooms designed for couples and small families with all amenities.",
    },
    {
      image: room3,
      title: "Suite Room",
      price: "₹7,500 / Night",
      desc: "Exclusive suites with living area, panoramic views, and luxury services for VIP stays.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Rooms & Suites
          </h2>
          <p className="mt-3 text-gray-600">
            Choose from our range of luxurious rooms designed for your comfort.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              {/* Room Image */}
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-56 object-cover"
              />

              {/* Room Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {room.title}
                </h3>
                <p className="text-yellow-600 font-semibold mb-3">{room.price}</p>
                <p className="text-gray-600 mb-4">{room.desc}</p>

                {/* Book Now Button */}
                <a
                  href="/booking"
                  className="inline-block bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-900 transition"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
