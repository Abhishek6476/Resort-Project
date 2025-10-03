

// 100 work and mail send
// import React, { useState } from "react";
// import img1 from "../assets/contact.jpg";
// import party from "../assets/contact-party.jpg";
// import {
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMobileAlt,
// } from "react-icons/fa";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   // handle change
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // handle submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         setStatus("Message sent successfully!");
//         setFormData({ name: "", email: "", phone: "", message: "" });
//       } else {
//         setStatus("Failed to send message. Try again.");
//       }
//     } catch (error) {
//       setStatus("Error sending message.");
//     }
//   };

//   return (
//     <section className="bg-white text-gray-800">
//       {/* Hero Section */}
//       <div className="relative w-full h-[60vh] overflow-hidden">
//         <img src={img1} alt="Contact" className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-black/30"></div>

//         <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-16 z-10">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold mb-3 text-white">Contact Us</h1>
//             <p className="text-lg flex items-center justify-center gap-2">
//               <span className="text-white">Home</span>
//               <span className="text-white">&gt;</span>
//               <span className="text-white">Contact Us</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 py-16">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
//            <p className="text-gray-600 mb-8 leading-relaxed">
//              Have any questions or concerns? Fill out the form below and we’ll
//             get back to you as soon as possible.
//            </p>
//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg"
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone No."
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg"
//             />
//             <textarea
//               rows="4"
//               name="message"
//               placeholder="Message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg"
//             ></textarea>

//             <button
//               type="submit"
//               className="mt-6 bg-blue-800 text-white font-semibold text-lg px-6 py-3 rounded-lg hover:bg-blue-900"
//             >
//               Submit
//             </button>

//             {status && (
//               <p className="text-sm mt-3 text-green-600 font-medium">{status}</p>
//             )}
//           </form>
//         </div>

//         {/* Right: Contact Info */}
//         <div className="px-4 border-t md:border-t-0 md:border-l border-gray-300 md:pl-10">
//           <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
//           <p className="text-gray-600 mb-8 leading-relaxed">
//             Whatever your query is, we’re here to resolve it quickly and clearly.
//           </p>

//           <div className="space-y-6 text-base">
//             <div className="flex items-start space-x-4">
//               <FaMapMarkerAlt className="text-xl text-blue-800 mt-1" />
//               <div>
//                 <span className="font-semibold">OFFICE</span>
//                 <p className="text-gray-600 leading-relaxed">
//                   H - 15 BSI Business Park, Sector 63 Road, 305 3rd Floor, Noida
//                   Uttar Pradesh - 201301, (India)
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <FaEnvelope className="text-xl text-blue-800 mt-1" />
//               <div>
//                 <span className="font-semibold">EMAIL</span>
//                 <p className="text-gray-600">info@resort.com</p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <FaMobileAlt className="text-xl text-blue-800 mt-1" />
//               <div>
//                 <span className="font-semibold">CALL TOLL FREE</span>
//                 <p className="text-gray-600">18002578009</p>
//               </div>
//             </div>

//             <div className="flex items-start space-x-4">
//               <FaPhoneAlt className="text-xl text-blue-800 mt-1" />
//               <div>
//                 <span className="font-semibold">PHONE</span>
//                 <p className="text-gray-600">+91-11-35017951</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Party Image with Overlay Text */}
//       <div className="relative w-full h-[50vh] sm:h-[70vh] overflow-hidden">
//         <img
//           src={party}
//           alt="Contact-party"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
//           <h2 className="text-white text-2xl sm:text-4xl font-bold text-center px-4">
//             For all the special celebrations!
//           </h2>
//         </div>
//       </div>

//       {/* Google Map */}
//       <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] mt-4 pb-3">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.027635982887!2d77.38817957459082!3d28.61666648242956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc5f1f1b6d35%3A0x8c0f9c1c1c1c1c1c!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20120101%2C%20India!5e0!3m2!1sen!2sus!4v1695220000000!5m2!1sen!2sus"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           title="Resort Location"
//         ></iframe>
     
//       </div>
//     </section>
//   );
// };

// export default ContactUs;




import React, { useState, useEffect, useRef } from "react";

import img1 from "../assets/contact.jpg";
import party from "../assets/contact-party.jpg";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaMobileAlt,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const timeoutRef = useRef(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Frontend validation
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("Please fill all fields");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      setStatus("Invalid email address");
      return false;
    }
    if (!phoneRegex.test(formData.phone)) {
      setStatus("Invalid phone number (must be 10 digits)");
      return false;
    }
    return true;
  };



const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setStatus("Sending...");
  if (timeoutRef.current) clearTimeout(timeoutRef.current);

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setStatus(data.msg);

    if (res.ok) {setFormData({ name: "", email: "", phone: "", message: "" });
  }
   timeoutRef.current = setTimeout(() => {
        setStatus("");
      }, 5000);
    } catch (err) {
      setStatus("Error sending message");
      timeoutRef.current = setTimeout(() => {
        setStatus("");
      }, 5000);
  }
};
 

  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img src={img1} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-16 z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-3 text-white">Contact Us</h1>
            <p className="text-lg flex items-center justify-center gap-2">
              <span className="text-white">Home</span>
              <span className="text-white">&gt;</span>
              <span className="text-white">Contact Us</span>
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 py-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>

           <p className="text-gray-600 mb-8 leading-relaxed">
             Have any questions or concerns? Fill out the form below and we’ll
             get back to you as soon as possible.
           </p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg"
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg"
            ></textarea>

            <button
              type="submit"
              disabled={status === "Sending..."}
              className="mt-6 bg-blue-800 text-white font-semibold text-lg px-6 py-3 rounded-lg hover:bg-blue-900 disabled:opacity-50"
            >
              Submit
            </button>

            {status && (
              <p
                className={`text-sm mt-3 font-medium ${
                  status.includes("success") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="px-4 border-t md:border-t-0 md:border-l border-gray-300 md:pl-10">
          <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Whatever your query is, we’re here to resolve it quickly and clearly.
          </p>

          <div className="space-y-6 text-base">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-xl text-blue-800 mt-1" />
              <div>
                <span className="font-semibold">OFFICE</span>
                <p className="text-gray-600 leading-relaxed">
                  H - 15 BSI Business Park, Sector 63 Road, 305 3rd Floor, Noida, Uttar Pradesh - 201301, (India)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-xl text-blue-800 mt-1" />
              <div>
                <span className="font-semibold">EMAIL</span>
                <p className="text-gray-600">info@resort.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaMobileAlt className="text-xl text-blue-800 mt-1" />
              <div>
                <span className="font-semibold">CALL TOLL FREE</span>
                <p className="text-gray-600">18002578009</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-xl text-blue-800 mt-1" />
              <div>
                <span className="font-semibold">PHONE</span>
                <p className="text-gray-600">+91-11-35017951</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Party Image */}
      <div className="relative w-full h-[50vh] sm:h-[70vh] overflow-hidden">
        <img src={party} alt="Contact-party" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h2 className="text-white text-2xl sm:text-4xl font-bold text-center px-4">
            For all the special celebrations!
          </h2>
        </div>
      </div>
    
    {/* Google Map */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] mt-4 pb-3">
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
