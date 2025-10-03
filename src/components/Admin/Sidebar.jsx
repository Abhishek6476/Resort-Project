// src/components/Admin/Sidebar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBed,
  FaClipboardList,
  FaEnvelope,
  FaUserCog,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);

  const links = [
    { name: "Dashboard", path: "/admin", icon: <FaTachometerAlt /> },
    {
      name: "Rooms",
      icon: <FaBed />,
      submenu: [
        { name: "Booing Room", path: "/admin/rooms/add" },
        { name: "All Rooms", path: "/admin/rooms/all" },
      ],
    },
    { name: "Bookings", path: "/admin/bookings", icon: <FaClipboardList /> },
    { name: "Event Enquiries", path: "/admin/events", icon: <FaEnvelope /> },
    { name: "Contact Messages", path: "/admin/messages", icon: <FaEnvelope /> },
    { name: "Settings", path: "/admin/settings", icon: <FaUserCog /> },
  ];

  const toggleMenu = (name) => {
    if (openMenu === name) setOpenMenu(null);
    else setOpenMenu(name);
  };

  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col shadow-lg">
      {/* Brand */}
      <div className="p-6 text-center border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-3 space-y-1">
        {links.map((link, idx) =>
          link.submenu ? (
            <div key={idx}>
              <button
                onClick={() => toggleMenu(link.name)}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium transition-colors duration-200"
              >
                <span className="flex items-center gap-3">{link.icon} {link.name}</span>
                {openMenu === link.name ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {openMenu === link.name && (
                <div className="ml-5 mt-1 space-y-1">
                  {link.submenu.map((sub, subIdx) => (
                    <NavLink
                      key={subIdx}
                      to={sub.path}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition-colors duration-200 ${
                          isActive ? "bg-gray-200 font-semibold" : ""
                        }`
                      }
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <NavLink
              key={idx}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
                  isActive ? "bg-gray-200 font-semibold" : ""
                }`
              }
            >
              {link.icon} {link.name}
            </NavLink>
          )
        )}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button
          className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 font-medium transition-colors duration-200"
          onClick={() => {
            localStorage.removeItem("adminLoggedIn");
            window.location.href = "/admin-login";
          }}
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
}
