import { FaTimes } from "react-icons/fa";

export default function BookingSidebar({
  isOpen,
  onClose,
  formData,
  setFormData,
  onSubmit,
}) {
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">
          {formData.id ? "Edit Booking" : "Add Booking"}
        </h2>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
          <FaTimes />
        </button>
      </div>

      <form className="p-6 flex flex-col gap-4" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Guest Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded-lg"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded-lg"
        />
        <input
          type="text"
          name="roomType"
          placeholder="Room Type"
          value={formData.roomType}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded-lg"
        />
        <input
          type="number"
          name="guests"
          placeholder="Guests"
          value={formData.guests}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded-lg"
        />
        <input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded-lg"
        />
        <input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded-lg"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded-lg"
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border px-3 py-2 rounded-lg"
        >
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <button
          type="submit"
          className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold"
        >
          {formData.id ? "Update Booking" : "Add Booking"}
        </button>
      </form>
    </div>
  );
}