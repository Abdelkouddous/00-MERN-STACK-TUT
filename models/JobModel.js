import mongoose from "mongoose";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: JOB_STATUS.PENDING,
    },
    jobType: {
      type: String,
      enum: Object.values(JOB_TYPE),
      default: JOB_TYPE.FULL_TIME,
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
// const JobSchema = new mongoose.Schema(
//   {
//     //  id: { type: String, required: true },
//     //  title: { type: String, required: true },
//     //  company: { type: String, required: true },
//     //  location: { type: String, required: true },
//     //  date: { type: Date, required: true },
//     //  description: { type: String, required: true },
//     //  applyLink: { type: String, required: true },
//     company: String,
//     position: String,

//     jobStatus: {
//       type: String,
//       // required: true,
//       enum: ["interview", "pending", "declined", "pending"],
//       default: "pending",
//     },
//     jobType: {
//       // required: true,
//       type: String,
//       enum: ["full-time", "part-time", "freelance", "contract"],
//       default: "full-time",
//     },
//     jobLocation: {
//       // required: true,
//       type: String,
//       enum: ["remote", "onsite", "both"],
//       default: "remote",
//     },
//     jobDescription: String,
//     jobSalary: String,
//     jobApplyLink: String,
//     jobDate: Date,
//     jobSkills: [String],
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.model("Job", JobSchema);
