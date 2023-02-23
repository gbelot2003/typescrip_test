import { Request } from "express"
import { JwtPayload } from "jsonwebtoken"

interface RequestUser extends Request {
    user?: string | JwtPayload
}

export { RequestUser }