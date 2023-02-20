import express, { Application } from "express"
import { router } from "../routes"

export class Server {

    private app : Application
    private port: string

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3000'

    }

    routes(){
        this.app.use(router)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }
}