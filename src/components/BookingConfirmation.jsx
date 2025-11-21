// import { useLocation, Link } from "react-router-dom";

// export default function BookingConfirmation() {
//   const { state } = useLocation();
//   const { room, formData } = state || {};

//   if (!room || !formData) return <p className="text-center text-red-500">No booking data!</p>;

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg text-center mt-20">
//       <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
//       <p className="mb-2">Thank you, {formData.name}</p>
//       <p className="mb-2">Your {room.title} is booked from {formData.checkIn} to {formData.checkOut}.</p>
//       <p className="mb-4">We will contact you at {formData.email} or {formData.phone}</p>
//       <Link to="/" className="inline-block bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-900 transition">
//         Back to Home
//       </Link>
//     </div>
//   );
// }

// import { CheckCircle } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";

// export default function BookingConfirmation() {
//   const location = useLocation();
//   const booking = location.state;

//   if (!booking) {
//     return (
//       <div className="h-screen flex items-center justify-center bg-gray-100">
//         <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
//           <h2 className="text-2xl font-semibold text-red-600">No Booking Found</h2>
//           <p className="mt-2 text-gray-600 text-sm">Please complete a booking first.</p>
//           <Link
//             to="/rooms"
//             className="inline-block mt-4 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm"
//           >
//             Back to Rooms
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//       <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl">
//         <div className="flex flex-col items-center text-center">
//           <CheckCircle className="text-green-600" size={60} />
//           <h1 className="text-3xl font-bold mt-3 text-green-600">Booking Confirmed!</h1>
//           <p className="text-gray-600 mt-1 text-sm">
//             Thank you for booking with us. Your reservation details are below.
//           </p>
//         </div>

//         <div className="mt-6 bg-gray-50 p-5 rounded-xl border">
//           <h2 className="text-lg font-semibold mb-3">Booking Details</h2>

//           <div className="grid grid-cols-2 gap-y-3 text-sm">
//             <p className="font-semibold text-gray-700">Name:</p>
//             <p>{booking.name}</p>

//             <p className="font-semibold text-gray-700">Email:</p>
//             <p>{booking.email}</p>

//             <p className="font-semibold text-gray-700">Phone:</p>
//             <p>{booking.phone}</p>

//             <p className="font-semibold text-gray-700">Room:</p>
//             <p>{booking.roomId?.name}</p>

//             <p className="font-semibold text-gray-700">Guests:</p>
//             <p>{booking.guests}</p>

//             <p className="font-semibold text-gray-700">Check-in:</p>
//             <p>{new Date(booking.checkIn).toLocaleDateString()}</p>

//             <p className="font-semibold text-gray-700">Check-out:</p>
//             <p>{new Date(booking.checkOut).toLocaleDateString()}</p>

//             <p className="font-semibold text-gray-700">Amount Paid:</p>
//             <p>₹{booking.amount}</p>

//             <p className="font-semibold text-gray-700">Status:</p>
//             <p className="text-green-600 font-semibold">Confirmed</p>
//           </div>
//         </div>

//         <div className="flex justify-between mt-6">
//           <Link
//             to="/"
//             className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-xl text-sm"
//           >
//             Go Home
//           </Link>

//           <Link
//             to="/rooms"
//             className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-xl text-sm"
//           >
//             Book Another Room
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function BookingConfirmation() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl text-center">
        <CheckCircle className="text-green-600 mx-auto" size={70} />

        <h1 className="text-3xl font-bold mt-4 text-green-600">
          Booking Confirmed!
        </h1>

        <p className="text-gray-600 mt-2 text-sm">
          Thank you for booking with us.
        </p>

        <p className="text-gray-700 mt-1 font-medium">
          Your booking confirmation has been sent to your email.
        </p>

        <div className="flex justify-center mt-6">
          <Link
            to="/"
            className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-2 rounded-xl text-sm"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
