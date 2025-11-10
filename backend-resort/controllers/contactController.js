

import Contact from "../models/Contact.js";
import { sendEmail } from "../utils/sendEmail.js";

// ✅ 1️⃣ Submit Contact Form (POST)
export const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ message: "All required fields are mandatory." });
    }

    // ✅ Save form data in MongoDB
    const newContact = await Contact.create({ name, email, phone, message });

    // ✅ Prepare email content
    const subject = "We’ve received your message ✔";
    const html = `
      <h2>Hello ${name},</h2>
      <p>Thank you for contacting <strong>Resort Team</strong>.</p>
      <p>We’ve received your message and will respond soon:</p>
      <blockquote>${message}</blockquote>
      <br/>
      <p>Best Regards,<br/><strong>Resort Team</strong></p>
    `;

    // ✅ Send confirmation email
    await sendEmail(email, subject, html);

    res.status(200).json({
      success: true,
      message: "Form submitted successfully. Confirmation email sent.",
      contact: newContact,
    });
  } catch (error) {
    console.error("❌ Error submitting contact form:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ✅ 2️⃣ Get All Contact Messages (GET)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(contacts);
  } catch (error) {
    console.error("❌ Error fetching contacts:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Delete Contact Message (for Admin)
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    await contact.deleteOne();
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting contact:", error);
    res.status(500).json({ message: "Failed to delete contact" });
  }
};