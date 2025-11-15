
// import nodemailer from "nodemailer";

// export const sendBookingConfirmationEmail = async (to, name, bookingData, room) => {
//   try {
//     // ✅ Gmail SMTP configuration
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true, // SSL
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // ✅ Safe field access with fallback values
//     const roomName = room?.name || "N/A";
//     const roomType = room?.type || "N/A";
//     const roomsBooked = bookingData?.roomsBooked || 1;
//     const guests = bookingData?.guests || "N/A";
//     const checkIn = new Date(bookingData?.checkIn).toLocaleDateString();
//     const checkOut = new Date(bookingData?.checkOut).toLocaleDateString();
//     const totalAmount = bookingData?.price || bookingData?.amount || "N/A";

//     // ✅ Email HTML Template
//     const message = `
//       <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
//         <h2 style="color: #0d6efd;">🏨 Booking Confirmation - Paradise Resort</h2>
//         <p>Hi <b>${name}</b>,</p>
//         <p>Thank you for booking with <b>Paradise Resort</b>! 🎉</p>
//         <p>Your booking details are as follows:</p>

//         <table border="1" cellspacing="0" cellpadding="8" 
//           style="border-collapse: collapse; width: 100%; background: #fff;">
//           <tr><td><b>Room Name:</b></td><td>${roomName}</td></tr>
//           <tr><td><b>Room Type:</b></td><td>${roomType}</td></tr>
//           <tr><td><b>Rooms Booked:</b></td><td>${roomsBooked}</td></tr>
//           <tr><td><b>Check-in Date:</b></td><td>${checkIn}</td></tr>
//           <tr><td><b>Check-out Date:</b></td><td>${checkOut}</td></tr>
//           <tr><td><b>Guests:</b></td><td>${guests}</td></tr>
//           <tr><td><b>Total Amount Paid:</b></td><td>₹${totalAmount}</td></tr>
//         </table>

//         <p style="margin-top: 15px;">We’re excited to host you! 🌴</p>
//         <p>If you have any questions, feel free to reply to this email.</p>
//         <p style="color: gray;">Warm regards,<br/>The Paradise Resort Team</p>
//       </div>
//     `;

//     // ✅ Send the email
//     const info = await transporter.sendMail({
//       from: `"Paradise Resort" <${process.env.EMAIL_USER}>`,
//       to,
//       subject: "Your Booking Confirmation - Paradise Resort",
//       html: message,
//     });

//     console.log("✅ Booking confirmation email sent:", info.messageId);
//   } catch (error) {
//     console.error("❌ Error sending booking confirmation email:", error.message);
//   }
// };


// // utils/sendBookingEmail.js
// import nodemailer from "nodemailer";
// import fs from "fs";
// import path from "path";
// import PDFDocument from "pdfkit";

// // ✅ Function to generate a simple PDF invoice
// const generateInvoicePDF = (booking, room) => {
//   const invoiceDir = path.join("invoices");
//   if (!fs.existsSync(invoiceDir)) fs.mkdirSync(invoiceDir);

//   const filePath = path.join(invoiceDir, `invoice_${booking._id}.pdf`);
//   const doc = new PDFDocument();
//   const stream = fs.createWriteStream(filePath);
//   doc.pipe(stream);

//   doc.fontSize(20).text("🏨 Paradise Resort", { align: "center" });
//   doc.moveDown();
//   doc.fontSize(14).text(`Booking Invoice #${booking._id}`);
//   doc.moveDown();

//   doc.text(`Guest Name: ${booking.name}`);
//   doc.text(`Email: ${booking.email}`);
//   doc.text(`Room Type: ${room.name}`);
//   doc.text(`Check-In: ${new Date(booking.checkIn).toLocaleDateString()}`);
//   doc.text(`Check-Out: ${new Date(booking.checkOut).toLocaleDateString()}`);
//   doc.text(`Guests: ${booking.guests}`);
//   doc.text(`Total Amount: ₹${booking.amount}`);
//   doc.text(`Payment ID: ${booking.paymentId}`);
//   doc.text(`Order ID: ${booking.orderId}`);
//   doc.text(`Payment Status: ${booking.paymentStatus}`);
//   doc.end();

//   return filePath;
// };

// export const sendBookingConfirmationEmail = async (to, name, booking, room) => {
//   try {
//     // ✅ Generate the invoice PDF
//     const invoicePath = generateInvoicePDF(booking, room);

//     // ✅ Gmail SMTP configuration
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // ✅ Email HTML template
//     const message = `
//       <div style="font-family: Arial, sans-serif; padding: 20px;">
//         <h2 style="color: #0d6efd;">Booking Confirmation - Paradise Resort</h2>
//         <p>Hi <b>${name}</b>,</p>
//         <p>Thank you for booking with <b>Paradise Resort</b>! 🎉</p>
//         <p>Your booking details are as follows:</p>
        
//         <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse;">
//           <tr><td><b>Booking ID:</b></td><td>${booking._id}</td></tr>
//           <tr><td><b>Room Type:</b></td><td>${room.name}</td></tr>
//           <tr><td><b>Check-in:</b></td><td>${new Date(booking.checkIn).toLocaleDateString()}</td></tr>
//           <tr><td><b>Check-out:</b></td><td>${new Date(booking.checkOut).toLocaleDateString()}</td></tr>
//           <tr><td><b>Guests:</b></td><td>${booking.guests}</td></tr>
//           <tr><td><b>Total Amount:</b></td><td>₹${booking.amount}</td></tr>
//         </table>

//         <p style="margin-top: 15px;">We’re excited to host you! If you have any questions, feel free to reply to this email.</p>
//         <p style="color: gray;">Warm regards,<br/>The Paradise Resort Team</p>
//       </div>
//     `;

//     // ✅ Send to user
//     const mailOptionsUser = {
//       from: `"Paradise Resort" <${process.env.EMAIL_USER}>`,
//       to,
//       subject: "Your Booking Confirmation - Paradise Resort",
//       html: message,
//       attachments: [
//         {
//           filename: `invoice_${booking._id}.pdf`,
//           path: invoicePath,
//         },
//       ],
//     };

//     // ✅ Send duplicate to admin
//     const mailOptionsAdmin = {
//       ...mailOptionsUser,
//       to: process.env.ADMIN_EMAIL || "resort@gmail.com",
//       subject: `📩 New Booking Received - ${name}`,
//     };

//     await transporter.sendMail(mailOptionsUser);
//     await transporter.sendMail(mailOptionsAdmin);

//     console.log("✅ Booking confirmation email sent successfully with PDF!");
//   } catch (error) {
//     console.error("❌ Error sending booking email:", error);
//   }
// };



// import nodemailer from "nodemailer";
// import { generateBookingInvoice } from "./generateInvoice.js";

// export const sendBookingConfirmationEmail = async (to, name, booking, room, paymentResponse) => {
//   try {
//     // ✅ Generate professional invoice PDF
//     const invoicePath = await generateBookingInvoice(booking, paymentResponse, { room });

//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
//     });

//     const message = `
//       <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
//         <h2 style="color: #003366;">Booking Confirmation - Paradise Resort</h2>
//         <p>Hi <b>${name}</b>,</p>
//         <p>Thank you for booking with <b>Paradise Resort</b>! 🎉</p>
//         <p>Your professional invoice is attached as a PDF.</p>
//         <ul style="list-style: none; padding: 0;">
//           <li><b>Booking ID:</b> ${booking._id}</li>
//           <li><b>Room Type:</b> ${room.name}</li>
//           <li><b>Check-In:</b> ${new Date(booking.checkIn).toLocaleDateString()}</li>
//           <li><b>Check-Out:</b> ${new Date(booking.checkOut).toLocaleDateString()}</li>
//           <li><b>Guests:</b> ${booking.guests}</li>
//           <li><b>Total Amount:</b> ₹${booking.amount.toLocaleString("en-IN")}</li>
//         </ul>
//         <p style="color: gray; margin-top: 20px;">Warm regards,<br/>The Paradise Resort Team</p>
//       </div>
//     `;

//     const mailOptionsUser = {
//       from: `"Paradise Resort" <${process.env.EMAIL_USER}>`,
//       to,
//       subject: "Your Booking Confirmation - Paradise Resort",
//       html: message,
//       attachments: [{ filename: `invoice_${booking._id}.pdf`, path: invoicePath }],
//     };

//     const mailOptionsAdmin = { ...mailOptionsUser, to: process.env.ADMIN_EMAIL || "resort@gmail.com", subject: `📩 New Booking - ${name}` };

//     await transporter.sendMail(mailOptionsUser);
//     await transporter.sendMail(mailOptionsAdmin);

//     console.log("✅ Booking confirmation email sent with professional PDF!");
//   } catch (error) {
//     console.error("❌ Error sending booking email:", error);
//   }
// };



import nodemailer from "nodemailer";
import { generateBookingInvoice } from "./generateInvoice.js";

export const sendBookingConfirmationEmail = async (to, name, booking, room, paymentResponse) => {
  try {
    // ✅ Generate professional invoice PDF with room info
    const invoicePath = await generateBookingInvoice(booking, paymentResponse, { room });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    // Use Payment ID from Razorpay response
    // const paymentId = paymentResponse?.razorpay_payment_id || "N/A";

    const message = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
        <h2 style="color: #003366;">Booking Confirmation - Paradise Resort</h2>
        <p>Hi <b>${name}</b>,</p>
        <p>Thank you for booking with <b>Paradise Resort</b>! 🎉</p>
        <p>Your professional invoice is attached as a PDF.</p>
        <ul style="list-style: none; padding: 0;">
          <li><b>Booking ID:</b> ${booking._id}</li>
          <li><b>Room Type:</b> ${room.name}</li>
          <li><b>Check-In:</b> ${new Date(booking.checkIn).toLocaleDateString()}</li>
          <li><b>Check-Out:</b> ${new Date(booking.checkOut).toLocaleDateString()}</li>
          <li><b>Guests:</b> ${booking.guests}</li>
          <li><b>Total Amount:</b> ₹${booking.amount.toLocaleString("en-IN")}</li>
          
        </ul>
        <p style="color: gray; margin-top: 20px;">Warm regards,<br/>The Paradise Resort Team</p>
      </div>
    `;

    const mailOptionsUser = {
      from: `"Paradise Resort" <${process.env.EMAIL_USER}>`,
      to,
      subject: "Your Booking Confirmation - Paradise Resort",
      html: message,
      attachments: [{ filename: `invoice_${booking._id}.pdf`, path: invoicePath }],
    };

    // Admin copy
    const mailOptionsAdmin = { 
      ...mailOptionsUser, 
      to: process.env.ADMIN_EMAIL || "resort@gmail.com", 
      subject: `📩 New Booking - ${name}` 
    };

    await transporter.sendMail(mailOptionsUser);
    await transporter.sendMail(mailOptionsAdmin);

    console.log("✅ Booking confirmation email sent with professional PDF!");
  } catch (error) {
    console.error("❌ Error sending booking email:", error);
  }
};
