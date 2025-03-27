import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
//routes imports
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
//middlewares imports
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 5100;

// Middleware

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/auth", authRouter);
app.get("/", (req, res) => res.send("Hello, world"));

// Connect to MongoDB with retry logic
const connectDB = async () => {
  const MAX_RETRIES = 5;
  let retries = 0;

  while (retries < MAX_RETRIES) {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        connectTimeoutMS: 10000,
        retryWrites: true,
        retryReads: true,
      });
      console.log("Connected to MongoDB successfully!");
      return true;
    } catch (error) {
      retries++;
      console.error(
        `Connection attempt ${retries} failed:`,
        error,
        error.message
      );
      if (retries === MAX_RETRIES) {
        console.error(" Max retries reached. Exiting...");
        return false;
      }
      // Wait before retrying
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
};

// Start server
const start = async () => {
  try {
    const connected = await connectDB();
    if (connected) {
      app.listen(port, () => {
        console.log(`Server running on port ${port}...`);
      });
    } else {
      process.exit(1);
    }
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
};

start();

// Error handling middleware
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Invalid URL, please check your endpoint",
  });
});
app.use(errorHandlerMiddleware);
