

import JobApplication from "../models/JobApplication.js";


export const submitApplication = async (req, res) => {
  try {
    const { name, email, phone, position } = req.body;
    const resume = req.file ? req.file.filename : null;

    if (!name || !email || !phone || !position || !resume) {
      return res.status(400).json({ msg: "All fields including resume are required" });
    }

    await JobApplication.create({ name, email, phone, position, resume });
    return res.status(200).json({ msg: "Application submitted successfully!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error" });
  }
};
