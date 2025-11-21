// export default function AdminDashboard() {
//   // Dummy data
//   const totalRooms = 35;
//   const totalBookings = 120;
//   const upcomingEvents = 8;
//   const totalUsers = 50;

//   const recentBookings = [
//     { user: "Abhishek", room: "Luxury Room", date: "2025-10-05" },
//     { user: "Neha", room: "Elite Room", date: "2025-10-06" },
//     { user: "Rohit", room: "Royal Room", date: "2025-10-07" },

//   ];

//   const upcomingEventsList = [
//     { type: "Wedding", client: "Rahul", date: "2025-11-10" },
//     { type: "Mehndi", client: "Sanya", date: "2025-11-12" },
//     { type: "Corporate Meeting", client: "Abhishek", date: "2025-11-15" },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-blue-800">Dashboard</h1>
//         {/* Logout can be in top-right or sidebar */}
//       </div>

//       {/* Widgets */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {[
//           {title: "Total Rooms", value: totalRooms, color: "bg-blue-100", textColor:"text-blue-800"},
//           {title: "Total Bookings", value: totalBookings, color: "bg-green-100", textColor:"text-green-800"},
//           {title: "Upcoming Events", value: upcomingEvents, color: "bg-yellow-100", textColor:"text-yellow-800"},
//           {title: "Total Users", value: totalUsers, color: "bg-purple-100", textColor:"text-purple-800"}
//         ].map((widget, idx) => (
//           <div key={idx} className={`rounded-lg shadow p-5 hover:shadow-lg transition cursor-pointer ${widget.color}`}>
//             <h3 className={`text-sm font-medium ${widget.textColor}`}>{widget.title}</h3>
//             <p className={`text-2xl font-bold mt-2 ${widget.textColor}`}>{widget.value}</p>
//           </div>
//         ))}
//       </div>

//       {/* Recent Bookings */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Bookings</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {recentBookings.map((booking, idx) => (
//             <div key={idx} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
//               <p className="text-gray-500 text-sm">{booking.user}</p>
//               <p className="font-semibold text-gray-800">{booking.room}</p>
//               <p className="text-gray-400 text-xs">{booking.date}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Upcoming Events */}
//       <div>
//         <h2 className="text-xl font-semibold mb-4 text-gray-700">Upcoming Events</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {upcomingEventsList.map((event, idx) => (
//             <div key={idx} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
//               <p className="text-gray-500 text-sm">{event.type}</p>
//               <p className="font-semibold text-gray-800">{event.client}</p>
//               <p className="text-gray-400 text-xs">{event.date}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function AdminDashboard() {
//   const [totalRooms, setTotalRooms] = useState(0);
//   const [totalBookings, setTotalBookings] = useState(0);
//   const [todaysCheckIns, setTodaysCheckIns] = useState(0);
//   const [todaysCheckOuts, setTodaysCheckOuts] = useState(0);
//   const [recentBookings, setRecentBookings] = useState([]);
//   const [recentInquiries, setRecentInquiries] = useState([]);

//   const today = new Date().toISOString().split("T")[0];

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const fetchDashboardData = async () => {
//     try {
//       // All ROOMS  
//       const roomRes = await axios.get("http://localhost:5000/api/rooms");
//       const rooms = roomRes.data;

//       const totalRoomsCount = rooms.reduce(
//         (sum, r) => sum + (r.totalRooms || 0),
//         0
//       );
//       setTotalRooms(totalRoomsCount);

//       // All BOOKINGS Room
//       const bookingRes = await axios.get("http://localhost:5000/api/bookings");
//       const bookings = bookingRes.data;

//       const totalRoomBookings = bookings.reduce(
//         (sum, b) => sum + (b.roomsBooked || 1),
//         0
//       );

//       setTotalBookings(totalRoomBookings);

//       // Today Stats
//       setTodaysCheckIns(
//         bookings.filter((b) => b.checkIn.split("T")[0] === today).length
//       );
//       setTodaysCheckOuts(
//         bookings.filter((b) => b.checkOut.split("T")[0] === today).length
//       );

//       // Recent Bookings (latest 3)
//       const recent = [...bookings]
//         .reverse()
//         .slice(0, 3)
//         .map((b) => ({
//           user: b.name,
//           room: b.roomId?.name || "N/A",
//           date: b.createdAt?.split("T")[0],
//         }));

//       setRecentBookings(recent);

//       // EVENT INQUIRIES
//       try {
//         const inquiryRes = await axios.get("http://localhost:5000/api/all");

//         // Latest 3
//         const latestInquiries = inquiryRes.data.slice(0, 3);

//         setRecentInquiries(latestInquiries);
//       } catch (e) {
//         setRecentInquiries([]);
//       }
//     } catch (err) {
//       console.error("Dashboard fetch error:", err);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-blue-800">Dashboard</h1>
//       </div>

//       {/* Widgets */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {[
//           {
//             title: "Total Rooms",
//             value: totalRooms,
//             color: "bg-blue-100",
//             textColor: "text-blue-800",
//           },
//           {
//             title: "Total Bookings",
//             value: totalBookings,
//             color: "bg-green-100",
//             textColor: "text-green-800",
//           },
//           {
//             title: "Today's Check-ins",
//             value: todaysCheckIns,
//             color: "bg-yellow-100",
//             textColor: "text-yellow-800",
//           },
//           {
//             title: "Today's Check-outs",
//             value: todaysCheckOuts,
//             color: "bg-purple-100",
//             textColor: "text-purple-800",
//           },
//         ].map((widget, idx) => (
//           <div
//             key={idx}
//             className={`rounded-lg shadow p-5 hover:shadow-lg transition cursor-pointer ${widget.color}`}
//           >
//             <h3 className={`text-sm font-medium ${widget.textColor}`}>
//               {widget.title}
//             </h3>
//             <p className={`text-2xl font-bold mt-2 ${widget.textColor}`}>
//               {widget.value}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Recent Bookings */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-4 text-gray-700">
//           Recent Bookings
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {recentBookings.length > 0 ? (
//             recentBookings.map((booking, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-lg shadow p-4 hover:shadow-md transition"
//               >
//                 <p className="text-gray-500 text-sm">{booking.user}</p>
//                 <p className="font-semibold text-gray-800">{booking.room}</p>
//                 <p className="text-gray-400 text-xs">{booking.date}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No bookings yet</p>
//           )}
//         </div>
//       </div>

//       {/* Latest Inquiries */}
//       <div>
//         <h2 className="text-xl font-semibold mb-4 text-gray-700">
//           Latest Inquiries
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {recentInquiries.length > 0 ? (
//             recentInquiries.map((inq, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-lg shadow p-4 hover:shadow-md transition"
//               >
//                 <p className="text-gray-500 text-sm">{inq.occasion}</p>
//                 <p className="font-semibold text-gray-800">{inq.name}</p>
//                 <p className="text-gray-400 text-xs">
//                   {inq.createdAt?.split("T")[0]}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No inquiries</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

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
      const totalRoomsCount = rooms.reduce((sum, r) => sum + (r.totalRooms || 0), 0);
      setTotalRooms(totalRoomsCount);

      // Bookings
      const bookingRes = await axios.get("http://localhost:5000/api/bookings");
      const bookings = bookingRes.data || [];

      const totalRoomBookings = bookings.reduce((sum, b) => sum + (b.roomsBooked || 1), 0);
      setTotalBookings(totalRoomBookings);

      // Today stats
      setTodaysCheckIns(bookings.filter((b) => b.checkIn?.split("T")[0] === today).length);
      setTodaysCheckOuts(bookings.filter((b) => b.checkOut?.split("T")[0] === today).length);

      // Recent bookings (latest 3)
      const recent = [...bookings].reverse().slice(0, 3).map((b) => ({
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
          <h1 className="text-3xl font-serif text-[#0b2447]">Admin Dashboard</h1>
          <p className="text-sm text-gray-600 mt-1">Overview of rooms, bookings & enquiries</p>
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
          },
          {
            title: "Total Bookings",
            value: totalBookings,
            color: "bg-green-100",
            textColor: "text-green-800",
          },
          {
            title: "Today's Check-ins",
            value: todaysCheckIns,
            color: "bg-yellow-100",
            textColor: "text-yellow-800",
          },
          {
            title: "Today's Check-outs",
            value: todaysCheckOuts,
            color: "bg-purple-100",
            textColor: "text-purple-800",
          },
        ].map((widget, idx) => (
          <div
            key={idx}
            className={`rounded-lg shadow p-5 hover:shadow-lg transition cursor-pointer ${widget.color}`}
          >
            <h3 className={`text-sm font-medium ${widget.textColor}`}>
              {widget.title}
            </h3>
            <p className={`text-2xl font-bold mt-2 ${widget.textColor}`}>
              {widget.value}
            </p>
          </div>
        ))}
      </div>


      {/* Content area */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Bookings</h3>
          <div className="space-y-3">
            {recentBookings.length > 0 ? (
              recentBookings.map((b, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:shadow-sm transition">
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
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Latest Enquiries</h3>
          <div className="space-y-3">
            {recentInquiries.length > 0 ? (
              recentInquiries.map((inq, idx) => (
                <div key={idx} className="p-3 rounded-lg border border-gray-100 hover:shadow-sm transition">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="text-sm text-gray-500">{inq.occasion}</div>
                      <div className="font-medium text-gray-800">{inq.name}</div>
                    </div>
                    <div className="text-xs text-gray-500">{inq.createdAt?.split("T")[0]}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-500">No Enquiries</div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Footer small */}
      <footer className="mt-8 text-center text-xs text-gray-600">
        © {new Date().getFullYear()}  Resort — Admin Panel
      </footer>
    </div>
  );
}
