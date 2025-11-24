
import React, { useState } from "react";
import axios from "axios";

export default function ModalForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    eventType: "", // UI ke liye
  });
  const [loading, setLoading] = useState(false);

  const eventOptions = [
    "Royal Ball Room",
    "Grand Ball Room",
    "Engagement",
    "Corporate Meetings",
    "Seminar",
    "Mehndi",
    "Elite Ball Room",
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.eventType) {
      alert("Please select Event Type!");
      return;
    }

    try {
      setLoading(true);

      // ✅ Map eventType to backend field 'occasion'
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        guests: formData.guests,
        occasion: formData.eventType, // ← backend field
      };

      const response = await axios.post(
        "http://localhost:5000/api/event-booking",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Booking saved:", response.data);
      alert("Your event details have been submitted successfully!");
      onClose();

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        guests: "",
        eventType: "",
      });
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Something went wrong while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-lg mx-4 p-6 z-10">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Get a Quote
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          />

          {/* Event Type Dropdown */}
          <select
            value={formData.eventType}
            onChange={(e) => handleChange("eventType", e.target.value)}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          >
            <option value="">Select Event Type</option>
            {eventOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <input
            type="date"
            value={formData.date}
            onChange={(e) => handleChange("date", e.target.value)}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          />
          <input
            type="number"
            placeholder="Number of Guests"
            value={formData.guests}
            onChange={(e) => handleChange("guests", e.target.value)}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
