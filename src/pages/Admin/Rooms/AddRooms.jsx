// // src/pages/Admin/Rooms/AddRooms.jsx
// import { useState } from "react";

// export default function AddRooms() {
//   const [roomData, setRoomData] = useState({
//     name: "",
//     type: "Luxury",
//     price: "",
//     description: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image") {
//       setRoomData({ ...roomData, image: files[0] });
//     } else {
//       setRoomData({ ...roomData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Room Data:", roomData);
//     alert("Room added! (mock frontend only)");
//     setRoomData({
//       name: "",
//       type: "Luxury",
//       price: "",
//       description: "",
//       image: null,
//     });
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6 text-blue-800">Add New Room</h1>

//       <form onSubmit={handleSubmit} className="overflow-x-auto">
//         <table className="w-full table-auto bg-white rounded-lg shadow overflow-hidden">
//           <tbody>
//             <tr className="border-b">
//               <td className="p-3 font-medium">Room Name</td>
//               <td className="p-3">
//                 <input
//                   type="text"
//                   name="name"
//                   value={roomData.name}
//                   onChange={handleChange}
//                   placeholder="Enter Room Name"
//                   className="w-full border rounded px-3 py-2 outline-none"
//                   required
//                 />
//               </td>
//             </tr>

//             <tr className="border-b">
//               <td className="p-3 font-medium">Room Type</td>
//               <td className="p-3">
//                 <select
//                   name="type"
//                   value={roomData.type}
//                   onChange={handleChange}
//                   className="w-full border rounded px-3 py-2 outline-none"
//                 >
//                   <option value="Luxury">Luxury</option>
//                   <option value="Deluxe">Deluxe</option>
//                   <option value="Family Suite">Family Suite</option>
//                 </select>
//               </td>
//             </tr>

//             <tr className="border-b">
//               <td className="p-3 font-medium">Price per Night</td>
//               <td className="p-3">
//                 <input
//                   type="number"
//                   name="price"
//                   value={roomData.price}
//                   onChange={handleChange}
//                   placeholder="Enter Price"
//                   className="w-full border rounded px-3 py-2 outline-none"
//                   required
//                 />
//               </td>
//             </tr>

//             <tr className="border-b">
//               <td className="p-3 font-medium">Description</td>
//               <td className="p-3">
//                 <textarea
//                   name="description"
//                   value={roomData.description}
//                   onChange={handleChange}
//                   placeholder="Enter Description"
//                   className="w-full border rounded px-3 py-2 outline-none"
//                   required
//                 />
//               </td>
//             </tr>

//             <tr className="border-b">
//               <td className="p-3 font-medium">Upload Image</td>
//               <td className="p-3">
//                 <input
//                   type="file"
//                   name="image"
//                   onChange={handleChange}
//                   className="w-full"
//                   accept="image/*"
//                   required
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td colSpan="2" className="p-3 text-right">
//                 <button
//                   type="submit"
//                   className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold"
//                 >
//                   Add Room
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </form>
//     </div>
//   );
// }


import React from 'react'

function AddRooms() {
  return (
    <div>AddRooms</div>
  )
}

export default AddRooms