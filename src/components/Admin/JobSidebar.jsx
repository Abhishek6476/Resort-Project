import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function JobSidebar({
  isOpen,
  formData,
  setFormData,
  onClose,
  onSubmit,
}) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    // Edit mode → agar job me pehle image ho
    if (formData?.image && typeof formData.image === "string") {
      setPreview(`http://localhost:5000/${formData.image}`);
    } else {
      setPreview(null);
    }
  }, [formData]);

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-end z-50">
      <div className="bg-white w-96 p-6 shadow-xl h-full overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {formData._id ? "Edit Job" : "Add Job"}
          </h2>

          <FaTimes
            size={20}
            className="cursor-pointer text-gray-600 hover:text-black"
            onClick={onClose}
          />
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Title */}
          <input
            type="text"
            placeholder="Job Title"
            className="w-full p-2 border rounded"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />

          {/* Job Type */}
          <select
            className="w-full p-2 border rounded"
            value={formData.jobType}
            onChange={(e) =>
              setFormData({ ...formData, jobType: e.target.value })
            }
          >
            <option value="">Select Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
          </select>

          {/* Location */}
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 border rounded"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />

          {/* Salary */}
          <input
            type="text"
            placeholder="Salary (Optional)"
            className="w-full p-2 border rounded"
            value={formData.salary}
            onChange={(e) =>
              setFormData({ ...formData, salary: e.target.value })
            }
          />

          {/* IMAGE UPLOAD */}
          <div>
            <label className="block font-semibold mb-1">Job Image</label>

            <input
              type="file"
              className="w-full border p-2 rounded"
              accept="image/*"
              onChange={handleImageChange}
            />

            {/* Preview Section */}
            {preview && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-1">Preview:</p>
                <img
                  src={preview}
                  className="w-full h-32 object-cover rounded border"
                  alt="Preview"
                />
              </div>
            )}
          </div>

          {/* Description */}
          <textarea
            placeholder="Job Description"
            className="w-full p-2 border rounded h-28"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-lg font-semibold"
          >
            {formData._id ? "Update Job" : "Add Job"}
          </button>

          {/* Cancel */}
          <button
            type="button"
            onClick={onClose}
            className="w-full mt-2 bg-gray-200 hover:bg-gray-300 py-2 rounded-lg"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
