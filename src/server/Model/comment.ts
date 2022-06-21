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
	Table
} from 'sequelize-typescript'
import TopicCategory from 'server/Model/topicCategory'
import User from 'server/Model/user'
import Reply from 'server/Model/reply'

export type IComment = {
	title: string
	text: string
	topicId: number
	likeCount: number
	commentId: number
	authorId: number
}

@Table({
	tableName: 'comments'
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
	@ForeignKey(() => TopicCategory)
	@Column(DataType.INTEGER)
	topicId: number
	@Column(DataType.INTEGER)
	likeCount: number
	@Column(DataType.INTEGER)
	commentId: number
	@ForeignKey(() => User)
	@Column(DataType.INTEGER)
	authorId!: number
	@BelongsTo(() => User)
	author: User
	@HasMany(() => Reply)
	answers: Reply[]
}

export default Comment
