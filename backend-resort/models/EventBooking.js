import mongoose from "mongoose";

const eventBookingSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,

    eventType: String,
    eventDate: Date,
    days: Number,
    guests: Number,

    pricePerDay: Number,
    basePrice: Number,
    gst: Number,
    totalAmount: Number,

    paymentType: String,
    orderId: String,
    paymentId: String,

    paymentStatus: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("EventBooking", eventBookingSchema);