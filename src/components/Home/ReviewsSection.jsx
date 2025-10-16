// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const reviews = [
//   {
//     name: "Rahul",
//     role: "Business Traveler",
//     feedback:
//       "The resort exceeded my expectations. The rooms were spacious, staff was friendly, and the food was excellent.",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Priya Sharma",
//     role: "Wedding Guest",
//     feedback:
//       "Attended a wedding here and it was magical. The banquets were beautifully decorated and service was top-notch.",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     name: "Amit Verma",
//     role: "Family Vacation",
//     feedback:
//       "Perfect getaway for my family. The kids enjoyed the pool while we relaxed with great dining options.",
//     image: "https://randomuser.me/api/portraits/men/65.jpg",
//   },
//   {
//     name: "Neha Kapoor",
//     role: "Corporate Event",
//     feedback:
//       "We hosted a corporate retreat here. Excellent facilities, professional staff, and smooth arrangements.",
//     image: "https://randomuser.me/api/portraits/women/68.jpg",
//   },
// ];

// export default function ReviewsSection() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           What Our Guests Say
//         </h2>

//         {/* Slider */}
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           speed={800}
//           loop
//           spaceBetween={30}
//           slidesPerView={1}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {reviews.map((t, idx) => (
//             <SwiperSlide key={idx}>
//               <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center h-full">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-20 h-20 rounded-full object-cover border-4 border-blue-800"
//                 />
//                 <p className="mt-6 text-gray-600 italic">“{t.feedback}”</p>
//                 <h3 className="mt-4 text-lg font-semibold text-gray-900">
//                   {t.name}
//                 </h3>
//                 <span className="text-sm text-gray-500">{t.role}</span>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* See All Reviews link ( left side) */}
//         <div className="mt-8 text-left">
//           <a
//             href="/reviews"
//             className="text-blue-800 hover:text-blue-900 font-medium transition"
//           >
//             See All Reviews
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }




import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaUserCircle, FaStar, FaRegStar } from "react-icons/fa"; 
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews from backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/reviews");
        setReviews(res.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  // Helper: render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-yellow-400 inline-block" />
        ) : (
          <FaRegStar key={i} className="text-yellow-400 inline-block" />
        )
      );
    }
    return stars;
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What Our Guests Say
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={800}
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((t, idx) => (
            <SwiperSlide key={t._id || idx}>
              <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center h-full">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-800 flex items-center justify-center bg-gray-100">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="text-4xl text-gray-400" />
                  )}
                </div>

                {/* Feedback with line clamp */}
                <p className="mt-4 text-gray-600 italic line-clamp-4 text-sm">
                  “{t.text}”
                </p>

                {/* Rating Stars */}
                <div className="mt-2">{renderStars(t.rating || 0)}</div>

                <h3 className="mt-2 text-md font-semibold text-gray-900">
                  {t.name}
                </h3>
                <span className="text-sm text-gray-500">{t.role || ""}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional link */}
        <div className="mt-6 text-left">
          <a
            href="/reviews"
            className="text-blue-800 hover:text-blue-900 font-medium transition"
          >
            Send Reviews
          </a>
        </div>
      </div>
    </section>
  );
}

