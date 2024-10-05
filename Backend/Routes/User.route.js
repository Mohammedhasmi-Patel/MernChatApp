import express from "express";
import { signUp } from "../Controller/User.controller.js";

const router = express.Router();

// when this come into url we need signup function called after.
router.post("/signup", signUp);

export default router;
