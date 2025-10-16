
// import { useState } from "react";
// import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
// import RoomSidebar from "../../../components/Admin/RoomSidebar"; // sidebar component

// export default function AllRooms() {
//   const [search, setSearch] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const [rooms, setRooms] = useState([
//     { id: 1, name: "Luxury Room", type: "Luxury", price: "₹5,000", description: "Spacious room with sea view" },
//     { id: 2, name: "Deluxe Room", type: "Deluxe", price: "₹3,500", description: "Comfortable room with modern amenities" },
//     { id: 3, name: "Family Suite", type: "Suite", price: "₹7,000", description: "Large suite for family with extra beds" },
//      { id: 2, name: "Deluxe Room", type: "Deluxe", price: "₹3,500", description: "Comfortable room with modern amenities" },
//     { id: 3, name: "Family Suite", type: "Suite", price: "₹7,000", description: "Large suite for family with extra beds" },
    
//   ]);

//   const [formData, setFormData] = useState({ name: "", type: "", price: "", description: "" });

//   // Edit room
//   const handleEdit = (id) => {
//     const room = rooms.find(r => r.id === id);
//     setFormData({ ...room });
//     setIsSidebarOpen(true);
//   };

//   // Delete room
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this room?")) {
//       setRooms(rooms.filter((room) => room.id !== id));
//     }
//   };

//   // Add/Edit submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.type || !formData.price) return alert("Please fill all fields");

//     if (formData.id) {
//       // Update existing room
//       setRooms(rooms.map(r => (r.id === formData.id ? formData : r)));
//     } else {
//       // Add new room
//       setRooms([...rooms, { ...formData, id: Date.now() }]);
//     }

//     setFormData({ name: "", type: "", price: "", description: "" });
//     setIsSidebarOpen(false);
//   };

//   // Filtered rooms based on search
//   const filteredRooms = rooms.filter((room) =>
//     room.name.toLowerCase().includes(search.toLowerCase())
//   );

//   // Total rooms + type-wise count
//   const totalRooms = rooms.length;
//   const typeCount = rooms.reduce((acc, room) => {
//     acc[room.type] = (acc[room.type] || 0) + 1;
//     return acc;
//   }, {});

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen relative">
//       {/* Top Controls */}
//       <div className="flex justify-end items-center gap-3 mb-6">
//         <div className="relative w-64">
//           <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search room..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <button
//           onClick={() => { setFormData({ name: "", type: "", price: "", description: "" }); setIsSidebarOpen(true); }}
//           className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-all"
//         >
//           Add Room
//         </button>
//       </div>

//       {/* Total Rooms + Type Summary */}
//       <div className="my-4 p-4 bg-gray-100 rounded-lg shadow-sm text-gray-700">
//         <p className="font-semibold">Total Rooms: {totalRooms}</p>
//         <div className="flex gap-4 mt-2 flex-wrap">
//           {Object.keys(typeCount).map((type) => (
//             <span key={type} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
//               {type}: {typeCount[type]}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Rooms Table */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-100">
//             <tr>
//               {["Room Name", "Type", "Price", "Description", "Actions"].map((head) => (
//                 <th
//                   key={head}
//                   className="px-6 py-3 text-left text-gray-700 font-semibold uppercase tracking-wider border-b border-gray-300"
//                 >
//                   {head}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {filteredRooms.length > 0 ? (
//               filteredRooms.map((room, idx) => (
//                 <tr key={room.id} className={idx % 2 === 0 ? "bg-white hover:bg-gray-50" : "bg-gray-50 hover:bg-gray-100"}>
//                   <td className="px-6 py-3">{room.name}</td>
//                   <td className="px-6 py-3">{room.type}</td>
//                   <td className="px-6 py-3">{room.price}</td>
//                   <td className="px-6 py-3">{room.description}</td>
//                   <td className="px-6 py-3 text-center flex justify-center gap-3">
//                     <button onClick={() => handleEdit(room.id)} className="text-gray-600 hover:text-blue-600 transition-colors">
//                       <FaEdit size={18} />
//                     </button>
//                     <button onClick={() => handleDelete(room.id)} className="text-gray-600 hover:text-red-600 transition-colors">
//                       <FaTrash size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center py-4 text-gray-500">
//                   No rooms found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Sidebar */}
//       <RoomSidebar
//         isOpen={isSidebarOpen}
//         onClose={() => setIsSidebarOpen(false)}
//         formData={formData}
//         setFormData={setFormData}
//         onSubmit={handleSubmit}
//       />
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import RoomSidebar from "../../../components/Admin/RoomSidebar";

export default function AllRooms() {
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [formData, setFormData] = useState({ name: "", type: "", price: "", description: "", image: null });

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
    setFormData({ ...room, image: null }); // reset image for new upload
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
    if (!formData.name || !formData.type || !formData.price || !formData.description) {
      return alert("Please fill all fields");
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("type", formData.type);
    data.append("price", formData.price);
    data.append("description", formData.description);
    if (formData.image) data.append("image", formData.image);

    try {
      if (formData._id) {
        // EDIT ROOM
        const res = await axios.put(`http://localhost:5000/api/rooms/${formData._id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setRooms(rooms.map((r) => (r._id === formData._id ? res.data : r)));
      } else {
        // ADD ROOM
        const res = await axios.post("http://localhost:5000/api/rooms", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setRooms([...rooms, res.data]);
      }

      setFormData({ name: "", type: "", price: "", description: "", image: null });
      setIsSidebarOpen(false);
    } catch (error) {
      console.error("Error saving room:", error);
    }
  };

  // Filtered rooms based on search
  const filteredRooms = rooms.filter((room) =>
    room.name.toLowerCase().includes(search.toLowerCase())
  );

  // Total rooms + type-wise count
  const totalRooms = rooms.length;
  const typeCount = rooms.reduce((acc, room) => {
    acc[room.type] = (acc[room.type] || 0) + 1;
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

      {/* Total Rooms + Type Summary */}
      <div className="my-4 p-4 bg-gray-100 rounded-lg shadow-sm text-gray-700">
        <p className="font-semibold">Total Rooms: {totalRooms}</p>
        <div className="flex gap-4 mt-2 flex-wrap">
          {Object.keys(typeCount).map((type) => (
            <span key={type} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {type}: {typeCount[type]}
            </span>
          ))}
        </div>
      </div>

      {/* Rooms Table */}
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
                <tr key={room._id} className={idx % 2 === 0 ? "bg-white hover:bg-gray-50" : "bg-gray-50 hover:bg-gray-100"}>
                  <td className="px-6 py-3">{room.name}</td>
                  <td className="px-6 py-3">{room.type}</td>
                  <td className="px-6 py-3">{room.price}</td>
                  <td className="px-6 py-3">{room.description}</td>
                  <td className="px-6 py-3">
                    {room.image && <img src={`http://localhost:5000${room.image}`} alt={room.name} className="w-20 h-16 object-cover rounded" />}
                  </td>
                  <td className="px-6 py-3 text-center flex justify-center gap-3">
                    <button onClick={() => handleEdit(room)} className="text-gray-600 hover:text-blue-600 transition-colors">
                      <FaEdit size={18} />
                    </button>
                    <button onClick={() => handleDelete(room._id)} className="text-gray-600 hover:text-red-600 transition-colors">
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
