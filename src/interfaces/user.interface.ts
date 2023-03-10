import { Model, Optional } from 'sequelize';
import { Auth } from './Auth.interface';

interface UsersAttributes extends Auth {
    id: string;
    name: string;
    state: boolean;
};

/*
We have to declare the AuthorCreationAttributes to
tell Sequelize and TypeScript that the property id,
in this case, is optional to be passed at creation time
*/
interface UsersCreationAttributes
    extends Optional<UsersAttributes, 'id'> { }

interface UsersInstance
    extends Model<UsersAttributes, UsersCreationAttributes>,
    UsersAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export { UsersInstance, UsersAttributes, UsersCreationAttributes }