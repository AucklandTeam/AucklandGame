import {
	AllowNull,
	AutoIncrement,
	Column,
	DataType,
	Model,
	PrimaryKey,
	Table
} from 'sequelize-typescript'

export interface ITopicCategory {
	label: string
}

@Table({
	tableName: 'topicCategories'
})
class TopicCategory extends Model<TopicCategory, ITopicCategory> {
	@AutoIncrement
	@PrimaryKey
	@Column(DataType.INTEGER)
	id: number
	@AllowNull(false)
	@Column(DataType.STRING)
	label: string
}

export default TopicCategory
