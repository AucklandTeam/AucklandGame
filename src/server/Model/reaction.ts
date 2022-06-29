import {AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import User from "server/Model/user";
import Comment from "server/Model/comment";

export interface IReaction {
    id: number;
    commentId: number;
    userId: number;
}

@Table({
    tableName: 'reactions'
})
class Reaction extends Model<Reaction, IReaction> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;
    @ForeignKey(()=>Comment)
    @Column(DataType.INTEGER)
    commentId: number;
    @ForeignKey(()=>User)
    @Column(DataType.INTEGER)
    userId: number;
}

export default Reaction