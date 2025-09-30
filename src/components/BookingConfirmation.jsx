import { useLocation, Link } from "react-router-dom";

export default function BookingConfirmation() {
  const { state } = useLocation();
  const { room, formData } = state || {};

  if (!room || !formData) return <p className="text-center text-red-500">No booking data!</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg text-center mt-20">
      <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
      <p className="mb-2">Thank you, {formData.name}</p>
      <p className="mb-2">Your {room.title} is booked from {formData.checkIn} to {formData.checkOut}.</p>
      <p className="mb-4">We will contact you at {formData.email} or {formData.phone}</p>
      <Link to="/" className="inline-block bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-900 transition">
        Back to Home
      </Link>
    </div>
  );
}


