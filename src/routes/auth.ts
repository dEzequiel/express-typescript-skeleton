import { Router } from "express";
import { getUsers, logUser, registerUser } from "../controllers/auth";

const router = Router();

/**
 * /auth/register [POST]
 */
router.post("/register", registerUser);

/**
 * /auth/login [POST]
 */
router.post("/login", logUser);

/**
 * /auth [GET]
 */
router.get("/", getUsers);

export { router };
