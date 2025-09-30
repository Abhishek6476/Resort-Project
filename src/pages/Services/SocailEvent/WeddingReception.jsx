// src/pages/WeddingReception.jsx
import React, { useState } from "react";
import {
  FaMusic,
  FaUtensils,
  FaLeaf,
  FaConciergeBell,
  FaCameraRetro,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineEventAvailable, MdOutlineLocalFlorist } from "react-icons/md";
import { motion } from "framer-motion";

import heroImg from "../../../assets/wedding1.jpg";
import hallImg from "../../../assets/wedding.jpg";
import gallery1 from "../../../assets/wedding2.jpg";
import gallery2 from "../../../assets/wedding3.jpg";
import gallery3 from "../../../assets/wedding4.jpg";
import gallery4 from "../../../assets/wedding5.jpg";
import gallery5 from "../../../assets/wedding6.jpg";
import gallery6 from "../../../assets/wedding7.jpg";
import { FiImage } from "react-icons/fi";

export default function WeddingReception() {
  // State for Modal
  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Wedding Reception</h1>
          <p className="text-lg mb-6">
            Celebrate love in style with our luxurious venues & services.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={hallImg}
          alt="Reception Hall"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Your Dream Reception Venue
          </h2>
          <p className="mb-6">
            Our banquet halls are designed to make your wedding reception truly
            unforgettable. From elegant décor to customized catering, we provide
            everything to make your special day memorable.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <MdOutlineEventAvailable className="text-blue-800 text-xl" />{" "}
              Spacious Banquet Halls
            </li>
            <li className="flex items-center gap-3">
              <MdOutlineLocalFlorist className="text-blue-800 text-xl" />{" "}
              Elegant Stage Decoration
            </li>
            <li className="flex items-center gap-3">
              <FaUtensils className="text-blue-800 text-xl" /> Customized
              Catering Menu
            </li>
            <li className="flex items-center gap-3">
              <FaMusic className="text-blue-800 text-xl" /> Live Music &
              Entertainment
            </li>
          </ul>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Reception Moments
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Reception ${i + 1}`}
                className="rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-blue-800">Wedding Services</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCameraRetro className="text-2xl text-blue-800" />,
                title: "Photography",
                desc: "Capture every precious moment with our professional wedding photographers.",
              },
              {
                icon: (
                  <MdOutlineLocalFlorist className="text-2xl text-blue-800" />
                ),
                title: "Decoration",
                desc: "Elegant and customized décor to match your wedding theme and style.",
              },
              {
                icon: <FaMusic className="text-2xl text-blue-800" />,
                title: "Entertainment",
                desc: "From live bands to DJs, we make sure your guests enjoy every moment.",
              },
              {
                icon: <FaUtensils className="text-2xl text-blue-800" />,
                title: "Catering",
                desc: "Delicious multi-cuisine catering with customizable menu options.",
              },
              {
                icon: <FaUsers className="text-2xl text-blue-800" />,
                title: "Guest Management",
                desc: "Seamless coordination for your guests with hospitality services.",
              },
              {
                icon: <FaConciergeBell className="text-2xl text-blue-800" />,
                title: "Wedding Planner",
                desc: "Dedicated planners to ensure your big day is stress-free and perfect.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Gallery */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = gallery.indexOf(selectedImage);
              const prevIndex =
                (currentIndex - 1 + gallery.length) % gallery.length;
              setSelectedImage(gallery[prevIndex]);
            }}
            className="absolute left-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/70"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="Large Preview"
            className="max-w-4xl max-h-[80vh] w-full object-contain rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = gallery.indexOf(selectedImage);
              const nextIndex = (currentIndex + 1) % gallery.length;
              setSelectedImage(gallery[nextIndex]);
            }}
            className="absolute right-6 text-white text-4xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/70"
          >
            ›
          </button>

          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-6 right-6 bg-black/50 px-3 py-1 rounded-full text-white text-2xl"
          >
            ✖
          </button>
        </div>
      )}

      {/* Packages Section */}
      {/* <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Basic",
              price: "₹50,000",
              features: ["Up to 100 Guests", "Standard Decoration", "Buffet Menu"],
            },
            {
              title: "Premium",
              price: "₹1,20,000",
              features: ["Up to 300 Guests", "Premium Decoration", "Live Music", "Multi-cuisine Menu"],
            },
            {
              title: "Luxury",
              price: "₹2,50,000",
              features: ["Up to 500 Guests", "Luxury Theme Décor", "DJ + Live Band", "Unlimited Menu"],
            },
          ].map((pkg, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
              <p className="text-blue-800 text-xl font-semibold mb-4">{pkg.price}</p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((f, j) => (
                  <li key={j} className="text-gray-600">• {f}</li>
                ))}
              </ul>
              <a
                href="/booking"
                className="bg-blue-800 hover:bg-blue-900 px-5 py-2 rounded-full text-white"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How many guests can the venue accommodate?",
                a: "Our banquet halls can host from 100 to 500 guests depending on the package.",
              },
              {
                q: "Do you provide catering services?",
                a: "Yes, we offer customizable catering menus with multi-cuisine options.",
              },
              {
                q: "Can we bring our own decorators?",
                a: "Yes, you can, but we also have in-house décor experts for a hassle-free experience.",
              },
            ].map((faq, i) => (
              <details key={i} className="bg-white border rounded-lg p-4">
                <summary className="cursor-pointer font-medium">
                  {faq.q}
                </summary>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${hallImg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Host Your Dream Reception?
          </h2>
          <a
            href="/contact"
            className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-full text-white font-medium"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
