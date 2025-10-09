
// import express from "express";
// import multer from "multer";
// import path from "path";
// import { submitApplication } from "../controllers/jobController.js";


// import JobApplication from "../models/JobApplication.js";


// const router = express.Router();

// //  Multer Storage Configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); 
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = Date.now() + "-" + file.originalname;
//     cb(null, uniqueName);
//   },
// });

// //  File Type Validation
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = [
//     "application/pdf",
//     "application/msword",
//     "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//     "image/jpeg",

//   ];
//   if (!allowedTypes.includes(file.mimetype)) {
//     return cb(new Error("Invalid file type. Only PDF/DOC/DOCX/JPG/JPEG   files allowed."), false);
//   }
//   cb(null, true);
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB
// });

// //  POST Route for Job Application
// router.post("/", upload.single("resume"), submitApplication);

// // ✅ Route 2: Only Resume Upload
// router.post("/upload-resume", upload.single("resume"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded" });
//     }

//     // Save in DB
//     const newEntry = new JobApplication({
//       name: "N/A",
//       email: "N/A",
//       phone: "N/A",
//       position: "General Resume",
//       resume: req.file.filename,
//     });

//     await newEntry.save();

//     res.json({ message: "Resume uploaded successfully!" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error while uploading resume" });
//   }
// });

// export default router;




import express from "express";
import multer from "multer";
import path from "path";
import { submitApplication } from "../controllers/jobController.js";


import JobApplication from "../models/JobApplication.js";


const router = express.Router();

//  Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

//  File Type Validation
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/jpeg",

  ];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error("Invalid file type. Only PDF/DOC/DOCX/JPG/JPEG   files allowed."), false);
  }
  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB
});

//  POST Route for Job Application
router.post("/", upload.single("resume"), submitApplication);

// ✅ Route 2: Only Resume Upload
router.post("/upload-resume", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Save in DB
    const newEntry = new JobApplication({
      // name: "N/A",
      // email: "N/A",
      // phone: "N/A",
      position: "General Resume",
      resume: req.file.filename,
    });

    await newEntry.save();

    res.json({ message: "Resume uploaded successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while uploading resume" });
  }
});



//  GET route to fetch all job applications

 router.get("/", async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({ appliedAt: -1 });
    res.json(applications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error fetching applications" });
  }
});
//delete 
router.delete("/:id", async (req, res) => {
  try {
    await JobApplication.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting", error: err });
  }
});

//put 

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateFields = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      position: req.body.position,
    };

    if (req.body.resume) {
      updateFields.resume = req.body.resume;
    }

    const updatedApp = await JobApplication.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    if (!updatedApp) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({ message: "Application updated", data: updatedApp });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Error updating application", error: err.message });
  }
});
export default router;
