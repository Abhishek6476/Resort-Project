import { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // default avatar icon

export default function Reviews() {
  const [reviews, setReviews] = useState([
    {
      name: "Amit Sharma",
      email: "amit@example.com",
      text: "Amazing stay! Rooms were clean and staff was friendly.",
    },
    {
      name: "Priya Verma",
      email: "priya@example.com",
      text: "Food was absolutely delicious. Highly recommended!",
    },
    {
      name: "Rohan Singh",
      email: "rohan@example.com",
      text: "Best resort experience I ever had. Will visit again.",
    },
  ]);

  const [formData, setFormData] = useState({ name: "", email: "", review: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.review) return;

    setReviews([
      ...reviews,
      {
        name: formData.name,
        email: formData.email,
        text: formData.review,
      },
    ]);
    setFormData({ name: "", email: "", review: "" });
  };

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        What Our Guests Say
      </h2>

      {/* Reviews List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaUserCircle className="text-4xl text-gray-400" />
              <div>
                <h4 className="font-semibold text-gray-900">{rev.name}</h4>
                <p className="text-sm text-gray-500">{rev.email}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">“{rev.text}”</p>
          </div>
        ))}
      </div>

      {/* Review Form */}
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-100">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Write a Review
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-800 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2">Your Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-800 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Review */}
          <div>
            <label className="block text-gray-700 mb-2">Your Review</label>
            <textarea
              value={formData.review}
              onChange={(e) =>
                setFormData({ ...formData, review: e.target.value })
              }
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-800 focus:outline-none"
              placeholder="Share your experience..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
}
