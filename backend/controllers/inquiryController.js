import Engagement from "../models/Engagement.js"; 
import { engagementMail } from "../utils/engagementMail.js"; 

export const submitInquiry = async (req, res) => {
  try {
    const { name, email, phone, message, pageName } = req.body;

    if (!name || !email || !phone)
      return res.status(400).json({ success: false, msg: "All fields are required" });

    // save to database
    const inquiryData = await Engagement.create({
      name,
      email,
      phone,
      message,
      formType: pageName || "unknown", 
    });

    // send mail
    await engagementMail(inquiryData, pageName);

    res.status(200).json({
      success: true,
      msg: `Message from ${pageName} page sent successfully!`,
    });
  } catch (error) {
    console.error("Error submitting inquiry form:", error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};


//  NEW – Get all inquiries (for admin panel)
export const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Engagement.find().sort({ createdAt: -1 });
    res.status(200).json(inquiries);
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};
