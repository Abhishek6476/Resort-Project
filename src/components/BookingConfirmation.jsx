
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
