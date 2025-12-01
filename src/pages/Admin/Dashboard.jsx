import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaBed,
  FaClipboardList,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

export default function AdminDashboard() {
  const [totalRooms, setTotalRooms] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);
  const [todaysCheckIns, setTodaysCheckIns] = useState(0);
  const [todaysCheckOuts, setTodaysCheckOuts] = useState(0);
  const [recentBookings, setRecentBookings] = useState([]);
  const [recentInquiries, setRecentInquiries] = useState([]);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Rooms
      const roomRes = await axios.get("http://localhost:5000/api/rooms");
      const rooms = roomRes.data || [];
      const totalRoomsCount = rooms.reduce(
        (sum, r) => sum + (r.totalRooms || 0),
        0
      );
      setTotalRooms(totalRoomsCount);

      // Bookings
      const bookingRes = await axios.get("http://localhost:5000/api/bookings");
      const bookings = bookingRes.data || [];

      const totalRoomBookings = bookings.reduce(
        (sum, b) => sum + (b.roomsBooked || 1),
        0
      );
      setTotalBookings(totalRoomBookings);

      // Today stats
      setTodaysCheckIns(
        bookings.filter((b) => b.checkIn?.split("T")[0] === today).length
      );
      setTodaysCheckOuts(
        bookings.filter((b) => b.checkOut?.split("T")[0] === today).length
      );

      // Recent bookings (latest 3)
      const recent = [...bookings]
        .reverse()
        .slice(0, 3)
        .map((b) => ({
          user: b.name,
          room: b.roomId?.name || "N/A",
          date: b.createdAt?.split("T")[0],
        }));
      setRecentBookings(recent);

      // Inquiries (latest 3)
      try {
        const inquiryRes = await axios.get("http://localhost:5000/api/all");
        const latestInquiries = (inquiryRes.data || []).slice(0, 3);
        setRecentInquiries(latestInquiries);
      } catch (e) {
        setRecentInquiries([]);
      }
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 p-8 font-sans">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-serif text-[#0b2447]">
            Admin Dashboard
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Overview of rooms, bookings & enquiries
          </p>
        </div>
        {/* <div className="flex items-center gap-3">
          <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-full shadow">Create Report</button>
          <button className="bg-white border border-gray-200 px-4 py-2 rounded-full text-gray-700">Settings</button>
        </div> */}
      </header>

      {/* Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Total Rooms",
            value: totalRooms,
            color: "bg-blue-100",
            textColor: "text-blue-800",
            icon: <FaBed className="text-3xl text-blue-800" />,
          },
          {
            title: "Total Bookings",
            value: totalBookings,
            color: "bg-green-100",
            textColor: "text-green-800",
            icon: <FaClipboardList className="text-3xl text-green-800" />,
          },
          {
            title: "Today's Check-ins",
            value: todaysCheckIns,
            color: "bg-yellow-100",
            textColor: "text-yellow-800",
            icon: <FaSignInAlt className="text-3xl text-yellow-800" />,
          },
          {
            title: "Today's Check-outs",
            value: todaysCheckOuts,
            color: "bg-purple-100",
            textColor: "text-purple-800",
            icon: <FaSignOutAlt className="text-3xl text-purple-800" />,
          },
        ].map((widget, idx) => (
          <div
            key={idx}
            className={`rounded-lg shadow p-5 hover:shadow-lg transition cursor-pointer ${widget.color}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className={`text-sm font-medium ${widget.textColor}`}>
                  {widget.title}
                </h3>
                <p className={`text-2xl font-bold mt-2 ${widget.textColor}`}>
                  {widget.value}
                </p>
              </div>

              {/* Icon */}
              <div className="opacity-80">{widget.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Content area */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Bookings
          </h3>
          <div className="space-y-3">
            {recentBookings.length > 0 ? (
              recentBookings.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:shadow-sm transition"
                >
                  <div>
                    <div className="text-sm text-gray-500">{b.user}</div>
                    <div className="font-medium text-gray-800">{b.room}</div>
                  </div>
                  <div className="text-xs text-gray-500">{b.date}</div>
                </div>
              ))
            ) : (
              <div className="text-gray-500">No recent bookings</div>
            )}
          </div>
        </motion.div>

        {/* Latest Inquiries */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow p-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Latest Enquiries
          </h3>
          <div className="space-y-3">
            {recentInquiries.length > 0 ? (
              recentInquiries.map((inq, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border border-gray-100 hover:shadow-sm transition"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="text-sm text-gray-500">
                        {inq.occasion}
                      </div>
                      <div className="font-medium text-gray-800">
                        {inq.name}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {inq.createdAt?.split("T")[0]}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-500">No Enquiries</div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-8 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Resort — Admin Panel
      </footer>
    </div>
  );
}
