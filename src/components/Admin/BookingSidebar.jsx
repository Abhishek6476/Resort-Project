
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function BookingSidebar({
  isOpen,
  onClose,
  formData,
  setFormData,
  onSubmit,
}) {
  // ✅ Input change handler
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ✅ Prevent form from resetting when sidebar opens
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        roomType: "",
        guests: 1,
        checkIn: "",
        checkOut: "",
        amount: "",
        status: "Pending",
      });
    }
  }, [isOpen, setFormData]);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Edit Booking</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <FaTimes size={18} />
        </button>
      </div>

      {/* Form */}
      <form className="p-5 flex flex-col gap-3 text-sm" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Guest Name"
          value={formData.name || ""}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded-lg focus:ring-1 focus:ring-blue-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email || ""}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded-lg focus:ring-1 focus:ring-blue-600"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone || ""}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded-lg focus:ring-1 focus:ring-blue-600"
        />
        <input
          type="text"
          name="roomType"
          placeholder="Room Type"
          value={formData.roomType || ""}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded-lg focus:ring-1 focus:ring-blue-600"
        />
        <input
          type="number"
          name="guests"
          placeholder="Guests"
          value={formData.guests || ""}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded-lg focus:ring-1 focus:ring-blue-600"
        />
        <input
          type="date"
          name="checkIn"
          value={formData.checkIn ? formData.checkIn.split("T")[0] : ""}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded-lg focus:ring-1 focus:ring-blue-600"
        />
        <input
          type="date"
          name="checkOut"
          value={formData.checkOut ? formData.checkOut.split("T")[0] : ""}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded-lg focus:ring-1 focus:ring-blue-600"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount || ""}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded-lg focus:ring-1 focus:ring-blue-600"
        />

        {/* Only Pending / Cancelled allowed */}
        <select
          name="status"
          value={formData.status || "Pending"}
          onChange={handleChange}
          className="border px-3 py-2 rounded-lg focus:ring-1 focus:ring-blue-600"
        >
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <button
          type="submit"
          className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold mt-2"
        >
          Update Booking
        </button>
      </form>
    </div>
  );
}
