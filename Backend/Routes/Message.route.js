import express from "express";
import { sendMessage } from "../Controller/Message.controller.js";
import secureRoute from "../Middleware/sucureRoute.js";

const router = express.Router();

router.post("/send/:id", secureRoute, sendMessage);

export default router;
