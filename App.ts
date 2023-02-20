import dotenv from 'dotenv'
import { Server } from './src/configs/server'
import { router } from './src/routes'
dotenv.config()

const app = new Server()
app.routes()

app.listen()