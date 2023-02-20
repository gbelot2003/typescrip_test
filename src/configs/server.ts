import express, { Application } from "express"
import { router } from "../routes"
import cors from "cors"
const bp = require("body-parser")

export class Server {

    private app: Application
    private port: string

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3000'
        this.middlewares()
        this.routes()
        this.listen()
    }

    routes() {
        this.app.use(router)
    }

    middlewares() {

        // body parse
        this.app.use(bp)
        this.app.use(bp.urlencoded({ extended: true }))

        //CORS
        this.app.use(cors())
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }
}