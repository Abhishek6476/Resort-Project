// // src/layouts/AdminLayout.jsx
// import Sidebar from "../components/Admin/Sidebar";
// import { Outlet } from "react-router-dom";

// export default function AdminLayout() {
//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main content */}
//       <div className="flex-1 p-8 bg-gray-100">
//         <Outlet /> {/* Render child routes here */}
//       </div>
//     </div>
//   );
// }



import Sidebar from "../components/Admin/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin-login";
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar onLogout={handleLogout} />
      <div className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
}
