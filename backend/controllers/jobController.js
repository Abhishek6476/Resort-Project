

import JobApplication from "../models/JobApplication.js";
import { jobMail } from "../utils/jobMail.js";


export const submitApplication = async (req, res) => {
  try {
    const { name, email, phone, position } = req.body;
    const resume = req.file ? req.file.filename : null;

    if (!name || !email || !phone || !position || !resume) {
      return res.status(400).json({ msg: "All fields including resume are required" });
    }

    await JobApplication.create({ name, email, phone, position, resume });

    
    // send confirmation mail 
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 16px;">
      <h2>Hi ${name},</h2>
         <p>Thank you for applying for the <b>${position}</b> position.</p>
        <p>Your application has been successfully received. Our HR team will review your profile and contact you if shortlisted.</p>
        <br/>
        <p>Best regards,<br/><b>Resort HR Team</b></p>
      </div>
    `;

    await jobMail(email, "Application submitted Sucessfully!", htmlContent);
    


    return res.status(200).json({ msg: "Application submitted successfully! confirmation email sent."});

  } catch (err) {
    console.error("Error submitting application:", err);
    return res.status(500).json({ msg: "Server error" });
  }
};
