import { Request, Response, Router } from "express";
import { registerController } from "../controllers/RegisterController"


const router = Router();

/**
 * http://localhost/auth/register
 */
router.post("/register", registerController)

/*
 * http://localhost3002/auth/login
*/
//router.post("/login", loginController)

export { router }