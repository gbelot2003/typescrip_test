import dotenv from 'dotenv'
import { Server } from './src/configs/server'
dotenv.config()

const app = new Server()