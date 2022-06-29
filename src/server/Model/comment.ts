import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript'
import User from 'server/Model/user'
import Reply from 'server/Model/reply'
import Topic from 'server/Model/topic'
import Reaction from 'server/Model/reaction'

export type IComment = {
    title: string
    text: string
    topicId: number
    commentId: number
    authorId: number
}

@Table({
    tableName: 'comments',
})
class Comment extends Model<Comment, IComment> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number
    @AllowNull(false)
    @Column(DataType.STRING)
    title: string
    @AllowNull(false)
    @Column(DataType.STRING)
    text: string
    @ForeignKey(() => Topic)
    @Column(DataType.INTEGER)
    topicId: number
    @Column(DataType.INTEGER)
    commentId: number
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    authorId!: number
    @BelongsTo(() => User)
    author: User
    @HasMany(() => Reply)
    answers: Reply[]
    @HasMany(() => Reaction)
    reactions: Reaction[]
}

export default Comment
