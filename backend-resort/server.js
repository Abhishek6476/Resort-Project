
import express from "express";
import dotenv from "dotenv";
dotenv.config();  
import cors from "cors";
import connectDB from "./config/db.js";
import eventRoutes from "./routes/eventRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import bookingRoutes from "./routes/bookingRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js"; 
import reviewRoutes from "./routes/reviewRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import jobApplicationRoutes from "./routes/jobApplicationRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";


// dotenv.config();
connectDB();  // MongoDB connect


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

app.use("/invoices", express.static("invoices"));


// ✅ All API routes
app.use("/api", eventRoutes);

// Admin login
app.use("/api/admin", adminRoutes);

app.use("/api/contact", contactRoutes);

app.use("/api/job-applications", jobApplicationRoutes);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/rooms", roomRoutes);

app.use("/api/bookings", bookingRoutes);

app.use("/api/gallery", galleryRoutes); 

app.use("/api/reviews", reviewRoutes);

app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
