import { FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function RoomSidebar({ isOpen, onClose, formData, setFormData, onSubmit }) {
  const [preview, setPreview] = useState(formData.image || null); // image preview

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">{formData.id ? "Edit Room" : "Add Room"}</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
          <FaTimes />
        </button>
      </div>
      <form className="p-6 flex flex-col gap-4" onSubmit={onSubmit}>
        {/* Room Name */}
        <input
          type="text"
          name="name"
          placeholder="Room Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Type */}
        <input
          type="text"
          name="type"
          placeholder="Type (Luxury, Deluxe...)"
          value={formData.type}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Price */}
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium">Room Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 w-full h-40 object-cover rounded border"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold mt-2 transition-all"
        >
          {formData.id ? "Update Room" : "Add Room"}
        </button>
      </form>
    </div>
  );
}
