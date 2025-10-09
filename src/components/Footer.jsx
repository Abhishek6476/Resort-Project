// import React, { useState } from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
//   FaYoutube,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// const Footer = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Yahan aap API ya form processing code likh sakte hain
//     alert("Form submitted successfully!");
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <footer className="w-full bg-gray-900 text-gray-300 py-4">
//         <div className="w-full px-6 md:px-12 lg:px-20">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//             {/* Left side: Hotel Contact Info */}
//             <div>
//               <h3 className="text-white font-semibold mb-4 border-b-2 border-yellow-600 inline-block">
//                 RESORT
//               </h3>

//               <p className=" text-md leading-normal text-gray-300">
//                 Royal Resort offers a luxurious and serene retreat with elegant
//                 rooms, top-tier facilities, fine dining options, and outstanding
//                 personalized guest service.
//               </p>

//               {/* Social Icons */}
//               <div className="flex space-x-5 mt-3 text-lg sm:text-xl">
//                 <a href="#" className="hover:text-yellow-500">
//                   <FaFacebookF />
//                 </a>
//                 <a href="#" className="hover:text-yellow-500">
//                   <FaTwitter />
//                 </a>
//                 <a href="#" className="hover:text-yellow-500">
//                   <FaLinkedinIn />
//                 </a>
//                 <a href="#" className="hover:text-yellow-500">
//                   <FaInstagram />
//                 </a>
//                 <a href="#" className="hover:text-yellow-500">
//                   <FaYoutube />
//                 </a>
//               </div>
//             </div>

//             {/* Second column: Common Links */}
//             <div>
//               <h3 className="text-white font-semibold mb-4 border-b-2 border-yellow-600 inline-block">
//                 COMMON LINKS
//               </h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a href="#" className="hover:text-yellow-500">
//                     Services
//                   </a>
//                 </li>
//                 <li>
//                   <a href="Dining" className="hover:text-yellow-500">
//                     Dining
//                   </a>
//                 </li>
//                 <li>
//                   <a href="Rooms" className="hover:text-yellow-500">
//                     Rooms
//                   </a>
//                 </li>
//                 <li>
//                   <a href="Gallery" className="hover:text-yellow-500">
//                     Gallery
//                   </a>
//                 </li>
//                 <li>
//                   <a href="Career" className="hover:text-yellow-500">
//                     Career
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Third column: Corporate Events */}
//             <div>
//               <h3 className="text-white font-semibold mb-4 border-b-2 border-yellow-600 inline-block">
//                 EVENTS
//               </h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a href="/Services/corporate/meeting" className="hover:text-yellow-500">
//                     Meeting
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/Services/corporate/conference" className="hover:text-yellow-500">
//                     Conference
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/Services/corporate/seminar" className="hover:text-yellow-500">
//                     Seminar
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/Services/venue/grand" className="hover:text-yellow-500">
//                     Venue
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/Services/social/reception" className="hover:text-yellow-500">
//                     Social Events
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Right side: Contact Us with button */}
//             <div>
//               <h3 className="text-white font-semibold mb-4 border-b-2 border-yellow-600 inline-block">
//                 CONTACT US
//               </h3>
//               <p className="text-sm leading-relaxed">
//                 {/* Got questions or event inquiries? <br /> */}
//                 {/* We're here 24/7 to help!  */}
//                 {/* Contact Resort for bookings & info */}
//               </p>
//               <div className="mb-2 text-sm leading-relaxed text-gray-300">
//                 <p> Mob - +91 9876543210</p>
//                 <p>Email - info@resort.com</p>
//                 <p>
//                   Address - H 15 BSI Business Park, Sector 63, Noida – 201309
//                 </p>
//               </div>
//               <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="bg-yellow-600 hover:bg-yellow-500 text-white px-5 py-2 rounded transition"
//               >
//                 Get in Touch
//               </button>
//             </div>
//           </div>

//           {/* Divider + Copyright */}
//           <div className="mt-2 ">
//             <div className="border-t border-gray-700 w-full"></div>
//             <div className="pt-2 text-center text-gray-400 text-xs sm:text-sm max-w-xs mx-auto">
//               <p>Copyright © Resort 2025. All rights reserved.</p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Modal Popup */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-xl"
//               aria-label="Close modal"
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//               Contact Us
//             </h2>
//             <form onSubmit={handleFormSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="border border-gray-300 rounded px-4 py-2 w-full"
//                 required
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="border border-gray-300 rounded px-4 py-2 w-full"
//                 required
//               />
//               <input
//                 type="mob"
//                 placeholder="Mobile No"
//                 className="border border-gray-300 rounded px-4 py-2 w-full"
//                 required
//               />
//               <textarea
//                 rows="4"
//                 placeholder="Your Message"
//                 className="border border-gray-300 rounded px-4 py-2 w-full"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded transition w-full"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Footer;




import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-10">
        
        {/* Logo + Intro */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">GreenLeaf Resort</h2>
          <p className="text-gray-400 leading-relaxed">
            Experience luxury, comfort, and world-class hospitality 
            at GreenLeaf Resort. Your perfect getaway awaits.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="/rooms" className="hover:text-blue-400 transition">Rooms</a></li>
            <li><a href="/dining" className="hover:text-blue-400 transition">Dining</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>H-15 BSI Business Park, Noida, India</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-500" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <span>info@greenleafresort.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-800 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-pink-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-red-600 transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} GreenLeaf Resort. All Rights Reserved.
      </div>
    </footer>
  );
}
