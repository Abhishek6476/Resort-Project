import express from "express";
import {
  createEventOrder,
  verifyEventPayment,
  getAllEventBookings,
  deleteEventBooking,
    checkEventAvailability,
} from "../controllers/eventBookingController.js";

const router = express.Router();

router.post("/events/create-order", createEventOrder);
router.post("/events/verify-payment", verifyEventPayment);
router.get("/events/bookings", getAllEventBookings);
router.delete("/events/bookings/:id", deleteEventBooking);
router.post("/events/check-availability", checkEventAvailability);
export default router;