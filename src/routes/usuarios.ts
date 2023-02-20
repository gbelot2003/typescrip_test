import { Router, Request, Response } from "express";
import { Usuario, Usuarios } from "../controllers/UsuariosController"

const router = Router()

/**
 * GET
 * /usuarios/
 */
router.get("/", Usuarios)

/**
 * GET
 * /usuarios/?id
 */
router.get("/:id", Usuario)


export { router }
