import { DataType, DataTypes } from "sequelize";
import mysqldb from "../configs/connections"

const user = mysqldb.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.BOOLEAN
    }
})

export default user