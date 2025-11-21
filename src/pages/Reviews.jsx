


import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
    rating: 0, // ✅ Added rating
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.review || formData.rating === 0)
      return alert("Please fill all fields and provide a rating!");

    try {
      // ✅ POST review to backend
      const res = await axios.post("http://localhost:5000/api/reviews", {
        name: formData.name,
        email: formData.email,
        text: formData.review,
        rating: formData.rating, // send rating
      });

      console.log("Review submitted:", res.data);
      alert("Thank you for your review!");

      // Reset form
      setFormData({ name: "", email: "", review: "", rating: 0 });
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review. Please try again!");
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Share Your Experience
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center justify-center mb-6">
            <FaUserCircle className="text-6xl text-gray-400" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-800 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-800 focus:outline-none"
              />
            </div>

            {/* Review */}
            <div>
              <label className="block text-gray-700 mb-2">Your Review</label>
              <textarea
                value={formData.review}
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                placeholder="Share your experience..."
                rows="4"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-800 focus:outline-none"
              ></textarea>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-gray-700 mb-2">Your Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className={`text-2xl ${
                      formData.rating >= star ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-3 rounded-xl hover:bg-blue-900 transition"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
