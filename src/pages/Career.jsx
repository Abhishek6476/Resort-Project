
import React, { useState } from "react";

const Career = () => {
 const jobs = [
  {
    title: "Front Desk Associate",
    location: "Noida, India",
    type: "Full-Time",
    description:
      "Responsible for welcoming guests, managing check-ins/check-outs, and ensuring excellent customer service.",
    img: "https://plus.unsplash.com/premium_photo-1661558563494-60cbd006c068?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjBjaGVjayUyMGlufGVufDB8fDB8fHww",
  },
  {
    title: "Housekeeping Staff",
    location: "Noida, India",
    type: "Full-Time",
    description:
      "Maintain cleanliness and hygiene in guest rooms and public areas, ensuring high standards of hospitality.",
    img: "https://plus.unsplash.com/premium_photo-1667520405114-47d3677f966e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2VrZWVwaW5nJTIwc3RhZmZ8ZW58MHx8MHx8fDA%3D", // Image 2
  },
  {
    title: "Executive Chef",
    location: "Noida, India",
    type: "Full-Time",
    description:
      "Plan menus, supervise kitchen staff, and deliver exceptional dining experiences to our guests.",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", // Image 3
  },
];


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      resume: null,
    });
  };

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <div className="relative w-full h-[60vh]">
        <img
          src="https://media.istockphoto.com/id/1499188408/video/table-decoration-wedding-dinner-wedding-ceremony-romantic-wedding-table-with-flower.avif?s=640x640&k=20&c=BVd7SvKGGoPffG6nOgOpb31tse3OOn3wXKm6bsswjxs="
          alt="Career Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6 sm:px-16">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-2">Job Opportunity At Resort</h1>
            <p className="text-lg">
              <span className="text-white">Home</span> &gt; Career
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Work With Us</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          We believe in teamwork, creativity, and hospitality excellence. Whether
          it’s a grand wedding, a corporate meeting, or a private event, our staff
          plays a key role in delivering memorable experiences.
        </p>
      </section>

      {/* Job Categories */}
      
     <section className="py-12 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
    Current Openings
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        
  {jobs.map((job, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
    >
      <img
        src={job.img}
        alt={job.title}
        className="h-52 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {job.location} • {job.type}
        </p>
        <p className="text-gray-600">{job.description}</p>
        <button className="mt-4 bg-blue-800 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md transition">
          Apply Now
        </button>
      </div>
    </div>
  ))}
    </div>
</section>


      {/* Why Join Us */}
      <section className="py-16 bg-yellow-50 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Join Us</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Growth Opportunities",
              desc: "Enhance your skills and build a rewarding career in the hospitality industry.",
            },
            {
              title: "Inclusive Culture",
              desc: "We celebrate diversity and foster a welcoming workplace for everyone.",
            },
            {
              title: "Exciting Events",
              desc: "Work on weddings, parties, and corporate functions that make lasting memories.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Apply Now
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-md space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Position Applied For</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            >
              <option value="">Select a position</option>
              {jobs.map((job, idx) => (
                <option key={idx} value={job.title}>
                  {job.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Upload Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
};

export default Career;
