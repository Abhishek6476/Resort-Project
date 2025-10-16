import express from "express";
import { createReview, getAllReviews, deleteReview } from "../controllers/reviewController.js";

const router = express.Router();

router.post("/", createReview);       // POST /api/reviews
router.get("/", getAllReviews);       // GET /api/reviews
router.delete("/:id", deleteReview);  // DELETE /api/reviews/:id

export default router;
