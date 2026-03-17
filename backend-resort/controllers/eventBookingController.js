// import Razorpay from "razorpay";
// import crypto from "crypto";
// import EventBooking from "../models/EventBooking.js";
// import { eventEmail } from "../utils/eventEmail.js";
// import { generateEventInvoice } from "../utils/generateEventInvoice.js";

// // 🔐 Razorpay instance
// const getRazorpayInstance = () => {
//   if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
//     throw new Error("Razorpay keys missing in .env");
//   }

//   return new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
//   });
// };

// // 🧾 CREATE ORDER
// export const createEventOrder = async (req, res) => {
//   try {
//     const razorpay = getRazorpayInstance();
//     const { amount } = req.body;

//     if (!amount || isNaN(amount)) {
//       return res.status(400).json({ message: "Invalid amount" });
//     }

//     const order = await razorpay.orders.create({
//       amount: Number(amount) * 100,
//       currency: "INR",
//       receipt: `event_${Date.now()}`,
//     });

//     res.json({ success: true, order });
//   } catch (error) {
//     console.error("Create order error:", error);
//     res.status(500).json({ message: "Order creation failed" });
//   }
// };

// // ✅ VERIFY PAYMENT + SAVE BOOKING + PDF + EMAIL
// export const verifyEventPayment = async (req, res) => {
//   try {
//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       bookingData,
//     } = req.body;

//     if (!bookingData) {
//       return res.status(400).json({ message: "Booking data missing" });
//     }

//     // 🔐 Signature verification
//     const sign = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSign = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(sign)
//       .digest("hex");

//     if (expectedSign !== razorpay_signature) {
//       return res.status(400).json({ message: "Invalid signature" });
//     }

//     // 💾 SAVE BOOKING
//     const newBooking = await EventBooking.create({
//       ...bookingData,
//       orderId: razorpay_order_id,
//       paymentId: razorpay_payment_id,
//       paymentStatus: "paid",
//     });

//     // 📄 GENERATE PDF INVOICE
//     const pdfPath = await generateEventInvoice(newBooking);

//     // 📧 SEND EMAIL WITH PDF
//     if (newBooking.email && newBooking.name) {
//       await eventEmail(
//         newBooking.email,
//         newBooking.name,
//         newBooking,
//         pdfPath
//       );
//     }

//     res.json({
//       success: true,
//       message: "Event booking confirmed & invoice sent",
//       booking: newBooking,
//     });
//   } catch (error) {
//     console.error("Verify payment error:", error);
//     res.status(500).json({ message: "Payment verification failed" });
//   }
// };

// // 📋 GET ALL EVENT BOOKINGS (ADMIN)
// export const getAllEventBookings = async (req, res) => {
//   try {
//     const bookings = await EventBooking.find().sort({ createdAt: -1 });
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // ❌ DELETE EVENT BOOKING
// export const deleteEventBooking = async (req, res) => {
//   try {
//     const booking = await EventBooking.findByIdAndDelete(req.params.id);
//     if (!booking) {
//       return res.status(404).json({ message: "Booking not found" });
//     }

//     res.json({ success: true, message: "Event booking deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Delete failed" });
//   }
// };


//new

// import Razorpay from "razorpay";
// import crypto from "crypto";
// import EventBooking from "../models/EventBooking.js";
// import { eventEmail } from "../utils/eventEmail.js";
// import { generateEventInvoice } from "../utils/generateEventInvoice.js";

// // 🔐 Razorpay instance
// const getRazorpayInstance = () => {
//   if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
//     throw new Error("Razorpay keys missing in .env");
//   }

//   return new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
//   });
// };

// // 🧾 CREATE ORDER
// export const createEventOrder = async (req, res) => {
//   try {
//     const razorpay = getRazorpayInstance();
//     const { amount } = req.body;

//     if (!amount || isNaN(amount)) {
//       return res.status(400).json({ message: "Invalid amount" });
//     }

//     const order = await razorpay.orders.create({
//       amount: Number(amount) * 100,
//       currency: "INR",
//       receipt: `event_${Date.now()}`,
//     });

//     res.json({ success: true, order });
//   } catch (error) {
//     console.error("Create order error:", error);
//     res.status(500).json({ message: "Order creation failed" });
//   }
// };

// // ✅ CHECK DATE AVAILABILITY
// export const checkEventAvailability = async (req, res) => {
//   try {
//     const { eventDate, days } = req.body;
//     const startDate = new Date(eventDate);
//     const endDate = new Date(startDate);
//     endDate.setDate(endDate.getDate() + Number(days) - 1);

//     // Fetch all bookings
//     const bookings = await EventBooking.find();

//     // Check if any booking overlaps
//     const isBooked = bookings.some((b) => {
//       const bookedStart = new Date(b.eventDate);
//       const bookedEnd = new Date(bookedStart);
//       bookedEnd.setDate(bookedEnd.getDate() + Number(b.days) - 1);

//       return (
//         (startDate >= bookedStart && startDate <= bookedEnd) ||
//         (endDate >= bookedStart && endDate <= bookedEnd) ||
//         (startDate <= bookedStart && endDate >= bookedEnd)
//       );
//     });

//     res.json({ available: !isBooked });
//   } catch (err) {
//     console.error("Check availability error:", err);
//     res.status(500).json({ message: "Could not check availability" });
//   }
// };

// // ✅ VERIFY PAYMENT + SAVE BOOKING + PDF + EMAIL
// export const verifyEventPayment = async (req, res) => {
//   try {
//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       bookingData,
//     } = req.body;

//     if (!bookingData) {
//       return res.status(400).json({ message: "Booking data missing" });
//     }

//     // 🔐 Signature verification
//     const sign = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSign = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(sign)
//       .digest("hex");

//     if (expectedSign !== razorpay_signature) {
//       return res.status(400).json({ message: "Invalid signature" });
//     }

//     // ✅ CALCULATE PAID AMOUNT (FIX FOR PDF / EMAIL)
//     const amountPaid =
//       bookingData.paymentType === "advance"
//         ? Math.round(bookingData.totalAmount * 0.3)
//         : bookingData.totalAmount;

//     // 💾 SAVE BOOKING
//     const newBooking = await EventBooking.create({
//       ...bookingData,
//       amountPaid, // ✅ IMPORTANT
//       orderId: razorpay_order_id,
//       paymentId: razorpay_payment_id,
//       paymentStatus: "PAID",
//     });

//     // 📄 GENERATE PDF INVOICE
//     const pdfPath = await generateEventInvoice(newBooking);

//     // 📧 SEND EMAIL WITH PDF
//     if (newBooking.email && newBooking.name) {
//       await eventEmail(
//         newBooking.email,
//         newBooking.name,
//         newBooking,
//         pdfPath
//       );
//     }

//     res.json({
//       success: true,
//       message: "Event booking confirmed & invoice sent",
//       booking: newBooking,
//     });
//   } catch (error) {
//     console.error("Verify payment error:", error);
//     res.status(500).json({ message: "Payment verification failed" });
//   }
// };

// // 📋 GET ALL EVENT BOOKINGS (ADMIN)
// export const getAllEventBookings = async (req, res) => {
//   try {
//     const bookings = await EventBooking.find().sort({ createdAt: -1 });
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // ❌ DELETE EVENT BOOKING
// export const deleteEventBooking = async (req, res) => {
//   try {
//     const booking = await EventBooking.findByIdAndDelete(req.params.id);
//     if (!booking) {
//       return res.status(404).json({ message: "Booking not found" });
//     }

//     res.json({ success: true, message: "Event booking deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Delete failed" });
//   }
// };



import Razorpay from "razorpay";
import crypto from "crypto";
import EventBooking from "../models/EventBooking.js";
import { eventEmail } from "../utils/eventEmail.js";
import { generateEventInvoice } from "../utils/generateEventInvoice.js";

//  Razorpay instance
const getRazorpayInstance = () => {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error("Razorpay keys missing in .env");
  }

  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
};

//  CREATE ORDER
export const createEventOrder = async (req, res) => {
  try {
    const razorpay = getRazorpayInstance();
    const { amount } = req.body;

    if (!amount || isNaN(amount)) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const order = await razorpay.orders.create({
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: `event_${Date.now()}`,
    });

    res.json({ success: true, order });
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({ message: "Order creation failed" });
  }
};

//  CHECK DATE AVAILABILITY (UPDATED: SAME DATE BUT DIFFERENT EVENT ALLOWED)
export const checkEventAvailability = async (req, res) => {
  try {
    const { eventDate, days, eventName } = req.body;
    const startDate = new Date(eventDate);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + Number(days) - 1);

    // Fetch all bookings for the **same event**
    const bookings = await EventBooking.find({ eventName });

    // Check if any booking overlaps for this event
    const isBooked = bookings.some((b) => {
      const bookedStart = new Date(b.eventDate);
      const bookedEnd = new Date(bookedStart);
      bookedEnd.setDate(bookedEnd.getDate() + Number(b.days) - 1);

      return (
        (startDate >= bookedStart && startDate <= bookedEnd) ||
        (endDate >= bookedStart && endDate <= bookedEnd) ||
        (startDate <= bookedStart && endDate >= bookedEnd)
      );
    });

    res.json({ available: !isBooked });
  } catch (err) {
    console.error("Check availability error:", err);
    res.status(500).json({ message: "Could not check availability" });
  }
};

//  VERIFY PAYMENT + SAVE BOOKING + PDF + EMAIL
export const verifyEventPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      bookingData,
    } = req.body;

    if (!bookingData) {
      return res.status(400).json({ message: "Booking data missing" });
    }

    //  Signature verification
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest("hex");

    if (expectedSign !== razorpay_signature) {
      return res.status(400).json({ message: "Invalid signature" });
    }

    //  CALCULATE PAID AMOUNT (FIX FOR PDF / EMAIL)
    const amountPaid =
      bookingData.paymentType === "advance"
        ? Math.round(bookingData.totalAmount * 0.3)
        : bookingData.totalAmount;

    //  SAVE BOOKING
    const newBooking = await EventBooking.create({
      ...bookingData,
      amountPaid, //  IMPORTANT
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      paymentStatus: "PAID",
    });

    //  GENERATE PDF INVOICE
    const pdfPath = await generateEventInvoice(newBooking);

    //  SEND EMAIL WITH PDF
    if (newBooking.email && newBooking.name) {
      await eventEmail(
        newBooking.email,
        newBooking.name,
        newBooking,
        pdfPath
      );
    }

    res.json({
      success: true,
      message: "Event booking confirmed & invoice sent",
      booking: newBooking,
    });
  } catch (error) {
    console.error("Verify payment error:", error);
    res.status(500).json({ message: "Payment verification failed" });
  }
};

//  GET ALL EVENT BOOKINGS (ADMIN)
export const getAllEventBookings = async (req, res) => {
  try {
    const bookings = await EventBooking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  DELETE EVENT BOOKING
export const deleteEventBooking = async (req, res) => {
  try {
    const booking = await EventBooking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ success: true, message: "Event booking deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
};
