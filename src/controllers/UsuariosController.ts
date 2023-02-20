import { Request, Response } from "express"


export const Usuarios =  (req: Request, res: Response) => {
    res.json({
        msg: 'Usuarios'
    })
}

export const Usuario = (req: Request, res: Response) => {
    res.json({
        msg: "Usuario"
    })
}

export const postUsuario =  (req: Request, res: Response) => {

}
