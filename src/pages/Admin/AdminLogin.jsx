// // // src/pages/AdminLogin.jsx
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { FaUser, FaLock } from "react-icons/fa";
// // import adminImg from "../../assets/login.png"; 

// // export default function AdminLogin() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleLogin = (e) => {
// //     e.preventDefault();

// //     // Hardcoded credentials (testing)
// //     const adminEmail = "abhi@gmail.com";
// //     const adminPassword = "123";

// // if (email === adminEmail && password === adminPassword) {
// //   localStorage.setItem("adminLoggedIn", "true"); // string "true"
// //   navigate("/admin", { replace: true }); // replace history
// // }else {
// //       setError("Invalid email or password");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex">
// //       {/* Left Image */}
// //       <div
// //         className="hidden lg:flex w-1/2 h-[80vh] rounded-l-2xl bg-cover bg-bottom"
// //         style={{ backgroundImage: `url(${adminImg})` }}
// //       ></div>

// //       {/* Right Login Form */}
// //       <div className="flex flex-1 items-center justify-center p-8">
// //         <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
// //           <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
// //             Admin Login
// //           </h2>

// //           {error && (
// //             <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
// //               {error}
// //             </div>
// //           )}

// //           <form onSubmit={handleLogin} className="space-y-4">
// //             {/* Email */}
// //             <div className="flex items-center border rounded-lg px-3 py-2">
// //               <FaUser className="text-gray-400 mr-2" />
// //               <input
// //                 type="email"
// //                 placeholder="Email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 className="w-full outline-none"
// //                 required
// //               />
// //             </div>

// //             {/* Password */}
// //             <div className="flex items-center border rounded-lg px-3 py-2">
// //               <FaLock className="text-gray-400 mr-2" />
// //               <input
// //                 type="password"
// //                 placeholder="Password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 className="w-full outline-none"
// //                 required
// //               />
// //             </div>

// //             {/* Submit Button */}
// //             <button
// //               type="submit"
// //               className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-lg font-semibold transition"
// //             >
// //               Login
// //             </button>
// //           </form>

// //           <p className="text-sm text-gray-500 text-center mt-4">
// //             &copy; 2025 YourCompany
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }





// // src/pages/Admin/AdminLogin.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUser, FaLock } from "react-icons/fa";
// import adminImg from "../../assets/login.png"; 

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Hardcoded credentials (testing)
//     const adminEmail = "abhi@gmail.com";
//     const adminPassword = "123";
// if (email === adminEmail && password === adminPassword) {
//   localStorage.setItem("adminLoggedIn", "true"); // ✅ string "true"
//   navigate("/admin", { replace: true }); // redirect to dashboard
// }
//  else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Image */}
//       <div
//         className="hidden lg:flex w-1/2 h-[80vh] rounded-l-2xl bg-cover bg-bottom"
//         style={{ backgroundImage: `url(${adminImg})` }}
//       ></div>

//       {/* Right Login Form */}
//       <div className="flex flex-1 items-center justify-center p-8">
//         <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
//           <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
//             Admin Login
//           </h2>

//           {error && (
//             <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleLogin} className="space-y-4">
//             {/* Email */}
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <FaUser className="text-gray-400 mr-2" />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full outline-none"
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <FaLock className="text-gray-400 mr-2" />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full outline-none"
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-lg font-semibold transition"
//             >
//               Login
//             </button>
//           </form>

//           <p className="text-sm text-gray-500 text-center mt-4">
//             &copy; 2025 YourCompany
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



// // src/pages/Admin/AdminLogin.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUser, FaLock } from "react-icons/fa";
// import axios from "axios";
// import adminImg from "../../assets/login.png";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
// const handleLogin = async (e) => {
 
//   e.preventDefault();
//   try {
//     console.log("Sending request...", email, password); // ✅ debug
//     const res = await axios.post("http://localhost:5000/api/admin/login", { email, password });
//     console.log("Response:", res.data); // ✅ debug

//     localStorage.setItem("adminToken", res.data.token);
//     navigate("/admin", { replace: true });
//   } catch (err) {
//     console.error("Login error:", err); // ✅ debug
//     setError(err.response?.data?.message || "Login failed");
//   }
// };



//   return (
//     <div className="min-h-screen flex">
//       {/* Left Image */}
//       <div
//         className="hidden lg:flex w-1/2 h-[80vh] rounded-l-2xl bg-cover bg-bottom"
//         style={{ backgroundImage: `url(${adminImg})` }}
//       ></div>

//       {/* Right Login Form */}
//       <div className="flex flex-1 items-center justify-center p-8">
//         <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
//           <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
//             Admin Login
//           </h2>

//           {error && (
//             <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleLogin} className="space-y-4">
//             {/* Email */}
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <FaUser className="text-gray-400 mr-2" />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full outline-none"
//                 required
//                 autoComplete="username"
//               />
//             </div>

//             {/* Password */}
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <FaLock className="text-gray-400 mr-2" />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full outline-none"
//                 required
//                 autoComplete="current-password"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
//               disabled={loading}
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           <p className="text-sm text-gray-500 text-center mt-4">
//             &copy; 2025 YourCompany
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



// src/pages/Admin/AdminLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import adminImg from "../../assets/login.png";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });
      // Token save in localStorage
      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Image */}
      <div
        className="hidden lg:flex w-1/2 h-[80vh] rounded-l-2xl bg-cover bg-bottom"
        style={{ backgroundImage: `url(${adminImg})` }}
      ></div>

      {/* Right Login Form */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
            Admin Login
          </h2>

          {error && (
            <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none"
                required
                autoComplete="username"
              />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none"
                required
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
