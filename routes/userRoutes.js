import express from "express";
import userController from "../controllers/usersController.js";
const { getUsers, createUser, getLogin, postLogin } = userController;

const router = express.Router();

router.get("/get", getUsers);
router.post("/register", createUser);
router.get("/login", getLogin);
router.post("/login", postLogin);

export default router;
