import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  resume: { type: String, required: true }, // file name
  appliedAt: { type: Date, default: Date.now }
});

export default mongoose.model("JobApplication", jobApplicationSchema);
