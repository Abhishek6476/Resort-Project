import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    text: { type: String, required: true },
    rating: { type: Number, required: true }, // 1-5
    role: { type: String, default: "Guest" },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
