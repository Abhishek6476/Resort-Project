
import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import RoomSidebar from "../../../components/Admin/RoomSidebar";

export default function AllRooms() {
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    description: "",
    totalRooms: "",
    image: null,
  });

  // Fetch rooms from backend
  const fetchRooms = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/rooms");
      setRooms(res.data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  // Edit room
  const handleEdit = (room) => {
    setFormData({ ...room, image: null });
    setIsSidebarOpen(true);
  };

  // Delete room
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this room?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/rooms/${id}`);
      setRooms(rooms.filter((room) => room._id !== id));
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

  // Add/Edit submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.type || !formData.price || !formData.description || !formData.totalRooms) {
      return alert("Please fill all fields");
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("type", formData.type);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("totalRooms", formData.totalRooms);
    if (formData.image) data.append("image", formData.image);

    try {
      if (formData._id) {
        const res = await axios.put(`http://localhost:5000/api/rooms/${formData._id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setRooms(rooms.map((r) => (r._id === formData._id ? res.data : r)));
      } else {
        const res = await axios.post("http://localhost:5000/api/rooms", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setRooms([...rooms, res.data]);
      }

      setFormData({ name: "", type: "", price: "", description: "", totalRooms: "", image: null });
      setIsSidebarOpen(false);
    } catch (error) {
      console.error("Error saving room:", error);
    }
  };

  // Filter rooms
  const filteredRooms = rooms.filter((room) =>
    room.name.toLowerCase().includes(search.toLowerCase())
  );

  // Total room summary
  const totalRooms = rooms.reduce((acc, room) => acc + Number(room.totalRooms || 0), 0);
  const typeCount = rooms.reduce((acc, room) => {
    acc[room.type] = (acc[room.type] || 0) + Number(room.totalRooms || 0);
    return acc;
  }, {});

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative">
      {/* Top Controls */}
      <div className="flex justify-end items-center gap-3 mb-6">
        <div className="relative w-64">
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search room..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-all"
        >
          Add Room
        </button>
      </div>

      {/* ✅ Total Rooms Summary */}
      <div className="my-4 p-4 bg-gray-100 rounded-lg shadow-sm text-gray-700">
        <p className="font-semibold text-lg">Total Rooms: {totalRooms}</p>
        <div className="flex gap-4 mt-2 flex-wrap">
          {Object.keys(typeCount).map((type) => (
            <span key={type} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg">
              {type}: {typeCount[type]}
            </span>
          ))}
        </div>
      </div>

      {/* Rooms Table (without totalRooms column) */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {["Room Name", "Type", "Price", "Description", "Image", "Actions"].map((head) => (
                <th
                  key={head}
                  className="px-6 py-3 text-left text-gray-700 font-semibold uppercase tracking-wider border-b border-gray-300"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room, idx) => (
                <tr
                  key={room._id}
                  className={idx % 2 === 0 ? "bg-white hover:bg-gray-50" : "bg-gray-50 hover:bg-gray-100"}
                >
                  <td className="px-6 py-3">{room.name}</td>
                  <td className="px-6 py-3">{room.type}</td>
                  <td className="px-6 py-3">{room.price}</td>
                  <td className="px-6 py-3">{room.description}</td>
                  <td className="px-6 py-3">
                    {room.image && (
                      <img
                        src={`http://localhost:5000${room.image}`}
                        alt={room.name}
                        className="w-20 h-16 object-cover rounded"
                      />
                    )}
                  </td>
                  <td className="px-6 py-3 text-center flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(room)}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <FaEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(room._id)}
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No rooms found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Sidebar */}
      <RoomSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
