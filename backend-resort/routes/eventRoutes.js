
import express from "express";
import {
  createEnquiry,
  getAllEnquiries,
  deleteEnquiry,
  updateStatus,
} from "../controllers/enquiryController.js";

const router = express.Router();

// ✅ Create new enquiry
router.post("/event-booking", createEnquiry);

// ✅ Get all enquiries
router.get("/all", getAllEnquiries);

// ✅ Delete enquiry
router.delete("/events/:id", deleteEnquiry);

// ✅ Update status (Pending ↔ Contacted)
router.patch("/events/:id", updateStatus);

export default router;
