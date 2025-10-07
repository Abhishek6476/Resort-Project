// import express from "express";
// import { submitContact } from "../controllers/contactController.js";

// const router = express.Router();

// router.post("/contact", submitContact);

// export default router;


import express from "express";
import { submitContact } from "../controllers/contactController.js";
import Contact from "../models/Contact.js";

const router = express.Router();

// Existing POST route
router.post("/contact", submitContact);

// New GET route to fetch all submissions
router.get("/contact/all", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// Optional: DELETE route to remove a submission
router.delete("/contact/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

export default router;
