import express from "express";
import multer from "multer";
import {
  submitJobApplication,
  getAllJobApplications,
  deleteJobApplication, // ✅ added
} from "../controllers/jobApplicationController.js";

const router = express.Router();

// 🗂️ File Upload Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// ✅ Routes
router.post("/", upload.single("resume"), submitJobApplication);
router.get("/", getAllJobApplications);
router.delete("/:id", deleteJobApplication); // ✅ added

export default router;
