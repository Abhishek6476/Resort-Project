import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    rooms: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking: ${JSON.stringify(formData)}`);
  };

  return (
    <section className="w-full bg-white shadow-lg -mt-12 relative z-20">
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 p-6"
      >
        {/* Check In */}
        <div>
          <label className="block text-gray-700 text-sm mb-1">Check-In</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Check Out */}
        <div>
          <label className="block text-gray-700 text-sm mb-1">Check-Out</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Guests */}
        <div>
          <label className="block text-gray-700 text-sm mb-1">Guests</label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            {[1, 2, 3, 4, 5].map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        {/* Rooms */}
        <div>
          <label className="block text-gray-700 text-sm mb-1">Rooms</label>
          <select
            name="rooms"
            value={formData.rooms}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition"
          >
            Book Now
          </button>
        </div>
      </form>
    </section>
  );
}
