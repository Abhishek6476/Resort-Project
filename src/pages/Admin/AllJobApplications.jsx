import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaDownload } from "react-icons/fa";

export default function AllJobApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/job-applications"); // ✅ fixed URL
        setApplications(res.data);
      } catch (error) {
        console.error("❌ Error fetching job applications:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this application?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/job-applications/${id}`); // ✅ fixed URL
      setApplications(applications.filter((app) => app._id !== id));
    } catch (error) {
      console.error("❌ Error deleting application:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-600 text-lg">
        Loading job applications...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Job Applications</h1>

      {applications.length === 0 ? (
        <p className="text-gray-600 text-center mt-10">No job applications found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <div
              key={app._id}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-semibold text-gray-800">{app.name}</h2>
                <button
                  onClick={() => handleDelete(app._id)}
                  className="text-red-600 hover:text-red-800 transition"
                  title="Delete Application"
                >
                  <FaTrash />
                </button>
              </div>

              <div className="space-y-1 text-gray-600">
                <p><b>Email:</b> {app.email}</p>
                <p><b>Phone:</b> {app.phone}</p>
                <p><b>Position:</b> {app.position}</p>
              </div>

              <div className="mt-4">
                {app.resume ? (
                  <a
                    href={`http://localhost:5000${app.resume}`}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg transition"
                  >
                    <FaDownload /> Download Resume
                  </a>
                ) : (
                  <p className="text-sm text-gray-500 italic">No resume uploaded</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
