

import { useState, useEffect } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import axios from "axios";

export default function AllContacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  // ✅ Fetch all contacts from backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/contact");
        setContacts(res.data);
      } catch (err) {
        console.error("Error fetching contact messages:", err);
      }
    };
    fetchContacts();
  }, []);

  // ✅ Filter logic
  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      (c.message && c.message.toLowerCase().includes(search.toLowerCase()))
  );

  // ✅ Delete contact
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await axios.delete(`http://localhost:5000/api/contact/${id}`);
        setContacts(contacts.filter((c) => c._id !== id));
      } catch (error) {
        console.error("Error deleting contact:", error);
      }
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* 🔍 Top Controls */}
      <div className="flex justify-end items-center gap-3 mb-6">
        <div className="relative w-64">
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, email or message..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* 📋 Contacts Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              {["Name", "Email", "Phone", "Message", "Date", "Actions"].map(
                (head) => (
                  <th
                    key={head}
                    className="px-4 py-2 text-left text-gray-700 font-semibold uppercase border-b border-gray-300 text-sm"
                  >
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((c, idx) => (
                <tr
                  key={c._id}
                  className={
                    idx % 2 === 0
                      ? "bg-white hover:bg-gray-50"
                      : "bg-gray-50 hover:bg-gray-100"
                  }
                >
                  <td className="px-4 py-2">{c.name}</td>
                  <td className="px-4 py-2">{c.email}</td>
                  <td className="px-4 py-2">{c.phone || "—"}</td>
                  <td className="px-4 py-2 max-w-xs truncate">{c.message}</td>
                  <td className="px-4 py-2">
                    {new Date(c.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(c._id)}
                      className="text-gray-600 hover:text-red-600 transition"
                    >
                      <FaTrash size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No contact messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
