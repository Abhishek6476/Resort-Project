import express from "express";
import { submitContact } from "../controllers/contactController.js";
import Contact from "../models/Contact.js";

//import { submitEngagement } from "../controllers/engagement.js";
import { submitInquiry, getAllInquiries } from "../controllers/inquiryController.js";
import Engagement from "../models/Engagement.js";

const router = express.Router();

// Existing POST route
router.post("/contact", submitContact);

// New GET route to fetch all submissions
router.get("/contact/all", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); 
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});
// put 
router.put("/contact/:id", async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating contact", error: err });
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


/* ----------------  UNIVERSAL INQUIRY ROUTES ---------------- */

// POST - Create a new engagement submission (Get Quote form)

//router.post("/engagement", submitEngagement);


router.post("/inquiry", submitInquiry);

//get admin view 

router.get("/inquiry/all", getAllInquiries);
// GET - Fetch all engagement submissions (for admin panel)
router.get("/engagement/all", async (req, res) => {
  try {
    const engagements = await Engagement.find().sort({ createdAt: -1 });
    res.status(200).json(engagements);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});
export default router;
