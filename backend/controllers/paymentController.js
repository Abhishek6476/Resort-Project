

import Razorpay from "razorpay";
import crypto from "crypto";
import fs from "fs";
import dotenv from "dotenv";

import Booking from "../models/Booking.js";
import { sendBookingMail } from "../utils/sendMail.js";
import { generateRoomBookingInvoice } from "../utils/generateInvoice.js"; // uses pdfkit

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 🔹 Create Razorpay order + save booking
export const createOrder = async (req, res) => {
  try {
    const {
      name, email, mobile,
      roomType, roomCount, guestCount,
      checkIn, checkOut, totalPrice, totalWithGST
    } = req.body;

    const order = await razorpay.orders.create({
      amount: totalWithGST * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    const booking = await Booking.create({
      name, email, mobile, roomType,
      roomCount, guestCount, checkIn, checkOut,
      totalPrice, totalWithGST,
      orderId: order.id,
      paymentStatus: "Pending",
    });

    res.status(200).json({ success: true, order, booking });
  } catch (error) {
    console.error("❌ Error creating order:", error);
    res.status(500).json({ message: "Server error while creating order" });
  }
};

// 🔹 Verify payment, generate invoice, send mail
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingData } = req.body;

    const generatedSig = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generatedSig !== razorpay_signature) {
      await Booking.findOneAndUpdate(
        { orderId: razorpay_order_id },
        { paymentStatus: "Failed" }
      );
      return res.status(400).json({ success: false, message: "Signature mismatch" });
    }

    // ✅ Update booking in DB
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
      console.warn(" Booking not found for:", razorpay_order_id);
      return res.status(404).json({ success: false, message: "Booking not found" });
    }

    // ✅ Generate invoice (pdfkit)
const pdfPath = await generateRoomBookingInvoice(
  updatedBooking,
  { razorpay_payment_id } // pass payment details to include in PDF
);

    // ✅ Send email
    await sendBookingMail(updatedBooking, pdfPath);

    // delete temporary file after email sent
    setTimeout(() => {
      fs.unlink(pdfPath, (err) => {
        if (!err) console.log("🧹 Deleted temp invoice:", pdfPath);
      });
    }, 15000);

    console.log(" Payment verified + invoice generated + email sent");
    return res.json({ success: true, booking: updatedBooking });
  } catch (error) {
    console.error(" Error verifying payment:", error);
    res.status(500).json({ message: "Server error during payment verification" });
  }
};


