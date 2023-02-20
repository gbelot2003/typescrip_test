import { Request, Response } from "express"



export const Usuario = (req: Request, res: Response) => {
    res.json({
        msg: "Usuario"
    })
}

export const Usuarios =  (req: Request, res: Response) => {
    res.json({
        msg: 'Usuarios'
    })
}

export const postUsuario =  (req: Request, res: Response) => {

}
