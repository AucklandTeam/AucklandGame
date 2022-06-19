import {AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";

export interface IUser {
    name: string;
    avatar: string;
}

@Table({
    tableName: 'users'
})
class User extends Model<User, IUser> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;
    @AllowNull(false)
    @Column(DataType.STRING)
    name: string;
    @Column(DataType.STRING)
    avatar: string;
}

export default User;