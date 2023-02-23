import { Response, Request } from "express"
import { handleHttp } from "../utils/error.handle"
import { loginuser, registerNewUser } from "../services/auth.services"


export const registerController = async (req: Request, res: Response) => {
    try {
        const body = (<any>req).body
        const responseUser = await registerNewUser(body)
        res.send(responseUser)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_REGISTER_USER', error)
    }
}

export const loginController = async (req: Request, res: Response) => {
    try {
        const body = (<any>req).body
        const { email, password } = body
        const responseUser = await loginuser({ email, password })
        res.send(responseUser)
    } catch (error) {

    }
}