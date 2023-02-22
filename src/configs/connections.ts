import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const mysqldb = new Sequelize(process.env.MYSQLDB_DATABASE || 'db', process.env.MYSQLDB_USER || "user", process.env.MYSQLDB_ROOT_PASSWORD || 'pass', {
    host:'mysql',
    dialect:'mysql', 
    dialectModule: require('mysql2'),
})


export default mysqldb