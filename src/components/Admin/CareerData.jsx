
import React, { useEffect, useState } from "react";
import {
  FileText,
  Mail,
  Phone,
  User,
  Briefcase,
  Pencil,
  Trash2,
  X,
  Check,
} from "lucide-react";

export default function CareerData() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingApp, setEditingApp] = useState(null);
  const [search, setSearch] = useState("");

  // Fetch job applications
  const fetchApplications = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/job-application");
      const data = await res.json();
      setApplications(data);
    } catch (err) {
      console.error("Error fetching applications:", err);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  // Filter applications by name or phone based on search input
  const filteredApplications = applications.filter((app) => {
    const lowerSearch = search.toLowerCase();
    return (
      app.name.toLowerCase().includes(lowerSearch) ||
      app.phone.includes(lowerSearch)
    );
  });

  // Delete an application
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:5000/api/job-application/${id}`,
          {
            method: "DELETE",
          }
        );
        if (res.ok) {
          alert("Application deleted successfully!");
          fetchApplications();
        } else {
          alert("Failed to delete application");
        }
      } catch (error) {
        console.error("Delete error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Open edit modal
  const handleEdit = (app) => {
    setEditingApp({ ...app });
  };

  // Handle changes in edit modal form
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingApp((prev) => ({ ...prev, [name]: value }));
  };

  // Submit edited application data
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      ...editingApp,
      resume: editingApp.resume,
    };

    try {
      const res = await fetch(
        `http://localhost:5000/api/jobapplication/${editingApp._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        }
      );

      if (res.ok) {
        alert("Application updated successfully!");
        setEditingApp(null);
        fetchApplications();
      } else {
        const errData = await res.json();
        alert("Failed to update application: " + errData.message);
      }
    } catch (err) {
      console.error("Update error:", err);
      alert("Error updating application");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Career Applications
      </h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by name or phone..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
      />

      {filteredApplications.length === 0 ? (
        <p className="text-gray-500 text-lg">No applications found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApplications.map((app) => (
            <div
              key={app._id}
              className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 relative transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
            >
              {/* Actions */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={() => handleEdit(app)}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  title="Edit"
                >
                  <Pencil className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(app._id)}
                  className="text-red-600 hover:text-red-800 transition-colors"
                  title="Delete"
                  disabled={loading}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              {/* Name */}
              <div className="flex items-center mb-3 mt-2">
                <User className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {app.name}
                </h3>
              </div>

              {/* Email */}
              <div className="flex items-center text-gray-600 mb-2">
                <Mail className="w-4 h-4 mr-2 text-gray-500" />
                <span>{app.email}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center text-gray-600 mb-2">
                <Phone className="w-4 h-4 mr-2 text-gray-500" />
                <span>{app.phone}</span>
              </div>

              {/* Position */}
              <div className="flex items-center text-gray-600 mb-4">
                <Briefcase className="w-4 h-4 mr-2 text-gray-500" />
                <span>{app.position}</span>
              </div>

              {/* Resume Actions */}
              <div className="mt-3">
                {app.resume ? (
                  <div className="flex gap-3 flex-wrap">
                    {/* View Resume */}
                    <a
                      href={`http://localhost:5000/uploads/${app.resume}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <FileText className="w-4 h-4" />
                      View Resume
                    </a>
                  </div>
                ) : (
                  <span className="text-sm text-gray-400 italic">
                    No file uploaded
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {editingApp && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md relative shadow-xl">
            <button
              onClick={() => setEditingApp(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Edit Application
            </h3>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={editingApp.name}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={editingApp.email}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email"
              />
              <input
                type="text"
                name="phone"
                value={editingApp.phone}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Phone"
              />
              <input
                type="text"
                name="position"
                value={editingApp.position}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Position"
              />
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingApp(null)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-1"
                >
                  <Check className="w-4 h-4" />
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}




//100 work code
// import React, { useEffect, useState } from "react";
// import {
//   FileText,
//   Mail,
//   Phone,
//   User,
//   Briefcase,
//   Pencil,
//   Trash2,
// } from "lucide-react";

// export default function CareerData() {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch all job applications
//   const fetchApplications = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/job-application");
//       const data = await res.json();
//       setApplications(data);
//     } catch (err) {
//       console.error("Error fetching applications:", err);
//     }
//   };

//   useEffect(() => {
//     fetchApplications();
//   }, []);

//   // Handle Delete
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this application?")) {
//       try {
//         setLoading(true);
//         const res = await fetch(
//           `http://localhost:5000/api/job-application/${id}`,
//           {
//             method: "DELETE",
//           }
//         );
//         if (res.ok) {
//           alert("Application deleted successfully!");
//           fetchApplications();
//         } else {
//           alert("Failed to delete application");
//         }
//       } catch (error) {
//         console.error("Delete error:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   // Handle Edit (you can expand this with a modal form)
//   const handleEdit = (app) => {
//     alert(`Edit feature coming soon for: ${app.name}`);
//     // You can open a modal here with pre-filled form fields
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6">
//         Career Applications
//       </h2>

//       {applications.length === 0 ? (
//         <p className="text-gray-500 text-lg">No applications found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {applications.map((app) => (
//             <div
//               key={app._id}
//               className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative"
//             >
//               {/* Actions */}
//               <div className="absolute top-4 right-4 flex space-x-2">
//                 <button
//                   onClick={() => handleEdit(app)}
//                   className="text-blue-600 hover:text-blue-800 transition-colors"
//                   title="Edit"
//                 >
//                   <Pencil className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => handleDelete(app._id)}
//                   className="text-red-600 hover:text-red-800 transition-colors"
//                   title="Delete"
//                   disabled={loading}
//                 >
//                   <Trash2 className="w-5 h-5" />
//                 </button>
//               </div>

//               <div className="flex items-center mb-3 mt-2">
//                 <User className="w-5 h-5 text-blue-600 mr-2" />
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {app.name}
//                 </h3>
//               </div>

//               <div className="flex items-center text-gray-600 mb-2">
//                 <Mail className="w-4 h-4 mr-2 text-gray-500" />
//                 <span>{app.email}</span>
//               </div>

//               <div className="flex items-center text-gray-600 mb-2">
//                 <Phone className="w-4 h-4 mr-2 text-gray-500" />
//                 <span>{app.phone}</span>
//               </div>

//               <div className="flex items-center text-gray-600 mb-4">
//                 <Briefcase className="w-4 h-4 mr-2 text-gray-500" />
//                 <span>{app.position}</span>
//               </div>

//               <div className="mt-3">
//                 {app.resume ? (
//                   <a
//                     href={`http://localhost:5000/uploads/${app.resume}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
//                   >
//                     <FileText className="w-4 h-4" />
//                     View Resume
//                   </a>
//                 ) : (
//                   <span className="text-sm text-gray-400 italic">
//                     No file uploaded
//                   </span>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }







// import React, { useEffect, useState } from "react";
// import { FileText, Mail, Phone, User, Briefcase } from "lucide-react";

// export default function CareerData() {
//   const [applications, setApplications] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/job-application")
//       .then((res) => res.json())
//       .then((data) => setApplications(data))
//       .catch((err) => console.error("Error fetching applications:", err));
//   }, []);

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6">
//         Career Applications
//       </h2>

//       {applications.length === 0 ? (
//         <p className="text-gray-500 text-lg">No applications found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {applications.map((app, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
//             >
//               <div className="flex items-center mb-3">
//                 <User className="w-5 h-5 text-blue-600 mr-2" />
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {app.name}
//                 </h3>
//               </div>
//               <div className="flex items-center text-gray-600 mb-2">
//                 <Mail className="w-4 h-4 mr-2 text-gray-500" />
//                 <span>{app.email}</span>
//               </div>
//               <div className="flex items-center text-gray-600 mb-2">
//                 <Phone className="w-4 h-4 mr-2 text-gray-500" />
//                 <span>{app.phone}</span>
//               </div>
//               <div className="flex items-center text-gray-600 mb-4">
//                 <Briefcase className="w-4 h-4 mr-2 text-gray-500" />
//                 <span>{app.position}</span>
//               </div>

//               <div className="mt-3">
//                 {app.resume ? (
//                   <a
//                     href={`http://localhost:5000/uploads/${app.resume}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
//                   >
//                     <FileText className="w-4 h-4" />
//                     View Resume
//                   </a>
//                 ) : (
//                   <span className="text-sm text-gray-400 italic">
//                     No file uploaded
//                   </span>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
