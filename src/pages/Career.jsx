import React, { useState, useEffect, useRef } from "react";
import carrier from "../assets/carrier.jpg";
import resume from "../assets/job_apply1.jpg";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const formRef = useRef(null);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timeoutRef = useRef(null);

  // Fetch jobs from backend API
  const fetchJobs = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/jobs");
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  useEffect(() => {
    fetchJobs();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const validateForm = () => {
    const { name, email, phone, position, resume } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!name || !email || !phone || !position || !resume) {
      setStatus("Please fill all fields and upload your resume");
      return false;
    }
    if (!emailRegex.test(email)) {
      setStatus("Invalid email address");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      setStatus("Invalid phone number (10 digits required)");
      return false;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
    ];
    if (!allowedTypes.includes(resume.type)) {
      setStatus("Resume must be PDF, DOC, DOCX, JPG, PNG");
      return false;
    }
    if (resume.size > 2 * 1024 * 1024) {
      setStatus("Resume size must be under 2 MB");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setStatus(""), 9000);
      return;
    }

    setIsSending(true);
    setStatus("Sending application...");

    const body = new FormData();
    body.append("name", formData.name);
    body.append("email", formData.email);
    body.append("phone", formData.phone);
    body.append("position", formData.position);
    body.append("resume", formData.resume);

    try {
      const res = await fetch("http://localhost:5000/api/job-applications", {
        method: "POST",
        body,
      });

      const data = await res.json();
      setStatus(
        data.msg ||
          (res.ok ? "Application submitted Successfully!" : "Submission failed")
      );
      if (res.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          resume: null,
        });
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error. Please try later.");
    } finally {
      setIsSending(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setStatus(""), 9000);
    }
  };

  const handleApplyClick = (jobTitle) => {
    setFormData((prev) => ({ ...prev, position: jobTitle }));
    setIsModalOpen(true); // open modal
  };

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <div className="relative w-full h-[60vh]">
        <img
          src={resume}
          alt="Career Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 flex items-center justify-center px-8">
          <div className="text-white max-w-2xl text-center">
            <h1 className="text-5xl font-bold mb-3">Career Opportunities</h1>
            <ul className="flex justify-center space-x-3 text-sm md:text-base">
              <li>
                <a
                  href="/"
                  className="hover:underline hover:text-gray-200 transition"
                >
                  Home
                </a>
              </li>
              <li> &gt;</li>
              <li className="text-gray-200">Career</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-12 container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-4">
              Work With Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We believe in teamwork, creativity, and hospitality excellence.
              Whether it's a grand wedding, a corporate meeting, or a private
              event, our staff plays a key role in delivering memorable
              experiences. We invest in training and professional development to
              help you grow in your career.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() =>
                  window.scrollTo({ top: 700, behavior: "smooth" })
                }
                className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-2 rounded-lg shadow"
              >
                Explore Openings
              </button>
              {/* <button onClick={() => fileInputRef.current.click()} className="bg-white text-blue-800 border border-gray-200 px-5 py-2 rounded-lg shadow">Send Resume</button> */}
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={carrier}
              alt="team"
              className="rounded-2xl shadow-lg object-cover w-full h-80"
            />
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Current Openings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={
                  job.image
                    ? `http://localhost:5000/uploads/${job.image}`
                    : resume
                }
                alt={job.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  📍 {job.location} • 💼 {job.jobType || "Full-Time"}
                </p>
                <p className="text-gray-600 mb-4">{job.type}</p>
                <button
                  onClick={() => handleApplyClick(job.title)}
                  className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-blue-50 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Join Us</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Application Modal */}
      {/* Job Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 font-bold text-xl"
            >
              &times;
            </button>

            {/* Form */}
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">
              Job Application
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              {["name", "email", "phone"].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-gray-700 mb-1">
                    {field === "name"
                      ? "Full Name"
                      : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-800 transition text-sm"
                  />
                </div>
              ))}

              <div>
                <label className="block text-gray-700 mb-1">
                  Position Applied For
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  readOnly
                  className="w-full border border-gray-300 px-3 py-2 rounded bg-gray-100 cursor-not-allowed text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Upload Resume
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-800 transition text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold px-4 py-2 rounded transition disabled:opacity-50 text-sm"
              >
                {isSending ? "Sending..." : "Submit Application"}
              </button>

              {status && (
                <p
                  className={`text-xs mt-2 font-medium ${
                    status.toLowerCase().includes("success")
                      ? "text-blue-800"
                      : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      )}

      <section
        className="relative py-20 px-6 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${carrier})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h3 className="text-3xl font-semibold text-white mb-3">
            Didn’t find a suitable role?
          </h3>

          <p className="text-gray-200 text-lg mb-4">
            We are always looking for passionate individuals to join our family.
          </p>

          <p className="text-white text-xl font-medium">
            Send your resume directly to:
            <br />
            <a
              href="mailto:hr@yourhotel.com"
              className="text-blue-400 underline hover:text-blue-300 transition"
            >
              hr@yourhotel.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Career;
