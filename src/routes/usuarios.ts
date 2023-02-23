import { Router } from "express";
import { Usuario, Usuarios } from "../controllers/UsuariosController"
import { session } from "../middlewares/session.middleware";

const router = Router()

/**
 * GET
 * /usuarios/
 */
router.get("/", session, Usuarios)

/**
 * GET
 * /usuarios/?id
 */
router.get("/:id", session, Usuario)


export { router }
