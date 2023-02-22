import { UsersInstance } from "../interfaces/user.interface";
import user from "../models/user";

export const getUsers = async () => {
    const responseUsers = await user.findAll()
    return responseUsers
}

export const getUser = async (_id: string) => {
    const responseUser = await user.findByPk(_id)
    return responseUser
}
