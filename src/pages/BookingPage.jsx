import { div } from "framer-motion/client";
import BookingForm from "../components/BookingForm";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <BookingForm />
    </div>
  );
}

