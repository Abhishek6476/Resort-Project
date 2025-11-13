import express from "express";
import { upload } from "../uploads/upload.js";
import {
  uploadGalleryImage,
  getGalleryImages,
  deleteGalleryImage,
} from "../controllers/galleryController.js";

const router = express.Router();

// POST => upload new gallery image
router.post("/", upload.single("image"), uploadGalleryImage);

// GET => fetch all images
router.get("/", getGalleryImages);

// DELETE => delete specific image
router.delete("/:id", deleteGalleryImage);

export default router;
