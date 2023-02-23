import { Request, Response, Router } from "express";
import { registerController, loginController } from "../controllers/RegisterController"


const router = Router();

/**
 * http://localhost3000/auth/register
 */
router.post("/register", registerController)

/*
 * http://localhost3000/auth/login
*/
router.post("/login", loginController)

export { router }