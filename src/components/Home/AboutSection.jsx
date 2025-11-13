// src/components/AboutSection.jsx
import aboutImg from "../../assets/About.jpg"; // apni image import karo

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Image */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="About Resort"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
          {/* Optional Overlay Badge */}
          <div className="absolute bottom-5 left-5 bg-blue-900 text-white px-4 py-2 rounded-lg shadow">
            10+ Years of Excellence
          </div>
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Welcome to Resort
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Nestled amidst serene landscapes, our resort offers the perfect blend of 
            <span className="font-semibold"> luxury, comfort, and warm hospitality.</span> 
            Whether you’re planning a family vacation, a wedding, or a corporate retreat, 
            we ensure unforgettable experiences tailored to your needs.
          </p>

          {/* Highlights */}
          <ul className="grid grid-cols-2 gap-4 mb-6 text-gray-700">
            <li className="flex items-center space-x-2">
              <span className="text-back">✔</span> Luxury Rooms
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-black">✔</span> Wedding & Banquets
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-black">✔</span> Fine Dining
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-black">✔</span> Corporate Event
            </li>
          </ul>

          {/* CTA Button */}
          <a
            href="/about"
            className="inline-block bg-blue-800 text-white px-6 py-3 rounded-full shadow hover:bg-blue-900 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
