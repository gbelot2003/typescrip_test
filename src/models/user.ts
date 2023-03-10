import { UsersInstance, UsersAttributes, UsersCreationAttributes } from "../interfaces/user.interface";

import { DataTypes } from "sequelize";
import db from "../configs/connections"

const user = db.define<UsersInstance>(
    'users',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
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
        password:{
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.BOOLEAN,
        },
    }, 
    {
        timestamps: true,
    }
);

export default user