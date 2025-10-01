// // src/components/Admin/ProtectedRoute.jsx
// import { Navigate, useLocation } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   // ✅ Check if admin is logged in via localStorage
//   const isAdminLoggedIn = localStorage.getItem("adminLoggedIn") === "true";

//   const location = useLocation(); // current route

//   if (!isAdminLoggedIn) {
//     // Agar login nahi → redirect
//     return <Navigate to="/admin-login" state={{ from: location }} replace />;
//   }

//   // Agar login hai → dashboard render
//   return children;
// }



// src/components/Admin/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAdminLoggedIn = localStorage.getItem("adminLoggedIn") === "true";
  const location = useLocation();

  if (!isAdminLoggedIn) {
    // Redirect to login if not logged in
    return <Navigate to="/admin-login" state={{ from: location }} replace />;
  }

  return children;
}
