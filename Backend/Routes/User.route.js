import express from "express";
import {
  signUp,
  login,
  logout,
  allUsers,
} from "../Controller/User.controller.js";

const router = express.Router();

// when this come into url we need signup function called after.
router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);
router.get("/allusers", allUsers);

export default router;
