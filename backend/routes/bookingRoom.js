import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// Create booking
router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving booking" });
  }
});

// Get all bookings (for admin panel)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: -1 });
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching bookings" });
  }
});

export default router;
