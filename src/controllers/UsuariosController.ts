import { Request, Response } from "express"
import { getUsers, getUser } from "../services/users.services";


export const Usuarios = async (req: Request, res: Response) => {
    try {
        const response = await getUsers()
        res.send(response)    
    } catch (error) {
        console.log(error)
    }
}

export const Usuario = async (req: Request, res: Response) => {

    const { id } = req.params;
    const response = await getUser(id)
    res.json(response)
}

export const postUsuario = (req: Request, res: Response) => {

}
