import { Router } from "express";
import { getUsers, logUser, registerUser } from "../controllers/auth";
import { checkSession } from "../middleware/session";

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
 * Unicamente deberian de acceder personas autorizadas con JWT valido
 */
router.get("/", checkSession, getUsers);

export { router };
