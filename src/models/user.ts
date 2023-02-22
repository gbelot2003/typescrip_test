import { DataType, DataTypes } from "sequelize";
import mysqldb from "../configs/connections"

const user = mysqldb.define('users', {
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