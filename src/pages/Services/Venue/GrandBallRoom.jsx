import { useState } from "react";
import ModalForm from "../../../components/ModalForm";

// Hero Image
import heroImg from "../../../assets/grand5.jpg";

// Gallery Images
import img1 from "../../../assets/grand2.jpg";
import img2 from "../../../assets/grand3.jpg";
import img3 from "../../../assets/grand8.jpg";
import img4 from "../../../assets/grand5.jpg";
import img5 from "../../../assets/grand6.jpg";
import img6 from "../../../assets/grand7.jpg";

// Icons (react-icons)
import {
  FaMusic,
  FaUtensils,
  FaLightbulb,
  FaUsers,
  FaCar,
  FaCrown,
} from "react-icons/fa";

export default function GrandBallRoom() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const gallery = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <img
          src={heroImg}
          alt="Grand Ballroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Grand Ballroom</h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl">
            A luxurious venue for weddings, conferences & celebrations
          </p>
        </div>
      </section>

      {/* About & Capacity */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Grand Ball <span className="text-blue-800">Room</span>
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          The Grand Ball Room is the largest pillar-less banquet hall with a
          stunning height of 22 feet, offering an unobstructed view of the
          entire venue. Spread over 14,000 sq. ft. with an additional 8,000 sq.
          ft. plush lawn, it is perfect for grand celebrations.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Table */}
          <div className="col-span-1">
            <table className="w-full border border-gray-300 text-sm shadow-sm">
              <tbody>
                <tr>
                  <td className="border p-2 font-semibold">Name (Seating)</td>
                  <td className="border p-2">Grand Ball Room</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Pax</td>
                  <td className="border p-2">900-1500</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Classroom</td>
                  <td className="border p-2">900</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Theatre</td>
                  <td className="border p-2">1200</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Banquet</td>
                  <td className="border p-2">700</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Cluster</td>
                  <td className="border p-2">600</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">“U” Setup</td>
                  <td className="border p-2">590</td>
                </tr>
              </tbody>
            </table>

            <button
              onClick={() => setIsOpen(true)}
              className="mt-6 w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition"
            >
              Get Quote
            </button>
          </div>

          {/* Gallery */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg shadow cursor-pointer"
                onClick={() => setSelectedImg(img)}
              >
                <img
                  src={img}
                  alt={`Grand Ballroom ${idx + 1}`}
                  className="w-full h-48 object-cover transform hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Amenities & <span className="text-blue-800">Facilities</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We provide world-class facilities to ensure your event is truly
              unforgettable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMusic className="text-3xl text-blue-800" />,
                title: "State-of-the-art Sound System",
                desc: "Crystal clear audio for every event.",
              },
              {
                icon: <FaLightbulb className="text-3xl text-blue-800" />,
                title: "Customizable Lighting",
                desc: "Ambience that matches your theme.",
              },
              {
                icon: <FaUtensils className="text-3xl text-blue-800" />,
                title: "World-class Catering",
                desc: "Delicious cuisines tailored for you.",
              },
              {
                icon: <FaUsers className="text-3xl text-blue-800" />,
                title: "Bridal & Green Rooms",
                desc: "Private spaces for your comfort.",
              },
              {
                icon: <FaCar className="text-3xl text-blue-800" />,
                title: "Ample Parking",
                desc: "Safe & hassle-free parking space.",
              },
              {
                icon: <FaCrown className="text-3xl text-blue-800" />,
                title: "Dedicated Event Manager",
                desc: "Professional support throughout.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose <span className="text-blue-800">Our Ballroom?</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experience unmatched luxury and convenience with our premium
            features.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaCrown className="text-3xl text-blue-800" />,
              title: "Luxury Interiors",
              desc: "Elegant décor with high ceilings and premium finishes.",
            },
            {
              icon: <FaCar className="text-3xl text-blue-800" />,
              title: "Spacious Parking",
              desc: "Safe & hassle-free parking for all your guests.",
            },
            {
              icon: <FaUsers className="text-3xl text-blue-800" />,
              title: "Event Support",
              desc: "Professional event planners to manage everything smoothly.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Form */}
      {isOpen && <ModalForm onClose={() => setIsOpen(false)} />}

      {/* Image Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = gallery.indexOf(selectedImg);
              const prevIndex =
                (currentIndex - 1 + gallery.length) % gallery.length;
              setSelectedImg(gallery[prevIndex]);
            }}
            className="absolute left-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/70"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={selectedImg}
            alt="Preview"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = gallery.indexOf(selectedImg);
              const nextIndex = (currentIndex + 1) % gallery.length;
              setSelectedImg(gallery[nextIndex]);
            }}
            className="absolute right-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/70"
          >
            ›
          </button>

          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImg(null);
            }}
            className="absolute top-6 right-6 bg-black/50 px-3 py-1 rounded-full text-white text-2xl"
          >
            ✖
          </button>
        </div>
      )}

    </div>
  );
}
