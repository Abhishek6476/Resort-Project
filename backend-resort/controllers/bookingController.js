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



import Razorpay from "razorpay";
import crypto from "crypto";
import Booking from "../models/Booking.js";

// ✅ Razorpay instance helper
const getRazorpayInstance = () => {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error(
      "⚠️ RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be defined in .env"
    );
  }
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
};

// 🧾 Create Razorpay Order
export const createOrder = async (req, res) => {
  try {
    const razorpay = getRazorpayInstance();
    const { amount } = req.body;

    if (!amount || isNaN(amount)) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const options = {
      amount: Number(amount) * 100, // convert INR to paisa
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    console.log("✅ Razorpay order created:", order);

    res.json({ orderId: order.id, amount: order.amount });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Failed to create order" });
  }
};

// 💳 Verify payment and save booking
export const verifyPayment = async (req, res) => {
  try {
    const razorpay = getRazorpayInstance();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingData,
    } = req.body;

    if (!bookingData) {
      return res.status(400).json({ message: "Booking data is required" });
    }

    // ✅ Validate signature
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (expectedSign !== razorpay_signature) {
      return res.status(400).json({ success: false, message: "Invalid signature" });
    }

    // ✅ Save booking
    const newBooking = new Booking({
      ...bookingData,
      amount: bookingData.price || bookingData.amount, // ensure amount exists
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      paymentStatus: "paid",
    });

    await newBooking.save();

    res.json({ success: true, message: "Payment verified & booking confirmed" });
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ message: "Payment verification failed" });
  }
};

// 📜 Get all bookings (admin)
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("roomId");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
