// import express from "express";
// import multer from "multer";
// import path from "path";
// import { submitApplication } from "../controllers/jobController.js";

// const router = express.Router();

// //  Multer Storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/resumes");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// //  Allowed file types
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = [
//     "application/pdf",
//     "application/msword",
//     "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//     "application/vnd.ms-excel",
//     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     "image/jpeg",
//     "image/png",
//   ];

//   if (allowedTypes.includes(file.mimetype)) cb(null, true);
//   else cb(new Error("Invalid file type! Only PDF, DOC, XLS, JPG, PNG allowed."));
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

// router.post("/", upload.single("resume"), submitApplication);

// export default router;


import express from "express";
import multer from "multer";
import path from "path";
import { submitApplication } from "../controllers/jobController.js";

const router = express.Router();

// 🧾 Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // store files in /uploads
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

// 🧾 File Type Validation
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error("Invalid file type. Only PDF/DOC/DOCX allowed."), false);
  }
  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB
});

// ✅ POST Route for Job Application
router.post("/", upload.single("resume"), submitApplication);

export default router;
