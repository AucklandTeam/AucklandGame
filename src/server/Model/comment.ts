import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import TopicCategory from "server/Model/topicCategory";
import User from "server/Model/user";

export type IComment = {
    title: string;
    text: string;
    topicId: number;
    likeCount: number;
    parentId?: number;
    authorId: number;
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
    title: string
    @AllowNull(false)
    @Column(DataType.STRING)
    text: string;
    @ForeignKey(()=>TopicCategory)
    @Column(DataType.INTEGER)
    topicId: number;
    @Column(DataType.INTEGER)
    likeCount: number;
    @Column(DataType.INTEGER)
    parentId: number;
    @ForeignKey(()=>User)
    @Column(DataType.INTEGER)
    authorId!: number;
    @BelongsTo(()=>User)
    author: User;
}


export default Comment;