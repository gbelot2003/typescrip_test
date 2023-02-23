import { Response, Request } from "express"
import { handleHttp } from "../utils/error.handle"
import { registerNewUser } from "../services/auth.services"


export const registerController = async (req: Request, res: Response) => {
    try {
        const body = (<any>req).body
        const responseUser = await registerNewUser(body)
        res.send(responseUser)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_REGISTER_USER', error)
    }
}