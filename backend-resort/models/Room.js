
import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // path to uploaded image
}, { timestamps: true });

const Room = mongoose.model("Room", roomSchema);
export default Room;
