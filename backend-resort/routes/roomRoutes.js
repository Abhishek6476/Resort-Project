
import express from "express";
import { createRoom, getRooms, deleteRoom, updateRoom } from "../controllers/roomController.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("image"), createRoom);
router.get("/", getRooms);
router.delete("/:id", deleteRoom);
router.put("/:id", upload.single("image"), updateRoom);

export default router; // default export
