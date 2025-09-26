
import { useState } from "react";
import ModalForm from "../../../components/ModalForm";

// Hero Image
import heroImg from "../../../assets/meeting3.jpg";
import aboutImg from "../../../assets/conference1.jpg";

// Gallery Images
import img1 from "../../../assets/conference2.jpg";
import img2 from "../../../assets/conference3.jpg";
import img3 from "../../../assets/conference4.jpg";
import img4 from "../../../assets/conference1.jpg";
import img5 from "../../../assets/conference2.jpg";
import img6 from "../../../assets/conference3.jpg";

export default function Conference() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeFAQ, setActiveFAQ] = useState(null); // for FAQ toggle

  const gallery = [img1, img2, img3, img4, img5, img6];

  const features = [
    "Spacious Conference Halls",
    "Flexible Seating Options",
    "Advanced Audio-Visuals",
    "High-Speed Connectivity",
    "On-Site Catering",
    "Professional Support",
  ];

  // FAQs Data
  const faqs = [
    {
      q: "What is the seating capacity of your conference halls?",
      a: "Our halls can accommodate from 50 to 500 guests depending on the setup.",
    },
    {
      q: "Do you provide audio-visual equipment?",
      a: "Yes, we provide state-of-the-art audio-visual equipment including projectors, mics, and sound systems.",
    },
    {
      q: "Is catering service available?",
      a: "Yes, we offer on-site catering with customizable menu options.",
    },
    {
      q: "Can the seating arrangements be customized?",
      a: "Absolutely, we provide flexible seating options like theater, classroom, or cluster style.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <img
          src={heroImg}
          alt="Conference"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Conference</h1>
        </div>
      </section>

      {/* About + Features + CTA */}
      <section className="py-16 container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={aboutImg}
            alt="Conference Setup"
            className="w-full h-86 object-cover"
          />
        </div>

        {/* Text + Features */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            World-Class Conference Spaces
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our conference venues are designed for impactful discussions and
            collaborations. With state-of-the-art facilities, we make sure your
            conferences are productive and memorable.
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
              Take a closer look at our modern and spacious conference halls.
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
                  alt={`Conference ${idx + 1}`}
                  className="w-full h-48 object-cover transform hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Frequently Asked <span className="text-blue-800">Questions</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find answers to common queries about our conference facilities.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="border rounded-lg shadow-sm bg-white"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-medium text-gray-800"
                onClick={() =>
                  setActiveFAQ(activeFAQ === idx ? null : idx)
                }
              >
                {item.q}
                <span className="text-blue-800">
                  {activeFAQ === idx ? "−" : "+"}
                </span>
              </button>
              {activeFAQ === idx && (
                <div className="px-6 pb-4 text-gray-600">{item.a}</div>
              )}
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
              const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
              setSelectedImg(gallery[prevIndex]);
            }}
            className="absolute left-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/70"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={selectedImg}
            alt="Enlarged"
            className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
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
        </div>
      )}
    </div>
  );
}
