import { Router } from "express"
import { getUsers, logUser, registerUser } from "../controllers/auth"

const router  = Router()

router.post("/register", registerUser)
router.post("/login", logUser)
router.get("/", getUsers)

export { router }