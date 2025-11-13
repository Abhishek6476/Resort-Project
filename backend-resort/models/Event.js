import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(  {
    occasion: String,
    guests: String,
    date: String,
    name: String,
    email: String,
    phone: String,
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true });

export default mongoose.model("Event", eventSchema);
