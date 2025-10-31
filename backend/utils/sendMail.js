

import nodemailer from "nodemailer";
import dotenv from "dotenv";

import { bookingEmailTemplate } from "./emailTemplate.js";

dotenv.config();

export const sendBookingMail = async (booking, invoicePath) => {
  console.log(" Sending confirmation email to:", booking.email);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log(" Gmail transporter verified!");

    const mailOptions = {
      from: `"Hotel Resert Stay" <${process.env.EMAIL_USER}>`,
      to: booking.email,
      subject: "Your Hotel Booking Confirmation - Hotel Resert Stay",
      html: bookingEmailTemplate(booking),
      attachments: [
        {
          filename: "Booking_Invoice.pdf",
          path: invoicePath,
          contentType: "application/pdf",
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(" Email sent successfully:", info.response);
    return info;
  } catch (error) {
    console.error(" Error sending booking email:", error.message);
  }
};


