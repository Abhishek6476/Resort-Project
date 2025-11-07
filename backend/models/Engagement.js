import mongoose from "mongoose";

const engagementSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    formType: {type: String, default: "unknown"},
    createdAt: { type: Date, default: Date.now},
});

export default mongoose.model("Engagement",engagementSchema);