// src/layouts/AdminLayout.jsx
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-4">
          <Link to="/admin/dashboard" className="block hover:text-gray-300">Dashboard</Link>
          <Link to="/admin/bookings" className="block hover:text-gray-300">Bookings</Link>
          <Link to="/admin/rooms" className="block hover:text-gray-300">Rooms</Link>
          <Link to="/admin/events" className="block hover:text-gray-300">Events</Link>
          <Link to="/admin/users" className="block hover:text-gray-300">Users</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet /> {/* Nested routes content yahan show hoga */}
      </main>
    </div>
  );
}
