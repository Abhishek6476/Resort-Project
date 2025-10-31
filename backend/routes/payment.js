

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
//100 work code for latest 

// import express from "express";
// import Razorpay from "razorpay";
// import dotenv from "dotenv";
// import crypto from "crypto";
// import Booking from "../models/Booking.js"; 
// import { verifyPayment } from "../controllers/paymentControllers.js";
//  import { sendBookingMail } from "../utils/sendMail.js";


// dotenv.config();
// const router = express.Router();
// //router.post("/verify-payment", verifyPayment);


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
import fs from "fs";
import Booking from "../models/Booking.js";
import { sendBookingMail } from "../utils/sendMail.js";
import { generateRoomBookingInvoice } from "../utils/generateInvoice.js";
import { verifyPayment } from "../controllers/paymentController.js";



dotenv.config();
const router = express.Router();

router.post("/verify-payment", verifyPayment);

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// //  Create Razorpay Order
router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

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
    console.error("🔴 Razorpay Error:", err);
    res.status(500).json({ message: "Error creating order" });
  }
});




//  Verify Razorpay Payment + Send Mail with Invoice
router.post("/verify-payment", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingData,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      // ✅ Update booking details in DB
      const updatedBooking = await Booking.findOneAndUpdate(
        { orderId: razorpay_order_id },
        {
          ...bookingData,
          paymentId: razorpay_payment_id,
          paymentStatus: "Success",
        },
        { new: true }
      );

      if (!updatedBooking) {
        console.warn("⚠️ Booking not found for orderId:", razorpay_order_id);
        return res.status(404).json({ success: false, message: "Booking not found" });
      }

      //  Generate Invoice PDF file
      const { generateInvoicePDF } = await import("../utils/generateInvoice.js");
      const pdfPath = await generateInvoicePDF(updatedBooking);

      //  Send Confirmation Email with Invoice
      const { sendBookingMail } = await import("../utils/sendMail.js");
      await sendBookingMail(updatedBooking, pdfPath);

      // 🧹 Optional: Delete temp file after sending
      setTimeout(() => {
        fs.unlink(pdfPath, (err) => {
          if (!err) console.log("🧹 Deleted temp invoice:", pdfPath);
        });
      }, 10000);

      console.log(" Payment verified + invoice + email sent");
      return res.json({ success: true, message: "Email sent successfully" });
    } else {
      await Booking.findOneAndUpdate(
        { orderId: razorpay_order_id },
        { paymentStatus: "Failed" }
      );
      res.status(400).json({ success: false, message: "Payment verification failed" });
    }
  } catch (error) {
    console.error(" verify-payment error:", error);
    res.status(500).json({ message: "Server error during payment verification" });
  }
});


export default router;
