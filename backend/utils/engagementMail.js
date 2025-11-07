import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const engagementMail = async (data,pageName) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const eventName = pageName || data.formType || "Inquiry";


    const userMail = {
      from: `"Resort Support" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: `Thank you for your ${eventName} Inquiry!`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #1E40AF;">Hi ${data.name},</h2>
          <p>Thank you for your interest in our ${eventName} services. We’ve received your request and will contact you soon.</p>
          
          <p style="margin-top: 20px;">Warm regards,<br><b>Resort Hotel Team</b><br> +91 9876543210</p>
        </div>
      `,
    };

    await transporter.sendMail(userMail);
    console.log(`${eventName} mail sent successfully`);
  } catch (err) {
    console.error("Error sending engagement mail:", err);
  }
};
