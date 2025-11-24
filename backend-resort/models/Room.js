

import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String }, // path to uploaded image

    // ✅ New Field Added
    totalRooms: {
      type: Number,
      required: true,
      default: 0, // agar admin na dale to default 0
    },
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);
export default Room;
