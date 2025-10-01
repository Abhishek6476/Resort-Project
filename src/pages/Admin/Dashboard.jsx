// // src/pages/Admin/Dashboard.jsx
// export default function Dashboard() {
//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       {/* Welcome Header */}
//       <div className="mb-10">
//         <h1 className="text-4xl font-bold text-blue-800">Welcome, Admin 👋</h1>
//         <p className="text-gray-600 mt-2">
//           Here's a quick overview of your resort's stats.
//         </p>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Total Bookings */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="text-xl font-semibold text-gray-700">Total Bookings</h2>
//               <p className="text-3xl font-bold text-blue-800 mt-2">120</p>
//             </div>
//             <div className="bg-blue-100 text-blue-800 p-3 rounded-full">
//               📅
//             </div>
//           </div>
//         </div>

//         {/* Available Rooms */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="text-xl font-semibold text-gray-700">Available Rooms</h2>
//               <p className="text-3xl font-bold text-green-600 mt-2">45</p>
//             </div>
//             <div className="bg-green-100 text-green-600 p-3 rounded-full">
//               🛏️
//             </div>
//           </div>
//         </div>

//         {/* Upcoming Events */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="text-xl font-semibold text-gray-700">Upcoming Events</h2>
//               <p className="text-3xl font-bold text-purple-600 mt-2">8</p>
//             </div>
//             <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
//               🎉
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add more sections below if needed */}
//       {/* For example: Recent Bookings, Revenue, etc. */}
//     </div>
//   );
// }


// // src/pages/Admin/AdminDashboard.jsx
// import { useNavigate } from "react-router-dom";

// export default function AdminDashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("adminLoggedIn"); // remove flag
//     navigate("/admin-login", { replace: true });
//   };

//   return (
//     <div className="min-h-screen p-8 bg-gray-100">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-blue-800">Admin Dashboard</h1>
//         <button
//           onClick={handleLogout}
//           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
//         >
//           Logout
//         </button>
//       </div>

//       <div className="p-4 bg-white rounded-lg shadow">
//         <p>Welcome to your admin dashboard!</p>
//         {/* Add dashboard content here */}
//       </div>
//     </div>
//   );
// }





// src/pages/Admin/AdminDashboard.jsx
// import Sidebar from "../../components/Admin/Sidebar";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin-login", { replace: true });
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main content */}
      <div className="flex-1 p-8 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* Dashboard widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">Total Bookings</h3>
            <p className="text-2xl font-bold mt-2">120</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">Rooms Available</h3>
            <p className="text-2xl font-bold mt-2">35</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">Revenue</h3>
            <p className="text-2xl font-bold mt-2">₹1,50,000</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">Pending Reviews</h3>
            <p className="text-2xl font-bold mt-2">5</p>
          </div>
        </div>

        {/* More sections can go here */}
      </div>
    </div>
  );
}
