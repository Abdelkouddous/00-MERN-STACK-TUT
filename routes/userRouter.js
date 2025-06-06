import { Router } from "express";
// Description: Handles routing for user-related operations
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
  authorizePermissions,
  validateUpdateUserInput,
} from "../controllers/userController.js";

const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [
  authorizePermissions("admin"),
  getApplicationStats,
]);
router.get("/update-user", validateUpdateUserInput, updateUser);

export default router;
