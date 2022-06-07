import {AllowNull, AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import TopicCategory from "server/Model/topicCategory";
import User from "server/Model/user";

export interface IComment {
    text: string;
    topicId: number;
    likeCount: number;
    parentId?: number;
    author: number;
}

@Table({
    tableName: 'comments'
})
class Comment extends Model<Comment, IComment> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;
    @AllowNull(false)
    @Column(DataType.STRING)
    text: string;
    @ForeignKey(()=>TopicCategory)
    @Column(DataType.INTEGER)
    topicId: number;
    @ForeignKey(()=>User)
    @Column(DataType.INTEGER)
    author: number;
    @Column(DataType.INTEGER)
    likeCount: number;
    @Column(DataType.INTEGER)
    parentId: number;
}

export default Comment;