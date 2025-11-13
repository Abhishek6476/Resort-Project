
export default function AdminDashboard() {
  // Dummy data
  const totalRooms = 35;
  const totalBookings = 120;
  const upcomingEvents = 8;
  const totalUsers = 50;

  const recentBookings = [
    { user: "Abhishek", room: "Luxury Room", date: "2025-10-05" },
    { user: "Neha", room: "Elite Room", date: "2025-10-06" },
    { user: "Rohit", room: "Royal Room", date: "2025-10-07" },
    
  ];

  const upcomingEventsList = [
    { type: "Wedding", client: "Rahul", date: "2025-11-10" },
    { type: "Mehndi", client: "Sanya", date: "2025-11-12" },
    { type: "Corporate Meeting", client: "Abhishek", date: "2025-11-15" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-800">Dashboard</h1>
        {/* Logout can be in top-right or sidebar */}
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[ 
          {title: "Total Rooms", value: totalRooms, color: "bg-blue-100", textColor:"text-blue-800"},
          {title: "Total Bookings", value: totalBookings, color: "bg-green-100", textColor:"text-green-800"},
          {title: "Upcoming Events", value: upcomingEvents, color: "bg-yellow-100", textColor:"text-yellow-800"},
          {title: "Total Users", value: totalUsers, color: "bg-purple-100", textColor:"text-purple-800"}
        ].map((widget, idx) => (
          <div key={idx} className={`rounded-lg shadow p-5 hover:shadow-lg transition cursor-pointer ${widget.color}`}>
            <h3 className={`text-sm font-medium ${widget.textColor}`}>{widget.title}</h3>
            <p className={`text-2xl font-bold mt-2 ${widget.textColor}`}>{widget.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Bookings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentBookings.map((booking, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
              <p className="text-gray-500 text-sm">{booking.user}</p>
              <p className="font-semibold text-gray-800">{booking.room}</p>
              <p className="text-gray-400 text-xs">{booking.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingEventsList.map((event, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
              <p className="text-gray-500 text-sm">{event.type}</p>
              <p className="font-semibold text-gray-800">{event.client}</p>
              <p className="text-gray-400 text-xs">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}