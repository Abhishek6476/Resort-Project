

// //100 work code

// import express from "express";
// import Razorpay from "razorpay";
// import dotenv from "dotenv";

// dotenv.config();
// const router = express.Router();

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// router.post("/create-order", async (req, res) => {
//   try {
//     const { amount } = req.body;

//     if (!amount || isNaN(amount) || amount <= 0) {
//       return res.status(400).json({ message: "Invalid amount value" });
//     }

//     const options = {
//       amount: amount * 100, // convert to paise
//       currency: "INR",
//       receipt: `receipt_${Date.now()}`,
//       payment_capture: 1,
//     };

//     const order = await razorpay.orders.create(options);
//     console.log("✅ Razorpay Order Created:", order);
//     res.status(200).json(order);
//   } catch (err) {
//     console.error("❌ Razorpay Error:", err);
//     res.status(500).json({ message: err.message || "Error creating order" });
//   }
// });

// export default router;

//without email code
// import express from "express";
// import Razorpay from "razorpay";
// import dotenv from "dotenv";
// import crypto from "crypto";
// import Booking from "../models/Booking.js"; 
//  import { sendBookingMail } from "../utils/sendMail.js";


// dotenv.config();
// const router = express.Router();

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// //  Create Razorpay Order
// router.post("/create-order", async (req, res) => {
//   try {
//     const { name, email, mobile, roomType, amount } = req.body;

//     if (!amount || isNaN(amount) || amount <= 0) {
//       return res.status(400).json({ message: "Invalid amount value" });
//     }

//     const options = {
//       amount: amount * 100,
//       currency: "INR",
//       receipt: `receipt_${Date.now()}`,
//     };

//     const order = await razorpay.orders.create(options);
//     console.log(" Razorpay Order Created:", order);

//     res.status(200).json(order);
//   } catch (err) {
//     console.error(" Razorpay Error:", err);
//     res.status(500).json({ message: err.message || "Error creating order" });
//   }
// });

// //  Verify Razorpay Payment
// router.post("/verify-payment", async (req, res) => {
//   try {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//     const body = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(body)
//       .digest("hex");

//     if (expectedSignature === razorpay_signature) {
//       // Update booking as successful
//       await Booking.findOneAndUpdate(
//         { orderId: razorpay_order_id },
//         { paymentId: razorpay_payment_id, paymentStatus: "Success" },
//         { new: true }
//       );
//       console.log(" Payment Verified Successfully");
//       res.json({ success: true, message: "Payment verified successfully" });
//     } else {
//       await Booking.findOneAndUpdate(
//         { orderId: razorpay_order_id },
//         { paymentStatus: "Failed" }
//       );
//       console.log(" Payment Verification Failed");
//       res.status(400).json({ success: false, message: "Payment verification failed" });
//     }
//   } catch (err) {
//     console.error(" Error verifying payment:", err);
//     res.status(500).json({ message: "Server error during payment verification" });
//   }
// });

// export default router;



import express from "express";
import Razorpay from "razorpay";
import dotenv from "dotenv";
import crypto from "crypto";
import Booking from "../models/Booking.js";
import { sendBookingMail } from "../utils/sendMail.js";
import { createOrder, verifyPayment } from "../controllers/paymentController.js";

dotenv.config();
const router = express.Router();
router.post("/create-order", createOrder);
router.post("/verify", verifyPayment);

//  Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// // Create Razorpay Order
router.post("/create-order", async (req, res) => {
  try {
    const { name, email, mobile, roomType, amount } = req.body;

    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount value" });
    }

    const options = {
      amount: amount * 100, 
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    console.log(" Razorpay Order Created:", order);


    res.status(200).json(order);
  } catch (err) {
    console.error(" Razorpay Error:", err);
    res.status(500).json({ message: err.message || "Error creating order" });
  }
});


// router.post("/create-order", async (req, res) => {
//   try {
//     const { name, email, mobile, roomType, roomCount, guestCount, checkIn, checkOut, totalPrice, totalPriceWithGST } = req.body;

//     const options = {
//       amount: totalPrice * 100,
//       currency: "INR",
//       receipt: `receipt_${Date.now()}`,
//     };

//     const order = await razorpay.orders.create(options);
//     console.log("✅ Razorpay Order Created:", order);

//     // 💾 Save booking with pending payment
//     const newBooking = new Booking({
//       name,
//       email,
//       mobile,
//       roomType,
//       roomCount,
//       guestCount,
//       checkIn,
//       checkOut,
//       totalPrice,
//       totalPriceWithGST,
//       orderId: order.id, // 👈 very important
//       paymentStatus: "Pending",
//     });

//     await newBooking.save();

//     res.status(200).json(order);
//   } catch (err) {
//     console.error("❌ Error creating order:", err);
//     res.status(500).json({ message: err.message || "Error creating order" });
//   }
// });









// //  Verify Razorpay Payment
// router.post("/verify-payment", async (req, res) => {
//   try {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//     // Generate server-side signature for verification
//     const body = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(body)
//       .digest("hex");

//     //  Signature match = success
//     if (expectedSignature === razorpay_signature) {
//       const updatedBooking = await Booking.findOneAndUpdate(
//         { orderId: razorpay_order_id },
//         { paymentId: razorpay_payment_id, paymentStatus: "Success" },
//         { new: true }
//       );

//       console.log(" Payment Verified Successfully");

//       //  Send confirmation email
//       if (updatedBooking && updatedBooking.email) {
//         console.log(" Sending confirmation email to:", updatedBooking.email);
//         await sendBookingMail(updatedBooking);
//       }

//       res.json({ success: true, message: "Payment verified & email sent!" });
//     } else {
//       //  Signature mismatch = failed
//       await Booking.findOneAndUpdate(
//         { orderId: razorpay_order_id },
//         { paymentStatus: "Failed" }
//       );

//       console.log(" Payment Verification Failed");
//       res.status(400).json({ success: false, message: "Payment verification failed" });
//     }
//   } catch (err) {
//     console.error(" Error verifying payment:", err);
//     res.status(500).json({ message: "Server error during payment verification" });
//   }
// });


 //  Verify Razorpay Payment

router.post("/verify-payment", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      // ✅ Update booking as successful
      const updatedBooking = await Booking.findOneAndUpdate(
        { orderId: razorpay_order_id },
        { paymentId: razorpay_payment_id, paymentStatus: "Success" },
        { new: true }
      );

      console.log(" Payment Verified Successfully");

      if (updatedBooking) {
        console.log("📦 Booking found:", updatedBooking._id);
        console.log("📧 Sending confirmation mail to:", updatedBooking.email);
        await sendBookingMail(updatedBooking);
      } else {
        console.warn("⚠️ No booking found for orderId:", razorpay_order_id);
      }

      return res.json({ success: true, message: "Payment verified and email sent successfully" });
    } else {
      await Booking.findOneAndUpdate(
        { orderId: razorpay_order_id },
        { paymentStatus: "Failed" }
      );
      console.log("❌ Payment Verification Failed");
      return res.status(400).json({ success: false, message: "Payment verification failed" });
    }
  } catch (err) {
    console.error("Error verifying payment:", err);
    res.status(500).json({ message: "Server error during payment verification" });
  }
});

export default router;
