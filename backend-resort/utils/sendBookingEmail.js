
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
