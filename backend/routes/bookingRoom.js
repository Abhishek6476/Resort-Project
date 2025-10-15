import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// Create booking
router.post("/", async (req, res) => {
  try {
     const newBooking = new Booking(req.body);
    //  await newBooking.save();
    const savedBooking = await newBooking.save(); 
     res.status(201).json(savedBooking);  
    // res.status(201).json({ message: "Booking saved successfully" });


  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(500).json({ message: "Error saving booking", });
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
// PUT /api/bookings/:id
  router.put("/:id", async (req, res) => {
  try {
    const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update booking" });
  }
});


// PATCH booking status
router.patch("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!updatedBooking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json(updatedBooking);
  } catch (err) {
    res.status(500).json({ error: "Failed to update status" });
  }
});

// DELETE a booking by ID
router.delete("/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete booking" });
  }
});


export default router;
