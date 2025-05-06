import express from "express";
import { getUser } from "../controllers/usersController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// READ
router.get("/:id", verifyToken, getUser);

export default router;