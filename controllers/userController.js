// UserController
import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Job from "../models/JobModel.js";

export const getCurrentUser = async (req, res) => {
  const userId = req.user.userId;
  try {
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "User not found" });
    }
    res.status(StatusCodes.OK).json({ user, msg: " logged in" });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Server error" });
  }
};

export const getApplicationStats = async (req, res) => {
  const userId = req.user.userId;
  try {
    const jobs = await Job.find({ createdBy: userId });
    const totalJobs = jobs.length;
    const appliedJobs = jobs.filter((job) => job.applied).length;
    const pendingJobs = totalJobs - appliedJobs;

    res.status(StatusCodes.OK).json({
      totalJobs,
      appliedJobs,
      pendingJobs,
    });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Server error" });
  }
};
export const getUserJobs = async (req, res) => {
  const userId = req.user.userId;
  try {
    const jobs = await Job.find({ createdBy: userId });
    if (!jobs) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "No jobs found" });
    }
    res.status(StatusCodes.OK).json({ jobs });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Server error" });
  }
};

export const updateUser = async (req, res) => {
  const userId = req.user.userId;
  const { name, email, password } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { name, email, password },
      { new: true }
    );
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "User not found" });
    }
    res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Server error" });
  }
};
export const validateUpdateUserInput = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "All fields are required" });
  }
  next();
};
export const validateDeleteUserInput = (req, res, next) => {
  const { userId } = req.params;
  if (!userId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "User ID is required" });
  }
  next();
};

export const deleteUser = async (req, res) => {
  const userId = req.user.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "User not found" });
    }
    res.status(StatusCodes.OK).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Server error" });
  }
};
// Limit access to the app status only to admin
export const authorizePermissions = (...rest) => {
  console.log(rest);
  return (req, res, next) => {
    const { role } = req.user;
    if (role !== "admin") {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: "Access denied" });
    }
    next();
  };
};
