import { Router } from "express";

import {
  getAllJobs,
  createJob,
  getJobById,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

const router = Router();

router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParam, getJobById)
  .patch(validateIdParam, updateJob)
  .delete(validateIdParam, deleteJob);

//router.get('/, getAllJobs)
//router.post('/', createJob)
export default router;
