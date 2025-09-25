import { useState } from "react";
import ModalForm from "../../../components/ModalForm";

// Hero Image
import heroImg from "../../../assets/meeting3.jpg";
import aboutImg from "../../../assets/meeting6.jpg";

// Gallery Images
import img1 from "../../../assets/meeting5.jpg";
import img2 from "../../../assets/meeting6.jpg";
import img3 from "../../../assets/meeting7.jpg";
import img4 from "../../../assets/meeting8.jpg";
import img5 from "../../../assets/meeting9.jpg";
import img6 from "../../../assets/meeting10.jpg";

export default function Seminar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const gallery = [img1, img2, img3, img4, img5, img6];

  const features = [
    "Spacious Seminar Halls",
    "Flexible Seating Layouts",
    "Interactive Audio-Visual Equipment",
    "High-Speed Internet Connectivity",
    "Catering & Refreshments",
    "Dedicated Event Assistance",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <img
          src={heroImg}
          alt="Seminar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Seminar</h1>
        </div>
      </section>

      {/* About + Features + CTA */}
      <section className="py-16 container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={aboutImg}
            alt="Seminar Setup"
            className="w-full h-90 object-cover"
          />
        </div>

        {/* Text + Features */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Professional Seminar Venues
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our seminar venues are tailored to inspire knowledge sharing and
            learning. From academic seminars to professional development
            programs, we provide the ideal space for impactful sessions.
          </p>

          {/* Features List in 2 columns */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start">
                <span className="text-blue-800 text-lg mr-2">•</span>
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-full shadow-md transition"
          >
            Get a Quote
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Venue <span className="text-blue-800">Gallery</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore our seminar halls designed for engaging and productive
              events.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg shadow cursor-pointer"
                onClick={() => setSelectedImg(img)}
              >
                <img
                  src={img}
                  alt={`Seminar ${idx + 1}`}
                  className="w-full h-48 object-cover transform hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
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
          <img
            src={selectedImg}
            alt="Enlarged"
            className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
