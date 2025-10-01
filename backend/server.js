// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";

// dotenv.config();
// connectDB(); 

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API is running 🚀");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Contact API
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,   // Gmail sender
      to: "ravi@gmail.com",           // recipient
      replyTo: email,                 // user's email
      subject: "New Contact Form Submission",
      html: `<h3>New Contact Form</h3>
             <p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Phone:</b> ${phone}</p>
             <p><b>Message:</b> ${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    // Send success response to frontend
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to submit form." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
