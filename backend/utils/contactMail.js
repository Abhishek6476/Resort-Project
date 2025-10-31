import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const contactMail = async (contactData) => {

 try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


    // Mail for the user
    const userMail = {
      from: `"Resort Support" <${process.env.SMTP_USER}>`,
      to: contactData.email,
      subject: "Thank you for contacting Resort Hotel!",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #1E40AF;">Hi ${contactData.name},</h2>
          <p>Thank you for reaching out to us. We’ve received your message and will get back to you shortly.</p>
          <p><b>Your Details:</b></p>
        
          <p><b>Name:</b> ${contactData.name}</p>
          <p><b>Email:</b> ${contactData.email}</p>
          <p><b>Phone:</b> ${contactData.phone}</p>
          <p><b>Message:</b> ${contactData.message}</p>
          <p style="margin-top: 20px;">Warm regards,<br><b>Resort Hotel Team</b><br> +91-11-35017951</p>
        </div>
      `,
    };

    // // Mail send  for the admin
    // const adminMail = {
    //   from: `"Resort Website" <${process.env.SMTP_USER}>`,
    //   to: process.env.EMAIL_USER, // admin email
    //   subject: `New Contact Submission from ${contactData.name}`,
    //   html: `
    //     <div style="font-family: Arial, sans-serif; color: #333;">
    //       <h3>New Contact Form Submission</h3>
    //       <p><b>Name:</b> ${contactData.name}</p>
    //       <p><b>Email:</b> ${contactData.email}</p>
    //       <p><b>Phone:</b> ${contactData.phone}</p>
    //       <p><b>Message:</b> ${contactData.message}</p>
    //     </div>
    //   `,
    // };

    await transporter.sendMail(userMail);
    //await transporter.sendMail(adminMail);

    console.log("📧 Confirmation mail sent to user and admin");
  } catch (err) {
    console.error("❌ Error sending contact mail:", err);
  }
};
