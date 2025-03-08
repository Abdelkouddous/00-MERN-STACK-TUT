// Description: Handles routing for user authentication
import { Router } from "express";

const router = Router();
import { login, register } from "../controllers/authController.js";
import { validateRegisterInput } from "../middleware/validationMiddleware.js";

//auth routes

router.post("/register", validateRegisterInput, register);
router.post("/login", login);

export default router;
