import { Request, Response } from "express"
import user from "../models/user"


/**
 * 
 * @param req 
 * @param res 
 * url: /usuarios/
 */
export const Usuarios = async (req: Request, res: Response) => {

    const usuarios = await user.findAll();
    res.json(usuarios)

}

/**
 * 
 * @param req 
 * @param res 
 * url: /ususarios/:id
 */
export const Usuario = async (req: Request, res: Response) => {

    const { id } = req.params;
    const usuario = await user.findByPk(id);

    res.json(usuario)
}

export const postUsuario = (req: Request, res: Response) => {

}
