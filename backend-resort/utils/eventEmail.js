import nodemailer from "nodemailer";

export const eventEmail = async (email, name, booking, pdfPath) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🔑 Correct Paid / Remaining calculation
    const paidAmount =
      booking.paymentType === "full"
        ? booking.totalAmount || 0
        : Math.round((booking.totalAmount || 0) * 0.3);

    const remainingAmount = (booking.totalAmount || 0) - paidAmount;

    await transporter.sendMail({
      from: `"Resort Events" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🎉 Event Booking Invoice",
      html: `
        <h2>Hello ${name},</h2>
        <p>Your event booking is confirmed.</p>
        <p>Please find your invoice attached.</p>
        <br/>
        <b>Event Date:</b> ${
          booking.eventDate
            ? new Date(booking.eventDate).toDateString()
            : "N/A"
        }<br/>
        <b>Total:</b> ₹${booking.totalAmount || 0}<br/>
        <b>Paid:</b> ₹${paidAmount}<br/>
        <b>Remaining:</b> ₹${remainingAmount}
      `,
      attachments: [
        {
          filename: "Event-Invoice.pdf",
          path: pdfPath,
        },
      ],
    });

    console.log("✅ Event invoice email sent");
  } catch (err) {
    console.error("❌ Email error:", err.message);
  }
};