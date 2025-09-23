import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Your inquiry has been submitted! We will contact you soon.");
    setForm({ name: "", email: "", phone: "", eventDate: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-8 space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-lg"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-lg"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-lg"
        required
      />
      <input
        type="date"
        name="eventDate"
        value={form.eventDate}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-lg"
      />
      <textarea
        name="message"
        placeholder="Tell us about your event..."
        value={form.message}
        onChange={handleChange}
        className="w-full border border-gray-300 p-3 rounded-lg"
        rows="4"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-lg font-semibold"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
