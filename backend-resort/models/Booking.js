
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    guests: { type: Number, required: true },

    // 💰 Payment fields
    amount: { type: Number, required: true },
    paymentStatus: { type: String, default: "pending" },
    orderId: { type: String },
    paymentId: { type: String },

    // 🆕 Rooms booked count (for availability calculation)
    roomsBooked: { type: Number, default: 1 },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
