
import { FaGlassCheers, FaHotel, FaHeart } from "react-icons/fa";

export default function BanquetsSection() {
  return (
    <section className="py-16 bg-gray-50" id="banquets">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Banquets & Weddings
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Make your celebrations unforgettable with our luxurious banquet
            halls and beautiful wedding venues. Perfect for receptions,
            corporate events, and grand occasions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Banquet Halls */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-4">
              <FaGlassCheers className="text-3xl text-blue-800" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Elegant Banquet Halls</h3>
            <p className="text-gray-600">
              Spacious and stylish halls designed for all kinds of gatherings
              and corporate events.
            </p>
          </div>

          {/* Wedding Venues */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-4">
              <FaHeart className="text-3xl text-blue-800" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dream Weddings</h3>
            <p className="text-gray-600">
              Celebrate your big day in a grand way with elegant décor,
              customized themes, and flawless service.
            </p>
          </div>

          {/* Luxury Stays */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-4">
              <FaHotel className="text-3xl text-blue-800" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Luxury Stays</h3>
            <p className="text-gray-600">
              Combine your events with our premium rooms and suites for a
              complete luxurious experience.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="bg-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-900 transition"
          >
            Plan Your Event
          </a>
        </div>
      </div>
    </section>
  );
}
