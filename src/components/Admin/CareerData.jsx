import React, { useEffect, useState } from "react";

export default function CareerData() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/job-application")
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.error("Error fetching applications:", err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Career Applications</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left p-3">Name</th>
            <th className="text-left p-3">Email</th>
            <th className="text-left p-3">Phone</th>
            <th className="text-left p-3">Position</th>
            <th className="text-left p-3">Resume</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={index} className="border-b">
              <td className="p-3">{app.name}</td>
              <td className="p-3">{app.email}</td>
              <td className="p-3">{app.phone}</td>
              <td className="p-3">{app.position}</td>
              <td className="p-3">
                {app.resume ? (
                  <a
                    href={`http://localhost:5000/uploads/${app.resume}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Resume
                  </a>
                ) : (
                  "No file"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
