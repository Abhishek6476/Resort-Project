
import express from "express";
import {
  createOrder,
  verifyPayment,
  getAllBookings,
  checkAvailability,
  getUnavailableDates,
  updateBooking,
  deleteBooking,
} from "../controllers/bookingController.js";

import Booking from "../models/Booking.js";
import Room from "../models/Room.js";

const router = express.Router();

// 💳 Payment Routes
router.post("/create-order", createOrder);
router.post("/verify-payment", verifyPayment);

// 📜 Admin: Get all bookings
router.get("/", getAllBookings);

// 🗓️ Check room availability by date range
router.post("/check-availability", checkAvailability);

// 📅 Get all unavailable (booked) dates for a room
router.get("/unavailable-dates/:roomId", getUnavailableDates);

// 🚫 Get fully booked dates (when all rooms are taken)
router.get("/fully-booked/:roomId", async (req, res) => {
  try {
    const { roomId } = req.params;
    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ message: "Room not found" });

    const bookings = await Booking.find({ roomId });
    const dateCount = {};

    bookings.forEach((b) => {
      let current = new Date(b.checkIn);
      let end = new Date(b.checkOut);

      while (current < end) {
        const key = current.toISOString().split("T")[0];
        dateCount[key] = (dateCount[key] || 0) + b.roomsBooked;
        current.setDate(current.getDate() + 1);
      }
    });

    const fullyBookedDates = Object.keys(dateCount).filter(
      (date) => dateCount[date] >= room.totalRooms
    );

    res.json(fullyBookedDates);
  } catch (err) {
    console.error("Error in fully-booked route:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✏️ Update Booking (Admin Edit)
router.put("/:id", updateBooking);

// ❌ Delete Booking (Admin Delete)
router.delete("/:id", deleteBooking);

export default router;
