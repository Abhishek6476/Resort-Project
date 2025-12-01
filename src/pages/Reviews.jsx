//hard code reviews

// import { useState } from "react";

// export default function ReviewForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     review: "",
//     rating: 0,
//   });

//   const [charError, setCharError] = useState(false);

//   const handleReviewChange = (e) => {
//     const text = e.target.value;

//     if (text.length <= 100) {
//       setFormData({ ...formData, review: text });
//       setCharError(false);
//     } else {
//       setCharError(true);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.review || formData.rating === 0) {
//       return alert("Please fill all fields and provide a rating!");
//     }

//     alert("Thank you for your review!");

//     setFormData({
//       name: "",
//       email: "",
//       review: "",
//       rating: 0,
//     });
//   };

//   // First letter of name
//   const initial =
//     formData.name?.trim().length > 0
//       ? formData.name.trim().charAt(0).toUpperCase()
//       : "?";

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-3xl mx-auto px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//           Share Your Experience
//         </h2>

//         <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
//           {/* Avatar */}
//           <div className="flex items-center justify-center mb-6">
//             <div className="w-20 h-20 bg-blue-800 text-white text-3xl font-bold rounded-full flex items-center justify-center">
//               {initial}
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Name */}
//             <div>
//               <label className="block text-gray-700 mb-2">Your Name</label>
//               <input
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//                 placeholder="Enter your name"
//                 className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-800 focus:outline-none"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-gray-700 mb-2">Your Email</label>
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 placeholder="Enter your email"
//                 className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-800 focus:outline-none"
//               />
//             </div>

//             {/* Review */}
//             <div>
//               <label className="block text-gray-700 mb-2">Your Review</label>
//               <textarea
//                 value={formData.review}
//                 onChange={handleReviewChange}
//                 placeholder="Share your experience..."
//                 rows="4"
//                 className={`w-full rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-800 focus:outline-none border ${
//                   charError ? "border-red-500" : "border-gray-300"
//                 }`}
//               ></textarea>

//               <p
//                 className={`text-sm mt-1 ${
//                   charError ? "text-red-500" : "text-gray-500"
//                 }`}
//               >
//                 {formData.review.length}/100
//               </p>

//               {charError && (
//                 <p className="text-red-500 text-sm mt-1">
//                   Maximum 100 characters allowed.
//                 </p>
//               )}
//             </div>

//             {/* Rating */}
//             <div>
//               <label className="block text-gray-700 mb-2">Your Rating</label>
//               <div className="flex gap-2">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <button
//                     type="button"
//                     key={star}
//                     onClick={() =>
//                       setFormData({ ...formData, rating: star })
//                     }
//                     className={`text-2xl ${
//                       formData.rating >= star
//                         ? "text-yellow-400"
//                         : "text-gray-300"
//                     }`}
//                   >
//                     ★
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-800 text-white py-3 rounded-xl hover:bg-blue-900 transition"
//             >
//               Submit Review
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }


//api fetch 
import { useState } from "react";
import axios from "axios";

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
    rating: 0,
  });

  const [charError, setCharError] = useState(false);

  const handleReviewChange = (e) => {
    const text = e.target.value;

    if (text.length <= 100) {
      setFormData({ ...formData, review: text });
      setCharError(false);
    } else {
      setCharError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.review.length > 100) {
      return alert("Review cannot exceed 100 characters!");
    }

    if (!formData.name || !formData.email || !formData.review || formData.rating === 0)
      return alert("Please fill all fields and provide a rating!");

    try {
      await axios.post("http://localhost:5000/api/reviews", {
        name: formData.name,
        email: formData.email,
        text: formData.review,
        rating: formData.rating,
      });

      alert("Thank you for your review!");
      setFormData({ name: "", email: "", review: "", rating: 0 });
    } catch (error) {
      alert("Failed to submit review. Please try again!");
    }
  };

  // Get first letter of name
  const initial =
    formData.name?.trim().length > 0
      ? formData.name.trim().charAt(0).toUpperCase()
      : "?";

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Share Your Experience
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          {/* Avatar */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-blue-800 text-white text-3xl font-bold rounded-full flex items-center justify-center">
              {initial}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-800 focus:outline-none"
              />
            </div>

            {/* Review */}
            <div>
              <label className="block text-gray-700 mb-2">Your Review</label>

              <textarea
                value={formData.review}
                onChange={handleReviewChange}
                placeholder="Share your experience..."
                rows="4"
                className={`w-full rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-800 focus:outline-none border ${
                  charError ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>

              <p
                className={`text-sm mt-1 ${
                  charError ? "text-red-500" : "text-gray-500"
                }`}
              >
                {formData.review.length}/100 
              </p>

              {charError && (
                <p className="text-red-500 text-sm mt-1">
                  Maximum 100 characters allowed.
                </p>
              )}
            </div>

            {/* Rating */}
            <div>
              <label className="block text-gray-700 mb-2">Your Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() =>
                      setFormData({ ...formData, rating: star })
                    }
                    className={`text-2xl ${
                      formData.rating >= star
                        ? "text-yellow-400"
                        : "text-gray-300"
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

