// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();

// const sendTestMail = async () => {
//   try {
//     console.log("🟢 Starting test mail...");

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Verify transporter
//     transporter.verify((error, success) => {
//       if (error) {
//         console.error("❌ SMTP connection failed:", error);
//       } else {
//         console.log("✅ SMTP server is ready to send emails!");
//       }
//     });

//     const mailOptions = {
//       from: `"Test Mail" <${process.env.EMAIL_USER}>`,
//       to: "yourpersonalemail@gmail.com", // 👈 change this to your email
//       subject: "Test Email from Node.js",
//       text: "This is a test email to verify Nodemailer configuration.",
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log("✅ Email sent successfully:", info.response);
//   } catch (error) {
//     console.error("❌ Email sending failed:", error);
//   }
// };

// sendTestMail();


import { sendBookingMail } from "./utils/sendMail.js";

sendBookingMail({
  name: "Raviranjan Kumar",
  email: "your_test_email@gmail.com",
  roomType: "Deluxe Suite",
  checkIn: "2025-10-29",
  checkOut: "2025-10-30",
  totalPriceWithGST: 5500,
  paymentId: "test_payment_id",
});
