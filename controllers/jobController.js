import Job from "../models/JobModel.js"; // Ensure this path is correct
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";
// Get all jobs controller
export const getAllJobs = async (req, res) => {
  console.log(req.user);
  try {
    const jobs = await Job.find({ createdBy: req.user.userId }); // Fetch all jobs from the database
    res.status(StatusCodes.OK).json({ jobs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single job by ID
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id); // Use findById to fetch by MongoDB ID
    res.status(StatusCodes.OK).json({ job });
  } catch (error) {
    console.error(error);
  }
};

// Create a new job
export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  try {
    const job = await Job.create(req.body); // Create a new job in the database
    // const { company, position, jobStatus, jobType, jobLocation } = req.body;
    // const job = await Job.create({
    //   company,
    //   position,
    //   jobStatus,
    //   jobType,
    //   jobLocation,
    // });
    res.status(StatusCodes.CREATED).json({ job });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update a job by ID
export const updateJob = async (req, res) => {
  try {
    const { title, location, company, date, description, applyLink } = req.body;
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      { title, location, company, date, description, applyLink },
      { new: true }
    ); // Updates job in database and returns the updated document

    if (!job) {
      throw new NotFoundError(`Job with id ${req.params.id} not found`);
    }

    res.status(StatusCodes.OK).json({ updatedJob: job });
  } catch (error) {
    console.error(error);
    throw new NotFoundError(`Job with id ${req.params.id} not found`);
  }
};

// Delete a job by ID -- creating database logics
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id); // Deletes job by ID
    res.status(StatusCodes.OK).json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error(error);

    // res.status(500).json({ message: "Server error" });
  }
};
