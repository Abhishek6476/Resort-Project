import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  roomType: String,
  price: Number,
  roomCount: Number,
  guestCount: Number,
  checkIn: String,
  checkOut: String,
  message: String,
  totalPrice: Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Booking", bookingSchema);
