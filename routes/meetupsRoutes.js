import express from "express";
import meetupsController from "../controllers/meetupsController.js";
import { authenticate } from "../middlewares/authenticate.js";
const { getMeetups, postMeetups } = meetupsController;

const router = express.Router();

router.get("/", authenticate, getMeetups);
router.post("/", authenticate, postMeetups);

export default router;
