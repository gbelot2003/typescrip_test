import express, { Application } from "express"
import { router } from "../routes"
import cors from "cors"
import mysqldb from "./connections"
const bp = require("body-parser")
export class Server {

    private app: Application
    private port: string

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3000'
        this.dbConnection()
        this.middlewares()
        this.routes()
        this.listen()
    }

    async dbConnection() {
        try {
            await mysqldb.authenticate()
            console.log("Database online")
        } catch (error) {
            throw new Error()
        }
    }

    routes() {
        this.app.use(router)
    }

    middlewares() {

        // body parse
        this.app.use(bp.urlencoded())
        this.app.use(bp.json({ extends: true }))

        //CORS
        this.app.use(cors())
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }
}