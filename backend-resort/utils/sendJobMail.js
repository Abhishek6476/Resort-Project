import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendJobMail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Resort HR Team" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
    console.log(` Job email sent to ${to}`);
  } catch (error) {
    console.error(" Error sending job email:", error);
  }
};
