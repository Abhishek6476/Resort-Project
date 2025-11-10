
import JobApplication from "../models/JobApplication.js";
import { sendJobMail } from "../utils/sendJobMail.js";
import path from "path";

//  Submit Job Application
export const submitJobApplication = async (req, res) => {
  try {
    const { name, email, phone, position } = req.body;
    const resumePath = req.file ? `/uploads/${req.file.filename}` : null;

    if (!name || !email || !phone || !position || !resumePath) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newApp = await JobApplication.create({
      name,
      email,
      phone,
      position,
      resume: resumePath,
    });

    // Send confirmation to user
    sendJobMail(
      email,
      "Application Received - Thank You!",
      `
      <h2>Hi ${name},</h2>
      <p>Thank you for applying for the <b>${position}</b> position at our resort.</p>
      <p>We’ve received your application and will review it shortly.</p>
      <br/>
      <p>Best Regards,<br/><b>Resort HR Team</b></p>
      `
    ).catch((err) => console.error(" Error sending user email:", err));

    //  Notify admin
    sendJobMail(
      process.env.EMAIL_USER, // admin notification
      `New Job Application - ${position}`,
      `
      <h2>New Job Application Received</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Position:</b> ${position}</p>
      <p><b>Resume:</b> ${resumePath}</p>
      `
    ).catch((err) => console.error(" Error sending admin email:", err));

    res.status(200).json({
      msg: "Application submitted successfully!",
      application: newApp,
    });
  } catch (error) {
    console.error(" Error submitting job application:", error);
    res.status(500).json({ msg: "Server error. Please try again." });
  }
};

//  Get All Job Applications (for admin)
export const getAllJobApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({ createdAt: -1 });
    res.status(200).json(applications);
  } catch (error) {
    console.error(" Error fetching applications:", error);
    res.status(500).json({ msg: "Server error while fetching applications." });
  }
};

//  Delete a Job Application (for admin)
export const deleteJobApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await JobApplication.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ msg: "Application not found" });
    }

    res.status(200).json({ msg: "Job application deleted successfully!" });
  } catch (error) {
    console.error(" Error deleting job application:", error);
    res.status(500).json({ msg: "Server error while deleting application" });
  }
};
