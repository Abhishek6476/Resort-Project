import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    jobType: { type: String, required: true },  // ✅ New field
    location: { type: String, required: true },
    salary: { type: String, default: "" },
    description: { type: String, required: true },
    image: { type: String, default: null },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
