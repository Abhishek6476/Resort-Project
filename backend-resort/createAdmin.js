import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./models/Admin.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const createAdmin = async () => {
  try {
    const exists = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
    if (exists) {
      console.log("Admin already exists");
      process.exit(0);
    }

    const admin = new Admin({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD // hashed automatically
    });
    await admin.save();
    console.log("Admin created successfully");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

createAdmin();
