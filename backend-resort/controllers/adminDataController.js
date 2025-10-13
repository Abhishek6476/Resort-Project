// controllers/adminDataController.js

export const getDashboardData = (req, res) => {
  res.json({ message: "Dashboard data", admin: req.admin });
};

export const getAllRooms = (req, res) => {
  res.json({ rooms: [] });
};

export const getAllBookings = (req, res) => {
  res.json({ bookings: [] });
};

export const getAllEvents = (req, res) => {
  res.json({ events: [] });
};
