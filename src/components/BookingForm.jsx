import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function BookingForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { room } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { room, formData } });
  };

  if (!room) return <p className="text-center text-red-500">No room selected!</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Book {room.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className="w-full p-2 border rounded" required />

        <button type="submit" className="w-full bg-blue-800 text-white py-2 rounded-full hover:bg-blue-900 transition">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}