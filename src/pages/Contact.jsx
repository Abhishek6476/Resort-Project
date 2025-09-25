import React from "react";

import img1 from "../assets/contact.jpg";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaMobileAlt,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="relative w-full h-[60vh] overflow-hidden">
  {/* Background Image */}
  <img
    src={img1}
    alt="Contact"
    className="w-full h-full object-cover"
    
  />

  {/* Light Dark Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-16 z-10">
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-2 text-white">Contact Us</h1>
      <p className="text-lg">
        <span className="text-white text-xl">Home</span>
        &nbsp;&gt;&nbsp;
        <span className="text-xl text-white">Contact Us</span>
      </p>
    </div>
  </div>
</div>


      {/* Container for form and contact info */}
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-0 py-16">
        {/* Left: Contact Form */}
        <div className="px-15">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            <span className="text-grey-700">Get In Touch</span>
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone No."
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="mt-5 bg-blue-800 text-white font-semibold text-xl px-6 py-4 rounded-lg transition duration-300 hover:bg-white hover:text-blue-800 border-2 border-blue-800"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="px-4 border-l border-gray-300 md:pl-10">
          <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
          <p className="text-gray-900 mb-6 text-lg">
            Whatever your query is, we’re here to resolve it quickly and
            clearly.
          </p>

          <div className="space-y-6 text-lg">
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-xl text-blue-600 mt-1" />
              <div>
                <span className="font-bold">OFFICE</span>
                <br />H - 15 BSI Business Park, Sector 63 Road, 305 3rd Floor,
                Noida Uttar Pradesh - 201301, (India)
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaEnvelope className="text-xl text-blue-600 mt-1" />
              <div>
                <span className="font-bold">EMAIL</span>
                <br />
                info@resort.com
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaMobileAlt className="text-xl text-blue-600 mt-1" />
              <div>
                <span className="font-bold">CALL TOLL FREE</span>
                <br />
                18002578009
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <FaPhoneAlt className="text-xl text-blue-600 mt-1" />
              <div>
                <span className="font-bold">PHONE</span>
                <br />
                +91-11-35017951
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Full-width Responsive Google Map */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] mt-0 pb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.027635982887!2d77.38817957459082!3d28.61666648242956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc5f1f1b6d35%3A0x8c0f9c1c1c1c1c1c!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20120101%2C%20India!5e0!3m2!1sen!2sus!4v1695220000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Resort Location"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
