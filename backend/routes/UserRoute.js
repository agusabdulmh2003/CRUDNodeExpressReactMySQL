import express from "express";
import { getAllUsers } from "../controllers/UserController.js"; // Corrected import

const router = express.Router();

router.get('/users', getAllUsers); // Use the correct function

export default router;
