
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import dotenv from "dotenv";

import contactRoutes from "./routes/Contact.js";
import jobRoutes from "./routes/jobApplication.js";
//import bookingRoom from "./routes/bookingRoom.js";
import paymentRoutes from "./routes/payment.js";
import bookingRoutes from "./routes/bookingRoom.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB Connected"))
  .catch((err) => console.log(" MongoDB Error:", err));

// Routes
app.use("/api", contactRoutes);

app.use("/api/job-application", jobRoutes); 

// use route  for Rooms
//app.use("/api/bookings", bookingRoom);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payment", paymentRoutes);



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
