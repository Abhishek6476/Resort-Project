import React from "react";
import diningImg from "../../assets/dining.jpg";
import { FaUtensils, FaWineGlassAlt, FaBirthdayCake, FaCoffee } from "react-icons/fa";

export default function DiningSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={diningImg}
            alt="Dining Area"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Fine Dining Experience
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At GreenLeaf Resort, dining is more than a meal—it’s a journey of
            flavors. From authentic Indian delicacies to international cuisines,
            our chefs craft each dish with passion and perfection.
          </p>

          {/* Highlights */}
          <ul className="grid grid-cols-2 gap-4 mb-6">
            <li className="flex items-center space-x-2 text-gray-700">
              <FaUtensils className="w-6 h-6 text-gray-600" />
              <span>Multi-Cuisine</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-700">
              <FaWineGlassAlt className="w-6 h-6 text-gray-600" />
              <span>Lounge & Bar</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-700">
              <FaBirthdayCake className="w-6 h-6 text-gray-600" />
              <span>Bakery & Desserts</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-700">
              <FaCoffee className="w-6 h-6 text-gray-600" />
              <span>Café & Coffee</span>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex space-x-4">
            <a
              href="/menu"
              className="bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-900 transition"
            >
              Explore Menu
            </a>
            <a
              href="/reserve"
              className="bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-900 transition"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
