import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: String,
    department: String,
    location: String,
    salary: String,
    description: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
