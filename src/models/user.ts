import { UsersInstance, UsersAttributes, UsersCreationAttributes } from "../interfaces/user.interface";

import { DataTypes } from "sequelize";
import mysqldb from "../configs/connections"

const user = mysqldb.define<UsersInstance>(
    'users',
    {
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.BOOLEAN,
        },
    }
);

export default user