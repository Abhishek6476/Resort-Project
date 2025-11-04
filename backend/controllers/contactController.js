
  import Contact from "../models/Contact.js";
import { contactMail } from "../utils/contactMail.js";

// POST /api/contact
export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message)
      return res.status(400).json({ success: false, msg: "All fields are required" });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      return res.status(400).json({ success: false, msg: "Invalid email address" });

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone))
      return res.status(400).json({ success: false, msg: "Invalid phone number" });

    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Send confirmation mail
    await contactMail(newContact);

    return res.status(200).json({ success: true, msg: "Message sent successfully and confirmation email sent!" });
  } catch (err) {
    console.error("❌ Contact error:", err);
    return res.status(500).json({ success: false, msg: "Server error" });
  }
};
