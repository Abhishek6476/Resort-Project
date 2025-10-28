import Razorpay from "razorpay";
import crypto from "crypto";
import Booking from "../models/Booking.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

//  Create Order
export const createOrder = async (req, res) => {
  try {
    const { name, email, mobile, roomType, totalPrice } = req.body;

    const options = {
      amount: totalPrice * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    // Save booking with pending status
    const newBooking = new Booking({
      name,
      email,
      mobile,
      roomType,
      totalPrice,
      orderId: order.id,
      paymentStatus: "Pending",
    });

    await newBooking.save();

    res.json({ order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// Function to send booking confirmation email

const sendBookingMail = async (booking) => {
  console.log(" Starting sendBookingMail for:", booking.email);

  try {
    //  Create transporter
    const transporter = nodemailer.createTransport ({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    //  Prepare email content
    const mailOptions = {
       from: `"Hotel Booking" <raviranjan3y@gmail.com>`,
      to: booking.email,
      subject: "Your Room Booking is Confirmed ",
      html: `
        <h2>Dear ${booking.name},</h2>
        <p>Your room booking has been <b>successfully confirmed!</b></p>

        <h3>Booking Details:</h3>
        <ul>
          <li><b>Room Type:</b> ${booking.roomType}</li>
          <li><b>Room Count:</b> ${booking.roomCount}</li>
          <li><b>Guest Count:</b> ${booking.guestCount}</li>
          <li><b>Check-In:</b> ${booking.checkIn}</li>
          <li><b>Check-Out:</b> ${booking.checkOut}</li>
          <li><b>Total Price:</b> ₹${booking.totalPriceWithGST}</li>
          <li><b>Payment ID:</b> ${booking.paymentId}</li>
        </ul>

          <p>Thank you for booking with our hotel! We look forward to your stay.</p>
        <hr/>
        <p><i>This is an automated email, please do not reply.</i></p>
      `,
    };

    console.log("sending mail to:",booking.email);
    // send mail
    const info =  await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${booking.email}`);
  }catch(error){
    console.error("Email sending failed:",error);
  }
};

//  Verify Payment (after payment success)
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body)
      .digest("hex");

    // if (expectedSignature === razorpay_signature) {
    //   await Booking.findOneAndUpdate(
    //     { orderId: razorpay_order_id },
    //     { paymentId: razorpay_payment_id, paymentStatus: "Success" },
    //     { new: true }
    //   );

    //   return res.json({ success: true, message: "Payment verified successfully" });

      if (expectedSignature === razorpay_signature) {
  const updatedBooking = await Booking.findOneAndUpdate(
    { orderId: razorpay_order_id },
    { paymentId: razorpay_payment_id, paymentStatus: "Success" },
    { new: true }
  );

      //  Send confirmation email
      if (updatedBooking) {
       console.log(" Sending confirmation email to:", updatedBooking.email);
        await sendBookingMail(updatedBooking);
      }

  
      return res.json({ success: true, message: "Payment verified and email sent successfully" });
    
    } else {
      await Booking.findOneAndUpdate(
        { orderId: razorpay_order_id },
        { paymentStatus: "Failed" }
      );

      return res.status(400).json({ success: false, message: "Payment verification failed" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

