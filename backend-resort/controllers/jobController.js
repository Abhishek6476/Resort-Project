import Job from "../models/Job.js";
import fs from "fs";

// CREATE JOB
export const createJob = async (req, res) => {
  try {
    const newJob = new Job({
      title: req.body.title,
      jobType: req.body.jobType,   //  updated
      location: req.body.location,
      salary: req.body.salary,
      description: req.body.description,
      image: req.file ? req.file.filename : null,
    });

    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    console.log("Job Create Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// UPDATE JOB
export const updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    job.title = req.body.title;
    job.jobType = req.body.jobType;   //  updated
    job.location = req.body.location;
    job.salary = req.body.salary;
    job.description = req.body.description;

    if (req.file) {
      // delete old image
      if (job.image) fs.unlink(`uploads/${job.image}`, () => {});
      job.image = req.file.filename;
    }

    await job.save();
    res.json(job);
  } catch (error) {
    console.log("Job Update Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// GET ALL JOBS
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    console.log("Get Jobs Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// DELETE JOB
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    if (job.image) fs.unlink(`uploads/${job.image}`, () => {});

    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    console.log("Delete Job Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
