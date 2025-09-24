import { useState } from "react";
import ModalForm from "../../../components/ModalForm";

// Hero Image
import heroImg from "../../../assets/grand5.jpg";

// Gallery Images
import img1 from "../../../assets/grand-hall-2.jpg";
import img2 from "../../../assets/grand-hall-3.jpg";
import img3 from "../../../assets/grand-hall-2.jpg";
import img4 from "../../../assets/grand-hall-3.jpg";
import img5 from "../../../assets/grand-hall-2.jpg";
import img6 from "../../../assets/grand-hall-3.jpg";

// Icons
import {
  FaMusic,
  FaLightbulb,
  FaUtensils,
  FaUsers,
  FaCar,
  FaCrown,
} from "react-icons/fa";

export default function RoyalBallRoom() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const gallery = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <img
          src={heroImg}
          alt="Royal Ballroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Royal Ballroom</h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl">
            A majestic space for weddings, conferences, and grand celebrations
          </p>
        </div>
      </section>

      {/* About & Capacity */}
      <section className="py-16 container mx-auto px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">
          Royal <span className="text-blue-800">Ball Room</span>
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          The Royal Ballroom offers unmatched grandeur and elegance, perfect for
          lavish weddings, high-profile events, and corporate galas. With
          exquisite interiors and modern facilities, it sets the stage for an
          unforgettable experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Table */}
          <div className="col-span-1">
            <table className="w-full border border-gray-300 text-sm shadow-sm">
              <tbody>
                <tr>
                  <td className="border p-2 font-semibold">Name (Seating)</td>
                  <td className="border p-2">Royal Ball Room</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Pax</td>
                  <td className="border p-2">700-1200</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Classroom</td>
                  <td className="border p-2">600</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Theatre</td>
                  <td className="border p-2">1000</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Banquet</td>
                  <td className="border p-2">800</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Cluster</td>
                  <td className="border p-2">600</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">“U” Setup</td>
                  <td className="border p-2">500</td>
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
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Royal Ballroom ${idx + 1}`}
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
                title: "Premium Sound System",
                desc: "Crystal clear audio for every celebration.",
              },
              {
                icon: <FaLightbulb className="text-3xl text-blue-800" />,
                title: "Custom Lighting",
                desc: "Set the perfect mood for your event.",
              },
              {
                icon: <FaUtensils className="text-3xl text-blue-800" />,
                title: "Exquisite Catering",
                desc: "Cuisines crafted to delight your guests.",
              },
              {
                icon: <FaUsers className="text-3xl text-blue-800" />,
                title: "Luxury Lounges",
                desc: "Spacious bridal & VIP lounges.",
              },
              {
                icon: <FaCar className="text-3xl text-blue-800" />,
                title: "Valet Parking",
                desc: "Convenient and safe parking facilities.",
              },
              {
                icon: <FaCrown className="text-3xl text-blue-800" />,
                title: "Event Concierge",
                desc: "Dedicated team for flawless execution.",
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
            Experience royal luxury and unmatched services at our premium venue.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaCrown className="text-3xl text-blue-800" />,
              title: "Royal Interiors",
              desc: "Grand décor with chandeliers and regal finishes.",
            },
            {
              icon: <FaCar className="text-3xl text-blue-800" />,
              title: "Large Capacity",
              desc: "Spacious enough for grand-scale events.",
            },
            {
              icon: <FaUsers className="text-3xl text-blue-800" />,
              title: "Professional Team",
              desc: "Dedicated staff for complete event support.",
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

      {/* Image Modal (same as GrandBallRoom) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Large Preview"
            className="max-w-4xl max-h-[80vh] w-full object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
