import express from "express";
import { createOrder, verifyPayment, getAllBookings } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/create-order", createOrder);
router.post("/verify-payment", verifyPayment);
router.get("/", getAllBookings);

export default router;
