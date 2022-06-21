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
} from 'sequelize-typescript'
import TopicCategory from 'server/Model/topicCategory'
import User from 'server/Model/user'
import Comment from 'server/Model/comment'

export type IReply = {
	title: string
	text: string
	likeCount: number
	commentId?: number
	authorId: number
}

@Table({
	tableName: 'reply'
})
class Reply extends Model<Comment, IReply> {
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
	@ForeignKey(() => TopicCategory)
	@Column(DataType.INTEGER)
	topicId: number
	@Column(DataType.INTEGER)
	likeCount: number
	@ForeignKey(() => Comment)
	@Column(DataType.INTEGER)
	commentId!: number
	@BelongsTo(() => Comment)
	comment: Comment
	@ForeignKey(() => User)
	@Column(DataType.INTEGER)
	authorId!: number
	@BelongsTo(() => User)
	author: User
}

export default Reply
