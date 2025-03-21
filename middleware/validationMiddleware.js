// import { body, param, validationResult } from "express-validator";
// import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
// import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
// import Job from "../models/JobModel.js";
// import User from "../models/UserModel.js";
// //express validator function middleware --check line 26 app.post("/api/v1/test",

// const withValidationErrors = (validateValues) => {
//   return [
//     validateValues,
//     (req, res, next) => {
//       //don't forget about next
//       const errors = validationResult(req);x
//       if (!errors.isEmpty()) {
//         const errorMessages = errors.array().map((err) => err.msg); //err.message is an error
//         // return res.status(400).json({ errors: errorMessages });
//         if (
//           errorMessages[0].startsWith("Job with") ||
//           errorMessages[0].startsWith("Invalid")
//         ) {
//           throw new NotFoundError(errorMessages);
//         } else throw new BadRequestError(`Validation failed ${errorMessages}`);
//       }
//       // console.log(errors.isEmpty());
//       next();
//     },
//   ];
// };

// export const validateJobInput = withValidationErrors([
//   body("company").notEmpty().withMessage("company is required"),
//   body("position").notEmpty().withMessage("Position is required"),
//   body("jobLocation").notEmpty().withMessage("Job Location is required"),
//   body("jobStatus")
//     .isIn(Object.values(JOB_STATUS))
//     .withMessage("Invalid Job Status"),
//   body("jobType")
//     .isIn(Object.values(JOB_TYPE))
//     .withMessage("Invalid Job Type "),
// ]);

// //34 - validate
// import mongoose from "mongoose";
// export const validateIdParam = withValidationErrors([
//   param("id").custom(async (value) => {
//     const isValidId = mongoose.Types.ObjectId.isValid(value);
//     if (!isValidId) throw new BadRequestError("Invalid mongoDB id");
//     const job = await Job.findById(value); // Use findById to fetch by MongoDB ID
//     if (!job) {
//       throw new NotFoundError(`Job with id ${value} not found`);
//       // return res.status(404).json({ message: "Job not found" });
//     }
//     // .withMessage("Invalid MongoDB Object ID"), removed
//   }),
// ]);

// //=========39 validate register use
// export const validateRegisterInput = withValidationErrors([
//   body("name").notEmpty().withMessage("Please enter your name"),
//   body("email")
//     .notEmpty()
//     .isEmail()
//     .withMessage("Please enter a valid email")
//     .custom(async (email) => {
//       const user = await User.findOne({ email });
//       if (user) throw new BadRequestError("Email already exists  ");
//       // return res.status(400).json({ message: "Email already exists" });
//     }),
//   body("password")
//     .notEmpty()
//     .withMessage("Password must be at least 8 characters long")
//     .isLength({ min: 8 }),
//   body("confirmPassword")
//     .custom((value, { req }) => value === req.body.password)
//     .withMessage("Passwords do not match"),
//   body("lastName").notEmpty().withMessage("Please enter your last name"),
//   body("location").notEmpty().withMessage("Please enter your location"),
//   body("role")
//     .optional()
//     .isIn(["user", "admin"])
//     .withMessage("Please select a valid role"),
// ]);
// //==//
import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import Job from "../models/JobModel.js";
import User from "../models/UserModel.js";
import mongoose from "mongoose";

/**
 * Higher-order function that creates validation middleware
 * @param {Array} validateValues - Array of express-validator validation chains
 * @returns {Array} - Array containing validation chains and error handling middleware
 */
const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      // Process validation results
      const errors = validationResult(req);

      // If there are validation errors, handle them appropriately
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((err) => err.msg);

        // Determine error type based on error message content
        if (
          errorMessages[0].startsWith("Job with") ||
          errorMessages[0].startsWith("Invalid") ||
          errorMessages[0].startsWith("No job")
        ) {
          throw new NotFoundError(errorMessages);
        } else {
          throw new BadRequestError(errorMessages.join(", "));
        }
      }

      // If validation passes, continue to the next middleware
      next();
    },
  ];
};

/**
 * Validates job input fields when creating or updating a job
 */
export const validateJobInput = withValidationErrors([
  body("company").notEmpty().withMessage("Company is required"),
  body("position").notEmpty().withMessage("Position is required"),
  body("jobLocation").notEmpty().withMessage("Job location is required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage(
      `Invalid job status. Status must be one of: ${Object.values(
        JOB_STATUS
      ).join(", ")}`
    ),
  body("jobType")
    .isIn(Object.values(JOB_TYPE))
    .withMessage(
      `Invalid job type. Type must be one of: ${Object.values(JOB_TYPE).join(
        ", "
      )}`
    ),
]);

/**
 * Validates MongoDB ID parameter and checks if the job exists
 */
export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    // First validate if the ID is a valid MongoDB ObjectId
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) {
      throw new BadRequestError("Invalid MongoDB ID format");
    }

    // Then check if a job with this ID exists
    const job = await Job.findById(value);
    if (!job) {
      throw new NotFoundError(`No job found with id: ${value}`);
    }

    // Store the job in the request object for later use (optimization)
    req.job = job;
    return true;
  }),
]);

/**
 * Validates user registration input fields
 */
export const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("Name is required").trim(),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail()
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("Email already exists");
      }
      return true;
    }),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),

  body("confirmPassword")
    .notEmpty()
    .withMessage("Please confirm your password")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),

  body("lastName").notEmpty().withMessage("Last name is required").trim(),

  body("location").notEmpty().withMessage("Location is required").trim(),

  body("role")
    .optional()
    .isIn(["user", "admin"])
    .withMessage("Role must be either 'user' or 'admin'"),
]);

/**
 * Validates user login input fields
 */
export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),

  body("password").notEmpty().withMessage("Password is required"),
]);

/**
 * Validates job update permissions (user can only update their own jobs)
 */
export const validateJobUpdatePermission = withValidationErrors([
  param("id").custom(async (jobId, { req }) => {
    // First validate if the ID is a valid MongoDB ObjectId
    const isValidId = mongoose.Types.ObjectId.isValid(jobId);
    if (!isValidId) {
      throw new BadRequestError("Invalid MongoDB ID format");
    }

    // Find the job
    const job = await Job.findById(jobId);
    if (!job) {
      throw new NotFoundError(`No job found with id: ${jobId}`);
    }

    // Check if the current user is the creator of the job
    // This assumes req.user.userId is set by authentication middleware
    if (
      req.user &&
      req.user.role !== "admin" &&
      job.createdBy.toString() !== req.user.userId
    ) {
      throw new BadRequestError("Not authorized to update this job");
    }

    // Store the job in the request object for later use
    req.job = job;
    return true;
  }),
]);
