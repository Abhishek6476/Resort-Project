
import EventEnquiry from "../models/Event.js";

// Add a new enquiry
export const createEnquiry = async (req, res) => {
  try {
    const enquiry = await EventEnquiry.create(req.body);
    res.status(201).json(enquiry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all enquiries
export const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await EventEnquiry.find().sort({ createdAt: -1 });
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an enquiry
export const deleteEnquiry = async (req, res) => {
  try {
    await EventEnquiry.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Enquiry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update status
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await EventEnquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.status(200).json({ message: "Status updated", event: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
