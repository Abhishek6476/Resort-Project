import express from "express";
import { upload } from "../middleware/upload.js";
import {
  createJob,
  getJobs,
  updateJob,
  deleteJob
} from "../controllers/jobController.js";

const router = express.Router();

router.post("/", upload.single("image"), createJob);
router.get("/", getJobs);
router.put("/:id", upload.single("image"), updateJob);
router.delete("/:id", deleteJob);

export default router;
