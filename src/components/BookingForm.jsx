// import { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// export default function BookingForm() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { room } = location.state || {};

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     checkIn: "",
//     checkOut: "",
//   });

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/confirmation", { state: { room, formData } });
//   };

//   if (!room) return <p className="text-center text-red-500">No room selected!</p>;

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Book {room.title}</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className="w-full p-2 border rounded" required />

//         <button type="submit" className="w-full bg-blue-800 text-white py-2 rounded-full hover:bg-blue-900 transition">
//           Proceed to Payment
//         </button>
//       </form>
//     </div>
//   );
// }


// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// export default function BookingForm() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const room = location.state?.room || {};

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     checkIn: "",
//     checkOut: "",
//     guests: 1,
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.checkIn || !formData.checkOut) {
//       return alert("Please fill all required fields");
//     }

//     try {
//       const bookingData = {
//         ...formData,
//         roomId: room._id,
//         roomName: room.name,
//         price: room.price,
//       };

//       // Send booking data to backend (optional)
//       await axios.post("http://localhost:5000/api/bookings", bookingData);

//       alert("Booking successful! Redirecting to payment...");
//       navigate("/payment", { state: { booking: bookingData } });
//     } catch (error) {
//       console.error("Error submitting booking:", error);
//       alert("Failed to book room. Please try again.");
//     }
//   };

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-6 md:px-12">
//         <div className="max-w-3xl mx-auto bg-gray-50 shadow-xl rounded-2xl p-8">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//             Book Your Stay
//           </h2>

//           {room && (
//             <div className="mb-6 border rounded-lg overflow-hidden">
//               <img
//                 src={`http://localhost:5000${room.image}`}
//                 alt={room.name}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
//                 <p className="text-gray-600">{room.price} / Night</p>
//               </div>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//               />
//             </div>

//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//             />

//             <div className="grid md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Check-In Date</label>
//                 <input
//                   type="date"
//                   name="checkIn"
//                   value={formData.checkIn}
//                   onChange={handleChange}
//                   required
//                   className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">Check-Out Date</label>
//                 <input
//                   type="date"
//                   name="checkOut"
//                   value={formData.checkOut}
//                   onChange={handleChange}
//                   required
//                   className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Number of Guests</label>
//               <input
//                 type="number"
//                 name="guests"
//                 min="1"
//                 value={formData.guests}
//                 onChange={handleChange}
//                 className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all"
//             >
//               Proceed to Payment
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }




import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function BookingForm() {
  const location = useLocation();
  const room = location.state?.room || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handlePayment = async () => {
  try {
    // ✅ Required fields validation
    if (!formData.name || !formData.email || !formData.checkIn || !formData.checkOut) {
      return alert("Please fill all required fields");
    }

    const bookingData = {
      ...formData,
      roomId: room._id,
      roomName: room.name,
      price: Number(room.price), // ensure number
    };

    // 1️⃣ Create Razorpay order from backend
    const { data: orderData } = await axios.post(
      "http://localhost:5000/api/bookings/create-order",
      { amount: Number(room.price) } // send as number
    );

    console.log("✅ Order data from backend:", orderData);

    // 2️⃣ Razorpay Checkout options
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: orderData.amount, // paisa
      currency: "INR",
      name: "Resort Booking",
      description: `Booking for ${room.name}`,
      order_id: orderData.orderId,
      handler: async function (response) {
        try {
          // 3️⃣ Verify payment on backend
          const verifyRes = await axios.post(
            "http://localhost:5000/api/bookings/verify-payment",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              bookingData, // include amount & other details
            }
          );

          if (verifyRes.data.success) {
            alert("✅ Payment successful & booking confirmed!");
          } else {
            alert("❌ Payment verification failed!");
          }
        } catch (err) {
          console.error("Payment verification error:", err);
          alert("❌ Payment verification error. Check console.");
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: { color: "#1e3a8a" },
    };

    // 4️⃣ Open Razorpay Checkout
    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Error during payment:", error);
    alert("❌ Failed to initiate payment. Check console.");
  }
};


  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto bg-gray-50 shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Book Your Stay
          </h2>

          {room && (
            <div className="mb-6 border rounded-lg overflow-hidden">
              <img
                src={`http://localhost:5000${room.image}`}
                alt={room.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
                <p className="text-gray-600">{room.price} / Night</p>
              </div>
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePayment();
            }}
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Check-In Date</label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Check-Out Date</label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Number of Guests</label>
              <input
                type="number"
                name="guests"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-all"
            >
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
