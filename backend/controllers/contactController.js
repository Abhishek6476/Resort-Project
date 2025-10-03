import Contact from "../models/Contact.js";

// POST /api/contact
export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Check all fields
    if (!name || !email || !phone || !message)
      return res.status(400).json({ success: false, msg: "All fields are required" });

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      return res.status(400).json({ success: false, msg: "Invalid email address" });

    // Phone validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone))
      return res.status(400).json({ success: false, msg: "Invalid phone number" });

    // Save contact
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    return res.status(200).json({ success: true, msg: "Message send successfully!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, msg: "Server error" });
  }
};
