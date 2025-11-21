// import Razorpay from "razorpay";
// import crypto from "crypto";
// import Booking from "../models/Booking.js";


// const getRazorpayInstance = () => {
//   console.log("Loaded Razorpay ID:", process.env.RAZORPAY_KEY_ID);
//   console.log("Loaded Razorpay SECRET:", process.env.RAZORPAY_KEY_SECRET);

//   if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
//     throw new Error("⚠️ RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be defined in .env");
//   }
//   return new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
//   });
// };


// // 🧾 Create Razorpay Order
// export const createOrder = async (req, res) => {
//   try {
//     console.log("✅ RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);
//     console.log("✅ RAZORPAY_KEY_SECRET:", process.env.RAZORPAY_KEY_SECRET);
//     console.log("✅ Request body received:", req.body);

//     const razorpay = getRazorpayInstance(); // initialize here
//     const { amount } = req.body;

//     if (!amount) {
//       console.error("⚠️ Amount is missing in request body!");
//       return res.status(400).json({ message: "Amount is required" });
//     }

//     const options = {
//       amount: amount * 100, // paisa me
//       currency: "INR",
//       receipt: "receipt_" + Date.now(),
//     };

//     const order = await razorpay.orders.create(options);
//     console.log("✅ Razorpay order created:", order);

//     res.json({ orderId: order.id, amount: order.amount });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     res.status(500).json({ message: "Failed to create order" });
//   }
// };


// // 💳 Verify payment and save booking
// export const verifyPayment = async (req, res) => {
//   try {
//     const razorpay = getRazorpayInstance(); // initialize here
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingData } = req.body;

//     const sign = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSign = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(sign.toString())
//       .digest("hex");

//     if (expectedSign === razorpay_signature) {
//       const newBooking = new Booking({
//         ...bookingData,
//         orderId: razorpay_order_id,
//         paymentId: razorpay_payment_id,
//         paymentStatus: "paid",
//       });
//       await newBooking.save();
//       res.json({ success: true, message: "Payment verified successfully" });
//     } else {
//       res.status(400).json({ success: false, message: "Invalid signature" });
//     }
//   } catch (error) {
//     console.error("Error verifying payment:", error);
//     res.status(500).json({ message: "Payment verification failed" });
//   }
// };

// // 📜 Get all bookings (admin)
// export const getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find().populate("roomId");
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



// import Razorpay from "razorpay";
// import crypto from "crypto";
// import Booking from "../models/Booking.js";

// // ✅ Razorpay instance helper
// const getRazorpayInstance = () => {
//   if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
//     throw new Error(
//       "⚠️ RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be defined in .env"
//     );
//   }
//   return new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
//   });
// };

// // 🧾 Create Razorpay Order
// export const createOrder = async (req, res) => {
//   try {
//     const razorpay = getRazorpayInstance();
//     const { amount } = req.body;

//     if (!amount || isNaN(amount)) {
//       return res.status(400).json({ message: "Invalid amount" });
//     }

//     const options = {
//       amount: Number(amount) * 100, // convert INR to paisa
//       currency: "INR",
//       receipt: "receipt_" + Date.now(),
//     };

//     const order = await razorpay.orders.create(options);

//     console.log("✅ Razorpay order created:", order);

//     res.json({ orderId: order.id, amount: order.amount });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     res.status(500).json({ message: "Failed to create order" });
//   }
// };

// // 💳 Verify payment and save booking
// export const verifyPayment = async (req, res) => {
//   try {
//     const razorpay = getRazorpayInstance();
//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       bookingData,
//     } = req.body;

//     if (!bookingData) {
//       return res.status(400).json({ message: "Booking data is required" });
//     }

//     // ✅ Validate signature
//     const sign = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSign = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(sign.toString())
//       .digest("hex");

//     if (expectedSign !== razorpay_signature) {
//       return res.status(400).json({ success: false, message: "Invalid signature" });
//     }

//     // ✅ Save booking
//     const newBooking = new Booking({
//       ...bookingData,
//       amount: bookingData.price || bookingData.amount, // ensure amount exists
//       orderId: razorpay_order_id,
//       paymentId: razorpay_payment_id,
//       paymentStatus: "paid",
//     });

//     await newBooking.save();

//     res.json({ success: true, message: "Payment verified & booking confirmed" });
//   } catch (error) {
//     console.error("Error verifying payment:", error);
//     res.status(500).json({ message: "Payment verification failed" });
//   }
// };

// // 📜 Get all bookings (admin)
// export const getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find().populate("roomId");
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };





// import Razorpay from "razorpay";
// import crypto from "crypto";
// import Booking from "../models/Booking.js";
// import Room from "../models/Room.js"; // ✅ add this import

// // ✅ Razorpay instance helper
// const getRazorpayInstance = () => {
//   if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
//     throw new Error("⚠️ RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be defined in .env");
//   }
//   return new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
//   });
// };

// // 🧾 Create Razorpay Order
// export const createOrder = async (req, res) => {
//   try {
//     const razorpay = getRazorpayInstance();
//     const { amount } = req.body;

//     if (!amount || isNaN(amount)) {
//       return res.status(400).json({ message: "Invalid amount" });
//     }

//     const options = {
//       amount: Number(amount) * 100, // convert INR to paisa
//       currency: "INR",
//       receipt: "receipt_" + Date.now(),
//     };

//     const order = await razorpay.orders.create(options);

//     console.log("✅ Razorpay order created:", order);

//     res.json({ orderId: order.id, amount: order.amount });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     res.status(500).json({ message: "Failed to create order" });
//   }
// };

// // 💳 Verify payment and save booking
// export const verifyPayment = async (req, res) => {
//   try {
//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       bookingData,
//     } = req.body;

//     if (!bookingData) {
//       return res.status(400).json({ message: "Booking data is required" });
//     }

//     // ✅ Validate Razorpay signature
//     const sign = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSign = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(sign.toString())
//       .digest("hex");

//     if (expectedSign !== razorpay_signature) {
//       return res.status(400).json({ success: false, message: "Invalid signature" });
//     }

//     // ✅ STEP 1: Check room availability
//     const { roomId, checkIn, checkOut, roomsBooked = 1 } = bookingData;
//     const room = await Room.findById(roomId);
//     if (!room) return res.status(404).json({ message: "Room not found" });

//     // Find overlapping bookings for this room
//     const existingBookings = await Booking.find({
//       roomId,
//       $or: [
//         { checkIn: { $lte: checkOut }, checkOut: { $gte: checkIn } }
//       ],
//     });

//     const totalBooked = existingBookings.reduce((sum, b) => sum + (b.roomsBooked || 1), 0);
//     const available = room.totalRooms - totalBooked;

//     if (available < roomsBooked) {
//       return res.status(400).json({ message: "Not enough rooms available for these dates" });
//     }

//     // ✅ STEP 2: Save new booking
//     const newBooking = new Booking({
//       ...bookingData,
//       amount: bookingData.price || bookingData.amount,
//       orderId: razorpay_order_id,
//       paymentId: razorpay_payment_id,
//       paymentStatus: "paid",
//     });

//     await newBooking.save();

//     res.json({ success: true, message: "Payment verified & booking confirmed" });
//   } catch (error) {
//     console.error("Error verifying payment:", error);
//     res.status(500).json({ message: "Payment verification failed" });
//   }
// };

// // 📜 Get all bookings (admin)
// export const getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find().populate("roomId");
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // 🗓️ Check Room Availability (before booking)
// export const checkAvailability = async (req, res) => {
//   try {
//     const { roomId, checkIn, checkOut, roomsBooked = 1 } = req.body;

//     const room = await Room.findById(roomId);
//     if (!room) return res.status(404).json({ message: "Room not found" });

//     // Find bookings overlapping given dates
//     const existingBookings = await Booking.find({
//       roomId,
//       $or: [
//         { checkIn: { $lte: checkOut }, checkOut: { $gte: checkIn } }
//       ],
//     });

//     const totalBooked = existingBookings.reduce(
//       (sum, b) => sum + (b.roomsBooked || 1),
//       0
//     );

//     const availableRooms = room.totalRooms - totalBooked;

//     if (availableRooms < roomsBooked) {
//       return res.json({
//         available: false,
//         message: `Only ${availableRooms} rooms left for selected dates.`,
//       });
//     }

//     res.json({
//       available: true,
//       message: `${availableRooms} rooms available for booking.`,
//     });
//   } catch (error) {
//     console.error("Error checking availability:", error);
//     res.status(500).json({ message: "Error checking room availability" });
//   }
// };

// // 📅 NEW: Get all unavailable dates for a room
// export const getUnavailableDates = async (req, res) => {
//   try {
//     const { roomId } = req.params;

//     const bookings = await Booking.find({ roomId });

//     const unavailableDates = [];

//     bookings.forEach((booking) => {
//       const start = new Date(booking.checkIn);
//       const end = new Date(booking.checkOut);
//       let current = new Date(start);

//       while (current <= end) {
//         unavailableDates.push(current.toISOString().split("T")[0]);
//         current.setDate(current.getDate() + 1);
//       }
//     });

//     res.json({ unavailableDates });
//   } catch (error) {
//     console.error("Error fetching unavailable dates:", error);
//     res.status(500).json({ message: "Failed to fetch unavailable dates" });
//   }
// };




// import Razorpay from "razorpay";
// import crypto from "crypto";
// import Booking from "../models/Booking.js";
// import Room from "../models/Room.js"; // ✅ add this import
// import { sendBookingConfirmationEmail } from "../utils/sendBookingEmail.js";

// // ✅ Razorpay instance helper
// const getRazorpayInstance = () => {
//   if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
//     throw new Error("⚠️ RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be defined in .env");
//   }
//   return new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
//   });
// };

// // 🧾 Create Razorpay Order
// export const createOrder = async (req, res) => {
//   try {
//     const razorpay = getRazorpayInstance();
//     const { amount } = req.body;

//     if (!amount || isNaN(amount)) {
//       return res.status(400).json({ message: "Invalid amount" });
//     }

//     const options = {
//       amount: Number(amount) * 100, // convert INR to paisa
//       currency: "INR",
//       receipt: "receipt_" + Date.now(),
//     };

//     const order = await razorpay.orders.create(options);

//     console.log("✅ Razorpay order created:", order);

//     res.json({ orderId: order.id, amount: order.amount });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     res.status(500).json({ message: "Failed to create order" });
//   }
// };

// // 💳 Verify payment and save booking
// export const verifyPayment = async (req, res) => {
//   try {
//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       bookingData,
//     } = req.body;

//     if (!bookingData) {
//       return res.status(400).json({ message: "Booking data is required" });
//     }

//     // ✅ Validate Razorpay signature
//     const sign = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSign = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(sign.toString())
//       .digest("hex");

//     if (expectedSign !== razorpay_signature) {
//       return res.status(400).json({ success: false, message: "Invalid signature" });
//     }

//     // ✅ STEP 1: Check room availability
//     const { roomId, checkIn, checkOut, roomsBooked = 1 } = bookingData;
//     const room = await Room.findById(roomId);
//     if (!room) return res.status(404).json({ message: "Room not found" });

//     // Find overlapping bookings for this room
//     const existingBookings = await Booking.find({
//       roomId,
//       $or: [
//         { checkIn: { $lte: checkOut }, checkOut: { $gte: checkIn } }
//       ],
//     });

//     const totalBooked = existingBookings.reduce((sum, b) => sum + (b.roomsBooked || 1), 0);
//     const available = room.totalRooms - totalBooked;

//     if (available < roomsBooked) {
//       return res.status(400).json({ message: "Not enough rooms available for these dates" });
//     }

//     // ✅ STEP 2: Save new booking
//     const newBooking = new Booking({
//       ...bookingData,
//       amount: bookingData.price || bookingData.amount,
//       orderId: razorpay_order_id,
//       paymentId: razorpay_payment_id,
//       paymentStatus: "paid",
//     });

//     await newBooking.save();

//     res.json({ success: true, message: "Payment verified & booking confirmed" });
//   } catch (error) {
//     console.error("Error verifying payment:", error);
//     res.status(500).json({ message: "Payment verification failed" });
//   }
// };

// // 📜 Get all bookings (admin)
// export const getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find().populate("roomId");
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // 🗓️ Check Room Availability (before booking)
// export const checkAvailability = async (req, res) => {
//   try {
//     const { roomId, checkIn, checkOut, roomsBooked = 1 } = req.body;

//     const room = await Room.findById(roomId);
//     if (!room) return res.status(404).json({ message: "Room not found" });

//     // Find bookings overlapping given dates
//     const existingBookings = await Booking.find({
//       roomId,
//       $or: [
//         { checkIn: { $lte: checkOut }, checkOut: { $gte: checkIn } }
//       ],
//     });

//     const totalBooked = existingBookings.reduce(
//       (sum, b) => sum + (b.roomsBooked || 1),
//       0
//     );

//     const availableRooms = room.totalRooms - totalBooked;

//     if (availableRooms < roomsBooked) {
//       return res.json({
//         available: false,
//         message: `Only ${availableRooms} rooms left for selected dates.`,
//       });
//     }

//     res.json({
//       available: true,
//       message: `${availableRooms} rooms available for booking.`,
//     });
//   } catch (error) {
//     console.error("Error checking availability:", error);
//     res.status(500).json({ message: "Error checking room availability" });
//   }
// };

// // 📅 Get all unavailable dates for a room
// export const getUnavailableDates = async (req, res) => {
//   try {
//     const { roomId } = req.params;

//     const bookings = await Booking.find({ roomId });

//     const unavailableDates = [];

//     bookings.forEach((booking) => {
//       const start = new Date(booking.checkIn);
//       const end = new Date(booking.checkOut);
//       let current = new Date(start);

//       while (current <= end) {
//         unavailableDates.push(current.toISOString().split("T")[0]);
//         current.setDate(current.getDate() + 1);
//       }
//     });

//     res.json({ unavailableDates });
//   } catch (error) {
//     console.error("Error fetching unavailable dates:", error);
//     res.status(500).json({ message: "Failed to fetch unavailable dates" });
//   }
// };

// // ✏️ UPDATE Booking (Edit)
// export const updateBooking = async (req, res) => {
//   try {
//     const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!updated)
//       return res.status(404).json({ message: "Booking not found" });
//     res.json(updated);
//   } catch (error) {
//     console.error("Error updating booking:", error);
//     res.status(500).json({ message: "Failed to update booking" });
//   }
// };

// // ❌ DELETE Booking
// export const deleteBooking = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedBooking = await Booking.findByIdAndDelete(id);
//     if (!deletedBooking)
//       return res.status(404).json({ message: "Booking not found" });

//     res.json({ success: true, message: "Booking deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting booking:", error);
//     res.status(500).json({ message: "Failed to delete booking" });
//   }
// };



//today

// import Razorpay from "razorpay";
// import crypto from "crypto";
// import Booking from "../models/Booking.js";
// import Room from "../models/Room.js";
// import { sendBookingConfirmationEmail } from "../utils/sendBookingEmail.js"; // ✅ email helper import

// // ✅ Razorpay instance helper
// const getRazorpayInstance = () => {
//   if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
//     throw new Error("⚠️ RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be defined in .env");
//   }
//   return new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
//   });
// };

// // 🧾 Create Razorpay Order
// export const createOrder = async (req, res) => {
//   try {
//     const razorpay = getRazorpayInstance();
//     const { amount } = req.body;

//     if (!amount || isNaN(amount)) {
//       return res.status(400).json({ message: "Invalid amount" });
//     }

//     const options = {
//       amount: Number(amount) * 100, // convert INR to paisa
//       currency: "INR",
//       receipt: "receipt_" + Date.now(),
//     };

//     const order = await razorpay.orders.create(options);
//     console.log("✅ Razorpay order created:", order);

//     res.json({ orderId: order.id, amount: order.amount });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     res.status(500).json({ message: "Failed to create order" });
//   }
// };

// // 💳 Verify payment and save booking
// export const verifyPayment = async (req, res) => {
//   try {
//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       bookingData,
//     } = req.body;

//     if (!bookingData) {
//       return res.status(400).json({ message: "Booking data is required" });
//     }

//     // ✅ Validate Razorpay signature
//     const sign = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSign = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(sign.toString())
//       .digest("hex");

//     if (expectedSign !== razorpay_signature) {
//       return res.status(400).json({ success: false, message: "Invalid signature" });
//     }

//     // ✅ STEP 1: Check room availability
//     const { roomId, checkIn, checkOut, roomsBooked = 1, email, name } = bookingData;
//     const room = await Room.findById(roomId);
//     if (!room) return res.status(404).json({ message: "Room not found" });

//     // Find overlapping bookings for this room
//     const existingBookings = await Booking.find({
//       roomId,
//       $or: [
//         { checkIn: { $lte: checkOut }, checkOut: { $gte: checkIn } }
//       ],
//     });

//     const totalBooked = existingBookings.reduce((sum, b) => sum + (b.roomsBooked || 1), 0);
//     const available = room.totalRooms - totalBooked;

//     if (available < roomsBooked) {
//       return res.status(400).json({ message: "Not enough rooms available for these dates" });
//     }

//     // ✅ STEP 2: Save new booking
//     const newBooking = new Booking({
//       ...bookingData,
//       amount: bookingData.price || bookingData.amount,
//       orderId: razorpay_order_id,
//       paymentId: razorpay_payment_id,
//       paymentStatus: "paid",
//     });

//     await newBooking.save();

//     // ✅ STEP 3: Send booking confirmation email
//     if (email && name) {
//       await sendBookingConfirmationEmail(email, name, bookingData, room);
//     }

//     res.json({ success: true, message: "Payment verified & booking confirmed" });
//   } catch (error) {
//     console.error("Error verifying payment:", error);
//     res.status(500).json({ message: "Payment verification failed" });
//   }
// };

// // 📜 Get all bookings (admin)
// export const getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find().populate("roomId");
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // 🗓️ Check Room Availability (before booking)
// export const checkAvailability = async (req, res) => {
//   try {
//     const { roomId, checkIn, checkOut, roomsBooked = 1 } = req.body;

//     const room = await Room.findById(roomId);
//     if (!room) return res.status(404).json({ message: "Room not found" });

//     // Find bookings overlapping given dates
//     const existingBookings = await Booking.find({
//       roomId,
//       $or: [
//         { checkIn: { $lte: checkOut }, checkOut: { $gte: checkIn } }
//       ],
//     });

//     const totalBooked = existingBookings.reduce(
//       (sum, b) => sum + (b.roomsBooked || 1),
//       0
//     );

//     const availableRooms = room.totalRooms - totalBooked;

//     if (availableRooms < roomsBooked) {
//       return res.json({
//         available: false,
//         message: `Only ${availableRooms} rooms left for selected dates.`,
//       });
//     }

//     res.json({
//       available: true,
//       message: `${availableRooms} rooms available for booking.`,
//     });
//   } catch (error) {
//     console.error("Error checking availability:", error);
//     res.status(500).json({ message: "Error checking room availability" });
//   }
// };

// // 📅 Get all unavailable dates for a room
// export const getUnavailableDates = async (req, res) => {
//   try {
//     const { roomId } = req.params;

//     const bookings = await Booking.find({ roomId });

//     const unavailableDates = [];

//     bookings.forEach((booking) => {
//       const start = new Date(booking.checkIn);
//       const end = new Date(booking.checkOut);
//       let current = new Date(start);

//       while (current <= end) {
//         unavailableDates.push(current.toISOString().split("T")[0]);
//         current.setDate(current.getDate() + 1);
//       }
//     });

//     res.json({ unavailableDates });
//   } catch (error) {
//     console.error("Error fetching unavailable dates:", error);
//     res.status(500).json({ message: "Failed to fetch unavailable dates" });
//   }
// };

// // ✏️ UPDATE Booking (Edit)
// export const updateBooking = async (req, res) => {
//   try {
//     const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!updated)
//       return res.status(404).json({ message: "Booking not found" });
//     res.json(updated);
//   } catch (error) {
//     console.error("Error updating booking:", error);
//     res.status(500).json({ message: "Failed to update booking" });
//   }
// };

// // ❌ DELETE Booking
// export const deleteBooking = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedBooking = await Booking.findByIdAndDelete(id);
//     if (!deletedBooking)
//       return res.status(404).json({ message: "Booking not found" });

//     res.json({ success: true, message: "Booking deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting booking:", error);
//     res.status(500).json({ message: "Failed to delete booking" });
//   }
// };



//today2

// import Razorpay from "razorpay";
// import crypto from "crypto";
// import Booking from "../models/Booking.js";
// import Room from "../models/Room.js"; // ✅ room model
// import { sendBookingConfirmationEmail } from "../utils/sendBookingEmail.js"; // ✅ email utility import

// // ✅ Razorpay instance helper
// const getRazorpayInstance = () => {
//   if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
//     throw new Error("⚠️ RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be defined in .env");
//   }
//   return new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
//   });
// };

// // 🧾 Create Razorpay Order
// export const createOrder = async (req, res) => {
//   try {
//     const razorpay = getRazorpayInstance();
//     const { amount } = req.body;

//     if (!amount || isNaN(amount)) {
//       return res.status(400).json({ message: "Invalid amount" });
//     }

//     const options = {
//       amount: Number(amount) * 100, // convert INR to paisa
//       currency: "INR",
//       receipt: "receipt_" + Date.now(),
//     };

//     const order = await razorpay.orders.create(options);
//     console.log("✅ Razorpay order created:", order);

//     res.json({ orderId: order.id, amount: order.amount });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     res.status(500).json({ message: "Failed to create order" });
//   }
// };

// // 💳 Verify payment and save booking
// export const verifyPayment = async (req, res) => {
//   try {
//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       bookingData,
//     } = req.body;

//     if (!bookingData) {
//       return res.status(400).json({ message: "Booking data is required" });
//     }

//     // ✅ Validate Razorpay signature
//     const sign = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSign = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(sign.toString())
//       .digest("hex");

//     if (expectedSign !== razorpay_signature) {
//       return res.status(400).json({ success: false, message: "Invalid signature" });
//     }

//     // ✅ STEP 1: Check room availability
//     const { roomId, checkIn, checkOut, roomsBooked = 1, email, name } = bookingData;
//     const room = await Room.findById(roomId);
//     if (!room) return res.status(404).json({ message: "Room not found" });

//     const existingBookings = await Booking.find({
//       roomId,
//       $or: [{ checkIn: { $lte: checkOut }, checkOut: { $gte: checkIn } }],
//     });

//     const totalBooked = existingBookings.reduce((sum, b) => sum + (b.roomsBooked || 1), 0);
//     const available = room.totalRooms - totalBooked;

//     if (available < roomsBooked) {
//       return res.status(400).json({ message: "Not enough rooms available for these dates" });
//     }

//     // ✅ STEP 2: Save new booking
//     const newBooking = new Booking({
//       ...bookingData,
//       amount: bookingData.price || bookingData.amount,
//       orderId: razorpay_order_id,
//       paymentId: razorpay_payment_id,
//       paymentStatus: "paid",
//     });

//     await newBooking.save();

//     // ✅ STEP 3: Send confirmation email (to user + admin) with PDF invoice
//     if (email && name) {
//       await sendBookingConfirmationEmail(email, name, newBooking, room);
//     }

//     res.json({ success: true, message: "Payment verified & booking confirmed" });
//   } catch (error) {
//     console.error("Error verifying payment:", error);
//     res.status(500).json({ message: "Payment verification failed" });
//   }
// };

// // 📜 Get all bookings (admin)
// export const getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find().populate("roomId");
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // 🗓️ Check Room Availability (before booking)
// export const checkAvailability = async (req, res) => {
//   try {
//     const { roomId, checkIn, checkOut, roomsBooked = 1 } = req.body;

//     const room = await Room.findById(roomId);
//     if (!room) return res.status(404).json({ message: "Room not found" });

//     const existingBookings = await Booking.find({
//       roomId,
//       $or: [{ checkIn: { $lte: checkOut }, checkOut: { $gte: checkIn } }],
//     });

//     const totalBooked = existingBookings.reduce(
//       (sum, b) => sum + (b.roomsBooked || 1),
//       0
//     );

//     const availableRooms = room.totalRooms - totalBooked;

//     if (availableRooms < roomsBooked) {
//       return res.json({
//         available: false,
//         message: `Only ${availableRooms} rooms left for selected dates.`,
//       });
//     }

//     res.json({
//       available: true,
//       message: `${availableRooms} rooms available for booking.`,
//     });
//   } catch (error) {
//     console.error("Error checking availability:", error);
//     res.status(500).json({ message: "Error checking room availability" });
//   }
// };

// // 📅 Get all unavailable dates for a room
// export const getUnavailableDates = async (req, res) => {
//   try {
//     const { roomId } = req.params;

//     const bookings = await Booking.find({ roomId });
//     const unavailableDates = [];

//     bookings.forEach((booking) => {
//       const start = new Date(booking.checkIn);
//       const end = new Date(booking.checkOut);
//       let current = new Date(start);

//       while (current <= end) {
//         unavailableDates.push(current.toISOString().split("T")[0]);
//         current.setDate(current.getDate() + 1);
//       }
//     });

//     res.json({ unavailableDates });
//   } catch (error) {
//     console.error("Error fetching unavailable dates:", error);
//     res.status(500).json({ message: "Failed to fetch unavailable dates" });
//   }
// };

// // ✏️ UPDATE Booking (Edit)
// export const updateBooking = async (req, res) => {
//   try {
//     const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!updated)
//       return res.status(404).json({ message: "Booking not found" });
//     res.json(updated);
//   } catch (error) {
//     console.error("Error updating booking:", error);
//     res.status(500).json({ message: "Failed to update booking" });
//   }
// };

// // ❌ DELETE Booking
// export const deleteBooking = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedBooking = await Booking.findByIdAndDelete(id);
//     if (!deletedBooking)
//       return res.status(404).json({ message: "Booking not found" });

//     res.json({ success: true, message: "Booking deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting booking:", error);
//     res.status(500).json({ message: "Failed to delete booking" });
//   }
// };




// import Razorpay from "razorpay";
// import crypto from "crypto";
// import Booking from "../models/Booking.js";
// import Room from "../models/Room.js"; 
// import { sendBookingConfirmationEmail } from "../utils/sendBookingEmail.js"; 

// // ✅ Convert any date (string or object) → UTC date (no timezone shift)
// const normalizeDate = (value) => {
//   if (!value) return null;
//   const d = new Date(value);
//   return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
// };

// // ✅ Razorpay instance helper
// const getRazorpayInstance = () => {
//   if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
//     throw new Error("⚠️ RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be defined in .env");
//   }
//   return new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
//   });
// };

// // 🧾 Create Razorpay Order
// export const createOrder = async (req, res) => {
//   try {
//     const razorpay = getRazorpayInstance();
//     const { amount } = req.body;

//     if (!amount || isNaN(amount)) {
//       return res.status(400).json({ message: "Invalid amount" });
//     }

//     const options = {
//       amount: Number(amount) * 100, 
//       currency: "INR",
//       receipt: "receipt_" + Date.now(),
//     };

//     const order = await razorpay.orders.create(options);
//     console.log("✅ Razorpay order created:", order);

//     res.json({ orderId: order.id, amount: order.amount });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     res.status(500).json({ message: "Failed to create order" });
//   }
// };

// // 💳 Verify payment and save booking
// export const verifyPayment = async (req, res) => {
//   try {
//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       bookingData,
//     } = req.body;

//     if (!bookingData) {
//       return res.status(400).json({ message: "Booking data is required" });
//     }

//     // ✅ Validate Razorpay signature
//     const sign = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSign = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(sign.toString())
//       .digest("hex");

//     if (expectedSign !== razorpay_signature) {
//       return res.status(400).json({ success: false, message: "Invalid signature" });
//     }

//     // 🟢 Extract values
//     const { roomId, roomsBooked = 1, email, name } = bookingData;

//     // 🟢 FIX: normalize checkIn & checkOut (timezone bug solved)
//     const checkIn = normalizeDate(bookingData.checkIn);
//     const checkOut = normalizeDate(bookingData.checkOut);

//     // 🟢 Now check availability
//     const room = await Room.findById(roomId);
//     if (!room) return res.status(404).json({ message: "Room not found" });

//     const existingBookings = await Booking.find({
//       roomId,
//       $or: [{ checkIn: { $lte: checkOut }, checkOut: { $gte: checkIn } }],
//     });

//     const totalBooked = existingBookings.reduce((sum, b) => sum + (b.roomsBooked || 1), 0);
//     const available = room.totalRooms - totalBooked;

//     if (available < roomsBooked) {
//       return res.status(400).json({ message: "Not enough rooms available for these dates" });
//     }

//     // 🟢 Save new booking (ONLY DATES OVERRIDDEN)
//     const newBooking = new Booking({
//       ...bookingData,
//       checkIn,
//       checkOut,
//       amount: bookingData.price || bookingData.amount,
//       orderId: razorpay_order_id,
//       paymentId: razorpay_payment_id,
//       paymentStatus: "paid",
//     });

//     await newBooking.save();

//     // 🟢 Send confirmation email
//     if (email && name) {
//       await sendBookingConfirmationEmail(email, name, newBooking, room);
//     }

//     res.json({ success: true, message: "Payment verified & booking confirmed" });
//   } catch (error) {
//     console.error("Error verifying payment:", error);
//     res.status(500).json({ message: "Payment verification failed" });
//   }
// };

// // 📜 Get all bookings (admin)
// export const getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find().populate("roomId");
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // 🗓️ Check Room Availability (before booking)
// export const checkAvailability = async (req, res) => {
//   try {
//     const { roomId, checkIn, checkOut, roomsBooked = 1 } = req.body;

//     const room = await Room.findById(roomId);
//     if (!room) return res.status(404).json({ message: "Room not found" });

//     const existingBookings = await Booking.find({
//       roomId,
//       $or: [{ checkIn: { $lte: checkOut }, checkOut: { $gte: checkIn } }],
//     });

//     const totalBooked = existingBookings.reduce(
//       (sum, b) => sum + (b.roomsBooked || 1),
//       0
//     );

//     const availableRooms = room.totalRooms - totalBooked;

//     if (availableRooms < roomsBooked) {
//       return res.json({
//         available: false,
//         message: `Only ${availableRooms} rooms left for selected dates.`,
//       });
//     }

//     res.json({
//       available: true,
//       message: `${availableRooms} rooms available for booking.`,
//     });
//   } catch (error) {
//     console.error("Error checking availability:", error);
//     res.status(500).json({ message: "Error checking room availability" });
//   }
// };

// // 📅 Get all unavailable dates for a room
// export const getUnavailableDates = async (req, res) => {
//   try {
//     const { roomId } = req.params;

//     const bookings = await Booking.find({ roomId });
//     const unavailableDates = [];

//     bookings.forEach((booking) => {
//       const start = new Date(booking.checkIn);
//       const end = new Date(booking.checkOut);
//       let current = new Date(start);

//       while (current <= end) {
//         unavailableDates.push(current.toISOString().split("T")[0]);
//         current.setDate(current.getDate() + 1);
//       }
//     });

//     res.json({ unavailableDates });
//   } catch (error) {
//     console.error("Error fetching unavailable dates:", error);
//     res.status(500).json({ message: "Failed to fetch unavailable dates" });
//   }
// };

// // ✏️ UPDATE Booking
// export const updateBooking = async (req, res) => {
//   try {
//     const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!updated)
//       return res.status(404).json({ message: "Booking not found" });
//     res.json(updated);
//   } catch (error) {
//     console.error("Error updating booking:", error);
//     res.status(500).json({ message: "Failed to update booking" });
//   }
// };

// // ❌ DELETE Booking
// export const deleteBooking = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedBooking = await Booking.findByIdAndDelete(id);
//     if (!deletedBooking)
//       return res.status(404).json({ message: "Booking not found" });

//     res.json({ success: true, message: "Booking deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting booking:", error);
//     res.status(500).json({ message: "Failed to delete booking" });
//   }
// };

//20 today

import Razorpay from "razorpay";
import crypto from "crypto";
import Booking from "../models/Booking.js";
import Room from "../models/Room.js";
import { sendBookingConfirmationEmail } from "../utils/sendBookingEmail.js";
import { Divide } from "lucide-react";

// Convert to UTC (no timezone bug)
const normalizeDate = (value) => {
  if (!value) return null;
  const d = new Date(value);
  return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
};

// Razorpay Instance
const getRazorpayInstance = () => {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error(
      "RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be defined in .env"
    );
  }
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
};

// CREATE ORDER
export const createOrder = async (req, res) => {
  try {
    const razorpay = getRazorpayInstance();
    const { amount } = req.body;

    if (!amount || isNaN(amount)) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const options = {
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.json({ orderId: order.id, amount: order.amount });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Failed to create order" });
  }
};

// VERIFY PAYMENT
export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingData,
    } = req.body;

    if (!bookingData) {
      return res.status(400).json({ message: "Booking data is required" });
    }

    // Signature Check
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (expectedSign !== razorpay_signature) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid signature" });
    }

    // Normalize Dates for timezone fix
    const checkIn = normalizeDate(bookingData.checkIn);
    const checkOut = normalizeDate(bookingData.checkOut);

    // Check availability again (Correct Overlap Logic)
    const existingBookings = await Booking.find({
      roomId: bookingData.roomId,
      checkIn: { $lt: checkOut }, // FIXED
      checkOut: { $gt: checkIn }, // FIXED
    });

    const room = await Room.findById(bookingData.roomId);
    if (!room) return res.status(404).json({ message: "Room not found" });

    const totalBooked = existingBookings.reduce(
      (sum, b) => sum + (b.roomsBooked || 1),
      0
    );

    if (room.totalRooms - totalBooked < bookingData.roomsBooked) {
      return res.status(400).json({
        message: "Not enough rooms available for these dates",
      });
    }

    // SAVE BOOKING
    const newBooking = new Booking({
      ...bookingData,
      checkIn,
      checkOut,
      amount: bookingData.price,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      paymentStatus: "paid",
    });

    await newBooking.save();

    // Email
    if (bookingData.email && bookingData.name) {
      await sendBookingConfirmationEmail(
        bookingData.email,
        bookingData.name,
        newBooking,
        room
      );
    }

    res.json({ success: true, message: "Payment verified & booking confirmed" });
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ message: "Payment verification failed" });
  }
};

// GET ALL BOOKINGS (ADMIN)
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("roomId");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CHECK AVAILABILITY — FIXED LOGIC
export const checkAvailability = async (req, res) => {
  try {
   let { roomId, checkIn, checkOut, roomsBooked = 1 } = req.body;

checkIn = normalizeDate(checkIn);
checkOut = normalizeDate(checkOut);

    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ message: "Room not found" });

    const existingBookings = await Booking.find({
      roomId,
      checkIn: { $lt: checkOut }, // FIXED
      checkOut: { $gt: checkIn }, // FIXED
    });

    const totalBooked = existingBookings.reduce(
      (sum, b) => sum + (b.roomsBooked || 1),
      0
    );

    const availableRooms = room.totalRooms - totalBooked;

    if (availableRooms < roomsBooked) {
      return res.json({
        available: false,
        message: `Only ${availableRooms} rooms left for selected dates.`,
      });
    }

    res.json({
      available: true,
      message: `${availableRooms} rooms available for booking.`,
    });
  } catch (error) {
    console.error("Error checking availability:", error);
    res.status(500).json({ message: "Error checking room availability" });
  }
};

// GET UNAVAILABLE DATES — FIXED CHECKOUT DAY ISSUE
export const getUnavailableDates = async (req, res) => {
  try {
    const { roomId } = req.params;

    const bookings = await Booking.find({ roomId });
    const unavailableDates = [];

    bookings.forEach((booking) => {
      const start = new Date(booking.checkIn);
      const end = new Date(booking.checkOut);

      let current = new Date(start);

      while (current < end) {   // FIXED: Checkout NOT included
        unavailableDates.push(current.toISOString().split("T")[0]);
        current.setDate(current.getDate() + 1);
      }
    });

    res.json({ unavailableDates });
  } catch (error) {
    console.error("Error fetching unavailable dates:", error);
    res.status(500).json({ message: "Failed to fetch unavailable dates" });
  }
};

// UPDATE BOOKING
export const updateBooking = async (req, res) => {
  try {
    const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated)
      return res.status(404).json({ message: "Booking not found" });

    res.json(updated);
  } catch (error) {
    console.error("Error updating booking:", error);
    res.status(500).json({ message: "Failed to update booking" });
  }
};

// DELETE BOOKING
export const deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking)
      return res.status(404).json({ message: "Booking not found" });

    res.json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).json({ message: "Failed to delete booking" });
  }
};