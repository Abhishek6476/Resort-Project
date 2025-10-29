// // 100 work code

// import Razorpay from "razorpay";
// import crypto from "crypto";
// import Booking from "../models/Booking.js";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// import { sendBookingMail } from "../utils/sendMail.js";


// dotenv.config();

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_SECRET,
// });

// //  Create Order
// export const createOrder = async (req, res) => {
//   try {
//     const { name, email, mobile, roomType, totalPrice, roomCount, guestCount, checkIn, checkOut, totalPriceWithGST } = req.body;

//     const options = {
//       amount: totalPrice * 100,
//       currency: "INR",
//       receipt: `receipt_${Date.now()}`,
//     };

//     const order = await razorpay.orders.create(options);

//     // Save booking with pending status
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
//       orderId: order.id,
//       paymentStatus: "Pending",
//     });

//     await newBooking.save();

//     res.json({ order });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Function to send booking confirmation email

// const sendBookingMail = async (booking) => {
//   console.log(" Starting sendBookingMail for:", booking.email);

//   try {
//     //  Create transporter
//     const transporter = nodemailer.createTransport ({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     //  Prepare email content
//     const mailOptions = {
//       //  from: `"Hotel Booking" <raviranjan3y@gmail.com>`,
//       from: `"Hotel Booking" <raviranjan3y@gmail.com>`,

//       to: booking.email,
//       subject: "Your Room Booking is Confirmed ",
//       html: `
//         <h2>Dear ${booking.name},</h2>
//         <p>Your room booking has been <b>successfully confirmed!</b></p>

//         <h3>Booking Details:</h3>
//         <ul>
//           <li><b>Room Type:</b> ${booking.roomType}</li>
//           <li><b>Room Count:</b> ${booking.roomCount}</li>
//           <li><b>Guest Count:</b> ${booking.guestCount}</li>
//           <li><b>Check-In:</b> ${booking.checkIn}</li>
//           <li><b>Check-Out:</b> ${booking.checkOut}</li>
//           <li><b>Total Price:</b> ₹${booking.totalPriceWithGST}</li>
//           <li><b>Payment ID:</b> ${booking.paymentId}</li>
//         </ul>

//           <p>Thank you for booking with our hotel! We look forward to your stay.</p>
//         <hr/>
//         <p><i>This is an automated email, please do not reply.</i></p>
//       `,
//     };

//     console.log("sending mail to:",booking.email);
//     // send mail
//     const info =  await transporter.sendMail(mailOptions);
//     console.log(`Email sent successfully to ${booking.email}`);
//   }catch(error){
//     console.error("Email sending failed:",error);
//   }
// };

// //  Verify Payment (after payment success)
// export const verifyPayment = async (req, res) => {
//   try {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//     const body = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_SECRET)
//       .update(body)
//       .digest("hex");

//       if (expectedSignature === razorpay_signature) {
//   const updatedBooking = await Booking.findOneAndUpdate(
//     { orderId: razorpay_order_id },
//     { paymentId: razorpay_payment_id, paymentStatus: "Success" },
//     { new: true }
//   );

//       //  Send confirmation email
//       if (updatedBooking) {
//        console.log(" Sending confirmation email to:", updatedBooking.email);
//         await sendBookingMail(updatedBooking);
//       }

  
//       return res.json({ success: true, message: "Payment verified and email sent successfully" });
    
//     } else {
//       await Booking.findOneAndUpdate(
//         { orderId: razorpay_order_id }, 
//         { paymentStatus: "Failed" }
//       );

//       return res.status(400).json({ success: false, message: "Payment verification failed" });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };




import Razorpay from "razorpay";
import crypto from "crypto";
import Booking from "../models/Booking.js";
import { sendBookingMail } from "../utils/sendMail.js";
import dotenv from "dotenv";

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 🔹 Create Razorpay Order
export const createOrder = async (req, res) => {
  try {
    const { name, email, mobile, roomType, roomCount, guestCount,
            checkIn, checkOut, totalPrice, totalPriceWithGST } = req.body;

    const options = {
      amount: totalPrice * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    const booking = new Booking({
      name, email, mobile, roomType, roomCount, guestCount,
      checkIn, checkOut, totalPrice, totalPriceWithGST,
      orderId: order.id,
      paymentStatus: "Pending",
    });
    await booking.save();

    res.json({ success: true, order });
  } catch (error) {
    console.error("❌ Error creating order:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// 🔹 Verify Payment + Send Email
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id,
            razorpay_signature, bookingData } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      // update booking record
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
        console.warn("⚠️ No booking found for orderId:", razorpay_order_id);
        return res.json({ success: false, message: "Booking not found" });
      }

      // send confirmation email
      await sendBookingMail(updatedBooking);

      console.log("✅ Payment Verified Successfully");
      res.json({
        success: true,
        message: "Payment verified and email sent successfully",
      });
    } else {
      await Booking.findOneAndUpdate(
        { orderId: razorpay_order_id },
        { paymentStatus: "Failed" }
      );
      res.status(400).json({ success: false, message: "Payment verification failed" });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// import Razorpay from "razorpay";
// import crypto from "crypto";
// import Booking from "../models/Booking.js";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_SECRET,
// });

// // Create Order
// export const createOrder = async (req, res) => {
//   try {
//     const {
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
//     } = req.body;

//     const options = {
//       amount: totalPrice * 100,
//       currency: "INR",
//       receipt: `receipt_${Date.now()}`,
//     };

//     const order = await razorpay.orders.create(options);

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
//       orderId: order.id,
//       paymentStatus: "Pending",
//     });

//     await newBooking.save();

//     res.json({ order });
//   } catch (err) {
//     console.error("Error creating order:", err);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// // Function to send booking confirmation email
// // const sendBookingMail = async (booking) => {
// //   console.log("Starting sendBookingMail for:", booking.email);

// //   try {
// //     const transporter = nodemailer.createTransport({
// //       service: "gmail",
// //       auth: {
// //         user: process.env.EMAIL_USER,
// //         pass: process.env.EMAIL_PASS,
// //       },
// //     });

// //     const mailOptions = {
// //       // from: `"Hotel Booking" <${process.env.EMAIL_USER}>`,
// //       from: `"Hotel Booking" <${process.env.EMAIL_USER}>`,

// //       to: booking.email,
// //       subject: "Your Room Booking is Confirmed",
// //       html: `
// //         <h2>Dear ${booking.name},</h2>
// //         <p>Your room booking has been <b>successfully confirmed!</b></p>

// //         <h3>Booking Details:</h3>
// //         <ul>
// //           <li><b>Room Type:</b> ${booking.roomType}</li>
// //           <li><b>Room Count:</b> ${booking.roomCount || "-"}</li>
// //           <li><b>Guest Count:</b> ${booking.guestCount || "-"}</li>
// //           <li><b>Check-In:</b> ${booking.checkIn || "-"}</li>
// //           <li><b>Check-Out:</b> ${booking.checkOut || "-"}</li>
// //           <li><b>Total Price:</b> ₹${booking.totalPriceWithGST || booking.totalPrice}</li>
// //           <li><b>Payment ID:</b> ${booking.paymentId}</li>
// //         </ul>

// //         <p>Thank you for booking with our hotel! We look forward to your stay.</p>
// //         <hr/>
// //         <p><i>This is an automated email, please do not reply.</i></p>
// //       `,
// //     };

// //     const info = await transporter.sendMail(mailOptions);
// //     console.log(`✅ Email sent successfully to ${booking.email}`);
// //   } catch (error) {
// //     console.error("❌ Email sending failed:", error);
// //   }
// // };
// const sendBookingMail = async (booking) => {
//   console.log("📨 Starting sendBookingMail for:", booking.email);

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Test transporter first
//     await transporter.verify();
//     console.log("✅ Transporter verified successfully!");

//     const mailOptions = {
//       from: `"Hotel Booking" <${process.env.EMAIL_USER}>`,
//       to: booking.email,
//       subject: "Your Room Booking is Confirmed",
//       html: `
//         <h2>Dear ${booking.name},</h2>
//         <p>Your room booking has been <b>successfully confirmed!</b></p>
//         <h3>Booking Details:</h3>
//         <ul>
//           <li><b>Room Type:</b> ${booking.roomType}</li>
//           <li><b>Room Count:</b> ${booking.roomCount || "-"}</li>
//           <li><b>Guest Count:</b> ${booking.guestCount || "-"}</li>
//           <li><b>Check-In:</b> ${booking.checkIn || "-"}</li>
//           <li><b>Check-Out:</b> ${booking.checkOut || "-"}</li>
//           <li><b>Total Price:</b> ₹${booking.totalPriceWithGST || booking.totalPrice}</li>
//           <li><b>Payment ID:</b> ${booking.paymentId}</li>
//         </ul>
//         <p>Thank you for booking with our hotel! We look forward to your stay.</p>
//         <hr/>
//         <p><i>This is an automated email, please do not reply.</i></p>
//       `,
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log(`✅ Email sent successfully to ${booking.email}:`, info.response);
//   } catch (error) {
//     console.error("❌ Email sending failed:", error);
//   }
// };




// // Verify Payment
// export const verifyPayment = async (req, res) => {
//   try {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//     const body = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_SECRET)
//       .update(body)
//       .digest("hex");

//     if (expectedSignature === razorpay_signature) {
//       const updatedBooking = await Booking.findOneAndUpdate(
//         { orderId: razorpay_order_id },
//         { paymentId: razorpay_payment_id, paymentStatus: "Success" },
//         { new: true }
//       );

//       if (updatedBooking) {
//         console.log("Sending confirmation email to:", updatedBooking.email);
//         await sendBookingMail(updatedBooking);
//       }

//       return res.json({
//         success: true,
//         message: "Payment verified and email sent successfully",
//         booking: updatedBooking,
//       });
//     } else {
//       await Booking.findOneAndUpdate(
//         { orderId: razorpay_order_id },
//         { paymentStatus: "Failed" }
//       );

//       return res.status(400).json({ success: false, message: "Payment verification failed" });
//     }
//   } catch (err) {
//     console.error("Error verifying payment:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };


  