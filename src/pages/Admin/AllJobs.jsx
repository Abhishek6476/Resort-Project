
import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import JobSidebar from "../../components/Admin/JobSidebar";

export default function AllJobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    jobType: "",
    location: "",
    salary: "",
    description: "",
    image: null,
    _id: null,
  });

  // Fetch Jobs
  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/jobs");
      setJobs(res.data);
    } catch (err) {
      console.log("Error fetching jobs", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Edit Job
  const handleEdit = (job) => {
    setFormData(job);
    setIsSidebarOpen(true);
  };

  // Delete Job
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`);
      setJobs(jobs.filter((j) => j._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // Add / Update Job
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.jobType ||
      !formData.location ||
      !formData.description
    ) {
      return alert("Please fill all fields");
    }

    try {
      const data = new FormData();

      data.append("title", formData.title);
      data.append("jobType", formData.jobType);
      data.append("location", formData.location);
      data.append("salary", formData.salary);
      data.append("description", formData.description);

      // Only append image if selected
      if (formData.image instanceof File) {
        data.append("image", formData.image);
      }

      let res;

      if (formData._id) {
        // UPDATE JOB
        res = await axios.put(
          `http://localhost:5000/api/jobs/${formData._id}`,
          data,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        setJobs(jobs.map((j) => (j._id === formData._id ? res.data : j)));
      } else {
        // CREATE JOB
        res = await axios.post("http://localhost:5000/api/jobs", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        setJobs([...jobs, res.data]);
      }

      // Reset form + close
      setIsSidebarOpen(false);
      setFormData({
        title: "",
        jobType: "",
        location: "",
        salary: "",
        description: "",
        image: null,
        _id: null,
      });
    } catch (err) {
      console.log("Error submitting job", err);
    }
  };

  const filteredJobs = jobs.filter((j) =>
    j.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative">
      {/* Search + Add Job */}
      <div className="flex justify-end items-center gap-3 mb-6">
        <div className="relative w-64">
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search job..."
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button
          onClick={() => {
            setFormData({
              title: "",
              jobType: "",
              location: "",
              salary: "",
              description: "",
              image: null,
              _id: null,
            });
            setIsSidebarOpen(true);
          }}
          className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold shadow-md"
        >
          Add Job
        </button>
      </div>

      {/* Job Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {["Title", "Job Type", "Location", "Salary", "Actions"].map(
                (head) => (
                  <th
                    key={head}
                    className="px-6 py-3 text-left text-gray-700 font-semibold uppercase tracking-wider border-b"
                  >
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, idx) => (
                <tr
                  key={job._id}
                  className={
                    idx % 2 === 0
                      ? "bg-white hover:bg-gray-50"
                      : "bg-gray-50 hover:bg-gray-100"
                  }
                >
                  <td className="px-6 py-3">{job.title}</td>
                  <td className="px-6 py-3">{job.jobType}</td>
                  <td className="px-6 py-3">{job.location}</td>
                  <td className="px-6 py-3">{job.salary || "N/A"}</td>

                  <td className="px-6 py-3 flex gap-3">
                    <button
                      onClick={() => handleEdit(job)}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <FaEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(job._id)}
                      className="text-gray-600 hover:text-red-600"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-6 text-center text-gray-500">
                  No jobs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Sidebar Component */}
      <JobSidebar
        isOpen={isSidebarOpen}
        formData={formData}
        setFormData={setFormData}
        onClose={() => setIsSidebarOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
