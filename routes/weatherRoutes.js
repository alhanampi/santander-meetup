import express from "express";
import weatherController from "../controllers/weatherController.js";
const { getWeather } = weatherController;

const router = express.Router();

router.get("/:days", getWeather);

export default router;
