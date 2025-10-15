// import mongoose from "mongoose";

// const bookingSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   roomType: String,
//   price: Number,
//   roomCount: Number,
//   guestCount: Number,
//   checkIn: String,
//   checkOut: String,
//   message: String,
//   totalPrice: Number,
//    orderId: String,
//   paymentId: String,
//   paymentStatus: {
//     type: String,
//     enum: ["Pending", "Success", "Failed"],
//     default: "Pending",
//   },
//   createdAt: { type: Date, default: Date.now },
//   //date: { type: Date, default: Date.now },
// });

// export default mongoose.model("Booking", bookingSchema);


import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  roomType: String,
  roomCount: Number,
  guestCount: Number,
  checkIn: String,
  checkOut: String,
  message: String,
  totalPrice: Number,
  paymentId: String,
  orderId: String,
  paymentStatus: { type: String, default: "Pending" },
  status: { type: String, default: "Pending" },
  date: { type: Date, default: Date.now }
});

export default mongoose.model("Booking", bookingSchema);
