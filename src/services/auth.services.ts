import { Auth } from "../interfaces/Auth.interface";
import { UsersAttributes } from "../interfaces/user.interface";
import user from "../models/user";
import { generateToker } from "../utils/jwt.handler";
import { encrypt, verify } from "../utils/password.handler";

const registerNewUser = async ({ name, email, password }: UsersAttributes) => {

    const check = await user.findOne({ where: { email: email } })

    if (check === null) {
        const pass = await encrypt(password)

        console.log(pass)

        const registerNewUser = await user.create({ name: name, email: email, password: pass, state: true })

        return registerNewUser
    } else {
        return "USER_ALREADY_EXIST"
    }

}

const loginuser = async ({ email, password }: Auth) => {
    const checkIs = await user.findOne({ where: { email: email } })
    if (!checkIs) return "NOT_FOUND_USER"
    const passwordHash = checkIs.password // encriptado
    const isCorrect = await verify(password, passwordHash)
    if (!isCorrect) return "PASSWORD_INCORRECT"
    const token = generateToker(checkIs.email)

    return token
}

export { registerNewUser, loginuser }