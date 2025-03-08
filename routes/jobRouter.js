import { Router } from "express";

const router = Router();

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

router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParam, getJobById)
  .patch(validateIdParam, updateJob)
  .delete(validateIdParam, deleteJob);

//router.get('/, getAllJobs)
//router.post('/', createJob)
export default router;
