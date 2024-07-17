import express from "express";
import {
    getAllMessages,
    sendMessage,
} from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";
import { getAllDoctors } from "../controller/userController.js";
const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", isAdminAuthenticated, getAllMessages);


export default router;