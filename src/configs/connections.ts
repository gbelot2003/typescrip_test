import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const db = new Sequelize(process.env.DB_DATABASE || 'db', process.env.DB_USER || "user", process.env.DB_ROOT_PASSWORD || 'pass', {
    host:process.env.DB_HOST,
    dialect: 'mysql', 
})

export default db