// import express from "express";
// import { adminLogin } from "../controllers/adminController.js";

// const router = express.Router();

// router.post("/login", adminLogin);

// export default router;



// import express from "express";
// import { adminLogin } from "../controllers/adminController.js";

// const router = express.Router();

// router.post("/login", adminLogin);

// export default router;



// routes/adminRoutes.js
import express from "express";
import { adminLogin } from "../controllers/adminController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";
import {
  getDashboardData,
  getAllRooms,
  getAllBookings,
  getAllEvents
} from "../controllers/adminDataController.js";

const router = express.Router();

// Public
router.post("/login", adminLogin);

// Protected
router.get("/dashboard", protectAdmin, getDashboardData);
router.get("/rooms/all", protectAdmin, getAllRooms);
router.get("/rooms/booking", protectAdmin, getAllBookings);
router.get("/events", protectAdmin, getAllEvents);

export default router;
