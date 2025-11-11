import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ModalForm({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [pageName, setPageName] = useState("");


  const location = useLocation();
    useEffect(() => {
    // Automatically detect page name from URL path
    const path = location.pathname.split("/").filter(Boolean).pop() || "unknown";
    const formatted =
      path.charAt(0).toUpperCase() + path.slice(1).toLowerCase();
    setPageName(formatted);
  }, [location.pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, phone, message, pageName };

    try {
      const res = await fetch("http://localhost:5000/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.msg || "Form submitted successfully!");
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-lg mx-4 p-6 z-10">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Get a Quote ({pageName.charAt(0).toUpperCase() + pageName.slice(1)})
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
