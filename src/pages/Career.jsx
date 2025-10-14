
 import React, { useState, useEffect, useRef } from "react";
 import carrier from "../assets/carrier.jpg";
 import front from "../assets/frontdesk.jpg";
 import house from "../assets/housekeep.jpg";
 import chef from "../assets/chef.jpg";
 import food from "../assets/food.jpg";
 import event from "../assets/event.jpg";
 import security from "../assets/security.jpg";
 import resume from "../assets/job_apply1.jpg";

 const Career = () => {
  const jobs = [
    {
      title: "Front Desk Associate",
      location: "Noida, India",
      type: "Full-Time",
      description:
        "Responsible for welcoming guests, managing check-ins/check-outs, and ensuring excellent customer service.",
      related: ["Receptionist", "Guest Relations Executive"],
      img: front,
    },
    {
      title: "Housekeeping Staff",
      location: "Noida, India",
      type: "Full-Time",
      description:
        "Maintain cleanliness and hygiene in guest rooms and public areas, ensuring high standards of hospitality.",
      related: ["Room Attendant", "Laundry Staff"],
      img: house,
    },
    {
      title: "Executive Chef",
      location: "Noida, India",
      type: "Full-Time",
      description:
        "Plan menus, supervise kitchen staff, and deliver exceptional dining experiences to our guests.",
      related: ["Sous Chef", "Kitchen Manager"],
      img: chef,
    },
    {
      title: "Food & Beverage Manager",
      location: "Noida, India",
      type: "Full-Time",
      description:
        "Oversee all food and beverage operations, ensuring top-quality service, menu design, and guest satisfaction.",
      related: ["Restaurant Manager", "Banquet Manager"],
      img: food,
    },
    {
      title: "Event Coordinator",
      location: "Noida, India",
      type: "Full-Time",
      description:
        "Plan and execute events, manage client communications, coordinate with vendors, and ensure smooth event operations.",
      related: ["Banquet Coordinator", "Wedding Planner"],
      img: event,
    },
    {
      title: "Security Supervisor",
      location: "Noida, India",
      type: "Full-Time",
      description:
        "Monitor hotel premises, manage the security team, and ensure guest and staff safety at all times.",
      related: ["Security Guard", "Safety Officer"],
      img: security,
    },
  ];

  const formRef = useRef(null);


const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  position: "",
  resume: null,
});
const [status, setStatus] = useState("");
const [isSending, setIsSending] = useState(false);
const timeoutRef = useRef(null);
const fileInputRef = useRef(null);
const [showPopup, setShowPopup] = useState(false);


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

const handleFileChange = (e) => {
  const file = e.target.files[0];
  setFormData(prev => ({ ...prev, resume: file }));
};

const validateForm = () => {
  const { name, email, phone, position, resume } = formData;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  if (!name || !email || !phone || !position || !resume) {
    setStatus("Please fill all fields and upload your resume");
    return false;
  }
  if (!emailRegex.test(email)) {
    setStatus("Invalid email address");
    return false;
  }
  if (!phoneRegex.test(phone)) {
    setStatus("Invalid phone number (10 digits required)");
    return false;
  }

  const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg"];
  if (!allowedTypes.includes(resume.type)) {
    setStatus("Resume must be PDF, DOC or DOCX");
    return false;
  }
  if (resume.size > 2 * 1024 * 1024) {
    setStatus("Resume size must be under 2 MB");
    return false;
  }

  return true;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setStatus(""), 9000);
    return;
  }

  setIsSending(true);
  setStatus("Sending application...");

  const body = new FormData();
  body.append("name", formData.name);
  body.append("email", formData.email);
  body.append("phone", formData.phone);
  body.append("position", formData.position);
  body.append("resume", formData.resume);



  try {
    const res = await fetch("http://localhost:5000/api/job-application", {
      method: "POST",
      body,
    });

    const data = await res.json();
    setStatus(data.msg || (res.ok ? "Application submit Successfully!" : "Submission failed"));
    if (res.ok) {
      setFormData({ name: "", email: "", phone: "", position: "", resume: null });
      if (fileInputRef.current) fileInputRef.current.value = "";

      setShowPopup(true);

    }
  } catch (err) {
    console.error(err);
    setStatus("Server error. Please try later.");
  } finally {
    setIsSending(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setStatus(""), 9000);
  }
};


useEffect(() => {
  return () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };
}, []);




  const handleApplyClick = (jobTitle) => {
    setFormData((prev) => ({ ...prev, position: jobTitle }));
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
   
<div className="flex flex-col">
  {/* Header Section */}
  <div className="relative w-full h-[70vh]">
    {/* Banner Image */}
    <img 
      src={resume} 
      alt="Career Banner" 
      className="w-full h-full object-cover"
    />

    {/* Overlay with Gradient and Centered Text */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 flex items-center justify-center px-8">
      <div className="text-white max-w-2xl text-center">
         <h1 className="text-5xl font-bold mb-3">Career Opportunities</h1>
        <p className="text-lg text-gray-200">
           <span className="text-blue-800">Home</span> &gt; Career
         </p>
       </div>
     </div>
   </div>


       {/*  Intro */}
       <section className="pt-12 px-8 max-w-full mx-auto text-center">
   <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
     Work With Us
   </h2>

  <p className="text-gray-700 text-justify max-w-full mx-auto text-[16px] leading-[28px]">
     We believe in teamwork, creativity, and hospitality excellence. Whether
     it’s a grand wedding, a corporate meeting, or a private event, our staff
     plays a key role in delivering memorable experiences.
     At our resort, every team member contributes to a welcoming environment
     that exceeds guest expectations. We invest in training and professional
     development to help you grow in your career.
     Joining our team means becoming part of a community that values respect,
     integrity, and innovation. We encourage diversity and inclusion to create
     a workplace where everyone can thrive.
   </p>
 </section>


       {/*  Job Listings */}
       <section className="py-12 px-6 max-w-6xl mx-auto">
         <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
           Current Openings
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={job.img}
                alt={job.title}
                className="h-52 w-full object-cover"
              />
               <div className="p-6">
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
                   {job.title}
                 </h3>
                 <p className="text-sm text-gray-500 mb-3">
                   📍 {job.location} • 💼 {job.type}
                 </p>
                 <p className="text-gray-600 mb-4">{job.description}</p>
               
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*  Why Join Us */}
      <section className="py-16 bg-blue-50 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Join Us</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Growth Opportunities",
              desc: "Enhance your skills and build a rewarding career in the hospitality industry.",
            },
            {
              title: "Inclusive Culture",
              desc: "We celebrate diversity and foster a welcoming workplace for everyone.",
            },
            {
              title: "Exciting Events",
              desc: "Work on weddings, parties, and corporate functions that make lasting memories.",
             },
           ].map((item, idx) => (
             <div
               key={idx}
               className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
             >
               <h3 className="text-xl font-semibold text-gray-800 mb-3">
                 {item.title}
               </h3>
               <p className="text-gray-600">{item.desc}</p>
             </div>
          ))}
        </div>
      </section>

      {/*  Application Form */}
      <section ref={formRef} className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Job Application
        </h2>
 <p className="text-center text-gray-600 mt-2 mb-8">
          Fill out the form below to start your career journey with us.
        </p> 
        <form
           onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-md space-y-6"
        >
          {[
            { label: "Full Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone Number", name: "phone", type: "tel" },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block text-gray-700 font-medium mb-2">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
               />
             </div>
           ))}

           <div>
             <label className="block text-gray-700 font-medium mb-2">
               Position Applied For
             </label>
             <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 transition"
            >
              <option value="">Select a position</option>
              {jobs.map((job, idx) => (
                <React.Fragment key={idx}>
                  <option value={job.title}>{job.title}</option>
                  {job.related?.map((rel, i) => (
                    <option key={`${idx}-rel-${i}`} value={rel}>
                      {rel}
                    </option>
                  ))}
                </React.Fragment>
              ))}
            </select>
          </div>

           <div>
            <label className="block text-gray-700 font-medium mb-2">
               Upload Resume
             </label>
          
              <input
                ref={fileInputRef}
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx,.jpg,.jpeg"
                onChange={handleFileChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 transition" />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-blue-800 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition disabled:opacity-50"
          >
            {isSending ? "Sending..." : "Submit Application"}
          </button>

          {status && (
            <p className={`text-sm mt-3 font-medium ${status.toLowerCase().includes("success") || status.toLowerCase().includes("submitted") ? "text-blue-800" : "text-red-600"}`}>{status}</p>
          )}
          

        </form>
      </section>
    
    {/* Application CTA */}
          {/* <section
          className="relative py-16 px-8 text-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${carrier})` }}>
          <div className="absolute inset-0 bg-black/20"></div>

           <h3 className="text-2xl font-semibold text-gray-800 mb-4">Didn’t find your role?</h3>
           <p className="text-gray-600 mb-6">We’re always looking for passionate individuals. Send us your resume and we’ll be in touch!</p>
          <a  href="mailto:careers@resorthotel.com"
            className="inline-block bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Send Resume
          </a>

        </section> */}




        {/* Application CTA */}
<section
  className="relative py-16 px-8 text-center bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${carrier})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10">
    <h3 className="text-2xl font-semibold text-white mb-4">Didn’t find your role?</h3>
    <p className="text-gray-200 mb-6">
      We’re always looking for passionate individuals. Send us your resume and we’ll be in touch!
    </p>

    {/* Hidden File Input */}
    <input
      type="file"
      ref={fileInputRef}
      onChange={async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const allowedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "image/jpeg",
          "image/png",
        ];

        if (!allowedTypes.includes(file.type)) {
          alert(" Only PDF, DOC, DOCX, JPG, PNG files are allowed!");
          return;
        }

        const formData = new FormData();
        formData.append("resume", file);

        try {
          const res = await fetch("http://localhost:5000/api/job-application/upload-resume", {
            method: "POST",
            body: formData,
          });


          const data = await res.json();
          if (res.ok) {
            alert(" Resume sent successfully!");
          } else {
            alert(" Upload failed: " + data.error);
          }
        } catch (err) {
          console.error(err);
          alert(" Server error. Try again later.");
        }
      }}
      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
      className="hidden"
    />

    {/* Upload Button */}
    <button
      onClick={() => fileInputRef.current.click()}
      className="inline-block bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
    >
      Send Resume
    </button>
  </div>
</section>

        </div>
    
  );
};

export default Career;



// import React, { useState } from "react";

// const Career = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     position: "",
//     resume: null,
//   });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const allowedTypes = [
//       "application/pdf",
//       "application/msword",
//       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       "application/vnd.ms-excel",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//       "image/jpeg",
//       "image/png",
//     ];

//     if (!allowedTypes.includes(file.type)) {
//       alert("Only PDF, DOC, XLS, JPG, PNG files allowed!");
//       e.target.value = "";
//       return;
//     }

//     if (file.size > 5 * 1024 * 1024) {
//       alert("File size must be < 5MB");
//       e.target.value = "";
//       return;
//     }

//     setFormData({ ...formData, resume: file });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("phone", formData.phone);
//     data.append("position", formData.position);
//     data.append("resume", formData.resume);

//     try {
//       const res = await fetch("http://localhost:5000/api/job-application", {
//         method: "POST",
//         body: data,
//       });
//       const result = await res.json();

//       setStatus(result.msg);

//       if (res.ok) {
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           position: "",
//           resume: null,
//         });
//       }

//       // Auto clear message
//       setTimeout(() => setStatus(""), 5000);
//     } catch (err) {
//       setStatus("Error submitting application");
//       setTimeout(() => setStatus(""), 5000);
//     }
//   };

//   return (
//     <section className="py-16 px-6 md:px-20 bg-white">
//       <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
//         Job Application
//       </h2>
//       <p className="text-center text-gray-600 mt-2 mb-8">
//         Fill out the form below to start your career journey with us.
//       </p>
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-md space-y-6"
//       >
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Full Name"
//           required
//           className="w-full border px-4 py-3 rounded-lg"
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//           className="w-full border px-4 py-3 rounded-lg"
//         />
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Phone Number"
//           required
//           className="w-full border px-4 py-3 rounded-lg"
//         />
//         <input
//           type="text"
//           name="position"
//           value={formData.position}
//           onChange={handleChange}
//           placeholder="Position Applied For"
//           required
//           className="w-full border px-4 py-3 rounded-lg"
//         />
//         <input
//           type="file"
//           name="resume"
//           accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
//           onChange={handleFileChange}
//           required
//           className="w-full border px-4 py-3 rounded-lg"
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-800 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg"
//         >
//           Submit Application
//         </button>

//         {status && <p className="text-center text-green-600 mt-4">{status}</p>}
//       </form>
//     </section>
//   );
// };

// export default Career;
