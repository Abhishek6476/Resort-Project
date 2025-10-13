
import Room from "../models/Room.js";

// ➕ Create room
export const createRoom = async (req, res) => {
  try {
    const { name, type, price, description } = req.body;
    if (!name || !type || !price || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newRoom = new Room({
      name,
      type,
      price,
      description,
      image: req.file ? `/uploads/${req.file.filename}` : undefined,
    });

    const savedRoom = await newRoom.save();
    res.status(201).json(savedRoom);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📄 Get all rooms
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🗑️ Delete room
export const deleteRoom = async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.json({ message: "Room deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✏️ Update room
export const updateRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: "Room not found" });

    room.name = req.body.name || room.name;
    room.type = req.body.type || room.type;
    room.price = req.body.price || room.price;
    room.description = req.body.description || room.description;

    if (req.file) room.image = `/uploads/${req.file.filename}`;

    const updatedRoom = await room.save();
    res.json(updatedRoom);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
