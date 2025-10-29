
  // import nodemailer from "nodemailer";
  // import dotenv from "dotenv";

  // dotenv.config();

  // export const sendBookingMail = async (booking) => {
  //   console.log(" Starting sendBookingMail for:", booking.email);

  //   try {
  //     // 1 Gmail transporter setup
  //     const transporter = nodemailer.createTransport({
  //       service: "gmail",
  //       auth: {
  //         user: process.env.EMAIL_USER,
  //         pass: process.env.EMAIL_PASS,
  //       },
  //     });

  //     //  Email content
  //     const mailOptions = {
  //       from: `"Hotel Booking" <${process.env.EMAIL_USER}>`,
  //       to: booking.email,
  //       subject: " Room Booking Confirmed!",
  //       html: `
  //         <h2>Dear ${booking.name},</h2>
  //         <p>Your room booking has been <b>successfully confirmed!</b></p>

  //         <h3>Booking Details:</h3>
  //         <ul>
  //           <li><b>Room Type:</b> ${booking.roomType}</li>
  //           <li><b>Check-In:</b> ${booking.checkIn}</li>
  //           <li><b>Check-Out:</b> ${booking.checkOut}</li>
  //           <li><b>Total Price:</b> ₹${booking.totalPrice}</li>
  //           <li><b>Payment ID:</b> ${booking.paymentId}</li>
  //         </ul>

  //         <p>Thank you for booking with our hotel!</p>
  //         <hr/>
  //         <small>This is an automated email, please do not reply.</small>
  //       `,
  //     };

  //     //  Send mail
  //     const info = await transporter.sendMail(mailOptions);
  //     console.log(` Email sent successfully to ${booking.email}`);
  //     return info;
  //   } catch (error) {
  //     console.error(" Email sending failed:", error);
  //   }
  // };



import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendBookingMail = async (booking) => {
  console.log("📧 Starting sendBookingMail for:", booking.email);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("✅ Gmail transporter verified successfully!");

    const mailOptions = {
      from: `"Hotel Booking" <${process.env.EMAIL_USER}>`,
      to: booking.email,
      subject: "Your Room Booking is Confirmed",
      html: `
        <h2>Hello ${booking.name},</h2>
        <p>Your booking has been <b>successfully confirmed!</b></p>
        <h3>Booking Details:</h3>
        <ul>
          <li><b>Room Type:</b> ${booking.roomType}</li>
          <li><b>Room Count:</b> ${booking.roomCount}</li>
          <li><b>Guest Count:</b> ${booking.guestCount}</li>
          <li><b>Check-In:</b> ${booking.checkIn}</li>
          <li><b>Check-Out:</b> ${booking.checkOut}</li>
          <li><b>Total Price:</b> ₹${booking.totalPriceWithGST || booking.totalPrice}</li>
          <li><b>Payment ID:</b> ${booking.paymentId}</li>
        </ul>
        <p>We look forward to hosting you.</p>
        <hr/>
        <p><i>This is an automated email, please do not reply.</i></p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.response);
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
};

